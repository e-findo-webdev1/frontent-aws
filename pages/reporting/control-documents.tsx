const machineList = [
    {
        machine: 7000,
        pdf: "",
        weigh: "10000-10069",
        date: "01/15/2020 11:32 AM",
        goods: "-",
        gross: "",
        tare: 1546,
        net: -1546,
        service_life: "287.19h",
        prod_time: "0.00h",
        kg_per_hour: -0.31,
        note: "",
        certificate: ""
    },
    {
        machine: 7000,
        pdf: "",
        weigh: "10000-10068",
        date: "01/15/2020 11:32 AM",
        goods: "-",
        gross: 130,
        tare: "",
        net: 130,
        service_life: "6,089.98h",
        prod_time: "0.00h",
        kg_per_hour: 0.03,
        note: "",
        certificate: ""
    },
    {
        machine: 7000,
        pdf: "",
        weigh: "10000-10059",
        date: "05/13/2019, 6:23 PM",
        goods: "-",
        gross: 1994,
        tare: 1546,
        net: 448,
        service_life: "49.75h",
        prod_time: "0.00h",
        kg_per_hour: 19.82,
        note: "Weighing Steel Frames Fa Sachs",
        certificate: ""
    },
    {
        machine: 8000,
        pdf: "",
        weigh: "10000-10033",
        date: "28.04.2017, 17:22",
        goods: "-",
        gross: 12000,
        tare: 1290,
        net: 9360,
        service_life: "7,45h",
        prod_time: "0.00h",
        kg_per_hour: 1256.38,
        note: "",
        certificate: ""
    },
    {
        machine: 8000,
        pdf: "",
        weigh: "10000-10033",
        date: "28.04.2017, 17:22",
        goods: "-",
        gross: 12000,
        tare: 1290,
        net: 9360,
        service_life: "7,45h",
        prod_time: "0.00h",
        kg_per_hour: 1256.38,
        note: "",
        certificate: ""
    },
    {
        machine: 8030,
        pdf: "",
        weigh: "10000-10081",
        date: "05.10.2022, 17:38",
        goods: "Eisenspäne",
        gross: 2470,
        tare: 2470,
        net: "",
        service_life: "175,18h",
        prod_time: "126,88h",
        kg_per_hour: 0.00,
        note: "",
        certificate: ""
    },
    {
        machine: 12345,
        pdf: "",
        weigh: "10000-10080",
        date: "18.05.2022, 14:45",
        goods: "Eisenspäne, gebrochen ESB",
        gross: 5010,
        tare: 2340,
        net: 2670,
        service_life: "0,64h",
        prod_time: "0,30h",
        kg_per_hour: 8949.72,
        note: "",
        certificate: ""
    },
]

const ControlDocuments = () => {
    return(
        <div id="content-page" className="px-20">
            <p className="mt-9 text-3xl font-bold mb-10">Kontrollbelege</p>
            <div className="sm:rounded-lg shadow-md border overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Maschine</th>
                        <th className="font-normal">PDF</th>
                        <th className="font-normal">Wiegenr.</th>
                        <th className="font-normal">Datum</th>
                        <th className="font-normal">Warenart</th>
                        <th className="font-normal">Bruttogewitcht</th>
                        <th className="font-normal">Taragewitcht</th>
                        <th className="font-normal">Nettogewicht</th>
                        <th className="font-normal">Standzeit</th>
                        <th className="font-normal">Prod.-<br/>Zeit</th>
                        <th className="font-normal">kg / h</th>
                        <th className="font-normal">Bemerkung</th>
                        <th className="font-normal">W.<br/>Schein</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {machineList.map((machine) =>
                        <tr key={machine.machine} className="text-xs border-t">
                            <td>{machine.machine}</td>
                            <td><img className="h-5" src="/download-svgrepo-com.svg"/></td>
                            <td>{machine.weigh.slice(0,6)}<br/>{machine.weigh.slice(6,12)}</td>
                            <td>{machine.date.slice(0,10).replaceAll("/",".")}</td>
                            <td>{machine.goods}</td>
                            <td>{machine.gross}</td>
                            <td>{machine.tare}</td>
                            <td>{machine.net}</td>
                            <td>{machine.service_life}</td>
                            <td>{machine.prod_time}</td>
                            <td>{machine.kg_per_hour}</td>
                            <td>{machine.note}</td>
                            <td><img className="h-5" src="/upload-svgrepo-com.svg"/></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ControlDocuments