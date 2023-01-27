import getFillerStyle from "../helpers/getFillerStyle";
import Link from "next/link";

const machineList = [
    {
        type: "esb",
        id: "4712",
        max_netto: 26500,
        material: "Eisenspäne, gebrochen ESB, gebrochen",
        load: 79,
        plan_date: "17.10.2022 02:31",
        pickup_date: "1/1/2022 01:00",
        netto: 5880
    },
    {
        type: "bw",
        id: "9001 CMS-A",
        max_netto: 9000,
        material: "Eisenspäne, normal",
        load: 31,
        plan_date: "21/12/2022 02:26",
        pickup_date: "4/4/2022 01:00",
        netto: 2760
    },
    {
        type: "bw",
        id: "9002 CMS-A",
        max_netto: 9000,
        material: "Eisenspäne, normal",
        load: 22,
        plan_date: "noch keine Füllung",
        pickup_date: "-",
        netto: 1960
    },
    {
        type: "esb",
        id: "4711",
        max_netto: 26500,
        material: "Eisenspäne, gebrochen ESB, gebrochen",
        load: 0,
        plan_date: "nicht ermittelbar",
        pickup_date: "-",
        netto: 120
    },
    {
        type: "esb",
        id: "4711",
        max_netto: 26500,
        material: "Eisenspäne, gebrochen ESB, gebrochen",
        load: 0,
        plan_date: "nicht ermittelbar",
        pickup_date: "-",
        netto: 120
    },
    {
        type: "esb",
        id: "4711",
        max_netto: 26500,
        material: "Eisenspäne, gebrochen ESB, gebrochen",
        load: 0,
        plan_date: "nicht ermittelbar",
        pickup_date: "-",
        netto: 120
    },
]

const MachinesTable = ({setMachineID, setPickupDate}: any) => {
    return(
        <tbody className="bg-gray-50">
        {machineList.map((machine) =>
            <tr key={machine.id} className="text-xs border-t">
                <td>
                    {machine.type}: <span className="underline">
                        <Link href={"/machines/" + machine.id}>
                            {machine.id}
                        </Link></span><br/>
                    <span>{machine.max_netto}</span></td>
                <td>{machine.material}</td>
                <td className="flex">
                    <div className="border border-black bg-white w-32 mr-1.5">
                        <div className={getFillerStyle(machine.load)}/>
                    </div>
                    {machine.load}%</td>
                <td>{machine.plan_date}<br/>
                    <span id={"pickup_date_" + machine.id}
                        className={machine.pickup_date != "-"
                                    ? "flex underline"
                                    : "flex"}>
                        {machine.pickup_date}
                        <button onClick={() => {setMachineID(machine.id);
                        setPickupDate(new Date(machine.pickup_date))}}>
                            <img
                            src={machine.pickup_date != "-"
                            ? "/icon_fragezeichen 1.svg"
                            : ""
                        }/>
                        </button>
                    </span>
                </td>
                <td>{machine.netto}</td>
            </tr>
        )}
        </tbody>
    )
}

export default MachinesTable