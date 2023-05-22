exports.id = 3034;
exports.ids = [3034,9494];
exports.modules = {

/***/ 1261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getFillerStyle = (width)=>{
    let widthPercent = "w-0";
    let bgcolor = "bg-green-600";
    if (width == 0) {
        widthPercent = "w-0";
    }
    if (width > 0 && width < 10) {
        widthPercent = "w-3";
    }
    if (width >= 10 && width < 25) {
        widthPercent = "w-1/5";
    }
    if (width >= 25 && width < 50) {
        widthPercent = "w-1/4";
    }
    if (width >= 50 && width < 75) {
        widthPercent = "w-1/2";
    }
    if (width >= 75 && width < 100) {
        widthPercent = "w-3/4";
        bgcolor = "bg-red-600";
    }
    if (width == 100) {
        widthPercent = "w-full";
    }
    return "h-full " + widthPercent + " " + bgcolor;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFillerStyle);


/***/ }),

/***/ 3034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_getFillerStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1261);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1081);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _Popup__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, _Popup__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const StorageSystemDashboard = ()=>{
    const { 0: machinesData , 1: setMachinesData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: shifts , 1: setShift  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: machineID , 1: setMachineID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: plannedDates , 1: setPlannedDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: pickupDate , 1: setPickupDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: pickupDates , 1: setPickupDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isDateConfirmed , 1: setIsDateConfirmed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newPickupDates , 1: setNewPickupDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: areDatesConfirmed , 1: setAreDatesConfirmed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: radioConfirmed , 1: setRadioConfirmed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let apiName = "https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines";
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(apiName).then((response)=>{
            setMachinesData(response.data.Items.filter((machine)=>machine.client == "e-findo GmbH"));
        }).catch((error)=>{
            console.log(error); //
        });
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts").then((response)=>{
            setShift(response.data.Items.filter((shift)=>shift.shift_id == 10000)[0].shifts);
        }).catch((error)=>{
            console.log(error.response);
        });
    }, []);
    let SHIFT_CALENDAR = {
        "Sunday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        },
        "Monday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        },
        "Tuesday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        },
        "Wednesday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        },
        "Thursday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        },
        "Friday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        },
        "Saturday": {
            "shift1": {
                startTime: "",
                endTime: ""
            },
            "shift2": {
                startTime: "",
                endTime: ""
            },
            "shift3": {
                startTime: "",
                endTime: ""
            },
            "shift4": {
                startTime: "",
                endTime: ""
            }
        }
    };
    const daysOfWeek = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };
    function capitalizeDays(shiftCalendar) {
        const days = {
            "sunday": "Sunday",
            "monday": "Monday",
            "tuesday": "Tuesday",
            "wednesday": "Wednesday",
            "thursday": "Thursday",
            "friday": "Friday",
            "saturday": "Saturday"
        };
        const capitalizedCalendar = {};
        for(const day in shiftCalendar){
            // @ts-ignore
            capitalizedCalendar[days[day]] = shiftCalendar[day];
        }
        return capitalizedCalendar;
    }
    const returnFirstShift = (taskStart)=>{
        let currentDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(taskStart.format("L"));
        // @ts-ignore
        for(let i = 0; i < 7; i++){
            // @ts-ignore
            let todayShifts = SHIFT_CALENDAR[daysOfWeek[currentDate.day()]];
            //figure out first shift
            if (todayShifts.shift1.start != "") {
                let shift1StartTime = todayShifts.shift1.start;
                let shift1EndTime = todayShifts.shift1.end;
                let shift1Start = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift1StartTime);
                let shift1End = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift1EndTime);
                if (shift1End.isBefore(shift1Start)) {
                    shift1End.add(1, "day");
                }
                if (shift1End.isAfter(taskStart)) {
                    return [
                        todayShifts.shift1,
                        currentDate.format("L")
                    ];
                }
            }
            if (todayShifts.shift2.start != "") {
                let shift2StartTime = todayShifts.shift2.start;
                let shift2EndTime = todayShifts.shift2.end;
                let shift2Start = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift2StartTime);
                let shift2End = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift2EndTime);
                if (shift2End.isBefore(shift2Start)) {
                    shift2End.add(1, "day");
                }
                if (shift2End.isAfter(taskStart)) {
                    return [
                        todayShifts.shift2,
                        currentDate.format("L")
                    ];
                }
            }
            if (todayShifts.shift3.start != "") {
                let shift3StartTime = todayShifts.shift3.start;
                let shift3EndTime = todayShifts.shift3.end;
                let shift3Start = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift3StartTime);
                let shift3End = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift3EndTime);
                if (shift3End.isBefore(shift3Start)) {
                    shift3End.add(1, "day");
                }
                if (shift3End.isAfter(taskStart)) {
                    return [
                        todayShifts.shift3,
                        currentDate.format("L")
                    ];
                }
            }
            if (todayShifts.shift4.start != "") {
                let shift4StartTime = todayShifts.shift4.start;
                let shift4EndTime = todayShifts.shift4.end;
                let shift4Start = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift4StartTime);
                let shift4End = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + shift4EndTime);
                if (shift4End.isBefore(shift4Start)) {
                    shift4End.add(1, "day");
                }
                if (shift4End.isAfter(taskStart)) {
                    return [
                        todayShifts.shift4,
                        currentDate.format("L")
                    ];
                }
            }
            currentDate.add(1, "day");
        }
    };
    const calculatePlannedDate = (workingHours, machineID)=>{
        let taskDuration = workingHours * 60;
        let taskStart = moment__WEBPACK_IMPORTED_MODULE_4___default()();
        // @ts-ignore
        let [firstShift, firstShiftStartDate] = returnFirstShift(taskStart);
        let currentDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(taskStart.format("L"));
        while(taskDuration > 0){
            for(let day in SHIFT_CALENDAR){
                // @ts-ignore
                if (day == daysOfWeek[currentDate.day()]) {
                    // @ts-ignore
                    let todayShifts = SHIFT_CALENDAR[daysOfWeek[currentDate.day()]];
                    for(let i = 1; i < 5; i++){
                        let currentShift = "shift" + i;
                        if (todayShifts[currentShift].start == "") {
                            continue;
                        }
                        let shiftStart = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + todayShifts[currentShift].start);
                        let shiftEnd = moment__WEBPACK_IMPORTED_MODULE_4___default()(currentDate.format("L") + " " + todayShifts[currentShift].end);
                        if (shiftEnd.isBefore(shiftStart)) {
                            shiftEnd.add(1, "day");
                        }
                        if (shiftStart.isAfter(moment__WEBPACK_IMPORTED_MODULE_4___default()(firstShiftStartDate + " " + firstShift.start))) {
                            taskStart = shiftStart;
                        }
                        if ((taskStart.format("LLL") == shiftStart.format("LLL") || taskStart.isAfter(shiftStart)) && taskStart.isBefore(shiftEnd)) {
                            let taskEnd = taskStart.clone();
                            taskEnd.add(taskDuration, "minutes");
                            let timeTillShiftEnd = shiftEnd.diff(taskStart) / 3600000 * 60;
                            let timeTillTaskEnd = taskEnd.diff(taskStart) / 3600000 * 60;
                            if (timeTillTaskEnd <= timeTillShiftEnd) {
                                let currentDates = plannedDates;
                                // @ts-ignore
                                currentDates.push([
                                    {
                                        "machineID": machineID,
                                        "taskEnd": taskEnd
                                    }
                                ]);
                                // @ts-ignore
                                setPlannedDates(currentDates.flat());
                                // @ts-ignore
                                setPickupDates(currentDates.flat());
                                return taskEnd;
                            } else {
                                taskDuration -= timeTillShiftEnd;
                            }
                        }
                    }
                    currentDate.add(1, "day");
                }
            }
        }
    };
    if (machinesData && shifts && plannedDates.length == 0) {
        // @ts-ignore
        SHIFT_CALENDAR = capitalizeDays(shifts);
        for(let machine in machinesData){
            const machineID1 = machinesData[machine].machine_id;
            const averageThroughput = machinesData[machine].averageThroughput;
            const currentNetto = machinesData[machine].lastTara;
            const maxNetto = machinesData[machine].maxNetto;
            const workingHours = (maxNetto - currentNetto) / averageThroughput;
            if (averageThroughput != 0) {
                calculatePlannedDate(workingHours, machineID1);
            }
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "storage-system",
        className: "mt-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-xs uppercase font-bold text-gray-500",
                children: "Lagersysteme"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:rounded-lg shadow-md border overflow-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sm:rounded-lg shadow-md border overflow-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "flex-row w-full table-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "text-xs text-gray-500 border-b text-left",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                className: "font-normal",
                                                children: [
                                                    "Masch.-ID",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Max Netto"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "font-normal",
                                                children: "Material"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "font-normal",
                                                children: "F\xfcllgrad"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                className: "font-normal",
                                                children: [
                                                    "Plandatum",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Abholdatum"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "font-normal",
                                                children: "Netto (kg)"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    className: "bg-gray-50",
                                    children: machinesData ? machinesData.map((machine)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            className: "text-xs border-t",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                    children: [
                                                        machine.machineType,
                                                        ": ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "underline",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/machines/" + machine.machine_id,
                                                                children: machine.machine_id
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: machine.maxNetto
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: machine.waretype
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "border border-black bg-white w-32 mr-1.5",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                // @ts-ignore
                                                                className: machine.lastIndicate * 100 / machine.maxNetto > 0 ? (0,_helpers_getFillerStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(machine.lastIndicate * 100 / machine.maxNetto) : 0
                                                            })
                                                        }),
                                                        parseInt((machine.lastIndicate * 100 / machine.maxNetto).toFixed(0)) > 0 ? (machine.lastIndicate * 100 / machine.maxNetto).toFixed(0) : 0,
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            machine.total_working_time != 0 && plannedDates && plannedDates.filter((obj)=>{
                                                                return obj.machineID === machine.machine_id;
                                                            }).length != 0 ? plannedDates.filter((obj)=>{
                                                                return obj.machineID === machine.machine_id;
                                                            }).map((plannedDate)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: plannedDate.taskEnd.format("DD.MM.YYYY HH:mm")
                                                                }, plannedDate.machineID)) : "-",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                className: machine.total_working_time != 0 ? "underline cursor-pointer flex" : "underline pointer-events-none flex",
                                                                onClick: ()=>{
                                                                    setMachineID(machine.machine_id);
                                                                    if (machinesData && machinesData.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].pickup_date != "") {
                                                                        setPickupDate(moment__WEBPACK_IMPORTED_MODULE_4___default()(machinesData.filter((obj)=>{
                                                                            return obj.machine_id == machine.machine_id;
                                                                        })[0].pickup_date));
                                                                    } else if (pickupDates) {
                                                                        setPickupDate(pickupDates.filter((obj)=>{
                                                                            return obj.machineID === machine.machine_id;
                                                                        })[0]// @ts-ignore
                                                                        .taskEnd);
                                                                    }
                                                                    setIsDateConfirmed(machinesData.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].isDateConfirmed);
                                                                    setRadioConfirmed(machinesData.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].isDateConfirmed);
                                                                },
                                                                children: [
                                                                    newPickupDates && newPickupDates.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    }).length != 0 ? moment__WEBPACK_IMPORTED_MODULE_4___default()(newPickupDates.filter((obj)=>// @ts-ignore
                                                                    {
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].date).format("DD.MM.YYYY HH:mm") : machine.total_working_time != 0 && pickupDates && pickupDates.length != 0 && machinesData.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].pickup_date == "" ? pickupDates.filter((obj)=>{
                                                                        return obj.machineID === machine.machine_id;
                                                                    }).map((pickupDate)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: pickupDate.taskEnd.format("DD.MM.YYYY HH:mm")
                                                                        }, pickupDate.machineID)) : machine.total_working_time != 0 && machinesData.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].pickup_date != "" ? moment__WEBPACK_IMPORTED_MODULE_4___default()(machinesData.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })[0].pickup_date).format("DD.MM.yyyy HH:mm") : "-",
                                                                    areDatesConfirmed.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    }).length != 0 && areDatesConfirmed.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })// @ts-ignore
                                                                    .date_confirmed == false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "ml-1",
                                                                        src: "/icon_fragezeichen 1.svg"
                                                                    }) : machine.total_working_time != 0 && machine.isDateConfirmed == false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "ml-1",
                                                                        src: "/icon_fragezeichen 1.svg"
                                                                    }) : "",
                                                                    areDatesConfirmed.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    }).length != 0 && areDatesConfirmed.filter((obj)=>{
                                                                        return obj.machine_id == machine.machine_id;
                                                                    })// @ts-ignore
                                                                    .date_confirmed == true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "ml-1",
                                                                        src: "/icon_fragezeichen 1.svg"
                                                                    }) : machine.total_working_time != 0 && machine.isDateConfirmed == true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "ml-1",
                                                                        src: "/icon_haken 1.svg"
                                                                    }) : ""
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: machine.lastIndicate
                                                })
                                            ]
                                        }, machine.machine_id)) : ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            machineID: machineID,
                            pickupDate: pickupDate,
                            setMachineID: setMachineID,
                            setPickupDate: setPickupDate,
                            setPickupDates: setPickupDates,
                            pickupDates: pickupDates,
                            machinesData: machinesData,
                            isDateConfirmed: isDateConfirmed,
                            setIsDateConfirmed: setIsDateConfirmed,
                            setNewPickupDates: setNewPickupDates,
                            newPickupDates: newPickupDates,
                            areDatesConfirmed: areDatesConfirmed,
                            setAreDatesConfirmed: setAreDatesConfirmed,
                            radioConfirmed: radioConfirmed,
                            setRadioConfirmed: setRadioConfirmed
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageSystemDashboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;