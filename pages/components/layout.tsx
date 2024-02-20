import Navigation from "./navigation/Navigation";
import Breadcrumbs from "./navigation/Breadcrumbs";
import useSWR from 'swr';

const fetcher = (url:  string) => fetch(url).then(r => r.json())

// @ts-ignore
const Layout = ({children} ) => {
    const {data, error} = useSWR('/api/data', fetcher)

    return(
        <>
            <Navigation/>
            <hr/>
            <Breadcrumbs/>
            {children}
        </>
    )

}

export default Layout

