import Link from "next/link";

const Reporting = () => {
    return(
        <div className="px-20">
            <p className="my-9 text-3xl font-bold">Reporting</p>
            <div className="flex justify-center h-[28rem] m-auto space-x-10 font-bold text-sm">
                <div className="m-x-auto space-y-12">
                    <Link href="reporting/control-documents">
                        <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                        Kontrollbelege
                        </button>
                    </Link>
                        <button className="w-full p-3.5 w-full p-3.5 bg-gray-100 cursor-default
                    sm:rounded-lg shadow-md border">
                        Jahreserlöse</button>
                        <button className="w-full p-3.5 w-full p-3.5 bg-gray-100 cursor-default
                    sm:rounded-lg shadow-md border">
                            CO2-Auswertung</button>
                    <button className="w-full p-3.5 w-full p-3.5 bg-gray-100 cursor-default
                    sm:rounded-lg shadow-md border">
                        Abfallbilanz</button>
                </div>
                <div className="m-x-auto space-y-12">
                    <Link href="/reporting/monthly-evaluation">
                        <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            Monatsauswertung</button>
                    </Link>
                        <button className="w-full p-3.5 w-full p-3.5 bg-gray-100 cursor-default
                    sm:rounded-lg shadow-md border">
                            Jahresauswertung</button>
                    <button className="w-full p-3.5 w-full p-3.5 bg-gray-100 cursor-default
                    sm:rounded-lg shadow-md border">
                        Schichtauswertung</button>
                </div>
            </div>
        </div>
    )
}

export default Reporting