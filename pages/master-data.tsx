'use client'
import {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import moment from "moment";
import toHex from "./components/helpers/toHex";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import useSWR from "swr";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
const MasterDataSummary = () => {
    const [dataLoading, setDataLoading] = useState<any>(true);
    const [companyWorkers, setCompanyWorkers] = useState<any>();

    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: clients, error: clientsError, isLoading: clientsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients', fetcher)
    const {data: machineTypes, error: machineTypesError, isLoading: machineTypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machine-types', fetcher)
    const {data: priceMatrices, error: priceMatricesError, isLoading: priceMatricesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices', fetcher)
    const {data: contractors, error: contractorsError, isLoading: contractorsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors', fetcher)
    const {data: qualities, error: qualitiesError, isLoading: qualitiesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities', fetcher)
    const {data: accounts, error: accountsError, isLoading: accountsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/accounts', fetcher)
    const {data: materials, error: materialsError, isLoading: materialsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)

    const company = JSON.parse(sessionStorage.getItem('company') as string)
    const getCompanyWorkers = () => {
        if (!accountsLoading && !companyWorkers) {
            const companyWorkers = accounts.Items.filter((account:any) =>
                account.client_id == company.client_id
            )
            setCompanyWorkers(companyWorkers)
        }
    }
    const isDataLoaded = () => {
        if (!materialsLoading && !machinesLoading && !clientsLoading && !machineTypesLoading
            && !priceMatricesLoading && !contractorsLoading && !qualitiesLoading && !accountsLoading
            && !materialsLoading && dataLoading) {
            setDataLoading(false);
        }
    }

    getCompanyWorkers();
    isDataLoaded();

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

    if (JSON.parse(sessionStorage.getItem('user') as string).admin) {
        return (
            <div id="content-page" className="overflow-auto h-full px-48 m-auto">
                <div className="mt-10">
                    <Link href="/new-client">
                        <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                        bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Kunde</button>
                    </Link>
                    <p className="my-9 text-2xl font-bold">Stammdaten</p>
                </div>
                {dataLoading  ?
                    <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                        <Skeleton className="border h-[15.7rem] shadow-md"/>
                    </SkeletonTheme> :
                <div className="sm:rounded-lg min-h-[11.7rem] shadow-md border overflow-auto bg-gray-50">
                    <table className="flex-row table-fixed w-full bg-">
                        <thead>
                        <tr className="text-xs text-gray-500 bg-white border-b text-left">
                            <th className="font-normal w-[12rem]">Firma</th>
                            <th className="font-normal w-[5.5rem]">KundenNr.</th>
                            <th className="font-normal w-[5.5rem]">PLZ</th>
                            <th className="font-normal w-[7rem]">Stadt</th>
                            <th className="font-normal w-[7rem]">Straße</th>
                            <th className="font-normal w-[12rem]">Telefon</th>
                            <th className="font-normal w-[12rem]">E-Mail</th>
                            <th className="font-normal w-[4rem] text-right">Maschinen</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                        {
                            !materialsLoading && !machinesLoading && !clientsLoading ?
                                clients.Items.sort(function(a: any, b: any){
                                    // @ts-ignore
                                    return a.client_id - b.client_id})
                                    .map((client: any) =>
                                        <tr key={client.client_id} className="text-xs border-t">
                                            <Link href={"/master-data/" + client.client_id}>
                                                <td className="underline cursor-pointer">{client.client_name}</td>
                                            </Link>
                                            <td>{client.client_number}</td>
                                            <td>{client.zip_code}</td>
                                            <td>{client.city}</td>
                                            <td>{client.street}</td>
                                            <td>{client.telefon}</td>
                                            <td>{client.email}</td>
                                            <td className="text-right">{machines.Items.filter((machine: any) =>
                                                machine.client == client.client_name
                                            ).length}</td>
                                        </tr>
                                    )
                                : ""
                        }
                        </tbody>
                    </table>
                </div> }
                <hr className="mt-9"/>
                <div className="columns-2 mt-7 space-x-5">
                    <div>
                        <Link href="/kalkulation/index-management">
                            <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Index</button>
                        </Link>
                        <p className="text-2xl font-bold mb-5">Indexe</p>
                        {dataLoading ?
                            <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                                <Skeleton className="border min-h-[9.3rem] max-h-[9.3rem] sm:rounded-lg shadow-md"/>
                            </SkeletonTheme> :
                            <div className="min-h-[9.3rem] max-h-[9.3rem] shadow-md sm:rounded-lg border overflow-auto h-full">
                                <table className="flex-row table-auto w-full">
                                    <thead>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <th className="font-normal">Index</th>
                                        <th className="font-normal text-right">Aktueller Preis</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-gray-50">
                                    { !dataLoading ?
                                        priceMatrices.Items.filter((priceMatrix: any) => priceMatrix.indeces != undefined)
                                            .map((priceMatrix: any) =>
                                                priceMatrix.indeces.map((index: any) =>
                                                    <tr key={priceMatrix.price_matrix + index}
                                                        className="text-xs border-b">
                                                        <Link href={"/master-data/edit-index/" +
                                                            toHex(priceMatrix.indexgroup_name + " - "
                                                                + priceMatrix.price_matrix + " - " + index)}>
                                                            <td className="underline cursor-pointer">{priceMatrix.indexgroup_name + " - "
                                                                + priceMatrix.price_matrix + " - " + index}</td>
                                                        </Link>
                                                        <td className="text-right">
                                                            { priceMatrix && priceMatrix.prices
                                                            && priceMatrix.prices[moment().year()] &&
                                                            priceMatrix.prices[moment().year()]
                                                                [monthsList[moment().month()]] &&
                                                            priceMatrix.prices[moment().year()]
                                                                [monthsList[moment().month()]][index] ?
                                                                priceMatrix.prices
                                                                    [moment().year()][monthsList[moment().month()]]
                                                                    [index] + " €"
                                                                : "0,00 €"
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        : ""}
                                    </tbody>
                                </table>
                            </div>}
                    </div>

                    <div className="">
                        <Link href="/master-data/new-quality">
                            <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neue Qualität</button>
                        </Link>
                        <p className="text-2xl font-bold mb-5">Qualität</p>
                        { dataLoading ?
                            <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                                <Skeleton className="border min-h-[9.3rem] max-h-[9.3rem] sm:rounded-lg shadow-md"/>
                            </SkeletonTheme> :
                        <div className="sm:rounded-lg border shadow-md overflow-auto min-h-[9.3rem] max-h-[9.3rem] bg-gray-50">
                            <table className="flex-row table-auto w-full">
                                <thead>
                                <tr className="text-xs text-gray-500 border-b text-left bg-white">
                                    <th className="font-normal">Qualität</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                { !dataLoading ? qualities.Items.map((quality: any) =>
                                    <tr key={quality.quality_id}
                                        className="text-xs border-b text-left underline">
                                        <Link href={"/master-data/edit-quality/" +
                                            quality.quality_id}>
                                            <td className="underline cursor-pointer">{quality.quality_name}</td>
                                        </Link>
                                    </tr>
                                )
                                    : ""
                                }
                                </tbody>
                            </table>
                        </div>}

                </div>
                </div>
                <div>
                    <Link href="/master-data/new-material">
                        <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neues Material</button>
                    </Link>
                    <p className="text-2xl font-bold mb-5 mt-5">Material</p>
                    { dataLoading ?
                        <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                            <Skeleton className="border min-h-[9.3rem] max-h-[9.3rem] sm:rounded-lg shadow-md"/>
                        </SkeletonTheme> :
                        <div className="sm:rounded-lg border shadow-md overflow-auto min-h-[9.3rem] max-h-[9.3rem] bg-gray-50">
                            <table className="flex-row table-auto w-full">
                                <thead>
                                <tr className="text-xs text-gray-500 border-b text-left bg-white">
                                    <th className="font-normal">Material</th>
                                    <th className="font-normal">AVV Nr.</th>
                                    <th className="font-normal text-right">Sorte Nr.</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                { !dataLoading ?
                                        materials.Items.sort(function(a: any, b: any){
                                            // @ts-ignore
                                            return a.waretype_id - b.waretype_id})
                                            .map((material: any) =>
                                                <tr key={material.waretype_id}
                                                    className="text-xs border-b text-left">
                                                    <Link href={"/master-data/edit-material/" +
                                                        material.waretype_id}>
                                                        <td className="underline cursor-pointer">{material.name_waretype}</td>
                                                    </Link>
                                                    <td>{material.waretype_number}</td>
                                                    <td className="text-right">{material.internal_number}</td>
                                                </tr>
                                            )
                                        : ""
                                }
                                </tbody>
                            </table>
                        </div>}
                </div>
                <div className="columns-2 h-max mt-7 space-x-5">
                    <div>
                        <div>
                            <Link href="/master-data/new-machine-type">
                                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Maschinentyp</button>
                            </Link>
                            <p className="text-2xl font-bold mb-5">Maschinentypen</p>
                            { dataLoading ?
                                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                                    <Skeleton className="border min-h-[9.3rem] max-h-[9.3rem] sm:rounded-lg shadow-md"/>
                                </SkeletonTheme> :
                            <div className="min-h-[9.3rem] max-h-[9.3rem] shadow-md sm:rounded-lg border overflow-auto h-full">
                                <table className="flex-row table-auto w-full">
                                    <thead>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <th className="font-normal">Maschinentyp</th>
                                        <th className="font-normal">Bezeichnung</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-gray-50">
                                    {
                                        !dataLoading ?
                                            machineTypes.Items.sort(function(a: any, b: any){
                                                // @ts-ignore
                                                return a.machine_type_id - b.machine_type_id})
                                                .map((machineType: any) =>
                                                    <tr key={machineType.machine_type_id}
                                                        className="text-xs border-b text-left">
                                                        <Link href={"/master-data/edit-machine-type/"
                                                            + machineType.machine_type_id}>
                                                            <td className="underline cursor-pointer">
                                                                {machineType.machine_type_name}</td>
                                                        </Link>
                                                        <td>{machineType.description}</td>
                                                    </tr>
                                                )
                                            : ""
                                    }
                                    </tbody>
                                </table>
                            </div>}
                        </div>
                    </div>
                    <div>
                                <Link href="/master-data/new-worker">
                                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Mitarbeiter</button>
                            </Link>
                            <p className="text-2xl font-bold mb-5 mt-5">Mitarbeiter</p>
                        {dataLoading ?
                            <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                                <Skeleton className="border min-h-[9.3rem] max-h-[9.3rem] sm:rounded-lg shadow-md"/>
                            </SkeletonTheme> :
                            <div className="min-h-[9.3rem] max-h-[9.3rem] shadow-md sm:rounded-lg border overflow-auto">
                                <table className="flex-row table-auto w-full">
                                    <thead>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <th className="font-normal">Mitarbeiter</th>
                                        <th className="font-normal">Kürzel</th>
                                        <th className="font-normal">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-gray-50">
                                    {!dataLoading && companyWorkers.length !=0 ? companyWorkers.map((worker: any) =>
                                        <tr key={worker.userName}
                                            className="text-xs border-b text-left">
                                            <Link href={"/master-data/edit-worker/" + worker.loginName}>
                                                <td className="underline cursor-pointer">
                                                    {worker.userName}</td>
                                            </Link>
                                            <td>{worker.initials}</td>
                                            <td>{worker.email}</td>
                                        </tr>
                                    ) :  <><tr key='noWorkers1' className="text-xs text-left">
                                        <td className="text-gray-500">Keine Mitarbeiter hinzugefügt...</td>
                                        <td/>
                                        <td/>
                                    </tr>
                                    <tr key='noWorkers2' className="text-xs text-left">
                                        <td className="text-gray-50">...</td>
                                        <td/>
                                        <td/>
                                    </tr>
                                    <tr key='noWorkers3' className="text-xs text-left">
                                    <td className="text-gray-50">No workers added...</td>
                                    <td/>
                                    <td/>
                                    </tr>
                                    </>
                                    }

                                    </tbody>
                                </table>
                            </div>}
                        </div>
                        </div>

                <div>
                    <div>
                        <Link href="/master-data/new-contractor">
                            <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Auftragnehmer</button>
                        </Link>
                        <p className="text-2xl mt-7 font-bold mb-5">Auftragnehmer</p>
                        {dataLoading ?
                            <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                                <Skeleton className="border min-h-[11.7rem] max-h-[11.7rem] sm:rounded-lg shadow-md"/>
                            </SkeletonTheme> :
                        <div className="sm:rounded-lg shadow-md border overflow-auto min-h-[11.7rem] max-h-[11.7rem] mb-20">
                            <table className="flex-row table-auto w-full">
                                <thead>
                                <tr className="text-xs text-gray-500 border-b text-left">
                                    <th className="font-normal">Auftragnehmer</th>
                                    <th className="font-normal">Strasse</th>
                                    <th className="font-normal">PLZ</th>
                                    <th className="font-normal">Ort</th>
                                    <th className="font-normal">Telefon</th>
                                    <th className="font-normal">Email</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                {
                                    !dataLoading ?
                                        contractors.Items.map((contractor: any) =>
                                            <tr key={contractor.contractor_id}
                                                className="text-xs border-b text-left">
                                                <Link href={"/master-data/edit-contractor/" + contractor.contractor_id}>
                                                    <td className="underline cursor-pointer">
                                                        {contractor.contractor_name}</td>
                                                </Link>
                                                <td>
                                                    {contractor.street}
                                                </td>
                                                <td>
                                                    {contractor.zip_code}
                                                </td>
                                                <td>
                                                    {contractor.city}
                                                </td>
                                                <td>
                                                    {contractor.telefon}
                                                </td>
                                                <td>
                                                    {contractor.email}
                                                </td>
                                            </tr>
                                        )
                                        : ""
                                }
                                </tbody>
                            </table>
                        </div>}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

export default MasterDataSummary