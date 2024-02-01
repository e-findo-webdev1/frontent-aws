import {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import PDF from "../components/helpers/pdf";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ControlDocuments = () => {
    const [company, setCompany] = useState({
        address_id: '', automatic_email: false, city: "", client_id: 0, client_name: "",
        client_number: "", client_status: 1, co_distance: 0, co_orig_amount: 0, co_orig_trips: 0,
        co_orig_year: 0, co_show: 1, contact: "", email: "", land_id: 0, logo_url: "", next_pdf_nr: 0,
        spokesperson: "", street: "", telefon: "", worktime_mail: 0, worktime_status: 0, zip_code: ""
    });
    const [controlDocuments, setControlDocuments] = useState([]);
    const [machines, setMachines] = useState<any>();
    const [waretypes, setWaretypes] = useState<any>();
    const [certificates, setCertificates] = useState<any>({set:false});
    const [refresh, setRefresh] = useState<any>({set: false})
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false)

    useEffect(() => {
        setCompany(JSON.parse(sessionStorage.getItem('company') as string));

        const fetchData = async () => {

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
                .then((response) => {
                    setMachines(response.data.Items.filter((machine: any) => machine.client ==
                        JSON.parse(sessionStorage.getItem('company') as string).client_name))
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
                .then((response) => {
                    setCertificates(response.data.Items)
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
                .then((response) => {
                    setWaretypes(response.data.Items);
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                .then((response) => {
                    if (machines) {
                        setControlDocuments(response.data.Items.filter((document: any) => machines.map((machine: any) =>
                            machine.machine_id).includes(document.machine_id)));
                    } else {
                        setRefresh({set: true})
                    }

                })
                .catch((error) => {
                    console.log(error.response);
                });
            if (refresh.set == true) {
                setIsDataLoaded(true)
            }
        }

        fetchData()

    }, [refresh.set]);

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="my-9 text-3xl font-bold mb-9">Kontrollbelege</p>
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className=" sm:rounded-lg shadow-md flex-row min-h-[29.9rem] max-h-[29.9rem]"/>
                </SkeletonTheme> :
            <div className="sm:rounded-lg shadow-md border overflow-auto min-h-[29.9rem] max-h-[29.9rem]">
                <table className="table-fixed w-full overflow-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal w-[4rem]">Maschine</th>
                        <th className="font-normal w-[4rem]">PDF</th>
                        <th className="font-normal w-[4rem]">Wiegenr.</th>
                        <th className="font-normal w-[9.1rem]">Datum</th>
                        <th className="font-normal w-[9.1rem]">Warenart</th>
                        <th className="font-normal w-[6rem]">Bruttogewitcht</th>
                        <th className="font-normal w-[6rem]">Taragewitcht</th>
                        <th className="font-normal w-[6rem]">Nettogewicht</th>
                        <th className="font-normal w-[4rem]">Standzeit</th>
                        <th className="font-normal w-[4rem]">Prod.-<br/>Zeit</th>
                        <th className="font-normal w-[4rem]">kg / h</th>
                        <th className="font-normal w-[6rem]">Bemerkung</th>
                        <th className="font-normal w-[4rem]">W. Schein</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {controlDocuments.sort(function(a: any, b: any){
                        // @ts-ignore
                        return moment(b.endOfCycle).unix() - moment(a.endOfCycle).unix()})
                        .map((document: any) =>
                        <tr key={document.document_id} className="text-xs border-t">
                            <td>{document.machine_id}</td>
                            <td>
                                <PDF
                                    endOfCycle = {document.endOfCycle}
                                    document_id = {document.document_id}
                                    brutto = {document.brutto}
                                    netto = {document.netto}
                                    timestamp = {document.timestamp}
                                    tara = {document.tara}
                                    machine_id = {document.machine_id}
                                    company = {company}
                                    waretype = {machines != undefined
                                        ? machines.filter((item: any) =>
                                            // item.machine_id == document.machine_id)[0].waretype
                                            item.machine_id == document.machine_id).waretype
                                        : ''}
                                    sort = {
                                    machines != undefined
                                    && waretypes
                                        ? waretypes.filter((ware: any) =>
                                            ware.name_waretype == document.waretype).waretype_number
                                        : ''}
                                />
                            </td>
                            <td>{company.client_number}-<br/>{parseInt(company.client_number) + document.document_id}</td>
                            <td>{moment(document.timestamp).format('DD.MM.yyyy HH:mm')}</td>
                            <td>{document.waretype}</td>
                            <td>{document.netto + document.tara}</td>
                            <td>{document.tara}</td>
                            <td>{document.netto}</td>
                            <td>{ document.startOfCycle ?
                                ((moment(document.endOfCycle).unix()-moment(document.startOfCycle).unix())
                                    /3600).toFixed(2) + 'h' : '-'
                            }</td>
                            <td>{(document.totalProductionTime/3600000).toFixed(2)}h</td>
                            <td>{controlDocuments ? (document.averageThroughput).toFixed(2) : ''}</td>
                            <td>{}</td>
                            <td>
                                <Link href={"/reporting/control-documents/" + document.document_id}>
                                    <button className="m-auto flex">
                                        <img className="h-5" src={
                                            certificates && certificates.filter((certificate: any) =>
                                                certificate.document_id == document.document_id).length == 0

                                            || certificates.filter((certificate: any) =>
                                                certificate.document_id == document.document_id).pdf_data == '' ?
                                                "/upload-svgrepo-com.svg" : '/document.png'}/></button>
                                </Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default ControlDocuments