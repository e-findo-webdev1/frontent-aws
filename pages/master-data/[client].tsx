import {useEffect, useState} from "react";
import moment from "moment";
import "moment-timezone"
import API from "axios";
import Link from "next/link";
import getFillerStyle from "../components/helpers/getFillerStyle";
import Popup from "../components/start/Popup";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from "next/router";

const MasterData = () => {

    const router = useRouter()
    const pid = router.query

    const [data, setData] = useState<any>();
    const [machinesData, setMachinesData] = useState<any>();
    const [shifts, setShift] = useState<any>();
    const [workers, setWorkers] = useState<any>();
    const [lands, setLands] = useState<any>();
    const [shiftHours, setShiftHours] = useState<any>();

    const [machineID, setMachineID] = useState<any>("");
    const [plannedDate, setPlannedDate] = useState<any>(moment());
    const [pickupDate, setPickupDate] = useState<any>("");
    const [shiftsReady, setShiftsReady] = useState<any>(false);

    const [clientId, setClientId] = useState<any>();
    const [clients, setClients] = useState<any>({set: false});

    useEffect(() => {
        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setData(
                    response.data.Items
                        .filter( (client: any) => client.client_id == pid.client)
                );
            })
            .catch((error) => {
                console.log(error.response);
            });

        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items
                    .filter((machine: { client: string; }) =>
                        machine.client == data[0].client_name))
                if (sessionStorage.getItem('company')) {
                    setClientId(JSON.parse(sessionStorage.getItem("company") as string).client_id)
                }
                if (clients.set == false) {
                    setClients(true)
                }
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts')
            .then((response) => {
                setShift(
                    response.data.Items
                        .filter( (shift: any) => shift.client_id == pid.client )[0].shifts
                );
                setShiftHours(
                    response.data.Items
                        .filter( (shift: any) => shift.client_id == pid.client )[0].shiftHours
                );
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users')
            .then((response) => {
                setWorkers(
                    response.data.Items.filter((obj: any) => obj.client_id == pid.client));
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/lands')
            .then((response) => {
                setLands(
                    response.data.Items);
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

        if (shifts && shiftsReady == false) {
            // @ts-ignore
            SHIFT_CALENDAR = capitalizeDays(shifts)
            setShiftsReady(true)
            calculatePlannedDate( '2023/02/14', '10:00')
        }

    },[pid, clientId, clients.set] );

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


    // @ts-ignore
    // @ts-ignore
    return (
        <div id="content-page" className="px-24 h-full overflow-auto">
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
                {data ? data.map((data: any) =>
                    <div key={data.client_id} className="text-xs space-y-2.5">
                        <p><span className="font-bold">KundenNr.:</span> {data.client_number}</p>
                        <p><span className="font-bold">Firma:</span> {data.client_name}<br/></p>
                        <p><span className="font-bold">PLZ:</span> {data.zip_code}<br/></p>
                        <p><span className="font-bold">Stadt:</span> {data.city}<br/></p>
                        <p><span className="font-bold">Straße:</span> {data.street}<br/></p>
                        <p><span className="font-bold">Bundesland (D):</span> {
                            data && lands ? lands.filter((land: any)=>land.land_id==data.land_id)[0].land_name : ''}
                            <br/></p>
                        <p><span className="font-bold">Telefon:</span> {data.telefon}<br/></p>
                        <p><span className="font-bold">E-Mail:</span> {data.email}<br/></p>
                        <p><span className="font-bold">Ansprechpartner:</span> {data.spokesperson}</p>
                    </div>
                ) : ''}
            </div>
            <div className="flex">
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
            <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Masch.-ID<br/>Max Netto</th>
                        <th className="font-normal">Material</th>
                        <th className="font-normal">Füllgrad</th>
                        <th className="font-normal text-right">Netto<br/>(in kg)</th>
                        <th className="font-normal text-right">Monatspreis<br/>(in € / t)</th>
                        <th className="font-normal text-right">Summe<br/>(in €)</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {machinesData
                        ? machinesData.sort(function(a: any, b: any){
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
                                    <td className="flex">
                                        <div className="border border-black bg-white w-32 mr-1.5">

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
                                                {machine.price_list ?
                                                    machine.price_list.prices
                                                        // @ts-ignore
                                                        [moment().year()][monthsList[moment().month()]] : "0,00"} €
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="text-right">{machine.price_list && machine.lastIndicate ?
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
            <div className="columns-2 h-max">
                <div>
                    <Link href="/master-data/shift-manager">
                        <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Schichten Bearbeiten
                        </button>
                    </Link>
                </div>
                <span className="text-xs uppercase font-bold text-gray-500">
                      Schichten
                </span>
                <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto h-full">
                    <table className="flex-row w-full table-auto">
                        <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th/>
                            <th className="font-normal">Start</th>
                            <th className="font-normal">Ende</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-gray-50 text-xs border-b text-left">
                            <td className="w-24">Schicht 1</td>
                            <td>{shiftHours ? shiftHours.shift1_start : "00:00"}</td>
                            <td>{shiftHours ? shiftHours.shift1_end : "00:00"}</td>
                        </tr>
                        {   shiftHours && shiftHours.shift2_start != "00:00" && shiftHours.shift2_end != "00:00"
                            ? <tr className="bg-gray-50 text-xs border-b text-left">
                                <td className="w-24">Schicht 2</td>
                                <td>{shiftHours ? shiftHours.shift2_start : "00:00"}</td>
                                <td>{shiftHours ? shiftHours.shift2_end : "00:00"}</td>
                            </tr>
                            : ""}
                        {   shiftHours && shiftHours.shift3_start != "00:00" && shiftHours.shift3_end != "00:00"
                            ? <tr className="bg-gray-50 text-xs border-b text-left">
                                <td className="w-24">Schicht 3</td>
                                <td>{shiftHours ? shiftHours.shift3_start : "00:00"}</td>
                                <td>{shiftHours ? shiftHours.shift3_end : "00:00"}</td>
                            </tr>
                            : ""}
                        {   shiftHours && shiftHours.shift4_start != "00:00" && shiftHours.shift4_end != "00:00"
                            ? <tr className="bg-gray-50 text-xs border-b text-left">
                                <td className="w-24">Schicht 4</td>
                                <td>{shiftHours ? shiftHours.shift4_start : "00:00"}</td>
                                <td>{shiftHours ? shiftHours.shift4_end : "00:00"}</td>
                            </tr>
                        : ""}

                        </tbody>
                    </table>
                </div>
                <div className="">
                    <div>
                        <Link href="/master-data/new-worker">
                            <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">+ Neuer Mitarbeiter
                            </button>
                        </Link>
                    </div>
                    <span className="text-xs uppercase font-bold text-gray-500">
                      Mitarbeiter
                </span>
                    <div className="sm:rounded-lg shadow-md border h-full">
                        <table className="flex-row w-full table-auto">
                            <thead>
                            <tr className="text-xs text-gray-500 border-b text-left">
                                <th className="font-normal">Mitarbeiter</th>
                                <th className="font-normal">Kürzel</th>
                                <th className="font-normal">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            { workers
                                ? workers.map((worker: any) =>
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
                                : ""
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex mt-5">
                <Link href="/master-data/shift-calendar">
                    <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Zeiten Bearbeiten
                    </button>
                </Link>
            </div>
            <span className="text-xs uppercase font-bold text-gray-500">
                  Arbeitszeiten
            </span>
            <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
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
                                shifts
                                && shifts.monday.shift1.start != null
                                && shifts.monday.shift1.end != null
                                    ? shifts.monday.shift1.start + "-" + shifts.monday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.monday.shift2.start != null
                                && shifts.monday.shift2.end != null
                                    ? shifts.monday.shift2.start + "-" + shifts.monday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.monday.shift3.start != null
                                && shifts.monday.shift3.end != null
                                    ? shifts.monday.shift3.start + "-" + shifts.monday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.monday.shift4.start != null
                                && shifts.monday.shift4.end != null
                                    ? shifts.monday.shift4.start + "-" + shifts.monday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Dienstag</td>
                        <td>
                            {
                                shifts
                                && shifts.tuesday.shift1.start != null
                                && shifts.tuesday.shift1.end != null
                                    ? shifts.tuesday.shift1.start + "-" + shifts.tuesday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.tuesday.shift2.start != null
                                && shifts.tuesday.shift2.end != null
                                    ? shifts.tuesday.shift2.start + "-" + shifts.tuesday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.tuesday.shift3.start != null
                                && shifts.tuesday.shift3.end != null
                                    ? shifts.tuesday.shift3.start + "-" + shifts.tuesday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.tuesday.shift4.start != null
                                && shifts.tuesday.shift4.end != null
                                    ? shifts.tuesday.shift4.start + "-" + shifts.tuesday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Mittwoch</td>
                        <td>
                            {
                                shifts
                                && shifts.wednesday.shift1.start != null
                                && shifts.wednesday.shift1.end != null
                                    ? shifts.wednesday.shift1.start + "-" + shifts.wednesday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.wednesday.shift2.start != null
                                && shifts.wednesday.shift2.end != null
                                    ? shifts.wednesday.shift2.start + "-" + shifts.wednesday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.wednesday.shift3.start != null
                                && shifts.wednesday.shift3.end != null
                                    ? shifts.wednesday.shift3.start + "-" + shifts.wednesday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.wednesday.shift4.start != null
                                && shifts.wednesday.shift4.end != null
                                    ? shifts.wednesday.shift4.start + "-" + shifts.wednesday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Donnerstag</td>
                        <td>
                            {
                                shifts
                                && shifts.thursday.shift1.start != null
                                && shifts.thursday.shift1.end != null
                                    ? shifts.thursday.shift1.start + "-" + shifts.thursday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.thursday.shift2.start != null
                                && shifts.thursday.shift2.end != null
                                    ? shifts.thursday.shift2.start + "-" + shifts.thursday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.thursday.shift3.start != null
                                && shifts.thursday.shift3.end != null
                                    ? shifts.thursday.shift3.start + "-" + shifts.thursday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.thursday.shift4.start != null
                                && shifts.thursday.shift4.end != null
                                    ? shifts.thursday.shift4.start + "-" + shifts.thursday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Freitag</td>
                        <td>
                            {
                                shifts
                                && shifts.friday.shift1.start != null
                                && shifts.friday.shift1.end != null
                                    ? shifts.friday.shift1.start + "-" + shifts.friday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.friday.shift2.start != null
                                && shifts.friday.shift2.end != null
                                    ? shifts.friday.shift2.start + "-" + shifts.friday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.friday.shift3.start != null
                                && shifts.friday.shift3.end != null
                                    ? shifts.friday.shift3.start + "-" + shifts.friday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.friday.shift4.start != null
                                && shifts.friday.shift4.end != null
                                    ? shifts.friday.shift4.start + "-" + shifts.friday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Samstag</td>
                        <td>
                            {
                                shifts
                                && shifts.saturday.shift1.start != null
                                && shifts.saturday.shift1.end != null
                                    ? shifts.saturday.shift1.start + "-" + shifts.saturday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.saturday.shift2.start != null
                                && shifts.saturday.shift2.end != null
                                    ? shifts.saturday.shift2.start + "-" + shifts.saturday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.saturday.shift3.start != null
                                && shifts.saturday.shift3.end != null
                                    ? shifts.saturday.shift3.start + "-" + shifts.saturday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.saturday.shift3.start != null
                                && shifts.saturday.shift3.end != null
                                    ? shifts.saturday.shift3.start + "-" + shifts.saturday.shift3.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-50 text-xs border-b text-left">
                        <td>Sonntag</td>
                        <td>
                            {
                                shifts
                                && shifts.sunday.shift1.start != null
                                && shifts.sunday.shift1.end != null
                                    ? shifts.sunday.shift1.start + "-" + shifts.sunday.shift1.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.sunday.shift2.start != null
                                && shifts.sunday.shift2.end != null
                                    ? shifts.sunday.shift2.start + "-" + shifts.sunday.shift2.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.sunday.shift3.start != null
                                && shifts.sunday.shift3.end != null
                                    ? shifts.sunday.shift3.start + "-" + shifts.sunday.shift3.end
                                    : "-"
                            }
                        </td>
                        <td>
                            {
                                shifts
                                && shifts.sunday.shift4.start != null
                                && shifts.sunday.shift4.end != null
                                    ? shifts.sunday.shift4.start + "-" + shifts.sunday.shift4.end
                                    : "-"
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MasterData

