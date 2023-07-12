"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/master-data/price-list/[id]",{

/***/ "./pages/master-data/price-list/[id].tsx":
/*!***********************************************!*\
  !*** ./pages/master-data/price-list/[id].tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar PriceList = function() {\n    _s();\n    var currentYear = 2023;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), machineData = ref[0], setMachineData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        prices: {\n            2023: {\n                Januar: \"0,00\",\n                Februar: \"0,00\",\n                März: \"0,00\",\n                April: \"0,00\",\n                Mai: \"0,00\",\n                Juni: \"0,00\",\n                Juli: \"0,00\",\n                August: \"0,00\",\n                September: \"0,00\",\n                Oktober: \"0,00\",\n                November: \"0,00\",\n                Dezember: \"0,00\"\n            }\n        }\n    }), newPriceList = ref1[0], setNewPriceList = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var pid = router.query;\n    var monthsList = [\n        \"Januar\",\n        \"Februar\",\n        \"M\\xe4rz\",\n        \"April\",\n        \"Mai\",\n        \"Juni\",\n        \"Juli\",\n        \"August\",\n        \"September\",\n        \"Oktober\",\n        \"November\",\n        \"Dezember\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\").then(function(response) {\n            setMachineData(response.data.Items.filter(function(item) {\n                return item.machine_id == pid.id;\n            })[0]);\n            if (machineData.price_list) {\n                setNewPriceList(response.data.Items.filter(function(item) {\n                    return item.machine_id == pid.id;\n                })[0].price_list);\n            }\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n    }, [\n        pid.id\n    ]);\n    var sendData = function(responseBody) {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\", responseBody).then(function(response) {\n            console.log(response);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    var updatePriceList = function(prices) {\n        console.log(newPriceList);\n        var responseBody = machineData;\n        responseBody.price_list = prices;\n        sendData(responseBody);\n    };\n    console.log(newPriceList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"mx-20 overflow-auto h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-7 text-3xl font-bold\",\n                children: \"Maschinen\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"underline\",\n                    children: \"2023\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                    lineNumber: 72,\n                    columnNumber: 39\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs\",\n                children: \" |\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs mt-2.5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold\",\n                        children: \"Monatpreise Jahr 2023\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this),\n                    \" f\\xfcr:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold\",\n                        children: [\n                            \" \",\n                            pid.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this),\n            machineData ? monthsList.map(function(month) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-40\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs py-1\",\n                                children: month\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"text-xs ml-auto border rounded pl-2.5 py-1 mr-1 w-20\",\n                                defaultValue: machineData.price_list && machineData.price_list.prices[currentYear][month] ? machineData.price_list.prices[currentYear][month] : newPriceList.prices[currentYear][month],\n                                onChange: function(e) {\n                                    return setMachineData((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, machineData), {\n                                        prices: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, newPriceList.prices), {\n                                            2023: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, newPriceList.prices[currentYear]), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, month, e.target.value))\n                                        })\n                                    }));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs py-1\",\n                                children: \"€\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, _this)\n                }, month, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, _this);\n            }) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"ml-20 p-1.5 mt-7 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border\",\n                onClick: function() {\n                    return updatePriceList(newPriceList);\n                },\n                children: \"Speichern\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data/price-list/[id].tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, _this);\n};\n_s(PriceList, \"q6fx3FZX6XFeE/Ms5lNWHgPbee4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PriceList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceList);\nvar _c;\n$RefreshReg$(_c, \"PriceList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYXN0ZXItZGF0YS9wcmljZS1saXN0L1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUFpRDtBQUNYO0FBQ2Q7QUFFeEIsSUFBTUssU0FBUyxHQUFHLFdBQU07O0lBQ3BCLElBQU1DLFdBQVcsR0FBRyxJQUFJO0lBQ3hCLElBQXNDSixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBTUssU0FBUyxDQUFDLEVBQXZEQyxXQUFXLEdBQW9CTixHQUF3QixHQUE1QyxFQUFFTyxjQUFjLEdBQUlQLEdBQXdCLEdBQTVCO0lBQ2xDLElBQXdDQSxJQWdCdEMsR0FoQnNDQSwrQ0FBUSxDQUFNO1FBQUNRLE1BQU0sRUFBRTtBQUN2RCxnQkFBSSxFQUFFO2dCQUNGQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsT0FBTyxFQUFFLE1BQU07Z0JBQ2ZDLElBQUksRUFBRSxNQUFNO2dCQUNaQyxLQUFLLEVBQUUsTUFBTTtnQkFDYkMsR0FBRyxFQUFFLE1BQU07Z0JBQ1hDLElBQUksRUFBRSxNQUFNO2dCQUNaQyxJQUFJLEVBQUUsTUFBTTtnQkFDWkMsTUFBTSxFQUFFLE1BQU07Z0JBQ2RDLFNBQVMsRUFBRSxNQUFNO2dCQUNqQkMsT0FBTyxFQUFFLE1BQU07Z0JBQ2ZDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQkMsUUFBUSxFQUFFLE1BQU07YUFDbkI7U0FDSjtLQUNKLENBQUMsRUFoQktDLFlBQVksR0FBcUJyQixJQWdCdEMsR0FoQmlCLEVBQUVzQixlQUFlLEdBQUl0QixJQWdCdEMsR0FoQmtDO0lBa0JwQyxJQUFNdUIsTUFBTSxHQUFHdEIsc0RBQVMsRUFBRTtJQUMxQixJQUFNdUIsR0FBRyxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFFeEIsSUFBTUMsVUFBVSxHQUFHO1FBQ2YsUUFBUTtRQUFFLFNBQVM7UUFBRSxTQUFNO1FBQUUsT0FBTztRQUNwQyxLQUFLO1FBQUUsTUFBTTtRQUFFLE1BQU07UUFBRSxRQUFRO1FBQy9CLFdBQVc7UUFBRSxT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QUFBQSxTQUFTO0FBNEdmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21hc3Rlci1kYXRhL3ByaWNlLWxpc3QvW2lkXS50c3g/MDQzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBBUEkgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFByaWNlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IDIwMjNcbiAgICBjb25zdCBbbWFjaGluZURhdGEsIHNldE1hY2hpbmVEYXRhXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcbiAgICBjb25zdCBbbmV3UHJpY2VMaXN0LCBzZXROZXdQcmljZUxpc3RdID0gdXNlU3RhdGU8YW55Pih7cHJpY2VzOiB7XG4gICAgICAgICAgICAyMDIzOiB7XG4gICAgICAgICAgICAgICAgSmFudWFyOiAnMCwwMCcsXG4gICAgICAgICAgICAgICAgRmVicnVhcjogJzAsMDAnLFxuICAgICAgICAgICAgICAgIE3DpHJ6OiAnMCwwMCcsXG4gICAgICAgICAgICAgICAgQXByaWw6ICcwLDAwJyxcbiAgICAgICAgICAgICAgICBNYWk6ICcwLDAwJyxcbiAgICAgICAgICAgICAgICBKdW5pOiAnMCwwMCcsXG4gICAgICAgICAgICAgICAgSnVsaTogJzAsMDAnLFxuICAgICAgICAgICAgICAgIEF1Z3VzdDogJzAsMDAnLFxuICAgICAgICAgICAgICAgIFNlcHRlbWJlcjogJzAsMDAnLFxuICAgICAgICAgICAgICAgIE9rdG9iZXI6ICcwLDAwJyxcbiAgICAgICAgICAgICAgICBOb3ZlbWJlcjogJzAsMDAnLFxuICAgICAgICAgICAgICAgIERlemVtYmVyOiAnMCwwMCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBwaWQgPSByb3V0ZXIucXVlcnlcblxuICAgIGNvbnN0IG1vbnRoc0xpc3QgPSBbXG4gICAgICAgIFwiSmFudWFyXCIsIFwiRmVicnVhclwiLCBcIk3DpHJ6XCIsIFwiQXByaWxcIixcbiAgICAgICAgXCJNYWlcIiwgXCJKdW5pXCIsIFwiSnVsaVwiLCBcIkF1Z3VzdFwiLFxuICAgICAgICBcIlNlcHRlbWJlclwiLCBcIk9rdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlemVtYmVyXCJcbiAgICBdXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBUEkuZ2V0KCdodHRwczovLzh2OWpxdHM5ODkuZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vbWFjaGluZXMnKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYWNoaW5lRGF0YShyZXNwb25zZS5kYXRhLkl0ZW1zLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLm1hY2hpbmVfaWQgPT0gcGlkLmlkKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWNoaW5lRGF0YS5wcmljZV9saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdQcmljZUxpc3QocmVzcG9uc2UuZGF0YS5JdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5tYWNoaW5lX2lkID09IHBpZC5pZClbMF0ucHJpY2VfbGlzdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9LCBbcGlkLmlkXSk7XG5cblxuICAgIGNvbnN0IHNlbmREYXRhID0gKHJlc3BvbnNlQm9keTogYW55KSA9PiB7XG4gICAgICAgIEFQSS5wdXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9tYWNoaW5lcycsXG4gICAgICAgICAgICByZXNwb25zZUJvZHkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVByaWNlTGlzdCA9IChwcmljZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcmljZUxpc3QpXG4gICAgICAgIGxldCByZXNwb25zZUJvZHkgPSBtYWNoaW5lRGF0YVxuICAgICAgICByZXNwb25zZUJvZHkucHJpY2VfbGlzdCA9IHByaWNlc1xuICAgICAgICBzZW5kRGF0YShyZXNwb25zZUJvZHkpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG5ld1ByaWNlTGlzdClcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXBhZ2VcIiBjbGFzc05hbWU9XCJteC0yMCBvdmVyZmxvdy1hdXRvIGgtZnVsbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNyB0ZXh0LTN4bCBmb250LWJvbGRcIj5NYXNjaGluZW48L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj4yMDIzPC9idXR0b24+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPiB8PC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBtdC0yLjVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Nb25hdHByZWlzZSBKYWhyIDIwMjM8L3NwYW4+IGbDvHI6XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+IHtwaWQuaWR9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICB7bWFjaGluZURhdGEgPyBtb250aHNMaXN0Lm1hcCgobW9udGg6IGFueSkgPT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bW9udGh9IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgcHktMVwiPnttb250aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGV4dC14cyBtbC1hdXRvIGJvcmRlciByb3VuZGVkIHBsLTIuNSBweS0xIG1yLTEgdy0yMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttYWNoaW5lRGF0YS5wcmljZV9saXN0ICYmIG1hY2hpbmVEYXRhLnByaWNlX2xpc3QucHJpY2VzW2N1cnJlbnRZZWFyXVttb250aF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtYWNoaW5lRGF0YS5wcmljZV9saXN0LnByaWNlc1tjdXJyZW50WWVhcl1bbW9udGhdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3UHJpY2VMaXN0LnByaWNlc1tjdXJyZW50WWVhcl1bbW9udGhdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1hY2hpbmVEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1hY2hpbmVEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzOiB7Li4ubmV3UHJpY2VMaXN0LnByaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDIzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJpY2VMaXN0LnByaWNlc1tjdXJyZW50WWVhcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9udGhdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHB5LTFcIj7igqw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogXCJcIn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMjAgcC0xLjUgbXQtNyBmb250LWJvbGQgdGV4dC14cyBib3JkZXItYWNjZW50LWNvbG9yLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1hY2NlbnQtY29sb3ItNCBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIGJvcmRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT51cGRhdGVQcmljZUxpc3QobmV3UHJpY2VMaXN0KX0+XG4gICAgICAgICAgICAgICAgU3BlaWNoZXJuPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBUEkiLCJQcmljZUxpc3QiLCJjdXJyZW50WWVhciIsInVuZGVmaW5lZCIsIm1hY2hpbmVEYXRhIiwic2V0TWFjaGluZURhdGEiLCJwcmljZXMiLCJKYW51YXIiLCJGZWJydWFyIiwiTcOkcnoiLCJBcHJpbCIsIk1haSIsIkp1bmkiLCJKdWxpIiwiQXVndXN0IiwiU2VwdGVtYmVyIiwiT2t0b2JlciIsIk5vdmVtYmVyIiwiRGV6ZW1iZXIiLCJuZXdQcmljZUxpc3QiLCJzZXROZXdQcmljZUxpc3QiLCJyb3V0ZXIiLCJwaWQiLCJxdWVyeSIsIm1vbnRoc0xpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwibWFjaGluZV9pZCIsImlkIiwicHJpY2VfbGlzdCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VuZERhdGEiLCJyZXNwb25zZUJvZHkiLCJwdXQiLCJ1cGRhdGVQcmljZUxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImJ1dHRvbiIsIm1hcCIsIm1vbnRoIiwiaW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/master-data/price-list/[id].tsx\n"));

/***/ })

});