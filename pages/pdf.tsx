// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts'
import {useEffect, useState} from "react";
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
const PDF = () => {
    const [image, setImage] = useState();

    useEffect(() => {
        const object = async () => {
        const myobj = {
            image: await getBase64ImageFromURL(
                "e-findo-logo2.jpeg"
            ),
            width: 39,
            height: 44,
            alignment: 'center'
        }
            // @ts-ignore
            setImage(myobj)
        }
        object();
    });

    const docDefinition = {
        content: [
            {columns: [
                {stack: [
                    {text: ' '},
                    {text: `MCS - Money Control System`, listType: 'none'},
                    {text: ` `, listType: 'none'},
                    {text: `Lieferant Nr.: ${0}`, listType: 'none'},
                    {text: `company name`, listType: 'none'},
                    {text: `street`, listType: 'none'},
                    {text: `zip_code city`, listType: 'none'},
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
            {text: `Wiege Nr.: 0-0`},
            {text: `Sorte Nr.: 0 / Warenart:`},
            {text: ` `},
            {table: {

                    headerRows: 1,
                    widths: [ '*', '*', '*', '*', '*'],

                    body: [
                        [ 'Datum', 'Masch.ID', 'Uhrzeit', 'Lfd. Nr.',
                            {text: 'Gewicht in kg', alignment: 'right'},],
                        [ 'Value 1', 'Value 2', 'Value 3', 'Value 4',
                            [
                                {columns: [
                                        {
                                            width: '*',
                                            text: 'Brutto'
                                        },
                                        {
                                            width: '*',
                                            text: '123',
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
                                            text: '123',
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
                                            text: '123',
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
                        text: 'Ware übernommen: 13.04.2023',
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

    const [url, setUrl] = useState(null)

    const createPdf = () => {
        // @ts-ignore
        const pdfGenerator = pdfMake.createPdf(docDefinition);
        pdfGenerator.getBlob((blob: any) => {
            const url = URL.createObjectURL(blob)
            // @ts-ignore
            setUrl(url)
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
            <button onClick={createPdf}>Generate PDF</button>
            {url && (
                <div>
                    {url}
                </div>
            )}
        </div>
    )
}

export default PDF;


