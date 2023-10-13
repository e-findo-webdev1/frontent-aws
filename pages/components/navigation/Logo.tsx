import Link from "next/link";
const Logo = () => {
    return (
        <div id="logo" className="mx-5 my-auto" >
            <Link href="/">
                <img className="ml-5 h-10 cursor-pointer" src="/logo-1.png" alt="logo"/>
            </Link>
        </div>
    )
}

export default Logo