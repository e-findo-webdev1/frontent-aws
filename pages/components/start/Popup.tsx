import DatePicker from "react-datepicker";
import moment from "moment";
import API from "axios";
import {useState} from "react";

const Popup = ({machineID, pickupDate, setPickupDates, setMachineID, setPickupDate, pickupDates, machinesData,
                  areDatesConfirmed, setAreDatesConfirmed, setNewPickupDates, newPickupDates, radioConfirmed,
                   setRadioConfirmed, popup, setPopup, isDatePicked}: any) => {

    const [displayedDate, setDisplayedDate] = useState<any>()
    const [userPermissions] = useState(
        JSON.parse(sessionStorage.getItem('user') as string));


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
    const updatePickupDates = async (date: any) => {
       // pickupDates = pickupDates.filter((obj:any) =>
       // {return obj.machineID!=machineID})
      //  pickupDates.push({machineID: machineID, taskEnd: date})
      //  setPickupDates(pickupDates)
        let machineData = machinesData.filter((obj: any)=> {return obj.machine_id == machineID})[0]
        let newMachineData = {
            machine_id: machineData.machine_id,
            machineType: machineData.machineType,
            machineName: machineData.machineName,
            group: machineData.group,
            waretype: machineData.waretype,
            quality: machineData.quality,
            index: machineData.index,
            maxNetto: machineData.maxNetto,
            minContainer: machineData.minContainer,
            maxContainer: machineData.maxContainer,
            averageThroughput: machineData.averageThroughput,
            manualTara: machineData.manualTara,
            minForFullStart: machineData.minForFullStart,
            newFT111: machineData.newFT111,
            automaticTara: machineData.automaticTara,
            fillingType: machineData.fillingType,
            plandateCalculation: machineData.plandateCalculation,
            status: machineData.status,
            client: machineData.client,
            total_working_time: machineData.total_working_time,
            total_working_weight: machineData.total_working_weight,
            pickup_date: date.format('YYYY-MM-DD HH:mm'),
            isDateConfirmed: radioConfirmed,
            lastIndicate: machineData.lastIndicate,
            lastTara: machineData.lastTara,
            price_list: machineData.price_list,
            isDatePicked: true,
            selectedContractor: machineData.selectedContractor
        }

        let newDates = newPickupDates.filter((obj:any) =>
        {return obj.machine_id!=machineID})
        newDates.push([{machine_id: machineID, date: date.format('YYYY-MM-DD HH:mm')}])
        setNewPickupDates(newDates.flat())
        let newDatesConfirmed = areDatesConfirmed.filter((obj:any) =>
        {return obj.machine_id!=machineID})
        newDatesConfirmed.push([{machine_id: machineID, date_confirmed: radioConfirmed}])
        setAreDatesConfirmed(newDatesConfirmed.flat())
        await sendData(newMachineData)
        setMachineID("")
        setPickupDate("")
        setRadioConfirmed("")
    }

    const checkDay = () => {
        const days =
            {
                0: "Montag",
                1: "Dienstag",
                2: "Mittwoch",
                3: "Donnerstag",
                4: "Freitag",
                5: "Samstag",
                6: "Sonntag"
            }
            if (pickupDate && pickupDate != "") {
                const day = moment(pickupDate).day()
            // @ts-ignore
            return days[day]
            }
    }

    return(
        <div id="popup"
             className={ machineID != "" && popup && userPermissions.abholdatumPopupPermission
                 ? "text-sm bg-white w-1/3 sm:rounded-lg shadow-md border p-5 space-y-4 " +
                 "fixed -mt-64 left-0 right-0 m-auto"
                 : "hidden" }>
            <p>Abholdatum bearbeiten (Masch.-ID: {machineID})</p>
            <div className="flex">
                <div className="flex space-x-1">
                    <p className="m-auto">Abholdatum:</p>
                    <DatePicker className="shadow-md border text-center p-0.5"
                                // @ts-ignore
                                selected={
                                    pickupDate && pickupDate != ""
                                        ? moment(pickupDate).toDate()
                                        // @ts-ignore
                                        //: pickupDates.length != 0 ?
                                         //   pickupDates
                                          //      .filter((obj:any) =>
                                         //       {return obj.machineID==machineID})[0].taskEnd.toDate()
                                            : ""
                    }
                                showTimeSelect dateFormat="dd.MM.yyyy HH:mm"
                                timeFormat="HH:mm"
                                onChange={(date:Date) => setPickupDate(moment(date))}/>
                    <div className="m-auto">({checkDay()})</div>
                </div>
            </div>
            <div className="flex space-x-3">
                <div className="flex items-center">
                    <input id="radio-1" type="radio" value="" name="default-radio"
                           checked={machinesData && radioConfirmed == false
                                        ? true
                                        : false
                            }
                           onChange={()=>{setRadioConfirmed(false)}}
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                               dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                               dark:border-gray-600"/>
                    <label htmlFor="radio-1"
                           className="flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <img src="/icon_fragezeichen 1.svg"/>Angefragt</label>
                </div>
                <div className="flex items-center">
                    <input id="radio-2" type="radio" value="" name="default-radio"
                           checked={machinesData && radioConfirmed == true
                               ? true
                               : false
                           }
                           onChange={()=>{setRadioConfirmed(true)}}
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                               dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                               dark:border-gray-600"/>
                    <label htmlFor="radio-2"
                           className="flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <img src="/icon_haken 1.svg"/>Bestätigt</label>
                </div>
            </div>
            <div id="popup-buttons" className="space-x-5">
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => {updatePickupDates(pickupDate)}}>
                    Speichern</button>
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => {setMachineID("");setPickupDate("");setRadioConfirmed("");setPopup(false)}}>
                    Abbrechen</button>
            </div>
        </div>
    )
}

export default Popup