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

/***/ "./pages/components/helpers/proforma.tsx":
/*!***********************************************!*\
  !*** ./pages/components/helpers/proforma.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ \"./node_modules/pdfmake/build/pdfmake.js\");\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ \"./node_modules/pdfmake/build/vfs_fonts.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// @ts-ignore\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// @ts-ignore\n\n\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__.pdfMake.vfs;\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().fonts) = {\n    Poppins: {\n        normal: \"Poppins-Regular.ttf\",\n        bold: \"Poppins-Medium.ttf\"\n    },\n    // download default Roboto font from cdnjs.com\n    Roboto: {\n        normal: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf\",\n        bold: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf\",\n        italics: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf\",\n        bolditalics: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf\"\n    }\n};\nvar Proforma = function(param) {\n    var document_id = param.document_id, brutto = param.brutto, netto = param.netto, timestamp = param.timestamp, tara = param.tara, machine_id = param.machine_id, company = param.company, waretype = param.waretype, sort = param.sort;\n    var getBase64ImageFromURL = function getBase64ImageFromURL(url) {\n        return new Promise(function(resolve, reject) {\n            var img = new Image();\n            img.setAttribute(\"crossOrigin\", \"anonymous\");\n            img.onload = function() {\n                var canvas = document.createElement(\"canvas\");\n                canvas.width = img.width;\n                canvas.height = img.height;\n                var ctx = canvas.getContext(\"2d\");\n                // @ts-ignore\n                ctx.drawImage(img, 0, 0);\n                var dataURL = canvas.toDataURL(\"image/png\");\n                resolve(dataURL);\n            };\n            img.onerror = function(error) {\n                reject(error);\n            };\n            img.src = url;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), image = ref[0], setImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), url = ref1[0], setUrl = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var object = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var myobj, _tmp;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _tmp = {};\n                            return [\n                                4,\n                                getBase64ImageFromURL(\"/../../e-findo-logo2.jpeg\")\n                            ];\n                        case 1:\n                            myobj = (_tmp.image = _state.sent(), _tmp.width = 39, _tmp.height = 44, _tmp.alignment = \"center\", _tmp);\n                            // @ts-ignore\n                            setImage(myobj);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function object() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        object();\n    }, []);\n    var docDefinition = {\n        content: [\n            {\n                columns: [\n                    {\n                        stack: [\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"e-findo GmbH - Die Rohstoffkanzlei - Gerwigstr. 12 - 78234 Engen\",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"Kunde Nr.: \".concat(company.client_number),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.client_name),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.street),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.zip_code, \" \").concat(company.city),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            }, \n                        ]\n                    },\n                    {\n                        stack: [\n                            image,\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"e-findo GmbH\"\n                            },\n                            {\n                                text: \"Die Rohstoffkanzlei\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            }\n                        ],\n                        alignment: \"center\",\n                        margin: [\n                            100,\n                            0,\n                            0,\n                            0\n                        ],\n                        fontSize: 8,\n                        color: \"gray\"\n                    }\n                ]\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \"Proforma Rechnung\",\n                bold: true,\n                color: \"black\",\n                fontSize: 11\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \"Wiege Nr.: \".concat(company.client_number, \"-\").concat(parseInt(company.client_number) + document_id)\n            },\n            {\n                text: \"Sorte Nr.: \".concat(sort, \" / Warenart: \").concat(waretype)\n            },\n            {\n                text: \" \"\n            },\n            {\n                table: {\n                    headerRows: 0,\n                    widths: [\n                        \"*\",\n                        \"*\",\n                        \"*\",\n                        \"*\",\n                        \"*\"\n                    ],\n                    body: [\n                        [\n                            \"Monatpreis:\",\n                            {\n                                text: \"€\",\n                                alignment: \"right\"\n                            }\n                        ],\n                        [\n                            \"Abgangsgewicht:\",\n                            {\n                                text: \"\",\n                                alignment: \"right\"\n                            }\n                        ],\n                        [\n                            \"Betrag:\",\n                            {\n                                text: \"€\",\n                                alignment: \"right\"\n                            }\n                        ]\n                    ]\n                }\n            }, \n        ],\n        pageSize: \"A4\",\n        pageMargins: [\n            50,\n            75\n        ],\n        defaultStyle: {\n            fontSize: 9,\n            color: \"#3F3C3E\"\n        },\n        styles: {\n            header: {}\n        }\n    };\n    var createPdf = function() {\n        var object = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var myobj, _tmp;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _tmp = {};\n                            return [\n                                4,\n                                getBase64ImageFromURL(\"/../../e-findo-logo2.jpeg\")\n                            ];\n                        case 1:\n                            myobj = (_tmp.image = _state.sent(), _tmp.width = 39, _tmp.height = 44, _tmp.alignment = \"center\", _tmp);\n                            // @ts-ignore\n                            setImage(myobj);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function object() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        object();\n        // @ts-ignore\n        var pdfGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().createPdf(docDefinition);\n        pdfGenerator.getBlob(function(blob) {\n            var url = URL.createObjectURL(blob);\n            // @ts-ignore\n            setUrl(url);\n            window.open(url, \"_blank\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: createPdf,\n            className: \"underline\",\n            children: \"Rechnung\"\n        }, void 0, false, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/helpers/proforma.tsx\",\n            lineNumber: 176,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/helpers/proforma.tsx\",\n        lineNumber: 175,\n        columnNumber: 9\n    }, _this);\n};\n_s(Proforma, \"pEfUHjd4t0Us7Qq8+zgotITpWoc=\");\n_c = Proforma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Proforma);\nvar _c;\n$RefreshReg$(_c, \"Proforma\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlbHBlcnMvcHJvZm9ybWEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2I7Ozs7O0FBQTRDO0FBQzVDLGFBQWE7QUFDaUM7QUFDSjtBQUUxQ0Esa0VBQVcsR0FBR0MsZ0VBQW9CO0FBRWxDRCxvRUFBYSxHQUFHO0lBQ1pNLE9BQU8sRUFBRTtRQUNMQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCQyxJQUFJLEVBQUUsb0JBQW9CO0tBQzdCO0lBRUQsOENBQThDO0lBQzlDQyxNQUFNLEVBQUU7UUFDSkYsTUFBTSxFQUFFLHVGQUF1RjtRQUMvRkMsSUFBSSxFQUFFLHNGQUFzRjtRQUM1RkUsT0FBTyxFQUFFLHNGQUFzRjtRQUMvRkMsV0FBVyxFQUFFLDRGQUE0RjtLQUM1RztDQUNKO0FBQ0QsSUFBTUMsUUFBUSxHQUFHLGdCQUE2RjtRQUEzRkMsV0FBVyxTQUFYQSxXQUFXLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7UUFrSXRGQyxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLENBQUNDLEdBQVEsRUFBRTtRQUNyQyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztZQUNwQyxJQUFJQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxFQUFFO1lBQ3JCRCxHQUFHLENBQUNFLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDN0NGLEdBQUcsQ0FBQ0csTUFBTSxHQUFHLFdBQU07Z0JBQ2YsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQzdDRixN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LDhEQUFDMkQsS0FBRztrQkFDQSw0RUFBQ0MsUUFBTTtZQUFDQyxPQUFPLEVBQUVWLFNBQVM7WUFBRVcsU0FBUyxFQUFDLFdBQVc7c0JBQUMsVUFFbEQ7Ozs7O2lCQUFTOzs7OzthQUNQLENBQ1Q7QUFDTCxDQUFDO0dBOUpLekUsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBZ0tkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9oZWxwZXJzL3Byb2Zvcm1hLnRzeD84ODczIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwZGZNYWtlIGZyb20gJ3BkZm1ha2UvYnVpbGQvcGRmbWFrZSc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcGRmRm9udHMgZnJvbSAncGRmbWFrZS9idWlsZC92ZnNfZm9udHMnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5wZGZNYWtlLnZmcyA9IHBkZkZvbnRzLnBkZk1ha2UudmZzXG5cbnBkZk1ha2UuZm9udHMgPSB7XG4gICAgUG9wcGluczoge1xuICAgICAgICBub3JtYWw6ICdQb3BwaW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgYm9sZDogJ1BvcHBpbnMtTWVkaXVtLnR0ZicsXG4gICAgfSxcblxuICAgIC8vIGRvd25sb2FkIGRlZmF1bHQgUm9ib3RvIGZvbnQgZnJvbSBjZG5qcy5jb21cbiAgICBSb2JvdG86IHtcbiAgICAgICAgbm9ybWFsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGRmbWFrZS8wLjEuNjYvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicsXG4gICAgICAgIGJvbGQ6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wZGZtYWtlLzAuMS42Ni9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYnLFxuICAgICAgICBpdGFsaWNzOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGRmbWFrZS8wLjEuNjYvZm9udHMvUm9ib3RvL1JvYm90by1JdGFsaWMudHRmJyxcbiAgICAgICAgYm9sZGl0YWxpY3M6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wZGZtYWtlLzAuMS42Ni9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bUl0YWxpYy50dGYnXG4gICAgfSxcbn1cbmNvbnN0IFByb2Zvcm1hID0gKHtkb2N1bWVudF9pZCwgYnJ1dHRvLCBuZXR0bywgdGltZXN0YW1wLCB0YXJhLCBtYWNoaW5lX2lkLCBjb21wYW55LCB3YXJldHlwZSwgc29ydH06IGFueSkgPT4ge1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlvYmogPSB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGF3YWl0IGdldEJhc2U2NEltYWdlRnJvbVVSTChcbiAgICAgICAgICAgICAgICAgICAgXCIvLi4vLi4vZS1maW5kby1sb2dvMi5qcGVnXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNldEltYWdlKG15b2JqKVxuICAgICAgICB9XG4gICAgICAgIG9iamVjdCgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGRvY0RlZmluaXRpb24gPSB7XG4gICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgIHtjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtzdGFjazogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnICd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgZS1maW5kbyBHbWJIIC0gRGllIFJvaHN0b2Zma2FuemxlaSAtIEdlcndpZ3N0ci4gMTIgLSA3ODIzNCBFbmdlbmAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgIGAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgS3VuZGUgTnIuOiAke2NvbXBhbnkuY2xpZW50X251bWJlcn1gLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCR7Y29tcGFueS5jbGllbnRfbmFtZX1gLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCR7Y29tcGFueS5zdHJlZXR9YCwgbGlzdFR5cGU6ICdub25lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6IGAke2NvbXBhbnkuemlwX2NvZGV9ICR7Y29tcGFueS5jaXR5fWAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgIGAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgIGAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgIGAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgIGAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgIGAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgIHtzdGFjayA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJyAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ2UtZmluZG8gR21iSCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnRGllIFJvaHN0b2Zma2FuemxlaSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnd3d3LmUtZmluZG8uZGUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ3d3dy5lLWZpbmRvLmRlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICd3d3cuZS1maW5kby5kZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnd3d3LmUtZmluZG8uZGUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ3d3dy5lLWZpbmRvLmRlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICd3d3cuZS1maW5kby5kZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnd3d3LmUtZmluZG8uZGUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ3d3dy5lLWZpbmRvLmRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sIGFsaWdubWVudDogJ2NlbnRlcicsIG1hcmdpbjogWzEwMCwgMCwgMCwgMF0sIGZvbnRTaXplOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5J31cbiAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYFByb2Zvcm1hIFJlY2hudW5nYCwgYm9sZDogdHJ1ZSwgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAxMX0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYFdpZWdlIE5yLjogJHtjb21wYW55LmNsaWVudF9udW1iZXJ9LSR7cGFyc2VJbnQoY29tcGFueS5jbGllbnRfbnVtYmVyKSArIGRvY3VtZW50X2lkfWB9LFxuICAgICAgICAgICAge3RleHQ6IGBTb3J0ZSBOci46ICR7c29ydH0gLyBXYXJlbmFydDogJHt3YXJldHlwZX1gfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RhYmxlOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyUm93czogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhzOiBbICcqJywgJyonLCAnKicsICcqJywgJyonXSxcblxuICAgICAgICAgICAgICAgICAgICBib2R5OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ01vbmF0cHJlaXM6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGDigqxgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ0FiZ2FuZ3NnZXdpY2h0OicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgWydCZXRyYWc6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGDigqxgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG5cbiAgICAgICAgcGFnZVNpemU6ICdBNCcsXG4gICAgICAgIHBhZ2VNYXJnaW5zOiBbNTAsIDc1XSxcblxuICAgICAgICBkZWZhdWx0U3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICAgICAgY29sb3I6ICcjM0YzQzNFJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlUGRmID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBteW9iaiA9IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogYXdhaXQgZ2V0QmFzZTY0SW1hZ2VGcm9tVVJMKFxuICAgICAgICAgICAgICAgICAgICBcIi8uLi8uLi9lLWZpbmRvLWxvZ28yLmpwZWdcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM5LFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDQsXG4gICAgICAgICAgICAgICAgYWxpZ25tZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2V0SW1hZ2UobXlvYmopXG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcGRmR2VuZXJhdG9yID0gcGRmTWFrZS5jcmVhdGVQZGYoZG9jRGVmaW5pdGlvbik7XG4gICAgICAgIHBkZkdlbmVyYXRvci5nZXRCbG9iKChibG9iOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNldFVybCh1cmwpXG4gICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJhc2U2NEltYWdlRnJvbVVSTCh1cmw6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNyb3NzT3JpZ2luXCIsIFwiYW5vbnltb3VzXCIpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhVVJMKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWcub25lcnJvciA9IGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVBkZn0gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgUmVjaG51bmdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Zvcm1hO1xuXG5cbiJdLCJuYW1lcyI6WyJwZGZNYWtlIiwicGRmRm9udHMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInZmcyIsImZvbnRzIiwiUG9wcGlucyIsIm5vcm1hbCIsImJvbGQiLCJSb2JvdG8iLCJpdGFsaWNzIiwiYm9sZGl0YWxpY3MiLCJQcm9mb3JtYSIsImRvY3VtZW50X2lkIiwiYnJ1dHRvIiwibmV0dG8iLCJ0aW1lc3RhbXAiLCJ0YXJhIiwibWFjaGluZV9pZCIsImNvbXBhbnkiLCJ3YXJldHlwZSIsInNvcnQiLCJnZXRCYXNlNjRJbWFnZUZyb21VUkwiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltZyIsIkltYWdlIiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJlcnJvciIsInNyYyIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRVcmwiLCJvYmplY3QiLCJteW9iaiIsImFsaWdubWVudCIsImRvY0RlZmluaXRpb24iLCJjb250ZW50IiwiY29sdW1ucyIsInN0YWNrIiwidGV4dCIsImxpc3RUeXBlIiwiY2xpZW50X251bWJlciIsImNsaWVudF9uYW1lIiwic3RyZWV0IiwiemlwX2NvZGUiLCJjaXR5IiwibWFyZ2luIiwiZm9udFNpemUiLCJjb2xvciIsInBhcnNlSW50IiwidGFibGUiLCJoZWFkZXJSb3dzIiwid2lkdGhzIiwiYm9keSIsInBhZ2VTaXplIiwicGFnZU1hcmdpbnMiLCJkZWZhdWx0U3R5bGUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjcmVhdGVQZGYiLCJwZGZHZW5lcmF0b3IiLCJnZXRCbG9iIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpbmRvdyIsIm9wZW4iLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/helpers/proforma.tsx\n"));

/***/ })

});