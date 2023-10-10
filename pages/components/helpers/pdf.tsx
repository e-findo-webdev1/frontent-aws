// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts'
import {useEffect, useState} from "react";
import moment from "moment";
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
const PDF = ({document_id, brutto, netto, timestamp, tara, machine_id, company, waretype, sort, endOfCycle}: any) => {
    const [image, setImage] = useState('');
    const [url, setUrl] = useState(null)

    useEffect(() => {
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
    }, []);

    const docDefinition = {
        content: [
            {columns: [
                {stack: [
                    {text: ' '},
                    {text: `MCS - Money Control System`, listType: 'none'},
                    {text: ` `, listType: 'none'},
                    {text: `Lieferant Nr.: ${company.client_number}`, listType: 'none'},
                    {text: `${company.client_name}`, listType: 'none'},
                    {text: `${company.street}`, listType: 'none'},
                    {text: `${company.zip_code} ${company.city}`, listType: 'none'},
                    {text: ` `, listType: 'none'},
                    {text: ` `, listType: 'none'},
                    {text: `Empfänger:`, listType: 'none'},
                    {text: `Rail Kontor AG`, listType: 'none'},
                    {text: `Kesselerlochstrasse 126`, listType: 'none'},
                    {text: `CH- 8240 Thayingen`, listType: 'none'},
                ]},
                {stack : [
                        image,
                        {text: ' '},
                        {text: 'www.e-findo.de'}], alignment: 'center', margin: [100, 0, 0, 0], fontSize: 8,
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
            {text: `Gewichtskontrollschein`, bold: true, color: 'black', fontSize: 11},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: `Wiege Nr.: ${company.client_number}-${parseInt(company.client_number) + document_id}`},
            {text: `Sorte Nr.: ${sort} / Warenart: ${waretype}`},
            {text: ` `},
            {table: {

                    headerRows: 1,
                    widths: [ '*', '*', '*', '*', '*'],

                    body: [
                        [ 'Datum', 'Masch.ID', 'Uhrzeit', 'Lfd. Nr.',
                            {text: 'Gewicht in kg', alignment: 'right'},],
                        [ `${moment(timestamp).format('DD.MM.yyyy')}`,
                            `${machine_id}`,
                            `${moment(timestamp).format('HH:mm')}`,
                            `${document_id}`,
                            [
                                {columns: [
                                        {
                                            width: '*',
                                            text: 'Brutto'
                                        },
                                        {
                                            width: '*',
                                            text: `${netto}`,
                                            alignment: 'right'
                                        },
                                    ]},
                                {columns: [
                                        {
                                            width: '*',
                                            text: 'Tara'
                                        },
                                        {
                                            width: '*',
                                            text: `${tara}`,
                                            alignment: 'right'
                                        },
                                    ]},
                                {columns: [
                                        {
                                            width: '*',
                                            text: 'Netto'
                                        },
                                        {
                                            width: '*',
                                            text: `${netto - tara}`,
                                            alignment: 'right'
                                        },
                                    ]},
                            ],
                        ]
                        ,]

                }
            },
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: `Bemerkung:`},
            {text: ` `},
            {text: ` `},
            {text: `Die Übernahme erfolgt vorbehaltlich der Befundfeststellung`
                    + ` und/oder verdeckter Mängel, da eine Sofortkontrolle nicht`
                    + ` möglich ist. Diese werden innerhalb drei Werktagen bekannt`
                    + ` gegeben. Dastatsächlich geeichte Gewicht wird im Empfangswerk`
                    + ` ermittelt.`},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {columns: [
                    {
                        width: '*',
                        text: 'Fahrzeug-Kennzeichen:'
                    },
                    {
                        width: '*',
                        text: `Ware übernommen: ${moment(endOfCycle).format('DD.MM.YYYY')}`,
                        alignment: 'left'
                    },
                ]},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {columns: [
                    {
                        width: '*',
                        text: 'Unterschrift Abgeber'
                    },
                    {
                        width: '*',
                        text: 'Unterschrift Frächter',
                        alignment: 'left'
                    },
                ]},
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
            <button onClick={createPdf}><img className="h-5" src="/download-svgrepo-com.svg"/></button>
        </div>
    )
}

export default PDF;


