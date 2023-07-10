import Link from "next/link";

const Kalkulation = () => {

    if (JSON.parse(sessionStorage.getItem('user') as string).calculationPermission) {
        return(
            <div className="px-20">
                <p className="my-9 text-3xl font-bold">Indexgruppen</p>
                <div className="flex h-[28rem] m-auto space-x-10 font-bold text-sm">
                    <div className="m-x-auto space-y-12 w-1/2">
                        <Link href="kalkulation/index-management">
                            <button className="w-full p-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                        sm:rounded-lg shadow-md border">
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