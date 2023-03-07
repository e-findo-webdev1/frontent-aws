import type { NextPage } from 'next'

import Header from "./components/start/Header";
import StorageSystemDashboard from "./components/start/StorageSystemDashboard";

const Home: NextPage = () => {

    return (
        <div id="content-page" className="mx-10 p-10">
            <Header/>
            <StorageSystemDashboard/>
        </div>
    )
}

export default Home
