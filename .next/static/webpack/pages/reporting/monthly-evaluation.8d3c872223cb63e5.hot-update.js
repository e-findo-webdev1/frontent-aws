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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar MonthlyEvaluation = function() {\n    _s();\n    var monthsList = [\n        \"Januar\",\n        \"Februar\",\n        \"M\\xe4rz\",\n        \"April\",\n        \"Mai\",\n        \"Juni\",\n        \"Juli\",\n        \"August\",\n        \"September\",\n        \"Oktober\",\n        \"November\",\n        \"Dezember\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_2___default()().year()), year = ref1[0], setYear = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(monthsList[moment__WEBPACK_IMPORTED_MODULE_2___default()().month()]), month = ref2[0], setMonth = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this),\n                            machinesData ? machinesData.map(function(machine) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: machine.machine_id,\n                                    children: machine.machine_id\n                                }, machine.machine_id, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, _this);\n                            }) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold justify-center flex space-x-10 mt-5 mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            month,\n                            \" \",\n                            year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/reporting/annual-evaluation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                    children: \"zur Jahresentwicklung wechseln\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex m-auto space-x-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/reporting/annual-evaluation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                                children: \"Gewichtentwicklung\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/reporting/annual-evaluation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                                children: \"Monatspreis\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/reporting/annual-evaluation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                                children: \"Erl\\xf6sentwicklung\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-xs uppercase font-bold text-gray-500\",\n                children: \"Gewichtentwicklung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10 mt-5\",\n                id: \"line-chart\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyEvaluation, \"CbfXISqVLsXICTF5PTp5O4py5dY=\");\n_c = MonthlyEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyEvaluation);\nvar _c;\n$RefreshReg$(_c, \"MonthlyEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUEwQztBQUNsQjtBQUNJO0FBQ0M7QUFFN0IsSUFBTUssaUJBQWlCLEdBQUcsV0FBTTs7SUFDNUIsSUFBTUMsVUFBVSxHQUFHO1FBQ2YsUUFBUTtRQUNSLFNBQVM7UUFDVCxTQUFNO1FBQ04sT0FBTztRQUNQLEtBQUs7UUFDTCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO0tBQ2I7SUFFRCxJQUF3Q0wsR0FBZSxHQUFmQSwrQ0FBUSxFQUFPLEVBQWhETSxZQUFZLEdBQXFCTixHQUFlLEdBQXBDLEVBQUVPLGVBQWUsR0FBSVAsR0FBZSxHQUFuQjtJQUNwQyxJQUF3QkEsSUFBOEIsR0FBOUJBLCtDQUFRLENBQU1FLDZDQUFNLEVBQUUsQ0FBQ00sSUFBSSxFQUFFLENBQUMsRUFBL0NBLElBQUksR0FBYVIsSUFBOEIsR0FBM0MsRUFBRVMsT0FBTyxHQUFJVCxJQUE4QixHQUFsQztJQUNwQixJQUEwQkEsSUFBMkMsR0FBM0NBLCtDQUFRLENBQU1LLFVBQVUsQ0FBQ0gsNkNBQU0sRUFBRSxDQUFDUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQTlEQSxLQUFLLEdBQWNWLElBQTJDLEdBQXpELEVBQUVXLFFBQVEsR0FBSVgsSUFBMkMsR0FBL0M7SUFFdEJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUlhLE9BQU8sR0FBRyxvRUFBb0U7UUFFbEZYLGlEQUFPLENBQUNXLE9BQU8sQ0FBQyxDQUNYRSxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFLO1lBQ2hCUixlQUFlLENBQUNRLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxPQUFZO3VCQUNwREEsT0FBTyxDQUFDQyxNQUFNLElBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxjQUFj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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0aW5nL21vbnRobHktZXZhbHVhdGlvbi50c3g/ZTc4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBNb250aGx5RXZhbHVhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtb250aHNMaXN0ID0gW1xuICAgICAgICBcIkphbnVhclwiLFxuICAgICAgICBcIkZlYnJ1YXJcIixcbiAgICAgICAgXCJNw6RyelwiLFxuICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgIFwiTWFpXCIsXG4gICAgICAgIFwiSnVuaVwiLFxuICAgICAgICBcIkp1bGlcIixcbiAgICAgICAgXCJBdWd1c3RcIixcbiAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgXCJPa3RvYmVyXCIsXG4gICAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgICAgXCJEZXplbWJlclwiXG4gICAgXVxuXG4gICAgY29uc3QgW21hY2hpbmVzRGF0YSwgc2V0TWFjaGluZXNEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZTxhbnk+KG1vbWVudCgpLnllYXIoKSk7XG4gICAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZTxhbnk+KG1vbnRoc0xpc3RbbW9tZW50KCkubW9udGgoKV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBpTmFtZSA9ICdodHRwczovLzh2OWpxdHM5ODkuZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vbWFjaGluZXMnO1xuXG4gICAgICAgIEFQSS5nZXQoYXBpTmFtZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE1hY2hpbmVzRGF0YShyZXNwb25zZS5kYXRhLkl0ZW1zLmZpbHRlcigobWFjaGluZTogYW55KT0+XG4gICAgICAgICAgICAgICAgICAgIG1hY2hpbmUuY2xpZW50ID09IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpIGFzIHN0cmluZykuY2xpZW50X25hbWUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vXG4gICAgICAgICAgICB9KTtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtcGFnZVwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1mdWxsIHB4LTIwXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtM3hsIGZvbnQtYm9sZCBtYi01XCI+TW9uYXRzYXVzd2VydHVuZzwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk1hc2NoaW5lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctNDAgdGV4dC1ibHVlLTUwMCBib3JkZXJcIiBuYW1lPVwibWFjaGluZXNcIiBpZD1cIm1hY2hpbmVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+LSBBbGxlIC08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge21hY2hpbmVzRGF0YSA/XG4gICAgICAgICAgICAgICAgICAgIG1hY2hpbmVzRGF0YS5tYXAoKG1hY2hpbmU6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXttYWNoaW5lLm1hY2hpbmVfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYWNoaW5lLm1hY2hpbmVfaWR9PnttYWNoaW5lLm1hY2hpbmVfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIGZsZXggc3BhY2UteC0xMCBtdC01IG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPiZsdDs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57bW9udGh9IHt5ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPiZndDs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXBvcnRpbmcvYW5udWFsLWV2YWx1YXRpb25cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBteC1hdXRvIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNSBzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXhzIGZsZXhcIj56dXIgSmFocmVzZW50d2lja2x1bmcgd2VjaHNlbG5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG0tYXV0byBzcGFjZS14LTFcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlcG9ydGluZy9hbm51YWwtZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBteC1hdXRvIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNSBzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXhzIGZsZXhcIj5HZXdpY2h0ZW50d2lja2x1bmdcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVwb3J0aW5nL2FubnVhbC1ldmFsdWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIG14LWF1dG8gcC0xLjUgcHgtMy41IGZvbnQtYm9sZCBib3JkZXItYWNjZW50LWNvbG9yLTEgYmctYWNjZW50LWNvbG9yLTRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWFjY2VudC1jb2xvci01IHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQteHMgZmxleFwiPk1vbmF0c3ByZWlzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlcG9ydGluZy9hbm51YWwtZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBteC1hdXRvIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNSBzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXhzIGZsZXhcIj5FcmzDtnNlbnR3aWNrbHVuZ1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LWdyYXktNTAwXCI+R2V3aWNodGVudHdpY2tsdW5nPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBtdC01XCIgaWQ9XCJsaW5lLWNoYXJ0XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlFdmFsdWF0aW9uXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJtb21lbnQiLCJMaW5rIiwiTW9udGhseUV2YWx1YXRpb24iLCJtb250aHNMaXN0IiwibWFjaGluZXNEYXRhIiwic2V0TWFjaGluZXNEYXRhIiwieWVhciIsInNldFllYXIiLCJtb250aCIsInNldE1vbnRoIiwiYXBpTmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImZpbHRlciIsIm1hY2hpbmUiLCJjbGllbnQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjbGllbnRfbmFtZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInNlbGVjdCIsIm5hbWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsIm1hcCIsInZhbHVlIiwibWFjaGluZV9pZCIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation.tsx\n"));

/***/ })

});