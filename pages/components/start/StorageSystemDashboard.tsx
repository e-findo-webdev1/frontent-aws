import { useEffect, useState } from "react";
import Link from "next/link";
import getFillerStyle from "../helpers/getFillerStyle";
import API from "axios";
import moment from "moment";
import Popup from "./Popup";
import "react-datepicker/dist/react-datepicker.css";
import PopupFilling from "./PopupFilling";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const StorageSystemDashboard = () => {
    const [machinesData, setMachinesData] = useState<any>();
    const [shifts, setShift] = useState<any>();
    const [machineID, setMachineID] = useState<any>("");
    const [plannedDates, setPlannedDates] = useState<[]>([]);
    const [pickupDate, setPickupDate] = useState<any>("");
    const [pickupDates, setPickupDates] = useState<[]>([]);
    const [isDateConfirmed, setIsDateConfirmed] = useState<any>("");
    const [newPickupDates, setNewPickupDates] = useState<[]>([]);
    const [areDatesConfirmed, setAreDatesConfirmed] = useState<[]>([]);
    const [radioConfirmed, setRadioConfirmed] = useState<any>("");
    const [controlDocuments, setControlDocuments] = useState<any>();
    const [popupFilling, setPopupFilling] = useState<any>(false);
    const [popup, setPopup] = useState<any>(false);
    const [contractors, setContractors] = useState<any>();
    const [isDatePicked, setIsDatePicked] = useState<any>(false);
    const [defaultContractor, setDefaultContractor] = useState<any>();
    const [selectedContractor, setSelectedContractor] = useState<any>();
    const [pageReload, setPageReload] = useState<any>({set: false});
    const [userPermissions] = useState(
        JSON.parse(sessionStorage.getItem('user') as string));
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false);


    useEffect(() => {

        const fetchData = async () => {
            let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

            await API.get(apiName)
                .then((response) => {
                    setMachinesData(response.data.Items
                        .filter((machine: { client: string; }) =>
                            machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name));
                    API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                        .then((response) => {
                            setControlDocuments(
                                response.data.Items
                                    .filter( (document: any) =>
                                        machinesData.reduce( function(a: any, b: any){
                                            return a + (b['machine_id']);
                                        }).includes(document.machine_id)
                                    )
                            );
                        })
                        .catch((error) => {
                            console.log(error.response);
                        });
                    setPageReload(true)
                })
                .catch((error) => {
                    console.log(error); //
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts')
                .then((response) => {
                    setShift(
                        response.data.Items
                            .filter( (shift: any) => shift.shift_id
                                == JSON.parse(sessionStorage.getItem('company') as string).client_number )[0].shifts
                    );
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors')
                .then((response) => {
                    setContractors(
                        response.data.Items
                    );
                })
                .catch((error) => {
                    console.log(error.response);
                });
            setIsDataLoaded(true)
        }
        fetchData()

    }, [pickupDates, pageReload]);

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

    const calculatePlannedDate = (workingHours: any, machineID: any) => {
        let taskDuration = workingHours*60;
        let taskStart = moment()
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
                                let currentDates = plannedDates
                                // @ts-ignore
                                currentDates.push([{"machineID": machineID,
                                "taskEnd": taskEnd}])
                                // @ts-ignore
                                setPlannedDates(currentDates.flat())
                                // @ts-ignore
                                setPickupDates(currentDates.flat())

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

    if (machinesData && controlDocuments && shifts && plannedDates.length == 0) {
        // @ts-ignore
        SHIFT_CALENDAR = capitalizeDays(shifts)
        for (let machine in machinesData) {
            const machineID = machinesData[machine].machine_id
            const averageThroughput = //((controlDocuments.reduce( function(a: any, b: any){
                  //return a + b['averageThroughput'];
                 //}, 0) / controlDocuments.length) * 9550 +
                (247 * 99.9 + (machinesData[machine].averageThroughput) * 0.1) / 100
            const currentNetto = machinesData[machine].lastIndicate
            const maxNetto = machinesData[machine].maxNetto
            const workingHours = ((maxNetto-currentNetto)/averageThroughput)
            if (averageThroughput) {
                calculatePlannedDate(workingHours, machineID)
            }
        }
    }
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

    return (
        <div id="storage-system" className="min-w-full mr-10">
            <span className="text-xs uppercase font-bold text-gray-500">
                  Lagersysteme
            </span>
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                <Skeleton className="min-h-80 max-h-80 sm:rounded-lg shadow-md"/>
                </SkeletonTheme> :
            <div className="sm:rounded-lg shadow-md overflow-auto">
                <div className="sm:rounded-lg shadow-md border overflow-auto min-h-80 max-h-80 bg-gray-50">
                    <table className="flex-row table-fixed w-full min-h-80 overflow-auto min-w-full max-w-52">
                        <thead className="bg-gray-50">
                        <tr className="text-xs text-gray-500 border-b text-left bg-white">
                            <th className="font-normal max-w-24">Masch.-ID<br/>Max Netto</th>
                            <th className="font-normal max-w-32">Material</th>
                            <th className="font-normal max-w-40">Füllgrad</th>
                            <th className="font-normal max-w-36">Plandatum<br/>Abholdatum</th>
                            <th className="font-normal max-w-24 text-right">Netto (kg)</th>
                            <th className="font-normal max-w-20 text-right">Monatspreis<br/>(in € / t)</th>
                            <th className="font-normal max-w-20 text-right">Summe<br/>(in €)</th>
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
                        <Link href={"/machines/" + machine.machine_id}>
                            {machine.machine_id}
                        </Link></span><br/>
                                                    <span>{machine.maxNetto} kg</span></td>
                                                <td>{machine.waretype}</td>
                                                <td className=" py-4">
                                                    <a className={ machine.total_working_time != 0 &&
                                                    userPermissions.abholdatumPopupPermission && machine.averageThroughput
                                                        ? "cursor-pointer flex"
                                                        : "pointer-events-none flex"}
                                                       onClick={()=>
                                                       {
                                                           setSelectedContractor(machine.selectedContractor)
                                                           setPopupFilling(true)
                                                           setMachineID(machine.machine_id)
                                                           if (machinesData && machinesData.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .pickup_date != "") {
                                                               setPickupDate(moment(machinesData.filter((obj: any) =>
                                                               {return obj.machine_id == machine.machine_id})[0].pickup_date))
                                                           } else if (pickupDates) {
                                                               setPickupDate(pickupDates
                                                                   .filter((obj:any) =>
                                                                   {return obj.machineID===machine.machine_id})[0]
                                                                   // @ts-ignore
                                                                   .taskEnd)
                                                           }

                                                           setIsDateConfirmed(machinesData.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .isDateConfirmed)
                                                           setRadioConfirmed(machinesData.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .isDateConfirmed)
                                                       }
                                                       }>
                                                        <div className="border border-black w-28 bg-white mr-1.5">

                                                            <div
                                                                // @ts-ignore
                                                                className={ (machine.lastIndicate) * 100
                                                                / machine.maxNetto > 0
                                                                    ? getFillerStyle(
                                                                        (machine.lastIndicate) * 100
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
                                                            : 0}%
                                                    </a>
                                                </td>
                                                <td>
                                                    {
                                                        <span>
                                                    { machine.total_working_time != 0 && plannedDates && plannedDates
                                                        .filter((obj:any) =>
                                                        {return obj.machineID===machine.machine_id}).length != 0
                                                    && machine.averageThroughput !=0 ? plannedDates
                                                            .filter((obj:any) =>
                                                            {return obj.machineID===machine.machine_id})
                                                            .map((plannedDate: any) =>
                                                                <a key={plannedDate.machineID}>
                                                                    {plannedDate.taskEnd.format('DD.MM.YYYY HH:mm')}
                                                                </a>)
                                                        : <span className="underline">noch keine Füllung</span>
                                                    }<br/>
                                                    <a className={ machine.isDatePicked && machine.total_working_time != 0
                                                    && userPermissions.abholdatumPopupPermission
                                                        ? "underline cursor-pointer flex"
                                                        : "underline pointer-events-none flex"}
                                                       onClick={()=>
                                                       {
                                                           setPopup(true)
                                                           setMachineID(machine.machine_id)
                                                           if (machinesData && machinesData.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .pickup_date != "") {
                                                               setPickupDate(moment(machinesData.filter((obj: any) =>
                                                               {return obj.machine_id == machine.machine_id})[0].pickup_date))
                                                           } else if (pickupDates) {
                                                               setPickupDate(pickupDates
                                                                   .filter((obj:any) =>
                                                                   {return obj.machineID===machine.machine_id})[0]
                                                                   // @ts-ignore
                                                                   .taskEnd)
                                                           }

                                                           setIsDateConfirmed(machinesData.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .isDateConfirmed)
                                                           setRadioConfirmed(machinesData.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .isDateConfirmed)}

                                                       }>
                                                    { machine.isDatePicked == true && newPickupDates && newPickupDates.filter((obj:any) =>
                                                    {return obj.machine_id == machine.machine_id}).length != 0
                                                        ? moment(newPickupDates.filter((obj:any) =>
                                                            // @ts-ignore
                                                        {return obj.machine_id == machine.machine_id})[0].date)
                                                            .format('DD.MM.YYYY HH:mm')
                                                        : machine.total_working_time !=0
                                                        && pickupDates
                                                        && pickupDates.length != 0
                                                        && machinesData.filter((obj: any) =>
                                                        {return obj.machine_id == machine.machine_id})[0]
                                                            .pickup_date == ""
                                                            ? pickupDates
                                                                .filter((obj:any) =>
                                                                {return obj.machineID===machine.machine_id})
                                                                .map((pickupDate: any) =>
                                                                    <span key={pickupDate.machineID}>
                                                                        {pickupDate.taskEnd.format('DD.MM.YYYY HH:mm')}
                                                                    </span>
                                                                )
                                                            : machine.isDatePicked && machine.total_working_time !=0
                                                            && machinesData.filter((obj: any) =>
                                                            {return obj.machine_id == machine.machine_id})[0]
                                                                .pickup_date != ""
                                                                ? moment(machinesData.filter((obj: any) =>
                                                                {return obj.machine_id == machine.machine_id})[0]
                                                                    .pickup_date).format('DD.MM.yyyy HH:mm')
                                                                : "-"
                                                    }
                                                        {  machine.isDatePicked && areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id}).length != 0
                                                        && areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id})
                                                            // @ts-ignore
                                                            .date_confirmed == false
                                                            ? <img className="ml-1" src="/icon_fragezeichen 1.svg"/>
                                                            : machine.isDatePicked && machine.total_working_time !=0
                                                            && machine.isDateConfirmed == false
                                                                ? <img className="ml-1" src="/icon_fragezeichen 1.svg"/>
                                                                :""}
                                                        {   machine.isDatePicked && areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id}).length != 0
                                                        && areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id})
                                                            // @ts-ignore
                                                            .date_confirmed == true
                                                            ? <img className="ml-1" src="/icon_fragezeichen 1.svg"/>
                                                            : machine.isDatePicked && machine.total_working_time !=0
                                                            && machine.isDateConfirmed == true
                                                                ? <img className="ml-1" src="/icon_haken 1.svg"/>
                                                                :""}
                                                    </a>
                                                </span>
                                                    }
                                                </td>
                                                <td className="text-right">{machine.lastIndicate ?
                                                    machine.lastIndicate : 0} kg</td>
                                                <td className="text-right">
                                                    {machine.price_list && machine.price_list.prices[moment().year()]
                                                        ?
                                                        machine.price_list.prices
                                                            // @ts-ignore
                                                            [moment().year()][monthsList[moment().month()]] : "0,00"} €
                                                </td>
                                                <td className="text-right">{machine.price_list &&
                                                machine.price_list.prices[moment().year()]
                                                    ? ((machine.lastIndicate) *
                                                        parseInt(machine.price_list.prices
                                                            // @ts-ignore
                                                            [moment().year()][monthsList[moment().month()]]) /1000)
                                                        .toFixed(2)
                                                        .replace(".",",") : "0,00"} €</td>
                                            </tr>
                                    )
                                : ""
                            }
                            </tbody>
                    </table>
                    <PopupFilling
                        machineID={machineID}
                        pickupDate={pickupDate}
                        setMachineID={setMachineID}
                        setPickupDate={setPickupDate}
                        setPickupDates={setPickupDates}
                        pickupDates={pickupDates}
                        machinesData={machinesData}
                        isDateConfirmed={isDateConfirmed}
                        setIsDateConfirmed={setIsDateConfirmed}
                        setNewPickupDates={setNewPickupDates}
                        newPickupDates={newPickupDates}
                        areDatesConfirmed={areDatesConfirmed}
                        setAreDatesConfirmed={setAreDatesConfirmed}
                        radioConfirmed={radioConfirmed}
                        setRadioConfirmed={setRadioConfirmed}
                        popupFilling={popupFilling}
                        setPopupFilling={setPopupFilling}
                        contractors = {contractors}
                        isDatePicked = {isDatePicked}
                        setIsDatePicked = {setIsDatePicked}
                        defaultContractor = {defaultContractor}
                        selectedContractor = {selectedContractor}
                        setSelectedContractor = {setSelectedContractor}
                        plannedDates = {plannedDates}
                    />
                    <Popup
                        machineID={machineID}
                        pickupDate={pickupDate}
                        setMachineID={setMachineID}
                        setPickupDate={setPickupDate}
                        setPickupDates={setPickupDates}
                        pickupDates={pickupDates}
                        machinesData={machinesData}
                        isDateConfirmed={isDateConfirmed}
                        setIsDateConfirmed={setIsDateConfirmed}
                        setNewPickupDates={setNewPickupDates}
                        newPickupDates={newPickupDates}
                        areDatesConfirmed={areDatesConfirmed}
                        setAreDatesConfirmed={setAreDatesConfirmed}
                        radioConfirmed={radioConfirmed}
                        setRadioConfirmed={setRadioConfirmed}
                        popup={popup}
                        setPopup={setPopup}
                        isDatePicked={isDatePicked}
                    />
                </div>
            </div>}
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="mt-5 sm:rounded-lg shadow-md flex-row h-40"/>
                </SkeletonTheme> :
            <div id="summary"
                 className="mt-5 overflow-auto sm:rounded-lg shadow-md border flex-row text-center
                 py-7 mt-1 text-xs">
                <div className="flex">
                    <p className="flex-grow flex-1">
                        <span className="font-bold">Aktuell</span><br/>
                        {moment().format("DD.MM.YYYY")}</p>
                    <p className="flex-grow flex-1">
                        <span className="font-bold">Gesamtmenge aller eMSS<br/></span>
                        {machinesData && controlDocuments ? machinesData.reduce( function(a: any, b: any){
                                return a + (b['lastIndicate']);
                        }, 0) //+ controlDocuments.
                        //filter((document: any)=>moment(document.timestamp).format("DD/MM/YYYY") ==
                            //moment().format("DD/MM/YYYY")).
                        //reduce( function(a: any, b: any){
                            //return a + (b['netto']);
                       // }, 0)
                            + " kg": "0 kg"}
                    </p>
                    <p className="flex-grow flex-1">
                        <span className="font-bold">Erlös<br/></span>
                        { machinesData && controlDocuments ?
                            (machinesData.reduce( function(a: any, b: any){
                                    if (b.price_list.prices[moment().year()]) {
                                        return a + ((b['lastIndicate'])*
                                            // @ts-ignore
                                            parseInt(b.price_list.prices[moment().year()][monthsList[moment().month()]]) / 1000);
                                    }
                                    else {
                                        return a+((b['lastIndicate']))
                                    }
                        }, 0)
                                //+ controlDocuments.
                        //filter((document: any)=>moment(document.timestamp).format("DD/MM/YYYY") ==
                           // moment().format("DD/MM/YYYY")).
                        //reduce( function(a: any, b: any){
                            //return a + ((b['netto'] - b['tara'])*
                               // parseInt(machinesData.filter((machine: any) =>
                                //    machine.machine_id == b['machine_id']
                                    // @ts-ignore
                               // )[0].price_list.prices[moment().year()][monthsList[moment().month()]]) / 1000);
                      //  }, 0)
                            ).toFixed(2).replace(".", ",") + " €": "0 €"}
                    </p>
                </div>
                <hr className="my-5 mx-10"/>
                <div className="flex">
                    <p className="flex-grow flex-1">
                        <span className="font-bold">lfd. Monat</span><br/>
                        {// @ts-ignore
                            monthsList[moment().month()]} {moment().year()}</p>
                    <p className="flex-grow flex-1">
                        <span className="font-bold">Gesamtmenge aller eMSS<br/></span>
                        {machinesData && controlDocuments ? controlDocuments.
                            filter((document: any)=>moment(document.timestamp).month() == moment().month()).
                        reduce( function(a: any, b: any){
                            return a + b['netto']
                        }, 0) + machinesData.reduce( function(a: any, b: any){
                                return a + b['lastIndicate']
                        }, 0) + " kg" : "0 kg"}</p>
                    <p className="flex-grow flex-1">
                        <span className="font-bold">Gesamterlöse<br/></span>
                        {controlDocuments ? (controlDocuments.
                        filter((document: any)=>moment(document.timestamp).month() == moment().month()).
                        reduce( function(a: any, b: any){
                            return a + ((b['netto']) *
                                parseInt(machinesData.filter((machine: any) => machine.machine_id == b['machine_id'])[0]
                                    // @ts-ignore
                                    .price_list.prices[moment().year()][monthsList[moment().month()]])/1000)
                        }, 0) + (machinesData.reduce( function(a: any, b: any){
                            if (b.price_list.prices[moment().year()]) {
                                return a + ((b['lastIndicate']) *
                                    // @ts-ignore
                                    parseInt(b.price_list.prices[moment().year()][monthsList[moment().month()]]) / 1000);
                            }
                            else {
                                return a+((b['lastIndicate']))
                            }

                        }, 0))).toFixed(2).replace(".", ",") + " €" : "0 €"}
                        </p>
                </div>
            </div>
            }
        </div>
    )
}

export default StorageSystemDashboard