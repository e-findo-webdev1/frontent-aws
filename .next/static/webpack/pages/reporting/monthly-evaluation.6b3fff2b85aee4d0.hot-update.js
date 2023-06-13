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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar MonthlyEvaluation = function() {\n    _s();\n    var monthsList = [\n        \"Januar\",\n        \"Februar\",\n        \"M\\xe4rz\",\n        \"April\",\n        \"Mai\",\n        \"Juni\",\n        \"Juli\",\n        \"August\",\n        \"September\",\n        \"Oktober\",\n        \"November\",\n        \"Dezember\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moment__WEBPACK_IMPORTED_MODULE_2___default()().year()), year = ref1[0], setYear = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(monthsList[moment__WEBPACK_IMPORTED_MODULE_2___default()().month()]), month = ref2[0], setMonth = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, _this),\n                            machinesData ? machinesData.map(function(machine) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: machine.machine_id,\n                                    children: machine.machine_id\n                                }, machine.machine_id, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, _this);\n                            }) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold justify-center flex space-x-10 my-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: year == 2020 ? \"text-gray-300 pointer-events-none\" : \"\",\n                        onClick: year > 2020 ? function() {\n                            setYear(year - 1);\n                        } : function() {},\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: year\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: year == 2022 ? \"text-gray-300 pointer-events-none\" : \"\",\n                        onClick: year < 2022 ? function() {\n                            setYear(year + 1);\n                        } : function() {},\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyEvaluation, \"CbfXISqVLsXICTF5PTp5O4py5dY=\");\n_c = MonthlyEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyEvaluation);\nvar _c;\n$RefreshReg$(_c, \"MonthlyEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBMEM7QUFDbEI7QUFDSTtBQUU1QixJQUFNSSxpQkFBaUIsR0FBRyxXQUFNOztJQUM1QixJQUFNQyxVQUFVLEdBQUc7UUFDZixRQUFRO1FBQ1IsU0FBUztRQUNULFNBQU07UUFDTixPQUFPO1FBQ1AsS0FBSztRQUNMLE1BQU07UUFDTixNQUFNO1FBQ04sUUFBUTtRQUNSLFdBQVc7UUFDWCxTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7S0FDYjtJQUVELElBQXdDSixHQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBaERLLFlBQVksR0FBcUJMLEdBQWUsR0FBcEMsRUFBRU0sZUFBZSxHQUFJTixHQUFlLEdBQW5CO0lBQ3BDLElBQXdCQSxJQUE4QixHQUE5QkEsK0NBQVEsQ0FBTUUsNkNBQU0sRUFBRSxDQUFDSyxJQUFJLEVBQUUsQ0FBQyxFQUEvQ0EsSUFBSSxHQUFhUCxJQUE4QixHQUEzQyxFQUFFUSxPQUFPLEdBQUlSLElBQThCLEdBQWxDO0lBQ3BCLElBQTBCQSxJQUEyQyxHQUEzQ0EsK0NBQVEsQ0FBTUksVUFBVSxDQUFDRiw2Q0FBTSxFQUFFLENBQUNPLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBOURBLEtBQUssR0FBY1QsSUFBMkMsR0FBekQsRUFBRVUsUUFBUSxHQUFJVixJQUEyQyxHQUEvQztJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBSVksT0FBTyxHQUFHLG9FQUFvRTtRQUVsRlYsaURBQU8sQ0FBQ1UsT0FBTyxDQUFDLENBQ1hFLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7WUFDaEJSLGVBQWUsQ0FBQ1EsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLE9BQVk7dUJBQ3BEQSxPQUFPLENBQUNDLE1BQU0sSUFBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFXLENBQUNDLFdBQVc7YUFBQSxDQUFDLENBQUM7UUFDL0YsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxjQUFjO1FBQUNDLFNBQVMsRUFBQyw0QkFBNEI7OzBCQUN6RCw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBQyxrQkFBZ0I7Ozs7O3FCQUFJOzBCQUNoRSw4REFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLHdCQUF3Qjs7a0NBQ25DLDhEQUFDRSxNQUFJO2tDQUFDLFdBQVM7Ozs7OzZCQUFPO2tDQUN0Qiw4REFBQ0MsUUFBTTt3QkFBQ0gsU0FBUyxFQUFDLDJCQUEyQjt3QkFBQ0ksSUFBSSxFQUFDLFVBQVU7d0JBQUNMLEVBQUUsRUFBQyxVQUFVOzswQ0FDdkUsOERBQUNNLFFBQU07Z0NBQUNDLFFBQVE7MENBQUMsVUFBUTs7Ozs7cUNBQVM7NEJBQ2pDaEMsWUFBWSxHQUNiQSxZQUFZLENBQUNpQyxHQUFHLENBQUMsU0FBQ3BCLE9BQVk7cURBQzFCLDhEQUFDa0IsUUFBTTtvQ0FDQ0csS0FBSyxFQUFFckIsT0FBTyxDQUFDc0IsVUFBVTs4Q0FBR3RCLE9BQU8sQ0FBQ3NCLFVBQVU7bUNBRHpDdEIsT0FBTyxDQUFDc0IsVUFBVTs7Ozt5Q0FFdEI7NkJBQUEsQ0FDWixHQUNDLEVBQUU7Ozs7Ozs2QkFDQzs7Ozs7O3FCQUNQOzBCQUNOLDhEQUFDWCxLQUFHO2dCQUFDRSxTQUFTLEVBQUMsK0NBQStDOztrQ0FDMUQsOERBQUNVLFFBQU07d0JBQ0hWLFNBQVMsRUFDTHhCLElBQUksSUFBSSxJQUFJLEdBQ04sbUNBQW1DLEdBQ25DLEVBQUU7d0JBRVptQyxPQUFPLEVBQ0huQyxJQUFJLEdBQUcsSUFBSSxHQUNMLFdBQUk7NEJBQUNDLE9BQU8sQ0FBQ0QsSUFBSSxHQUFDLENBQUMsQ0FBQzt3QkFBQSxDQUFDLEdBQ3JCLFdBQUksQ0FBQyxDQUFDO2tDQUVuQixHQUFJOzs7Ozs2QkFBUztrQ0FDZCw4REFBQzBCLE1BQUk7a0NBQUUxQixJQUFJOzs7Ozs2QkFBUTtrQ0FDbkIsOERBQUNrQyxRQUFNO3dCQUNIVixTQUFTLEVBQ0x4QixJQUFJLElBQUksSUFBSSxHQUNOLG1DQUFtQyxHQUNuQyxFQUFFO3dCQUVabUMsT0FBTyxFQUNIbkMsSUFBSSxHQUFHLElBQUksR0FDTCxXQUFJOzRCQUFDQyxPQUFPLENBQUNELElBQUksR0FBQyxDQUFDLENBQUM7d0JBQUEsQ0FBQyxHQUNyQixXQUFJLENBQUMsQ0FBQztrQ0FFbkIsR0FBSTs7Ozs7NkJBQVM7Ozs7OztxQkFDWjs7Ozs7O2FBQ0osQ0FDVDtBQUNMLENBQUM7R0EvRUtKLGlCQUFpQjtBQUFqQkEsS0FBQUEsaUJBQWlCO0FBaUZ2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlcG9ydGluZy9tb250aGx5LWV2YWx1YXRpb24udHN4P2U3ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBUEkgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuY29uc3QgTW9udGhseUV2YWx1YXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9udGhzTGlzdCA9IFtcbiAgICAgICAgXCJKYW51YXJcIixcbiAgICAgICAgXCJGZWJydWFyXCIsXG4gICAgICAgIFwiTcOkcnpcIixcbiAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICBcIk1haVwiLFxuICAgICAgICBcIkp1bmlcIixcbiAgICAgICAgXCJKdWxpXCIsXG4gICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICAgIFwiT2t0b2JlclwiLFxuICAgICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICAgIFwiRGV6ZW1iZXJcIlxuICAgIF1cblxuICAgIGNvbnN0IFttYWNoaW5lc0RhdGEsIHNldE1hY2hpbmVzRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGU8YW55Pihtb21lbnQoKS55ZWFyKCkpO1xuICAgIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGU8YW55Pihtb250aHNMaXN0W21vbWVudCgpLm1vbnRoKCldKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFwaU5hbWUgPSAnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL21hY2hpbmVzJztcblxuICAgICAgICBBUEkuZ2V0KGFwaU5hbWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNYWNoaW5lc0RhdGEocmVzcG9uc2UuZGF0YS5JdGVtcy5maWx0ZXIoKG1hY2hpbmU6IGFueSk9PlxuICAgICAgICAgICAgICAgICAgICBtYWNoaW5lLmNsaWVudCA9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbXBhbnknKSBhcyBzdHJpbmcpLmNsaWVudF9uYW1lKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAvL1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXBhZ2VcIiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIGgtZnVsbCBweC0yMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LTN4bCBmb250LWJvbGQgbWItNVwiPk1vbmF0c2F1c3dlcnR1bmc8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5NYXNjaGluZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LTQwIHRleHQtYmx1ZS01MDAgYm9yZGVyXCIgbmFtZT1cIm1hY2hpbmVzXCIgaWQ9XCJtYWNoaW5lc1wiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPi0gQWxsZSAtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHttYWNoaW5lc0RhdGEgP1xuICAgICAgICAgICAgICAgICAgICBtYWNoaW5lc0RhdGEubWFwKChtYWNoaW5lOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bWFjaGluZS5tYWNoaW5lX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWFjaGluZS5tYWNoaW5lX2lkfT57bWFjaGluZS5tYWNoaW5lX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBqdXN0aWZ5LWNlbnRlciBmbGV4IHNwYWNlLXgtMTAgbXktNVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgPT0gMjAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktMzAwIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA+IDIwMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgpPT57c2V0WWVhcih5ZWFyLTEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKCk9Pnt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+Jmx0OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt5ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyID09IDIwMjJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTMwMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgPCAyMDIyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKT0+e3NldFllYXIoeWVhcisxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgpPT57fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPiZndDs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlFdmFsdWF0aW9uXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJtb21lbnQiLCJNb250aGx5RXZhbHVhdGlvbiIsIm1vbnRoc0xpc3QiLCJtYWNoaW5lc0RhdGEiLCJzZXRNYWNoaW5lc0RhdGEiLCJ5ZWFyIiwic2V0WWVhciIsIm1vbnRoIiwic2V0TW9udGgiLCJhcGlOYW1lIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIkl0ZW1zIiwiZmlsdGVyIiwibWFjaGluZSIsImNsaWVudCIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNsaWVudF9uYW1lIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwibWFwIiwidmFsdWUiLCJtYWNoaW5lX2lkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation.tsx\n"));

/***/ })

});