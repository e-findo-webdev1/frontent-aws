import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from "next/link";
import 'react-loading-skeleton/dist/skeleton.css'
import PDF from "../components/helpers/pdf";
import moment from "moment";
import Image from "next/image";

import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {

    const [

        machinesRes,
        controlDataRes,
        certificatesRes,
        waretypesRes,


    ] = await Promise.all([

        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines'),
        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents'),
        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates'),
        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')


    ]);

    const [

        machines,
        controlDocuments,
        certificates,
        waretypes,

    ] = await Promise.all([

        machinesRes.json(),
        controlDataRes.json(),
        certificatesRes.json(),
        waretypesRes.json(),

    ]);

    return { props: {
        machines,
        controlDocuments,
        certificates,
        waretypes
    },
        revalidate: 10,
    }
};

function ControlDocuments({
                   machines,
                   controlDocuments,
                   certificates,
                   waretypes,

}: InferGetStaticPropsType<typeof getStaticProps>) {

    const company = JSON.parse(sessionStorage.getItem('company') as string)
    const companyMachines = machines.Items.filter((machine:any) =>
        machine.client == company.client_name
    )
    const companyControlDocuments = controlDocuments.Items.filter((document: any) =>
        companyMachines.reduce( function(a: any, b: any){
            a.push(b['machine_id']);
            return a
        }, []).includes(document.machine_id))
    const Table = () => { return(<table className="table-fixed w-full overflow-auto">
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
        {companyControlDocuments.sort(function(a: any, b: any){
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
                                ? companyMachines.filter((item: any) =>
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
                        ((moment(document.endOfCycle).unix()-(moment(companyControlDocuments
                                .filter((page: any)=>page.document_id == document.document_id-1)[0]
                                // @ts-ignore
                                .timestamp)).unix())
                            /3600).toFixed(2) + 'h'
                    }</td>
                    <td>{(document.totalProductionTime/3600000).toFixed(2)}h</td>
                    <td>{companyControlDocuments ? (document.averageThroughput).toFixed(2) : ''}</td>
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
            )}
        </tbody>
    </table>)}

    return (
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="my-9 text-3xl font-bold mb-9">Kontrollbelege</p>
            {/* <div className="text-sm flex">
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
            </div> */}
            {/*{!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className=" sm:rounded-lg shadow-md flex-row min-h-[29.9rem] max-h-[29.9rem]"/>
                </SkeletonTheme> :*/}
                <div className="mt-4 sm:rounded-lg shadow-md border overflow-auto min-h-[29.9rem] max-h-[29.9rem]">
                    <Table/>
                </div>
        </div>
    )

}

export default ControlDocuments;

