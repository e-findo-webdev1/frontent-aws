"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user-data",{

/***/ "./pages/user-data.tsx":
/*!*****************************!*\
  !*** ./pages/user-data.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ \"./node_modules/moment-timezone/index.js\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar UserData = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients\").then(function(response) {\n            setData(response.data.Items.filter(function(client) {\n                return client.client_id == JSON.parse(sessionStorage.getItem(\"company\")).client_id;\n            }));\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"px-24 h-full overflow-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-5 text-2xl font-bold mb-5\",\n                    children: \"Stammdaten\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: data ? data.map(function(data) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs space-y-2.5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Firma:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.client_name,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 86\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"PLZ:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.zip_code,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 81\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Stadt:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.city,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 79\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Stra\\xdfe:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.street,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 82\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Telefon:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.telefon,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 84\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"E-Mail:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.email,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 81\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: \"Ansprechp.:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    data.spokesperson\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 23\n                            }, _this)\n                        ]\n                    }, data.client_id, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 19\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border rounded p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs\",\n                    children: \"Stammdaten bearbeiten\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                lineNumber: 43,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"mt-5\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/user-data.tsx\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, _this);\n};\n_s(UserData, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = UserData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserData);\nvar _c;\n$RefreshReg$(_c, \"UserData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsV0FBVztrREFBQyxTQUFPOzs7Ozs2Q0FBTztvQ0FBQSxHQUFDO29DQUFDbkIsSUFBSSxDQUFDNkIsS0FBSztrREFBQyw4REFBQ0wsSUFBRTs7Ozs2Q0FBRTs7Ozs7O3FDQUFJOzBDQUNuRSw4REFBQ0osR0FBQzs7a0RBQUMsOERBQUNFLE1BQUk7d0NBQUNILFNBQVMsRUFBQyxXQUFXO2tEQUFDLGFBQVc7Ozs7OzZDQUFPO29DQUFBLEdBQUM7b0NBQUNuQixJQUFJLENBQUM4QixZQUFZOzs7Ozs7cUNBQUs7O3VCQVBuRTlCLElBQUksQ0FBQ1EsU0FBUzs7Ozs2QkFRbEI7aUJBQUEsQ0FDVCxHQUFHLEVBQUU7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDVixrREFBSTtnQkFBQ2lDLElBQUksRUFBQyxHQUFHOzBCQUNWLDRFQUFDQyxRQUFNO29CQUFDYixTQUFTLEVBQUMsdUlBQzRDOzhCQUFDLHVCQUFxQjs7Ozs7eUJBQVM7Ozs7O3FCQUMxRjswQkFDUCw4REFBQ2MsSUFBRTtnQkFBQ2QsU0FBUyxFQUFDLE1BQU07Ozs7O3FCQUFFOzs7Ozs7YUFDcEIsQ0FDUDtBQUNMLENBQUM7R0EzQ0twQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUE2Q2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci1kYXRhLnRzeD84MzcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJtb21lbnQtdGltZXpvbmVcIlxuaW1wb3J0IEFQSSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBVc2VyRGF0YSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFQSS5nZXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9jbGllbnRzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldERhdGEoXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuSXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoIChjbGllbnQ6IGFueSkgPT4gY2xpZW50LmNsaWVudF9pZCA9PSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbXBhbnknKSBhcyBzdHJpbmcpLmNsaWVudF9pZClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH0sW10gKTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXBhZ2VcIiBjbGFzc05hbWU9XCJweC0yNCBoLWZ1bGwgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LTJ4bCBmb250LWJvbGQgbWItNVwiPlN0YW1tZGF0ZW48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxuICAgICAgICAgICAgICB7ZGF0YSA/IGRhdGEubWFwKChkYXRhOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5jbGllbnRfaWR9IGNsYXNzTmFtZT1cInRleHQteHMgc3BhY2UteS0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5GaXJtYTo8L3NwYW4+IHtkYXRhLmNsaWVudF9uYW1lfTxici8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlBMWjo8L3NwYW4+IHtkYXRhLnppcF9jb2RlfTxici8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlN0YWR0Ojwvc3Bhbj4ge2RhdGEuY2l0eX08YnIvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TdHJhw59lOjwvc3Bhbj4ge2RhdGEuc3RyZWV0fTxici8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlRlbGVmb246PC9zcGFuPiB7ZGF0YS50ZWxlZm9ufTxici8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkUtTWFpbDo8L3NwYW4+IHtkYXRhLmVtYWlsfTxici8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkFuc3ByZWNocC46PC9zcGFuPiB7ZGF0YS5zcG9rZXNwZXJzb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAnJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWFjY2VudC1jb2xvci01IHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQteHNcIj5TdGFtbWRhdGVuIGJlYXJiZWl0ZW48L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTVcIi8+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJEYXRhXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSSIsIkxpbmsiLCJVc2VyRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiSXRlbXMiLCJmaWx0ZXIiLCJjbGllbnQiLCJjbGllbnRfaWQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsInNwYW4iLCJjbGllbnRfbmFtZSIsImJyIiwiemlwX2NvZGUiLCJjaXR5Iiwic3RyZWV0IiwidGVsZWZvbiIsImVtYWlsIiwic3Bva2VzcGVyc29uIiwiaHJlZiIsImJ1dHRvbiIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user-data.tsx\n"));

/***/ })

});