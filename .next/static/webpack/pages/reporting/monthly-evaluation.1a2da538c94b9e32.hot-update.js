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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar MonthlyEvaluation = function() {\n    _s();\n    var monthsList = [\n        \"Januar\",\n        \"Februar\",\n        \"M\\xe4rz\",\n        \"April\",\n        \"Mai\",\n        \"Juni\",\n        \"Juli\",\n        \"August\",\n        \"September\",\n        \"Oktober\",\n        \"November\",\n        \"Dezember\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_2___default()().year()), year = ref1[0], setYear = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(monthsList[moment__WEBPACK_IMPORTED_MODULE_2___default()().month()]), month = ref2[0], setMonth = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this),\n                            machinesData ? machinesData.map(function(machine) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: machine.machine_id,\n                                    children: machine.machine_id\n                                }, machine.machine_id, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, _this);\n                            }) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold justify-center flex space-x-10 mt-5 mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            month,\n                            \" \",\n                            year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/reporting/annual-evaluation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex\",\n                    children: \"zur Jahresentwicklung wechseln\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyEvaluation, \"CbfXISqVLsXICTF5PTp5O4py5dY=\");\n_c = MonthlyEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyEvaluation);\nvar _c;\n$RefreshReg$(_c, \"MonthlyEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUEwQztBQUNsQjtBQUNJO0FBQ0M7QUFFN0IsSUFBTUssaUJBQWlCLEdBQUcsV0FBTTs7SUFDNUIsSUFBTUMsVUFBVSxHQUFHO1FBQ2YsUUFBUTtRQUNSLFNBQVM7UUFDVCxTQUFNO1FBQ04sT0FBTztRQUNQLEtBQUs7UUFDTCxNQUFNO1FBQ04sTUFBTTtRQUNOLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO0tBQ2I7SUFFRCxJQUF3Q0wsR0FBZSxHQUFmQSwrQ0FBUSxFQUFPLEVBQWhETSxZQUFZLEdBQXFCTixHQUFlLEdBQXBDLEVBQUVPLGVBQWUsR0FBSVAsR0FBZSxHQUFuQjtJQUNwQyxJQUF3QkEsSUFBOEIsR0FBOUJBLCtDQUFRLENBQU1FLDZDQUFNLEVBQUUsQ0FBQ00sSUFBSSxFQUFFLENBQUMsRUFBL0NBLElBQUksR0FBYVIsSUFBOEIsR0FBM0MsRUFBRVMsT0FBTyxHQUFJVCxJQUE4QixHQUFsQztJQUNwQixJQUEwQkEsSUFBMkMsR0FBM0NBLCtDQUFRLENBQU1LLFVBQVUsQ0FBQ0gsNkNBQU0sRUFBRSxDQUFDUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQTlEQSxLQUFLLEdBQWNWLElBQTJDLEdBQXpELEVBQUVXLFFBQVEsR0FBSVgsSUFBMkMsR0FBL0M7SUFFdEJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUlhLE9BQU8sR0FBRyxvRUFBb0U7UUFFbEZYLGlEQUFPLENBQUNXLE9BQU8sQ0FBQyxDQUNYRSxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFLO1lBQ2hCUixlQUFlLENBQUNRLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxPQUFZO3VCQUNwREEsT0FBTyxDQUFDQyxNQUFNLElBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBVyxDQUFDQyxXQUFXO2FBQUEsQ0FBQyxDQUFDO1FBQy9GLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSSw4REFBQ0csS0FBRztRQUFDQyxFQUFFLEVBQUMsY0FBYztRQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzswQkFDekQsOERBQUNDLEdBQUM7Z0JBQUNELFNBQVMsRUFBQyw4QkFBOEI7MEJBQUMsa0JBQWdCOzs7OztxQkFBSTswQkFDaEUsOERBQUNGLEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyx3QkFBd0I7O2tDQUNuQyw4REFBQ0UsTUFBSTtrQ0FBQyxXQUFTOzs7Ozs2QkFBTztrQ0FDdEIsOERBQUNDLFFBQU07d0JBQUNILFNBQVMsRUFBQywyQkFBMkI7d0JBQUNJLElBQUksRUFBQyxVQUFVO3dCQUFDTCxFQUFFLEVBQUMsVUFBVTs7MENBQ3ZFLDhEQUFDTSxRQUFNO2dDQUFDQyxRQUFROzBDQUFDLFVBQVE7Ozs7O3FDQUFTOzRCQUNqQ2hDLFlBQVksR0FDYkEsWUFBWSxDQUFDaUMsR0FBRyxDQUFDLFNBQUNwQixPQUFZO3FEQUMxQiw4REFBQ2tCLFFBQU07b0NBQ0NHLEtBQUssRUFBRXJCLE9BQU8sQ0FBQ3NCLFVBQVU7OENBQUd0QixPQUFPLENBQUNzQixVQUFVO21DQUR6Q3RCLE9BQU8sQ0FBQ3NCLFVBQVU7Ozs7eUNBRXRCOzZCQUFBLENBQ1osR0FDQyxFQUFFOzs7Ozs7NkJBQ0M7Ozs7OztxQkFDUDswQkFDTiw4REFBQ1gsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLG9EQUFvRDs7a0NBQy9ELDhEQUFDVSxRQUFNO2tDQUFDLEdBQUk7Ozs7OzZCQUFTO2tDQUNyQiw4REFBQ1IsTUFBSTs7NEJBQUV4QixLQUFLOzRCQUFDLEdBQUM7NEJBQUNGLElBQUk7Ozs7Ozs2QkFBUTtrQ0FDM0IsOERBQUNrQyxRQUFNO2tDQUFDLEdBQUk7Ozs7OzZCQUFTOzs7Ozs7cUJBQ25COzBCQUNOLDhEQUFDdkMsa0RBQUk7Z0JBQUN3QyxJQUFJLEVBQUMsOEJBQThCOzBCQUNyQyw0RUFBQ0QsUUFBTTtvQkFBQ1YsU0FBUyxFQUFDLDRJQUNtRDs4QkFBQyxnQ0FDdEU7Ozs7O3lCQUFTOzs7OztxQkFDTjs7Ozs7O2FBQ0wsQ0FDVDtBQUNMLENBQUM7R0E5REs1QixpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjtBQWdFdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeD9lNzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE1vbnRobHlFdmFsdWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vbnRoc0xpc3QgPSBbXG4gICAgICAgIFwiSmFudWFyXCIsXG4gICAgICAgIFwiRmVicnVhclwiLFxuICAgICAgICBcIk3DpHJ6XCIsXG4gICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgXCJNYWlcIixcbiAgICAgICAgXCJKdW5pXCIsXG4gICAgICAgIFwiSnVsaVwiLFxuICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICBcIk9rdG9iZXJcIixcbiAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICBcIkRlemVtYmVyXCJcbiAgICBdXG5cbiAgICBjb25zdCBbbWFjaGluZXNEYXRhLCBzZXRNYWNoaW5lc0RhdGFdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlPGFueT4obW9tZW50KCkueWVhcigpKTtcbiAgICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlPGFueT4obW9udGhzTGlzdFttb21lbnQoKS5tb250aCgpXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBhcGlOYW1lID0gJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9tYWNoaW5lcyc7XG5cbiAgICAgICAgQVBJLmdldChhcGlOYW1lKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TWFjaGluZXNEYXRhKHJlc3BvbnNlLmRhdGEuSXRlbXMuZmlsdGVyKChtYWNoaW5lOiBhbnkpPT5cbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jbGllbnQgPT0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykgYXMgc3RyaW5nKS5jbGllbnRfbmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy9cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLWZ1bGwgcHgtMjBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC0zeGwgZm9udC1ib2xkIG1iLTVcIj5Nb25hdHNhdXN3ZXJ0dW5nPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFzY2hpbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy00MCB0ZXh0LWJsdWUtNTAwIGJvcmRlclwiIG5hbWU9XCJtYWNoaW5lc1wiIGlkPVwibWFjaGluZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD4tIEFsbGUgLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7bWFjaGluZXNEYXRhID9cbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZXNEYXRhLm1hcCgobWFjaGluZTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21hY2hpbmUubWFjaGluZV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21hY2hpbmUubWFjaGluZV9pZH0+e21hY2hpbmUubWFjaGluZV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQganVzdGlmeS1jZW50ZXIgZmxleCBzcGFjZS14LTEwIG10LTUgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+Jmx0OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuPnttb250aH0ge3llYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24+Jmd0OzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlcG9ydGluZy9hbm51YWwtZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIG14LWF1dG8gcC0xLjUgcHgtMy41IGZvbnQtYm9sZCBib3JkZXItYWNjZW50LWNvbG9yLTEgYmctYWNjZW50LWNvbG9yLTRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWFjY2VudC1jb2xvci01IHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQteHMgZmxleFwiPnp1ciBKYWhyZXNlbnR3aWNrbHVuZyB3ZWNoc2VsblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlFdmFsdWF0aW9uXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJtb21lbnQiLCJMaW5rIiwiTW9udGhseUV2YWx1YXRpb24iLCJtb250aHNMaXN0IiwibWFjaGluZXNEYXRhIiwic2V0TWFjaGluZXNEYXRhIiwieWVhciIsInNldFllYXIiLCJtb250aCIsInNldE1vbnRoIiwiYXBpTmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImZpbHRlciIsIm1hY2hpbmUiLCJjbGllbnQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjbGllbnRfbmFtZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsInNlbGVjdCIsIm5hbWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsIm1hcCIsInZhbHVlIiwibWFjaGluZV9pZCIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation.tsx\n"));

/***/ })

});