import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import API from 'axios';

const MachineStorageHistory = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());
    const [data, setData] = useState<any[]>([]);
    const [machinesData, setMachinesData] = useState<any[]>([]);

    useEffect(() => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/items';

        API.get(apiName)
            .then((response) => {
                setData(response.data.flat())
            })
            .catch((error) => {
                console.log(error.response);
            });

        const newEndDate = new Date();
        newEndDate.setDate(endDate.getDate() + 1)
        newEndDate.setHours(0,0,0,0);
        setNewEndDate(newEndDate)
        startDate.setHours(0,0,0,0)

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
            .then((response) => {
                setMachinesData(response.data.Items.filter((item: any) => item.machine_id == pid.id));
            })
            .catch((error) => {
                console.log(error.response);
            });


    },[startDate, endDate]);

    const router = useRouter()
    const pid = router.query

    const manualTara = () => {
       // set the isNetto from last item to true
        let newData = data
            .filter(item => item.id == pid.id )
            .filter(item =>
                new Date(item.timestamp) > startDate &&
                new Date(item.timestamp) < newEndDate)
            .sort(function(a: any, b: any){
                // @ts-ignore
                return new Date(b.timestamp) - new Date(a.timestamp)
            })
        newData[0]['isNetWeight'] = 'true'
        newData[0]['tareWeight'] = parseInt(newData[0]['indicateWeight'])
        setData(newData)
        updateStatus('Container tariert (3)');
    }

    const sendData = (responseBody: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const updateStatus = (status: string) => {
        let responseBody = machinesData[0]
        responseBody.status = status
        sendData(responseBody)
    }

    const refreshList = () => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/items';

        API.get(apiName)
            .then((response) => {
                setData(response.data.flat())
            })
            .catch((error) => {
                console.log(error.response);
            });
    }

    return(
        <div id="content-page" className="mx-10 p-10">
            <p className="my-9 text-3xl font-bold">Übersicht</p>
            <span className="text-sm font-bold">Status Maschine</span>
            <div className="text-sm flex">
                <div className="flex space-x-9 mt-4 mb-2">
                    <div className="flex space-x-2">
                        <span className="m-auto">Von:</span>
                        <DatePicker className="shadow-md border text-ce,nter p-0.5 w-full"
                                    dateFormat="yyyy/MM/dd"
                                    selected={startDate}
                                    onChange={(date:Date) => setStartDate(date)}/>
                    </div>
                    <div className="flex space-x-2">
                        <span className="m-auto">Bis:</span>
                        <DatePicker className="shadow-md border text-center p-0.5 m-0"
                                    dateFormat="yyyy/MM/dd"
                                    selected={endDate}
                                    onChange={(date:Date) => setEndDate(date)}/>
                    </div>
                    <button className="p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border" onClick={()=>{refreshList()}}>Refresh</button>
                </div>
            </div>
            <div className="shadow-md border h-72 overflow-auto mt-5">
                <table className="flex-row w-full table-auto">
                    <thead className="sticky top-0 bg-white rounded-lg">
                    <tr className="text-xs text-gray-500 border-b text-left text-center">
                        <th className="font-normal">Masch.-ID</th>
                        <th className="font-normal">Typ</th>
                        <th className="font-normal">Datum erfasst</th>
                        <th className="font-normal">Brutto</th>
                        <th className="font-normal">Tara (Log)</th>
                        <th className="font-normal">Tara (Masch)</th>
                        <th className="font-normal">Netto (Log)</th>
                        <th className="font-normal">Netto (Masch)</th>
                        <th className="font-normal">kg/h</th>
                        <th className="font-normal">Warenart</th>
                        <th className="font-normal">Netto</th>
                        <th className="font-normal">Positiv</th>
                        <th className="font-normal">Übergew.</th>
                        <th className="font-normal">Stabil</th>
                        <th className="font-normal">Print</th>
                        <th className="font-normal">Printausgabe</th>
                        <th className="font-normal">Status Maschine</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50 text-center">
                    {data !== undefined
                        ? data
                            .filter(item => item.id == pid.id )
                            .filter(item =>
                                new Date(item.timestamp) > startDate &&
                                new Date(item.timestamp) < newEndDate)
                            .sort(function(a: any, b: any){
                                // @ts-ignore
                                return new Date(b.timestamp) - new Date(a.timestamp)
                            })
                            .map((item: any) =>
                            <tr key={item.id} className="text-xs border-t">
                                <td>{item.id}</td>
                                <td>{item.machineType}</td>
                                <td>
                                    {item.timestamp.slice(0,10)},
                                    {item.timestamp.slice(10,16)}
                                </td>
                                <td>{parseInt(item.indicateWeight) + parseInt(item.tareWeight)} kg</td>
                                <td>{parseInt(item.tareWeight)} kg</td>
                                <td>{parseInt(item.tareWeight)} kg</td>
                                <td>{parseInt(item.indicateWeight)} kg</td>
                                <td>{parseInt(item.indicateWeight)} kg</td>
                                <td>{item.averageThroughput ? item.averageThroughput.toFixed(2) : "0"}</td>
                                <td></td>
                                <td>
                                    {
                                        item.isNetWeight == "true"
                                            ? "Ja"
                                            : "Nein"
                                    }
                                </td>
                                <td>
                                    {
                                        item.isPositiveWeight == "true"
                                            ? "Ja"
                                            : "Nein"
                                    }
                                </td>
                                <td>
                                    {
                                        item.isOverweight == "true"
                                            ? "Ja"
                                            : "Nein"
                                    }
                                </td>
                                <td>
                                    {
                                        item.isStable == "true"
                                            ? "Ja"
                                            : "Nein"
                                    }
                                </td>
                                <td>
                                    {
                                        item.isPrintTriggered == "true"
                                            ? "Ja"
                                            : "Nein"
                                    }
                                </td>
                                <td>{item.printContent}</td>
                                <td>{item.status}</td>
                            </tr>
                        )
                        : ""}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MachineStorageHistory