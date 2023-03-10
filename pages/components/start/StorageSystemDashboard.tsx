import {useEffect, useState} from "react";
import Link from "next/link";
import getFillerStyle from "../helpers/getFillerStyle";
import API from "axios";
import moment from "moment";
import Popup from "./Popup";
import "react-datepicker/dist/react-datepicker.css";

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

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items
                    .filter((machine: { client: string; }) =>
                        machine.client == "e-findo GmbH"));
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts')
            .then((response) => {
                setShift(
                    response.data.Items
                        .filter( (shift: any) => shift.shift_id == 10000 )[0].shifts
                );
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

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

    if (machinesData && shifts && plannedDates.length == 0) {
        // @ts-ignore
        SHIFT_CALENDAR = capitalizeDays(shifts)
        for (let machine in machinesData) {
            const machineID = machinesData[machine].machine_id
            const averageThroughput = machinesData[machine].averageThroughput
            const currentNetto = machinesData[machine].lastTara
            const maxNetto = machinesData[machine].maxNetto
            const workingHours = (maxNetto-currentNetto)/averageThroughput
            if (averageThroughput != 0) {
                calculatePlannedDate(workingHours, machineID)
            }
        }
    }


    return (
        <div id="storage-system" className="mt-5">
              <span className="text-xs uppercase font-bold text-gray-500">
                  Lagersysteme
              </span>
            <div className="sm:rounded-lg shadow-md border overflow-auto">
                <div className="sm:rounded-lg shadow-md border overflow-auto">
                    <table className="flex-row w-full table-auto">
                        <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th className="font-normal">Masch.-ID<br/>Max Netto</th>
                            <th className="font-normal">Material</th>
                            <th className="font-normal">F??llgrad</th>
                            <th className="font-normal">Plandatum<br/>Abholdatum</th>
                            <th className="font-normal">Netto (kg)</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                        {machinesData
                            ? machinesData.map((machine: any) =>
                                    <tr key={machine.machine_id} className="text-xs border-t">
                                        <td>
                                            {machine.machineType}: <span className="underline">
                        <Link href={"/machines/" + machine.machine_id}>
                            {machine.machine_id}
                        </Link></span><br/>
                                            <span>{machine.maxNetto}</span></td>
                                        <td>{machine.waretype}</td>
                                        <td className="flex">
                                            <div className="border border-black bg-white w-32 mr-1.5">

                                                <div
                                                    // @ts-ignore
                                                    className={ (machine.lastIndicate - machine.lastTara) * 100
                                                    / machine.maxNetto > 0
                                                    ? getFillerStyle(
                                                    (machine.lastIndicate - machine.lastTara) * 100
                                                    / machine.maxNetto
                                                    )
                                                    : 0
                                                }/>
                                            </div>
                                            { parseInt(((machine.lastIndicate - machine.lastTara) * 100
                                                / machine.maxNetto).toFixed(0)) > 0
                                                ?
                                                ((machine.lastIndicate - machine.lastTara) * 100
                                                / machine.maxNetto).toFixed(0)
                                                : 0}%</td>
                                        <td>
                                            {
                                                <span>
                                                    { machine.total_working_time != 0 && plannedDates && plannedDates
                                                            .filter((obj:any) =>
                                                            {return obj.machineID===machine.machine_id}).length != 0
                                                        ? plannedDates
                                                          .filter((obj:any) =>
                                                            {return obj.machineID===machine.machine_id})
                                                            .map((plannedDate: any) =>
                                                                <a key={plannedDate.machineID}>
                                                                    {plannedDate.taskEnd.format('DD.MM.YYYY HH:mm')}
                                                                </a>)
                                                        : "-"
                                                    }<br/>
                                                    <a className={ machine.total_working_time != 0
                                                        ? "underline cursor-pointer flex"
                                                        : "underline pointer-events-none flex"}
                                                    onClick={()=>
                                                    {
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
                                                    {   newPickupDates && newPickupDates.filter((obj:any) =>
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
                                                            : machine.total_working_time !=0
                                                            && machinesData.filter((obj: any) =>
                                                            {return obj.machine_id == machine.machine_id})[0]
                                                            .pickup_date != ""
                                                            ? moment(machinesData.filter((obj: any) =>
                                                                {return obj.machine_id == machine.machine_id})[0]
                                                                .pickup_date).format('DD.MM.yyyy HH:mm')
                                                            : "-"
                                                    }
                                                        {   areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id}).length != 0
                                                            && areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id})
                                                            // @ts-ignore
                                                            .date_confirmed == false
                                                            ? <img className="ml-1" src="/icon_fragezeichen 1.svg"/>
                                                            : machine.total_working_time !=0
                                                            && machine.isDateConfirmed == false
                                                                    ? <img className="ml-1" src="/icon_fragezeichen 1.svg"/>
                                                                    :""}
                                                        {   areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id}).length != 0
                                                        && areDatesConfirmed.filter((obj:any)=>
                                                        {return obj.machine_id == machine.machine_id})
                                                            // @ts-ignore
                                                            .date_confirmed == true
                                                            ? <img className="ml-1" src="/icon_fragezeichen 1.svg"/>
                                                            : machine.total_working_time !=0
                                                            && machine.isDateConfirmed == true
                                                                ? <img className="ml-1" src="/icon_haken 1.svg"/>
                                                                :""}
                                                    </a>
                                                </span>
                                            }
                                        </td>
                                        <td>{machine.maxNetto}</td>
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
                    />
                </div>
            </div>
        </div>
    )
}

export default StorageSystemDashboard