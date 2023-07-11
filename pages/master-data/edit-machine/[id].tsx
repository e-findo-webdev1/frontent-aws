import API from "axios";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import fromHex from "../../components/helpers/fromHex";

const EditMachine = () => {
    const router = useRouter()
    const pid = router.query

    const [data, setData] = useState({
        machine_id: 0, machineType: "", machineName: "", group: "", waretype: "", quality: "",
        index: "", maxNetto: 0, minContainer_weight: 0, maxContainer_weight: 0, averageThroughput: 0, manualTara: 0,
        minForFullStart: 0, newFT111: false, automaticTara: false, fillingType: "", plandateCalculation: "", status: "",
        client: "", averageThroughputLastHour: 0, isDateConfirmed: false, lastFilling: 0, lastIndicate: 0,
        lastStandstill: 0, lastTara: 0, pickup_date: "", price_list: {}, tenLastIndicates: 0, totalFillingTime: 0,
        totalStandstill: 0
        }
    );
    const [waretypes, setWaretypes] = useState<any>();
    const [clients, setClients] = useState<any>();
    const [priceMatrices, setPriceMatrices] = useState<any>();
    const [indeces, setIndeces] = useState<any>([]);
    const [company, setCompany] = useState<any>();

    useEffect(() => {

        if (priceMatrices) {
            let indecesList: any = []
            for (let matrix in priceMatrices) {
                if (priceMatrices[matrix].indeces) {
                    for (let index in priceMatrices[matrix].indeces) {
                        indecesList.push(priceMatrices[matrix].indeces[index])
                    }
                }
                if (indeces == "") {
                    setIndeces(indecesList)
                }
            }
        }
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setData(response.data.Items.filter((item: any) => item.machine_id == pid.id)[0]);
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
            .then((response) => {
                setWaretypes(response.data.Items);
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setClients(response.data.Items);
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
            .then((response) => {
                setPriceMatrices(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });


        setCompany(sessionStorage.getItem("company"))


    }, [] );

    const responseBody = {
        automaticTara: false,
        averageThroughput: 0,
        averageThroughputLastHour: 0,
        client: "",
        fillingType: "",
        group: "",
        index: "",
        isDateConfirmed: false,
        lastFilling: 0,
        lastIndicate: 0,
        lastStandstill: 0,
        lastTara: 0,
        machineName: "",
        machineType: "",
        machine_id: 0,
        manualTara: 0,
        maxContainer_weight: 0,
        maxNetto: 0,
        minContainer_weight: 0,
        minForFullStart: 0,
        newFT111: false,
        pickup_date: "",
        plandateCalculation: "",
        price_list: {},
        quality: "",
        status: "",
        tenLastIndicates: 0,
        totalFillingTime: 0,
        totalStandstill: 0,
        waretype: ""
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.automaticTara = data.automaticTara
        responseBody.averageThroughput = data.averageThroughput
        responseBody.averageThroughputLastHour = data.averageThroughputLastHour
        responseBody.client = data.client
        responseBody.fillingType = data.fillingType
        responseBody.group = data.group
        responseBody.index = data.index
        responseBody.isDateConfirmed = data.isDateConfirmed
        responseBody.lastFilling = data.lastFilling
        responseBody.lastIndicate = data.lastIndicate
        responseBody.lastStandstill = data.lastStandstill
        responseBody.lastTara = data.lastTara
        responseBody.machineName = data.machineName
        responseBody.machineType = data.machineType
        responseBody.machine_id = data.machine_id
        responseBody.manualTara = data.manualTara
        responseBody.maxContainer_weight = data.maxContainer_weight
        responseBody.maxNetto = data.maxNetto
        responseBody.minContainer_weight = data.minContainer_weight
        responseBody.minForFullStart = data.minForFullStart
        responseBody.newFT111 = data.newFT111
        responseBody.pickup_date = data.pickup_date
        responseBody.plandateCalculation = data.plandateCalculation
        responseBody.price_list = data.price_list
        responseBody.quality = data.quality
        responseBody.status = data.status
        responseBody.tenLastIndicates = data.tenLastIndicates
        responseBody.totalFillingTime = data.totalFillingTime
        responseBody.totalStandstill = data.totalStandstill
        responseBody.waretype = data.waretype
        sendData(responseBody)
    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.replace('/');
    }

    const deleteMachine = async () => {
        await API.delete('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines',
            { data: { machine_id: data.machine_id } })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.replace('/');
    }

    return(
        <div id="content-page" className="mx-20 overflow-auto h-full">
            <Link href={company ? "/master-data/"+company.company_id : ""}>
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                </button>
            </Link>
            <p className="mb-7 text-3xl font-bold">Maschinen {pid.id}
                {data && data.machineName != '' ? ' (' +  data.machineName + ')' : ''}</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-sm">
                        <tbody>
                        <tr>
                            <td className="p-1 pl-0">Maschinen ID</td>
                            <td className="p-1 pl-0">
                                <input id="machineID" className="border rounded w-full pl-2.5 py-0.5"
                                       required={true}
                                       defaultValue={pid.id}
                                       onChange={(e)=>
                                           setData({...data, machine_id: parseInt(e.target.value)})}/>
                            </td>
                            <td className="p-1 pl-3">Durchsatz Durchschnitt</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       value={data ? Math.floor(data.averageThroughput) : ''}
                                       onChange={(e)=>
                                           setData({...data, averageThroughput: parseInt(e.target.value)})}/>
                            </td>
                        </tr>
                        <tr className="h-8">
                            <td className="p-1 pl-0">Maschinentyp</td>
                            <td className="p-1 pl-0">
                                <select id="machineType" className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={data?data.machineType:'esb'}
                                        onChange={(e)=>
                                            setData({...data, machineType: e.target.value})}>
                                    <option>esb</option>
                                    <option>bw</option>
                                    <option>Silo</option>
                                </select>
                            </td>
                            <td className="p-1 pl-3">Man. Tara (Maschine)</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       value={data ? data.manualTara : '0'}
                                       onChange={(e)=>
                                           setData({...data, manualTara: parseInt(e.target.value)})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0 pr-12">Machinenbezeichnung</td>
                            <td className="p-1 pl-0">
                                <input id="machineName" className="border rounded w-full pl-2.5 py-0.5"
                                       required={true}
                                       defaultValue={data ? data.machineName : ''}
                                       onChange={(e)=>
                                           setData({...data, machineName: e.target.value})}/>
                            </td>
                            <td className="p-1 pl-3">Min. Füllmenge für Füll-Start</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       defaultValue={data ? data.minForFullStart : '0'}
                                       onChange={(e)=>
                                           setData({...data, minForFullStart: parseInt(e.target.value)})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Gruppierung</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       defaultValue={data ? data.group : ''}
                                       onChange={(e)=>
                                           setData({...data, group: e.target.value})}/>
                            </td>
                            <td className="p-1 pl-3 pr-12">Neue Berechnung FT-111 (automatisch)</td>
                            <td className="p-1 pl-0.5">
                                <input type="checkbox"
                                       checked={data ? data.newFT111 : false}
                                       onChange={(e)=>
                                           setData({...data, newFT111: e.target.checked})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Warentyp</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5 appearance-none
                            border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={data ? data.waretype : ''}
                                        onChange={(e)=>
                                            setData({...data, waretype: e.target.value})}>
                                    {waretypes ?
                                        waretypes
                                            .sort(function (a: any, b: any) {
                                            if (a.name_waretype < b.name_waretype) {
                                                return -1;
                                            }
                                            if (a.name_waretype > b.name_waretype) {
                                                return 1;
                                            }
                                            return 0;
                                            })
                                            .map((item: any)=>
                                        <option key={item.waretype_id}>{item.name_waretype}</option>
                                    )
                                        : ''}
                                </select>
                            </td>
                            <td className="p-1 pl-3">Einmaliges Tarieren</td>
                            <td className="p-1 pl-0.5">
                                <input type="checkbox"
                                       checked={data ? data.automaticTara : false}
                                       onChange={(e)=>
                                           setData({...data, automaticTara: e.target.checked})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Warenqualität</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={data ? data.quality : ''}
                                        onChange={(e)=>
                                            setData({...data, quality: e.target.value})}>
                                    <option>normal</option>
                                    <option>gebrochen</option>
                                </select>
                            </td>
                            <td className="p-1 pl-3">Befüllart</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5 appearance-none
                                border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={data ? data.fillingType : ''}
                                        onChange={(e)=>
                                            setData({...data, fillingType: e.target.value})}>
                                    <option>Automatisch</option>
                                    <option>Manuell</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Index</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5 appearance-none
                                border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={ data.index }
                                        onChange={(e) =>
                                            setData({...data, index: e.target.value})}>
                                    <option key={"noIndex"}>{"- kein Index -"}</option>
                                    {priceMatrices ? indeces.map((index: any) =>
                                        <option key={index}>{index}</option>
                                    ): ""}

                                </select>
                            </td>
                            <td className="p-1 pl-3">Plandatum Berechnung</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5
                                appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={data.plandateCalculation}
                                        onChange={(e)=>
                                            setData({...data, plandateCalculation: e.target.value})}>
                                    <option>Plandatum V.1</option>
                                    <option>Plandatum V.2</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Max Netto</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       value={data ? data.maxNetto : 0}
                                       onChange={ (e)=>
                                           setData({...data, maxNetto: parseInt(e.target.value)})}/>
                            </td>
                            <td className="p-1 pl-3">Status</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5
                                appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        value={data ? data.status : ''}
                                        onChange={(e)=>
                                            setData({...data, status: e.target.value})}>
                                    <option>Wird befüllt (1)</option>
                                    <option>kein Container (2)</option>
                                    <option>Container tariert (3)</option>
                                    <option>Übergewicht (4)</option>
                                    <option>Fertig (5)</option>
                                    <option>Abholung (6)</option>
                                    <option>Stillstand (7)</option>
                                    <option>Containertausch (8)</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Min Container Gewicht</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       value={data ? data.minContainer_weight : 0}
                                       onChange={(e)=>
                                           setData({...data, minContainer_weight: parseInt(e.target.value)})}/>
                            </td>
                            <td className="p-1 pl-3">Kunde</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5
                                appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                        defaultValue={data ? data.client : ''}
                                        onChange={(e)=>
                                            setData({...data, client: e.target.value})}>
                                    {clients ? clients.map((item: any)=>
                                        <option key={item.client_id}>{item.client_name}</option>) : ''}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Max Container Gewicht</td>
                            <td className="p-1 pl-0">
                                <input className="border rounded w-full pl-2.5 py-0.5"
                                       value={data ? data.maxContainer_weight : 0}
                                       onChange={(e)=>
                                           setData({...data, maxContainer_weight: parseInt(e.target.value)})}/>
                            </td>
                        </tr>
                        <tr>
                            <td/>
                        </tr>
                        <tr>
                            <td/>
                            <td/>
                            <td/>
                            <td className="p-1 pl-0">
                                <button className="mb-10 float-right border p-1.5 px-3.5
                                    font-bold border-accent-color-1 bg-accent-color-4
                                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit">
                                    Speichern
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <button className="mt-9 border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                                       hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"
                        onClick={()=>deleteMachine()}
                >
                    Maschine entfernen
                </button>
            </div>
        </div>
    )
}

export default EditMachine