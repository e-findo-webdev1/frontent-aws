import DatePicker from "react-datepicker";

const Popup = ({machineID, pickupDate, setMachineID, setPickupDate}: any) => {
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
            if (pickupDate) {
                const day = pickupDate.getDay()
            // @ts-ignore
            return days[day]
            }
    }
    const savePickupDate = () => {
        setPickupDate(pickupDate)
    }
    return(
        <div id="popup"
             className={ machineID != ""
                 ? "text-sm bg-white w-1/3 sm:rounded-lg shadow-md border p-5 space-y-4 " +
                 "fixed -mt-48 left-0 right-0 m-auto"
                 : "hidden" }>
            <p>Abholdatum bearbeiten (Masch.-ID: {machineID})</p>
            <div className="flex">
                <div className="flex space-x-1">
                    <p className="m-auto">Abholdatum:</p>
                    <DatePicker className="shadow-md border text-center p-0.5" selected={pickupDate}
                                showTimeSelect dateFormat="Pp"
                                onChange={(date:Date) => setPickupDate(date)}/>
                    <div className="m-auto">({checkDay()})</div>
                </div>
            </div>
            <div className="flex space-x-3">
                <div className="flex items-center">
                    <input id="radio-1" type="radio" value="" name="default-radio" defaultChecked
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                               dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                               dark:border-gray-600"/>
                    <label htmlFor="radio-1"
                           className="flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <img src="/icon_fragezeichen 1.svg"/>Angefragt</label>
                </div>
                <div className="flex items-center">
                    <input id="radio-2" type="radio" value="" name="default-radio"
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
                        onClick={() => {savePickupDate()}}>
                    Speichern</button>
                <button className="sm:rounded-lg shadow-md border p-1"
                        onClick={() => {setMachineID("")}}>
                    Abbrechen</button>
            </div>
        </div>
    )
}

export default Popup