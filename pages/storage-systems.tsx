import type { NextPage } from 'next'

import getFillerStyle from "./components/helpers/getFillerStyle";

const machineList = [
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7033",
        load: 75,
        materialtyp: "verzinkter Stahl",
        quality: "normal",
        stellung: "12/10/2022 13:52",
        plan_date: "14/10/2022 00:43",
        netto: 9400,
        tara: 2130,
        status: "Stillstand"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7024",
        load: 37,
        materialtyp: "VA nicht magnetisch",
        quality: "normal",
        stellung: "07/10/2022 08:08",
        plan_date: "04/11/2022 19:36",
        netto: 1100,
        tara: 1040,
        status: "Stillstand"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7029",
        load: 30,
        materialtyp: "VA 1.4301 nicht magnetisch",
        quality: "normal",
        stellung: "12/10/2022 18:39",
        plan_date: "14/10/2022 17:12",
        netto: 1940,
        tara: 750,
        status: "Wird befüllt"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7030",
        load: 24,
        materialtyp: "VA 1.4301 nicht magnetisch",
        quality: "normal",
        stellung: "-",
        plan_date: "13/10/2022 17:12",
        netto: 1540,
        tara: 750,
        status: "Stillstand"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7027",
        load: 22,
        materialtyp: "Stanzabfälle",
        quality: "normal",
        stellung: "07/10/2022 16:13",
        plan_date: "28/10/2022 08:38",
        netto: 680,
        tara: 840,
        status: "Stillstand"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7025",
        load: 21,
        materialtyp: "VA 1.4521/1.14526 magnetisch",
        quality: "normal",
        stellung: "-",
        plan_date: "nicht ermittelbar",
        netto: 680,
        tara: 0,
        status: "Containertausch"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7032",
        load: 17,
        materialtyp: "Coils Wareneingang",
        quality: "normal",
        stellung: "21/07/2021 08:25",
        plan_date: "13/10/2022 15:10",
        netto: 1100,
        tara: 0,
        status: "Stillstand"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7026",
        load: 0,
        materialtyp: "VA magnetisch",
        quality: "normal",
        stellung: "- kein Container -",
        plan_date: "nicht ermittelbar",
        netto: 0,
        tara: 0,
        status: "kein Container"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7028",
        load: 0,
        materialtyp: "Stanzabfälle",
        quality: "normal",
        stellung: "- kein Container -",
        plan_date: "nicht ermittelbar",
        netto: 0,
        tara: 0,
        status: "kein Container"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7031",
        load: 0,
        materialtyp: "unlegierter Stahl",
        quality: "normal",
        stellung: "- kein Container -",
        plan_date: "nicht ermittelbar",
        netto: 0,
        tara: 0,
        status: "kein Container"
    },
    {
        unterhemen: "Strobel GmbH",
        adresse: "94209 Regen",
        system: "bw",
        id: "7034",
        load: 0,
        materialtyp: "Stanzabfälle",
        quality: "normal",
        stellung: "- kein Container -",
        plan_date: "nicht ermittelbar",
        netto: 0,
        tara: 0,
        status: "kein Container"
    }
]

const StorageSystems: NextPage = () => {
    return (
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <div className="sm:rounded-lg shadow-md border overflow-auto h-[30.5rem] overflow-auto">
                <table className="table-auto w-full">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Unternehmen,<br/>Adresse</th>
                        <th className="font-normal">Masch.-ID<br/>Max Netto</th>
                        <th className="font-normal">Füllgrad</th>
                        <th className="font-normal">Materialtyp</th>
                        <th className="font-normal">Qualität</th>
                        <th className="font-normal">Datum<br/>Stellung</th>
                        <th className="font-normal">Plandatum</th>
                        <th className="font-normal">Netto</th>
                        <th className="font-normal">Tara</th>
                        <th className="font-normal">AZ</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50 text">
                    {machineList.map((machine) =>
                            <tr key={machine.id} className="text-xs border-t">
                                <td>
                                    <span className="underline">{machine.unterhemen}</span><br/>{machine.adresse}
                                </td>
                                <td>
                                    <span className="underline">{machine.id}</span>
                                </td>
                                <td className="flex">
                                    <div className="border border-black bg-white w-20 mr-1.5">
                                        <div className={getFillerStyle(machine.load)}/>
                                    </div>
                                    {machine.load}%</td>
                                <td>
                                    {machine.materialtyp}
                                </td>
                                <td>
                                    {machine.quality}
                                </td>
                                <td>
                                    {machine.stellung}
                                </td>
                                <td className="underline">
                                    {machine.plan_date}
                                </td>
                                <td>
                                    {machine.netto}
                                </td>
                                <td>
                                    {machine.tara}
                                </td>
                                <td/>
                            </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StorageSystems
