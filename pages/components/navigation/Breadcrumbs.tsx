import {useRouter} from 'next/router';
import Link from "next/link";
import {useEffect, useState} from "react";
import fromHex from "../helpers/fromHex";

const Breadcrumbs = () => {
    const router = useRouter()
    const pid = router.query
    const routerArray = router.pathname.split("/").slice(1)
    const [decodedName, setDecodedName] = useState<any>();
    const [sortName, setSortName] = useState<any>();
    const [clientId, setClientId] = useState<any>()

    useEffect(() => {
        if (sessionStorage.getItem('company')) {
            setClientId(JSON.parse(sessionStorage.getItem("company") as string).client_id)
        }
        if (pid.indexgroup_name != undefined) {
           setDecodedName(fromHex(pid.indexgroup_name))
        }
        if (pid.sort_name != undefined) {
            setSortName(fromHex(pid.sort_name))
        }

    },[pid] );

    return(
        <div className="flex ml-20 my-5">
            <ol>
                <li className="inline-flex items-center">
                    <Link href="/">
                        <button className="inline-flex items-center text-sm font-medium text-gray-700
                                hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Start
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4
                                    4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                            </svg>
                        </button>
                    </Link>
                </li>
                {routerArray.map((route: any, key: any) =>
                        <li key="key" className="inline-flex items-center capitalize">
                            <Link legacyBehavior href={"/"+route
                                .replace("/", "")
                                .replace("[id]", pid.id as string)
                                .replace("[client_id]", pid.id as string)
                                .replace("shift-calendar", "master-data/shift-calendar")
                                .replace("edit-client", "master-data/edit-client/" + clientId)
                                .replace("new-machine", "master-data/new-machine")
                                .replace("shift-manager", "master-data/shift-manager")
                                .replace("edit-machine", "master-data/edit-machine/" + pid.id)
                                .replace("price-matrix", "/kalkulation")
                                .replace("[client]", "")
                                .replace("[document_id]", "")
                                .replace("index-management", "/kalkulation/index-management")
                                .replace("monthly-evaluation", "reporting/monthly-evaluation")
                                .replace("edit-sort", "/kalkulation/index-management")
                                .replace("edit-indexgroup", "/kalkulation/index-management")
                                .replace("machines", "/")
                                .replace("co2-evaluation", "/reporting/co2-evaluation")
                            }>
                                <a className={
                                    route == "[id]" || route == "user-data" || route == "master-data"
                                        || route == "master-data/"
                                        ? "inline-flex items-center text-sm font-medium text-gray-700" +
                                        "hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" +
                                        "pointer-events-none"
                                        : "inline-flex items-center text-sm font-medium text-gray-700" +
                                        "hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}
                                    >
                                    { pid ?
                                        route
                                            .replace("master-data", "Stammdaten")
                                            .replace("edit-client", "Client Anpassung")
                                            .replace("edit-machine-type", "Maschinentyp Anpassung")
                                            .replace("new-machine-type", "Neuer Maschinentyp")
                                            .replace("new-machine", "Neue Maschine")
                                            .replace("new-client", "Neuer Client")
                                            .replace("edit-machine", "Maschinen Anpassung")
                                            .replace("shift-manager", "Schicht Anpassung")
                                            .replace("new-worker", "Neuer Mitarbeiter")
                                            .replace("edit-worker", "Mitarbeiter Anpassung")
                                            .replace("shift-calendar", "Zeiten Anpassung")
                                            .replace("control-documents", "Kontrollbelege")
                                            .replace("monthly-evaluation", "Monatsauswertung")
                                            .replace("annual-evaluation", "Jahresauswertung")
                                            .replace("index-management", "Indexverwaltung")
                                            .replace("new-indexgroup", "Neue Indexgrouppe")
                                            .replace("co2-evaluation", "CO" + "2" + " Auswertung")
                                            .replace("edit-sort", "Sorten Anpassung")
                                            .replace("new-sort", "Neue Sorte")
                                            .replace("price-matrix", "Preismatrix")
                                            .replace("indeces", "Indexe Anpassung")
                                            .replace("new-index", "Neuer Index")
                                            .replace("new-material", "Neues Material")
                                            .replace("edit-material", "Material Anpassung")
                                            .replace("new-quality", "Neue Qualität")
                                            .replace("edit-quality", "Qualität Anpassung")
                                            .replace("edit-index", "Index Anpassung")
                                            .replace("new-contractor", "Neuer Auftragnehmer")
                                            .replace("edit-contractor", "Auftragnehmer Anpassung")
                                            .replace("co2-calculation", "Berechnung")
                                            .replace("[quality_id]", "")
                                            .replace("[material_id]", "")
                                            .replace("[index_name]", "")
                                            .replace("[machine_type_id]", "")
                                            .replace("[contractor_id]", "")
                                            .replace("-", " ")
                                            .replace("-", " ")
                                            .replace("/", "")
                                            .replace("user data", "Stammdaten")
                                            .replace("[client]", "")
                                            .replace("[id]", pid.id as string)
                                            .replace("[client_id]", pid.client_id as string)
                                            .replace("[user]", "")
                                            .replace("[indexgroup_name]", decodedName as string)
                                            .replace("[sort_name]", sortName as string)
                                            .replace("[document_id]", "")
                                        : ""}
                                </a>
                            </Link>
                            { key < (routerArray.length -1 )
                            ? <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4
                                          4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                                </svg>
                            : ""
                            }
                        </li>
                )}
            </ol>
        </div>
    )
}

export default Breadcrumbs