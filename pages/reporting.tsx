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
            <p className="my-7 text-2xl font-bold">Reporting</p>
            <div className="flex m-auto  space-x-3 text-sm min-h-[10.5rem] min-w-[10.5rem] h-1/3">
                <div className={JSON.parse(sessionStorage.getItem('user') as string).controlDocumentsPermission ?
                    "" : "m-x-auto w-full hidden"}>
                    <Link href="reporting/control-documents">
                        <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full
                        border bg-gray-50 hover:bg-white
                        sm:rounded-lg shadow-md">
                            <PDFSVG/>
                        <p className="mt-5">Kontrollbelege</p>
                        </button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/monthly-evaluation">
                        <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full border bg-gray-50 hover:bg-white
                        sm:rounded-lg shadow-md border">
                            <CalendarSVG />
                            <p className="mt-5">Monatsauswertung</p>
                            </button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/annual-evaluation">
                        <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full border bg-gray-50 hover:bg-white
                        sm:rounded-lg shadow-md border">
                            <CalendarYearSVG />
                            <p className="mt-5">Jahresauswertung</p>
                            </button>
                    </Link>
                </div>
            </div>
            <div className="flex space-x-3 mt-3 text-sm min-h-[10.5rem] min-w-[10.5rem] h-1/3 ">
                <div className="">
                    <Link href="/reporting/annual-revenues">
                        <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full border bg-gray-50 hover:bg-white
                        sm:rounded-lg shadow-md border">
                            <AnnualSVG />
                            <p className="mt-5">Jahreserlöse</p>
                            </button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/co2-evaluation">
                        <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full border bg-gray-50 hover:bg-white
                        sm:rounded-lg shadow-md border">
                            <Co2SVG />
                            <p className="mt-5">CO<sub>2</sub>-Auswertung</p>
                            </button>
                    </Link>
                </div>
                <div className="">
                    <Link href="/reporting/waste-balance">
                        <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full border bg-gray-50 hover:bg-white
                        sm:rounded-lg shadow-md border">
                            <ScrapSVG />
                            <p className="mt-5">Abfallbilanz</p>
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reporting