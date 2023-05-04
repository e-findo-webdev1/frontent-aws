"use strict";
exports.id = 4081;
exports.ids = [4081,9494];
exports.modules = {

/***/ 1261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getFillerStyle = (width)=>{
    let widthPercent;
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

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_getFillerStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1261);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



const machineList = [
    {
        type: "esb",
        id: "4712",
        max_netto: 26500,
        material: "Eisensp\xe4ne, gebrochen ESB, gebrochen",
        load: 79,
        plan_date: "17.10.2022 02:31",
        pickup_date: "1/1/2022 01:00",
        netto: 5880
    },
    {
        type: "bw",
        id: "9001 CMS-A",
        max_netto: 9000,
        material: "Eisensp\xe4ne, normal",
        load: 31,
        plan_date: "21/12/2022 02:26",
        pickup_date: "4/4/2022 01:00",
        netto: 2760
    },
    {
        type: "bw",
        id: "9002 CMS-A",
        max_netto: 9000,
        material: "Eisensp\xe4ne, normal",
        load: 22,
        plan_date: "noch keine F\xfcllung",
        pickup_date: "-",
        netto: 1960
    },
    {
        type: "esb",
        id: "4711",
        max_netto: 26500,
        material: "Eisensp\xe4ne, gebrochen ESB, gebrochen",
        load: 0,
        plan_date: "nicht ermittelbar",
        pickup_date: "-",
        netto: 120
    },
    {
        type: "esb",
        id: "4711",
        max_netto: 26500,
        material: "Eisensp\xe4ne, gebrochen ESB, gebrochen",
        load: 0,
        plan_date: "nicht ermittelbar",
        pickup_date: "-",
        netto: 120
    },
    {
        type: "esb",
        id: "4711",
        max_netto: 26500,
        material: "Eisensp\xe4ne, gebrochen ESB, gebrochen",
        load: 0,
        plan_date: "nicht ermittelbar",
        pickup_date: "-",
        netto: 120
    }, 
];
const MachinesTable = ({ setMachineID , setPickupDate  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        className: "bg-gray-50",
        children: machineList.map((machine)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: "text-xs border-t",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        children: [
                            machine.type,
                            ": ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "underline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/machines/" + machine.id,
                                    children: machine.id
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: machine.max_netto
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        children: machine.material
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border border-black bg-white w-32 mr-1.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (0,_helpers_getFillerStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(machine.load)
                                })
                            }),
                            machine.load,
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                        children: [
                            machine.plan_date,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                id: "pickup_date_" + machine.id,
                                className: machine.pickup_date != "-" ? "flex underline" : "flex",
                                children: [
                                    machine.pickup_date,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>{
                                            setMachineID(machine.id);
                                            setPickupDate(new Date(machine.pickup_date));
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: machine.pickup_date != "-" ? "/icon_fragezeichen 1.svg" : ""
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        children: machine.netto
                    })
                ]
            }, machine.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MachinesTable);


/***/ })

};
;