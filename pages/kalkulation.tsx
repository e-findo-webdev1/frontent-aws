import Link from "next/link";
import IndexSVG from "../public/graph-infographic-data-index-element-svgrepo-com";

const Kalkulation = () => {

    if (JSON.parse(sessionStorage.getItem('user') as string).calculationPermission) {
        return(
            <div id="content-page" className="overflow-auto h-full px-48 m-auto">
                <p className="my-7 text-2xl font-bold">Kalkulation</p>
                <div className="flex min-h-[10.5rem]  min-w-[10.5rem] h-1/3 m-auto space-x-10 text-sm ">
                    <div className="m-x-auto space-y-12 w-1/2">
                        <Link href="kalkulation/index-management">
                            <button className="min-h-[10.5rem] min-w-[10.5rem] max-w-[14.5rem] h-full w-full border bg-gray-50 hover:bg-white
                            sm:rounded-lg shadow-md border">
                                <IndexSVG/>
                                Indexverwaltung
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div/>
        )
    }

}

export default Kalkulation