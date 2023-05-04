"use strict";
exports.id = 1245;
exports.ids = [1245];
exports.modules = {

/***/ 1245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5989);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7788);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
// @ts-ignore


// @ts-ignore



(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().vfs) = (pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default().pdfMake.vfs);
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().fonts) = {
    Poppins: {
        normal: "Poppins-Regular.ttf",
        bold: "Poppins-Medium.ttf"
    },
    // download default Roboto font from cdnjs.com
    Roboto: {
        normal: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
        bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
        italics: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
        bolditalics: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf"
    }
};
const PDF = ({ document_id , brutto , netto , timestamp , tara , machine_id , company , waretype , sort  })=>{
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const object = async ()=>{
            const myobj = {
                image: await getBase64ImageFromURL("/../../e-findo-logo2.jpeg"),
                width: 39,
                height: 44,
                alignment: "center"
            };
            // @ts-ignore
            setImage(myobj);
        };
        object();
    }, []);
    const docDefinition = {
        content: [
            {
                columns: [
                    {
                        stack: [
                            {
                                text: " "
                            },
                            {
                                text: `MCS - Money Control System`,
                                listType: "none"
                            },
                            {
                                text: ` `,
                                listType: "none"
                            },
                            {
                                text: `Lieferant Nr.: ${company.client_number}`,
                                listType: "none"
                            },
                            {
                                text: `${company.client_name}`,
                                listType: "none"
                            },
                            {
                                text: `${company.street}`,
                                listType: "none"
                            },
                            {
                                text: `${company.zip_code} ${company.city}`,
                                listType: "none"
                            },
                            {
                                text: ` `,
                                listType: "none"
                            },
                            {
                                text: ` `,
                                listType: "none"
                            },
                            {
                                text: `Empfänger:`,
                                listType: "none"
                            },
                            {
                                text: `Rail Kontor AG`,
                                listType: "none"
                            },
                            {
                                text: `Kesselerlochstrasse 126`,
                                listType: "none"
                            },
                            {
                                text: `CH- 8240 Thayingen`,
                                listType: "none"
                            }, 
                        ]
                    },
                    {
                        stack: [
                            image,
                            {
                                text: " "
                            },
                            {
                                text: "www.e-findo.de"
                            }
                        ],
                        alignment: "center",
                        margin: [
                            100,
                            0,
                            0,
                            0
                        ],
                        fontSize: 8,
                        color: "gray"
                    }
                ]
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: `Gewichtskontrollschein`,
                bold: true,
                color: "black",
                fontSize: 11
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: `Wiege Nr.: ${company.client_number}-${parseInt(company.client_number) + document_id}`
            },
            {
                text: `Sorte Nr.: ${sort} / Warenart: ${waretype}`
            },
            {
                text: ` `
            },
            {
                table: {
                    headerRows: 1,
                    widths: [
                        "*",
                        "*",
                        "*",
                        "*",
                        "*"
                    ],
                    body: [
                        [
                            "Datum",
                            "Masch.ID",
                            "Uhrzeit",
                            "Lfd. Nr.",
                            {
                                text: "Gewicht in kg",
                                alignment: "right"
                            }, 
                        ],
                        [
                            `${moment__WEBPACK_IMPORTED_MODULE_4___default()(timestamp).format("DD.MM.yyyy")}`,
                            `${machine_id}`,
                            `${moment__WEBPACK_IMPORTED_MODULE_4___default()(timestamp).format("HH:mm")}`,
                            `${document_id}`,
                            [
                                {
                                    columns: [
                                        {
                                            width: "*",
                                            text: "Brutto"
                                        },
                                        {
                                            width: "*",
                                            text: `${brutto}`,
                                            alignment: "right"
                                        }, 
                                    ]
                                },
                                {
                                    columns: [
                                        {
                                            width: "*",
                                            text: "Tara"
                                        },
                                        {
                                            width: "*",
                                            text: `${tara}`,
                                            alignment: "right"
                                        }, 
                                    ]
                                },
                                {
                                    columns: [
                                        {
                                            width: "*",
                                            text: "Netto"
                                        },
                                        {
                                            width: "*",
                                            text: `${netto}`,
                                            alignment: "right"
                                        }, 
                                    ]
                                }, 
                            ], 
                        ], 
                    ]
                }
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: `Bemerkung:`
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: `Die Übernahme erfolgt vorbehaltlich der Befundfeststellung` + ` und/oder verdeckter Mängel, da eine Sofortkontrolle nicht` + ` möglich ist. Diese werden innerhalb drei Werktagen bekannt` + ` gegeben. Dastatsächlich geeichte Gewicht wird im Empfangswerk` + ` ermittelt.`
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                columns: [
                    {
                        width: "*",
                        text: "Fahrzeug-Kennzeichen:"
                    },
                    {
                        width: "*",
                        text: `Ware übernommen: ${moment__WEBPACK_IMPORTED_MODULE_4___default()().format("DD.MM.YYYY")}`,
                        alignment: "left"
                    }, 
                ]
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                text: ` `
            },
            {
                columns: [
                    {
                        width: "*",
                        text: "Unterschrift Abgeber"
                    },
                    {
                        width: "*",
                        text: "Unterschrift Fr\xe4chter",
                        alignment: "left"
                    }, 
                ]
            }, 
        ],
        pageSize: "A4",
        pageMargins: [
            50,
            75
        ],
        defaultStyle: {
            fontSize: 9,
            color: "#3F3C3E"
        },
        styles: {
            header: {}
        }
    };
    const createPdf = ()=>{
        const object = async ()=>{
            const myobj = {
                image: await getBase64ImageFromURL("/../../e-findo-logo2.jpeg"),
                width: 39,
                height: 44,
                alignment: "center"
            };
            // @ts-ignore
            setImage(myobj);
        };
        object();
        // @ts-ignore
        const pdfGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default().createPdf(docDefinition);
        pdfGenerator.getBlob((blob)=>{
            const url = URL.createObjectURL(blob);
            // @ts-ignore
            setUrl(url);
            window.open(url, "_blank");
        });
    };
    function getBase64ImageFromURL(url) {
        return new Promise((resolve, reject)=>{
            let img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = ()=>{
                let canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                let ctx = canvas.getContext("2d");
                // @ts-ignore
                ctx.drawImage(img, 0, 0);
                let dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
            };
            img.onerror = (error)=>{
                reject(error);
            };
            img.src = url;
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: createPdf,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "h-5",
                src: "/download-svgrepo-com.svg"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PDF);


/***/ })

};
;