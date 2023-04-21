// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts'
import {useState} from "react";
pdfMake.vfs = pdfFonts.pdfMake.vfs

pdfMake.fonts = {
    Poppins: {
        normal: 'Poppins-Regular.ttf',
        bold : 'Poppins-Medium.ttf',
    },

    // download default Roboto font from cdnjs.com
    Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
    },
}

function PDF() {
    const docDefinition = {
        content: [
            {text: `MCS - Money Control System`},
            {text: ` `},
            {text: `Lieferant Nr.: ${0}`},
            {text: `company name`},
            {text: `street`},
            {text: `zip_code city`},
            {text: ` `},
            {text: ` `},
            {text: `Empfänger:`},
            {text: `Rail Kontor AG`},
            {text: `Kesselerlochstrasse 126`},
            {text: `CH- 8240 Thayingen`},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: ` `},
            {text: `Gewichtskontrollschein`, bold: true, color: 'black'},
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
                        alignment: 'right'
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
                        alignment: 'right'
                    },
                ]},
        ],

        pageSize: 'A4',
        pageMargins: [75, 100],

        defaultStyle: {
            fontSize: 8,
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


