import Link from "next/link";
const Logo = () => {
    return (
        <div id="logo" className="mx-5 my-auto" >
            <Link href="/">
                <a><img className="ml-5 h-10" src="/logo-1.png" alt="logo"/></a>
            </Link>
        </div>
    )
}

export default Logo