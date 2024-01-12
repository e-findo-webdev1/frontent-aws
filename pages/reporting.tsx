import Link from "next/link";
import CalendarSVG from "../public/calendar-day-svgrepo-com";
import PDFSVG from "../public/pdf-svgrepo-com";
import AnnualSVG from "../public/sales-amount-svgrepo-com";
import CalendarYearSVG from "../public/calendar-clock-svgrepo-com"
import Co2SVG from "../public/truck-trash-svgrepo-com";
import ScrapSVG from "../public/car-accident-car-crash-scrap-metal-svgrepo-com";

const Reporting = () => {
    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="my-9 text-3xl font-bold">Reporting</p>
            <div className="flex m-auto space-x-5 text-sm">
                <div className={JSON.parse(sessionStorage.getItem('user') as string).controlDocumentsPermission ?
                    "" : "m-x-auto w-full hidden"}>
                    <Link href="reporting/control-documents">
                        <button className="w-[12.5rem] h-[12.5rem] border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            <PDFSVG/>
                        Kontrollbelege
                        </button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/monthly-evaluation">
                        <button className="w-[12.5rem] h-[12.5rem] border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            <CalendarSVG />
                            Monatsauswertung</button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/annual-evaluation">
                        <button className="w-[12.5rem] h-[12.5rem] border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            <CalendarYearSVG />
                            Jahresauswertung</button>
                    </Link>
                </div>
            </div>
            <div className="flex space-x-5 mt-5 text-sm">
                <div className="">
                    <Link href="/reporting/annual-revenues">
                        <button className="w-[12.5rem] h-[12.5rem] border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            <AnnualSVG />
                            Jahreserlöse</button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/co2-evaluation">
                        <button className="w-[12.5rem] h-[12.5rem] border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            <Co2SVG />
                            CO<sub>2</sub>-Auswertung</button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/waste-balance">
                        <button className="w-[12.5rem] h-[12.5rem] border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
                            <ScrapSVG />
                            Abfallbilanz</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reporting