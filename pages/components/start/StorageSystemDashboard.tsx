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
import React from 'react';
import { Audio } from 'react-loader-spinner'

export default function StorageSystemDashboard({
// @ts-ignore
   companyMachines, companyControlDocuments, companyShifts, contractors, companyHolidays
}) {

    const [machineID, setMachineID] = useState<any>("");
    const [plannedDates, setPlannedDates] = useState<[]>([]);
    const [pickupDate, setPickupDate] = useState<any>("");
    const [pickupDates, setPickupDates] = useState<[]>([]);
    const [isDateConfirmed, setIsDateConfirmed] = useState<any>("");
    const [newPickupDates, setNewPickupDates] = useState<[]>([]);
    const [areDatesConfirmed, setAreDatesConfirmed] = useState<[]>([]);
    const [radioConfirmed, setRadioConfirmed] = useState<any>("");
    const [popupFilling, setPopupFilling] = useState<any>(false);
    const [popup, setPopup] = useState<any>(false);
    const [isDatePicked, setIsDatePicked] = useState<any>(false);
    const [defaultContractor, setDefaultContractor] = useState<any>();
    const [selectedContractor, setSelectedContractor] = useState<any>();
    const [userPermissions] = useState(
        JSON.parse(sessionStorage.getItem('user') as string));
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false);

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

    const checkHolidays = () => {
        if (companyHolidays && companyHolidays[0])
        {
            /// check if date is a holiday
            let currentDate = moment()
            let newCurrentDate = currentDate

            for (let holiday in companyHolidays[0].holidays) {
                let holidayStart = moment(companyHolidays[0].holidays[holiday].date_start)
                let holidayEnd = moment(companyHolidays[0].holidays[holiday].date_end)
                if (currentDate.unix() >= holidayStart.unix() && currentDate.unix() <= holidayEnd.unix()) {
                    let n
                    n = (holidayEnd.unix() - holidayStart.unix())/ 86400
                    newCurrentDate = currentDate.add(n + 1, 'days')
                }
            }
            if (newCurrentDate == currentDate) {
                return currentDate
            } else {
                return newCurrentDate.startOf('day')
            }
        }

    }
    const returnFirstShift = (taskStart: any) => {
        //let currentDate = moment(taskStart.format('L'))
        let newCurrentDate = checkHolidays();
        // @ts-ignore
        let currentDate = moment(newCurrentDate.format('L'))
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

    let holidaysAdded: string[] = []
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

                    ///
                    for (let holiday in companyHolidays[0].holidays) {
                        let holidayStart = moment(companyHolidays[0].holidays[holiday].date_start)
                        let holidayEnd = moment(companyHolidays[0].holidays[holiday].date_end)
                        if (currentDate.unix() >= holidayStart.unix() && currentDate.unix() <= holidayEnd.unix()) {
                            if (!holidaysAdded.includes(currentDate.format("DD.MM.YYYY"))) {
                                holidaysAdded.push(currentDate.format("DD.MM.YYYY"))
                            }
                        }
                    }
                    ///

                    if (holidaysAdded.includes(currentDate.format("DD.MM.YYYY"))) {
                        todayShifts = {'shift1': {
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
                            },}
                    }
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
    if (companyMachines && companyControlDocuments && companyShifts && plannedDates.length == 0) {

        // @ts-ignore
        SHIFT_CALENDAR = capitalizeDays(companyShifts)
        for (let machine in companyMachines) {
            const machineID = companyMachines[machine].machine_id
            const averageThroughput = //((controlDocuments.reduce( function(a: any, b: any){
                  //return a + b['averageThroughput'];
                 //}, 0) / controlDocuments.length) * 9550 +
                (247 * 99.9 + (companyMachines[machine].averageThroughput) * 0.1) / 100
            const currentNetto = companyMachines[machine].lastIndicate
            const maxNetto = companyMachines[machine].maxNetto
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

            <div>
                            <span className="text-xs uppercase font-bold text-gray-500">
                  Lagersysteme
            </span>
                {!companyMachines ?
                    <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                        <Skeleton className="min-h-80 max-h-80 sm:rounded-lg shadow-md"/>
                    </SkeletonTheme> :
                    <div className="sm:rounded-lg shadow-md overflow-auto">
                        <div className="sm:rounded-lg shadow-md border overflow-auto max-h-80 bg-gray-50">
                            <table className="flex-row table-fixed w-full overflow-auto min-w-full max-w-52">
                                <thead className="bg-gray-50">
                                <tr className="text-xs text-gray-500 border-b text-left bg-white">
                                    <th className="font-normal w-[5.6rem]">Masch.-ID<br/>Max Netto</th>
                                    <th className="font-normal w-[7rem]">Material</th>
                                    <th className="font-normal w-[9.1rem]">Füllgrad</th>
                                    <th className="font-normal w-[6rem]">Plandatum<br/>Abholdatum</th>
                                    <th className="font-normal w-[4rem]">Netto (kg)</th>
                                    <th className="font-normal w-[6.5rem] text-right">Monatspreis<br/>(in € / t)</th>
                                    <th className="font-normal w-[5rem] text-right">Summe<br/>(in €)</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                {companyMachines && companyControlDocuments
                                    ? companyMachines.sort(function(a: any, b: any){
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
                                                               if (companyMachines && companyMachines.filter((obj: any) =>
                                                               {return obj.machine_id == machine.machine_id})[0]
                                                                   .pickup_date != "") {
                                                                   setPickupDate(moment(companyMachines.filter((obj: any) =>
                                                                   {return obj.machine_id == machine.machine_id})[0].pickup_date))
                                                               } else if (pickupDates) {
                                                                   setPickupDate(pickupDates
                                                                       .filter((obj:any) =>
                                                                       {return obj.machineID===machine.machine_id})[0]
                                                                       // @ts-ignore
                                                                       .taskEnd)
                                                               }

                                                               setIsDateConfirmed(companyMachines.filter((obj: any) =>
                                                               {return obj.machine_id == machine.machine_id})[0]
                                                                   .isDateConfirmed)
                                                               setRadioConfirmed(companyMachines.filter((obj: any) =>
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
                                                           if (companyMachines && companyMachines.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .pickup_date != "") {
                                                               setPickupDate(moment(companyMachines.filter((obj: any) =>
                                                               {return obj.machine_id == machine.machine_id})[0].pickup_date))
                                                           } else if (pickupDates) {
                                                               setPickupDate(pickupDates
                                                                   .filter((obj:any) =>
                                                                   {return obj.machineID===machine.machine_id})[0]
                                                                   // @ts-ignore
                                                                   .taskEnd)
                                                           }

                                                           setIsDateConfirmed(companyMachines.filter((obj: any) =>
                                                           {return obj.machine_id == machine.machine_id})[0]
                                                               .isDateConfirmed)
                                                           setRadioConfirmed(companyMachines.filter((obj: any) =>
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
                                                        && companyMachines.filter((obj: any) =>
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
                                                            && companyMachines.filter((obj: any) =>
                                                            {return obj.machine_id == machine.machine_id})[0]
                                                                .pickup_date != ""
                                                                ? moment(companyMachines.filter((obj: any) =>
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
                                                        && machine.price_list.prices
                                                            // @ts-ignore
                                                            [moment().year()][monthsList[moment().month()]]
                                                            ?
                                                            machine.price_list.prices
                                                                // @ts-ignore
                                                                [moment().year()][monthsList[moment().month()]] : "0,00"} €
                                                    </td>
                                                    <td className="text-right">{machine.price_list &&
                                                    machine.price_list.prices[moment().year()]
                                                    && machine.price_list.prices
                                                        // @ts-ignore
                                                        [moment().year()][monthsList[moment().month()]]
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
                                machinesData={companyMachines}
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
                                machinesData={companyMachines}
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
                {!companyMachines ?
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
                                {companyMachines && companyControlDocuments ? companyMachines.reduce( function(a: any, b: any){
                                        if (b.price_list.prices[moment().year()]) {
                                            return a + ((b['lastIndicate']))
                                        } else return 0
                                    }, 0)
                                    + " kg": "0 kg"}
                            </p>
                            <p className="flex-grow flex-1">
                                <span className="font-bold">Erlös<br/></span>
                                { companyMachines && companyControlDocuments ?
                                    (companyMachines.reduce( function(a: any, b: any){
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
                                {companyMachines && companyControlDocuments ? companyControlDocuments.
                                filter((document: any)=>moment(document.timestamp).month() == moment().month()).
                                reduce( function(a: any, b: any){
                                    return a + b['netto']
                                }, 0) + companyMachines.reduce( function(a: any, b: any){
                                    return a + b['lastIndicate']
                                }, 0) + " kg" : "0 kg"}</p>
                            <p className="flex-grow flex-1">
                                <span className="font-bold">Gesamterlöse<br/></span>
                                {companyControlDocuments && companyMachines ? (companyControlDocuments.
                                filter((document: any)=>moment(document.timestamp).month() == moment().month()).
                                reduce( function(a: any, b: any){
                                    return a + ((b['netto']) *
                                        parseInt(companyMachines.filter((machine: any) => machine.machine_id == b['machine_id'])[0]
                                            // @ts-ignore
                                            .price_list.prices[moment().year()][monthsList[moment().month()]])/1000)
                                }, 0) + (companyMachines.reduce( function(a: any, b: any){
                                    if (b.price_list.prices[moment().year()]) {
                                        // @ts-ignore
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

        </div>
    )
}