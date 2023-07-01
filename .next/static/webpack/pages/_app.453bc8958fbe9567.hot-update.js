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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ \"./pages/components/navigation/Logo.tsx\");\n/* harmony import */ var _NavigationLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationLinks */ \"./pages/components/navigation/NavigationLinks.tsx\");\n/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationButtons */ \"./pages/components/navigation/NavigationButtons.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Navigation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), clients = ref[0], setClients = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients\").then(function(response) {\n            setClients(response.data.Items);\n        }).catch(function(error) {\n            console.log(error); //\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navigation\",\n        className: \"mb-2 flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationLinks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"pl-2.5 py-0.5 appearance-none border rounded h-5 flex m-auto w-32 bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:3px]\",\n                children: clients.map(function(client) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        children: client.client_name\n                    }, client.client_id, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-auto ml-auto font-semibold\",\n                children:  true && sessionStorage.getItem(\"company\") ? JSON.parse(sessionStorage.getItem(\"company\")).client_name : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navigation, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNzQjtBQUNJO0FBQ1Y7QUFDbEI7QUFFeEIsSUFBTU0sVUFBVSxHQUFHLFdBQU07O0lBRXJCLElBQThCRixHQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBdENHLE9BQU8sR0FBZ0JILEdBQWUsR0FBL0IsRUFBRUksVUFBVSxHQUFJSixHQUFlLEdBQW5CO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFFWkUsaURBQU8sQ0FBQyxtRUFBbUUsQ0FBQyxDQUN2RUssSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUNoQkgsVUFBVSxDQUFDRyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSSw4REFBQ0csS0FBRztRQUFDQyxFQUFFLEVBQUMsWUFBWTtRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3RDLDhEQUFDcEIsNkNBQUk7Ozs7cUJBQUU7MEJBQ1AsOERBQUNDLHdEQUFlOzs7O3FCQUFFOzBCQUNsQiw4REFBQ29CLFFBQU07Z0JBQUNELFNBQVMsRUFBQyx1TkFJYzswQkFDM0JiLE9BQU8sQ0FBQ2UsR0FBRyxDQUFDLFNBQUNDLE1BQVc7eUNBQ3JCLDhEQUFDQyxRQUFNO2tDQUVGRCxNQUFNLENBQUNFLFdBQVc7dUJBRlZGLE1BQU0sQ0FBQ0csU0FBUzs7Ozs2QkFHcEI7aUJBQUEsQ0FDWjs7Ozs7cUJBQ0k7MEJBQ1QsOERBQUNDLEdBQUM7Z0JBQUNQLFNBQVMsRUFBQyx1Q0FBdUM7MEJBQUUsS0FBNkIsSUFDaEZRLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsY0FBYyxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQVcsQ0FDekZKLFdBQVcsR0FBRyxFQUFFOzs7OztxQkFDakI7MEJBQ0osOERBQUN2QiwwREFBaUI7Ozs7cUJBQUU7Ozs7OzthQUNsQixDQUNUO0FBQ0wsQ0FBQztHQXZDS0ksVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBeUNoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbi50c3g/MmRmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgTmF2aWdhdGlvbkxpbmtzIGZyb20gXCIuL05hdmlnYXRpb25MaW5rc1wiO1xuaW1wb3J0IE5hdmlnYXRpb25CdXR0b25zIGZyb20gXCIuL05hdmlnYXRpb25CdXR0b25zXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgQVBJLmdldCgnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2NsaWVudHMnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q2xpZW50cyhyZXNwb25zZS5kYXRhLkl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vXG4gICAgICAgICAgICB9KTtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZpZ2F0aW9uXCIgY2xhc3NOYW1lPVwibWItMiBmbGV4XCI+XG4gICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkxpbmtzLz5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicGwtMi41IHB5LTAuNSBhcHBlYXJhbmNlLW5vbmVcbiAgICAgICAgICAgICAgICBib3JkZXIgcm91bmRlZFxuICAgICAgICAgICAgICAgIGgtNSBmbGV4IG0tYXV0byB3LTMyIGJnLVt1cmwoJ2h0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvODAxNTYvZG93bi1hcnJvdy5zdmcnKV1cbiAgICAgICAgICAgICAgICBiZy1uby1yZXBlYXQgYmctW2xlbmd0aDoxNXB4XSBbYmFja2dyb3VuZC1wb3NpdGlvbi14Ojk1JV1cbiAgICAgICAgICAgICAgICBbYmFja2dyb3VuZC1wb3NpdGlvbi15OjNweF1cIj5cbiAgICAgICAgICAgICAgICB7Y2xpZW50cy5tYXAoKGNsaWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2xpZW50LmNsaWVudF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xpZW50LmNsaWVudF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LWF1dG8gbWwtYXV0byBmb250LXNlbWlib2xkXCI+e3R5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykgPyBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjb21wYW55XCIpIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICAuY2xpZW50X25hbWUgOiAnJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9ucy8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbiJdLCJuYW1lcyI6WyJMb2dvIiwiTmF2aWdhdGlvbkxpbmtzIiwiTmF2aWdhdGlvbkJ1dHRvbnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSSIsIk5hdmlnYXRpb24iLCJjbGllbnRzIiwic2V0Q2xpZW50cyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJtYXAiLCJjbGllbnQiLCJvcHRpb24iLCJjbGllbnRfbmFtZSIsImNsaWVudF9pZCIsInAiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/navigation/Navigation.tsx\n"));

/***/ })

});