"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/components/navigation/Navigation.tsx":
/*!****************************************************!*\
  !*** ./pages/components/navigation/Navigation.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ \"./pages/components/navigation/Logo.tsx\");\n/* harmony import */ var _NavigationLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationLinks */ \"./pages/components/navigation/NavigationLinks.tsx\");\n/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationButtons */ \"./pages/components/navigation/NavigationButtons.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Navigation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), clients = ref[0], setClients = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), selectedCompany = ref1[0], setSelectedCompany = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients\").then(function(response) {\n            setClients(response.data.Items);\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navigation\",\n        className: \"mb-2 flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationLinks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"pl-2.5 py-0.5 appearance-none border rounded h-5 w-1/3 flex m-auto bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:3px] text-xs\",\n                value: JSON.parse(sessionStorage.getItem(\"company\")).client_name,\n                onChange: function(e) {\n                    sessionStorage.setItem(\"company\", JSON.stringify(clients.filter(function(client) {\n                        return client.client_name == e.target.value;\n                    })[0]));\n                    setSelectedCompany(e.target.value);\n                },\n                children: clients ? clients.map(function(client) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        children: client.client_name\n                    }, client.client_id, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navigation, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNzQjtBQUNJO0FBQ1Y7QUFDbEI7QUFFeEIsSUFBTU0sVUFBVSxHQUFHLFdBQU07O0lBRXJCLElBQThCRixHQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBdENHLE9BQU8sR0FBZ0JILEdBQWUsR0FBL0IsRUFBRUksVUFBVSxHQUFJSixHQUFlLEdBQW5CO0lBQzFCLElBQThDQSxJQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBdERLLGVBQWUsR0FBd0JMLElBQWUsR0FBdkMsRUFBRU0sa0JBQWtCLEdBQUlOLElBQWUsR0FBbkI7SUFFMUNELGdEQUFTLENBQUMsV0FBTTtRQUVaRSxpREFBTyxDQUFDLG1FQUFtRSxDQUFDLENBQ3ZFTyxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFLO1lBQ2hCTCxVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxZQUFZO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDdEMsOERBQUN0Qiw2Q0FBSTs7OztxQkFBRTswQkFDUCw4REFBQ0Msd0RBQWU7Ozs7cUJBQUU7MEJBQ2xCLDhEQUFDc0IsUUFBTTtnQkFBQ0QsU0FBUyxFQUFDLGdPQUkwQjtnQkFFcENFLEtBQUssRUFBRUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFXLENBQUNDLFdBQVc7Z0JBRTFFQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFHO29CQUFDSixjQUFjLENBQ3pCSyxPQUFPLENBQUMsU0FBUyxFQUFFUCxJQUFJLENBQUNRLFNBQVMsQ0FBQzFCLE9BQU8sQ0FBQzJCLE1BQU0sQ0FBQyxTQUFDQyxNQUFXOytCQUMxREEsTUFBTSxDQUFDTixXQUFXLElBQUlFLENBQUMsQ0FBQ0ssTUFBTSxDQUFDWixLQUFLO3FCQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNkO29CQUFBQSxrQkFBa0IsQ0FBQ3FCLENBQUMsQ0FBQ0ssTUFBTSxDQUFDWixLQUFLLENBQUM7Z0JBQUEsQ0FBQzswQkFJekZqQixPQUFPLEdBQUVBLE9BQU8sQ0FBQzhCLEdBQUcsQ0FBQyxTQUFDRixNQUFXO3lDQUM5Qiw4REFBQ0csUUFBTTtrQ0FDRkgsTUFBTSxDQUFDTixXQUFXO3VCQURWTSxNQUFNLENBQUNJLFNBQVM7Ozs7NkJBRXBCO2lCQUFBLENBQ1osR0FBRyxFQUFFOzs7OztxQkFDRDswQkFDVCw4REFBQ3JDLDBEQUFpQjs7OztxQkFBRTs7Ozs7O2FBQ2xCLENBQ1Q7QUFDTCxDQUFDO0dBNUNLSSxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUE4Q2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeD8yZGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBOYXZpZ2F0aW9uTGlua3MgZnJvbSBcIi4vTmF2aWdhdGlvbkxpbmtzXCI7XG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbnMgZnJvbSBcIi4vTmF2aWdhdGlvbkJ1dHRvbnNcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFtzZWxlY3RlZENvbXBhbnksIHNldFNlbGVjdGVkQ29tcGFueV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIEFQSS5nZXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9jbGllbnRzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldENsaWVudHMocmVzcG9uc2UuZGF0YS5JdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAvL1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cIm1iLTIgZmxleFwiPlxuICAgICAgICAgICAgPExvZ28vPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25MaW5rcy8+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBsLTIuNSBweS0wLjUgYXBwZWFyYW5jZS1ub25lXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlciByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgIGgtNSB3LTEvMyBmbGV4IG0tYXV0byBiZy1bdXJsKCdodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzgwMTU2L2Rvd24tYXJyb3cuc3ZnJyldXG4gICAgICAgICAgICAgICAgICAgIGJnLW5vLXJlcGVhdCBiZy1bbGVuZ3RoOjE1cHhdIFtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6OTUlXVxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZC1wb3NpdGlvbi15OjNweF0gdGV4dC14c1wiXG5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0pTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNvbXBhbnlcIikgYXMgc3RyaW5nKS5jbGllbnRfbmFtZX1cblxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKFwiY29tcGFueVwiLCBKU09OLnN0cmluZ2lmeShjbGllbnRzLmZpbHRlcigoY2xpZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LmNsaWVudF9uYW1lID09IGUudGFyZ2V0LnZhbHVlKVswXSkpO3NldFNlbGVjdGVkQ29tcGFueShlLnRhcmdldC52YWx1ZSl9fVxuXG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2xpZW50cyA/Y2xpZW50cy5tYXAoKGNsaWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2xpZW50LmNsaWVudF9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xpZW50LmNsaWVudF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApIDogXCJcIn1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25zLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIl0sIm5hbWVzIjpbIkxvZ28iLCJOYXZpZ2F0aW9uTGlua3MiLCJOYXZpZ2F0aW9uQnV0dG9ucyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJIiwiTmF2aWdhdGlvbiIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwic2VsZWN0ZWRDb21wYW55Iiwic2V0U2VsZWN0ZWRDb21wYW55IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIkl0ZW1zIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInNlbGVjdCIsInZhbHVlIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xpZW50X25hbWUiLCJvbkNoYW5nZSIsImUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiY2xpZW50IiwidGFyZ2V0IiwibWFwIiwib3B0aW9uIiwiY2xpZW50X2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/navigation/Navigation.tsx\n"));

/***/ })

});