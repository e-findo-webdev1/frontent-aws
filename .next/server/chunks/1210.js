"use strict";
exports.id = 1210;
exports.ids = [1210,4459];
exports.modules = {

/***/ 8422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fromHex(hex) {
    const str = decodeURI(decodeURIComponent(hex.replace(/(..)/g, "%$1")));
    return str;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fromHex);


/***/ }),

/***/ 6552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8422);





const Breadcrumbs = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const pid = router.query;
    const routerArray = router.pathname.split("/").slice(1);
    const { 0: decodedName , 1: setDecodedName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: sortName , 1: setSortName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: clientId , 1: setClientId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(JSON.parse(sessionStorage.getItem("company")).client_id);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (pid.indexgroup_name != undefined) {
            setDecodedName((0,_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__["default"])(pid.indexgroup_name));
        }
        if (pid.sort_name != undefined) {
            setSortName((0,_helpers_fromHex__WEBPACK_IMPORTED_MODULE_4__["default"])(pid.sort_name));
        }
    }, [
        pid
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex ml-20 my-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "inline-flex items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                            children: [
                                "Home",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "w-6 h-6 text-gray-400",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    })
                                })
                            ]
                        })
                    })
                }),
                routerArray.map((route, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "inline-flex items-center capitalize",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/" + route.replace("/", "").replace("[id]", pid.id).replace("[client_id]", pid.id).replace("shift-calendar", "master-data/shift-calendar").replace("master-data", "master-data/" + clientId).replace("edit-client", "master-data/edit-client/" + clientId).replace("new-machine", "master-data/new-machine").replace("shift-manager", "master-data/shift-manager").replace("[client]", ""),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                                    children: pid ? route.replace("-", " ").replace("/", "").replace("[client]", "").replace("[id]", pid.id).replace("[client_id]", pid.client_id).replace("[user]", pid.user).replace("[indexgroup_name]", decodedName).replace("[sort_name]", sortName) : ""
                                })
                            }),
                            key < routerArray.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-6 h-6 text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                })
                            }) : ""
                        ]
                    }, "key"))
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ })

};
;