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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ \"./node_modules/pdfmake/build/pdfmake.js\");\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ \"./node_modules/pdfmake/build/vfs_fonts.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// @ts-ignore\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// @ts-ignore\n\n\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__.pdfMake.vfs;\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().fonts) = {\n    Poppins: {\n        normal: \"Poppins-Regular.ttf\",\n        bold: \"Poppins-Medium.ttf\"\n    },\n    // download default Roboto font from cdnjs.com\n    Roboto: {\n        normal: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf\",\n        bold: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf\",\n        italics: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf\",\n        bolditalics: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf\"\n    }\n};\nvar Proforma = function(param) {\n    var document_id = param.document_id, brutto = param.brutto, netto = param.netto, timestamp = param.timestamp, tara = param.tara, machine_id = param.machine_id, company = param.company, waretype = param.waretype, sort = param.sort;\n    var getBase64ImageFromURL = function getBase64ImageFromURL(url) {\n        return new Promise(function(resolve, reject) {\n            var img = new Image();\n            img.setAttribute(\"crossOrigin\", \"anonymous\");\n            img.onload = function() {\n                var canvas = document.createElement(\"canvas\");\n                canvas.width = img.width;\n                canvas.height = img.height;\n                var ctx = canvas.getContext(\"2d\");\n                // @ts-ignore\n                ctx.drawImage(img, 0, 0);\n                var dataURL = canvas.toDataURL(\"image/png\");\n                resolve(dataURL);\n            };\n            img.onerror = function(error) {\n                reject(error);\n            };\n            img.src = url;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), image = ref[0], setImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), url = ref1[0], setUrl = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var object = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var myobj, _tmp;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _tmp = {};\n                            return [\n                                4,\n                                getBase64ImageFromURL(\"/../../e-findo-logo2.jpeg\")\n                            ];\n                        case 1:\n                            myobj = (_tmp.image = _state.sent(), _tmp.width = 39, _tmp.height = 44, _tmp.alignment = \"center\", _tmp);\n                            // @ts-ignore\n                            setImage(myobj);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function object() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        object();\n    }, []);\n    var docDefinition = {\n        content: [\n            {\n                columns: [\n                    {\n                        stack: [\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"e-findo GmbH - Die Rohstoffkanzlei - Gerwigstr. 12 - 78234 Engen\",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"Kunde Nr.: \".concat(company.client_number),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.client_name),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.street),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.zip_code, \" \").concat(company.city),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            }, \n                        ]\n                    },\n                    {\n                        stack: [\n                            image,\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"e-findo GmbH\"\n                            },\n                            {\n                                text: \"Die Rohstoffkanzlei\"\n                            },\n                            {\n                                text: \"Gerwigstra\\xdfe 12\"\n                            },\n                            {\n                                text: \"78234 Engen\"\n                            },\n                            {\n                                text: \"\"\n                            },\n                            {\n                                text: \"Telefon: +49 (0) 77 33-99 68 95-0\"\n                            },\n                            {\n                                text: \"Fax: +49 (0) 77 33-99 68 95-8\"\n                            },\n                            {\n                                text: \"E-Mail: info@e-findo.de\"\n                            },\n                            {\n                                text: \"\"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            }\n                        ],\n                        alignment: \"left\",\n                        margin: [\n                            100,\n                            0,\n                            0,\n                            0\n                        ],\n                        fontSize: 8,\n                        color: \"gray\"\n                    }\n                ]\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \"Proforma Rechnung\",\n                bold: true,\n                color: \"black\",\n                fontSize: 11\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \"Wiege Nr.: \".concat(company.client_number, \"-\").concat(parseInt(company.client_number) + document_id)\n            },\n            {\n                text: \"Sorte Nr.: \".concat(sort, \" / Warenart: \").concat(waretype)\n            },\n            {\n                text: \" \"\n            },\n            {\n                table: {\n                    headerRows: 0,\n                    widths: [\n                        \"*\",\n                        \"*\",\n                        \"*\",\n                        \"*\",\n                        \"*\"\n                    ],\n                    body: [\n                        [\n                            \"Monatpreis:\",\n                            {\n                                text: \"€\",\n                                alignment: \"right\"\n                            }\n                        ],\n                        [\n                            \"Abgangsgewicht:\",\n                            {\n                                text: \"\",\n                                alignment: \"right\"\n                            }\n                        ],\n                        [\n                            \"Betrag:\",\n                            {\n                                text: \"€\",\n                                alignment: \"right\"\n                            }\n                        ]\n                    ]\n                }\n            }, \n        ],\n        pageSize: \"A4\",\n        pageMargins: [\n            50,\n            75\n        ],\n        defaultStyle: {\n            fontSize: 9,\n            color: \"#3F3C3E\"\n        },\n        styles: {\n            header: {}\n        }\n    };\n    var createPdf = function() {\n        var object = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var myobj, _tmp;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _tmp = {};\n                            return [\n                                4,\n                                getBase64ImageFromURL(\"/../../e-findo-logo2.jpeg\")\n                            ];\n                        case 1:\n                            myobj = (_tmp.image = _state.sent(), _tmp.width = 39, _tmp.height = 44, _tmp.alignment = \"center\", _tmp);\n                            // @ts-ignore\n                            setImage(myobj);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function object() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        object();\n        // @ts-ignore\n        var pdfGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().createPdf(docDefinition);\n        pdfGenerator.getBlob(function(blob) {\n            var url = URL.createObjectURL(blob);\n            // @ts-ignore\n            setUrl(url);\n            window.open(url, \"_blank\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: createPdf,\n            className: \"underline\",\n            children: \"Rechnung\"\n        }, void 0, false, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/helpers/proforma.tsx\",\n            lineNumber: 176,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/helpers/proforma.tsx\",\n        lineNumber: 175,\n        columnNumber: 9\n    }, _this);\n};\n_s(Proforma, \"pEfUHjd4t0Us7Qq8+zgotITpWoc=\");\n_c = Proforma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Proforma);\nvar _c;\n$RefreshReg$(_c, \"Proforma\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlbHBlcnMvcHJvZm9ybWEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2I7Ozs7O0FBQTRDO0FBQzVDLGFBQWE7QUFDaUM7QUFDSjtBQUUxQ0Esa0VBQVcsR0FBR0MsZ0VBQW9CO0FBRWxDRCxvRUFBYSxHQUFHO0lBQ1pNLE9BQU8sRUFBRTtRQUNMQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCQyxJQUFJLEVBQUUsb0JBQW9CO0tBQzdCO0lBRUQsOENBQThDO0lBQzlDQyxNQUFNLEVBQUU7UUFDSkYsTUFBTSxFQUFFLHVGQUF1RjtRQUMvRkMsSUFBSSxFQUFFLHNGQUFzRjtRQUM1RkUsT0FBTyxFQUFFLHNGQUFzRjtRQUMvRkMsV0FBVyxFQUFFLDRGQUE0RjtLQUM1RztDQUNKO0FBQ0QsSUFBTUMsUUFBUSxHQUFHLGdCQUE2RjtRQUEzRkMsV0FBVyxTQUFYQSxXQUFXLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7UUFrSXRGQyxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLENBQUNDLEdBQVEsRUFBRTtRQUNyQyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztZQUNwQyxJQUFJQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxFQUFFO1lBQ3JCRCxHQUFHLENBQUNFLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDN0NGLEdBQUcsQ0FBQ0csTUFBTSxHQUFHLFdBQU07Z0JBQ2YsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQzdDRixN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LEtBQUc7a0JBQ0EsNEVBQUNDLFFBQU07WUFBQ0MsT0FBTyxFQUFFVixTQUFTO1lBQUVXLFNBQVMsRUFBQyxXQUFXO3NCQUFDLFVBRWxEOzs7OztpQkFBUzs7Ozs7YUFDUCxDQUNUO0FBQ0wsQ0FBQztHQTlKS3pFLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdLZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvaGVscGVycy9wcm9mb3JtYS50c3g/ODg3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgcGRmTWFrZSBmcm9tICdwZGZtYWtlL2J1aWxkL3BkZm1ha2UnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHBkZkZvbnRzIGZyb20gJ3BkZm1ha2UvYnVpbGQvdmZzX2ZvbnRzJ1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xucGRmTWFrZS52ZnMgPSBwZGZGb250cy5wZGZNYWtlLnZmc1xuXG5wZGZNYWtlLmZvbnRzID0ge1xuICAgIFBvcHBpbnM6IHtcbiAgICAgICAgbm9ybWFsOiAnUG9wcGlucy1SZWd1bGFyLnR0ZicsXG4gICAgICAgIGJvbGQ6ICdQb3BwaW5zLU1lZGl1bS50dGYnLFxuICAgIH0sXG5cbiAgICAvLyBkb3dubG9hZCBkZWZhdWx0IFJvYm90byBmb250IGZyb20gY2RuanMuY29tXG4gICAgUm9ib3RvOiB7XG4gICAgICAgIG5vcm1hbDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BkZm1ha2UvMC4xLjY2L2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYnLFxuICAgICAgICBib2xkOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGRmbWFrZS8wLjEuNjYvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0udHRmJyxcbiAgICAgICAgaXRhbGljczogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BkZm1ha2UvMC4xLjY2L2ZvbnRzL1JvYm90by9Sb2JvdG8tSXRhbGljLnR0ZicsXG4gICAgICAgIGJvbGRpdGFsaWNzOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGRmbWFrZS8wLjEuNjYvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMudHRmJ1xuICAgIH0sXG59XG5jb25zdCBQcm9mb3JtYSA9ICh7ZG9jdW1lbnRfaWQsIGJydXR0bywgbmV0dG8sIHRpbWVzdGFtcCwgdGFyYSwgbWFjaGluZV9pZCwgY29tcGFueSwgd2FyZXR5cGUsIHNvcnR9OiBhbnkpID0+IHtcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG15b2JqID0ge1xuICAgICAgICAgICAgICAgIGltYWdlOiBhd2FpdCBnZXRCYXNlNjRJbWFnZUZyb21VUkwoXG4gICAgICAgICAgICAgICAgICAgIFwiLy4uLy4uL2UtZmluZG8tbG9nbzIuanBlZ1wiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzZXRJbWFnZShteW9iailcbiAgICAgICAgfVxuICAgICAgICBvYmplY3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBkb2NEZWZpbml0aW9uID0ge1xuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICB7Y29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICB7c3RhY2s6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJyAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYGUtZmluZG8gR21iSCAtIERpZSBSb2hzdG9mZmthbnpsZWkgLSBHZXJ3aWdzdHIuIDEyIC0gNzgyMzQgRW5nZW5gLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYEt1bmRlIE5yLjogJHtjb21wYW55LmNsaWVudF9udW1iZXJ9YCwgbGlzdFR5cGU6ICdub25lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6IGAke2NvbXBhbnkuY2xpZW50X25hbWV9YCwgbGlzdFR5cGU6ICdub25lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6IGAke2NvbXBhbnkuc3RyZWV0fWAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgJHtjb21wYW55LnppcF9jb2RlfSAke2NvbXBhbnkuY2l0eX1gLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICB7c3RhY2sgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdlLWZpbmRvIEdtYkgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ0RpZSBSb2hzdG9mZmthbnpsZWknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ0dlcndpZ3N0cmHDn2UgMTInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJzc4MjM0IEVuZ2VuJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ1RlbGVmb246ICs0OSAoMCkgNzcgMzMtOTkgNjggOTUtMCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnRmF4OiArNDkgKDApIDc3IDMzLTk5IDY4IDk1LTgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ0UtTWFpbDogaW5mb0BlLWZpbmRvLmRlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ3d3dy5lLWZpbmRvLmRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sIGFsaWdubWVudDogJ2xlZnQnLCBtYXJnaW46IFsxMDAsIDAsIDAsIDBdLCBmb250U2l6ZTogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheSd9XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGBQcm9mb3JtYSBSZWNobnVuZ2AsIGJvbGQ6IHRydWUsIGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogMTF9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGBXaWVnZSBOci46ICR7Y29tcGFueS5jbGllbnRfbnVtYmVyfS0ke3BhcnNlSW50KGNvbXBhbnkuY2xpZW50X251bWJlcikgKyBkb2N1bWVudF9pZH1gfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgU29ydGUgTnIuOiAke3NvcnR9IC8gV2FyZW5hcnQ6ICR7d2FyZXR5cGV9YH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0YWJsZToge1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclJvd3M6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoczogWyAnKicsICcqJywgJyonLCAnKicsICcqJ10sXG5cbiAgICAgICAgICAgICAgICAgICAgYm9keTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWydNb25hdHByZWlzOicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBg4oKsYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgWydBYmdhbmdzZ2V3aWNodDonLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnQmV0cmFnOicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBg4oKsYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuXG4gICAgICAgIHBhZ2VTaXplOiAnQTQnLFxuICAgICAgICBwYWdlTWFyZ2luczogWzUwLCA3NV0sXG5cbiAgICAgICAgZGVmYXVsdFN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgICAgIGNvbG9yOiAnIzNGM0MzRSdcbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVBkZiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlvYmogPSB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGF3YWl0IGdldEJhc2U2NEltYWdlRnJvbVVSTChcbiAgICAgICAgICAgICAgICAgICAgXCIvLi4vLi4vZS1maW5kby1sb2dvMi5qcGVnXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNldEltYWdlKG15b2JqKVxuICAgICAgICB9XG4gICAgICAgIG9iamVjdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHBkZkdlbmVyYXRvciA9IHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pO1xuICAgICAgICBwZGZHZW5lcmF0b3IuZ2V0QmxvYigoYmxvYjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzZXRVcmwodXJsKVxuICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCYXNlNjRJbWFnZUZyb21VUkwodXJsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVQZGZ9IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIFJlY2hudW5nXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9mb3JtYTtcblxuXG4iXSwibmFtZXMiOlsicGRmTWFrZSIsInBkZkZvbnRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2ZnMiLCJmb250cyIsIlBvcHBpbnMiLCJub3JtYWwiLCJib2xkIiwiUm9ib3RvIiwiaXRhbGljcyIsImJvbGRpdGFsaWNzIiwiUHJvZm9ybWEiLCJkb2N1bWVudF9pZCIsImJydXR0byIsIm5ldHRvIiwidGltZXN0YW1wIiwidGFyYSIsIm1hY2hpbmVfaWQiLCJjb21wYW55Iiwid2FyZXR5cGUiLCJzb3J0IiwiZ2V0QmFzZTY0SW1hZ2VGcm9tVVJMIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWciLCJJbWFnZSIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImRhdGFVUkwiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwiZXJyb3IiLCJzcmMiLCJpbWFnZSIsInNldEltYWdlIiwic2V0VXJsIiwib2JqZWN0IiwibXlvYmoiLCJhbGlnbm1lbnQiLCJkb2NEZWZpbml0aW9uIiwiY29udGVudCIsImNvbHVtbnMiLCJzdGFjayIsInRleHQiLCJsaXN0VHlwZSIsImNsaWVudF9udW1iZXIiLCJjbGllbnRfbmFtZSIsInN0cmVldCIsInppcF9jb2RlIiwiY2l0eSIsIm1hcmdpbiIsImZvbnRTaXplIiwiY29sb3IiLCJwYXJzZUludCIsInRhYmxlIiwiaGVhZGVyUm93cyIsIndpZHRocyIsImJvZHkiLCJwYWdlU2l6ZSIsInBhZ2VNYXJnaW5zIiwiZGVmYXVsdFN0eWxlIiwic3R5bGVzIiwiaGVhZGVyIiwiY3JlYXRlUGRmIiwicGRmR2VuZXJhdG9yIiwiZ2V0QmxvYiIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aW5kb3ciLCJvcGVuIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/helpers/proforma.tsx\n"));

/***/ })

});