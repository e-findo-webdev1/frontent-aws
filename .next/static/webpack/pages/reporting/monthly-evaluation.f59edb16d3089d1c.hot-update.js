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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar MonthlyEvaluation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), machinesData = ref[0], setMachinesData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines\";\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(apiName).then(function(response) {\n            setMachinesData(response.data.Items.filter(function(machine) {\n                return machine.client == JSON.parse(sessionStorage.getItem(\"company\")).client_name;\n            }));\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Maschine:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-40 text-blue-500 border\",\n                        name: \"machines\",\n                        id: \"machines\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                selected: true,\n                                children: \"- Alle -\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, _this),\n                            machinesData ? machinesData.map(function(machine) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: machine.machine_id,\n                                    children: machine.machine_id\n                                }, machine.machine_id, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, _this);\n                            }) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyEvaluation, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = MonthlyEvaluation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyEvaluation);\nvar _c;\n$RefreshReg$(_c, \"MonthlyEvaluation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQTBDO0FBQ2xCO0FBRXhCLElBQU1HLGlCQUFpQixHQUFHLFdBQU07O0lBQzVCLElBQXdDRixHQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBaERHLFlBQVksR0FBcUJILEdBQWUsR0FBcEMsRUFBRUksZUFBZSxHQUFJSixHQUFlLEdBQW5CO0lBRXBDRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJTSxPQUFPLEdBQUcsb0VBQW9FO1FBRWxGSixpREFBTyxDQUFDSSxPQUFPLENBQUMsQ0FDWEUsSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUNoQkosZUFBZSxDQUFDSSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsT0FBWTt1QkFDcERBLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQVcsQ0FBQ0MsV0FBVzthQUFBLENBQUMsQ0FBQztRQUMvRixDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQUNDLEtBQUssRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0ksOERBQUNHLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGNBQWM7UUFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7MEJBQ3pELDhEQUFDQyxHQUFDO2dCQUFDRCxTQUFTLEVBQUMsOEJBQThCOzBCQUFDLGtCQUFnQjs7Ozs7cUJBQUk7MEJBQ2hFLDhEQUFDRixLQUFHO2dCQUFDRSxTQUFTLEVBQUMsd0JBQXdCOztrQ0FDbkMsOERBQUNFLE1BQUk7a0NBQUMsV0FBUzs7Ozs7NkJBQU87a0NBQ3RCLDhEQUFDQyxRQUFNO3dCQUFDSCxTQUFTLEVBQUMsMkJBQTJCO3dCQUFDSSxJQUFJLEVBQUMsVUFBVTt3QkFBQ0wsRUFBRSxFQUFDLFVBQVU7OzBDQUN2RSw4REFBQ00sUUFBTTtnQ0FBQ0MsUUFBUTswQ0FBQyxVQUFROzs7OztxQ0FBUzs0QkFDakM1QixZQUFZLEdBQ2JBLFlBQVksQ0FBQzZCLEdBQUcsQ0FBQyxTQUFDcEIsT0FBWTtxREFDMUIsOERBQUNrQixRQUFNO29DQUNDRyxLQUFLLEVBQUVyQixPQUFPLENBQUNzQixVQUFVOzhDQUFHdEIsT0FBTyxDQUFDc0IsVUFBVTttQ0FEekN0QixPQUFPLENBQUNzQixVQUFVOzs7O3lDQUV0Qjs2QkFBQSxDQUNaLEdBQ0MsRUFBRTs7Ozs7OzZCQUNDOzs7Ozs7cUJBQ1A7Ozs7OzthQUNKLENBQ1Q7QUFDTCxDQUFDO0dBbkNLaEMsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7QUFxQ3ZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0aW5nL21vbnRobHktZXZhbHVhdGlvbi50c3g/ZTc4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgTW9udGhseUV2YWx1YXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW21hY2hpbmVzRGF0YSwgc2V0TWFjaGluZXNEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBhcGlOYW1lID0gJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9tYWNoaW5lcyc7XG5cbiAgICAgICAgQVBJLmdldChhcGlOYW1lKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TWFjaGluZXNEYXRhKHJlc3BvbnNlLmRhdGEuSXRlbXMuZmlsdGVyKChtYWNoaW5lOiBhbnkpPT5cbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZS5jbGllbnQgPT0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykgYXMgc3RyaW5nKS5jbGllbnRfbmFtZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy9cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLWZ1bGwgcHgtMjBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC0zeGwgZm9udC1ib2xkIG1iLTVcIj5Nb25hdHNhdXN3ZXJ0dW5nPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFzY2hpbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy00MCB0ZXh0LWJsdWUtNTAwIGJvcmRlclwiIG5hbWU9XCJtYWNoaW5lc1wiIGlkPVwibWFjaGluZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD4tIEFsbGUgLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7bWFjaGluZXNEYXRhID9cbiAgICAgICAgICAgICAgICAgICAgbWFjaGluZXNEYXRhLm1hcCgobWFjaGluZTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21hY2hpbmUubWFjaGluZV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21hY2hpbmUubWFjaGluZV9pZH0+e21hY2hpbmUubWFjaGluZV9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlFdmFsdWF0aW9uXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJNb250aGx5RXZhbHVhdGlvbiIsIm1hY2hpbmVzRGF0YSIsInNldE1hY2hpbmVzRGF0YSIsImFwaU5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiSXRlbXMiLCJmaWx0ZXIiLCJtYWNoaW5lIiwiY2xpZW50IiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xpZW50X25hbWUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJzZWxlY3QiLCJuYW1lIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJtYXAiLCJ2YWx1ZSIsIm1hY2hpbmVfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation.tsx\n"));

/***/ })

});