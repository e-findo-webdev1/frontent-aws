"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reporting/monthly-evaluation/[document_id]",{

/***/ "./pages/reporting/monthly-evaluation/[document_id].tsx":
/*!**************************************************************!*\
  !*** ./pages/reporting/monthly-evaluation/[document_id].tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MonthlyComment = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var pid = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), controlDocument = ref[0], setControlDocument = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents\").then(function(response) {\n            setControlDocument(response.data.Items.filter(function(document) {\n                return document.document_id == pid.document_id;\n            }));\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n    }, []);\n    console.log(controlDocument);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"content-page\",\n        className: \"overflow-auto h-full px-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/reporting/monthly-evaluation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2\",\n                    children: \"← Zur\\xfcck\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-5 text-3xl font-bold mb-5\",\n                children: \"Monatsauswertung Kommentar\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:rounded-lg shadow-md overflow-auto mb-10 w-1/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-lg shadow-md border overflow-auto \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table-auto w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: \"bg-gray-50\",\n                            children: [\n                                controlDocument ? controlDocument.map(function(document) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"text-xs text-gray-500 border-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border-r text-left\",\n                                                children: \"Datum\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"text-right\",\n                                                children: moment__WEBPACK_IMPORTED_MODULE_4___default()(document.timestamp).format(\"DD.MM.YYYY\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, document.document_id, true, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 37\n                                    }, _this);\n                                }) : \"\",\n                                controlDocument ? controlDocument.map(function(document) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"text-xs text-gray-500 border-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border-r text-left\",\n                                                children: \"Summe\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"text-right\",\n                                                children: \"0,00\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, document.document_id, true, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 37\n                                    }, _this);\n                                }) : \"\",\n                                controlDocument ? controlDocument.map(function(document) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"text-xs text-gray-500 border-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border-r\",\n                                                children: \"Betrag erhalten\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"text-right\",\n                                                children: \"0,00\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, document.document_id, true, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 37\n                                    }, _this);\n                                }) : \"\",\n                                controlDocument ? controlDocument.map(function(document) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"text-xs text-gray-500 border-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border-r\",\n                                                children: \"Delta\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"text-right\",\n                                                children: \"0,00\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, document.document_id, true, {\n                                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 37\n                                    }, _this);\n                                }) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Werksgewicht:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border rounded pl-2.5 py-0.5 w-2/12\",\n                        defaultValue: 0\n                    }, void 0, false, {\n                        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this),\n                    \" kg\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/reporting/monthly-evaluation/[document_id].tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(MonthlyComment, \"0CvbIMnmVVVZNv9aoeUk9mZKRjk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MonthlyComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MonthlyComment);\nvar _c;\n$RefreshReg$(_c, \"MonthlyComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRpbmcvbW9udGhseS1ldmFsdWF0aW9uL1tkb2N1bWVudF9pZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNkI7QUFDYTtBQUNsQjtBQUNjO0FBQ1Y7QUFFNUIsSUFBTU0sY0FBYyxHQUFHLFdBQU07O0lBQ3pCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUFNSSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUV4QixJQUE4Q1AsR0FBZSxHQUFmQSwrQ0FBUSxFQUFPLEVBQXREUSxlQUFlLEdBQXdCUixHQUFlLEdBQXZDLEVBQUVTLGtCQUFrQixHQUFJVCxHQUFlLEdBQW5CO0lBRTFDRCxnREFBUyxDQUFDLFdBQU07UUFDWkUsaURBQU8sQ0FBQyw2RUFBNkUsQ0FBQyxDQUNqRlUsSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUNoQkgsa0JBQWtCLENBQ2RHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxRQUFhO3VCQUNyQ0EsUUFBUSxDQUFDQyxXQUFXLElBQUlYLEdBQUcsQ0FBQ1csV0FBVzthQUFBLENBQ3RDLENBQ1IsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNQLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1BRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixlQUFlLENBQUM7SUFDNUIscUJBQ0ksOERBQUNjLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGNBQWM7UUFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7MEJBQ3pELDhEQUFDMUIsa0RBQUk7Z0JBQUMyQixJQUFJLEVBQUMsK0JBQStCOzBCQUN0Qyw0RUFBQ0MsUUFBTTtvQkFBQ0YsU0FBUyxFQUFD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b250aGx5LWV2YWx1YXRpb24vW2RvY3VtZW50X2lkXS50c3g/NmVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5jb25zdCBNb250aGx5Q29tbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHBpZCA9IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3QgW2NvbnRyb2xEb2N1bWVudCwgc2V0Q29udHJvbERvY3VtZW50XSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEFQSS5nZXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9jb250cm9sLWRvY3VtZW50cycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb250cm9sRG9jdW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuSXRlbXMuZmlsdGVyKChkb2N1bWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRfaWQgPT0gcGlkLmRvY3VtZW50X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnNvbGUubG9nKGNvbnRyb2xEb2N1bWVudClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1wYWdlXCIgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBoLWZ1bGwgcHgtMjRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVwb3J0aW5nL21vbnRobHktZXZhbHVhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGZsb2F0LXJpZ2h0IHAtMS41IHB4LTMuNSBmb250LWJvbGQgYm9yZGVyLWFjY2VudC1jb2xvci0xIGJnLWFjY2VudC1jb2xvci00XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWFjY2VudC1jb2xvci01IHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQteHMgbWwtMlwiPuKGkCBadXLDvGNrPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtM3hsIGZvbnQtYm9sZCBtYi01XCI+TW9uYXRzYXVzd2VydHVuZyBLb21tZW50YXI8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIG92ZXJmbG93LWF1dG8gbWItMTAgdy0xLzRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIGJvcmRlciBvdmVyZmxvdy1hdXRvIFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0byB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xEb2N1bWVudCA/IGNvbnRyb2xEb2N1bWVudC5tYXAoKGRvY3VtZW50OmFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2RvY3VtZW50LmRvY3VtZW50X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItciB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0dW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoZG9jdW1lbnQudGltZXN0YW1wKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xEb2N1bWVudCA/IGNvbnRyb2xEb2N1bWVudC5tYXAoKGRvY3VtZW50OmFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2RvY3VtZW50LmRvY3VtZW50X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItciB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VtbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xEb2N1bWVudCA/IGNvbnRyb2xEb2N1bWVudC5tYXAoKGRvY3VtZW50OmFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2RvY3VtZW50LmRvY3VtZW50X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZXRyYWcgZXJoYWx0ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xEb2N1bWVudCA/IGNvbnRyb2xEb2N1bWVudC5tYXAoKGRvY3VtZW50OmFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2RvY3VtZW50LmRvY3VtZW50X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWx0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxwPldlcmtzZ2V3aWNodDo8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwbC0yLjUgcHktMC41IHctMi8xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9Lz4ga2dcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhseUNvbW1lbnQiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJIiwidXNlUm91dGVyIiwibW9tZW50IiwiTW9udGhseUNvbW1lbnQiLCJyb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImNvbnRyb2xEb2N1bWVudCIsInNldENvbnRyb2xEb2N1bWVudCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJJdGVtcyIsImZpbHRlciIsImRvY3VtZW50IiwiZG9jdW1lbnRfaWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImJ1dHRvbiIsInAiLCJ0YWJsZSIsInRib2R5IiwibWFwIiwidHIiLCJ0ZCIsInRpbWVzdGFtcCIsImZvcm1hdCIsImlucHV0IiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/reporting/monthly-evaluation/[document_id].tsx\n"));

/***/ })

});