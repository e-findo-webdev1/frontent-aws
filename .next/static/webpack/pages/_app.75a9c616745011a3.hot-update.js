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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ \"./pages/components/navigation/Logo.tsx\");\n/* harmony import */ var _NavigationLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationLinks */ \"./pages/components/navigation/NavigationLinks.tsx\");\n/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationButtons */ \"./pages/components/navigation/NavigationButtons.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Navigation = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navigation\",\n        className: \"mb-2 flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationLinks__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-auto ml-auto font-semibold\",\n                children:  true && sessionStorage.getItem(\"company\") ? JSON.parse(sessionStorage.getItem(\"company\")).client_name : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Navigation.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3NCO0FBQ0k7QUFFcEQsSUFBTUcsVUFBVSxHQUFHLFdBQU07SUFFckIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLFlBQVk7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBCQUN0Qyw4REFBQ04sNkNBQUk7Ozs7cUJBQUU7MEJBQ1AsOERBQUNDLHdEQUFlOzs7O3FCQUFFOzBCQUVsQiw4REFBQ00sR0FBQztnQkFBQ0QsU0FBUyxFQUFDLHVDQUF1QzswQkFBRSxLQUE2QixJQUNoRkUsY0FBYyxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxjQUFjLENBQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBVyxDQUFDRyxXQUFXLEdBQUcsRUFBRTs7Ozs7cUJBQzNHOzBCQUNKLDhEQUFDViwwREFBaUI7Ozs7cUJBQUU7Ozs7OzthQUNsQixDQUNUO0FBQ0wsQ0FBQztBQWJLQyxLQUFBQSxVQUFVO0FBZWhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeD8yZGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBOYXZpZ2F0aW9uTGlua3MgZnJvbSBcIi4vTmF2aWdhdGlvbkxpbmtzXCI7XG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbnMgZnJvbSBcIi4vTmF2aWdhdGlvbkJ1dHRvbnNcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZpZ2F0aW9uXCIgY2xhc3NOYW1lPVwibWItMiBmbGV4XCI+XG4gICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkxpbmtzLz5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS1hdXRvIG1sLWF1dG8gZm9udC1zZW1pYm9sZFwiPnt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpID8gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY29tcGFueVwiKSBhcyBzdHJpbmcpLmNsaWVudF9uYW1lIDogJyd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbnMvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwibmFtZXMiOlsiTG9nbyIsIk5hdmlnYXRpb25MaW5rcyIsIk5hdmlnYXRpb25CdXR0b25zIiwiTmF2aWdhdGlvbiIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwicCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNsaWVudF9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/navigation/Navigation.tsx\n"));

/***/ })

});