import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";
import {useRouter} from "next/router";
import moment from "moment";
import toHex from "../../components/helpers/toHex";

const MonthlyComment = () => {
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

    const router = useRouter()
    const pid = router.query

    const [machinesData, setMachinesData] = useState<any>();
    const [controlDocument, setControlDocument] = useState<any>({set:false});
    const [selectedFile, setSelectedFile] = useState<any>();
    const [isFilePicked, setIsFilePicked] = useState<any>(false);
    const [isFileSent, setIsFileSent] = useState<any>(false);
    const [pdfBase64, setPdfBase64] = useState<any>();
    const [workingWeight, setWorkingWeight] = useState<any>(0);
    const [certificate, setCertificate] = useState<any>({set:false});
    const [comment, setComment] = useState<any>('');
    const [errorCode, setErrorCode] = useState(0);
    const [isCommentSaved, setIsCommentSaved] = useState<any>(0);

    useEffect(() => {
        setIsFileSent(false)

        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items.filter((machine: any)=>
                    machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name));
            })
            .catch((error) => {
                console.log(error);
            });

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
                setCertificate(response.data.Items.filter((document: any) =>
                    document.document_id == pid.document_id
                )[0])
                setWorkingWeight(
                    response.data.Items.filter((document: any) =>
                        document.document_id == pid.document_id
                    )[0].workingWeight);
                setComment(certificate.comment)
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [controlDocument.set, isFileSent, certificate.set, isCommentSaved]);

    const changeHandler = () => {
        // @ts-ignore
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    const responseBody = {
        formData: '', document_id: pid.document_id, workingWeight: 0, comment: '', income: 0,
        client_id: 0, machine_id: 0, endOfCycle: ''
    }

    const handleSubmission = async (e: any) => {
        setIsCommentSaved(1)

        responseBody.document_id = pid.document_id
        responseBody.workingWeight = workingWeight
        responseBody.comment = comment
        responseBody.income = certificate.income
        responseBody.client_id = JSON.parse(sessionStorage.getItem('company') as string).client_id
        responseBody.machine_id = controlDocument[0].machine_id
        responseBody.endOfCycle = controlDocument[0].endOfCycle


        function stringToArrayBuffer(str: any) {
            const arr = new Uint8Array(str.length / 8);
            for(let i = 0; i<str.length; i+=8) {
                arr[i/8] = parseInt(str.slice(i, i+8), 2);
            }
            return arr;
        }

        const getBase64 = async (file: any) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async function () {
                let string = reader.result

                // @ts-ignore
                responseBody.formData = string
                    await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates',
                        responseBody)
                        .then(function (response) {
                            console.log(response);
                            setIsFileSent(true)
                        })
                        .catch(function (error) {
                            setErrorCode(1)
                            console.log(error);
                        });
            };

            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
        if (isFilePicked) {
            let file = selectedFile
            await getBase64(file);
        } else {
            if (certificate.pdf_data != '') {
                responseBody.formData = certificate.pdf_data
            }
           await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates',
                responseBody)
                .then(function (response) {
                    console.log(response);
                    setIsFileSent(true)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

       // window.location.replace('/reporting/monthly-evaluation')
    }

    return (
        <div id="content-page" className="overflow-auto h-full px-24">
            <Link href="/reporting/monthly-evaluation">
                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">← Zurück</button>
            </Link>
            <p className="mt-5 text-3xl font-bold mb-5">Monatsauswertung Kommentar</p>
            <iframe className="float-right w-2/3 h-full"
                // @ts-ignore
                    src={pdfBase64}></iframe>
            <div className="sm:rounded-lg shadow-md overflow-auto mb-10 w-1/4">
                <div className="rounded-lg shadow-md border overflow-auto ">
                    <table className="table-auto w-full">
                        <tbody className="bg-gray-50">
                        {controlDocument.set != false ? controlDocument.map((document:any) =>
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
                            {machinesData && controlDocument.set != false ? controlDocument.map((document:any) =>
                                    <tr key={document.document_id}
                                        className="text-xs text-gray-500 border-b">
                                        <td className="border-r text-left">
                                            Summe
                                        </td>
                                        <td className="text-right">
                                            { machinesData.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list
                                                ?   (document.netto / 1000 *
                                                    parseInt(machinesData.filter((machine:any)=>
                                                        machine.machine_id==document.machine_id)[0].price_list.prices
                                                        [moment().year()][monthsList[moment().month()]]))
                                                        .toFixed(2)
                                                : '0.00'} €
                                        </td>
                                    </tr>
                                )
                                : ""}
                            {controlDocument.set != false ? controlDocument.map((document:any) =>
                                    <tr key={document.document_id}
                                        className="text-xs text-gray-500 border-b">
                                        <td className="border-r">
                                            Betrag erhalten
                                        </td>
                                        <td className="text-right">
                                            { machinesData && machinesData.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list
                                                ?   (certificate.workingWeight / 1000 *
                                                    parseInt(machinesData.filter((machine:any)=>
                                                        machine.machine_id==document.machine_id)[0].price_list.prices
                                                        [moment().year()][monthsList[moment().month()]]))
                                                    .toFixed(2)
                                                : '0.00'} €
                                        </td>
                                    </tr>
                                )
                                : ""}
                            {controlDocument.set != false ? controlDocument.map((document:any) =>
                                    <tr key={document.document_id}
                                        className="text-xs text-gray-500 border-b">
                                        <td className="border-r">
                                            Delta
                                        </td>
                                        <td className="text-right">
                                            { machinesData && machinesData.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list
                                                ?   ((document.netto / 1000 *
                                                    parseInt(machinesData.filter((machine:any)=>
                                                        machine.machine_id==document.machine_id)[0].price_list.prices
                                                        [moment().year()][monthsList[moment().month()]]))
                                                - (certificate.workingWeight / 1000 *
                                                    parseInt(machinesData.filter((machine:any)=>
                                                        machine.machine_id==document.machine_id)[0].price_list.prices
                                                        [moment().year()][monthsList[moment().month()]]))).toFixed(2)

                                            : "0.00"} €
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
                            defaultValue={certificate ? certificate.workingWeight : 0}
                            onChange={(e)=>setWorkingWeight(e.target.value)}
                    /> kg
                </div>
                <div className="text-sm mt-8">
                    <p>Kommentar:</p>
                    <p className="text-sm text-green-600 pt-0.5 font-light">{isCommentSaved == 0 ? '' :
                        isCommentSaved == 1 ? 'Kommentar gespeichert.'
                            : isCommentSaved == 2 ? '...' : ''
                    }</p>
                    <textarea className="border h-20 overflow-auto p-2 rounded"
                              defaultValue={certificate ? certificate.comment : ''}
                              onChange={(e)=> {
                                  setComment(e.target.value)
                              }
                    }
                    />
                </div>
                <div className="text-sm mt-8">
                    <p>Wiegeschein hochladen:</p>
                    <p className="text-red-600 text-sm pt-0.5 font-light">{errorCode == 0 ? '' : 'Datei zu groß!'}</p>
                    <div>
                        <input type="file" name="file" onChange={changeHandler} />
                        <div>
                            <button className="mb-10 mt-8 border p-1.5 px-3.5
                                    font-bold border-accent-color-1 bg-accent-color-4
                                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit"
                                    onClick={handleSubmission}>
                                Speichern
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MonthlyComment