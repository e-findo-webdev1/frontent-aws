"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/master-data",{

/***/ "./pages/master-data.tsx":
/*!*******************************!*\
  !*** ./pages/master-data.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar MasterDataSummary = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), clients = ref1[0], setClients = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items);\n        }).catch(function(error) {\n            console.log(error); //\n        });\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients\").then(function(response) {\n            setClients(response.data.Items);\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    console.log(machinesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"px-24 h-full overflow-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-5 text-2xl font-bold mb-5\",\n                    children: \"Stammdaten\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:rounded-lg shadow-md border overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"flex-row table-auto w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"text-xs text-gray-500 border-b text-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Firma\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"KundenNr.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"PLZ\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Stadt\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Stra\\xdfe\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Telefon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"E-Mail\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Maschinen\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: \"bg-gray-50\",\n                            children: machinesData && clients ? clients.sort(function(a, b) {\n                                // @ts-ignore\n                                return a.client_id - b.client_id;\n                            }).map(function(client) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"text-xs border-t\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.client_name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.client_number\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.zip_code\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.city\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.street\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.telefon\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.email\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: machinesData.filter(function(machine) {\n                                                return machine.client == client.client_name;\n                                            }).length\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, client.client_id, true, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 37\n                                }, _this);\n                            }) : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_s(MasterDataSummary, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = MasterDataSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasterDataSummary);\nvar _c;\n$RefreshReg$(_c, \"MasterDataSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL3BhZ2VzL21hc3Rlci1kYXRhLnRzeD9jZWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBNYXN0ZXJEYXRhU3VtbWFyeSA9ICgpID0+IHtcbiAgICBjb25zdCBbbWFjaGluZXNEYXRhLCBzZXRNYWNoaW5lc0RhdGFdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFwaU5hbWUgPSAnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL21hY2hpbmVzJztcblxuICAgICAgICBBUEkuZ2V0KGFwaU5hbWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNYWNoaW5lc0RhdGEocmVzcG9uc2UuZGF0YS5JdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAvL1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgQVBJLmdldCgnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2NsaWVudHMnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q2xpZW50cyhyZXNwb25zZS5kYXRhLkl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vXG4gICAgICAgICAgICB9KTtcblxuICAgIH0sIFtdKTtcblxuICAgIGNvbnNvbGUubG9nKG1hY2hpbmVzRGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwicHgtMjQgaC1mdWxsIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtMnhsIGZvbnQtYm9sZCBtYi01XCI+U3RhbW1kYXRlbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCBib3JkZXIgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmbGV4LXJvdyB0YWJsZS1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgYm9yZGVyLWIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5GaXJtYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5LdW5kZW5Oci48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+UExaPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlN0YWR0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlN0cmHDn2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+VGVsZWZvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5FLU1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+TWFzY2hpbmVuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFjaGluZXNEYXRhICYmIGNsaWVudHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudHMuc29ydChmdW5jdGlvbihhOiBhbnksIGI6IGFueSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY2xpZW50X2lkIC0gYi5jbGllbnRfaWR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbGllbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2NsaWVudC5jbGllbnRfaWR9IGNsYXNzTmFtZT1cInRleHQteHMgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NsaWVudC5jbGllbnRfbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2xpZW50LmNsaWVudF9udW1iZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NsaWVudC56aXBfY29kZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2xpZW50LmNpdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NsaWVudC5zdHJlZXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NsaWVudC50ZWxlZm9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjbGllbnQuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21hY2hpbmVzRGF0YS5maWx0ZXIoKG1hY2hpbmU6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jbGllbnQgPT0gY2xpZW50LmNsaWVudF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGh9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyRGF0YVN1bW1hcnkiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJNYXN0ZXJEYXRhU3VtbWFyeSIsIm1hY2hpbmVzRGF0YSIsInNldE1hY2hpbmVzRGF0YSIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwiYXBpTmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInNvcnQiLCJhIiwiYiIsImNsaWVudF9pZCIsIm1hcCIsImNsaWVudCIsInRkIiwiY2xpZW50X25hbWUiLCJjbGllbnRfbnVtYmVyIiwiemlwX2NvZGUiLCJjaXR5Iiwic3RyZWV0IiwidGVsZWZvbiIsImVtYWlsIiwiZmlsdGVyIiwibWFjaGluZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/master-data.tsx\n"));

/***/ })

});