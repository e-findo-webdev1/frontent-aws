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

/***/ "./pages/components/navigation/NavigationButtons.tsx":
/*!***********************************************************!*\
  !*** ./pages/components/navigation/NavigationButtons.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\n\nvar NavigationButtons = function() {\n    var userLogout = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(event) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                sessionStorage.removeItem(\"user\");\n                sessionStorage.removeItem(\"company\");\n                return [\n                    2\n                ];\n            });\n        });\n        return function userLogout(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navigation-buttons\",\n        className: \"flex ml-auto space-x-2 mr-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"flex\",\n                onClick: function() {\n                    return userLogout();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"m-auto mr-1.5 \",\n                        src: \"/power-on-svgrepo-com 1.svg\",\n                        width: \"15\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/NavigationButtons.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xs m-auto mr-10\",\n                        children: \"Ausloggen\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/NavigationButtons.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/NavigationButtons.tsx\",\n                lineNumber: 12,\n                columnNumber: 21\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/NavigationButtons.tsx\",\n            lineNumber: 11,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/NavigationButtons.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavigationButtons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationButtons);\nvar _c;\n$RefreshReg$(_c, \"NavigationButtons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbkJ1dHRvbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUE2QjtBQUU3QixJQUFNQyxpQkFBaUIsR0FBRyxXQUFNO0lBQzVCLElBQU1DLFVBQVU7bUJBQUcsNkZBQU9DLEtBQVUsRUFBSzs7Z0JBQ3JDQyxjQUFjLENBQUNDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbENELGNBQWMsQ0FBQ0MsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztRQUN6QyxDQUFDO3dCQUhLSCxVQUFVLENBQVVDLEtBQVU7OztPQUduQztJQUVELHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLEVBQUUsRUFBQyxvQkFBb0I7UUFBQ0MsU0FBUyxFQUFDLDhCQUE4QjtrQkFDN0QsNEVBQUNSLGtEQUFJO1lBQUNTLElBQUksRUFBQyxHQUFHO3NCQUNWLDRFQUFDQyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0gsU0FBUyxFQUFDLE1BQU07Z0JBQUNJLE9BQU8sRUFBRTsyQkFBSVYsVUFBVSxFQUFFO2lCQUFBOztrQ0FDNUQsOERBQUNXLEtBQUc7d0JBQUNMLFNBQVMsRUFBQyxnQkFBZ0I7d0JBQUNNLEdBQUcsRUFBQyw2QkFBNkI7d0JBQUNDLEtBQUssRUFBQyxJQUFJOzs7Ozs2QkFBRTtrQ0FDOUUsOERBQUNDLE1BQUk7d0JBQUNSLFNBQVMsRUFBQyxzQkFBc0I7a0NBQUMsV0FBUzs7Ozs7NkJBQU87Ozs7OztxQkFDbEQ7Ozs7O2lCQUNOOzs7OzthQUNULENBQ1Q7QUFDTCxDQUFDO0FBaEJLUCxLQUFBQSxpQkFBaUI7QUFrQnZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL05hdmlnYXRpb25CdXR0b25zLnRzeD8xZDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmF2aWdhdGlvbkJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlckxvZ291dCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnY29tcGFueScpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cIm5hdmlnYXRpb24tYnV0dG9uc1wiIGNsYXNzTmFtZT1cImZsZXggbWwtYXV0byBzcGFjZS14LTIgbXItMTBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmbGV4XCIgb25DbGljaz17KCk9PnVzZXJMb2dvdXQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm0tYXV0byBtci0xLjUgXCIgc3JjPVwiL3Bvd2VyLW9uLXN2Z3JlcG8tY29tIDEuc3ZnXCIgd2lkdGg9XCIxNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbS1hdXRvIG1yLTEwXCI+QXVzbG9nZ2VuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbnMiXSwibmFtZXMiOlsiTGluayIsIk5hdmlnYXRpb25CdXR0b25zIiwidXNlckxvZ291dCIsImV2ZW50Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ3aWR0aCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/navigation/NavigationButtons.tsx\n"));

/***/ })

});