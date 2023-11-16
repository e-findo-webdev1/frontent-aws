import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import API from "axios";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Link from "next/link";
import PDF from "../../components/helpers/pdf";

const Co2Calculation = () => {
    const [customer, setCustomer] = useState<any>();
    const [machines, setMachines] = useState<any>();
    const [controlDocuments, setControlDocuments] = useState<any>({set: false});
    const [controlDocumentsLatestYear, setControlDocumentsLatestYear] =
        useState<any>();

    const [startDate, setStartDate] = useState(
        moment().set({hour: 0, minute: 0, second: 0}).toDate()
    );
    const [endDate, setEndDate] = useState(
        moment().set({hour: 23, minute: 59, second: 59}).toDate()
    );
    const [userMessage, setUserMessage] = useState<any>(1);


    useEffect(() => {

        const fetchData = async() => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
                .then((response) => {
                    setCustomer(response.data.Items.filter((client:any) =>
                        client.client_id == JSON.parse(sessionStorage.getItem('company') as string).client_id
                    )[0])
                })
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
                .then((response) => {
                    setMachines(response.data.Items.filter((machine:any) =>
                        machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
                    ))
                    if (machines) {
                        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                            .then((response) => {
                                userMessage == 1 ?
                                    setControlDocuments(response.data.Items.filter((document: any) =>
                                        machines.reduce( function(a: any, b: any){
                                            return a + (b['machine_id']);
                                        }).includes(document.machine_id))

                                    ) : setControlDocuments(response.data.Items.filter((document: any) =>
                                        machines.reduce( function(a: any, b: any){
                                            return a + (b['machine_id']);
                                        }).includes(document.machine_id)));
                                setControlDocumentsLatestYear(response.data.Items.filter((document: any) =>
                                    parseInt(moment(document.timestamp).format("YYYY")) ==
                                    Math.max(response.data.Items.reduce( function(a: any, b: any){
                                        if (!a.includes(parseInt(moment((b['timestamp'])).format("YYYY")))) {
                                            a.push(parseInt(moment((b['timestamp'])).format("YYYY")))
                                            return a
                                        } else {
                                            return a ;
                                        }
                                    }, []))
                                ))
                            })
                    } else {
                        setControlDocuments({set: true})
                    }

                })
        }

        fetchData()


    }, [controlDocuments.set, startDate, endDate, userMessage]);

    const calculateEnergy = (customer: any, amount: any) => {
        const diesel_factor = 3.1380
        const distance = customer.co_distance
        const amount_in_tons = amount/1000
        const quantity_per_trip = customer.co_load
        const trips = ((amount_in_tons / quantity_per_trip) * 2).toFixed()
        const consumption1 = 30
        const consumption2 = 46
        const km_total = parseInt(trips) * distance * 2

        // Not used
        const km_month = parseInt(trips) * distance * 2
        const km_year = km_month * 12

        const payload = customer.co_load
        const maxload = 18.5

        // Full speed formula
        const energy1 = (consumption1 + (consumption2 - consumption1) * (payload / maxload)) / 100

        // Empty journey formula
        const energy2 = consumption1 / 100

        //Energy consumption liters/km
        const energy = (energy1 + energy2) / 2

        return energy
    }
    const calculateCO2 = (customer: any, amount: any) => {

        // $amount is calculated in advance, all weighed/collected materials in kg over the entire time
        const diesel_factor = 3.1380
        const distance = customer.co_distance
        const amount_in_tons = amount/1000
        const quantity_per_trip = customer.co_load
        const trips = ((amount_in_tons / quantity_per_trip) * 2).toFixed()
        const consumption1 = 30
        const consumption2 = 46
        const km_total = parseInt(trips) * distance * 2

        // Not used
        const km_month = parseInt(trips) * distance * 2
        const km_year = km_month * 12

        const payload = customer.co_load
        const maxload = 18.5

        // Full speed formula
        const energy1 = (consumption1 + (consumption2 - consumption1) * (payload / maxload)) / 100

        // Empty journey formula
        const energy2 = consumption1 / 100

        //Energy consumption liters/km
        const energy = (energy1 + energy2) / 2

        // Co2 in kg/km
        const co2km = energy * diesel_factor

        // Total co2 emissions (fictitious) over time at this amount
        const totalco2 = co2km * km_total

        // here a value is added for the previous consumption in a specific year with the entered
        // quantity in tons and number of trips, for comparison with the MCS
        const km_orig = customer.co_orig_trips * distance * 2
        const total_orig = co2km * km_orig

        return totalco2
    }
    //<Link href="/master-data">
    //  <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
    //          hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">Drucken
    // </button>
    //</Link>
    return (
        <div id="content-page" className="overflow-auto h-full px-48">
            <Link href="/reporting/co2-evaluation">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>

            <div className="columns-2 min-w-max">
                <p className="mt-9 text-3xl font-bold mb-10">CO<sub>2</sub>-Auswertung</p>
                <div className="min-w-max">
                <p className="text-xl font-bold mb-6">CO<sub>2</sub> Emission Ursprung
                    {controlDocuments.set != false && controlDocuments.set != true ?
                        " (" + Math.max(controlDocuments.reduce( function(a: any, b: any){
                            if (!a.includes(parseInt(moment((b['timestamp'])).format("YYYY")))) {
                                a.push(parseInt(moment((b['timestamp'])).format("YYYY")))
                                return a
                            } else {
                                return a ;
                            }
                        }, [])) + ")"
                        : ''}</p>
            <table className="text-xs mb-36 min-w-max">
                <tr>
                    <td className="py-1">Entfernung zum Entsorger:</td>
                    <td className="py-1">{customer && customer.co_distance ?
                        customer.co_distance.toFixed(2).
                        replace(".", ",") : 0} km</td>
                </tr>
                <tr>
                    <td className="py-1">Angefallene Menge:</td>
                    <td className="py-1">{
                        controlDocumentsLatestYear ?
                            (controlDocumentsLatestYear.reduce( function(a: any, b: any){
                            return a + b['netto'];
                        }, 0) / 1000).toFixed(2).replace(".", ",") : 0
                        } t</td>
                </tr>
                <tr>
                    <td className="py-1">Menge pro Fahrt:</td>
                    <td className="py-1">{customer && customer.co_load ? customer.co_load.toFixed(2)
                        .replace(".", ","): 0} t</td>
                </tr>
                <tr>
                    <td className="py-1">Hin- und Rückfahrten:</td>
                    <td className="py-1">{controlDocumentsLatestYear ? controlDocumentsLatestYear.length : 0}</td>
                </tr>
                <tr>
                    <td className="py-1">km Leistung gesamt:</td>
                    <td className="py-1">{controlDocumentsLatestYear && customer && customer.co_distance
                        ? (controlDocumentsLatestYear.length * 2 * customer.co_distance).toFixed(3)
                            .replace(".", ",") : 0} km</td>
                </tr>
                <tr>
                    <td className="py-1">CO2-Faktor kg/l Diesel:</td>
                    <td className="py-1">3,138 kg/l</td>
                </tr>
                <tr>
                    <td className="py-1">Energieverbrauch Fahrt Leer:</td>
                    <td className="py-1">30 l/100km</td>
                </tr>
                <tr>
                    <td className="py-1">Energieverbrauch Fahrt Voll</td>
                    <td className="py-1">46 l/100km</td>
                </tr>
                <tr>
                    <td className="py-1">Nutzlast LKW:</td>
                    <td className="py-1">{customer && customer.co_load ? customer.co_load : 0} t</td>
                </tr>
                <tr>
                    <td className="py-1">Nutzlast Max LKW:</td>
                    <td className="py-1">18,50 t</td>
                </tr>
                <tr>
                    <td className="py-1">Formel:</td>
                    <td className="py-1">EV(leer) + ( EVvoll - EVleer ) x (Nlast / Nlmax)</td>
                </tr>
                <tr>
                    <td className="py-1">Energieverbrauch Liter / km:</td>
                    <td className="py-1">{controlDocumentsLatestYear ?
                        (calculateEnergy(customer, controlDocumentsLatestYear.reduce( function(a: any, b: any){
                            return a + b['netto'];
                        }, 0))).toFixed(4).replace(".",",") :
                        0}</td>
                </tr>
                <tr>
                    <td className="py-1">CO2 Emission in kg/km:</td>
                    <td className="py-1">{controlDocumentsLatestYear ?
                        (calculateCO2(customer, controlDocumentsLatestYear.reduce( function(a: any, b: any){
                        return a + b['netto'];
                    }, 0)) / (controlDocumentsLatestYear.length * 2 * customer.co_distance)).toFixed(4)
                            .replace(".",","): 0}</td>
                </tr>
                <tr>
                    <td className="py-1">CO2 Emission gesamt p.a.:</td>
                    <td className="py-1">{controlDocumentsLatestYear ?
                        (calculateCO2(customer, controlDocumentsLatestYear.reduce( function(a: any, b: any){
                        return a + b['netto'];
                    }, 0))).toFixed(2).replace(".", ",") : 0} kg</td>
                </tr>
            </table>
            </div>
                <div className="pt-28 min-w-max">
                    <p className="text-xl font-bold mb-6">CO<sub>2</sub> Emission Einsparung seit Inbetriebnahme eMSS</p>
                    <p className="font-bold mb-6">Vorfracht</p>
                    <table className="text-xs min-w-max">
                        <tr>
                            <td className="py-1">Entfernung zum Entsorger:</td>
                            <td className="py-1">{customer && customer.co_distance ?
                                customer.co_distance.toFixed(2).
                                replace(".", ",") : 0} km</td>
                        </tr>
                        <tr>
                            <td className="py-1">Angefallene Menge:</td>
                            <td className="py-1">{
                                controlDocuments && controlDocuments.set != false && controlDocuments.set != true ?
                                    (controlDocuments.reduce( function(a: any, b: any){
                                        return a + b['netto'];
                                    }, 0) / 1000).toFixed(2).replace(".", ",") : 0
                            } t</td>
                        </tr>
                        <tr>
                            <td className="py-1">Menge pro Fahrt:</td>
                            <td className="py-1">{customer && customer.co_load ? customer.co_load.toFixed(2)
                                .replace(".", ","): 0} t</td>
                        </tr>
                        <tr>
                            <td className="py-1">Hin- und Rückfahrten:</td>
                            <td className="py-1">{controlDocuments ? controlDocuments.length : 0}</td>
                        </tr>
                        <tr>
                            <td className="py-1">km Leistung gesamt:</td>
                            <td className="py-1">{controlDocuments && customer && customer.co_distance
                                ? (controlDocuments.length * 2 * customer.co_distance).toFixed(3)
                                    .replace(".", ",") : 0} km</td>
                        </tr>
                        <tr>
                            <td className="py-1">CO2-Faktor kg/l Diesel:</td>
                            <td className="py-1">3,138 kg/l</td>
                        </tr>
                        <tr>
                            <td className="py-1">Energieverbrauch Fahrt Leer:</td>
                            <td className="py-1">30 l/100km</td>
                        </tr>
                        <tr>
                            <td className="py-1">Energieverbrauch Fahrt Voll</td>
                            <td className="py-1">46 l/100km</td>
                        </tr>
                        <tr>
                            <td className="py-1">Nutzlast LKW:</td>
                            <td className="py-1">{customer && customer.co_load ? customer.co_load : 0} t</td>
                        </tr>
                        <tr>
                            <td className="py-1">Nutzlast Max LKW:</td>
                            <td className="py-1">18,50 t</td>
                        </tr>
                        <tr>
                            <td className="py-1">Formel:</td>
                            <td className="py-1">EV(leer) + ( EVvoll - EVleer ) x (Nlast / Nlmax)</td>
                        </tr>
                        <tr>
                            <td className="py-1">Energieverbrauch Liter / km:</td>
                            <td className="py-1">{controlDocuments
                            && controlDocuments.set != false && controlDocuments.set != true ?
                                (calculateEnergy(customer, controlDocuments.reduce( function(a: any, b: any){
                                    return a + b['netto'];
                                }, 0))).toFixed(4).replace(".",",") :
                                0}</td>
                        </tr>
                        <tr>
                            <td className="py-1">CO2 Emission in kg/km:</td>
                            <td className="py-1">{controlDocuments
                            && controlDocuments.set != false && controlDocuments.set != true ?
                                (calculateCO2(customer, controlDocuments.reduce( function(a: any, b: any){
                                    return a + b['netto'];
                                }, 0)) / (controlDocuments.length * 2 * customer.co_distance)).toFixed(4)
                                    .replace(".",","): 0}</td>
                        </tr>
                        <tr>
                            <td className="py-1">CO2 Emission gesamt p.a.:</td>
                            <td className="py-1">{controlDocuments
                            && controlDocuments.set != false && controlDocuments.set != true ?
                                (calculateCO2(customer, controlDocuments.reduce( function(a: any, b: any){
                                    return a + b['netto'];
                                }, 0))).toFixed(2).replace(".", ",") : 0} kg</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
)
}

export default Co2Calculation