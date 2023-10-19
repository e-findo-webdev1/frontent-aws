import Link from "next/link";

const Reporting = () => {
    return(
        <div className="px-20">
            <p className="my-9 text-3xl font-bold">Reporting</p>
            <div className="flex justify-center m-auto space-x-10 font-bold text-sm">
                <div className={JSON.parse(sessionStorage.getItem('user') as string).controlDocumentsPermission ?
                    "m-x-auto w-1/2" : "m-x-auto w-full hidden"}>
                    <Link href="reporting/control-documents">
                        <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                        Kontrollbelege
                        </button>
                    </Link>
                </div>
                <div className="m-x-auto w-1/2">
                    <Link href="/reporting/monthly-evaluation">
                        <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            Monatsauswertung</button>
                    </Link>
                </div>
            </div>
            <div className="flex space-x-10 font-bold text-sm">
                <div className="mt-5 m-x-auto w-1/2">
                    <Link href="/reporting/annual-evaluation">
                        <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            Jahresauswertung</button>
                    </Link>
                </div>
                <div className="mt-5 m-x-auto w-1/2">
                    <Link href="/reporting/annual-revenues">
                        <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            Jahreserlöse</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reporting