import React, {useEffect, useState} from "react";
import API from "axios";

const ShiftManager = () => {
    const [hoursList, setHoursList] = useState<any[]>([]);

    const [numberOfShifts, setNumberOfShitfs] = useState<any>(0)
    const [clientId, setClientId] = useState<any>();
    const [shifts, setShifts] = useState<any>({
        shift_id: 0,
        client_id: 0,
        selection: {},
        shifts: {},
        shiftHours: {
            shift1_end: "00:00",
            shift1_start: "00:00",
            shift2_end: "00:00",
            shift2_start: "00:00",
            shift3_end: "00:00",
            shift3_start: "00:00",
            shift4_end: "00:00",
            shift4_start: "00:00"
        }
    });

    useEffect(() => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts';

        setClientId(parseInt(JSON.parse(sessionStorage.getItem("company") as string).client_number))

        API.get(apiName)
            .then((response) => {
                setShifts(
                    response.data.Items
                        .filter( (shift: any) => shift.shift_id ==
                            JSON.parse(sessionStorage.getItem("company") as string).client_number )[0]
                );
                if (numberOfShifts == 0) {
                    setNumberOfShitfs(-1)
                }


            })
            .catch((error) => {
                console.log(error.response);
            });
        let tempHoursList = []
        for (let hour = 0; hour < 24; hour++) {
            if (hour < 10) {
                tempHoursList.push(`0${hour}:00`)
                tempHoursList.push(`0${hour}:05`)
            } else {
                tempHoursList.push(`${hour}:00`)
                tempHoursList.push(`${hour}:05`)
            }

            for (let x = 10; x < 60; x += 5) {
                if (hour < 10) {
                    tempHoursList.push(`0${hour}:${x}`)
                } else {
                    tempHoursList.push(`${hour}:${x}`)
                }
            }

        }
        setHoursList(tempHoursList)
        if (shifts.shiftHours && numberOfShifts == -1) {
            let x = 0
            for ( let i = 0; i < 4; i++) {
                if (shifts.shiftHours['shift' + i + '_start'] != "00:00" && shifts.shiftHours['shift' + i + '_end'] != "00:00"
                    && shifts.shiftHours['shift' + i + '_start'] != undefined) {
                    x+=1
                }
                setNumberOfShitfs(x)
            }
        }

    },[clientId, numberOfShifts]);


    const responseBody = { shift_id: 0, client_id: 0, selection: {}, shifts: {}, shiftHours: {} }

    const saveShifts = (event: any) => {
        event.preventDefault();
        responseBody.shift_id = clientId
        responseBody.shifts = shifts.shifts
        responseBody.selection = shifts.selection
        responseBody.shiftHours = shifts.shiftHours
        sendData(responseBody)
        window.location.replace('/master-data/' + JSON.parse(sessionStorage.getItem('company') as string).client_id)

    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div id="content-page" className="px-20 h-full overflow-auto">
                <p className="mt-5 text-3xl font-bold mb-5">Schichten</p>
            <div className="flex-row">
                <p className="text-sm">Anzahl Schichten:</p>
                { shifts.shiftHours && numberOfShifts != -1 ?
                    <select className="w-52 pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                            defaultValue={numberOfShifts}
                            onChange={(e) => setNumberOfShitfs(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                : ""}
            </div>
            <div className="mt-5 sm:rounded-lg shadow-md border w-1/5 min-w-max">
                <table className="flex-row table-auto w-full">
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
                                        <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                value={shifts.shiftHours
                                                    ? shifts.shiftHours.shift1_start
                                                    : ""}
                                                onChange={(e: any)=>
                                                    setShifts({
                                                        ...shifts,
                                                        shiftHours: {
                                                            ...shifts.shiftHours,
                                                            shift1_start: e.target.value
                                                        }
                                                    }
                                                )}
                                        >
                                            {
                                                hoursList
                                                    ? hoursList.map((hour: any) =>
                                                     <option className="top-full" key={hour}
                                                     >{hour}</option>
                                                    )
                                                    : ""
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                value={shifts.shiftHours
                                                    ? shifts.shiftHours.shift1_end
                                                    : ""}
                                                onChange={(e: any)=>
                                                    setShifts({
                                                            ...shifts,
                                                            shiftHours: {
                                                                ...shifts.shiftHours,
                                                                shift1_end: e.target.value
                                                            }
                                                        }
                                                    )}
                                        >
                                            {
                                                hoursList
                                                    ? hoursList.map((hour: any) =>
                                                        <option className="top-full" key={hour}>{hour}</option>
                                                    )
                                                    : ""
                                            }
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                            : numberOfShifts == 2
                        ?
                                <tbody className="bg-gray-50">
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 1</td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift1_start
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift1_start: e.target.value
                                                                }
                                                            }
                                                        )}
                                            >
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift1_end
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift1_end: e.target.value
                                                                }
                                                            }
                                                        )}
                                            >
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 2</td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift2_start
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift2_start: e.target.value
                                                                }
                                                            }
                                                        )}
                                            >
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full"key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift2_end
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift2_end: e.target.value
                                                                }
                                                            }
                                                        )}
                                            >
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            : numberOfShifts == 3
                        ?
                                    <tbody className="bg-gray-50">
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 1</td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift1_start
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift1_start: e.target.value
                                                                }
                                                            }
                                                        )}>
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift1_end
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift1_end: e.target.value
                                                                }
                                                            }
                                                        )}>
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 2</td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift2_start
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift2_start: e.target.value
                                                                }
                                                            }
                                                        )}>
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift2_end
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift2_end: e.target.value
                                                                }
                                                            }
                                                        )}>
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <td className="w-24">Schicht 3</td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift3_start
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift3_start: e.target.value
                                                                }
                                                            }
                                                        )}>
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                    value={shifts.shiftHours
                                                        ? shifts.shiftHours.shift3_end
                                                        : ""}
                                                    onChange={(e: any)=>
                                                        setShifts({
                                                                ...shifts,
                                                                shiftHours: {
                                                                    ...shifts.shiftHours,
                                                                    shift3_end: e.target.value
                                                                }
                                                            }
                                                        )}>
                                                {
                                                    hoursList
                                                        ? hoursList.map((hour: any) =>
                                                            <option className="top-full" key={hour}>{hour}</option>
                                                        )
                                                        : ""
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                : numberOfShifts == 4
                        ?
                                        <tbody className="bg-gray-50">
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 1</td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift1_start
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift1_start: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift1_end
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift1_end: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 2</td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift2_start
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift2_start: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift2_end
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift2_end: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 3</td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift3_start
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift3_start: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift3_end
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift3_end: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="text-xs text-gray-500 border-b text-left">
                                            <td className="w-24">Schicht 4</td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift4_start
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift4_start: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                        value={shifts.shiftHours
                                                            ? shifts.shiftHours.shift4_end
                                                            : ""}
                                                        onChange={(e: any)=>
                                                            setShifts({
                                                                    ...shifts,
                                                                    shiftHours: {
                                                                        ...shifts.shiftHours,
                                                                        shift4_end: e.target.value
                                                                    }
                                                                }
                                                            )}>
                                                    {
                                                        hoursList
                                                            ? hoursList.map((hour: any) =>
                                                                <option className="top-full" key={hour}>{hour}</option>
                                                            )
                                                            : ""
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    : ""

                    }
                </table>
            </div>
            <button className="border ml-auto p-1.5 px-3.5 font-bold
                              border-accent-color-1 bg-accent-color-4
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-7"
                    onClick={(e)=> {saveShifts(e)}}
            >
                Speichern
            </button>
        </div>
    )
}

export default ShiftManager