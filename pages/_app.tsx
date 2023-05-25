import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";

import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/navigation/Logo";
import Breadcrumbs from "./components/navigation/Breadcrumbs";
import user from "./master-data/edit-worker/[user]";

function MyApp({ Component, pageProps }: AppProps) {
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
                    <div id="background" className="bg-accent-color-1 h-screen py-20 px-20">
                        <div id="template" className="m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-32 p-3">
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
                <div id="background" className="bg-accent-color-1 h-screen py-20 px-20">
                    <div id="template" className="m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-32 p-3">
                        <Navigation/>
                        <hr/>
                        <Breadcrumbs/>
                        <Component {...pageProps} />
                    </div>
                </div>
            )
        }
}

export default MyApp
