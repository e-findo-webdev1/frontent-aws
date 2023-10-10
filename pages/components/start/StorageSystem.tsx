import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import MachinesTable from "./MachinesTable";
import Popup from "./Popup";

const StorageSystem = () => {
    const [startDate] = useState(new Date());
    const [pickupDate, setPickupDate] = useState(startDate)
    const [machineID, setMachineID] = useState("")

    return (
        <div id="storage-system" className="mt-5">
              <span className="text-xs uppercase font-bold text-gray-500">
                  Lagersysteme
              </span>
            <div className="sm:rounded-lg shadow-md border">
                <table className="flex-row w-full table-auto">
                    <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th className="font-normal">Masch.-ID<br/>Max Netto</th>
                            <th className="font-normal">Material</th>
                            <th className="font-normal">Füllgrad</th>
                            <th className="font-normal">Plandatum<br/>Abholdatum</th>
                            <th className="font-normal">Netto (kg)</th>
                        </tr>
                    </thead>
                    <MachinesTable
                        setMachineID={setMachineID}
                        setPickupDate={setPickupDate} />
                </table>
                <Popup
                    machineID={machineID}
                    pickupDate={pickupDate}
                    setMachineID={setMachineID}
                    setPickupDate={setPickupDate}
                />
            </div>
        </div>
    )
}

export default StorageSystem