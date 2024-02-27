'use client'
import Navigation from "./navigation/Navigation";
import Breadcrumbs from "./navigation/Breadcrumbs";

// @ts-ignore
export default function Layout({ children }) {
    return (
        <>
            <Navigation/>
            <hr/>
            <Breadcrumbs/>
            {children}
        </>
    )
}