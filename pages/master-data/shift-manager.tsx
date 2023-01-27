import {useState} from "react";

const ShiftManager = () => {
    const [numberOfShifts, setNumberOfShitfs] = useState<any>(1)

    return(
        <div id="content-page" className="px-20 h-full overflow-auto">
                <p className="mt-5 text-3xl font-bold mb-5">Schichten</p>
            <div className="flex-row">
                <p className="text-sm">Anzahl Schichten:</p>
                <select className="w-52 pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                        onChange={(e)=>setNumberOfShitfs(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className="mt-5 sm:rounded-lg shadow-md border w-1/3">
                <table className="flex-row table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th/>
                        <th className="font-normal">Start</th>
                        <th className="font-normal">Ende</th>
                    </tr>
                    </thead>
                    {
                        numberOfShifts == 1
                            ?
                            <tbody className="bg-gray-50">
                                <tr className="text-xs text-gray-500 border-b text-left">
                                    <td className="w-24">Schicht 1</td>
                                    <td>
                                        <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                    </td>
                                    <td>
                                        <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                    </td>
                                </tr>
                            </tbody>
                            : numberOfShifts == 2
                        ?
                                <tbody className="bg-gray-50">
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 1</td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                    </tr>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 2</td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                    </tr>
                                </tbody>
                            : numberOfShifts == 3
                        ?
                                    <tbody className="bg-gray-50">
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 1</td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                    </tr>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 2</td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                    </tr>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 3</td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                        <td>
                                            <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                        </td>
                                    </tr>
                                    </tbody>
                                : numberOfShifts == 4
                        ?
                                        <tbody className="bg-gray-50">
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 1</td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                        </tr>
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 2</td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                        </tr>
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 3</td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                        </tr>
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 4</td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                            <td>
                                                <input className="border rounded w-full pl-2.5 py-0.5"></input>
                                            </td>
                                        </tr>
                                        </tbody>
                                    : ""

                    }
                </table>
            </div>
        </div>
    )
}

export default ShiftManager