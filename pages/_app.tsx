'use client'
import '../styles/globals.css'
import {useEffect, useState} from "react";
import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/navigation/Logo";
import Breadcrumbs from "./components/navigation/Breadcrumbs";
import useSWR, { preload } from "swr";
export default function MyApp({ Component, pageProps} :any) {
    const fetcher = (url:  string) => fetch(url).then(r => r.json())

    preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
    preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users', fetcher)
    preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts', fetcher)
    preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors', fetcher)
    preload('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/holidays', fetcher)

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