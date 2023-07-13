// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts'
import {useEffect, useState} from "react";
import moment from "moment";
import API from "axios";
pdfMake.vfs = pdfFonts.pdfMake.vfs
pdfMake.fonts = {
    Poppins: {
        normal: 'Poppins-Regular.ttf',
        bold: 'Poppins-Medium.ttf',
    },

    // download default Roboto font from cdnjs.com
    Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
    },
}
const Proforma = ({document_id, brutto, netto, timestamp, tara, machine_id, company, waretype, sort}: any) => {
    const monthsList = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ]

    const [image, setImage] = useState('');
    const [url, setUrl] = useState(null)
    const [controlDocument, setControlDocument] = useState<any>();
    const [machineData, setMachineData] = useState<any>();

    useEffect(() => {
        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
            .then((response) => {
                setControlDocument(response.data.Items.filter((document: any) => document.document_id == document_id));
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
            .then((response) => {
                setMachineData(response.data.Items.filter((machine: any) => machine.machine_id == machine_id));
            })
            .catch((error) => {
                console.log(error.response);
            });

        const object = async () => {
            const myobj = {
                image: await getBase64ImageFromURL(
                    "/../../e-findo-logo2.jpeg"
                ),
                width: 39,
                height: 44,
                alignment: 'left'
            }
            // @ts-ignore
            setImage(myobj)
        }
        object();
    }, []);

    const docDefinition = {
        content: [
            {columns: [
                    {stack: [
                            {text: ' '},
                            {text: `e-findo GmbH - Die Rohstoffkanzlei - Gerwigstr. 12 - 78234 Engen`, listType: 'none',
                                },
                            {text: ` `, listType: 'none'},
                            {text: `Kunde Nr.: ${company.client_number}`, listType: 'none'},
                            {text: `${company.client_name}`, listType: 'none'},
                            {text: `${company.street}`, listType: 'none'},
                            {text: `${company.zip_code} ${company.city}`, listType: 'none'},
                            {text: ` `, listType: 'none'},
                            {text: ` `, listType: 'none'},
                            {text: ` `, listType: 'none'},
                            {text: ` `, listType: 'none'},
                            {text: ` `, listType: 'none'},
                            ],fontSize: 8},
                    {stack : [
                            image,
                            {text: ' '},
                            {text: ' '},
                            {text: ' '},
                            {text: 'e-findo GmbH'},
                            {text: 'Die Rohstoffkanzlei'},
                            {text: 'Gerwigstraße 12'},
                            {text: '78234 Engen'},
                            {text: ' '},
                            {text: 'Telefon: +49 (0) 77 33-99 68 95-0'},
                            {text: 'Fax: +49 (0) 77 33-99 68 95-8'},
                            {text: 'E-Mail: info@e-findo.de'},
                            {text: ' '},
                            {text: 'www.e-findo.de'}
                        ], alignment: 'left', margin: [140, 0, 0, 0], fontSize: 7,
                        color: 'gray'}
                ]},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: `Proforma Rechnung`, bold: true, color: 'black', fontSize: 11},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: `Wiege Nr.: ${company.client_number}-${parseInt(company.client_number) + document_id}`},
            {text: `Sorte Nr.: ${sort} / Warenart: ${waretype}`},
            {text: ` `},
            {table: {

                    headerRows: 0,
                    widths: [ '*', '*', '*', '*', '*'],

                    body: [
                        ['Monatpreis:', {
                            text: `${machineData[0].price_list.prices[moment(controlDocument.endOfCycle).year()]
                                [monthsList[moment(controlDocument.endOfCycle).month()]]} €`,
                            alignment: 'right'
                        }],
                        ['Abgangsgewicht:', {
                            text: `${netto - tara}`,
                            alignment: 'right'
                        }],
                        ['Betrag:', {
                            text: `${((netto - tara) * machineData[0].price_list.prices[moment(controlDocument.endOfCycle).year()]
                                [monthsList[moment(controlDocument.endOfCycle).month()]] / 1000).toFixed(2)}€`,
                            alignment: 'right'
                        }]
                     ]

                }
            },
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {columns: [
                    {stack: [,
                        ]},
                    {stack : [
                            {text: 'Geschaftsfuhrer: Armin Maier'},
                            {text: ` `},
                            {text: 'USt.IdNr.: DE232031140'},
                            {text: ` `},
                            {text: 'Registergericht:'},
                            {text: ` `},
                            {text: 'Freiburg HRB542006'},
                            {text: ` `},
                            {text: 'Bank: Sparkasse'},
                            {text: ` `},
                            {text: 'Engen-Gottmadingen'},
                            {text: ` `},
                            {text: 'BIC & IBAN: SOLADES1ENG,'},
                            {text: ` `},
                            {text: 'DE47 6925 1445 0005 6008 04'},
                        ], alignment: 'left', margin: [140, 0, 0, 0], fontSize: 7,
                        color: 'gray'}
                ]}
        ],

        pageSize: 'A4',
        pageMargins: [50, 75],

        defaultStyle: {
            fontSize: 9,
            color: '#3F3C3E'
        },

        styles: {
            header: {
            }
        }
    };

    const createPdf = () => {
        const object = async () => {
            const myobj = {
                image: await getBase64ImageFromURL(
                    "/../../e-findo-logo2.jpeg"
                ),
                width: 39,
                height: 44,
                alignment: 'center'
            }
            // @ts-ignore
            setImage(myobj)
        }
        object();
        // @ts-ignore
        const pdfGenerator = pdfMake.createPdf(docDefinition);
        pdfGenerator.getBlob((blob: any) => {
            const url = URL.createObjectURL(blob)
            // @ts-ignore
            setUrl(url)
            window.open(url, '_blank')
        })
    }

    function getBase64ImageFromURL(url: any) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = () => {
                let canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                let ctx = canvas.getContext("2d");
                // @ts-ignore
                ctx.drawImage(img, 0, 0);
                let dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
            };
            img.onerror = error => {
                reject(error);
            };
            img.src = url;
        });
    }

    return (
        <div>
            <button onClick={createPdf} className="underline">
                Rechnung
            </button>
        </div>
    )
}

export default Proforma;


