import DatePicker from "react-datepicker";
import {useState} from "react";

const Co2Evaluation = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div id="content-page" className="overflow-auto h-full px-48">
            <p className="mt-9 text-3xl font-bold mb-5">CO<sub>2</sub>-Auswertung</p>
            <p className="text-sm">Verehrter Kunde,<br/>
                <br/>
                durch den Einsatz unserer innovativen Technologie, Eco-Storage-Bridge,
                tragen Sie erheblich zum Umweltschutz bei. Das bedeutet für Sie, dass
                Sie seit der Inbetriebnahme Ihres e-findo MehrWert-Speicher-System bis
                zum heutigen Tag, eine Co2 Einsparung erreicht haben von</p>
            <div className="mx-auto w-80 h-20 mt-16 p-3.5 border-gray-400 bg-accent-color-green
                    sm:rounded-lg shadow-md border flex">
                <span className="text-3xl font-bold m-auto">475.995,11 kg</span>
            </div>
            <p className="mt-9 mb-16 text-sm font-bold text-center">
                Herzlichen Glückwunsch!
            </p>
            <hr/>
            <div className="mt-5 flex-row">
                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-sm">Berechnung anzeigen</button>
                <div className="flex space-x-2">
                    <span>Von:</span>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}
                                className="border text-center"/>
                </div>
                <div className="flex space-x-3.5">
                    <span>Bis:</span>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}
                                className="border text-center"/>
                </div>
                <div className="mt-5 ml-10 flex space-x-3.5">
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Anzeigen</button><br/>
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Drucken</button>
                </div>
            </div>
        </div>
    )
}

export default Co2Evaluation