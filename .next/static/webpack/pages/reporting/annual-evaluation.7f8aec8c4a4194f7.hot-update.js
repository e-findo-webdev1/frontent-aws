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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar AnnualEvaluation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_3___default()().year()), currentYear = ref[0], setCurrentYear = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), controlDocuments = ref1[0], setControlDocuments = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref2[0], setMachinesData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents\").then(function(response) {\n                setControlDocuments(response.data.Items.filter(function(document1) {\n                    return moment__WEBPACK_IMPORTED_MODULE_3___default()(document1.endOfCycle).year() == currentYear;\n                }).filter(function(document1) {\n                    return machinesData.reduce(function(a, b) {\n                        return a + b[\"machine_id\"];\n                    }, []).includes(document1.machine_id);\n                }));\n                var labels = [\n                    \"Jan\",\n                    \"Feb\",\n                    \"Mrz\",\n                    \"Apr\",\n                    \"Mai\",\n                    \"Jun\",\n                    \"Jul\",\n                    \"Aug\",\n                    \"Sep\",\n                    \"Okt\",\n                    \"Nov\",\n                    \"Dez\"\n                ];\n                var data = {\n                    labels: labels,\n                    datasets: [\n                        {\n                            label: \"Gesamt-Werksgewicht\",\n                            backgroundColor: \"rgb(218,0,44)\",\n                            borderColor: \"rgb(218,0,44)\",\n                            data: {}\n                        }\n                    ]\n                };\n                var config = {\n                    type: \"line\",\n                    data: data,\n                    options: {\n                        scales: {\n                            y: {\n                                suggestedMin: 0\n                            }\n                        },\n                        plugins: {\n                            legend: {\n                                position: \"right\"\n                            }\n                        }\n                    }\n                };\n                // @ts-ignore\n                document.getElementById(\"line-chart\").innerHTML = '<canvas id=\"myChart\"></canvas>';\n                var myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](// @ts-ignore\n                document.getElementById(\"myChart\"), config);\n            }).catch(function(error) {\n                console.log(error.response);\n            });\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-9 text-3xl font-bold mb-5\",\n                children: \"Jahresauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4711\",\n                                children: \"4711\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4712\",\n                                children: \"4712\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"9001\",\n                                children: \"9001\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"9002\",\n                                children: \"9002\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold justify-center flex space-x-10 my-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: currentYear\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs uppercase font-bold text-gray-500\",\n                children: \"Gewichtentwicklung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10 mt-5\",\n                id: \"line-chart\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:rounded-lg shadow-md border\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"flex-row w-full table-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"text-xs text-gray-500 border-b text-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Monat\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Werksgewicht\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Betrag Werksgewicht \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Betrag erhalten\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal text-right\",\n                                        children: \"Delta\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: \"bg-gray-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    colSpan: 5,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/annual-evaluation.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, _this);\n};\n_s(AnnualEvaluation, \"9QW14zBiOqlImCwKHH+QPmnDu5I=\");\n_c = AnnualEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnualEvaluation);\nvar _c;\n$RefreshReg$(_c, \"AnnualEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvYW5udWFsLWV2YWx1YXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBMEM7QUFDUjtBQUNOO0FBQ0o7QUFFeEIsSUFBTUssZ0JBQWdCLEdBQUcsV0FBTTs7SUFDM0IsSUFBc0NKLEdBQXlCLEdBQXpCQSwrQ0FBUSxDQUFDRSw2Q0FBTSxFQUFFLENBQUNHLElBQUksRUFBRSxDQUFDLEVBQXhEQyxXQUFXLEdBQW9CTixHQUF5QixHQUE3QyxFQUFFTyxjQUFjLEdBQUlQLEdBQXlCLEdBQTdCO0lBQ2xDLElBQWdEQSxJQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBeERRLGdCQUFnQixHQUF5QlIsSUFBZSxHQUF4QyxFQUFFUyxtQkFBbUIsR0FBSVQsSUFBZSxHQUFuQjtJQUM1QyxJQUF3Q0EsSUFBZSxHQUFmQSwrQ0FBUSxFQUFPLEVBQWhEVSxZQUFZLEdBQXFCVixJQUFlLEdBQXBDLEVBQUVXLGVBQWUsR0FBSVgsSUFBZSxHQUFuQjtJQUVwQ0QsZ0RBQVMsQ0FBQyxXQUFJO1FBRVYsSUFBSWEsT0FBTyxHQUFHLG9FQUFvRTtRQUVsRlQsaURBQU8sQ0FBQ1MsT0FBTyxDQUFDLENBQ1hFLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7WUFDaEJKLGVBQWUsQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLE9BQVk7dUJBQ3BEQSxPQUFPLENBQUNDLE1BQU0sSUFBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFXLENBQUNDLFdBQVc7YUFBQSxDQUFDLENBQUMsQ0FBQztZQUM1RnRCLGlEQUFPLENBQUMsNkVBQTZFLENBQUMsQ0FDakZXLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7Z0JBQ2hCTixtQkFBbUIsQ0FDZk0sUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FDZEMsTUFBTSxDQUFDLFNBQUNR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LElBQUU7d0NBQUNaLFNBQVMsRUFBQyx3QkFBd0I7a0RBQUMsT0FBSzs7Ozs7NkNBQUs7Ozs7OztxQ0FDaEQ7Ozs7O2lDQUNHO3NDQUNSLDhEQUFDYSxPQUFLOzRCQUFDYixTQUFTLEVBQUMsWUFBWTtzQ0FDN0IsNEVBQUNXLElBQUU7MENBQ0MsNEVBQUNHLElBQUU7b0NBQUNDLE9BQU8sRUFBRSxDQUFDOzhDQUNWLDRFQUFDQyxJQUFFOzs7OzZDQUFFOzs7Ozt5Q0FDSjs7Ozs7cUNBQ0o7Ozs7O2lDQUVHOzs7Ozs7eUJBQ0o7Ozs7O3FCQUNOOzs7Ozs7YUFDSixDQUNUO0FBQ0wsQ0FBQztHQXZJS3BFLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBeUl0QiwrREFBZUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlcG9ydGluZy9hbm51YWwtZXZhbHVhdGlvbi50c3g/MGEyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBbm51YWxFdmFsdWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50WWVhciwgc2V0Q3VycmVudFllYXJdID0gdXNlU3RhdGUobW9tZW50KCkueWVhcigpKTtcbiAgICBjb25zdCBbY29udHJvbERvY3VtZW50cywgc2V0Q29udHJvbERvY3VtZW50c10gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW21hY2hpbmVzRGF0YSwgc2V0TWFjaGluZXNEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuXG4gICAgICAgIGxldCBhcGlOYW1lID0gJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9tYWNoaW5lcyc7XG5cbiAgICAgICAgQVBJLmdldChhcGlOYW1lKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TWFjaGluZXNEYXRhKHJlc3BvbnNlLmRhdGEuSXRlbXMuZmlsdGVyKChtYWNoaW5lOiBhbnkpPT5cbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jbGllbnQgPT0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykgYXMgc3RyaW5nKS5jbGllbnRfbmFtZSkpO1xuICAgICAgICAgICAgICAgIEFQSS5nZXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9jb250cm9sLWRvY3VtZW50cycpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbERvY3VtZW50cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLkl0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRvY3VtZW50OiBhbnkpID0+IG1vbWVudChkb2N1bWVudC5lbmRPZkN5Y2xlKS55ZWFyKCkgPT0gY3VycmVudFllYXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRvY3VtZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lc0RhdGEucmVkdWNlKGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgKGJbJ21hY2hpbmVfaWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSkuaW5jbHVkZXMoZG9jdW1lbnQubWFjaGluZV9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0phbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZlYicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01yeicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01haScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0p1bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0p1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F1ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ09rdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RleidcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnR2VzYW10LVdlcmtzZ2V3aWNodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMTgsMCw0NCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyMTgsMCw0NCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUtY2hhcnRcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxjYW52YXMgaWQ9XFxcIm15Q2hhcnRcXFwiPjwvY2FudmFzPlwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAvL1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9LFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLWZ1bGwgcHgtMjBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTkgdGV4dC0zeGwgZm9udC1ib2xkIG1iLTVcIj5KYWhyZXNhdXN3ZXJ0dW5nPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFzY2hpbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy00MCB0ZXh0LWJsdWUtNTAwIGJvcmRlclwiIG5hbWU9XCJtYWNoaW5lc1wiIGlkPVwibWFjaGluZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD4tIEFsbGUgLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDcxMVwiPjQ3MTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQ3MTJcIj40NzEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDAxXCI+OTAwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTAwMlwiPjkwMDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQganVzdGlmeS1jZW50ZXIgZmxleCBzcGFjZS14LTEwIG15LTVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgPiZsdDs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57Y3VycmVudFllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICA+Jmd0OzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC1ncmF5LTUwMFwiPkdld2ljaHRlbnR3aWNrbHVuZzwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTAgbXQtNVwiIGlkPVwibGluZS1jaGFydFwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206cm91bmRlZC1sZyBzaGFkb3ctbWQgYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZsZXgtcm93IHctZnVsbCB0YWJsZS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBib3JkZXItYiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPk1vbmF0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXJpZ2h0XCI+V2Vya3NnZXdpY2h0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXJpZ2h0XCI+QmV0cmFnIFdlcmtzZ2V3aWNodFx0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXJpZ2h0XCI+QmV0cmFnIGVyaGFsdGVuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXJpZ2h0XCI+RGVsdGE8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5udWFsRXZhbHVhdGlvbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXJ0IiwibW9tZW50IiwiQVBJIiwiQW5udWFsRXZhbHVhdGlvbiIsInllYXIiLCJjdXJyZW50WWVhciIsInNldEN1cnJlbnRZZWFyIiwiY29udHJvbERvY3VtZW50cyIsInNldENvbnRyb2xEb2N1bWVudHMiLCJtYWNoaW5lc0RhdGEiLCJzZXRNYWNoaW5lc0RhdGEiLCJhcGlOYW1lIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIkl0ZW1zIiwiZmlsdGVyIiwibWFjaGluZSIsImNsaWVudCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNsaWVudF9uYW1lIiwiZG9jdW1lbnQiLCJlbmRPZkN5Y2xlIiwicmVkdWNlIiwiYSIsImIiLCJpbmNsdWRlcyIsIm1hY2hpbmVfaWQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJjb25maWciLCJ0eXBlIiwib3B0aW9ucyIsInNjYWxlcyIsInkiLCJzdWdnZXN0ZWRNaW4iLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm15Q2hhcnQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJzZWxlY3QiLCJuYW1lIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsImJ1dHRvbiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCIsImNvbFNwYW4iLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reporting/annual-evaluation.tsx\n"));

/***/ })

});