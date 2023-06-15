import {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import Link from "next/link";
import Chart from 'chart.js/auto';
import PDF from "../components/helpers/pdf";
import PDFLink from "../components/helpers/pdfLink";
import Proforma from "../components/helpers/proforma";

const dataYear2022: any = []

const MonthlyEvaluation = () => {
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

    const [dataset, setDataset] = useState<any>(dataYear2022);
    const [machinesData, setMachinesData] = useState<any>([0]);
    const [controlDocuments, setControlDocuments] = useState<any>({set: false});
    const [waretypes, setWaretypes] = useState<any>();
    const [year] = useState<any>(moment().year());
    const [month] = useState<any>(monthsList[moment().month()])
    const [certificates, setCertificates] = useState<any>();
    const [popupCertificate, setPopupCertificate] = useState<any>();
    const [receivedIncome, setReceivedIncome] = useState<any>(0);


    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items.filter((machine: any)=>
                    machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name));
                API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                    .then((response) => {
                        setControlDocuments(
                            response.data.Items
                                .filter( (document: any) =>
                                    machinesData.reduce( function(a: any, b: any){
                                        return a + (b['machine_id']);
                                    }, []).includes(document.machine_id)
                                )
                        );
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
            .then((response) => {
                setWaretypes(response.data.Items);
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
            .then((response) => {
                setCertificates(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });

        const labels = [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'Gesamt-Werksgewicht',
                backgroundColor: 'rgb(218,0,44)',
                borderColor: 'rgb(218,0,44)',
                data: dataset.filter((month: any) => month.weight != 0).map((month:any)=>month.weight),
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                    }
                },
                plugins: {
                    legend: {
                        position: 'right'
                    }
                },
            },
        };

        // @ts-ignore
        document.getElementById("line-chart").innerHTML =
            "<canvas id=\"myChart\"></canvas>"
        // @ts-ignore
        document.getElementById("line-chart2").innerHTML =
            "<canvas id=\"myChart2\"></canvas>"


        const myChart = new Chart(
            // @ts-ignore
            document.getElementById('myChart'),
            config
        );

        const myChart2 = new Chart(
            // @ts-ignore
            document.getElementById('myChart2'),
            config
        );

    }, [controlDocuments.set]);


    const handlePopupSend = () => {
        let certificate = certificates.filter((certificate: any)=> certificate.document_id == popupCertificate)[0]
        let responseBody = {
            workingWeight: certificate.workingWeight,
            comment: certificate.comment,
            document_id: certificate.document_id,
            formData: certificate.pdf_data,
            income: receivedIncome
        }

        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div id="content-page" className="overflow-auto h-full px-24">
            <p className="mt-5 text-3xl font-bold mb-5">Monatsauswertung</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines">
                    <option selected>- Alle -</option>
                    {machinesData ?
                    machinesData.map((machine: any) =>
                        <option key={machine.machine_id}
                                value={machine.machine_id}>{machine.machine_id}
                        </option>
                    )
                    : ""}
                </select>
            </div>
            <div className="font-bold justify-center flex space-x-10 mt-5 mb-3">
                <button>&lt;</button>
                <span>{month} {year}</span>
                <button>&gt;</button>
            </div>
            <Link href="/reporting/annual-evaluation">
                <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">zur Jahresentwicklung wechseln
                </button>
            </Link>
            <div className="flex mt-5">
                <div className="flex m-auto space-x-1">
                <Link href="/reporting/annual-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Gewichtentwicklung
                    </button>
                </Link>
                <Link href="/reporting/annual-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Monatspreis
                    </button>
                </Link>
                <Link href="/reporting/annual-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Erlösentwicklung
                    </button>
                </Link>
                </div>
            </div>
            <p className="mt-5 text-xs uppercase font-bold text-gray-500">Gewichtentwicklung</p>

            <div className="mb-10 mt-5 w-10/12" id="line-chart"/>
            <div className="mb-10 mt-5 w-10/12" id="line-chart2"/>
            <div id="popup" className={ popupCertificate ?
                "border ml-[40rem]  w-max shadow-md mb-2 rounded"
                : "border ml-[40rem]w-max shadow-md mb-2 rounded hidden"}>
                <button className="float-right p-0.5 w-5 h-5 text-xs flex bg-red-500"
                        onClick={()=>setPopupCertificate(null)}>
                    <span className="w-full font-bold text-white">X</span>
                </button>
                <div className=" text-xs p-5">
                    <span className="font-bold">Betrag erhalten</span><br/>
                    <input className="w-20 text-right border rounded pl-2.5 py-0.5"
                           defaultValue={certificates && popupCertificate && certificates.filter((certificate: any) =>
                               certificate.document_id == popupCertificate
                           )[0].income ?
                               certificates.filter((certificate: any) =>
                               certificate.document_id == popupCertificate
                               )[0].income
                               : 0}
                           onChange={(e)=>setReceivedIncome(e.target.value)}
                    /> €
                    <button className="border border-accent-color-1 bg-accent-color-4
                            hover:bg-accent-color-5 rounded p-2.5 py-0.5 shadow-md ml-2"
                            onClick={certificates ? ()=>handlePopupSend() : ()=>{}}
                    >Setzen
                    </button>
                </div>
            </div>
            <div className="sm:rounded-lg shadow-md overflow-auto mb-10">
            <div className="rounded-lg shadow-md border overflow-auto w-max">
                <table className="table-auto w-full">
                    <thead>
                    <tr className="text-xs text-gray-500 text-right border-b">
                        <th className="font-normal text-left">Datum</th>
                        <th className="font-normal text-left">Wiege-Nr.<br/>
                            Masch.-ID</th>
                        <th className="font-normal">PDF</th>
                        <th className="font-normal text-left">Warenart<br/>
                            Sorte-Nr.</th>
                        <th className="font-normal text-right">Abgangs-<br/>
                            gew.</th>
                        <th className="font-normal text-right">Werks-<br/>
                            gew.</th>
                        <th className="font-normal text-right">Delta<br/>
                            (A. -W.)</th>
                        <th className="font-normal text-right">Monats-<br/>
                            preis</th>
                        <th className="font-normal text-right">Betrag<br/>
                            Abgangsgew.</th>
                        <th className="font-normal text-right">Betrag<br/>
                            Werksgew.</th>
                        <th className="font-normal text-right">Betrag<br/>
                            erhalten</th>
                        <th className="font-normal text-right">Delta<br/>
                            (Werk. -erh.)</th>
                        <th className="font-normal text-right">Proforma</th>
                        <th className="font-normal text-right">Wiege-<br/>
                            schein</th><th className="font-normal text-right">Bemerkung</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    { waretypes && controlDocuments.set != false ?
                        controlDocuments.map((document: any) =>
                            <tr key={document.document_id}
                                className="text-xs text-gray-500 border-b text-left">
                                <td>
                                        {moment(document.endOfCycle).format('DD.MM.YYYY HH:mm')}
                                </td>
                                <td>
                                    <PDFLink
                                        document_id = {document.document_id}
                                        brutto = {document.brutto}
                                        netto = {document.netto}
                                        timestamp = {document.timestamp}
                                        tara = {document.tara}
                                        machine_id = {document.machine_id}
                                        company = {JSON.parse(sessionStorage.getItem('company') as string)}
                                        waretype = {document.waretype}
                                        sort = {
                                            waretypes.filter((ware: any) =>
                                                ware.name_waretype == document.waretype)[0].waretype_number
                                        }
                                    />
                                    {document.machine_id}
                                </td>
                                <td>
                                    <PDF
                                        document_id = {document.document_id}
                                        brutto = {document.brutto}
                                        netto = {document.netto}
                                        timestamp = {document.timestamp}
                                        tara = {document.tara}
                                        machine_id = {document.machine_id}
                                        company = {JSON.parse(sessionStorage.getItem('company') as string)}
                                        waretype = {document.waretype}
                                        sort = {
                                                waretypes.filter((ware: any) =>
                                                    ware.name_waretype == document.waretype)[0].waretype_number
                                                }
                                    />
                                </td>
                                <td>
                                    {document.waretype}<br/>
                                    {waretypes.filter((item: any) =>
                                    item.name_waretype == document.waretype
                                    )[0].internal_number}
                                </td>
                                <td className="text-right">
                                    {document.netto}
                                </td>
                                <td className="text-right">
                                    {certificates && certificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        ? certificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        : ''}
                                </td>
                                <td className="text-right">
                                    {certificates &&  certificates.filter((certificate: any) =>
                                            certificate.document_id == document.document_id)[0].workingWeight
                                        ? document.netto - certificates.filter((certificate: any) =>
                                            certificate.document_id == document.document_id)[0].workingWeight
                                        : ''}
                                </td>
                                <td className="text-right">
                                        {machinesData.filter((machine:any)=>machine.machine_id==document.machine_id)[0].price_list ?
                                            parseInt(machinesData.filter((machine:any)=>machine.machine_id==document.machine_id)
                                                [0].price_list.prices
                                                // @ts-ignore
                                                [moment().year()][monthsList[moment().month()]]).toFixed(2) : "0,00"} €
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
                                <td className="text-right">
                                    { certificates && machinesData.filter((machine:any)=>
                                        machine.machine_id==document.machine_id)[0].price_list
                                        && certificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        ?   (certificates.filter((certificate: any) =>
                                                certificate.document_id == document.document_id)[0].workingWeight / 1000 *
                                            parseInt(machinesData.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list.prices
                                                [moment().year()][monthsList[moment().month()]]))
                                            .toFixed(2) + ' €' : ''}
                                </td>
                                <td className="text-right">
                                    <button className="underline"
                                            onClick={()=>setPopupCertificate(document.document_id)}>
                                        {certificates && certificates.filter((certificate: any)=>
                                            certificate.document_id == document.document_id)[0].income ? certificates.filter((certificate: any)=>
                                        certificate.document_id == document.document_id)[0].income : '0.00'} €</button>
                                </td>
                                <td className="text-right">
                                    {certificates && machinesData.filter((machine:any)=>
                                        machine.machine_id==document.machine_id)[0].price_list
                                    && certificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        ?   (certificates.filter((certificate: any) =>
                                                certificate.document_id == document.document_id)[0].workingWeight / 1000 *
                                            parseInt(machinesData.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list.prices
                                                [moment().year()][monthsList[moment().month()]])
                                            - certificates.filter((certificate: any)=>
                                        certificate.document_id == document.document_id)[0].income)
                                        .toFixed(2) + ' €': ''}
                                </td>
                                <td>
                                    <Proforma
                                        document_id = {document.document_id}
                                        brutto = {document.brutto}
                                        netto = {document.netto}
                                        timestamp = {document.timestamp}
                                        tara = {document.tara}
                                        machine_id = {document.machine_id}
                                        company = {JSON.parse(sessionStorage.getItem('company') as string)}
                                        waretype = {document.waretype}
                                        sort = {
                                            waretypes.filter((ware: any) =>
                                                ware.name_waretype == document.waretype)[0].waretype_number
                                        }
                                    />
                                </td>
                                <td>
                                    <Link href={"/reporting/monthly-evaluation/" + document.document_id}>
                                        <button className="m-auto flex">
                                            <img className="h-5" src="/upload-svgrepo-com.svg"/></button>
                                    </Link>
                                </td>
                                <td>
                                    {certificates ? certificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].comment : '' }
                                </td>

                            </tr>
                        )
                    : ""}
                    </tbody>
                </table>
            </div>
            </div>

        </div>
    )
}

export default MonthlyEvaluation
