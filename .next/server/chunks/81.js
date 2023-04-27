"use strict";
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 1081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Popup = ({ machineID , pickupDate , setPickupDates , setMachineID , setPickupDate , pickupDates , machinesData , areDatesConfirmed , setAreDatesConfirmed , setNewPickupDates , newPickupDates , radioConfirmed , setRadioConfirmed  })=>{
    const { 0: displayedDate , 1: setDisplayedDate  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const sendData = (responseBody)=>{
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].put("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines", responseBody).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    };
    const updatePickupDates = (date)=>{
        // pickupDates = pickupDates.filter((obj:any) =>
        // {return obj.machineID!=machineID})
        //  pickupDates.push({machineID: machineID, taskEnd: date})
        //  setPickupDates(pickupDates)
        let machineData = machinesData.filter((obj)=>{
            return obj.machine_id == machineID;
        })[0];
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
            pickup_date: date.format("YYYY-MM-DD HH:mm"),
            isDateConfirmed: radioConfirmed,
            lastIndicate: machineData.lastIndicate,
            lastTara: machineData.lastTara
        };
        let newDates = newPickupDates.filter((obj)=>{
            return obj.machine_id != machineID;
        });
        newDates.push([
            {
                machine_id: machineID,
                date: date.format("YYYY-MM-DD HH:mm")
            }
        ]);
        setNewPickupDates(newDates.flat());
        let newDatesConfirmed = areDatesConfirmed.filter((obj)=>{
            return obj.machine_id != machineID;
        });
        newDatesConfirmed.push([
            {
                machine_id: machineID,
                date_confirmed: radioConfirmed
            }
        ]);
        setAreDatesConfirmed(newDatesConfirmed.flat());
        sendData(newMachineData);
        setMachineID("");
        setPickupDate("");
        setRadioConfirmed("");
    };
    const checkDay = ()=>{
        const days = {
            0: "Montag",
            1: "Dienstag",
            2: "Mittwoch",
            3: "Donnerstag",
            4: "Freitag",
            5: "Samstag",
            6: "Sonntag"
        };
        if (pickupDate && pickupDate != "") {
            const day = moment__WEBPACK_IMPORTED_MODULE_2___default()(pickupDate).day();
            // @ts-ignore
            return days[day];
        }
    // @ts-ignore
    //  else if ( pickupDates.length != 0) {
    //      const day = pickupDates.filter((obj:any) =>
    //         {return obj.machineID==machineID})[0].taskEnd.toDate().getDay()
    // @ts-ignore
    //      return days[day]
    //  }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "popup",
        className: machineID != "" ? "text-sm bg-white w-1/3 sm:rounded-lg shadow-md border p-5 space-y-4 " + "fixed -mt-64 left-0 right-0 m-auto" : "hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Abholdatum bearbeiten (Masch.-ID: ",
                    machineID,
                    ")"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex space-x-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-auto",
                            children: "Abholdatum:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "shadow-md border text-center p-0.5",
                            // @ts-ignore
                            selected: pickupDate && pickupDate != "" ? moment__WEBPACK_IMPORTED_MODULE_2___default()(pickupDate).toDate() : "",
                            showTimeSelect: true,
                            dateFormat: "dd.MM.yyyy HH:mm",
                            timeFormat: "HH:mm",
                            onChange: (date)=>setPickupDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(date))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "m-auto",
                            children: [
                                "(",
                                checkDay(),
                                ")"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex space-x-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "radio-1",
                                type: "radio",
                                value: "",
                                name: "default-radio",
                                checked: machinesData && radioConfirmed == false ? true : false,
                                onChange: ()=>{
                                    setRadioConfirmed(false);
                                },
                                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "radio-1",
                                className: "flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/icon_fragezeichen 1.svg"
                                    }),
                                    "Angefragt"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "radio-2",
                                type: "radio",
                                value: "",
                                name: "default-radio",
                                checked: machinesData && radioConfirmed == true ? true : false,
                                onChange: ()=>{
                                    setRadioConfirmed(true);
                                },
                                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "radio-2",
                                className: "flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/icon_haken 1.svg"
                                    }),
                                    "Best\xe4tigt"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "popup-buttons",
                className: "space-x-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "sm:rounded-lg shadow-md border p-1",
                        onClick: ()=>{
                            updatePickupDates(pickupDate);
                        },
                        children: "Speichern"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "sm:rounded-lg shadow-md border p-1",
                        onClick: ()=>{
                            setMachineID("");
                            setPickupDate("");
                            setRadioConfirmed("");
                        },
                        children: "Abbrechen"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;