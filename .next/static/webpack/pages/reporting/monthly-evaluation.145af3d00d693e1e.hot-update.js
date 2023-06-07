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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar MonthlyEvaluation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(localStorage.getItem(\"company\")).client_name;\n            }));\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    console.log(machinesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-9 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4711\",\n                                children: \"4711\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"4712\",\n                                children: \"4712\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"9001\",\n                                children: \"9001\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"9002\",\n                                children: \"9002\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyEvaluation, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = MonthlyEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyEvaluation);\nvar _c;\n$RefreshReg$(_c, \"MonthlyEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQTBDO0FBQ2xCO0FBRXhCLElBQU1HLGlCQUFpQixHQUFHLFdBQU07O0lBQzVCLElBQXdDRixHQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBaERHLFlBQVksR0FBcUJILEdBQWUsR0FBcEMsRUFBRUksZUFBZSxHQUFJSixHQUFlLEdBQW5CO0lBRXBDRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJTSxPQUFPLEdBQUcsb0VBQW9FO1FBRWxGSixpREFBTyxDQUFDSSxPQUFPLENBQUMsQ0FDWEUsSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUNoQkosZUFBZSxDQUFDSSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsT0FBWTt1QkFDcERBLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQVcsQ0FBQ0MsV0FBVzthQUFBLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQUNDLEtBQUssRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVBDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsWUFBWSxDQUFDO0lBRXpCLHFCQUNJLDhEQUFDb0IsS0FBRztRQUFDQyxFQUFFLEVBQUMsY0FBYztRQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzswQkFDekQsOERBQUNDLEdBQUM7Z0JBQUNELFNBQVMsRUFBQyw4QkFBOEI7MEJBQUMsa0JBQWdCOzs7OztxQkFBSTswQkFDaEUsOERBQUNGLEtBQUc7Z0JBQUNFLFNBQVMsRUFBQyx3QkFBd0I7O2tDQUNuQyw4REFBQ0UsTUFBSTtrQ0FBQyxXQUFTOzs7Ozs2QkFBTztrQ0FDdEIsOERBQUNDLFFBQU07d0JBQUNILFNBQVMsRUFBQywyQkFBMkI7d0JBQUNJLElBQUksRUFBQyxVQUFVO3dCQUFDTCxFQUFFLEVBQUMsVUFBVTs7MENBQ3ZFLDhEQUFDTSxRQUFNO2dDQUFDQyxRQUFROzBDQUFDLFVBQVE7Ozs7O3FDQUFTOzBDQUNsQyw4REFBQ0QsUUFBTTtnQ0FBQ0UsS0FBSyxFQUFDLE1BQU07MENBQUMsTUFBSTs7Ozs7cUNBQVM7MENBQ2xDLDhEQUFDRixRQUFNO2dDQUFDRSxLQUFLLEVBQUMsTUFBTTswQ0FBQyxNQUFJOzs7OztxQ0FBUzswQ0FDbEMsOERBQUNGLFFBQU07Z0NBQUNFLEtBQUssRUFBQyxNQUFNOzBDQUFDLE1BQUk7Ozs7O3FDQUFTOzBDQUNsQyw4REFBQ0YsUUFBTTtnQ0FBQ0UsS0FBSyxFQUFDLE1BQU07MENBQUMsTUFBSTs7Ozs7cUNBQVM7Ozs7Ozs2QkFDN0I7Ozs7OztxQkFDUDs7Ozs7O2FBQ0osQ0FDVDtBQUNMLENBQUM7R0FsQ0s5QixpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjtBQW9DdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeD9lNzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBNb250aGx5RXZhbHVhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbbWFjaGluZXNEYXRhLCBzZXRNYWNoaW5lc0RhdGFdID0gdXNlU3RhdGU8YW55PigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFwaU5hbWUgPSAnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL21hY2hpbmVzJztcblxuICAgICAgICBBUEkuZ2V0KGFwaU5hbWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNYWNoaW5lc0RhdGEocmVzcG9uc2UuZGF0YS5JdGVtcy5maWx0ZXIoKG1hY2hpbmU6IGFueSk9PlxuICAgICAgICAgICAgICAgICAgICBtYWNoaW5lLmNsaWVudCA9PSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykgYXMgc3RyaW5nKS5jbGllbnRfbmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy9cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2cobWFjaGluZXNEYXRhKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLWZ1bGwgcHgtMjBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTkgdGV4dC0zeGwgZm9udC1ib2xkIG1iLTVcIj5Nb25hdHNhdXN3ZXJ0dW5nPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFzY2hpbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy00MCB0ZXh0LWJsdWUtNTAwIGJvcmRlclwiIG5hbWU9XCJtYWNoaW5lc1wiIGlkPVwibWFjaGluZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD4tIEFsbGUgLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDcxMVwiPjQ3MTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQ3MTJcIj40NzEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5MDAxXCI+OTAwMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTAwMlwiPjkwMDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlFdmFsdWF0aW9uXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJNb250aGx5RXZhbHVhdGlvbiIsIm1hY2hpbmVzRGF0YSIsInNldE1hY2hpbmVzRGF0YSIsImFwaU5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiSXRlbXMiLCJmaWx0ZXIiLCJtYWNoaW5lIiwiY2xpZW50IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsaWVudF9uYW1lIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation.tsx\n"));

/***/ })

});