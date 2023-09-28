import React, {ChangeEvent, useEffect, useState} from "react";
import API from "axios";

const ShiftCalendar = () => {
    const [shifts, setShift] = useState({
        monday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        },
        tuesday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        },
        wednesday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        },
        thursday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        },
        friday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        },
        saturday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        },
        sunday: {
            shift1: {
                start: "",
                end: ""
            },
            shift2: {
                start: "",
                end: ""
            },
            shift3: {
                start: "",
                end: ""
            },
            shift4: {
                start: "",
                end: ""
            }
        }
    });
    const [selection, setSelection] = useState({
        select1: "Mo:",
        select2: "Mo:",
        select3: "Mo:",
        select4: "Mo:",
        select5: "Mo:",
        select6: "Mo:",
        select7: "Mo:",
        select8: "Mo:",
        select9: "Di:",
        select10: "Di:",
        select11: "Di:",
        select12: "Di:",
        select13: "Di:",
        select14: "Di:",
        select15: "Di:",
        select16: "Di:",
        select17: "Mi:",
        select18: "Mi:",
        select19: "Mi:",
        select20: "Mi:",
        select21: "Mi:",
        select22: "Mi:",
        select23: "Mi:",
        select24: "Mi:",
        select25: "Do:",
        select26: "Do:",
        select27: "Do:",
        select28: "Do:",
        select29: "Do:",
        select30: "Do:",
        select31: "Do:",
        select32: "Do:",
        select33: "Fr:",
        select34: "Fr:",
        select35: "Fr:",
        select36: "Fr:",
        select37: "Fr:",
        select38: "Fr:",
        select39: "Fr:",
        select40: "Fr:",
        select41: "Sa:",
        select42: "Sa:",
        select43: "Sa:",
        select44: "Sa:",
        select45: "Sa:",
        select46: "Sa:",
        select47: "Sa:",
        select48: "Sa:",
        select49: "So:",
        select50: "So:",
        select51: "So:",
        select52: "So:",
        select53: "So:",
        select54: "So:",
        select55: "So:",
        select56: "So:"
    })

    useEffect(() => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts';

        API.get(apiName)
            .then((response) => {
                setShift(
                    response.data.Items
                        .filter( (shift: any) => shift.shift_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_number)[0].shifts
                );
                setSelection(
                    response.data.Items
                        .filter( (shift: any) => shift.shift_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_number )[0].selection
                )
            })
            .catch((error) => {
                console.log(error.response);
            });
    },[]);

    function handleChange(event: ChangeEvent<HTMLInputElement>, day: string, shiftNum: string, field: string) {
        setShift({
            ...shifts,
            [day]: {
                // @ts-ignore
                ...shifts[day],
                [shiftNum]: {
                    // @ts-ignore
                    ...shifts[day][shiftNum],
                    [field]: event.target.value
                }
            }
        });
    }

    const responseBody = { shift_id: JSON.parse(sessionStorage.getItem('company') as string).client_number, selection: {}, shifts: {} }
    const saveShiftCalendar = async (event: any) => {
        event.preventDefault();
        responseBody.shift_id = parseInt(JSON.parse(sessionStorage.getItem('company') as string).client_number)
        responseBody.shifts = shifts
        responseBody.selection = selection
        await sendData(responseBody)
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
            <p className="mt-5 text-3xl font-bold mb-5">Arbetszeiten</p>
            <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-center">
                        <th/>
                        <th className="font-normal">Start Schicht 1</th>
                        <th className="font-normal">Ende Schicht 1</th>
                        <th className="font-normal">Start Schicht 2</th>
                        <th className="font-normal">Ende Schicht 2</th>
                        <th className="font-normal">Start Schicht 3</th>
                        <th className="font-normal">Ende Schicht 3</th>
                        <th className="font-normal">Start Schicht 4</th>
                        <th className="font-normal">Ende Schicht 4</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Montag
                        </td>
                        <td className="align-right">
                            <div>
                                <select
                                    value={ selection.select1 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select1: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select1 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift1', 'start')
                                                : handleChange(e, 'tuesday', 'shift1', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select2 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select2: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select2 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift1', 'end')
                                                : handleChange(e, 'tuesday', 'shift1', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select3 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select3: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select3 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift2', 'start')
                                                : handleChange(e, 'tuesday', 'shift2', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select4 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select4: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select4 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift2', 'end')
                                                : handleChange(e, 'tuesday', 'shift2', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                        <div className="flex">
                            <select
                                value={ selection.select5 }
                                onChange={(e)=>{
                                    setSelection({
                                        ...selection,
                                        select5: e.target.value
                                    })
                                }}>
                                <option>
                                    Mo:
                                </option>
                                <option>
                                    Di:
                                </option>
                            </select>
                            <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                    defaultValue={shifts.monday.shift3.start}
                                    placeholder="hh:mm"
                                    onChange={(e) =>
                                    {
                                        selection.select5 == 'Mo:'
                                            ? handleChange(e, 'monday', 'shift3', 'start')
                                            : handleChange(e, 'tuesday', 'shift3', 'start')

                                    }
                                    }/>
                        </div>
                    </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select6 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select6: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select6 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift3', 'end')
                                                : handleChange(e, 'tuesday', 'shift3', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select7 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select7: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select7 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift4', 'start')
                                                : handleChange(e, 'tuesday', 'shift4', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select8 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select8: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mo:
                                    </option>
                                    <option>
                                        Di:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.monday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select8 == 'Mo:'
                                                ? handleChange(e, 'monday', 'shift4', 'end')
                                                : handleChange(e, 'tuesday', 'shift4', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Dienstag
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select9 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select9: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select9 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift1', 'start')
                                                : handleChange(e, 'wednesday', 'shift1', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select10 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select10: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select10 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift1', 'end')
                                                : handleChange(e, 'wednesday', 'shift1', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select11 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select11: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select11 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift2', 'start')
                                                : handleChange(e, 'wednesday', 'shift2', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select12 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select12: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select12 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift2', 'end')
                                                : handleChange(e, 'wednesday', 'shift2', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select13 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select13: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift3.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select13 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift3', 'start')
                                                : handleChange(e, 'wednesday', 'shift3', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select14 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select14: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select14 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift3', 'end')
                                                : handleChange(e, 'wednesday', 'shift3', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select15 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select15: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select15 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift4', 'start')
                                                : handleChange(e, 'wednesday', 'shift4', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select16 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select16: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Di:
                                    </option>
                                    <option>
                                        Mi:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.tuesday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select16 == 'Di:'
                                                ? handleChange(e, 'tuesday', 'shift4', 'end')
                                                : handleChange(e, 'wednesday', 'shift5', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Mittwoch
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select17 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select17: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select17 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift1', 'start')
                                                : handleChange(e, 'thursday', 'shift1', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select18 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select18: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select18 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift1', 'end')
                                                : handleChange(e, 'thursday', 'shift1', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select19 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select19: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select19 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift2', 'start')
                                                : handleChange(e, 'thursday', 'shift2', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select20 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select20: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select20 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift2', 'end')
                                                : handleChange(e, 'thursday', 'shift2', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select21 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select21: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift3.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select21 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift3', 'start')
                                                : handleChange(e, 'thursday', 'shift3', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select22 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select22: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select22 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift3', 'end')
                                                : handleChange(e, 'thursday', 'shift3', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select23 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select23: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select23 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift4', 'start')
                                                : handleChange(e, 'thursday', 'shift4', 'start')

                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select24 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select24: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Mi:
                                    </option>
                                    <option>
                                        Do:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.wednesday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select24 == 'Mi:'
                                                ? handleChange(e, 'wednesday', 'shift4', 'end')
                                                : handleChange(e, 'thursday', 'shift4', 'end')

                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Donnerstag
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select25 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select25: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select25 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift1', 'start')
                                                : handleChange(e, 'friday', 'shift1', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select26 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select26: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select26 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift1', 'end')
                                                : handleChange(e, 'friday', 'shift1', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select27 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select27: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select27 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift2', 'start')
                                                : handleChange(e, 'friday', 'shift2', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select28 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select28: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select28 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift2', 'end')
                                                : handleChange(e, 'friday', 'shift2', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select29 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select29: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift3.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select29 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift3', 'start')
                                                : handleChange(e, 'friday', 'shift3', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select30 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select30: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select30 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift3', 'end')
                                                : handleChange(e, 'friday', 'shift3', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select31 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select31: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select31 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift4', 'start')
                                                : handleChange(e, 'friday', 'shift4', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select32 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select32: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Do:
                                    </option>
                                    <option>
                                        Fr:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.thursday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select32 == 'Do:'
                                                ? handleChange(e, 'thursday', 'shift4', 'end')
                                                : handleChange(e, 'friday', 'shift4', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Freitag
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select33 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select33: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select33 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift1', 'start')
                                                : handleChange(e, 'saturday', 'shift1', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select34 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select34: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select34 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift1', 'end')
                                                : handleChange(e, 'saturday', 'shift1', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select35 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select35: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select35 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift2', 'start')
                                                : handleChange(e, 'saturday', 'shift2', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select36 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select36: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select36 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift2', 'end')
                                                : handleChange(e, 'saturday', 'shift2', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select37 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select37: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift3.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select37 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift3', 'start')
                                                : handleChange(e, 'saturday', 'shift3', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select38 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select38: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select38 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift3', 'end')
                                                : handleChange(e, 'saturday', 'shift3', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select39 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select39: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select39 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift4', 'start')
                                                : handleChange(e, 'saturday', 'shift4', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select40 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select40: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Fr:
                                    </option>
                                    <option>
                                        Sa:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.friday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select40 == 'Fr:'
                                                ? handleChange(e, 'friday', 'shift4', 'end')
                                                : handleChange(e, 'saturday', 'shift4', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Samstag
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select41 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select41: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select41 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift1', 'start')
                                                : handleChange(e, 'sunday', 'shift1', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select42 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select42: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select42 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift1', 'end')
                                                : handleChange(e, 'sunday', 'shift1', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select43 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select43: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select43 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift2', 'start')
                                                : handleChange(e, 'sunday', 'shift2', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select44 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select44: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select44 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift2', 'end')
                                                : handleChange(e, 'sunday', 'shift2', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select45 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select45: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift3.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select45 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift3', 'start')
                                                : handleChange(e, 'sunday', 'shift3', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select46 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select46: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select46 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift3', 'end')
                                                : handleChange(e, 'sunday', 'shift3', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select47 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select47: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select47 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift4', 'start')
                                                : handleChange(e, 'sunday', 'shift4', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select48 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select48: e.target.value
                                        })
                                    }}>
                                    <option>
                                        Sa:
                                    </option>
                                    <option>
                                        So:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.saturday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select48 == 'Sa:'
                                                ? handleChange(e, 'saturday', 'shift4', 'end')
                                                : handleChange(e, 'sunday', 'shift4', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-xs border-b text-left">
                        <td>
                            Sonnstag
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select49 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select49: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift1.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select49 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift1', 'start')
                                                : handleChange(e, 'monday', 'shift1', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select50 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select50: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift1.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select50 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift1', 'end')
                                                : handleChange(e, 'monday', 'shift1', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select51 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select51: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift2.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select51 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift2', 'start')
                                                : handleChange(e, 'monday', 'shift2', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select52 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select52: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift2.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select52 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift2', 'end')
                                                : handleChange(e, 'monday', 'shift2', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select53 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select53: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift3.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select53 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift3', 'start')
                                                : handleChange(e, 'monday', 'shift3', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select54 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select54: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift3.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select54 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift3', 'end')
                                                : handleChange(e, 'monday', 'shift3', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select55 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select55: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift4.start}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select55 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift4', 'start')
                                                : handleChange(e, 'monday', 'shift4', 'start')
                                        }
                                        }/>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <select
                                    value={ selection.select56 }
                                    onChange={(e)=>{
                                        setSelection({
                                            ...selection,
                                            select56: e.target.value
                                        })
                                    }}>
                                    <option>
                                        So:
                                    </option>
                                    <option>
                                        Mo:
                                    </option>
                                </select>
                                <input  className="border w-16 ml-2 rounded pl-2.5 py-0.5"
                                        defaultValue={shifts.sunday.shift4.end}
                                        placeholder="hh:mm"
                                        onChange={(e) =>
                                        {
                                            selection.select56 == 'So:'
                                                ? handleChange(e, 'sunday', 'shift1', 'end')
                                                : handleChange(e, 'monday', 'shift1', 'end')
                                        }
                                        }/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button className="border ml-auto p-1.5 px-3.5 font-bold
                              border-accent-color-1 bg-accent-color-4
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"
                    onClick={(e)=> {saveShiftCalendar(e)}}
            >
                Speichern
            </button>
        </div>
    )
}

export default ShiftCalendar