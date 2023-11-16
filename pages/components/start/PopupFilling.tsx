import DatePicker from "react-datepicker";
import moment from "moment";
import API from "axios";
import React, {useEffect, useState} from "react";
import emailjs, {send} from "@emailjs/browser";

const PopupFilling = ({machineID, pickupDate, setPickupDates, setMachineID, setPickupDate, pickupDates, machinesData,
                   areDatesConfirmed, setAreDatesConfirmed, setNewPickupDates, newPickupDates, radioConfirmed,
                   setRadioConfirmed, popupFilling, setPopupFilling, contractors, setIsDatePicked, isDatePicked,
                   defaultContractor, selectedContractor, setSelectedContractor, plannedDates}: any) => {

    const [displayedDate, setDisplayedDate] = useState<any>();
    const [userPermissions] = useState(
        JSON.parse(sessionStorage.getItem('user') as string));

    const sendEmail = (date: any) => {

        emailjs.send('service_5mr7itc', 'template_6zkqrdi',
            {client_name: JSON.parse(sessionStorage.getItem('company') as string).client_name,
            abholdatum: date.format('YYYY-MM-DD HH:mm'),
                user: JSON.parse(sessionStorage.getItem('user') as string).email},
            'dN44ZN6V7IyivDtmA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
            isDatePicked: true,
            selectedContractor: selectedContractor
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
        sendEmail(date)
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
        if (plannedDates && plannedDates.filter((date :any) => date.machineID == machineID)[0] != undefined) {
            const day = plannedDates.filter((date :any) => date.machineID == machineID)[0].taskEnd.day()
            // @ts-ignore
            return days[day]
        }
    }

    return(
        <div id="popup-filling"
             className={ machineID != "" && popupFilling && userPermissions.abholdatumPopupPermission
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
                                        plannedDates && plannedDates.filter((date :any) => date.machineID == machineID)[0] != undefined
                                            ? plannedDates.filter((date :any) => date.machineID == machineID)[0].taskEnd.toDate()
                                             //moment(pickupDate).toDate()
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
                                    [background-position-y:5px]"
                                    value={selectedContractor}
                                    onChange={(e)=>setSelectedContractor(e.target.value)}
                            >
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
            </div>
            <div id="popup-buttons" className="space-x-5">
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => updatePickupDates(pickupDate)}>
                    Annehmen</button>
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => {
                            setMachineID("")
                            setPopupFilling(false)
                        }}>
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