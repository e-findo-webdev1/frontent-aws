'use client'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import API from 'axios';
import moment from "moment";
import Link from "next/link";
import useSWR from "swr";
import {machine} from "os";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
const MachineStorageHistory = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());
    const [data, setData] = useState<any[]>();
    const [page, setPage] = useState<any>(1);
    const [listLength, setListLength] = useState<any>();
    const [pageList, setPageList] = useState<any>();
    const [test, setTest] = useState<any>({test: false})
    const [status, setStatus] = useState<any>('- Alle -')

    const [machineLog, setMachineLog] = useState<any>()

    const router = useRouter()
    const pid = router.query

    useEffect(() => {
        const newDate = new Date();
        startDate.setDate(startDate.getDate())
        setStartDate(startDate)
        newDate.setDate(endDate.getDate() + 1)
        newDate.setHours(0, 0, 0, 0);
        setNewEndDate(newDate)
        startDate.setHours(0, 0, 0, 0)
    }, []);

    const {data: machinesData, error: machinesDataError,
        isLoading: machinesDataLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: logData, error: logDataError,
        isLoading: logDataLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/log-data/'
    + pid.id as string + "/" + moment(startDate.setHours(2, 0, 0, 0))
        .unix() + "/" + moment(newEndDate).unix() + "/" + page, fetcher)
    const filterMachine = () => {
        if (!machinesDataLoading && !machineLog) {
            setMachineLog(machinesData.Items.filter((item: any) => item.machine_id == pid.id)[0]);
        }
    }

    const filterData = () => {
        if (!logDataLoading && !data) {
            if (status != '- Alle -') {
                setData(logData[0].filter((log: any) => log.status.includes(status)))
            } else {
                setData(logData[0])
            }
        }
    }
    const createPagination = () => {
        if (logData && !pageList) {
            if (logData[1] != '0') {
                setListLength(logData[1])
            }
            const newPageList = []
            for (let i = 1; i < listLength + 1; i++) {
                newPageList.push(i)
                setPageList(newPageList)
            }
        }

    }

    const changePage = (page: number) => {
        updatePageList(page)
        setPage(page)
        setData(undefined);
        filterData();
    }

    const updatePageList = (page: number) => {
        const lastPage =listLength;
        const visiblePages = [];

        if (lastPage > 4) {
            if (page <= 4) {
                visiblePages.push(1, 2, 3, 4, 5);
            } else if (page >= lastPage - 2) {
                visiblePages.push(lastPage - 3, lastPage - 2, lastPage - 1, lastPage);
            } else {
                visiblePages.push(page - 1, page, page + 1);
            }

            setPageList(visiblePages);
        }
    };

    setTimeout(() => {
        if (test.test) {
            setTest({test: false})
        } else {
            setTest({test: true})
        }
    }, 1000 * 130);

    filterMachine();
    filterData();
    createPagination();


    const changeStartDate = (date: any) => {
        if (moment(date) < moment(endDate)) {
            setStartDate(date);
        }
        setData(undefined);
        setPageList(undefined);
    }

    const changeEndDate = (date: any) => {
        setEndDate(date);
        setData(undefined);
        setPageList(undefined);
    }

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <Link href="/">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="text-3xl font-bold mt-10">Übersicht</p>
            <span className="text-sm font-bold">Status Maschine</span>
            <div className="text-sm flex">
                <div className="flex space-x-9 mt-4 mb-2">
                    <div className="flex space-x-2">
                        <span className="m-auto">Von:</span>
                        <DatePicker className="shadow-md border text-center p-0.5 w-full"
                                    dateFormat="yyyy/MM/dd"
                                    selected={startDate}
                                    onChange={(date:Date) => changeStartDate(date)}/>
                    </div>
                    <div className="flex space-x-2">
                        <span className="m-auto">Bis:</span>
                        <DatePicker className="shadow-md border text-center p-0.5 m-0"
                                    dateFormat="yyyy/MM/dd"
                                    selected={endDate}
                                    onChange={(date:Date) => changeEndDate(date)}/>
                    </div>
                    <div className="flex space-x-2">
                        <span className="m-auto">Status:</span>
                        <select id="machineType"
                                className="pl-2.5 py-0.5 shadow-md border text-center p-0.5 m-0 appearance-none
                                        bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                        bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                        [background-position-y:5px] w-44"
                                value={status}
                                onChange={(e)=>
                                    setStatus(e.target.value)}>
                            <option>- Alle -</option>
                            <option>Wird beffult (1)</option>
                            <option>kein Container (2)</option>
                            <option>kein Container (2) -clear-</option>
                            <option>Container tariert (3)</option>
                            <option>Container tariert (3) -tara-</option>
                            <option>Abholung (6)</option>
                            <option>Abholung (6) -clear-</option>
                            <option>Standstill (7)</option>
                            <option>Containertausch (8)</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Zeit seit Stellung: {machineLog && machineLog.timeOfContainerTara != 0 &&
                machineLog.timeOfContainerTara
                    //TO-DO translate time outputs to german
                    ? "ca. " + moment(machineLog.timeOfContainerTara).fromNow()
                    : "ca. 0 Stunden"}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Füllzeit seit Stellung: { machineLog && machineLog.timeOfFillingStart != 0 && machineLog.timeOfFillingStart
                    //TO-DO translate time outputs to german
                ?  machineLog.totalFillingTime < 60
                    ? machineLog.totalFillingTime + " Minuten"
                    : "ca. " + Math.floor(machineLog.totalFillingTime /60) + " Stunden"
                : "ca. 0 Stunden"}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Stillstand seit Produktionszeit: {
                machineLog
                    //TO-DO translate time outputs to german
                    ? !machinesDataLoading && (machineLog.totalStandstill / 3600000) < 1
                        ? " ca. " + Math.ceil(machineLog.totalStandstill / 3600000 * 60) + " Minuten"
                        : machineLog.totalStandstill / 3600000 > 1
                            ? " ca. " + Math.ceil(machineLog.totalStandstill / 3600000) + " Stunden"
                            : ""
                    : ""}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Letzte Befüllung: { machineLog && machineLog.lastFilling
                  && machineLog.lastFilling != 0
                    ? moment(machineLog.lastFilling).format('DD.MM.YYYY, HH:mm')
                    : 'ca. 0 Stunden'} {
                machineLog && machineLog.lastFilling != 0 && machineLog.lastFilling
                    //TO-DO translate time outputs to german
                    ? "(" + moment(machineLog.lastFilling).fromNow() + ")"
                    : ""}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Zeit seit Füllstart: { machineLog && machineLog.firstFilling != 0 && machineLog.firstFilling
                    //TO-DO translate time outputs to german
                    ? "ca. " + moment(machineLog.firstFilling).fromNow() + " (" +
                                moment(machineLog.firstFilling).format('DD.MM.YYYY, HH:mm') + ")"
                    : "ca. 0 Stunden"}</button>
            <button className="my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border text-xs font-semibold">
                Geschwindigkeit letzte Stunde: { machineLog && machineLog.averageThroughput != 0
                //TO-DO translate time outputs to german
                //@ts-ignore
                ? "ca. "  + Math.floor(machineLog.averageFillingInLastHour) + " kg/h"
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
                    {listLength && listLength>0 && page +2< Math.ceil(listLength/100) && Math.ceil(listLength/100) > 6
                        ? "| ... |" : ""} {listLength > 0 && page + 1< Math.ceil(listLength/100) ?
                        <button className={ page == Math.ceil(listLength/100) ? "font-bold underline" :"underline"}
                        onClick={()=>changePage(Math.ceil(listLength/100))}>
                            {Math.ceil(listLength/100) > 6  && page +2< Math.ceil(listLength/100)? Math.ceil(listLength/100) : ''}
                        </button>
                        : ""}
                </p>
            </div>

            <div className="shadow-md border h-[20rem] overflow-auto mt-5 rounded">
                <table className="flex-row w-full table-auto">
                    <thead className="sticky top-0 bg-white rounded-lg">
                    <tr className="text-xs text-gray-500 border-b text-left text-center">
                        <th className="font-normal p-0.5">Masch.-ID</th>
                        <th className="font-normal p-0.5">Typ</th>
                        <th className="font-normal p-0.5">Datum erfasst</th>
                        <th className="font-normal">Brutto</th>
                        <th className="font-normal">Tara (Log)</th>
                        <th className="font-normal">Tara (Masch)</th>
                        <th className="font-normal">Netto (Log)</th>
                        <th className="font-normal">Netto (Masch)</th>
                        <th className="font-normal p-0.5">kg/h</th>
                        <th className="font-normal p-0.6">Warenart</th>
                        <th className="font-normal p-0.6">Netto</th>
                        <th className="font-normal p-0.5">Positiv</th>
                        <th className="font-normal p-0.6">Übergew.</th>
                        <th className="font-normal p-0.5">Stabil</th>
                        <th className="font-normal p-0.5">Print</th>
                        <th className="font-normal p-[0.4px]">Printausgabe</th>
                        <th className="font-normal p-0.5">Status Maschine</th>
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
                                <td>{!machinesDataLoading && machineLog ? machineLog.waretype : ''}</td>
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