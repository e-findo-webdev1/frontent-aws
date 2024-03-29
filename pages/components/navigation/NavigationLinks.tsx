import { useRouter } from 'next/router'

import Link from "next/link";
import {useState} from "react";

const navigationLinksAdmin = [
    {
        name: "Start",
        link: "/",
        image: "/home-svgrepo-com.svg"
    },
    {
        name: "Stammdaten",
        link: "/master-data",
        image: ""
    },
    //{
    //    name: "Lagersysteme",
    //    link: "/storage-systems",
    //    image: ""
    //},
    {
        name: "Reporting",
        link: "/reporting",
        image: ""
    },
    {
        name: "Kalkulation",
        link: "/kalkulation",
        image: ""
    },
    {
        name: "Impressum",
        link: "/impressum",
        image: ""
    }
]

const navigationLinks = [
    {
        name: "Start",
        link: "/",
        image: "/home-svgrepo-com.svg"
    },
    {
        name: "Stammdaten",
        link: "/user-data",
        image: ""
    },
    //{
    //    name: "Lagersysteme",
    //    link: "/storage-systems",
    //    image: ""
    //},
    {
        name: "Reporting",
        link: "/reporting",
        image: ""
    },
    {
        name: "Impressum",
        link: "/impressum",
        image: ""
    }
]

const NavigationLinks = () => {

    const router = useRouter()

    const [userPermissions] = useState(JSON.parse(sessionStorage.getItem('user') as string));

        return (
            <div id="links" className="ml-10 text-xs flex">
                {   userPermissions.admin ?
                    navigationLinksAdmin.map((link) =>
                    <div className="flex m-auto" key={link.name} id={link.name}>
                        <Link legacyBehavior key={link.name} href={link.link}>
                            <a className="">
                                <div className="flex px-3 py-1">
                                    <img className="mr-1.5 mb-1.5 h-4" src={link.image}/>
                                    <span className="m-auto">
                                        {link.name}
                                    </span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    )
                : navigationLinks.map((link) =>
                        <div className="flex m-auto" key={link.name} id={link.name}>
                            <Link legacyBehavior key={link.name} href={link.link}>
                                <a className="">
                                    <div className="flex px-3 py-1">
                                        <img className="mr-1.5 mb-1.5 h-4" src={link.image}/>
                                        <span className="m-auto">
                                        {link.name}
                                    </span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )
                }
            </div>
        )
}

export default NavigationLinks