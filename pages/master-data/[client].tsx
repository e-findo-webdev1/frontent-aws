'use client'
import {useEffect, useState} from "react";
import moment from "moment";
import "moment-timezone"
import API from "axios";
import Link from "next/link";
import getFillerStyle from "../components/helpers/getFillerStyle";
import Popup from "../components/start/Popup";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from "next/router";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import useSWR from "swr";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
const MasterData = () => {
    const [clientData, setClientData] = useState<any>();
    const [companyMachines, setCompanyMachines] = useState<any>();
    const [companyShifts, setCompanyShifts] = useState<any>();
    const [companyWorkingHours, setCompanyWorkingHours] = useState<any>();
    const [companyWorkers, setCompanyWorkers] = useState<any>();

    const {data: clients, error: clientsError, isLoading: clientsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients', fetcher)
    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: shiftsData, error: shiftsDataError, isLoading: shiftsDataLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts', fetcher)
    const {data: users, error: usersError, isLoading: usersLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users', fetcher)

    const router = useRouter()
    const pid = router.query

    const company = JSON.parse(sessionStorage.getItem('company') as string)
    const getClientData = () => {
        if (!clientsLoading && !clientData) {
            const clientData = clients.Items
                .filter( (client: any) => client.client_id == pid.client)
            setClientData(clientData[0])
        }
    }
    const getCompanyMachines = () => {
        if (!machinesLoading && !companyMachines) {
            const companyMachines = machines.Items.filter((machine:any) =>
                machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
            )
            setCompanyMachines(companyMachines)
        }
    }
    const getCompanyShifts = () => {
        if (!shiftsDataLoading && !companyShifts) {
            const companyShifts = shiftsData.Items.filter((shift:any) =>
                shift.shift_id == company.client_number
            )
            setCompanyShifts(companyShifts[0].shifts)
            setCompanyWorkingHours(companyShifts[0].shiftHours)
        }
    }
    const getCompanyWorkers = () => {
        if (!usersLoading && !companyWorkers) {
            const companyWorkers = users.Items.filter((account:any) =>
                account.client_id == company.client_id
            )
            setCompanyWorkers(companyWorkers)
        }
    }

    getClientData();
    getCompanyMachines();
    getCompanyShifts();
    getCompanyWorkers();



    const [data, setData] = useState<any>();
    const [lands, setLands] = useState<any>();

    const [machineID, setMachineID] = useState<any>("");
    const [plannedDate, setPlannedDate] = useState<any>(moment());
    const [pickupDate, setPickupDate] = useState<any>("");
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false);

    useEffect(() => {

        const getData = async () => {

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/lands')
                .then((response) => {
                    setLands(
                        response.data.Items);
                })
                .catch((error) => {
                    console.log(error.response);
                });

            setIsDataLoaded(true)
        }

        getData()
        if (!shiftsDataLoading) {
            // @ts-ignore
            SHIFT_CALENDAR = capitalizeDays(companyShifts)
            calculatePlannedDate( '2023/02/14', '10:00')
        }

    },[] );

    const monthsList = {
        0: "Januar",
        1: "Februar",
        2: "März",
        3: "April",
        4: "Mai",
        5: "Juni",
        6: "Juli",
        7: "August",
        8: "September",
        9: "Oktober",
        10: "November",
        11: "Dezember"
    }
    let SHIFT_CALENDAR = {
        'Sunday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
        'Monday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
        'Tuesday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
        'Wednesday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
        'Thursday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
        'Friday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
        'Saturday': {
            'shift1': {
                startTime: '',
                endTime: '',
            },
            'shift2': {
                startTime: '',
                endTime: '',
            },
            'shift3': {
                startTime: '',
                endTime: '',
            },
            'shift4': {
                startTime: '',
                endTime: '',
            },
        },
    };
    const daysOfWeek = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }

    const calculatePlannedDate = (startDate: any, startTime: any) => {
        let taskDuration = workingHours*60;
        let taskStart = moment(startDate + ' ' + startTime)
        // @ts-ignore
        let [firstShift, firstShiftStartDate] = returnFirstShift(taskStart)
        let currentDate = moment(taskStart.format('L'))
        while (taskDuration > 0) {
            for (let day in SHIFT_CALENDAR) {
                // @ts-ignore
                if (day == daysOfWeek[currentDate.day()]) {
                    // @ts-ignore
                    let todayShifts = SHIFT_CALENDAR[daysOfWeek[currentDate.day()]]

                    for (let i = 1; i < 5; i++) {
                        let currentShift = 'shift' + i
                        if (todayShifts[currentShift].start == "") {
                            continue
                        }
                        let shiftStart = moment(currentDate.format('L')
                            + ' '
                            + todayShifts[currentShift].start)
                        let shiftEnd = moment(currentDate.format('L')
                            + ' '
                            + todayShifts[currentShift].end)
                        if (shiftEnd.isBefore(shiftStart)) {
                            shiftEnd.add(1, 'day')
                        }

                        if (shiftStart.isAfter(moment(firstShiftStartDate + ' ' + firstShift.start))) {
                            taskStart = shiftStart
                        }

                        if ((taskStart.format('LLL') == shiftStart.format('LLL')
                            || taskStart.isAfter(shiftStart)) && taskStart.isBefore(shiftEnd)) {
                            let taskEnd = taskStart.clone()
                            taskEnd.add(taskDuration, 'minutes')
                            let timeTillShiftEnd = shiftEnd.diff(taskStart) / 3600000 * 60
                            let timeTillTaskEnd = taskEnd.diff(taskStart) / 3600000 * 60

                            if (timeTillTaskEnd <= timeTillShiftEnd) {
                                //console.log('Task end:', taskEnd.format())
                                setPlannedDate(taskEnd)
                                setPickupDate(taskEnd)
                                return taskEnd
                            } else {
                                taskDuration -= timeTillShiftEnd
                            }
                        }
                    }

                    currentDate.add(1, 'day')
                }
            }
        }
    }

    const returnFirstShift = (taskStart: any) => {
        let currentDate = moment(taskStart.format('L'))
        // @ts-ignore
        for (let i = 0 ; i < 7 ; i++) {
            // @ts-ignore
            let todayShifts = SHIFT_CALENDAR[daysOfWeek[currentDate.day()]]
            //figure out first shift
            if (todayShifts.shift1.start != "") {
                let shift1StartTime = todayShifts.shift1.start
                let shift1EndTime = todayShifts.shift1.end
                let shift1Start = moment(currentDate.format('L') + ' ' + shift1StartTime)
                let shift1End = moment(currentDate.format('L') + ' ' + shift1EndTime)
                if (shift1End.isBefore(shift1Start)) {
                    shift1End.add(1, 'day')
                }
                if (shift1End.isAfter(taskStart)){
                    return [todayShifts.shift1, currentDate.format('L')]
                }
            }

            if (todayShifts.shift2.start != "") {
                let shift2StartTime = todayShifts.shift2.start
                let shift2EndTime = todayShifts.shift2.end
                let shift2Start = moment(currentDate.format('L') + ' ' + shift2StartTime)
                let shift2End = moment(currentDate.format('L') + ' ' + shift2EndTime)
                if (shift2End.isBefore(shift2Start)) {
                    shift2End.add(1, 'day')
                }
                if (shift2End.isAfter(taskStart)){
                    return [todayShifts.shift2, currentDate.format('L')]
                }
            }

            if (todayShifts.shift3.start != "") {
                let shift3StartTime = todayShifts.shift3.start
                let shift3EndTime = todayShifts.shift3.end
                let shift3Start = moment(currentDate.format('L') + ' ' + shift3StartTime)
                let shift3End = moment(currentDate.format('L') + ' ' + shift3EndTime)
                if (shift3End.isBefore(shift3Start)) {
                    shift3End.add(1, 'day')
                }
                if (shift3End.isAfter(taskStart)){
                    return [todayShifts.shift3, currentDate.format('L')]
                }
            }

            if (todayShifts.shift4.start != "") {
                let shift4StartTime = todayShifts.shift4.start
                let shift4EndTime = todayShifts.shift4.end
                let shift4Start = moment(currentDate.format('L') + ' ' + shift4StartTime)
                let shift4End = moment(currentDate.format('L') + ' ' + shift4EndTime)
                if (shift4End.isBefore(shift4Start)) {
                    shift4End.add(1, 'day')
                }
                if (shift4End.isAfter(taskStart)){
                    return [todayShifts.shift4, currentDate.format('L')]
                }
            }
            currentDate.add(1,'day')
        }
    }

    function capitalizeDays(shiftCalendar: any) {
        const days = {
            'sunday': 'Sunday',
            'monday': 'Monday',
            'tuesday': 'Tuesday',
            'wednesday': 'Wednesday',
            'thursday': 'Thursday',
            'friday': 'Friday',
            'saturday': 'Saturday',
        };

        const capitalizedCalendar = {};
        for (const day in shiftCalendar) {
            // @ts-ignore
            capitalizedCalendar[days[day]] = shiftCalendar[day];
        }

        return capitalizedCalendar;
    }

    const averageKiloPerHour = 800
    const currentNetto = 0
    const maxNetto = 25000
    const workingHours = (maxNetto-currentNetto)/averageKiloPerHour

    return (
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <div className="mt-10">
                <Link href="/">
                    <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">← Zurück</button>
                </Link>
                <Link href="/master-data/edit-client/0">
                    <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Bearbeiten</button>
                </Link>
                <p className="mt-5 text-2xl font-bold mb-5">Stammdaten</p>
            </div>
            <div className="mb-10">
                {!clientsLoading && clientData ?
                    <div key={clientData.client_id} className="text-xs space-y-2.5">
                        <p><span className="font-bold">KundenNr.:</span> {clientData.client_number}</p>
                        <p><span className="font-bold">Firma:</span> {clientData.client_name}<br/></p>
                        <p><span className="font-bold">PLZ:</span> {clientData.zip_code}<br/></p>
                        <p><span className="font-bold">Stadt:</span> {clientData.city}<br/></p>
                        <p><span className="font-bold">Straße:</span> {clientData.street}<br/></p>
                        <p><span className="font-bold">Bundesland (D):</span> {
                            clientData && lands ? lands.filter((land: any)=>
                                land.land_id==clientData.land_id)[0].land_name : ''}
                            <br/></p>
                        <p><span className="font-bold">Telefon:</span>
                            {clientData.telefon ? clientData.telefon : ' -'}<br/></p>
                        <p><span className="font-bold">E-Mail:</span>
                            {clientData.email? clientData.email : ' -'}<br/></p>
                        <p><span className="font-bold">Ansprechpartner:</span>
                            {clientData.spokesperson ? clientData.spokesperson : ' -'}</p>
                    </div>
                 :
                    <div key='' className="text-xs space-y-2.5">
                        <p><span className="font-bold">KundenNr.:</span></p>
                        <p><span className="font-bold">Firma:</span><br/></p>
                        <p><span className="font-bold">PLZ:</span><br/></p>
                        <p><span className="font-bold">Stadt:</span><br/></p>
                        <p><span className="font-bold">Straße:</span><br/></p>
                        <p><span className="font-bold">Bundesland (D):</span><br/></p>
                        <p><span className="font-bold">Telefon:</span><br/></p>
                        <p><span className="font-bold">E-Mail:</span><br/></p>
                        <p><span className="font-bold">Ansprechpartner:</span></p>
                    </div>
                }
            </div>
            <div className="w-max ml-auto">
                <Link href="/master-data/new-machine"><button className="border ml-auto p-1.5 px-3.5 font-bold
                              border-accent-color-1 bg-accent-color-4
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">
                    + Neue Maschine
                </button>
                </Link>
            </div>
            <span className="text-xs uppercase font-bold text-gray-500">
                  Lagersysteme
            </span>
            { !companyMachines ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="mb-10 border min-h-[15rem] max-h-[15rem] shadow-md"/>
                </SkeletonTheme> :
            <div className="mb-10 min-h-[15rem] sm:rounded-lg shadow-md border overflow-auto bg-gray-50">
                <table className="flex-row w-full overflow-auto h-[15rem] table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b bg-white text-left">
                        <th className="font-normal">Masch.-ID<br/>Max Netto</th>
                        <th className="font-normal">Material</th>
                        <th className="font-normal">Füllgrad</th>
                        <th className="font-normal text-right">Netto<br/>(in kg)</th>
                        <th className="font-normal text-right">Monatspreis<br/>(in € / t)</th>
                        <th className="font-normal text-right">Summe<br/>(in €)</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {!machinesLoading && companyMachines
                        ? companyMachines.sort(function(a: any, b: any){
                            // @ts-ignore
                            return a.machine_id - b.machine_id})
                            .map((machine: any) =>
                                <tr key={machine.machine_id} className="text-xs border-t">
                                    <td>
                                        {machine.machineType}: <span className="underline">
                        <Link href={"/master-data/edit-machine/" + machine.machine_id}>
                            {machine.machine_id}
                        </Link></span><br/>
                                        <span>{machine.maxNetto} kg</span></td>
                                    <td>{machine.waretype}</td>
                                    <td className="flex py-9 m-auto">
                                        <div className="border h-4 border-black bg-white min-w-32 mr-1.5">

                                            <div
                                                // @ts-ignore
                                                className={ ((machine.lastIndicate)) * 100
                                                / machine.maxNetto > 0
                                                    ? getFillerStyle(
                                                        ((machine.lastIndicate))* 100
                                                        / machine.maxNetto
                                                    )
                                                    : 0
                                                }/>
                                        </div>
                                        { parseInt(((machine.lastIndicate) * 100
                                            / machine.maxNetto).toFixed(0)) > 0
                                            ?
                                            ((machine.lastIndicate) * 100
                                                / machine.maxNetto).toFixed(0)
                                            : 0}%</td>
                                    <td className="text-right">{machine.lastIndicate ?
                                        machine.lastIndicate : 0} kg</td>
                                    <td className="text-right">
                                        <Link href={"/master-data/price-list/" + machine.machine_id}>
                                            <button className="underline">
                                                {machine.price_list && machine.price_list.prices
                                                    // @ts-ignore
                                                    [moment().year()]?
                                                    machine.price_list.prices
                                                        // @ts-ignore
                                                        [moment().year()][monthsList[moment().month()]] : "0,00"} €
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="text-right">{machine.price_list && machine.price_list.prices
                                        // @ts-ignore
                                        [moment().year()] && machine.lastIndicate ?
                                        (machine.lastIndicate *
                                        parseInt(machine.price_list.prices
                                        // @ts-ignore
                                        [moment().year()][monthsList[moment().month()]]) /1000).toFixed(2)
                                        .replace(".",",") : "0,00"} €</td>
                                </tr>
                        )
                        : ""
                    }
                    </tbody>
                </table>
                <Popup
                    machineID={machineID}
                    pickupDate={pickupDate}
                    setMachineID={setMachineID}
                    setPickupDate={setPickupDate}
                />
            </div>
            }
            <div className=" grid grid-cols-2 gap-x-5">
                <div className="col-span-1 h-max">
                    <Link href="/master-data/shift-manager">
                        <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Schichten Bearbeiten
                        </button>
                    </Link>

                    <p className="text-xs uppercase font-bold text-gray-500">
                        Schichten
                    </p>
                    {!companyWorkingHours ?
                        <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                            <Skeleton className=" border min-h-[9.4rem] max-h-[9.4rem] shadow-md"/>
                        </SkeletonTheme> :
                    <div className="h-[9.4rem] sm:rounded-lg shadow-md border bg-gray-50 overflow-auto h-max">
                        <table className="flex-row w-full table-auto">
                            <thead>
                            <tr className="text-xs bg-white text-gray-500 border-b text-left">
                                <th/>
                                <th className="font-normal">Start</th>
                                <th className="font-normal">Ende</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-gray-50 text-xs border-b text-left">
                                <td className="w-24">Schicht 1</td>
                                <td>{companyWorkingHours ? companyWorkingHours.shift1_start : "00:00"}</td>
                                <td>{companyWorkingHours ? companyWorkingHours.shift1_end : "00:00"}</td>
                            </tr>
                            {   companyWorkingHours && companyWorkingHours.shift2_start != undefined &&
                            companyWorkingHours.shift2_start != "00:00" && companyWorkingHours.shift2_end != "00:00"
                                ? <tr className="bg-gray-50 text-xs border-b text-left">
                                    <td className="w-24">Schicht 2</td>
                                    <td>{companyWorkingHours ? companyWorkingHours.shift2_start : "00:00"}</td>
                                    <td>{companyWorkingHours ? companyWorkingHours.shift2_end : "00:00"}</td>
                                </tr>
                                : ""}
                            {   companyWorkingHours && companyWorkingHours.shift3_start != undefined &&
                            companyWorkingHours.shift3_start != "00:00" && companyWorkingHours.shift3_end != "00:00"
                                ? <tr className="bg-gray-50 text-xs border-b text-left">
                                    <td className="w-24">Schicht 3</td>
                                    <td>{companyWorkingHours ? companyWorkingHours.shift3_start : "00:00"}</td>
                                    <td>{companyWorkingHours ? companyWorkingHours.shift3_end : "00:00"}</td>
                                </tr>
                                : ""}
                            {   companyWorkingHours && companyWorkingHours.shift4_start != undefined &&
                            companyWorkingHours.shift4_start != "00:00" && companyWorkingHours.shift4_end != "00:00"
                                ? <tr className="bg-gray-50 text-xs border-b text-left">
                                    <td className="w-24">Schicht 4</td>
                                    <td>{companyWorkingHours ? companyWorkingHours.shift4_start : "00:00"}</td>
                                    <td>{companyWorkingHours ? companyWorkingHours.shift4_end : "00:00"}</td>
                                </tr>
                                : ""}

                            </tbody>
                        </table>
                    </div>}
                </div>

                <div className="col-span-1">
                        <Link href="/master-data/new-worker">
                            <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">+ Neuer Mitarbeiter
                            </button>
                        </Link>
                    <p className="text-xs uppercase font-bold text-gray-500">
                      Mitarbeiter
                </p>
                    {!companyWorkers ?
                        <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                            <Skeleton className="border min-h-[9.4rem] max-h-[9.4rem] shadow-md"/>
                        </SkeletonTheme> :
                    <div className="h-[9.4rem] bg-gray-50 sm:rounded-lg shadow-md border overflow-auto h-max">
                        <table className="flex-row w-full table-auto">
                            <thead>
                            <tr className="text-xs bg-white text-gray-500 border-b text-left">
                                <th className="font-normal">Mitarbeiter</th>
                                <th className="font-normal">Kürzel</th>
                                <th className="font-normal">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            { companyWorkers.length != 0
                                ? companyWorkers.map((worker: any) =>
                                    <tr key={worker.email} className="bg-gray-50 text-xs border-b text-left">
                                        <td>
                                            <Link href={'/master-data/edit-worker/' + worker.loginName}>
                                                <button className="underline">{worker.userName}</button>
                                            </Link>
                                        </td>
                                        <td>{worker.initials}</td>
                                        <td>{worker.email}</td>
                                    </tr>
                                )
                                : <><tr key='noWorkers1' className="text-xs text-left">
                                    <td className="text-gray-500">Keine Mitarbeiter hinzugefügt...</td>
                                    <td/>
                                    <td/>
                                </tr>
                                    <tr key='noWorkers2' className="text-xs text-left">
                                        <td className="text-gray-50">...</td>
                                        <td/>
                                        <td/>
                                    </tr>
                                    <tr key='noWorkers3' className="text-xs text-left">
                                        <td className="text-gray-50">No workers added...</td>
                                        <td/>
                                        <td/>
                                    </tr>
                                </>
                            }
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div>
            <div className="flex mt-10 w-max ml-auto">
                <Link href="/master-data/shift-calendar">
                    <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Zeiten Bearbeiten
                    </button>
                </Link>
            </div>
            <span className="text-xs uppercase font-bold text-gray-500">
                  Arbeitszeiten
            </span>
            {!companyShifts ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="border min-h-[18.55rem] max-h-[18.55rem] shadow-md"/>
                </SkeletonTheme> :
            <div className="h-[18.55rem] bg-gray-50 mb-10 sm:rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs bg-white text-gray-500 border-b text-left">
                        <th/>
                        <th className="font-normal">Schicht 1</th>
                        <th className="font-normal">Schicht 2</th>
                        <th className="font-normal">Schicht 3</th>
                        <th className="font-normal">Schicht 4</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Montag</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.monday.shift1.start != null
                                && companyShifts.monday.shift1.end != null
                                    ? companyShifts.monday.shift1.start + "-" + companyShifts.monday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.monday.shift2.start != null
                                && companyShifts.monday.shift2.end != null
                                    ? companyShifts.monday.shift2.start + "-" + companyShifts.monday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.monday.shift3.start != null
                                && companyShifts.monday.shift3.end != null
                                    ? companyShifts.monday.shift3.start + "-" + companyShifts.monday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.monday.shift4.start != null
                                && companyShifts.monday.shift4.end != null
                                    ? companyShifts.monday.shift4.start + "-" + companyShifts.monday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Dienstag</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.tuesday.shift1.start != null
                                && companyShifts.tuesday.shift1.end != null
                                    ? companyShifts.tuesday.shift1.start + "-" + companyShifts.tuesday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.tuesday.shift2.start != null
                                && companyShifts.tuesday.shift2.end != null
                                    ? companyShifts.tuesday.shift2.start + "-" + companyShifts.tuesday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.tuesday.shift3.start != null
                                && companyShifts.tuesday.shift3.end != null
                                    ? companyShifts.tuesday.shift3.start + "-" + companyShifts.tuesday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.tuesday.shift4.start != null
                                && companyShifts.tuesday.shift4.end != null
                                    ? companyShifts.tuesday.shift4.start + "-" + companyShifts.tuesday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Mittwoch</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.wednesday.shift1.start != null
                                && companyShifts.wednesday.shift1.end != null
                                    ? companyShifts.wednesday.shift1.start + "-" + companyShifts.wednesday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.wednesday.shift2.start != null
                                && companyShifts.wednesday.shift2.end != null
                                    ? companyShifts.wednesday.shift2.start + "-" + companyShifts.wednesday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.wednesday.shift3.start != null
                                && companyShifts.wednesday.shift3.end != null
                                    ? companyShifts.wednesday.shift3.start + "-" + companyShifts.wednesday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.wednesday.shift4.start != null
                                && companyShifts.wednesday.shift4.end != null
                                    ? companyShifts.wednesday.shift4.start + "-" + companyShifts.wednesday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Donnerstag</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.thursday.shift1.start != null
                                && companyShifts.thursday.shift1.end != null
                                    ? companyShifts.thursday.shift1.start + "-" + companyShifts.thursday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.thursday.shift2.start != null
                                && companyShifts.thursday.shift2.end != null
                                    ? companyShifts.thursday.shift2.start + "-" + companyShifts.thursday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.thursday.shift3.start != null
                                && companyShifts.thursday.shift3.end != null
                                    ? companyShifts.thursday.shift3.start + "-" + companyShifts.thursday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.thursday.shift4.start != null
                                && companyShifts.thursday.shift4.end != null
                                    ? companyShifts.thursday.shift4.start + "-" + companyShifts.thursday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Freitag</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.friday.shift1.start != null
                                && companyShifts.friday.shift1.end != null
                                    ? companyShifts.friday.shift1.start + "-" + companyShifts.friday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.friday.shift2.start != null
                                && companyShifts.friday.shift2.end != null
                                    ? companyShifts.friday.shift2.start + "-" + companyShifts.friday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.friday.shift3.start != null
                                && companyShifts.friday.shift3.end != null
                                    ? companyShifts.friday.shift3.start + "-" + companyShifts.friday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.friday.shift4.start != null
                                && companyShifts.friday.shift4.end != null
                                    ? companyShifts.friday.shift4.start + "-" + companyShifts.friday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Samstag</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.saturday.shift1.start != null
                                && companyShifts.saturday.shift1.end != null
                                    ? companyShifts.saturday.shift1.start + "-" + companyShifts.saturday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.saturday.shift2.start != null
                                && companyShifts.saturday.shift2.end != null
                                    ? companyShifts.saturday.shift2.start + "-" + companyShifts.saturday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.saturday.shift3.start != null
                                && companyShifts.saturday.shift3.end != null
                                    ? companyShifts.saturday.shift3.start + "-" + companyShifts.saturday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.saturday.shift3.start != null
                                && companyShifts.saturday.shift3.end != null
                                    ? companyShifts.saturday.shift3.start + "-" + companyShifts.saturday.shift3.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Sonntag</td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.sunday.shift1.start != null
                                && companyShifts.sunday.shift1.end != null
                                    ? companyShifts.sunday.shift1.start + "-" + companyShifts.sunday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.sunday.shift2.start != null
                                && companyShifts.sunday.shift2.end != null
                                    ? companyShifts.sunday.shift2.start + "-" + companyShifts.sunday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.sunday.shift3.start != null
                                && companyShifts.sunday.shift3.end != null
                                    ? companyShifts.sunday.shift3.start + "-" + companyShifts.sunday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                companyShifts
                                && companyShifts.sunday.shift4.start != null
                                && companyShifts.sunday.shift4.end != null
                                    ? companyShifts.sunday.shift4.start + "-" + companyShifts.sunday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default MasterData

