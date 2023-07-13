"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reporting/annual-evaluation",{

/***/ "./pages/reporting/annual-evaluation.tsx":
/*!***********************************************!*\
  !*** ./pages/reporting/annual-evaluation.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar AnnualEvaluation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_3___default()().year()), currentYear = ref[0], setCurrentYear = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), controlDocuments = ref1[0], setControlDocuments = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref2[0], setMachinesData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents\").then(function(response) {\n                setControlDocuments(response.data.Items.filter(function(document1) {\n                    return moment__WEBPACK_IMPORTED_MODULE_3___default()(document1.endOfCycle).year() == currentYear;\n                }).filter(function(document1) {\n                    return machinesData.reduce(function(a, b) {\n                        return a + b[\"machine_id\"];\n                    }, []).includes(document1.machine_id);\n                }));\n            }).catch(function(error) {\n                console.log(error.response);\n            });\n        }).catch(function(error) {\n            console.log(error); //\n        });\n        var labels = [\n            \"Jan\",\n            \"Feb\",\n            \"Mrz\",\n            \"Apr\",\n            \"Mai\",\n            \"Jun\",\n            \"Jul\",\n            \"Aug\",\n            \"Sep\",\n            \"Okt\",\n            \"Nov\",\n            \"Dez\"\n        ];\n        var data = {\n            labels: labels,\n            datasets: [\n                {\n                    label: \"Gesamt-Werksgewicht\",\n                    backgroundColor: \"rgb(218,0,44)\",\n                    borderColor: \"rgb(218,0,44)\",\n                    data: {}\n                }\n            ]\n        };\n        var config = {\n            type: \"line\",\n            data: data,\n            options: {\n                scales: {\n                    y: {\n                        suggestedMin: 0\n                    }\n                },\n                plugins: {\n                    legend: {\n                        position: \"right\"\n                    }\n                }\n            }\n        };\n        // @ts-ignore\n        document.getElementById(\"line-chart\").innerHTML = '<canvas id=\"myChart\"></canvas>';\n        var myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](// @ts-ignore\n        document.getElementById(\"myChart\"), config);\n    }, []);\n    console.log(controlDocuments) //\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-9 text-3xl font-bold mb-5\",\n                children: \"Jahresauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4711\",\n                                children: \"4711\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4712\",\n                                children: \"4712\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"9001\",\n                                children: \"9001\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"9002\",\n                                children: \"9002\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold justify-center flex space-x-10 my-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: currentYear\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs uppercase font-bold text-gray-500\",\n                children: \"Gewichtentwicklung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10 mt-5\",\n                id: \"line-chart\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:rounded-lg shadow-md border\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"flex-row w-full table-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"text-xs text-gray-500 border-b text-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Monat\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Werksgewicht\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Betrag Werksgewicht \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Betrag erhalten\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Delta\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: \"bg-gray-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    colSpan: 5,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, _this);\n};\n_s(AnnualEvaluation, \"9QW14zBiOqlImCwKHH+QPmnDu5I=\");\n_c = AnnualEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnualEvaluation);\nvar _c;\n$RefreshReg$(_c, \"AnnualEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvYW5udWFsLWV2YWx1YXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBMEM7QUFDUjtBQUNOO0FBQ0o7QUFFeEIsSUFBTUssZ0JBQWdCLEdBQUcsV0FBTTs7SUFDM0IsSUFBc0NKLEdBQXlCLEdBQXpCQSwrQ0FBUSxDQUFDRSw2Q0FBTSxFQUFFLENBQUNHLElBQUksRUFBRSxDQUFDLEVBQXhEQyxXQUFXLEdBQW9CTixHQUF5QixHQUE3QyxFQUFFTyxjQUFjLEdBQUlQLEdBQXlCLEdBQTdCO0lBQ2xDLElBQWdEQSxJQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBeERRLGdCQUFnQixHQUF5QlIsSUFBZSxHQUF4QyxFQUFFUyxtQkFBbUIsR0FBSVQsSUFBZSxHQUFuQjtJQUM1QyxJQUF3Q0EsSUFBZSxHQUFmQSwrQ0FBUSxFQUFPLEVBQWhEVSxZQUFZLEdBQXFCVixJQUFlLEdBQXBDLEVBQUVXLGVBQWUsR0FBSVgsSUFBZSxHQUFuQjtJQUVwQ0QsZ0RBQVMsQ0FBQyxXQUFJO1FBRVYsSUFBSWEsT0FBTyxHQUFHLG9FQUFvRTtRQUVsRlQsaURBQU8sQ0FBQ1MsT0FBTyxDQUFDLENBQ1hFLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7WUFDaEJKLGVBQWUsQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLE9BQVk7dUJBQ3BEQSxPQUFPLENBQUNDLE1BQU0sSUFBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFXLENBQUNDLFdBQVc7YUFBQSxDQUFDLENBQUMsQ0FBQztZQUM1RnRCLGlEQUFPLENBQUMsNkVBQTZFLENBQUMsQ0FDakZXLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7Z0JBQ2hCTixtQkFBbUIsQ0FDZk0sUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FDZEMsTUFBTSxDQUFDLFNBQUNR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OzZDQUFLO2tEQUMzRCw4REFBQ1ksSUFBRTt3Q0FBQ1osU0FBUyxFQUFDLHdCQUF3QjtrREFBQyxPQUFLOzs7Ozs2Q0FBSzs7Ozs7O3FDQUNoRDs7Ozs7aUNBQ0c7c0NBQ1IsOERBQUNhLE9BQUs7NEJBQUNiLFNBQVMsRUFBQyxZQUFZO3NDQUM3Qiw0RUFBQ1csSUFBRTswQ0FDQyw0RUFBQ0csSUFBRTtvQ0FBQ0MsT0FBTyxFQUFFLENBQUM7OENBQ1YsNEVBQUNDLElBQUU7Ozs7NkNBQUU7Ozs7O3lDQUNKOzs7OztxQ0FDSjs7Ozs7aUNBRUc7Ozs7Ozt5QkFDSjs7Ozs7cUJBQ047Ozs7OzthQUNKLENBQ1Q7QUFDTCxDQUFDO0dBeElLcEUsZ0JBQWdCO0FBQWhCQSxLQUFBQSxnQkFBZ0I7QUEwSXRCLCtEQUFlQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0aW5nL2FubnVhbC1ldmFsdWF0aW9uLnRzeD8wYTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBBUEkgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFubnVhbEV2YWx1YXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRZZWFyLCBzZXRDdXJyZW50WWVhcl0gPSB1c2VTdGF0ZShtb21lbnQoKS55ZWFyKCkpO1xuICAgIGNvbnN0IFtjb250cm9sRG9jdW1lbnRzLCBzZXRDb250cm9sRG9jdW1lbnRzXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBbbWFjaGluZXNEYXRhLCBzZXRNYWNoaW5lc0RhdGFdID0gdXNlU3RhdGU8YW55PigpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICAgICAgbGV0IGFwaU5hbWUgPSAnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL21hY2hpbmVzJztcblxuICAgICAgICBBUEkuZ2V0KGFwaU5hbWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNYWNoaW5lc0RhdGEocmVzcG9uc2UuZGF0YS5JdGVtcy5maWx0ZXIoKG1hY2hpbmU6IGFueSk9PlxuICAgICAgICAgICAgICAgICAgICBtYWNoaW5lLmNsaWVudCA9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbXBhbnknKSBhcyBzdHJpbmcpLmNsaWVudF9uYW1lKSk7XG4gICAgICAgICAgICAgICAgQVBJLmdldCgnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2NvbnRyb2wtZG9jdW1lbnRzJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250cm9sRG9jdW1lbnRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuSXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZG9jdW1lbnQ6IGFueSkgPT4gbW9tZW50KGRvY3VtZW50LmVuZE9mQ3ljbGUpLnllYXIoKSA9PSBjdXJyZW50WWVhcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZG9jdW1lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hY2hpbmVzRGF0YS5yZWR1Y2UoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyAoYlsnbWFjaGluZV9pZCddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKS5pbmNsdWRlcyhkb2N1bWVudC5tYWNoaW5lX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy9cbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbXG4gICAgICAgICAgICAnSmFuJyxcbiAgICAgICAgICAgICdGZWInLFxuICAgICAgICAgICAgJ01yeicsXG4gICAgICAgICAgICAnQXByJyxcbiAgICAgICAgICAgICdNYWknLFxuICAgICAgICAgICAgJ0p1bicsXG4gICAgICAgICAgICAnSnVsJyxcbiAgICAgICAgICAgICdBdWcnLFxuICAgICAgICAgICAgJ1NlcCcsXG4gICAgICAgICAgICAnT2t0JyxcbiAgICAgICAgICAgICdOb3YnLFxuICAgICAgICAgICAgJ0RleidcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dlc2FtdC1XZXJrc2dld2ljaHQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMTgsMCw0NCknLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDIxOCwwLDQ0KScsXG4gICAgICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZS1jaGFydFwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCI8Y2FudmFzIGlkPVxcXCJteUNoYXJ0XFxcIj48L2NhbnZhcz5cIlxuXG4gICAgICAgIGNvbnN0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLFxuICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICk7XG4gICAgfSxbXSlcblxuXG4gICAgY29uc29sZS5sb2coY29udHJvbERvY3VtZW50cykvL1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtcGFnZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1mdWxsIHB4LTIwXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC05IHRleHQtM3hsIGZvbnQtYm9sZCBtYi01XCI+SmFocmVzYXVzd2VydHVuZzwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk1hc2NoaW5lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctNDAgdGV4dC1ibHVlLTUwMCBib3JkZXJcIiBuYW1lPVwibWFjaGluZXNcIiBpZD1cIm1hY2hpbmVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+LSBBbGxlIC08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQ3MTFcIj40NzExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0NzEyXCI+NDcxMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTAwMVwiPjkwMDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjkwMDJcIj45MDAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIGZsZXggc3BhY2UteC0xMCBteS01XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgID4mbHQ7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRZZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgPiZndDs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtZ3JheS01MDBcIj5HZXdpY2h0ZW50d2lja2x1bmc8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwIG10LTVcIiBpZD1cImxpbmUtY2hhcnRcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIGJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmbGV4LXJvdyB3LWZ1bGwgdGFibGUtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgYm9yZGVyLWIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5Nb25hdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1yaWdodFwiPldlcmtzZ2V3aWNodDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1yaWdodFwiPkJldHJhZyBXZXJrc2dld2ljaHRcdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1yaWdodFwiPkJldHJhZyBlcmhhbHRlbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1yaWdodFwiPkRlbHRhPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFubnVhbEV2YWx1YXRpb24iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFydCIsIm1vbWVudCIsIkFQSSIsIkFubnVhbEV2YWx1YXRpb24iLCJ5ZWFyIiwiY3VycmVudFllYXIiLCJzZXRDdXJyZW50WWVhciIsImNvbnRyb2xEb2N1bWVudHMiLCJzZXRDb250cm9sRG9jdW1lbnRzIiwibWFjaGluZXNEYXRhIiwic2V0TWFjaGluZXNEYXRhIiwiYXBpTmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImZpbHRlciIsIm1hY2hpbmUiLCJjbGllbnQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjbGllbnRfbmFtZSIsImRvY3VtZW50IiwiZW5kT2ZDeWNsZSIsInJlZHVjZSIsImEiLCJiIiwiaW5jbHVkZXMiLCJtYWNoaW5lX2lkIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJjb25maWciLCJ0eXBlIiwib3B0aW9ucyIsInNjYWxlcyIsInkiLCJzdWdnZXN0ZWRNaW4iLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm15Q2hhcnQiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwidmFsdWUiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwidGQiLCJjb2xTcGFuIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reporting/annual-evaluation.tsx\n"));

/***/ })

});