'use client'
import useSWR from 'swr'
import Navigation from "./navigation/Navigation";
import Breadcrumbs from "./navigation/Breadcrumbs";
import {useState} from "react";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
// @ts-ignore
export default function Layout({ children }) {
    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: controlDocuments, error: controlDocumentsError, isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
    const {data: certificates, error: certificatesError, isLoading: certificatesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher)
    const {data: waretypes, error: waretypesError, isLoading: waretypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: users, error: usersError, isLoading: usersLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: shifts, error: shiftsError, isLoading: shiftsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: clients, error: clientsError, isLoading: clientsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: machineTypes, error: machineTypesError, isLoading: machineTypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: priceMatricesTypes, error: priceMatricesError, isLoading: priceMatricesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: contractors, error: contractorsError, isLoading: contractorsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: emailTexts, error: emailTextsError, isLoading: emailTextsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: qualities, error: qualitiesError, isLoading: qualitiesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: accounts, error: accountsError, isLoading: accountsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: lands, error: landsError, isLoading: landsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: sorts, error: sortsError, isLoading: sortsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: indexGroup, error: indexGroupError, isLoading: indexGroupLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)

    console.log(controlDocuments)

    return (
        <>
            <Navigation/>
            <hr/>
            <Breadcrumbs/>
            {children}
        </>
    )
}