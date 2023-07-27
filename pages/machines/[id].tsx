import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import API from 'axios';
import moment from "moment";

const MachineStorageHistory = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());
    const [data, setData] = useState<any[]>([]);
    const [machinesData, setMachinesData] = useState<any[]>([{
        machine_id: 0
    }]);
    const [page, setPage] = useState<any>(1);
    const [listLength, setListLength] = useState<any>();
    const [pageList, setPageList] = useState<any[]>([]);
    const [intervalCount, setIntervalCount] = useState(0);

    useEffect(() => {

        const newEndDate = new Date();
        startDate.setDate(startDate.getDate())
        setStartDate(startDate)
        newEndDate.setDate(endDate.getDate() + 1)
        newEndDate.setHours(0,0,0,0);
        setNewEndDate(newEndDate)
        startDate.setHours(0,0,0,0)

        setData([])
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/log-data/'
            + machinesData[0].machine_id + "/" + moment(startDate.setHours(2,0,0,0) ).unix() + "/" + moment(newEndDate).unix() + "/" + page;

        API.get(apiName)
            .then((response) => {
                setData(response.data[0])
                setListLength(response.data[1])
                const newPageList = []
                if (pageList.length == 0) {
                    for (let i = 1; i < Math.ceil(listLength/100) + 1; i++) {
                        newPageList.push(i)
                    }
                    setPageList(newPageList)
                }
            })
            .catch((error) => {
                console.log(error.response);
            });


        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
            .then((response) => {
                setMachinesData(response.data.Items.filter((item: any) => item.machine_id == pid.id));
            })
            .catch((error) => {
                console.log(error.response);
            });
        // wait 5 s before cause a re-render
        setTimeout(() => {
            setIntervalCount(count => count + 1);
        }, 1000 * 140);
    },[startDate,pageList, endDate, page, intervalCount]);

    const router = useRouter()
    const pid = router.query

    let averageThroughputInLastHour
    data !== undefined
        ? averageThroughputInLastHour = data
            .filter(item => item.id == pid.id )
            .filter(item =>
                new Date(item.published_at) > moment().subtract(1, 'h').toDate() &&
                new Date(item.published_at) < moment().toDate())
            .reduce((acc, cur)=>((acc = acc + cur.averageThroughput), acc), 0)
            /
            data
            .filter(item => item.id == pid.id )
            .filter(item =>
                new Date(item.published_at) > moment().subtract(1, 'h').toDate() &&
                new Date(item.published_at) < moment().toDate()).length
        : ''
    const manualTara = () => {
       // set the isNetto from last item to true
        let newData = data
            .filter(item => item.id == pid.id )
            .filter(item =>
                new Date(item.published_at) > startDate &&
                new Date(item.published_at) < newEndDate)
            .sort(function(a: any, b: any){
                // @ts-ignore
                return new Date(b.published_at) - new Date(a.published_at)
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
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/log-data/'
            + machinesData[0].machine_id + "/" + moment(startDate).unix() + "/" + moment(endDate).unix() + "/" + page

        API.get(apiName)
            .then((response) => {
                setData(response.data[0])
                setListLength(response.data[1])
            })
            .catch((error) => {
                console.log(error.response);
            });

    }

    const changePage = (page: number) => {
        updatePageList(page)
        setPage(page)

    }

    const updatePageList = (page: number) => {
        const lastPage = Math.ceil(listLength/100)
        if (page < 5 && lastPage > 4) {
            const newPageList = []
            if (pageList.length == 0) {
                for (let i = 1; i < Math.ceil(listLength/100) + 1; i++) {
                    newPageList.push(i)
                }
                setPageList(newPageList)
            }
        }
        if (page == 4 && lastPage > 4) {
            const newPageList = []
            if (pageList.length == 0) {
                for (let i = 1; i < Math.ceil(listLength/100) + 1; i++) {
                    newPageList.push(i)
                }
                setPageList(newPageList)
            }
        }

        if (page > 3 && page + 2 < lastPage) {
            setPageList([1, page - 2, page -1, page, page + 1, page +2])
        }
        if (page > 4 && page + 1 < lastPage) {
            setPageList([page - 2, page -1, page, page + 1, page + 2])
        }
        if (page > 4 && page  == lastPage) {
            setPageList([lastPage - 3, lastPage -2, lastPage -1, lastPage])
        }
    }

    return(
        <div id="content-page" className="mx-10 p-10">
            <p className="text-3xl font-bold">Übersicht</p>
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
                </div>

            </div>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Zeit seit Stellung: {
                machinesData.length != 0 && machinesData[0].timeOfContainerTara != 0 &&
                machinesData[0].timeOfContainerTara
                    //TO-DO translate time outputs to german
                    ? "ca. " + moment(machinesData[0].timeOfContainerTara).fromNow()
                    : "ca. 0 Stunden"}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Füllzeit seit Stellung: {
                machinesData.length != 0 && machinesData[0].timeOfFillingStart != 0 && machinesData[0].timeOfFillingStart
                    //TO-DO translate time outputs to german
                ?  machinesData[0].totalFillingTime < 60
                    ? machinesData[0].totalFillingTime + " Minuten"
                    : "ca. " + Math.floor(machinesData[0].totalFillingTime /60) + " Stunden"
                : "ca. 0 Stunden"}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Stillstand seit Produktionszeit: {
                machinesData.length != 0
                    //TO-DO translate time outputs to german
                    ? machinesData && (machinesData[0].totalStandstill / 3600000) < 1
                        ? " ca. " + Math.ceil(machinesData[0].totalStandstill / 3600000 * 60) + " Minuten"
                        : machinesData[0].totalStandstill / 3600000 > 1
                            ? " ca. " + Math.ceil(machinesData[0].totalStandstill / 3600000) + " Stunden"
                            : ""
                    : ""}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Letzte Befüllung: { machinesData.length != 0 && machinesData[0].lastFilling
                  && machinesData[0].lastFilling != 0
                    ? moment(machinesData[0].lastFilling).format('DD.MM.YYYY, HH:mm')
                    : 'ca. 0 Stunden'} {
                machinesData.length != 0 && machinesData[0].lastFilling != 0 && machinesData[0].lastFilling
                    //TO-DO translate time outputs to german
                    ? "(" + moment(machinesData[0].lastFilling).fromNow() + ")"
                    : ""}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Zeit seit Füllstart: { machinesData.length != 0 && machinesData[0].firstFilling != 0 && machinesData[0].firstFilling
                    //TO-DO translate time outputs to german
                    ? "ca. " + moment(machinesData[0].firstFilling).fromNow() + " (" +
                                moment(machinesData[0].firstFilling).format('DD.MM.YYYY, HH:mm') + ")"
                    : "ca. 0 Stunden"}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Geschwindigkeit letzte Stunde: { machinesData.length != 0 && machinesData[0].averageThroughput != 0
                //TO-DO translate time outputs to german
                //@ts-ignore
                ? "ca. "  + Math.floor(machinesData[0].averageThroughputInLastHour) + " kg/h"
                : "ca. 0 kg/h"}</button>

            <div>
                <p className="text-xs">Seite:
                    {page > 4
                    ? <><button className="underline mx-1"
                        onClick={()=>{changePage(1);}}>
                            1
                    </button>| ... </>
                        : ""}
                    {pageList ? pageList.map((pages: number)=>
                    <button key={pages}
                        onClick={()=>changePage(pages)}
                        className={ pages == page ? "font-bold underline" :"underline"}
                    >
                        <span className="font-normal">{pages != 1 ? "|" : ""}</span><span className="mx-1">{pages}</span>
                    </button>)
                        : ""}
                    {listLength>0 && page +2< Math.ceil(listLength/100) && Math.ceil(listLength/100) > 6
                        ? "| ... |" : ""} {listLength > 0 && page + 1< Math.ceil(listLength/100) ?
                        <button className={ page == Math.ceil(listLength/100) ? "font-bold underline" :"underline"}
                        onClick={()=>changePage(Math.ceil(listLength/100))}>
                            {Math.ceil(listLength/100) > 6  && page +2< Math.ceil(listLength/100)? Math.ceil(listLength/100) : ''}
                        </button>
                        : ""}
                </p>
            </div>

            <div className="shadow-md border h-[20rem] overflow-auto mt-5">
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
                            .filter(item => item.machine_id == pid.id)
                            .filter(item =>
                                item.published_at > moment(startDate).unix() &&
                                item.published_at < moment(newEndDate).unix() )
                            .sort(function(a: any, b: any){
                                // @ts-ignore
                                return new Date(b.published_at) - new Date(a.published_at)})
                            .map((item: any) =>
                            <tr key={item.published_at} className="text-xs border-t">
                                <td>{item.machine_id}</td>
                                <td>{item.machineType}</td>
                                <td>
                                    {moment.unix(item.published_at).utc().format('DD.MM.YYYY')},
                                    {moment.unix(item.published_at).utc().format(' HH:mm')}
                                </td>
                                <td>{data && item.isNetWeight == "true" ?
                                    parseInt(item.indicateWeight) + parseInt(item.tareWeight)
                                    : parseInt(item.indicateWeight)} kg</td>
                                <td>{parseInt(item.tareWeight)} kg</td>
                                <td>{parseInt(item.tareWeight)} kg</td>
                                <td className={data && item.isPositiveWeight == "true" ? "" : "text-red-500"}>
                                    {data && item.isNetWeight == "true" ? parseInt(item.indicateWeight) :
                                        parseInt(item.indicateWeight) - parseInt(item.tareWeight)} kg</td>
                                <td className={data && item.isPositiveWeight == "true" ? "" : "text-red-500"}>
                                    {data && item.isNetWeight == "true" ? parseInt(item.indicateWeight) :
                                        parseInt(item.indicateWeight) - parseInt(item.tareWeight)} kg</td>
                                <td>{item.averageThroughput ? item.averageThroughput.toFixed(2) : "0"}</td>
                                <td>{machinesData ? machinesData[0].waretype : ''}</td>
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