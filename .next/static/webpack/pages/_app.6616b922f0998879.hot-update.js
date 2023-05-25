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

/***/ "./pages/components/login/LoginForm.tsx":
/*!**********************************************!*\
  !*** ./pages/components/login/LoginForm.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"./node_modules/bcryptjs/dist/bcrypt.js\");\nvar LoginForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), users = ref[0], setUsers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), error = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref3[0], setPassword = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), clients = ref4[0], setClients = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users\";\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(apiName).then(function(response) {\n            setUsers(response.data.Items);\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients\").then(function(response) {\n            setClients(response.data.Items);\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n    }, []);\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(event) {\n            var hash;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            users.filter(function(user) {\n                                return user.email == email;\n                            })[0].password\n                        ];\n                    case 1:\n                        hash = _state.sent();\n                        return [\n                            4,\n                            bcrypt.compare(password, hash)\n                        ];\n                    case 2:\n                        // @ts-ignore\n                        if (_state.sent() == true) {\n                            sessionStorage.setItem(\"user\", JSON.stringify(users.filter(function(user) {\n                                return user.email == email;\n                            })[0]));\n                            // @ts-ignore\n                            sessionStorage.setItem(\"company\", JSON.stringify(clients.filter(function(client) {\n                                return(// @ts-ignore\n                                client.client_id == users.filter(function(user) {\n                                    return user.email == email;\n                                })[0].client_id);\n                            })[0]));\n                            // @ts-ignore\n                            window.location.reload(false);\n                        } else {\n                            setError(1);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"mx-10 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"mb-7 m-auto h-40\",\n                src: \"/logo-1.svg\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center px-6 py-8 lg:py-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6 space-y-3 sm:p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold text-lg\",\n                                children: \"Sign in to your account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500 text-md\",\n                                children: error === 1 ? \"Invalid username or password.\" : \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"space-y-4 md:space-y-6\",\n                                action: \"#\",\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                children: \"Your email\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"email\",\n                                                name: \"email\",\n                                                id: \"email\",\n                                                className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5\",\n                                                placeholder: \"name@company.com\",\n                                                required: true,\n                                                onChange: function(e) {\n                                                    return setEmail(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 33\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 33\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                id: \"password\",\n                                                placeholder: \"••••••••\",\n                                                className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 mb-2\",\n                                                required: true,\n                                                onChange: function(e) {\n                                                    return setPassword(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 33\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"w-full text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-accent-color-2 hover:bg-accent-color-3\",\n                                        children: \"Sign in\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/login/LoginForm.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, _this);\n};\n_s(LoginForm, \"1xrxAq0Z5nkUoTFm2+etzSFgz+Y=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUEyRmYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udHN4PzYzZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBUEkgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHRqcycpO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBhcGlOYW1lID0gJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS91c2Vycyc7XG5cbiAgICAgICAgQVBJLmdldChhcGlOYW1lKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YS5JdGVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgQVBJLmdldCgnaHR0cHM6Ly84djlqcXRzOTg5LmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2NsaWVudHMnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q2xpZW50cyhyZXNwb25zZS5kYXRhLkl0ZW1zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHVzZXJzLmZpbHRlcigodXNlcjogYW55KT0+IHVzZXIuZW1haWwgPT0gZW1haWwpWzBdLnBhc3N3b3JkXG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGhhc2gpID09IHRydWUpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJzLmZpbHRlcigodXNlcjogYW55KT0+IHVzZXIuZW1haWwgPT0gZW1haWwpWzBdKSlcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb21wYW55XCIsIEpTT04uc3RyaW5naWZ5KGNsaWVudHMuZmlsdGVyKChjbGllbnQ6IGFueSk9PlxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjbGllbnQuY2xpZW50X2lkID09IHVzZXJzLmZpbHRlcigodXNlcjogYW55KT0+IHVzZXIuZW1haWwgPT0gZW1haWwpWzBdLmNsaWVudF9pZClbMF0pKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yKDEpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwibXgtMTAgcC0xMFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYi03IG0tYXV0byBoLTQwXCIgc3JjPVwiL2xvZ28tMS5zdmdcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktOCBsZzpweS0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBzaGFkb3cgbWQ6bXQtMCBzbTptYXgtdy1tZCB4bDpwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS0zIHNtOnAtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+U2lnbiBpbiB0byB5b3VyIGFjY291bnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbGcgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZUBjb21wYW55LmNvbVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctZnVsbCBwLTIuNSBtYi0yXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYm9yZGVyIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBiZy1hY2NlbnQtY29sb3ItMiBob3ZlcjpiZy1hY2NlbnQtY29sb3ItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJIiwiYmNyeXB0IiwicmVxdWlyZSIsIkxvZ2luRm9ybSIsInVzZXJzIiwic2V0VXNlcnMiLCJlcnJvciIsInNldEVycm9yIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjbGllbnRzIiwic2V0Q2xpZW50cyIsImFwaU5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiSXRlbXMiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImhhc2giLCJmaWx0ZXIiLCJ1c2VyIiwiY29tcGFyZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGllbnQiLCJjbGllbnRfaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDEiLCJwIiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/login/LoginForm.tsx\n"));

/***/ })

});