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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ \"./node_modules/pdfmake/build/pdfmake.js\");\n/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ \"./node_modules/pdfmake/build/vfs_fonts.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// @ts-ignore\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// @ts-ignore\n\n\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__.pdfMake.vfs;\n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().fonts) = {\n    Poppins: {\n        normal: \"Poppins-Regular.ttf\",\n        bold: \"Poppins-Medium.ttf\"\n    },\n    // download default Roboto font from cdnjs.com\n    Roboto: {\n        normal: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf\",\n        bold: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf\",\n        italics: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf\",\n        bolditalics: \"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf\"\n    }\n};\nvar Proforma = function(param) {\n    var document_id = param.document_id, brutto = param.brutto, netto = param.netto, timestamp = param.timestamp, tara = param.tara, machine_id = param.machine_id, company = param.company, waretype = param.waretype, sort = param.sort;\n    var getBase64ImageFromURL = function getBase64ImageFromURL(url) {\n        return new Promise(function(resolve, reject) {\n            var img = new Image();\n            img.setAttribute(\"crossOrigin\", \"anonymous\");\n            img.onload = function() {\n                var canvas = document.createElement(\"canvas\");\n                canvas.width = img.width;\n                canvas.height = img.height;\n                var ctx = canvas.getContext(\"2d\");\n                // @ts-ignore\n                ctx.drawImage(img, 0, 0);\n                var dataURL = canvas.toDataURL(\"image/png\");\n                resolve(dataURL);\n            };\n            img.onerror = function(error) {\n                reject(error);\n            };\n            img.src = url;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), image = ref[0], setImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), url = ref1[0], setUrl = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var object = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var myobj, _tmp;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _tmp = {};\n                            return [\n                                4,\n                                getBase64ImageFromURL(\"/../../e-findo-logo2.jpeg\")\n                            ];\n                        case 1:\n                            myobj = (_tmp.image = _state.sent(), _tmp.width = 39, _tmp.height = 44, _tmp.alignment = \"left\", _tmp);\n                            // @ts-ignore\n                            setImage(myobj);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function object() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        object();\n    }, []);\n    var docDefinition = {\n        content: [\n            {\n                columns: [\n                    {\n                        stack: [\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"e-findo GmbH - Die Rohstoffkanzlei - Gerwigstr. 12 - 78234 Engen\",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"Kunde Nr.: \".concat(company.client_number),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.client_name),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.street),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \"\".concat(company.zip_code, \" \").concat(company.city),\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            },\n                            {\n                                text: \" \",\n                                listType: \"none\"\n                            }, \n                        ]\n                    },\n                    {\n                        stack: [\n                            image,\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"e-findo GmbH\"\n                            },\n                            {\n                                text: \"Die Rohstoffkanzlei\"\n                            },\n                            {\n                                text: \"Gerwigstra\\xdfe 12\"\n                            },\n                            {\n                                text: \"78234 Engen\"\n                            },\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"Telefon: +49 (0) 77 33-99 68 95-0\"\n                            },\n                            {\n                                text: \"Fax: +49 (0) 77 33-99 68 95-8\"\n                            },\n                            {\n                                text: \"E-Mail: info@e-findo.de\"\n                            },\n                            {\n                                text: \" \"\n                            },\n                            {\n                                text: \"www.e-findo.de\"\n                            }\n                        ],\n                        alignment: \"left\",\n                        margin: [\n                            150,\n                            0,\n                            0,\n                            0\n                        ],\n                        fontSize: 7.5,\n                        color: \"gray\"\n                    }\n                ]\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \"Proforma Rechnung\",\n                bold: true,\n                color: \"black\",\n                fontSize: 11\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \" \"\n            },\n            {\n                text: \"Wiege Nr.: \".concat(company.client_number, \"-\").concat(parseInt(company.client_number) + document_id)\n            },\n            {\n                text: \"Sorte Nr.: \".concat(sort, \" / Warenart: \").concat(waretype)\n            },\n            {\n                text: \" \"\n            },\n            {\n                table: {\n                    headerRows: 0,\n                    widths: [\n                        \"*\",\n                        \"*\",\n                        \"*\",\n                        \"*\",\n                        \"*\"\n                    ],\n                    body: [\n                        [\n                            \"Monatpreis:\",\n                            {\n                                text: \"€\",\n                                alignment: \"right\"\n                            }\n                        ],\n                        [\n                            \"Abgangsgewicht:\",\n                            {\n                                text: \"\",\n                                alignment: \"right\"\n                            }\n                        ],\n                        [\n                            \"Betrag:\",\n                            {\n                                text: \"€\",\n                                alignment: \"right\"\n                            }\n                        ]\n                    ]\n                }\n            }, \n        ],\n        pageSize: \"A4\",\n        pageMargins: [\n            50,\n            75\n        ],\n        defaultStyle: {\n            fontSize: 9,\n            color: \"#3F3C3E\"\n        },\n        styles: {\n            header: {}\n        }\n    };\n    var createPdf = function() {\n        var object = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var myobj, _tmp;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _tmp = {};\n                            return [\n                                4,\n                                getBase64ImageFromURL(\"/../../e-findo-logo2.jpeg\")\n                            ];\n                        case 1:\n                            myobj = (_tmp.image = _state.sent(), _tmp.width = 39, _tmp.height = 44, _tmp.alignment = \"center\", _tmp);\n                            // @ts-ignore\n                            setImage(myobj);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function object() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        object();\n        // @ts-ignore\n        var pdfGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().createPdf(docDefinition);\n        pdfGenerator.getBlob(function(blob) {\n            var url = URL.createObjectURL(blob);\n            // @ts-ignore\n            setUrl(url);\n            window.open(url, \"_blank\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: createPdf,\n            className: \"underline\",\n            children: \"Rechnung\"\n        }, void 0, false, {\n            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/helpers/proforma.tsx\",\n            lineNumber: 178,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/components/helpers/proforma.tsx\",\n        lineNumber: 177,\n        columnNumber: 9\n    }, _this);\n};\n_s(Proforma, \"pEfUHjd4t0Us7Qq8+zgotITpWoc=\");\n_c = Proforma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Proforma);\nvar _c;\n$RefreshReg$(_c, \"Proforma\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlbHBlcnMvcHJvZm9ybWEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2I7Ozs7O0FBQTRDO0FBQzVDLGFBQWE7QUFDaUM7QUFDSjtBQUUxQ0Esa0VBQVcsR0FBR0MsZ0VBQW9CO0FBRWxDRCxvRUFBYSxHQUFHO0lBQ1pNLE9BQU8sRUFBRTtRQUNMQyxNQUFNLEVBQUUscUJBQXFCO1FBQzdCQyxJQUFJLEVBQUUsb0JBQW9CO0tBQzdCO0lBRUQsOENBQThDO0lBQzlDQyxNQUFNLEVBQUU7UUFDSkYsTUFBTSxFQUFFLHVGQUF1RjtRQUMvRkMsSUFBSSxFQUFFLHNGQUFzRjtRQUM1RkUsT0FBTyxFQUFFLHNGQUFzRjtRQUMvRkMsV0FBVyxFQUFFLDRGQUE0RjtLQUM1RztDQUNKO0FBQ0QsSUFBTUMsUUFBUSxHQUFHLGdCQUE2RjtRQUEzRkMsV0FBVyxTQUFYQSxXQUFXLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7UUFvSXRGQyxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLENBQUNDLEdBQVEsRUFBRTtRQUNyQyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztZQUNwQyxJQUFJQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxFQUFFO1lBQ3JCRCxHQUFHLENBQUNFLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDN0NGLEdBQUcsQ0FBQ0csTUFBTSxHQUFHLFdBQU07Z0JBQ2YsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQzdDRixNQUFNLENBQUNHLEtBQUssR0FBR1AsR0FBRyxDQUFDTyxLQUFLLENBQUM7Z0JBQ3pCSCxNQUFNLENBQUNJLE1BQU0sR0FBR1IsR0FBRyxDQUFDUSxNQUFNLENBQUM7Z0JBQzNCLElBQUlDLEdBQUcsR0FBR0wsTUFBTSxDQUFDTSxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxhQUFhO2dCQUNiRCxHQUFHLENBQUNFLFNBQVMsQ0FBQ1gsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSVksT0FBTyxHQUFHUixNQUFNLENBQUNTLFNBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDZixPQUFPLENBQUNjLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQztZQUNGWixHQUFHLENBQUNjLE9BQU8sR0FBR0MsU0FBQUEsS0FBSyxFQUFJO2dCQUNuQmhCLE1BQU0sQ0FBQ2dCLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztZQUNGZixHQUFHLENBQUNnQixHQUFHLEdBQUdwQixHQUFHLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQXRKRCxJQUEwQnBCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0J5QyxLQUFLLEdBQWN6QyxHQUFZLEdBQTFCLEVBQUUwQyxRQUFRLEdBQUkxQyxHQUFZLEdBQWhCO0lBQ3RCLElBQXNCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQTdCb0IsR0FBRyxHQUFZcEIsSUFBYyxHQUExQixFQUFFMkMsTUFBTSxHQUFJM0MsSUFBYyxHQUFsQjtJQUVsQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTTZDLE1BQU07dUJBQUcsK0ZBQVk7b0JBQ2pCQyxLQUFLOzs7Ozs0QkFDQTs7Z0NBQU0xQixxQkFBcUIsQ0FDOUIsMkJBQTJCLENBQzlCOzhCQUFBOzs0QkFIQzBCLEtBQUssU0FDUEosS0FBSyxHQUFFLGFBRU4sT0FDRFYsS0FBSyxHQUFFLEVBQUUsT0FDVEMsTUFBTSxHQUFFLEVBQUUsT0FDVmMsU0FBUyxHQUFFLE1BQU0sT0FDcEI7NEJBQ0QsYUFBYTs0QkFDYkosUUFBUSxDQUFDRyxLQUFLLENBQUM7Ozs7OztZQUNuQixDQUFDOzRCQVhLRCxNQUFNOzs7V0FXWDtRQUNEQSxNQUFNLEVBQUUsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1HLGFBQWEsR0FBRztRQUNsQkMsT0FBTyxFQUFFO1lBQ0w7Z0JBQUNDLE9BQU8sRUFBRTtvQkFDRjt3QkFBQ0MsS0FBSyxFQUFFOzRCQUNBO2dDQUFDQyxJQUFJLEVBQUUsR0FBRzs2QkFBQzs0QkFDWDtnQ0FBQ0EsSUFBSSxFQUFHLGtFQUFnRTtnQ0FBR0MsUUFBUSxFQUFFLE1BQU07NkJBQUM7NEJBQzVGO2dDQUFDRCxJQUFJLEVBQUcsR0FBQztnQ0FBR0MsUUFBUSxFQUFFLE1BQU07NkJBQUM7NEJBQzdCO2dDQUFDRCxJQUFJLEVBQUUsYUFBWSxDQUF3QixPQUF0Qm5DLE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBRTtnQ0FBRUQsUUFBUSxFQUFFLE1BQU07NkJBQUM7NEJBQy9EO2dDQUFDRCxJQUFJLEVBQUUsRUFBQyxDQUFzQixPQUFwQm5DLE9BQU8sQ0FBQ3NDLFdBQVcsQ0FBRTtnQ0FBRUYsUUFBUSxFQUFFLE1BQU07NkJBQUM7NEJBQ2xEO2dDQUFDRCxJQUFJLEVBQUUsRUFBQyxDQUFpQixPQUFmbkMsT0FBTyxDQUFDdUMsTUFBTSxDQUFFO2dDQUFFSCxRQUFRLEVBQUUsTUFBTTs2QkFBQzs0QkFDN0M7Z0NBQUNELElBQUksRUFBRSxFQUFDLENBQXNCbkMsTUFBWSxDQUFoQ0EsT0FBTyxDQUFDd0MsUUFBUSxFQUFDLEdBQUMsQ0FBZSxRQUFieEMsT0FBTyxDQUFDeUMsSUFBSSxDQUFFO2dDQUFFTCxRQUFRLEVBQUUsTUFBTTs2QkFBQzs0QkFDL0Q7Z0NBQUNELElBQUksRUFBRyxHQUFDO2dDQUFHQyxRQUFRLEVBQUUsTUFBTTs2QkFBQzs0QkFDN0I7Z0NBQUNELElBQUksRUFBRyxHQUFDO2dDQUFHQyxRQUFRLEVBQUUsTUFBTTs2QkFBQzs0QkFDN0I7Z0NBQUNELElBQUksRUFBRyxHQUFDO2dDQUFHQyxRQUFRLEVBQUUsTUFBTTs2QkFBQzs0QkFDN0I7Z0NBQUNELElBQUksRUFBRyxHQUFDO2dDQUFHQyxRQUFRLEVBQUUsTUFBTTs2QkFBQzs0QkFDN0I7Z0NBQUNELElBQUksRUFBRyxHQUFDO2dDQUFHQyxRQUFRLEVBQUUsTUFBTTs2QkFBQzt5QkFDaEM7cUJBQUM7b0JBQ047d0JBQUNGLEtBQUssRUFBRzs0QkFDRFQsS0FBSzs0QkFDTDtnQ0FBQ1UsSUFBSSxFQUFFLEdBQUc7NkJBQUM7NEJBQ1g7Z0NBQUNBLElBQUksRUFBRSxHQUFHOzZCQUFDOzRCQUNYO2dDQUFDQSxJQUFJLEVBQUUsR0FBRzs2QkFBQzs0QkFDWDtnQ0FBQ0EsSUFBSSxFQUFFLGNBQWM7NkJBQUM7NEJBQ3RCO2dDQUFDQSxJQUFJLEVBQUUscUJBQXFCOzZCQUFDOzRCQUM3QjtnQ0FBQ0EsSUFBSSxFQUFFLG9CQUFpQjs2QkFBQzs0QkFDekI7Z0NBQUNBLElBQUksRUFBRSxhQUFhOzZCQUFDOzRCQUNyQjtnQ0FBQ0EsSUFBSSxFQUFFLEdBQUc7NkJBQUM7NEJBQ1g7Z0NBQUNBLElBQUksRUFBRSxtQ0FBbUM7NkJBQUM7NEJBQzNDO2dDQUFDQSxJQUFJLEVBQUUsK0JBQStCOzZCQUFDOzRCQUN2QztnQ0FBQ0EsSUFBSSxFQUFFLHlCQUF5Qjs2QkFBQzs0QkFDakM7Z0NBQUNBLElBQUksRUFBRSxHQUFHOzZCQUFDOzRCQUNYO2dDQUFDQSxJQUFJLEVBQUUsZ0JBQWdCOzZCQUFDO3lCQUMzQjt3QkFBRUwsU0FBUyxFQUFFLE1BQU07d0JBQUVZLE1BQU0sRUFBRTtBQUFDLCtCQUFHO0FBQUUsNkJBQUM7QUFBRSw2QkFBQztBQUFFLDZCQUFDO3lCQUFDO3dCQUFFQyxRQUFRLEVBQUUsR0FBRzt3QkFDM0RDLEtBQUssRUFBRSxNQUFNO3FCQUFDO2lCQUNyQjthQUFDO1lBQ047Z0JBQUNULElBQUksRUFBRyxHQUFDO2FBQUU7WUFDWDtnQkFBQ0EsSUFBSSxFQUFHLEdBQUM7YUFBRTtZQUNYO2dCQUFDQSxJQUFJLEVBQUcsR0FBQzthQUFFO1lBQ1g7Z0JBQUNBLElBQUksRUFBRyxHQUFDO2FBQUU7WUFDWDtnQkFBQ0EsSUFBSSxFQUFHLEdBQUM7YUFBRTtZQUNYO2dCQUFDQSxJQUFJLEVBQUcsR0FBQzthQUFFO1lBQ1g7Z0JBQUNBLElBQUksRUFBRyxHQUFDO2FBQUU7WUFDWDtnQkFBQ0EsSUFBSSxFQUFHLEdBQUM7YUFBRTtZQUNYO2dCQUFDQSxJQUFJLEVBQUcsbUJBQWlCO2dCQUFHOUMsSUFBSSxFQUFFLElBQUk7Z0JBQUV1RCxLQUFLLEVBQUUsT0FBTztnQkFBRUQsUUFBUSxFQUFFLEVBQUU7YUFBQztZQUNyRTtnQkFBQ1IsSUFBSSxFQUFHLEdBQUM7YUFBRTtZQUNYO2dCQUFDQSxJQUFJLEVBQUcsR0FBQzthQUFFO1lBQ1g7Z0JBQUNBLElBQUksRUFBRyxHQUFDO2FBQUU7WUFDWDtnQkFBQ0EsSUFBSSxFQUFFLGFBQVksQ0FBMkJVLE1BQTZDLENBQXRFN0MsT0FBTyxDQUFDcUMsYUFBYSxFQUFDLEdBQUMsQ0FBZ0QsUUFBOUNRLFFBQVEsQ0FBQzdDLE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQyxHQUFHM0MsV0FBVyxDQUFFO2FBQUM7WUFDOUY7Z0JBQUN5QyxJQUFJLEVBQUUsYUFBWSxDQUFzQmxDLE1BQVEsQ0FBNUJDLElBQUksRUFBQyxlQUFhLENBQVcsUUFBVEQsUUFBUSxDQUFFO2FBQUM7WUFDcEQ7Z0JBQUNrQyxJQUFJLEVBQUcsR0FBQzthQUFFO1lBQ1g7Z0JBQUNXLEtBQUssRUFBRTtvQkFFQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2JDLE1BQU0sRUFBRTt3QkFBRSxHQUFHO3dCQUFFLEdBQUc7d0JBQUUsR0FBRzt3QkFBRSxHQUFHO3dCQUFFLEdBQUc7cUJBQUM7b0JBRWxDQyxJQUFJLEVBQUU7d0JBQ0Y7NEJBQUMsYUFBYTs0QkFBRTtnQ0FDWmQsSUFBSSxFQUFHLEdBQUM7Z0NBQ1JMLFNBQVMsRUFBRSxPQUFPOzZCQUNyQjt5QkFBQzt3QkFDRjs0QkFBQyxpQkFBaUI7NEJBQUU7Z0NBQ2hCSyxJQUFJLEVBQUc7Z0NBQ1BMLFNBQVMsRUFBRSxPQUFPOzZCQUNyQjt5QkFBQzt3QkFDRjs0QkFBQyxTQUFTOzRCQUFFO2dDQUNSSyxJQUFJLEVBQUcsR0FBQztnQ0FDUkwsU0FBUyxFQUFFLE9BQU87NkJBQ3JCO3lCQUFDO3FCQUNKO2lCQUVMO2FBQ0o7U0FDSjtRQUVEb0IsUUFBUSxFQUFFLElBQUk7UUFDZEMsV0FBVyxFQUFFO0FBQUMsY0FBRTtBQUFFLGNBQUU7U0FBQztRQUVyQkMsWUFBWSxFQUFFO1lBQ1ZULFFBQVEsRUFBRSxDQUFDO1lBQ1hDLEtBQUssRUFBRSxTQUFTO1NBQ25CO1FBRURTLE1BQU0sRUFBRTtZQUNKQyxNQUFNLEVBQUUsRUFDUDtTQUNKO0tBQ0o7SUFFRCxJQUFNQyxTQUFTLEdBQUcsV0FBTTtRQUNwQixJQUFNM0IsTUFBTTt1QkFBRywrRkFBWTtvQkFDakJDLEtBQUs7Ozs7OzRCQUNBOztnQ0FBTTFCLHFCQUFxQixDQUM5QiwyQkFBMkIsQ0FDOUI7OEJBQUE7OzRCQUhDMEIsS0FBSyxTQUNQSixLQUFLLEdBQUUsYUFFTixPQUNEVixLQUFLLEdBQUUsRUFBRSxPQUNUQyxNQUFNLEdBQUUsRUFBRSxPQUNWYyxTQUFTLEdBQUUsUUFBUSxPQUN0Qjs0QkFDRCxhQUFhOzRCQUNiSixRQUFRLENBQUNHLEtBQUssQ0FBQzs7Ozs7O1lBQ25CLENBQUM7NEJBWEtELE1BQU07OztXQVdYO1FBQ0RBLE1BQU0sRUFBRSxDQUFDO1FBQ1QsYUFBYTtRQUNiLElBQU00QixZQUFZLEdBQUczRSxzRUFBaUIsQ0FBQ2tELGFBQWEsQ0FBQztRQUNyRHlCLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLElBQVMsRUFBSztZQUNoQyxJQUFNdEQsR0FBRyxHQUFHdUQsR0FBRyxDQUFDQyxlQUFlLENBQUNGLElBQUksQ0FBQztZQUNyQyxhQUFhO1lBQ2IvQixNQUFNLENBQUN2QixHQUFHLENBQUM7WUFDWHlELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMUQsR0FBRyxFQUFFLFFBQVEsQ0FBQztRQUM5QixDQUFDLENBQUM7SUFDTixDQUFDO0lBdUJELHFCQUNJLDhEQUFDMkQsS0FBRztrQkFDQSw0RUFBQ0MsUUFBTTtZQUFDQyxPQUFPLEVBQUVWLFNBQVM7WUFBRVcsU0FBUyxFQUFDLFdBQVc7c0JBQUMsVUFFbEQ7Ozs7O2lCQUFTOzs7OzthQUNQLENBQ1Q7QUFDTCxDQUFDO0dBaEtLekUsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBa0tkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9oZWxwZXJzL3Byb2Zvcm1hLnRzeD84ODczIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwZGZNYWtlIGZyb20gJ3BkZm1ha2UvYnVpbGQvcGRmbWFrZSc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcGRmRm9udHMgZnJvbSAncGRmbWFrZS9idWlsZC92ZnNfZm9udHMnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5wZGZNYWtlLnZmcyA9IHBkZkZvbnRzLnBkZk1ha2UudmZzXG5cbnBkZk1ha2UuZm9udHMgPSB7XG4gICAgUG9wcGluczoge1xuICAgICAgICBub3JtYWw6ICdQb3BwaW5zLVJlZ3VsYXIudHRmJyxcbiAgICAgICAgYm9sZDogJ1BvcHBpbnMtTWVkaXVtLnR0ZicsXG4gICAgfSxcblxuICAgIC8vIGRvd25sb2FkIGRlZmF1bHQgUm9ib3RvIGZvbnQgZnJvbSBjZG5qcy5jb21cbiAgICBSb2JvdG86IHtcbiAgICAgICAgbm9ybWFsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGRmbWFrZS8wLjEuNjYvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicsXG4gICAgICAgIGJvbGQ6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wZGZtYWtlLzAuMS42Ni9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYnLFxuICAgICAgICBpdGFsaWNzOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGRmbWFrZS8wLjEuNjYvZm9udHMvUm9ib3RvL1JvYm90by1JdGFsaWMudHRmJyxcbiAgICAgICAgYm9sZGl0YWxpY3M6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wZGZtYWtlLzAuMS42Ni9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bUl0YWxpYy50dGYnXG4gICAgfSxcbn1cbmNvbnN0IFByb2Zvcm1hID0gKHtkb2N1bWVudF9pZCwgYnJ1dHRvLCBuZXR0bywgdGltZXN0YW1wLCB0YXJhLCBtYWNoaW5lX2lkLCBjb21wYW55LCB3YXJldHlwZSwgc29ydH06IGFueSkgPT4ge1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlvYmogPSB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGF3YWl0IGdldEJhc2U2NEltYWdlRnJvbVVSTChcbiAgICAgICAgICAgICAgICAgICAgXCIvLi4vLi4vZS1maW5kby1sb2dvMi5qcGVnXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0LFxuICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ2xlZnQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzZXRJbWFnZShteW9iailcbiAgICAgICAgfVxuICAgICAgICBvYmplY3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBkb2NEZWZpbml0aW9uID0ge1xuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICB7Y29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICB7c3RhY2s6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJyAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYGUtZmluZG8gR21iSCAtIERpZSBSb2hzdG9mZmthbnpsZWkgLSBHZXJ3aWdzdHIuIDEyIC0gNzgyMzQgRW5nZW5gLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYEt1bmRlIE5yLjogJHtjb21wYW55LmNsaWVudF9udW1iZXJ9YCwgbGlzdFR5cGU6ICdub25lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6IGAke2NvbXBhbnkuY2xpZW50X25hbWV9YCwgbGlzdFR5cGU6ICdub25lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6IGAke2NvbXBhbnkuc3RyZWV0fWAsIGxpc3RUeXBlOiAnbm9uZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBgJHtjb21wYW55LnppcF9jb2RlfSAke2NvbXBhbnkuY2l0eX1gLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogYCBgLCBsaXN0VHlwZTogJ25vbmUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICB7c3RhY2sgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdlLWZpbmRvIEdtYkgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ0RpZSBSb2hzdG9mZmthbnpsZWknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ0dlcndpZ3N0cmHDn2UgMTInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJzc4MjM0IEVuZ2VuJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICcgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdUZWxlZm9uOiArNDkgKDApIDc3IDMzLTk5IDY4IDk1LTAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGV4dDogJ0ZheDogKzQ5ICgwKSA3NyAzMy05OSA2OCA5NS04J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdFLU1haWw6IGluZm9AZS1maW5kby5kZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnICd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnd3d3LmUtZmluZG8uZGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSwgYWxpZ25tZW50OiAnbGVmdCcsIG1hcmdpbjogWzE1MCwgMCwgMCwgMF0sIGZvbnRTaXplOiA3LjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgUHJvZm9ybWEgUmVjaG51bmdgLCBib2xkOiB0cnVlLCBjb2xvcjogJ2JsYWNrJywgZm9udFNpemU6IDExfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgIGB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGV4dDogYCBgfSxcbiAgICAgICAgICAgIHt0ZXh0OiBgV2llZ2UgTnIuOiAke2NvbXBhbnkuY2xpZW50X251bWJlcn0tJHtwYXJzZUludChjb21wYW55LmNsaWVudF9udW1iZXIpICsgZG9jdW1lbnRfaWR9YH0sXG4gICAgICAgICAgICB7dGV4dDogYFNvcnRlIE5yLjogJHtzb3J0fSAvIFdhcmVuYXJ0OiAke3dhcmV0eXBlfWB9LFxuICAgICAgICAgICAge3RleHQ6IGAgYH0sXG4gICAgICAgICAgICB7dGFibGU6IHtcblxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJSb3dzOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aHM6IFsgJyonLCAnKicsICcqJywgJyonLCAnKiddLFxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnTW9uYXRwcmVpczonLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYOKCrGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnQWJnYW5nc2dld2ljaHQ6Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ0JldHJhZzonLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYOKCrGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcblxuICAgICAgICBwYWdlU2l6ZTogJ0E0JyxcbiAgICAgICAgcGFnZU1hcmdpbnM6IFs1MCwgNzVdLFxuXG4gICAgICAgIGRlZmF1bHRTdHlsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgICAgICBjb2xvcjogJyMzRjNDM0UnXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVQZGYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG15b2JqID0ge1xuICAgICAgICAgICAgICAgIGltYWdlOiBhd2FpdCBnZXRCYXNlNjRJbWFnZUZyb21VUkwoXG4gICAgICAgICAgICAgICAgICAgIFwiLy4uLy4uL2UtZmluZG8tbG9nbzIuanBlZ1wiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMzksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzZXRJbWFnZShteW9iailcbiAgICAgICAgfVxuICAgICAgICBvYmplY3QoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBwZGZHZW5lcmF0b3IgPSBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKTtcbiAgICAgICAgcGRmR2VuZXJhdG9yLmdldEJsb2IoKGJsb2I6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2V0VXJsKHVybClcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmFzZTY0SW1hZ2VGcm9tVVJMKHVybDogYW55KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY3Jvc3NPcmlnaW5cIiwgXCJhbm9ueW1vdXNcIik7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlUGRmfSBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICBSZWNobnVuZ1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZm9ybWE7XG5cblxuIl0sIm5hbWVzIjpbInBkZk1ha2UiLCJwZGZGb250cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidmZzIiwiZm9udHMiLCJQb3BwaW5zIiwibm9ybWFsIiwiYm9sZCIsIlJvYm90byIsIml0YWxpY3MiLCJib2xkaXRhbGljcyIsIlByb2Zvcm1hIiwiZG9jdW1lbnRfaWQiLCJicnV0dG8iLCJuZXR0byIsInRpbWVzdGFtcCIsInRhcmEiLCJtYWNoaW5lX2lkIiwiY29tcGFueSIsIndhcmV0eXBlIiwic29ydCIsImdldEJhc2U2NEltYWdlRnJvbVVSTCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1nIiwiSW1hZ2UiLCJzZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJkYXRhVVJMIiwidG9EYXRhVVJMIiwib25lcnJvciIsImVycm9yIiwic3JjIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNldFVybCIsIm9iamVjdCIsIm15b2JqIiwiYWxpZ25tZW50IiwiZG9jRGVmaW5pdGlvbiIsImNvbnRlbnQiLCJjb2x1bW5zIiwic3RhY2siLCJ0ZXh0IiwibGlzdFR5cGUiLCJjbGllbnRfbnVtYmVyIiwiY2xpZW50X25hbWUiLCJzdHJlZXQiLCJ6aXBfY29kZSIsImNpdHkiLCJtYXJnaW4iLCJmb250U2l6ZSIsImNvbG9yIiwicGFyc2VJbnQiLCJ0YWJsZSIsImhlYWRlclJvd3MiLCJ3aWR0aHMiLCJib2R5IiwicGFnZVNpemUiLCJwYWdlTWFyZ2lucyIsImRlZmF1bHRTdHlsZSIsInN0eWxlcyIsImhlYWRlciIsImNyZWF0ZVBkZiIsInBkZkdlbmVyYXRvciIsImdldEJsb2IiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwid2luZG93Iiwib3BlbiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/helpers/proforma.tsx\n"));

/***/ })

});