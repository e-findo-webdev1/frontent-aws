import DatePicker from "react-datepicker";
import moment from "moment";
import API from "axios";
import React, {useState} from "react";

const PopupFilling = ({machineID, pickupDate, setPickupDates, setMachineID, setPickupDate, pickupDates, machinesData,
                   areDatesConfirmed, setAreDatesConfirmed, setNewPickupDates, newPickupDates, radioConfirmed,
                   setRadioConfirmed, popupFilling, setPopupFilling, contractors}: any) => {

    const [displayedDate, setDisplayedDate] = useState<any>();


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
    const updatePickupDates = (date: any) => {
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
        }

        let newDates = newPickupDates.filter((obj:any) =>
        {return obj.machine_id!=machineID})
        newDates.push([{machine_id: machineID, date: date.format('YYYY-MM-DD HH:mm')}])
        setNewPickupDates(newDates.flat())
        let newDatesConfirmed = areDatesConfirmed.filter((obj:any) =>
        {return obj.machine_id!=machineID})
        newDatesConfirmed.push([{machine_id: machineID, date_confirmed: radioConfirmed}])
        setAreDatesConfirmed(newDatesConfirmed.flat())
        sendData(newMachineData)
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
        // @ts-ignore
        //  else if ( pickupDates.length != 0) {
        //      const day = pickupDates.filter((obj:any) =>
        //         {return obj.machineID==machineID})[0].taskEnd.toDate().getDay()
        // @ts-ignore
        //      return days[day]
        //  }
    }
    console.log(contractors)
    return(
        <div id="popup-filling"
             className={ machineID != "" && popupFilling
                 ? "text-xs bg-white w-1/3 sm:rounded-lg shadow-md border p-5 space-y-4 " +
                 "fixed left-0 right-64 m-auto top-72"
                 : "hidden" }>
            <p>Möchten Sie eine Abholung zum Plandatum anfragen?  (Masch.-ID: {machineID})</p>
            <div className="flex-row ml-2.5">
                <div className="flex-row space-x-1">
                    <div className="flex space-x-3">
                        <p className="m-auto w-full">Angefragtes Abholdatum:</p>
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
                        <p className="m-auto w-full">({checkDay()})</p>
                    </div>
                </div>
                <br/>
                <div className="flex-row">
                    <p className="">Auftragnehmer: {
                        contractors ?
                            <select className="pl-2.5 py-0.5 appearance-none
                                border rounded
                                    ml-16 w-1/2 bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                    bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                    [background-position-y:5px]">
                                {contractors
                                .sort(function (a: any, b: any) {
                                if (a.contractor_name < b.contractor_name) {
                                return -1;
                            }
                                if (a.contractor_name > b.contractor_name) {
                                return 1;
                            }
                                return 0;
                            })
                                .map((contractor: any)=>
                                <option key={contractor.contractor_id}>{contractor.contractor_name}</option>
                                )}
                            </select>
                        : ""
                    }
                    </p>

                </div>
            </div>
            <div className="flex space-x-3">
                <div className="flex items-center">
                    <input id="radio-1" type="radio" value="" name="default-radio"
                           //checked={}
                           onChange={()=>{}}
                           className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                               dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                               dark:border-gray-600"/>
                    <label htmlFor="radio-1"
                           className="flex ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">
                        PDF generieren
                    </label>
                </div>
                <div className="flex items-center">
                    <input id="radio-2" type="radio" value="" name="default-radio"
                           //checked={}
                           onChange={()=>{}}
                           className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                               dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                               dark:border-gray-600"/>
                    <label htmlFor="radio-2"
                           className="flex ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">
                        Dispo-Programm
                    </label>
                </div>
            </div>
            <div id="popup-buttons" className="space-x-5">
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => {}}>
                    Annehmen</button>
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => {}}>
                    Ablehnen</button>
                <button className="sm:rounded-lg shadow-md border p-1 float-right"
                        onClick={() => {
                            setMachineID("")
                            setPopupFilling(false)
                        }}>
                    Weiter</button>
            </div>
        </div>
    )
}

export default PopupFilling