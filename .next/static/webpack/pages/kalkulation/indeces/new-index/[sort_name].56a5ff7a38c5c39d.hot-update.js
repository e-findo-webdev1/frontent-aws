"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kalkulation/indeces/new-index/[sort_name]",{

/***/ "./pages/kalkulation/indeces/new-index/[sort_name].tsx":
/*!*************************************************************!*\
  !*** ./pages/kalkulation/indeces/new-index/[sort_name].tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/helpers/fromHex */ \"./pages/components/helpers/fromHex.tsx\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NewIndex = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var pid = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), indexName = ref[0], setIndexName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        sort_name: \"\",\n        description: \"\",\n        indexgroup_name: \"\",\n        indeces: []\n    }), sort = ref1[0], setSort = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), priceMatrix = ref2[0], setPriceMatrix = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"Januar\": {},\n        \"Februar\": {},\n        \"M\\xe4rz\": {},\n        \"April\": {},\n        \"Mai\": {},\n        \"Juni\": {},\n        \"Juli\": {},\n        \"August\": {},\n        \"September\": {},\n        \"Oktober\": {},\n        \"November\": {},\n        \"Dezember\": {}\n    }), prices = ref3[0], setPrices = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var apiName = \"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts\";\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(apiName).then(function(response) {\n            setSort(response.data.Items.filter(function(sort) {\n                return sort.sort_name == (0,_components_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pid.sort_name);\n            })[0]);\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices\").then(function(response) {\n            setPriceMatrix(response.data.Items.filter(function(matrix) {\n                return matrix.price_matrix == (0,_components_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pid.sort_name);\n            })[0]);\n        }).catch(function(error) {\n            console.log(error.response);\n        });\n    }, []);\n    var onSubmitHandler = function(event) {\n        event.preventDefault();\n        setPrices({\n            \"Januar\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"Februar\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"M\\xe4rz\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"April\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"Mai\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"Juni\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"Juli\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"August\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"September\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"Oktober\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"November\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0)),\n            \"Dezember\": (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, prices), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, indexName, 0))\n        });\n        var indeces;\n        {\n            priceMatrix.indeces ? indeces = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(priceMatrix.indeces).concat([\n                indexName\n            ]) : indeces = [\n                indexName\n            ];\n        }\n        sendData(indeces);\n    };\n    var sendData = function(indeces) {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices\", {\n            price_matrix: sort.sort_name,\n            indexgroup_name: sort.indexgroup_name,\n            indeces: indeces,\n            prices: prices\n        }).then(function(response) {\n            console.log(response);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/kalkulation/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs\",\n                    children: \"← Zur\\xfcck\"\n                }, void 0, false, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-9 mb-2 text-3xl font-bold\",\n                children: \"Index bearbeiten\"\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: onSubmitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border rounded pl-2.5 py-0.5 mr-1\",\n                            onChange: function(e) {\n                                return setIndexName(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-2 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border mt-5\",\n                            children: \"Speichern\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adrianbrodzinski/Desktop/new-mcs-frontend/frontent-aws/pages/kalkulation/indeces/new-index/[sort_name].tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, _this);\n};\n_s(NewIndex, \"eo8ZW2FYacp4puHzwrTtHHABYi8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewIndex);\nvar _c;\n$RefreshReg$(_c, \"NewIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9rYWxrdWxhdGlvbi9pbmRlY2VzL25ldy1pbmRleC9bc29ydF9uYW1lXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBaUQ7QUFDekI7QUFDSztBQUNTO0FBQ29CO0FBRzFELElBQU1PLFFBQVEsR0FBRyxXQUFNOztJQUNuQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBTUksR0FBRyxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFFeEIsSUFBa0NSLEdBQWUsR0FBZkEsK0NBQVEsRUFBTyxFQUExQ1MsU0FBUyxHQUFrQlQsR0FBZSxHQUFqQyxFQUFFVSxZQUFZLEdBQUlWLEdBQWUsR0FBbkI7SUFDOUIsSUFBd0JBLElBR3ZCLEdBSHVCQSwrQ0FBUSxDQUM1QjtRQUNJVyxTQUFTLEVBQUUsRUFBRTtRQUFFQyxXQUFXLEVBQUUsRUFBRTtRQUFFQyxlQUFlLEVBQUUsRUFBRTtRQUFFQyxPQUFPLEVBQUUsRUFBRTtLQUFDLENBQ3hFLEVBSE1DLElBQUksR0FBYWYsSUFHdkIsR0FIVSxFQUFFZ0IsT0FBTyxHQUFJaEIsSUFHdkIsR0FIbUI7SUFJcEIsSUFBc0NBLElBQWUsR0FBZkEsK0NBQVEsRUFBTyxFQUE5Q2lCLFdBQVcsR0FBb0JqQixJQUFlLEdBQW5DLEVBQUVrQixjQUFjLEdBQUlsQixJQUFlLEdBQW5CO0lBQ2xDLElBQTRCQSxJQWUzQixHQWYyQkEsK0NBQVEsQ0FDaEM7UUFDSSxRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFF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LENBQUM7NkJBQUE7Ozs7O2lDQUNwQztzQ0FDSCw4REFBQ1IsUUFBTTs0QkFBQ0YsU0FBUyxFQUFDLDJIQUNrQjtzQ0FBQyxXQUN4Qjs7Ozs7aUNBQVM7Ozs7Ozt5QkFDbkI7Ozs7O3FCQUNMOzs7Ozs7YUFDSixDQUNUO0FBQ0wsQ0FBQztHQXhHS25DLFFBQVE7O1FBQ0tGLGtEQUFTOzs7QUFEdEJFLEtBQUFBLFFBQVE7QUEwR2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2Fsa3VsYXRpb24vaW5kZWNlcy9uZXctaW5kZXgvW3NvcnRfbmFtZV0udHN4PzhjNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZyb21IZXggZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVscGVycy9mcm9tSGV4XCI7XG5cblxuY29uc3QgTmV3SW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBwaWQgPSByb3V0ZXIucXVlcnlcblxuICAgIGNvbnN0IFtpbmRleE5hbWUsIHNldEluZGV4TmFtZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGU8YW55PihcbiAgICAgICAge1xuICAgICAgICAgICAgc29ydF9uYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgaW5kZXhncm91cF9uYW1lOiBcIlwiLCBpbmRlY2VzOiBbXX1cbiAgICApO1xuICAgIGNvbnN0IFtwcmljZU1hdHJpeCwgc2V0UHJpY2VNYXRyaXhdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZTxhbnk+KFxuICAgICAgICB7XG4gICAgICAgICAgICAnSmFudWFyJzoge30sXG4gICAgICAgICAgICAnRmVicnVhcic6IHt9LFxuICAgICAgICAgICAgJ03DpHJ6Jzoge30sXG4gICAgICAgICAgICAnQXByaWwnOiB7fSxcbiAgICAgICAgICAgICdNYWknOiB7fSxcbiAgICAgICAgICAgICdKdW5pJzoge30sXG4gICAgICAgICAgICAnSnVsaSc6IHt9LFxuICAgICAgICAgICAgJ0F1Z3VzdCc6IHt9LFxuICAgICAgICAgICAgJ1NlcHRlbWJlcic6IHt9LFxuICAgICAgICAgICAgJ09rdG9iZXInOiB7fSxcbiAgICAgICAgICAgICdOb3ZlbWJlcic6IHt9LFxuICAgICAgICAgICAgJ0RlemVtYmVyJzoge31cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBpTmFtZSA9ICdodHRwczovLzh2OWpxdHM5ODkuZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vc29ydHMnO1xuXG4gICAgICAgIEFQSS5nZXQoYXBpTmFtZSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNvcnQocmVzcG9uc2UuZGF0YS5JdGVtcy5maWx0ZXIoKHNvcnQ6IGFueSkgPT4gc29ydC5zb3J0X25hbWUgPT0gZnJvbUhleChwaWQuc29ydF9uYW1lKSlbMF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIEFQSS5nZXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9wcmljZS1tYXRyaWNlcycpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQcmljZU1hdHJpeChyZXNwb25zZS5kYXRhLkl0ZW1zLmZpbHRlcigobWF0cml4OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5wcmljZV9tYXRyaXggPT0gZnJvbUhleChwaWQuc29ydF9uYW1lKSlbMF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRQcmljZXMoe1xuICAgICAgICAgICAgJ0phbnVhcic6IHsuLi5wcmljZXMsIFtpbmRleE5hbWVdOiAwfSxcbiAgICAgICAgICAgICdGZWJydWFyJzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ03DpHJ6Jzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ0FwcmlsJzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ01haSc6IHsuLi5wcmljZXMsIFtpbmRleE5hbWVdOiAwfSxcbiAgICAgICAgICAgICdKdW5pJzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ0p1bGknOiB7Li4ucHJpY2VzLCBbaW5kZXhOYW1lXTogMH0sXG4gICAgICAgICAgICAnQXVndXN0Jzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ1NlcHRlbWJlcic6IHsuLi5wcmljZXMsIFtpbmRleE5hbWVdOiAwfSxcbiAgICAgICAgICAgICdPa3RvYmVyJzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ05vdmVtYmVyJzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9LFxuICAgICAgICAgICAgJ0RlemVtYmVyJzogey4uLnByaWNlcywgW2luZGV4TmFtZV06IDB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBpbmRlY2VzXG4gICAgICAgIHtwcmljZU1hdHJpeC5pbmRlY2VzID8gaW5kZWNlcyA9IFsuLi5wcmljZU1hdHJpeC5pbmRlY2VzLCBpbmRleE5hbWVdIDogaW5kZWNlcyA9IFtpbmRleE5hbWVdfVxuICAgICAgICBzZW5kRGF0YShpbmRlY2VzKVxuICAgIH1cblxuXG4gICAgY29uc3Qgc2VuZERhdGEgPSAoaW5kZWNlczogYW55KSA9PiB7XG4gICAgICAgIEFQSS5wdXQoJ2h0dHBzOi8vOHY5anF0czk4OS5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9wcmljZS1tYXRyaWNlcycsXG4gICAgICAgICAgICB7cHJpY2VfbWF0cml4OiBzb3J0LnNvcnRfbmFtZSwgaW5kZXhncm91cF9uYW1lOiBzb3J0LmluZGV4Z3JvdXBfbmFtZSxcbiAgICAgICAgICAgICAgICBpbmRlY2VzOiBpbmRlY2VzLCBwcmljZXM6IHByaWNlc30pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yMFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIva2Fsa3VsYXRpb24vXCJ9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgYm9yZGVyIG1sLWF1dG8gcC0xLjUgcHgtMy41IGZvbnQtYm9sZCBib3JkZXItYWNjZW50LWNvbG9yLTEgYmctYWNjZW50LWNvbG9yLTRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWFjY2VudC1jb2xvci01IHNtOnJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQteHNcIj7ihpAgWnVyw7xja1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOSBtYi0yIHRleHQtM3hsIGZvbnQtYm9sZFwiPkluZGV4IGJlYXJiZWl0ZW48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHBsLTIuNSBweS0wLjUgbXItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbmRleE5hbWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiBmb250LWJvbGQgdGV4dC14cyBib3JkZXItYWNjZW50LWNvbG9yLTEgYmctYWNjZW50LWNvbG9yLTQgaG92ZXI6YmctYWNjZW50LWNvbG9yLTVcbiAgICAgICAgICAgICAgICAgICAgc206cm91bmRlZC1sZyBzaGFkb3ctbWQgYm9yZGVyIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNwZWljaGVybjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0luZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJMaW5rIiwidXNlUm91dGVyIiwiZnJvbUhleCIsIk5ld0luZGV4Iiwicm91dGVyIiwicGlkIiwicXVlcnkiLCJpbmRleE5hbWUiLCJzZXRJbmRleE5hbWUiLCJzb3J0X25hbWUiLCJkZXNjcmlwdGlvbiIsImluZGV4Z3JvdXBfbmFtZSIsImluZGVjZXMiLCJzb3J0Iiwic2V0U29ydCIsInByaWNlTWF0cml4Iiwic2V0UHJpY2VNYXRyaXgiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJhcGlOYW1lIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIkl0ZW1zIiwiZmlsdGVyIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXRyaXgiLCJwcmljZV9tYXRyaXgiLCJvblN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VuZERhdGEiLCJwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYnV0dG9uIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/kalkulation/indeces/new-index/[sort_name].tsx\n"));

/***/ })

});