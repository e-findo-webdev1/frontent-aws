import Navigation from "./navigation/Navigation";
import Breadcrumbs from "./navigation/Breadcrumbs";
import useSWR from 'swr';

export async function fetcher() {
    return fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines').then((res) => res.json())
}

// @ts-ignore
export default function Layout({children} ) {
    const {data: Items, error} = useSWR('fetchData', fetcher)

    return(
        <>
            <Navigation/>
            <hr/>
            <Breadcrumbs/>
            {children}
        </>
    )

}

