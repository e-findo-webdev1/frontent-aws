import React, {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import PDF from "../components/helpers/pdf";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ControlDocuments = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());

    const [page, setPage] = useState<any>(1);
    const [listLength, setListLength] = useState<any>();
    const [pageList, setPageList] = useState<any[]>([]);

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
    const [rowsPerPage, setRowsPerPage] = useState<any>(25);
    const [currentPage, setCurrentPage] = useState<any>(1);

    useEffect(() => {
        setCompany(JSON.parse(sessionStorage.getItem('company') as string));

        const newEndDate = new Date();
        startDate.setDate(startDate.getDate())
        setStartDate(startDate)
        newEndDate.setDate(endDate.getDate() + 1)
        newEndDate.setHours(0, 0, 0, 0);
        setNewEndDate(newEndDate)
        startDate.setHours(0, 0, 0, 0)

        const fetchData = async () => {

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
                .then((response) => {
                    setMachines(response.data.Items.filter((machine:any) =>
                        machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
                    ))
                    if (machines) {
                        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                            .then((response) => {
                                    setControlDocuments(response.data.Items.filter((document: any) =>
                                        machines.reduce( function(a: any, b: any){
                                            a.push(b['machine_id']);
                                            return a
                                        }, []).includes(document.machine_id))
                                    )
                            })
                    } else {
                        setRefresh({set: true})
                    }
                })
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
            if (refresh.set == true) {
                setIsDataLoaded(true)
            }
        }
        fetchData()

    }, [refresh.set]);

    const changePage = (page: number) => {
        updatePageList(page)
        setPage(page)

    }

    const updatePageList = (page: number) => {
        const lastPage = Math.ceil(listLength / 100);
        const visiblePages = [];

        if (lastPage > 4) {
            if (page <= 4) {
                visiblePages.push(1, 2, 3, 4, 5);
            } else if (page >= lastPage - 2) {
                visiblePages.push(lastPage - 3, lastPage - 2, lastPage - 1, lastPage);
            } else {
                visiblePages.push(page - 1, page, page + 1);
            }

            setPageList(visiblePages);
        }
    };

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="my-9 text-3xl font-bold mb-9">Kontrollbelege</p>
            <div className="text-sm flex">
                <div className="flex space-x-9 mt-4 mb-2">
                    <div className="flex space-x-2">
                        <span className="m-auto">Von:</span>
                        <DatePicker className="shadow-md border text-center p-0.5 w-full"
                                    dateFormat="yyyy/MM/dd"
                                    selected={startDate}
                                    onChange={(date:Date) => setStartDate(date)}/>
                    </div>
                    <div className="flex space-x-2">
                        <span className="m-auto">Bis:</span>
                        <DatePicker className="shadow-md border text-center p-0.5 m-0"
                                    dateFormat="yyyy/MM/dd"
                                    selected={endDate}
                                    onChange={(date:Date) => setEndDate(date)}/>
                    </div>
                </div>
            </div>
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className=" sm:rounded-lg shadow-md flex-row min-h-[29.9rem] max-h-[29.9rem]"/>
                </SkeletonTheme> :
            <div className="mt-4 sm:rounded-lg shadow-md border overflow-auto min-h-[29.9rem] max-h-[29.9rem]">
                <table className="table-fixed w-full overflow-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal w-[4rem]">Maschine</th>
                        <th className="font-normal w-[4rem]">PDF</th>
                        <th className="font-normal w-[4rem]">Wiegenr.</th>
                        <th className="font-normal w-[9.1rem]">Datum</th>
                        <th className="font-normal w-[8.6rem]">Warenart</th>
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