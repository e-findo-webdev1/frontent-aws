"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reporting/monthly-evaluation",{

/***/ "./pages/reporting/monthly-evaluation.tsx":
/*!************************************************!*\
  !*** ./pages/reporting/monthly-evaluation.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar dataYear2022 = [];\nvar MonthlyEvaluation = function() {\n    _s();\n    var monthsList = [\n        \"Januar\",\n        \"Februar\",\n        \"M\\xe4rz\",\n        \"April\",\n        \"Mai\",\n        \"Juni\",\n        \"Juli\",\n        \"August\",\n        \"September\",\n        \"Oktober\",\n        \"November\",\n        \"Dezember\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dataYear2022), dataset = ref[0], setDataset = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref1[0], setMachinesData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_2___default()().year()), year = ref2[0], setYear = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(monthsList[moment__WEBPACK_IMPORTED_MODULE_2___default()().month()]), month = ref3[0], setMonth = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n        }).catch(function(error) {\n            console.log(error); //\n        });\n        var labels = [\n            \"Jan\",\n            \"Feb\",\n            \"Mrz\",\n            \"Apr\",\n            \"Mai\",\n            \"Jun\",\n            \"Jul\",\n            \"Aug\",\n            \"Sep\",\n            \"Okt\",\n            \"Nov\",\n            \"Dez\"\n        ];\n        var data = {\n            labels: labels,\n            datasets: [\n                {\n                    label: \"Gesamt-Werksgewicht\",\n                    backgroundColor: \"rgb(218,0,44)\",\n                    borderColor: \"rgb(218,0,44)\",\n                    data: dataset.filter(function(month) {\n                        return month.weight != 0;\n                    }).map(function(month) {\n                        return month.weight;\n                    })\n                }\n            ]\n        };\n        var config = {\n            type: \"line\",\n            data: data,\n            options: {\n                scales: {\n                    y: {\n                        suggestedMin: 0\n                    }\n                },\n                plugins: {\n                    legend: {\n                        position: \"right\"\n                    }\n                }\n            }\n        };\n        // @ts-ignore\n        document.getElementById(\"line-chart\").innerHTML = '<canvas id=\"myChart\"></canvas>';\n        var myChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_4__[\"default\"](// @ts-ignore\n        document.getElementById(\"myChart\"), config);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 21\n                            }, _this),\n                            machinesData ? machinesData.map(function(machine) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: machine.machine_id,\n                                    children: machine.machine_id\n                                }, machine.machine_id, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, _this);\n                            }) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold justify-center flex space-x-10 mt-5 mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            month,\n                            \" \",\n                            year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/reporting/annual-evaluation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                    children: \"zur Jahresentwicklung wechseln\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex m-auto space-x-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/reporting/annual-evaluation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                                children: \"Gewichtentwicklung\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/reporting/annual-evaluation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                                children: \"Monatspreis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/reporting/annual-evaluation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                                children: \"Erl\\xf6sentwicklung\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs uppercase font-bold text-gray-500\",\n                children: \"Gewichtentwicklung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10 mt-5\",\n                id: \"line-chart\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyEvaluation, \"IpwBB25218Zz21bAhy8OTSkv7cg=\");\n_c = MonthlyEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyEvaluation);\nvar _c;\n$RefreshReg$(_c, \"MonthlyEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBMEM7QUFDbEI7QUFDSTtBQUNDO0FBQ0s7QUFFbEMsSUFBTU0sWUFBWSxHQUFRLEVBQUU7QUFFNUIsSUFBTUMsaUJBQWlCLEdBQUcsV0FBTTs7SUFDNUIsSUFBTUMsVUFBVSxHQUFHO1FBQ2YsUUFBUTtRQUNSLFNBQVM7UUFDVCxTQUFNO1FBQ04sT0FBTztRQUNQLEtBQUs7UUFDTCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO0tBQ2I7SUFDRCxJQUE4QlAsR0FBMkIsR0FBM0JBLCtDQUFRLENBQU1LLFlBQVksQ0FBQyxFQUFsREcsT0FBTyxHQUFnQlIsR0FBMkIsR0FBM0MsRUFBRVMsVUFBVSxHQUFJVCxHQUEyQixHQUEvQjtJQUMxQixJQUF3Q0EsSUFBZSxHQUFmQSwrQ0FBUSxFQUFPLEVBQWhEVSxZQUFZLEdBQXFCVixJQUFlLEdBQXBDLEVBQUVXLGVBQWUsR0FBSVgsSUFBZSxHQUFuQjtJQUNwQyxJQUF3QkEsSUFBOEIsR0FBOUJBLCtDQUFRLENBQU1FLDZDQUFNLEVBQUUsQ0FBQ1UsSUFBSSxFQUFFLENBQUMsRUFBL0NBLElBQUksR0FBYVosSUFBOEIsR0FBM0MsRUFBRWEsT0FBTyxHQUFJYixJQUE4QixHQUFsQztJQUNwQixJQUEwQkEsSUFBMkMsR0FBM0NBLCtDQUFRLENBQU1PLFVBQVUsQ0FBQ0wsNkNBQU0sRUFBRSxDQUFDWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQTlEQSxLQUFLLEdBQWNkLElBQTJDLEdBQXpELEVBQUVlLFFBQVEsR0FBSWYsSUFBMkMsR0FBL0M7SUFFdEJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUlpQixPQUFPLEdBQUcsb0VBQW9FO1FBRWxGZixpREFBTyxDQUFDZSxPQUFPLENBQUMsQ0FDWEUsSUFBSSxDQUFDLFNB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LFlBQVk7Ozs7O3FCQUFFOzs7Ozs7YUFDM0MsQ0FDVDtBQUNMLENBQUM7R0F2SUtqRCxpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjtBQXlJdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeD9lNzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5cbmNvbnN0IGRhdGFZZWFyMjAyMjogYW55ID0gW11cblxuY29uc3QgTW9udGhseUV2YWx1YXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9udGhzTGlzdCA9IFtcbiAgICAgICAgXCJKYW51YXJcIixcbiAgICAgICAgXCJGZWJydWFyXCIsXG4gICAgICAgIFwiTcOkcnpcIixcbiAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICBcIk1haVwiLFxuICAgICAgICBcIkp1bmlcIixcbiAgICAgICAgXCJKdWxpXCIsXG4gICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICAgIFwiT2t0b2JlclwiLFxuICAgICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICAgIFwiRGV6ZW1iZXJcIlxuICAgIF1cbiAgICBjb25zdCBbZGF0YXNldCwgc2V0RGF0YXNldF0gPSB1c2VTdGF0ZTxhbnk+KGRhdGFZZWFyMjAyMik7XG4gICAgY29uc3QgW21hY2hpbmVzRGF0YSwgc2V0TWFjaGluZXNEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZTxhbnk+KG1vbWVudCgpLnllYXIoKSk7XG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxhbnk+KG1vbnRoc0xpc3RbbW9tZW50KCkubW9udGgoKV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBpTmFtZSA9ICdodHRwczovLzh2OWpxdHM5ODkuZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vbWFjaGluZXMnO1xuXG4gICAgICAgIEFQSS5nZXQoYXBpTmFtZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE1hY2hpbmVzRGF0YShyZXNwb25zZS5kYXRhLkl0ZW1zLmZpbHRlcigobWFjaGluZTogYW55KT0+XG4gICAgICAgICAgICAgICAgICAgIG1hY2hpbmUuY2xpZW50ID09IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpIGFzIHN0cmluZykuY2xpZW50X25hbWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbXG4gICAgICAgICAgICAnSmFuJyxcbiAgICAgICAgICAgICdGZWInLFxuICAgICAgICAgICAgJ01yeicsXG4gICAgICAgICAgICAnQXByJyxcbiAgICAgICAgICAgICdNYWknLFxuICAgICAgICAgICAgJ0p1bicsXG4gICAgICAgICAgICAnSnVsJyxcbiAgICAgICAgICAgICdBdWcnLFxuICAgICAgICAgICAgJ1NlcCcsXG4gICAgICAgICAgICAnT2t0JyxcbiAgICAgICAgICAgICdOb3YnLFxuICAgICAgICAgICAgJ0RleidcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dlc2FtdC1XZXJrc2dld2ljaHQnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMTgsMCw0NCknLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDIxOCwwLDQ0KScsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNldC5maWx0ZXIobW9udGggPT4gbW9udGgud2VpZ2h0ICE9IDApLm1hcChtb250aD0+bW9udGgud2VpZ2h0KSxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lLWNoYXJ0XCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIjxjYW52YXMgaWQ9XFxcIm15Q2hhcnRcXFwiPjwvY2FudmFzPlwiXG5cbiAgICAgICAgY29uc3QgbXlDaGFydCA9IG5ldyBDaGFydChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0JyksXG4gICAgICAgICAgICBjb25maWdcbiAgICAgICAgKTtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtcGFnZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1mdWxsIHB4LTIwXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtM3hsIGZvbnQtYm9sZCBtYi01XCI+TW9uYXRzYXVzd2VydHVuZzwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk1hc2NoaW5lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctNDAgdGV4dC1ibHVlLTUwMCBib3JkZXJcIiBuYW1lPVwibWFjaGluZXNcIiBpZD1cIm1hY2hpbmVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+LSBBbGxlIC08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge21hY2hpbmVzRGF0YSA/XG4gICAgICAgICAgICAgICAgICAgIG1hY2hpbmVzRGF0YS5tYXAoKG1hY2hpbmU6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXttYWNoaW5lLm1hY2hpbmVfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYWNoaW5lLm1hY2hpbmVfaWR9PnttYWNoaW5lLm1hY2hpbmVfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIGZsZXggc3BhY2UteC0xMCBtdC01IG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPiZsdDs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bW9udGh9IHt5ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPiZndDs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXBvcnRpbmcvYW5udWFsLWV2YWx1YXRpb25cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBteC1hdXRvIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNSBzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXhzIGZsZXhcIj56dXIgSmFocmVzZW50d2lja2x1bmcgd2VjaHNlbG5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG0tYXV0byBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlcG9ydGluZy9hbm51YWwtZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBteC1hdXRvIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNSBzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXhzIGZsZXhcIj5HZXdpY2h0ZW50d2lja2x1bmdcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVwb3J0aW5nL2FubnVhbC1ldmFsdWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIG14LWF1dG8gcC0xLjUgcHgtMy41IGZvbnQtYm9sZCBib3JkZXItYWNjZW50LWNvbG9yLTEgYmctYWNjZW50LWNvbG9yLTRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWFjY2VudC1jb2xvci01IHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQteHMgZmxleFwiPk1vbmF0c3ByZWlzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlcG9ydGluZy9hbm51YWwtZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBteC1hdXRvIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNSBzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXhzIGZsZXhcIj5FcmzDtnNlbnR3aWNrbHVuZ1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LWdyYXktNTAwXCI+R2V3aWNodGVudHdpY2tsdW5nPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBtdC01XCIgaWQ9XCJsaW5lLWNoYXJ0XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlFdmFsdWF0aW9uXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJtb21lbnQiLCJMaW5rIiwiQ2hhcnQiLCJkYXRhWWVhcjIwMjIiLCJNb250aGx5RXZhbHVhdGlvbiIsIm1vbnRoc0xpc3QiLCJkYXRhc2V0Iiwic2V0RGF0YXNldCIsIm1hY2hpbmVzRGF0YSIsInNldE1hY2hpbmVzRGF0YSIsInllYXIiLCJzZXRZZWFyIiwibW9udGgiLCJzZXRNb250aCIsImFwaU5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiSXRlbXMiLCJmaWx0ZXIiLCJtYWNoaW5lIiwiY2xpZW50IiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xpZW50X25hbWUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsIndlaWdodCIsIm1hcCIsImNvbmZpZyIsInR5cGUiLCJvcHRpb25zIiwic2NhbGVzIiwieSIsInN1Z2dlc3RlZE1pbiIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJteUNoYXJ0IiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInNlbGVjdCIsIm5hbWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsInZhbHVlIiwibWFjaGluZV9pZCIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation.tsx\n"));

/***/ })

});