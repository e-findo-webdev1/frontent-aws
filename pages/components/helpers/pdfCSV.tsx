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
const PDFCsv = (csvContent: any) => {
    const [url, setUrl] = useState(null)

    if (csvContent.csvContent != '') {
        console.log([
            ['Maschine', 'Wiegenr.', 'Datum', 'Warenart', 'Bruttogewicht', 'Taragewitcht',
                'Nettogewicht', 'Bemerkung']
        ].concat(
            csvContent.csvContent.map((row: any) => [row[0], row[1], row[2], row[3],
                row[4], row[5], row[6], row[7]])))
    }

    const docDefinition =
            csvContent.csvContent != '' ? {
            content: [
                {text: `Abfallbilanz`, color: 'black', fontSize: 9},
                {text: `    `, bold: true, color: 'black', fontSize: 12},
                {
                    table: {

                        headerRows: 1,
                        widths: [ '*', '*', '*', '*', '*'],

                        body: [
                            ['Datum', 'Material', 'Qualitat', 'AVV Nr.', {text: 'Menge', alignment: 'right'}]
                        ].concat(
                            csvContent.csvContent.map((row: any) => [row[0], row[1], row[2], row[3],
                                {text: row[4], alignment: 'right'}]))
                    }
                },

            ],
                pageSize: 'A4',
                pageMargins: [25, 10],

                defaultStyle: {
                    fontSize: 7,
                    color: '#3F3C3E'
                },

                styles: {
                    header: {
                    }
                }
    } : {
     content: []}

    const createPdf = () => {
        // @ts-ignore
        const pdfGenerator = pdfMake.createPdf(docDefinition);
        pdfGenerator.getBlob((blob: any) => {
            const url = URL.createObjectURL(blob)
            // @ts-ignore
            setUrl(url)
            window.open(url, '_blank')
        })
    }

    return (
        <div className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10 m-1">
            <button onClick={createPdf}>Drucken</button>
        </div>
    )
}

export default PDFCsv;


