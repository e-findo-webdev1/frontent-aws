const Header = () => {
    return (
        <div id="header">
            <span className="text-3xl font-bold font-serif">Money Control System</span>
            <span className="text-2xl mx-2">für</span><span className="text-2xl font-bold">
            {typeof window !== 'undefined' && sessionStorage.getItem("comapny")
                ? sessionStorage.getItem("company")
                : ''}</span>
            <hr className="mt-2.5"/>
        </div>
    )
}

export default Header