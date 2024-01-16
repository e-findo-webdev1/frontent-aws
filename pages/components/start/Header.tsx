const Header = () => {
    return (
        <div id="header" className="text-center">
            <span className="font-bold text-xl mb-2 font-serif">Money Control System</span>
            <br/>
            <span className="text-sm">für</span>
            <br/>
            <span className="font-bold text-sm">
            {typeof window !== 'undefined'
                ? JSON.parse(sessionStorage.getItem("company") as string).client_name
                : ''}</span>
        </div>
    )
}

export default Header