import Navigation from "./navigation/Navigation";
import Breadcrumbs from "./navigation/Breadcrumbs";
import useSWR from 'swr';

export async function fetcher() {
    const [

        machinesRes,
        controlDataRes,
        certificatesRes,
        waretypesRes,


    ] = await Promise.all([

        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines'),
        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents'),
        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates'),
        fetch('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')


    ]);

    const [

        machines,
        controlDocuments,
        certificates,
        waretypes,

    ] = await Promise.all([

        machinesRes.json(),
        controlDataRes.json(),
        certificatesRes.json(),
        waretypesRes.json(),

    ]);

    return {
        machines,
        controlDocuments,
        certificates,
        waretypes

    }
}

// @ts-ignore
export default function Layout({children} ) {
    const {data, error} = useSWR('fetchData', fetcher)

    return(
        <>
            <Navigation/>
            <hr/>
            <Breadcrumbs/>
            {children}
        </>
    )

}

