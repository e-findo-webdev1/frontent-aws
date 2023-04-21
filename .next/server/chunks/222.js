"use strict";
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const bcrypt = __webpack_require__(8432);
const LoginForm = ({ setIsSubmitted  })=>{
    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: clients , 1: setClients  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let apiName = "https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users";
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(apiName).then((response)=>{
            setUsers(response.data.Items);
        }).catch((error)=>{
            console.log(error.response);
        });
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients").then((response)=>{
            setClients(response.data.Items);
        }).catch((error)=>{
            console.log(error.response);
        });
    }, []);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        // @ts-ignore
        const hash = await users.filter((user)=>user.email == email)[0].password;
        // @ts-ignore
        if (await bcrypt.compare(password, hash) == true) {
            setIsSubmitted(true);
            sessionStorage.setItem("user", JSON.stringify(users.filter((user)=>user.email == email)[0]));
            // @ts-ignore
            sessionStorage.setItem("company", JSON.stringify(clients.filter((client)=>// @ts-ignore
                client.client_id == users.filter((user)=>user.email == email)[0].client_id)[0]));
        } else {
            setError(1);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "content-page",
        className: "mx-10 p-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "mb-7 m-auto h-40",
                src: "/logo-1.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-center justify-center px-6 py-8 lg:py-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-6 space-y-3 sm:p-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-bold text-lg",
                                children: "Sign in to your account"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-red-500 text-md",
                                children: error === 1 ? "Invalid username or password." : ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "space-y-4 md:space-y-6",
                                action: "#",
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "email",
                                                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                children: "Your email"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                name: "email",
                                                id: "email",
                                                className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5",
                                                placeholder: "name@company.com",
                                                required: true,
                                                onChange: (e)=>setEmail(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "password",
                                                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "password",
                                                name: "password",
                                                id: "password",
                                                placeholder: "••••••••",
                                                className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 mb-2",
                                                required: true,
                                                onChange: (e)=>setPassword(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "w-full text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-accent-color-2 hover:bg-accent-color-3",
                                        children: "Sign in"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;