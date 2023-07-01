import type { NextPage } from 'next'

import Header from "./components/start/Header";
import StorageSystemDashboard from "./components/start/StorageSystemDashboard";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div id="content-page" className="mx-10 px-10">
            <div className="grid grid-cols-3 mt-7">
                <div className="px-6 border-r mr-5">
                    <Header/>
                    <img src="/esb_start2.jpg" className="h-52 mx-auto mt-5 rounded-lg shadow-md" />
                    <div className="w-full flex mt-7">
                        <Link href="/kalkulation/new-indexgroup">
                            <button className="border ml-auto p-1.5 px-3.5
                              border-accent-color-1 bg-accent-color-4 font-bold
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-[10px] mx-auto">
                                Email Arbeitszeiten senden
                            </button>
                        </Link>
                    </div>
                    <p className="my-7 text-2xl font-bold text-center">Reporting</p>
                    <div className="flex space-x-5 font-bold text-sm">
                        <Link href="reporting/control-documents">
                            <button className="w-full p-1.5 px-3.5 border-accent-color-1
                            bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border text-xs">
                                Kontrollbelege
                            </button>
                        </Link>
                        <Link href="/reporting/monthly-evaluation">
                            <button className="w-full p-1.5 px-3.5 border-accent-color-1
                             bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border text-xs">
                                Monatsauswertung</button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 ml-1">
                    <StorageSystemDashboard/>
                </div>
            </div>
        </div>

    )
}

export default Home
