const Summary = () => {
    return(
        <div id="summary" className="sm:rounded-lg shadow-md border flex-row text-center p-3 mt-1 text-sm">
            <div className="flex">
                <p className="flex-grow flex-1 font-bold">Einsparung CO2</p>
                <p className="flex-grow flex-1 font-bold">470.319,49 kg</p>
            </div>
            <div className="flex mt-2">
                <p className="flex-grow flex-1 font-bold">Gesamterlöse</p>
                <p className="flex-grow flex-1 font-bold">4.683.004,51 €</p>
            </div>
        </div>
    )
}

export default Summary