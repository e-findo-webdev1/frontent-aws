import Link from "next/link";

const NavigationButtons = () => {
    const userLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('company');
        // @ts-ignore
        window.location.reload(false);
    }

    return(
        <div id="navigation-buttons" className="flex ml-auto space-x-2 mt-2.5 mr-10">
                <Link href="/">
                    <button type="submit" className="flex" onClick={()=>userLogout()}>
                        <img className="m-auto mr-1.5 " src="/power-on-svgrepo-com 1.svg" width="15"/>
                        <span className="text-xs m-auto mr-10">Ausloggen</span>
                    </button>
                </Link>
        </div>
    )
}

export default NavigationButtons