import {useEffect, useState} from "react";
import Chart from 'chart.js/auto';

const dataYear2022 = [
    {
        month: "Januar",
        weight: 384840,
        value: 116798.95,
        income: 116798.95,
        delta: 0
    },
    {
        month: "Februar",
        weight: 323660,
        value: 103538.83,
        income: 103538.83,
        delta: 0
    },
    {
        month: "März",
        weight: 377220,
        value: 145380.59,
        income: 145380.59,
        delta: 0
    },
    {
        month: "April",
        weight: 377220,
        value: 145380.59,
        income: 145380.59,
        delta: 0
    },
    {
        month: "Mai",
        weight: 353560,
        value: 121306.45,
        income: 121306.45,
        delta: 0
    },
    {
        month: "Juni",
        weight: 360520,
        value: 91896.56,
        income: 91896.56,
        delta: 0
    },
    {
        month: "Juli",
        weight: 348930,
        value: 72682.11,
        income: 72682.11,
        delta: 0
    },
    {
        month: "August",
        weight: 370400,
        value: 79228.57,
        income: 79228.57,
        delta: 0
    },
    {
        month: "September",
        weight: 326190,
        value: 73816.80,
        income: 73816.80,
        delta: 0
    },
    {
        month: "Oktober",
        weight: 0,
        value: 0,
        income: 0,
        delta: 0
    },
    {
        month: "November",
        weight: 0,
        value: 0,
        income: 0,
        delta: 0
    },
    {
        month: "Dezember",
        weight: 0,
        value: 0,
        income: 0,
        delta: 0
    }
]
const dataYear2021 = [
    {
        month: "Januar",
        weight: 18050,
        value: 17787.88,
        income: 17618.68,
        delta: -169.20
    },
    {
        month: "Februar",
        weight: 18350,
        value: 16350.75,
        income: 16350.75,
        delta: 0
    },
    {
        month: "März",
        weight: 22140,
        value: 22984.53,
        income: 22920.63,
        delta: 0
    },
    {
        month: "April",
        weight: 20650,
        value: 23709.27,
        income: 23709.27,
        delta: 0
    },
    {
        month: "Mai",
        weight: 16600,
        value: 20713.02,
        income: 20713.02,
        delta: 0
    },
    {
        month: "Juni",
        weight: 20170,
        value: 27265.76,
        income: 27265.76,
        delta: 0
    },
    {
        month: "Juli",
        weight: 19240,
        value: 24094.16,
        income: 24094.16,
        delta: 0
    },
    {
        month: "August",
        weight: 11660,
        value: 15660.60,
        income: 15620.40,
        delta: -40.20
    },
    {
        month: "September",
        weight: 16170,
        value: 23229.67,
        income: 23173.87,
        delta: -55.80
    },
    {
        month: "Oktober",
        weight: 19670,
        value: 28384.60,
        income: 28299.60,
        delta: -85.00
    },
    {
        month: "November",
        weight: 19060,
        value: 26784.52,
        income: 26614.52,
        delta: -170
    },
    {
        month: "Dezember",
        weight: 11760,
        value: 17030.21,
        income: 17030.21,
        delta: 0
    }
]
const dataYear2020 = [
    {
        month: "Januar",
        weight: 23760,
        value: 22528.90,
        income: 22528.90,
        delta: 0
    },
    {
        month: "Februar",
        weight: 19670,
        value: 20394.86,
        income: 17870.25,
        delta: -2524.61
    },
    {
        month: "März",
        weight: 23820,
        value: 21134.32,
        income: 21027.22,
        delta: -107.10
    },
    {
        month: "April",
        weight: 9360,
        value: 6446.56,
        income: 6446.5,
        delta: 0
    },
    {
        month: "Mai",
        weight: 8230,
        value: 7576.77,
        income: 7576.77,
        delta: 0
    },
    {
        month: "Juni",
        weight: 18130,
        value: 14436.99,
        income: 14356.66,
        delta: -80.33
    },
    {
        month: "Juli",
        weight: 17850,
        value: 13368.21,
        income: 13368.21,
        delta: 0
    },
    {
        month: "August",
        weight: 19470,
        value: 14690.88,
        income: 14690.88,
        delta: 0
    },
    {
        month: "September",
        weight: 21430,
        value: 14098.56,
        income: 14098.56,
        delta: 0
    },
    {
        month: "Oktober",
        weight: 20920,
        value: 18200.47,
        income: 18283.27,
        delta: 82.80
    },
    {
        month: "November",
        weight: 16680,
        value: 14374.71,
        income: 14374.71,
        delta: 0
    },
    {
        month: "Dezember",
        weight: 14120,
        value: 11086.87,
        income: 11086.87,
        delta: 0
    }
]

const AnnualEvaluation = () => {
    const [dataset, setDataset] = useState(dataYear2022)
    const [year, setYear] = useState(2022)

    useEffect(()=>{
        if (year == 2022) {
            setDataset(dataYear2022)
        }
        if (year == 2021) {
            setDataset(dataYear2021)
        }
        if (year == 2020) {
            setDataset(dataYear2020)
        }

        const labels = [
            'Jan',
            'Feb',
            'Mrz',
            'Apr',
            'Mai',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dez'
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'Gesamt-Werksgewicht',
                backgroundColor: 'rgb(218,0,44)',
                borderColor: 'rgb(218,0,44)',
                data: dataset.filter(month => month.weight != 0).map(month=>month.weight),
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                        suggestedMin: 0,
                    }
                },
                plugins: {
                    legend: {
                        position: 'right'
                    }
                },
            },
        };

        // @ts-ignore
        document.getElementById("line-chart").innerHTML =
            "<canvas id=\"myChart\"></canvas>"

        const myChart = new Chart(
            // @ts-ignore
            document.getElementById('myChart'),
            config
        );
    },)

    return(
        <div id="content-page" className="overflow-auto h-full px-20">
            <p className="mt-9 text-3xl font-bold mb-5">Jahresauswertung</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines">
                    <option selected>- Alle -</option>
                    <option value="4711">4711</option>
                    <option value="4712">4712</option>
                    <option value="9001">9001</option>
                    <option value="9002">9002</option>
                </select>
            </div>
            <div className="font-bold justify-center flex space-x-10 my-5">
                <button
                    className={
                        year == 2020
                            ? "text-gray-300 pointer-events-none"
                            : ""
                    }
                    onClick={
                        year > 2020
                            ? ()=>{setYear(year-1)}
                            : ()=>{}
                    }
                >&lt;</button>
                <span>{year}</span>
                <button
                    className={
                        year == 2022
                            ? "text-gray-300 pointer-events-none"
                            : ""
                    }
                    onClick={
                        year < 2022
                            ? ()=>{setYear(year+1)}
                            : ()=>{}
                    }
                >&gt;</button>
            </div>
            <span className="text-xs uppercase font-bold text-gray-500">Gewichtentwicklung</span>
            <div className="mb-10 mt-5" id="line-chart"/>
            <div className="sm:rounded-lg shadow-md border">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Monat</th>
                        <th className="font-normal text-right">Werksgewicht</th>
                        <th className="font-normal text-right">Betrag Werksgewicht	</th>
                        <th className="font-normal text-right">Betrag erhalten</th>
                        <th className="font-normal text-right">Delta</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {   year == 2022
                        ? dataYear2022.map((month) =>
                        <tr key={month.month} className="text-xs border-t">
                            <td>{month.month} {year}</td>
                            <td className="text-right">{month.weight}</td>
                            <td className="text-right">{month.value} €</td>
                            <td className="text-right">{month.income} €</td>
                            <td className="text-right">{month.delta} €</td>
                        </tr>
                        )
                        : year == 2021
                            ? dataYear2021.map((month) =>
                                <tr key={month.month} className="text-xs border-t">
                                    <td>{month.month} {year}</td>
                                    <td className="text-right">{month.weight}</td>
                                    <td className="text-right">{month.value} €</td>
                                    <td className="text-right">{month.income} €</td>
                                    <td className="text-right">{month.delta} €</td>
                                </tr>
                            )
                            : year == 2020
                        ? dataYear2020.map((month) =>
                                    <tr key={month.month} className="text-xs border-t">
                                        <td>{month.month} {year}</td>
                                        <td className="text-right">{month.weight}</td>
                                        <td className="text-right">{month.value} €</td>
                                        <td className="text-right">{month.income} €</td>
                                        <td className="text-right">{month.delta} €</td>
                                    </tr> )
                                : <div/>
                    }
                    <tr>
                        <td colSpan={5}>
                            <hr/>
                        </td>
                    </tr>
                    { year == 2022
                        ? <tr className="text-xs">
                            <td/>
                            <td className="text-right">3310060</td>
                            <td className="text-right">938366.63 €</td>
                            <td className="text-right">938366.63 €</td>
                            <td className="text-right">0 €</td>
                        </tr>
                        : year == 2021
                        ?   <tr className="text-xs">
                                <td/>
                                <td className="text-right">213520</td>
                                <td className="text-right">263994.97 €</td>
                                <td className="text-right">263410.87 €</td>
                                <td className="text-right">-584.10 €</td>
                        </tr>
                            : year == 2020
                        ?   <tr className="text-xs">
                                    <td/>
                                    <td className="text-right">213440</td>
                                    <td className="text-right">178338.10 €</td>
                                    <td className="text-right">175708.86 €</td>
                                    <td className="text-right">-2629.24 €</td>
                                </tr>
                                : <div/>

                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnnualEvaluation