'use client'
import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import API from "axios";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Link from "next/link";
import useSWR from "swr";


const fetcher = (url:  string) => fetch(url).then(r => r.json())

const Co2Evaluation = () => {
    const [customer, setCustomer] = useState<any>();
    const [filteredControlDocuments, setFilteredControlDocuments] = useState<any>();
    const [filteredMachines, setFilteredMachines] = useState<any>();

    const [startDate, setStartDate] = useState(
        moment().set({hour: 0, minute: 0, second: 0}).toDate()
    );
    const [endDate, setEndDate] = useState(
        moment().set({hour: 23, minute: 59, second: 59}).toDate()
    );
    const [userMessage, setUserMessage] = useState<any>(1);

    const {data: clients, error: clientsError, isLoading: clientsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients', fetcher)
    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: controlDocuments, error: controlDocumentsError, isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)

    const getClient = () => {
        if (!clientsLoading && !customer) {
            setCustomer(clients.Items.filter((client:any) =>
                client.client_id == JSON.parse(sessionStorage.getItem('company') as string).client_id
            )[0])
        }
    }
    const getFilteredMachines = () => {
        if (!machinesLoading && !filteredMachines) {
            setFilteredMachines(machines.Items.filter((machine:any) =>
                machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
            ))
        }

    }
    const getFilteredControlDocuments = () => {
        if (!controlDocumentsLoading && filteredMachines && !filteredControlDocuments) {
            if (filteredMachines.length > 1){
                setFilteredControlDocuments(controlDocuments.Items.filter((document: any) =>
                    filteredMachines.reduce( function(a: any, b: any){
                        return a + (b['machine_id']);
                    }).includes(document.machine_id))
                    .filter((document: any) =>
                        document.endOfCycle != undefined &&
                        new Date(document.endOfCycle) > startDate &&
                        new Date(document.endOfCycle) < endDate
                    ))
            }else {
                setFilteredControlDocuments(controlDocuments.Items.filter((document: any) =>
                    filteredMachines[0].machine_id == document.machine_id)
                    .filter((document: any) =>
                        document.endOfCycle != undefined &&
                        new Date(document.endOfCycle) > startDate &&
                        new Date(document.endOfCycle) < endDate
                    ))
            }
            }


    }

    getClient();
    getFilteredMachines();
    getFilteredControlDocuments();
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

        return totalco2.toFixed(2).replace(".", ",")
    }

    return (
        <div id="content-page" className="overflow-auto h-full px-48 max-w-6xl m-auto">
            <Link href="/reporting">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="mt-9 text-3xl font-bold mb-5">CO<sub>2</sub>-Auswertung</p>
            <p className="text-sm">Verehrter Kunde,<br/>
                <br/>
                {userMessage == 1 ? 'durch den Einsatz unserer innovativen Technologie, Eco-Storage-Bridge,\n' +
                    '                tragen Sie erheblich zum Umweltschutz bei. Das bedeutet für Sie, dass\n' +
                    '                Sie seit der Inbetriebnahme Ihres e-findo MehrWert-Speicher-System bis\n' +
                    '                zum heutigen Tag, eine Co2 Einsparung erreicht haben von' :
                    'durch den Einsatz unserer innovativen Technologie, Eco-Storage-Bridge,\n' +
                    'tragen Sie erheblich zum Umweltschutz bei. Das bedeutet für Sie, dass \n' +
                    `Sie seit dem ${moment(startDate).format('D.MM.YYYY')} bis zum
        ${moment(endDate).format('D.MM.YYYY')}, eine Co2 Einsparung erreicht haben von`
                }</p>
            <div className="mx-auto w-80 h-20 mt-16 p-3.5 border-gray-400 bg-accent-color-green
                    sm:rounded-lg shadow-md border flex max-w-max px-10">
                <span className="text-3xl font-bold m-auto">{
                    customer && customer.co_load && customer.co_distance
                    && filteredMachines && !machinesLoading && !controlDocumentsLoading  && filteredControlDocuments && filteredControlDocuments.length >1 ?
                    calculateCO2(customer, filteredControlDocuments.reduce( function(a: any, b: any){
                        return a + b['netto'];
                    }, 0)) + ' kg'
                        : customer && customer.co_load && customer.co_distance
                        && filteredMachines && !machinesLoading && !controlDocumentsLoading  && filteredControlDocuments && filteredControlDocuments[0] ?
                            calculateCO2(customer, parseInt(filteredControlDocuments[0].netto)) + ' kg' : '0 kg'}</span>
            </div>
            <p className="mt-9 mb-16 text-sm font-bold text-center">
                Herzlichen Glückwunsch!
            </p>
            <hr/>
            <div className="mt-5 flex-row">
                <Link href="co2-evaluation/co2-calculation">
                    <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-sm">Berechnung anzeigen</button>
                </Link>
                <div className="flex space-x-2 mb-0.5 max-w-max">
                    <span>Von:</span>
                    <DatePicker
                        dateFormat="d.MM.yyyy"
                        selected={startDate}
                        onChange={(date:Date) => {setStartDate(date); setFilteredControlDocuments(undefined);
                    setUserMessage(2)}}
                                className="border text-center rounded w-28 font-light"/>
                </div>
                <div className="flex space-x-3.5">
                    <span>Bis:</span>
                    <DatePicker
                        dateFormat="d.MM.yyyy"
                        selected={ endDate}
                        onChange={(date:Date) => {setEndDate(
                        moment(date).set({hour: 23, minute: 59, second: 59}).toDate()
                    ); setFilteredControlDocuments(undefined); setUserMessage(2)}}
                                className="border text-center rounded w-28 font-light"/>
                </div>

            </div>
        </div>
    )
}
//<div className="mt-5 ml-10 flex space-x-3.5">
   // <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
      //                  hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Drucken</button>
//</div>

export default Co2Evaluation