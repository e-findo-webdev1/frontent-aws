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

/***/ "./pages/components/navigation/Breadcrumbs.tsx":
/*!*****************************************************!*\
  !*** ./pages/components/navigation/Breadcrumbs.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/fromHex */ \"./pages/components/helpers/fromHex.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Breadcrumbs = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var pid = router.query;\n    var routerArray = router.pathname.split(\"/\").slice(1);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), decodedName = ref[0], setDecodedName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), sortName = ref1[0], setSortName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), clientId = ref2[0], setClientId = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (sessionStorage.getItem(\"company\")) {\n            setClientId(JSON.parse(sessionStorage.getItem(\"company\")).client_id);\n        }\n        if (pid.indexgroup_name != undefined) {\n            setDecodedName((0,_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pid.indexgroup_name));\n        }\n        if (pid.sort_name != undefined) {\n            setSortName((0,_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pid.sort_name));\n        }\n    }, [\n        pid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex ml-20 my-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"inline-flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white\",\n                            children: [\n                                \"Home\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-6 h-6 text-gray-400\",\n                                    fill: \"currentColor\",\n                                    viewBox: \"0 0 20 20\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this),\n                routerArray.map(function(route, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"inline-flex items-center capitalize\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\" + route.replace(\"/\", \"\").replace(\"[id]\", pid.id).replace(\"[client_id]\", pid.id).replace(\"shift-calendar\", \"master-data/shift-calendar\").replace(\"master-data\", \"master-data/\" + clientId).replace(\"edit-client\", \"master-data/edit-client/\" + clientId).replace(\"new-machine\", \"master-data/new-machine\").replace(\"shift-manager\", \"master-data/shift-manager\").replace(\"edit-machine\", \"master-data/edit-machine/\" + pid.id).replace(\"price-matrix\", \"/kalkulation\").replace(\"[client]\", \"\").replace(\"[document_id]\", \"\").replace(\"monthly-evaluation\", \"reporting/monthly-evaluation\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: route == \"[id]\" ? \"inline-flex items-center text-sm font-medium text-gray-700\" + \"hover:text-gray-900 dark:text-gray-400 dark:hover:text-white\" + \"pointer-events-none\" : \"inline-flex items-center text-sm font-medium text-gray-700\" + \"hover:text-gray-900 dark:text-gray-400 dark:hover:text-white\",\n                                    children: pid ? route.replace(\"-\", \" \").replace(\"-\", \" \").replace(\"/\", \"\").replace(\"user data\", \"Master Data\").replace(\"[client]\", \"\").replace(\"[id]\", pid.id).replace(\"[client_id]\", pid.client_id).replace(\"[user]\", pid.user).replace(\"[indexgroup_name]\", decodedName).replace(\"[sort_name]\", sortName).replace(\"[document_id]\", \"\") : \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, _this),\n                            key < routerArray.length - 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-6 h-6 text-gray-400\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 37\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 31\n                            }, _this) : \"\"\n                        ]\n                    }, \"key\", true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/navigation/Breadcrumbs.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(Breadcrumbs, \"32IcBBMQGWMYdNIxT2oVpoflYTI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Breadcrumbs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Breadcrumbs);\nvar _c;\n$RefreshReg$(_c, \"Breadcrumbs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vQnJlYWRjcnVtYnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXNDO0FBQ1Q7QUFDYTtBQUNEO0FBRXpDLElBQU1LLFdBQVcsR0FBRyxXQUFNOztJQUN0QixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBTU8sR0FBRyxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFDeEIsSUFBTUMsV0FBVyxHQUFHSCxNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQXNDVCxHQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBOUNVLFdBQVcsR0FBb0JWLEdBQWUsR0FBbkMsRUFBRVcsY0FBYyxHQUFJWCxHQUFlLEdBQW5CO0lBQ2xDLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBeENZLFFBQVEsR0FBaUJaLElBQWUsR0FBaEMsRUFBRWEsV0FBVyxHQUFJYixJQUFlLEdBQW5CO0lBQzVCLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLEVBQU8sRUFBeENjLFFBQVEsR0FBaUJkLElBQWUsR0FBaEMsRUFBRWUsV0FBVyxHQUFJZixJQUFlLEdBQW5CO0lBRTVCRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJaUIsY0FBYyxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkNGLFdBQVcsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNILGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFXLENBQUNHLFNBQVMsQ0FBQztRQUNsRixDQUFDO1FBQ0QsSUFBSWhCLEdBQUcsQ0FBQ2lCLGVBQWUsSUFBSUMsU0FBUyxFQUFFO1lBQ25DWCxjQUFjLENBQUNWLDREQUFPLENBQUNHLEdBQUcsQ0FBQ2lCLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJakIsR0FBRyxDQUFD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NkIsT0FBTyxDQUFDLGFBQWEsRUFBRTNCLFFBQVEsQ0FBVyxDQUMxQzJCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQy9CLEVBQUU7Ozs7O3lDQUNSOzs7OztxQ0FDRDs0QkFDTEQsR0FBRyxHQUFJaEMsV0FBVyxDQUFDb0MsTUFBTSxHQUFFLENBQUMsaUJBQzVCLDhEQUFDWixLQUFHO2dDQUFDTCxTQUFTLEVBQUMsdUJBQXVCO2dDQUFDTSxJQUFJLEVBQUMsY0FBYztnQ0FBQ0MsT0FBTyxFQUFDLFdBQVc7Z0NBQ3pFQyxLQUFLLEVBQUMsNEJBQTRCOzBDQUNqQyw0RUFBQ0MsTUFBSTtvQ0FBQ0MsQ0FBQyxFQUFDLG9IQUN1Qzs7Ozs7eUNBQUU7Ozs7O3FDQUMvQyxHQUNSLEVBQUU7O3VCQTlDQSxLQUFLOzs7OzZCQWdEUjtpQkFBQSxDQUNaOzs7Ozs7aUJBQ0E7Ozs7O2FBQ0gsQ0FDVDtBQUNMLENBQUM7R0EzRktqQyxXQUFXOztRQUNFTCxrREFBUzs7O0FBRHRCSyxLQUFBQSxXQUFXO0FBNkZqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL25hdmlnYXRpb24vQnJlYWRjcnVtYnMudHN4PzljMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZnJvbUhleCBmcm9tIFwiLi4vaGVscGVycy9mcm9tSGV4XCI7XG5cbmNvbnN0IEJyZWFkY3J1bWJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgcGlkID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3Qgcm91dGVyQXJyYXkgPSByb3V0ZXIucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnNsaWNlKDEpXG4gICAgY29uc3QgW2RlY29kZWROYW1lLCBzZXREZWNvZGVkTmFtZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW3NvcnROYW1lLCBzZXRTb3J0TmFtZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW2NsaWVudElkLCBzZXRDbGllbnRJZF0gPSB1c2VTdGF0ZTxhbnk+KClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55JykpIHtcbiAgICAgICAgICAgIHNldENsaWVudElkKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNvbXBhbnlcIikgYXMgc3RyaW5nKS5jbGllbnRfaWQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpZC5pbmRleGdyb3VwX25hbWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgIHNldERlY29kZWROYW1lKGZyb21IZXgocGlkLmluZGV4Z3JvdXBfbmFtZSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpZC5zb3J0X25hbWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXRTb3J0TmFtZShmcm9tSGV4KHBpZC5zb3J0X25hbWUpKVxuICAgICAgICB9XG5cbiAgICB9LFtwaWRdICk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtbC0yMCBteS01XCI+XG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZ3JheS00MDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNy4yOTMgMTQuNzA3YTEgMSAwIDAxMC0xLjQxNEwxMC41ODYgMTAgNy4yOTMgNi43MDdhMSAxIDAgMDExLjQxNC0xLjQxNGw0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDB6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICB7cm91dGVyQXJyYXkubWFwKChyb3V0ZTogYW55LCBrZXk6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9XCJrZXlcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wiK3JvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiL1wiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIltpZF1cIiwgcGlkLmlkIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJbY2xpZW50X2lkXVwiLCBwaWQuaWQgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcInNoaWZ0LWNhbGVuZGFyXCIsIFwibWFzdGVyLWRhdGEvc2hpZnQtY2FsZW5kYXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJtYXN0ZXItZGF0YVwiLCBcIm1hc3Rlci1kYXRhL1wiICsgY2xpZW50SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiZWRpdC1jbGllbnRcIiwgXCJtYXN0ZXItZGF0YS9lZGl0LWNsaWVudC9cIiArIGNsaWVudElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIm5ldy1tYWNoaW5lXCIsIFwibWFzdGVyLWRhdGEvbmV3LW1hY2hpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJzaGlmdC1tYW5hZ2VyXCIsIFwibWFzdGVyLWRhdGEvc2hpZnQtbWFuYWdlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcImVkaXQtbWFjaGluZVwiLCBcIm1hc3Rlci1kYXRhL2VkaXQtbWFjaGluZS9cIiArIHBpZC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJwcmljZS1tYXRyaXhcIiwgXCIva2Fsa3VsYXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJbY2xpZW50XVwiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIltkb2N1bWVudF9pZF1cIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJtb250aGx5LWV2YWx1YXRpb25cIiwgXCJyZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlID09IFwiW2lkXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyOnRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwaWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiLVwiLCBcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCItXCIsIFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIi9cIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJ1c2VyIGRhdGFcIiwgXCJNYXN0ZXIgRGF0YVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIltjbGllbnRdXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiW2lkXVwiLCBwaWQuaWQgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIltjbGllbnRfaWRdXCIsIHBpZC5jbGllbnRfaWQgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIlt1c2VyXVwiLCBwaWQudXNlciBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiW2luZGV4Z3JvdXBfbmFtZV1cIiwgZGVjb2RlZE5hbWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIltzb3J0X25hbWVdXCIsIHNvcnROYW1lIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJbZG9jdW1lbnRfaWRdXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5IDwgKHJvdXRlckFycmF5Lmxlbmd0aCAtMSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ncmF5LTQwMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03LjI5MyAxNC43MDdhMSAxIDAgMDEwLTEuNDE0TDEwLjU4NiAxMCA3LjI5MyA2LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRhMSAxIDAgMDEwIDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZnJvbUhleCIsIkJyZWFkY3J1bWJzIiwicm91dGVyIiwicGlkIiwicXVlcnkiLCJyb3V0ZXJBcnJheSIsInBhdGhuYW1lIiwic3BsaXQiLCJzbGljZSIsImRlY29kZWROYW1lIiwic2V0RGVjb2RlZE5hbWUiLCJzb3J0TmFtZSIsInNldFNvcnROYW1lIiwiY2xpZW50SWQiLCJzZXRDbGllbnRJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNsaWVudF9pZCIsImluZGV4Z3JvdXBfbmFtZSIsInVuZGVmaW5lZCIsInNvcnRfbmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIm9sIiwibGkiLCJocmVmIiwiYSIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZCIsIm1hcCIsInJvdXRlIiwia2V5IiwicmVwbGFjZSIsImlkIiwidXNlciIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/navigation/Breadcrumbs.tsx\n"));

/***/ })

});