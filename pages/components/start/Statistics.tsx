const Statistics = () => {
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;
    return (
        <div id="statistics" className="sm:rounded-lg shadow-md border flex-row text-center p-3 mt-1 text-xs">
            <div className="flex">
                <p className="flex-grow flex-1">
                    <span className="font-bold">Aktuell</span><br/>{date}</p>
                <p className="flex-grow flex-1">
                    <span className="font-bold">Gesamtmenge aller eMSS<br/></span>10.720 kg</p>
                <p className="flex-grow flex-1">
                    <span className="font-bold">Erlös<br/></span>2.338,62 €</p>
            </div>
            <hr className="my-2 mx-10"/>
            <div className="flex">
                <p className="flex-grow flex-1">
                    <span className="font-bold">lfd. Monat</span><br/>Oktober 2022</p>
                <p className="flex-grow flex-1">
                    <span className="font-bold">Gesamtmenge aller eMSS<br/></span>86.630 kg</p>
                <p className="flex-grow flex-1">
                    <span className="font-bold">Gesamterlöse<br/></span>0 €</p>
            </div>
        </div>
    )
}

export default Statistics