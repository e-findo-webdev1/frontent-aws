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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_login_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/LoginForm */ \"./pages/components/login/LoginForm.tsx\");\n/* harmony import */ var _components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigation/Navigation */ \"./pages/components/navigation/Navigation.tsx\");\n/* harmony import */ var _components_navigation_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation/Logo */ \"./pages/components/navigation/Logo.tsx\");\n/* harmony import */ var _components_navigation_Breadcrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/Breadcrumbs */ \"./pages/components/navigation/Breadcrumbs.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loggedIn = ref[0], setLoggedIn = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userToken = ref1[0], setUserToken = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (sessionStorage.getItem(\"company\")) {\n            setLoggedIn(true);\n        } else {\n            setLoggedIn(false);\n            // @ts-ignore\n            window.location.reload(false);\n        }\n        setUserToken(JSON.stringify(sessionStorage.getItem(\"user\")));\n    }, [\n        loggedIn,\n        userToken\n    ]);\n    if (loggedIn == false) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"background\",\n            className: \"bg-accent-color-1 h-screen py-20 px-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"template\",\n                className: \"m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-32 p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_login_LoginForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 25\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n            lineNumber: 27,\n            columnNumber: 21\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"background\",\n            className: \"bg-accent-color-1 h-screen py-20 px-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"template\",\n                className: \"m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-32 p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_Breadcrumbs__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/_app.tsx\",\n            lineNumber: 40,\n            columnNumber: 17\n        }, this);\n    }\n}\n_s(MyApp, \"L9GgIDCuFFGj5Yj0mapY9GvfRXM=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQThCO0FBRVk7QUFFVztBQUNPO0FBQ1o7QUFDYztBQUc5RCxTQUFTTSxLQUFLLENBQUMsS0FBa0MsRUFBRTtRQUFsQ0MsU0FBUyxHQUFYLEtBQWtDLENBQWhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBa0MsQ0FBckJBLFNBQVM7O0lBQ2pDLElBQWdDUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDUSxRQUFRLEdBQWlCUixHQUFlLEdBQWhDLEVBQUVTLFdBQVcsR0FBSVQsR0FBZSxHQUFuQjtJQUM1QixJQUFrQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF2Q1UsU0FBUyxHQUFrQlYsSUFBWSxHQUE5QixFQUFFVyxZQUFZLEdBQUlYLElBQVksR0FBaEI7SUFDOUJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUlhLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25DSixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3JCLE9BQU87WUFDSEEsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixhQUFhO1lBQ2JLLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNETCxZQUFZLENBQUNNLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixjQUFjLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFXO0lBQzFFLENBQUMsRUFBRTtRQUFDTCxRQUFRO1FBQUVFLFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFdEIsSUFBSUYsUUFBUSxJQUFJLEtBQUssRUFBRTtRQUNmLHFCQUNJLDhEQUFDVyxLQUFHO1lBQUNDLEVBQUUsRUFBQyxZQUFZO1lBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7c0JBQ25FLDRFQUFDRixLQUFHO2dCQUFDQyxFQUFFLEVBQUMsVUFBVTtnQkFBQ0MsU0FBUyxFQUFDLDREQUE0RDs7a0NBQ3JGLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsTUFBTTtrQ0FDakIsNEVBQUNsQixtRUFBSTs7OztnQ0FBRTs7Ozs7NEJBQ0w7a0NBQ04sOERBQUNtQixJQUFFOzs7OzRCQUFFO2tDQUNMLDhEQUFDckIsbUVBQVM7Ozs7NEJBQUU7Ozs7OztvQkFDVjs7Ozs7Z0JBQ0osQ0FDVDtJQUNMLE9BQ0M7UUFDRCxxQkFDSSw4REFBQ2tCLEtBQUc7WUFBQ0MsRUFBRSxFQUFDLFlBQVk7WUFBQ0MsU0FBUyxFQUFDLHdDQUF3QztzQkFDbkUsNEVBQUNGLEtBQUc7Z0JBQUNDLEVBQUUsRUFBQyxVQUFVO2dCQUFDQyxTQUFTLEVBQUMsNERBQTREOztrQ0FDckYsOERBQUNuQix5RUFBVTs7Ozs0QkFBRTtrQ0FDYiw4REFBQ29CLElBQUU7Ozs7NEJBQUU7a0NBQ0wsOERBQUNsQiwwRUFBVzs7Ozs0QkFBRTtrQ0FDZCw4REFBQ0UsU0FBUyxxRkFBS0MsU0FBUzs7Ozs0QkFBSTs7Ozs7O29CQUMxQjs7Ozs7Z0JBQ0osQ0FDVDtJQUNMLENBQUM7QUFDVCxDQUFDO0dBdkNRRixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF5Q2QsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm1cIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb24vTG9nb1wiO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9CcmVhZGNydW1ic1wiO1xuaW1wb3J0IHVzZXIgZnJvbSBcIi4vbWFzdGVyLWRhdGEvZWRpdC13b3JrZXIvW3VzZXJdXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGUoJycpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykpIHtcbiAgICAgICAgICAgIHNldExvZ2dlZEluKHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldFVzZXJUb2tlbihKU09OLnN0cmluZ2lmeShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIGFzIHN0cmluZylcbiAgICB9LCBbbG9nZ2VkSW4sIHVzZXJUb2tlbl0pO1xuXG4gICAgICAgIGlmIChsb2dnZWRJbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCIgY2xhc3NOYW1lPVwiYmctYWNjZW50LWNvbG9yLTEgaC1zY3JlZW4gcHktMjAgcHgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZW1wbGF0ZVwiIGNsYXNzTmFtZT1cIm0tYXV0byBiZy13aGl0ZSBoLWZ1bGwgbWluLXctWzY3cmVtXSByb3VuZGVkLTN4bCBwYi0zMiBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJhY2tncm91bmRcIiBjbGFzc05hbWU9XCJiZy1hY2NlbnQtY29sb3ItMSBoLXNjcmVlbiBweS0yMCBweC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVtcGxhdGVcIiBjbGFzc05hbWU9XCJtLWF1dG8gYmctd2hpdGUgaC1mdWxsIG1pbi13LVs2N3JlbV0gcm91bmRlZC0zeGwgcGItMzIgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luRm9ybSIsIk5hdmlnYXRpb24iLCJMb2dvIiwiQnJlYWRjcnVtYnMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJ1c2VyVG9rZW4iLCJzZXRVc2VyVG9rZW4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});