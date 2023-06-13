import Link from "next/link";
import {useEffect, useState} from "react";
import API from "axios";
import {useRouter} from "next/router";
import moment from "moment";

const MonthlyComment = () => {
    const router = useRouter()
    const pid = router.query

    const [controlDocument, setControlDocument] = useState<any>();
    const [selectedFile, setSelectedFile] = useState<any>();
    const [isFilePicked, setIsFilePicked] = useState<any>(false);
    const [pdfBase64, setPdfBase64] = useState<any>();
    const [blob, setBlob] = useState<any>('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
            .then((response) => {
                setControlDocument(
                    response.data.Items.filter((document: any) =>
                        document.document_id == pid.document_id
                        )
                );
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
            .then((response) => {
                setPdfBase64(
                    response.data.Items.filter((document: any) =>
                        document.document_id == pid.document_id
                    )[0].pdf_data);
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);

    const changeHandler = () => {
        // @ts-ignore
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    const responseBody = {
        formData: '', document_id: pid.document_id
    }

    const handleSubmission = async () => {

        responseBody.document_id = pid.document_id

        function getBase64(file: any) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let string = reader.result
                // @ts-ignore
                responseBody.formData = string
                API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates',
                    responseBody)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }

        let file = selectedFile
        getBase64(file);

    }

    return (
        <div id="content-page" className="overflow-auto h-full px-24">
            <Link href="/reporting/monthly-evaluation">
                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">← Zurück</button>
            </Link>
            <p className="mt-5 text-3xl font-bold mb-5">Monatsauswertung Kommentar</p>
            <iframe className="border float-right w-2/3 h-full"
                // @ts-ignore
                    src={pdfBase64}></iframe>
            <div className="sm:rounded-lg shadow-md overflow-auto mb-10 w-1/4">
                <div className="rounded-lg shadow-md border overflow-auto ">
                    <table className="table-auto w-full">
                        <tbody className="bg-gray-50">
                        {controlDocument ? controlDocument.map((document:any) =>
                                <tr key={document.document_id}
                                    className="text-xs text-gray-500 border-b">
                                        <td className="border-r text-left">
                                            Datum
                                        </td>
                                        <td className="text-right">
                                            {moment(document.timestamp).format("DD.MM.YYYY")}
                                        </td>
                                    </tr>
                                )
                                : ""}
                            {controlDocument ? controlDocument.map((document:any) =>
                                    <tr key={document.document_id}
                                        className="text-xs text-gray-500 border-b">
                                        <td className="border-r text-left">
                                            Summe
                                        </td>
                                        <td className="text-right">
                                            0,00
                                        </td>
                                    </tr>
                                )
                                : ""}
                            {controlDocument ? controlDocument.map((document:any) =>
                                    <tr key={document.document_id}
                                        className="text-xs text-gray-500 border-b">
                                        <td className="border-r">
                                            Betrag erhalten
                                        </td>
                                        <td className="text-right">
                                            0,00
                                        </td>
                                    </tr>
                                )
                                : ""}
                            {controlDocument ? controlDocument.map((document:any) =>
                                    <tr key={document.document_id}
                                        className="text-xs text-gray-500 border-b">
                                        <td className="border-r">
                                            Delta
                                        </td>
                                        <td className="text-right">
                                            0,00
                                        </td>
                                    </tr>
                                )
                                : ""}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-sm">
                    <p>Werksgewicht:</p>
                    <input  className="border rounded pl-2.5 py-0.5 w-1/12"
                            defaultValue={0}/> kg
                </div>
                <div className="text-sm mt-8">
                    <p>Kommentar:</p>
                    <textarea className="border h-20 overflow-auto"/>
                </div>
                <div className="text-sm mt-8">
                    <p>Wiegeschein hochladen:</p>
                    <div>
                        <input type="file" name="file" onChange={changeHandler} />
                        <div>
                            <button className={isFilePicked ? "" : "hidden"} onClick={handleSubmission}>Submit</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MonthlyComment