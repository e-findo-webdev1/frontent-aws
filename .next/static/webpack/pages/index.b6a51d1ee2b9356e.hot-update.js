"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_start_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/start/Header */ \"./pages/components/start/Header.tsx\");\n/* harmony import */ var _components_start_StorageSystemDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/start/StorageSystemDashboard */ \"./pages/components/start/StorageSystemDashboard.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar Home = function() {\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__[\"default\"].send(\"service_q2p4iwl\", \"template_svalxfj\", {\n            email_list: [\n                \"webdev1@e-findo.de\"\n            ]\n        }, \"T3_j793le9k-t00DB\").then(function(result) {\n            console.log(result.text);\n        }, function(error) {\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"mx-10 px-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-3 mt-7\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 border-r mr-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_start_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/esb_start2.jpg\",\n                            className: \"h-52 mx-auto mt-5 rounded-lg shadow-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: JSON.parse(sessionStorage.getItem(\"user\")).admin ? \"w-full flex mt-7\" : \"hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border ml-auto p-1.5 px-3.5 border-accent-color-1 bg-accent-color-4 font-bold hover:bg-accent-color-5 sm:rounded-lg shadow-md text-[10px] mx-auto\",\n                                onClick: sendEmail,\n                                children: \"Email Arbeitszeiten senden\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"my-7 text-2xl font-bold text-center\",\n                            children: \"Reporting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-5 font-bold text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"reporting/control-documents\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full p-1.5 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs\",\n                                        children: \"Kontrollbelege\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/reporting/monthly-evaluation\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full p-1.5 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs\",\n                                        children: \"Monatsauswertung\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-2 ml-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_start_StorageSystemDashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDK0M7QUFDZ0M7QUFDbEQ7QUFDVTtBQUV2QyxJQUFNSSxJQUFJLEdBQWEsV0FBTTtJQUV6QixJQUFNQyxTQUFTLEdBQUcsU0FBQ0MsQ0FBTSxFQUFLO1FBQzFCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRW5CSiw2REFBWSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUM5QztZQUFFTSxVQUFVLEVBQUU7Z0JBQUMsb0JBQW9CO2FBQUM7U0FBRSxFQUN0QyxtQkFBbUIsQ0FBQyxDQUNuQkMsSUFBSSxDQUFDLFNBQUNDLE1BQU0sRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ1ZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUNELElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHFCQUNJLDhEQUFDRSxLQUFHO1FBQUNDLEVBQUUsRUFBQyxjQUFjO1FBQUNDLFNBQVMsRUFBQyxhQUFhO2tCQUMxQyw0RUFBQ0YsS0FBRztZQUFDRSxTQUFTLEVBQUMsdUJBQXVCOzs4QkFDbEMsOERBQUNGLEtBQUc7b0JBQUNFLFNBQVMsRUFBQyxvQkFBb0I7O3NDQUMvQiw4REFBQ2xCLGdFQUFNOzs7O2lDQUFFO3NDQUNULDhEQUFDbUIsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLGlCQUFpQjs0QkFBQ0YsU0FBUyxFQUFDLHdDQUF3Qzs7Ozs7aUNBQUc7c0NBQ2hGLDhEQUFDRixLQUFHOzRCQUFDRSxTQUFTLEVBQUVHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBVyxDQUFDQyxLQUFLLEdBQ3RFLGtCQUFrQixHQUFHLFFBQVE7c0NBQ3pCLDRFQUFDQyxRQUFNO2dDQUFDUixTQUFTLEVBQUMsbUpBRW9EO2dDQUNsRVMsT0FBTyxFQUFFdEIsU0FBUzswQ0FDckIsNEJBRUQ7Ozs7O3FDQUFTOzs7OztpQ0FDWDtzQ0FDTiw4REFBQ3VCLEdBQUM7NEJBQUNWLFNBQVMsRUFBQyxxQ0FBcUM7c0NBQUMsV0FBUzs7Ozs7aUNBQUk7c0NBQ2hFLDhEQUFDRixLQUFHOzRCQUFDRSxTQUFTLEVBQUMsa0NBQWtDOzs4Q0FDN0MsOERBQUNoQixrREFBSTtvQ0FBQzJCLElBQUksRUFBQyw2QkFBNkI7OENBQ3BDLDRFQUFDSCxRQUFNO3dDQUFDUixTQUFTLEVBQUMsNEhBRWlCO2tEQUFDLGdCQUVwQzs7Ozs7NkNBQVM7Ozs7O3lDQUNOOzhDQUNQLDhEQUFDaEIsa0RBQUk7b0NBQUMyQixJQUFJLEVBQUMsK0JBQStCOzhDQUN0Qyw0RUFBQ0gsUUFBTTt3Q0FBQ1IsU0FBUyxFQUFDLDRIQUVpQjtrREFBQyxrQkFDaEI7Ozs7OzZDQUFTOzs7Ozt5Q0FDMUI7Ozs7OztpQ0FDTDs7Ozs7O3lCQUNKOzhCQUNOLDhEQUFDRixLQUFHO29CQUFDRSxTQUFTLEVBQUMsaUJBQWlCOzhCQUM1Qiw0RUFBQ2pCLGdGQUFzQjs7Ozs2QkFBRTs7Ozs7eUJBQ3ZCOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0osQ0FFVDtBQUNMLENBQUM7QUF2REtHLEtBQUFBLElBQUk7QUF5RFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhcnQvSGVhZGVyXCI7XG5pbXBvcnQgU3RvcmFnZVN5c3RlbURhc2hib2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXJ0L1N0b3JhZ2VTeXN0ZW1EYXNoYm9hcmRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgc2VuZEVtYWlsID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZW1haWxqcy5zZW5kKCdzZXJ2aWNlX3EycDRpd2wnLCAndGVtcGxhdGVfc3ZhbHhmaicsXG4gICAgICAgICAgICB7IGVtYWlsX2xpc3Q6IFsnd2ViZGV2MUBlLWZpbmRvLmRlJ10gfSxcbiAgICAgICAgICAgICdUM19qNzkzbGU5ay10MDBEQicpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtcGFnZVwiIGNsYXNzTmFtZT1cIm14LTEwIHB4LTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgbXQtN1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBib3JkZXItciBtci01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lc2Jfc3RhcnQyLmpwZ1wiIGNsYXNzTmFtZT1cImgtNTIgbXgtYXV0byBtdC01IHJvdW5kZWQtbGcgc2hhZG93LW1kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0pTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpIGFzIHN0cmluZykuYWRtaW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3LWZ1bGwgZmxleCBtdC03XCIgOiBcImhpZGRlblwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBtbC1hdXRvIHAtMS41IHB4LTMuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00IGZvbnQtYm9sZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYWNjZW50LWNvbG9yLTUgc206cm91bmRlZC1sZyBzaGFkb3ctbWQgdGV4dC1bMTBweF0gbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIEFyYmVpdHN6ZWl0ZW4gc2VuZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS03IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlJlcG9ydGluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNSBmb250LWJvbGQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInJlcG9ydGluZy9jb250cm9sLWRvY3VtZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHAtMS41IHB4LTMuNSBib3JkZXItYWNjZW50LWNvbG9yLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1hY2NlbnQtY29sb3ItNCBob3ZlcjpiZy1hY2NlbnQtY29sb3ItNVxuICAgICAgICAgICAgICAgICAgICAgICAgc206cm91bmRlZC1sZyBzaGFkb3ctbWQgYm9yZGVyIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS29udHJvbGxiZWxlZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVwb3J0aW5nL21vbnRobHktZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHAtMS41IHB4LTMuNSBib3JkZXItYWNjZW50LWNvbG9yLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctYWNjZW50LWNvbG9yLTQgaG92ZXI6YmctYWNjZW50LWNvbG9yLTVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIGJvcmRlciB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbmF0c2F1c3dlcnR1bmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0b3JhZ2VTeXN0ZW1EYXNoYm9hcmQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiU3RvcmFnZVN5c3RlbURhc2hib2FyZCIsIkxpbmsiLCJlbWFpbGpzIiwiSG9tZSIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJlbWFpbF9saXN0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFkbWluIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});