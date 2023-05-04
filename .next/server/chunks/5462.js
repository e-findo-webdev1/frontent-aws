"use strict";
exports.id = 5462;
exports.ids = [5462];
exports.modules = {

/***/ 5462:
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



const navigationLinks = [
    {
        name: "Start",
        link: "/",
        image: "/home-svgrepo-com.svg"
    },
    {
        name: "Stammdaten",
        link: "/master-data/0",
        image: ""
    },
    //{
    //    name: "Lagersysteme",
    //    link: "/storage-systems",
    //    image: ""
    //},
    {
        name: "Reporting",
        link: "/reporting",
        image: ""
    },
    {
        name: "Kalkulation",
        link: "/kalkulation",
        image: ""
    },
    {
        name: "News",
        link: "/news",
        image: ""
    },
    {
        name: "Impressum",
        link: "/impressum",
        image: ""
    }
];
const NavigationLinks = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "links",
        className: "ml-10 text-xs flex",
        children: navigationLinks.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex m-auto",
                id: link.name,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: link.link,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex px-3 py-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "mr-1.5 mb-1.5 h-4",
                                    src: link.image
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "m-auto",
                                    children: link.name
                                })
                            ]
                        })
                    })
                }, link.name)
            }, link.name))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationLinks);


/***/ })

};
;