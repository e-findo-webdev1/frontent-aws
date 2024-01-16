import Link from "next/link";
import IndexSVG from "../public/graph-infographic-data-index-element-svgrepo-com";

const Kalkulation = () => {

    if (JSON.parse(sessionStorage.getItem('user') as string).calculationPermission) {
        return(
            <div id="content-page" className="overflow-auto h-full px-48 m-auto">
                <p className="my-9 text-2xl font-bold">Indexgruppen</p>
                <div className="flex h-[28rem] m-auto space-x-10 text-sm">
                    <div className="m-x-auto space-y-12 w-1/2">
                        <Link href="kalkulation/index-management">
                            <button className="w-[10.5rem] h-[10.5rem] border bg-gray-50 hover:bg-white
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