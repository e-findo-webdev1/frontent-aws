'use client'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/navigation/Logo";
import Breadcrumbs from "./components/navigation/Breadcrumbs";
import useSWR, { preload } from "swr";
const fetcher = (url:  string) => fetch(url).then(r => r.json())

preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machine-types', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities', fetcher)
preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/accounts', fetcher)
export default function MyApp({ Component, pageProps} :any) {

    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: controlDocuments, error: controlDocumentsError,
        isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
    const {data: users, error: usersError, isLoading: usersLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users', fetcher)
    const {data: shiftsData, error: shiftsDataError, isLoading: shiftsDataLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts', fetcher)
    const {data: contractors, error: contractorsError, isLoading: contractorsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors', fetcher)
    const {data: certificates, error: certificatesError, isLoading: certificatesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher)
    const {data: waretypes, error: waretypesError, isLoading: waretypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: clients, error: clientsError, isLoading: clientsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients', fetcher)
    const {data: priceMatrices, error: priceMatricesError, isLoading: priceMatricesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices', fetcher)
    const {data: machineTypes, error: machineTypesError, isLoading: machineTypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machine-types', fetcher)
    const {data: qualities, error: qualitiesError, isLoading: qualitiesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities', fetcher)
    const {data: accounts, error: accountsError, isLoading: accountsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/accounts', fetcher)

    const [loggedIn, setLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState('');

    useEffect(() => {

        if (sessionStorage.getItem('company')) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setUserToken(JSON.stringify(sessionStorage.getItem('user')) as string)
    }, [loggedIn, userToken]);

        if (loggedIn == false) {
                return (
                    <div id="background" className="light bg-accent-color-1 h-screen py-20 px-44">
                        <div id="template" className="m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-36 p-3">
                            <div className="mb-2">
                                <Logo/>
                            </div>
                            <hr/>
                            <LoginForm/>
                        </div>
                    </div>
                )
            }
        else {
            return (
                <div id="background" className="bg-accent-color-1 h-screen py-20 px-44">
                    <div id="template" className="m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-36 p-3">
                        <Navigation/>
                        <hr/>
                        <Breadcrumbs/>
                        <Component {...pageProps} />
                    </div>
                </div>
            )
        }
}