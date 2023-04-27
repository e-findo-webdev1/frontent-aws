import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from "react";

import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/navigation/Logo";
import Breadcrumbs from "./components/navigation/Breadcrumbs";

function MyApp({ Component, pageProps }: AppProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

        if (isSubmitted == false) {
                return (
                    <div id="background" className="bg-accent-color-1 h-screen py-20 px-20">
                        <div id="template" className="m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-32 p-3">
                            <div className="mb-2">
                                <Logo/>
                            </div>
                            <hr/>
                            <LoginForm
                                setIsSubmitted={setIsSubmitted}
                            />
                        </div>
                    </div>
                )
            }
        else {
            return (
                <div id="background" className="bg-accent-color-1 h-screen py-20 px-20">
                    <div id="template" className="m-auto bg-white h-full min-w-[67rem] rounded-3xl pb-32 p-3">
                        <Navigation setIsSubmitted={setIsSubmitted}/>
                        <hr/>
                        <Breadcrumbs/>
                        <Component {...pageProps} />
                    </div>
                </div>
            )
        }
}

export default MyApp
