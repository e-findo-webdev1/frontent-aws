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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar MasterDataSummary = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), clients = ref1[0], setClients = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items);\n        }).catch(function(error) {\n            console.log(error); //\n        });\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients\").then(function(response) {\n            setClients(response.data.Items);\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"px-24 h-full overflow-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2\",\n                            children: \"+ Neuer Kunde\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5 text-2xl font-bold mb-5\",\n                        children: \"Stammdaten\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:rounded-lg shadow-md border overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"flex-row table-auto w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"text-xs text-gray-500 border-b text-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Firma\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"KundenNr.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"PLZ\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Stadt\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Stra\\xdfe\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Telefon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"E-Mail\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"font-normal\",\n                                        children: \"Maschinen\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: \"bg-gray-50\",\n                            children: machinesData && clients ? clients.sort(function(a, b) {\n                                // @ts-ignore\n                                return a.client_id - b.client_id;\n                            }).map(function(client) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"text-xs border-t\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/master-data/\" + client.client_id,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"underline\",\n                                                    children: client.client_name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 48\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 45\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.client_number\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.zip_code\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.city\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.street\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.telefon\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: client.email\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: machinesData.filter(function(machine) {\n                                                return machine.client == client.client_name;\n                                            }).length\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, client.client_id, true, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 37\n                                }, _this);\n                            }) : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"mt-9\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns-2 mt-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-bold mb-5\",\n                            children: \"Material\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-bold mb-5\",\n                            children: \"Qualit\\xe4t\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/master-data.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_s(MasterDataSummary, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = MasterDataSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasterDataSummary);\nvar _c;\n$RefreshReg$(_c, \"MasterDataSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QyxDQUFDUyxNQUFNOzs7OztpREFBTTs7bUNBWlRYLE1BQU0sQ0FBQ0YsU0FBUzs7Ozt5Q0FhcEI7NkJBQUEsQ0FDUixHQUNILEVBQUU7Ozs7O2lDQUVKOzs7Ozs7eUJBQ0o7Ozs7O3FCQUNOOzBCQUNOLDhEQUFDYyxJQUFFO2dCQUFDMUIsU0FBUyxFQUFDLE1BQU07Ozs7O3FCQUFFOzBCQUN0Qiw4REFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLGdCQUFnQjs7a0NBQzNCLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsRUFBRTtrQ0FDYiw0RUFBQ0csR0FBQzs0QkFBQ0gsU0FBUyxFQUFDLHlCQUF5QjtzQ0FBQyxVQUFROzs7OztpQ0FBSTs7Ozs7NkJBQ2pEO2tDQUNOLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsRUFBRTtrQ0FDYiw0RUFBQ0csR0FBQzs0QkFBQ0gsU0FBUyxFQUFDLHlCQUF5QjtzQ0FBQyxhQUFROzs7OztpQ0FBSTs7Ozs7NkJBQ2pEOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ0w7QUFDVCxDQUFDO0dBdkZLakIsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7QUF5RnZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFzdGVyLWRhdGEudHN4P2NlZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBUEkgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE1hc3RlckRhdGFTdW1tYXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IFttYWNoaW5lc0RhdGEsIHNldE1hY2hpbmVzRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGU8YW55PigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBpTmFtZSA9ICdodHRwczovLzh2OWpxdHM5ODkuZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vbWFjaGluZXMnO1xuXG4gICAgICAgIEFQSS5nZXQoYXBpTmFtZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE1hY2hpbmVzRGF0YShyZXNwb25zZS5kYXRhLkl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBBUEkuZ2V0KCdodHRwczovLzh2OWpxdHM5ODkuZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vY2xpZW50cycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDbGllbnRzKHJlc3BvbnNlLmRhdGEuSXRlbXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy9cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtcGFnZVwiIGNsYXNzTmFtZT1cInB4LTI0IGgtZnVsbCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgZmxvYXQtcmlnaHQgcC0xLjUgcHgtMy41IGZvbnQtYm9sZCBib3JkZXItYWNjZW50LWNvbG9yLTEgYmctYWNjZW50LWNvbG9yLTRcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYWNjZW50LWNvbG9yLTUgc206cm91bmRlZC1sZyBzaGFkb3ctbWQgdGV4dC14cyBtbC0yXCI+KyBOZXVlciBLdW5kZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtMnhsIGZvbnQtYm9sZCBtYi01XCI+U3RhbW1kYXRlbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpyb3VuZGVkLWxnIHNoYWRvdy1tZCBib3JkZXIgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmbGV4LXJvdyB0YWJsZS1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgYm9yZGVyLWIgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5GaXJtYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5LdW5kZW5Oci48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+UExaPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlN0YWR0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlN0cmHDn2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+VGVsZWZvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5FLU1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+TWFzY2hpbmVuPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFjaGluZXNEYXRhICYmIGNsaWVudHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudHMuc29ydChmdW5jdGlvbihhOiBhbnksIGI6IGFueSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY2xpZW50X2lkIC0gYi5jbGllbnRfaWR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbGllbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2NsaWVudC5jbGllbnRfaWR9IGNsYXNzTmFtZT1cInRleHQteHMgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9tYXN0ZXItZGF0YS9cIiArIGNsaWVudC5jbGllbnRfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48dGQgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+e2NsaWVudC5jbGllbnRfbmFtZX08L3RkPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjbGllbnQuY2xpZW50X251bWJlcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2xpZW50LnppcF9jb2RlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjbGllbnQuY2l0eX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2xpZW50LnN0cmVldH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2xpZW50LnRlbGVmb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NsaWVudC5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bWFjaGluZXNEYXRhLmZpbHRlcigobWFjaGluZTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lLmNsaWVudCA9PSBjbGllbnQuY2xpZW50X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmxlbmd0aH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTlcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMiBtdC05XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTVcIj5NYXRlcmlhbDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNVwiPlF1YWxpdMOkdDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJEYXRhU3VtbWFyeSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSSIsIkxpbmsiLCJNYXN0ZXJEYXRhU3VtbWFyeSIsIm1hY2hpbmVzRGF0YSIsInNldE1hY2hpbmVzRGF0YSIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwiYXBpTmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJocmVmIiwiYnV0dG9uIiwicCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJzb3J0IiwiYSIsImIiLCJjbGllbnRfaWQiLCJtYXAiLCJjbGllbnQiLCJ0ZCIsImNsaWVudF9uYW1lIiwiY2xpZW50X251bWJlciIsInppcF9jb2RlIiwiY2l0eSIsInN0cmVldCIsInRlbGVmb24iLCJlbWFpbCIsImZpbHRlciIsIm1hY2hpbmUiLCJsZW5ndGgiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/master-data.tsx\n"));

/***/ })

});