import {useRouter} from 'next/router';

import Link from "next/link";

const Breadcrumbs = () => {
    const router = useRouter()
    const pid = router.query
    const routerArray = router.pathname.split("/").slice(1)

    return(
        <div className="flex ml-20 my-5">
            <ol>
                <li className="inline-flex items-center">
                    <Link href="/">
                        <a className="inline-flex items-center text-sm font-medium text-gray-700
                                hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Home
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4
                                    4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                            </svg>
                        </a>
                    </Link>
                </li>
                {routerArray.map((route, key) =>
                        <li key="key" className="inline-flex items-center capitalize">
                            <Link href={"/"+route
                                .replace("/", "")
                                .replace("[id]", pid.id as string)
                                .replace("[client_id]", pid.id as string)}>
                                <a className="inline-flex items-center text-sm font-medium text-gray-700
                                hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    {
                                        route
                                            .replace("-", " ")
                                            .replace("/", "")
                                            .replace("[id]", pid.id as string)
                                            .replace("[client_id]", pid.client_id as string)
                                        }
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