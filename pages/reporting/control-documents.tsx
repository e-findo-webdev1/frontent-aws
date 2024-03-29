'use client'
import {Suspense, useState} from "react";
import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from "next/link";
import 'react-loading-skeleton/dist/skeleton.css'
import PDF from "../components/helpers/pdf";
import moment from "moment";
import Image from "next/image";
import useSWR from "swr";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PDFControl from "../components/helpers/pdfControl";
import PDFCsv from "../components/helpers/pdfCSV";
const fetcher = (url:  string) => fetch(url).then(r => r.json())

// @ts-ignore
const ControlDocuments = ({children} ) => {

    const [filteredMachines, setFilteredMachines] = useState<any>();
    const [filteredControlDocuments, setFilteredControlDocuments] = useState<any>();
    const [selectecMachine, setSelectedMachine] = useState<any>('- Alle -');
    const [controlRows, setControlRows] = useState<any>();

    const [startDate, setStartDate] = useState(
        moment().set({hour: 0, minute: 0, second: 0}).toDate()
    );
    const [endDate, setEndDate] = useState(
        moment().set({hour: 23, minute: 59, second: 59}).toDate()
    );
    const [filterDates, setFilterDates] = useState<any>(false)

    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: controlDocuments, error: controlDocumentsError, isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
    const {data: certificates, error: certificatesError, isLoading: certificatesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher)
    const {data: waretypes, error: waretypesError, isLoading: waretypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)

    const company = JSON.parse(sessionStorage.getItem('company') as string)

    if (!machinesLoading && !filteredMachines) {
        const companyMachines = machines.Items.filter((machine:any) =>
            machine.client == company.client_name
        )
        setFilteredMachines(companyMachines)
    }

    if (!controlDocumentsLoading && filteredMachines && !filteredControlDocuments) {
        if (filterDates) {
            if (selectecMachine != '- Alle - ') {
                const companyControlDocuments = controlDocuments.Items.filter((document: any) =>
                    document.machine_id == selectecMachine).filter((document: any) => document.totalStandstill != 0 && document.averageThroughput != 0)
                    .filter((document: any) =>
                        document.endOfCycle != undefined &&
                        new Date(document.endOfCycle) > startDate &&
                        new Date(document.endOfCycle) < endDate
                    )
                setFilteredControlDocuments(companyControlDocuments)
            }
            if (selectecMachine == '- Alle -') {
                const companyControlDocuments = controlDocuments.Items.filter((document: any) =>
                    filteredMachines.reduce( function(a: any, b: any){
                        a.push(b['machine_id']);
                        return a
                    }, []).includes(document.machine_id)).filter((document: any) => document.totalStandstill != 0 && document.averageThroughput != 0)
                    .filter((document: any) =>
                        document.endOfCycle != undefined &&
                        new Date(document.endOfCycle) > startDate &&
                        new Date(document.endOfCycle) < endDate
                    )
                setFilteredControlDocuments(companyControlDocuments)
            }
        }
        if (!filterDates) {
            if (selectecMachine != '- Alle - ') {
                const companyControlDocuments = controlDocuments.Items.filter((document: any) =>
                    document.machine_id == selectecMachine).filter((document: any) => document.totalStandstill != 0 && document.averageThroughput != 0)
                setFilteredControlDocuments(companyControlDocuments)
            }
            if (selectecMachine == '- Alle -') {
                const companyControlDocuments = controlDocuments.Items.filter((document: any) =>
                    filteredMachines.reduce( function(a: any, b: any){
                        a.push(b['machine_id']);
                        return a
                    }, []).includes(document.machine_id)).filter((document: any) => document.totalStandstill != 0 && document.averageThroughput != 0)
                setFilteredControlDocuments(companyControlDocuments)
            }
        }

    }

    const getControlRows = () => {
        if (filteredControlDocuments && !waretypesLoading && !controlRows) {
            let ControlRows =  filteredControlDocuments
                .sort(function(a: any, b: any){
                    // @ts-ignore
                    return b.document_id - a.document_id
                })
                .map((doc: any) =>
                    [doc.machine_id, company.client_number + "-" + parseInt(company.client_number), doc.endOfCycle,
                        doc.waretype, doc.netto + doc.tara, doc.tara, doc.netto, doc.comment
                    ])

            setControlRows(ControlRows)
        }
    }

    getControlRows();

    return (
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <PDFControl
                csvControl = {controlRows ? controlRows : ''}
            />
            <p className="my-9 text-3xl font-bold mb-9">Kontrollbelege</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines"
                        onChange={(e)=>{setSelectedMachine(e.target.value);
                        setFilteredControlDocuments(undefined)}}
                >
                    <option selected>- Alle -</option>
                    {!machinesLoading && filteredMachines ?
                        filteredMachines.map((machine: any) =>
                            <option key={machine.machine_id}
                                    value={machine.machine_id}>{machine.machine_id}
                            </option>
                        )
                        : ""}
                </select>
            </div>
            <div className="mt-2.5 flex space-x-2 text-sm">
                <span>Datum von:</span>
                <DatePicker
                    dateFormat="d.MM.yyyy"
                    selected={filterDates ? startDate : null}
                    onChange={(date:Date) => {setStartDate((date)); setFilterDates(true); setFilteredControlDocuments(undefined)}}
                    className="border text-center rounded w-32"/>
                <button onClick={()=>{setFilterDates(false); setFilteredControlDocuments(undefined)
                    setStartDate(moment().set({hour: 0, minute: 0, second: 0}).toDate());
                    setEndDate(moment().set({hour: 23, minute: 59, second: 59}).toDate())}}
                        className="border float-right px-2 py-0.5  rounded font-semibold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 shadow-md text-xs flex m-auto"
                >
                    x</button>
                <span>Datum bis:</span>
                <DatePicker
                    dateFormat="d.MM.yyyy"
                    selected={filterDates ? endDate : null}
                    onChange={(date:Date) =>
                    {setEndDate(moment(date).set({hour: 23, minute: 59, second: 59}).toDate());
                        setFilterDates(true); setFilteredControlDocuments(undefined)}}
                    className="border text-center rounded w-32"/>
                <button onClick={()=>{setFilterDates(false); setFilteredControlDocuments(undefined)
                    setStartDate(moment().set({hour: 0, minute: 0, second: 0}).toDate());
                    setEndDate(moment().set({hour: 23, minute: 59, second: 59}).toDate())}}
                        className="border float-right px-2 py-0.5  rounded font-semibold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 shadow-md text-xs flex m-auto"
                >
                    x</button>
            </div>
            { !machinesLoading && !controlDocumentsLoading && !certificatesLoading && !waretypesLoading
            && filteredMachines && filteredControlDocuments && filteredMachines
                ?
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
                        {filteredControlDocuments && filteredControlDocuments.length != 0 ? filteredControlDocuments.sort(function(a: any, b: any){
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
                                                ? filteredMachines.filter((item: any) =>
                                                    // item.machine_id == document.machine_id)[0].waretype
                                                    item.machine_id == document.machine_id).waretype
                                                : ''}
                                            sort = {
                                                machines != undefined
                                                && waretypes
                                                    ? waretypes.Items.filter((ware: any) =>
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
                                            /3600).toFixed(2) + 'h' :
                                        filteredControlDocuments.length > 1 && document.totalStandstill != 0  ?
                                        (
                                            (moment(document.endOfCycle)
                                                    .unix()
                                                -
                                            (moment(
                                                filteredControlDocuments.sort(function(a: any, b: any){
                                                    // @ts-ignore
                                                    return moment(b.endOfCycle).unix() - moment(a.endOfCycle).unix()})
                                                    .find((doc: any) => doc.document_id < document.document_id)
                                                        // @ts-ignore
                                                        .timestamp))
                                                        .unix()
                                            )
                                            /3600).toFixed(2) + 'h' : ''
                                    }</td>
                                    <td>{(document.totalProductionTime/3600000).toFixed(2)}h</td>
                                    <td>{filteredControlDocuments ? (document.averageThroughput).toFixed(2) : ''}</td>
                                    <td>{}</td>
                                    <td>
                                        <Link href={"/reporting/control-documents/" + document.document_id}>
                                            <button className="m-auto flex">
                                                <Image width={'20'} height={'20'} className="h-5" src={
                                                    certificates && certificates.Items.filter((certificate: any) =>
                                                        certificate.document_id == document.document_id).length == 0

                                                    || certificates.Items.filter((certificate: any) =>
                                                        certificate.document_id == document.document_id).pdf_data == '' ?
                                                        "/upload-svgrepo-com.svg" : '/document.png'} alt={''}/></button>
                                        </Link>
                                    </td>
                                </tr>
                            ) : ''}
                        </tbody>
                    </table>
                </div> : <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="border sm:rounded-lg shadow-md flex-row min-h-[29.9rem] max-h-[29.9rem]"/>
                </SkeletonTheme>
            }

        </div>
    )


}

export default ControlDocuments

