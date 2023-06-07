import {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import Link from "next/link";
import Chart from 'chart.js/auto';

const dataYear2022: any = []

const MonthlyEvaluation = () => {
    const monthsList = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ]
    const [dataset, setDataset] = useState<any>(dataYear2022);
    const [machinesData, setMachinesData] = useState<any>();
    const [controlDocuments, setControlDocuments] = useState<any>();
    const [year, setYear] = useState<any>(moment().year());
    const [month, setMonth] = useState<any>(monthsList[moment().month()])

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items.filter((machine: any)=>
                    machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name))
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
            .then((response) => {
                setControlDocuments(response.data.Items.filter((controlDocument: any)=>
                    controlDocument.client_id ==
                    JSON.parse(sessionStorage.getItem('company') as string).client_id))
            })
            .catch((error) => {
                console.log(error); //
            });

        const labels = [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'Gesamt-Werksgewicht',
                backgroundColor: 'rgb(218,0,44)',
                borderColor: 'rgb(218,0,44)',
                data: dataset.filter((month: any) => month.weight != 0).map((month:any)=>month.weight),
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
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
        // @ts-ignore
        document.getElementById("line-chart2").innerHTML =
            "<canvas id=\"myChart2\"></canvas>"


        const myChart = new Chart(
            // @ts-ignore
            document.getElementById('myChart'),
            config
        );

        const myChart2 = new Chart(
            // @ts-ignore
            document.getElementById('myChart2'),
            config
        );

    }, []);

    return(
        <div id="content-page" className="overflow-auto h-full px-24">
            <p className="mt-5 text-3xl font-bold mb-5">Monatsauswertung</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines">
                    <option selected>- Alle -</option>
                    {machinesData ?
                    machinesData.map((machine: any) =>
                        <option key={machine.machine_id}
                                value={machine.machine_id}>{machine.machine_id}
                        </option>
                    )
                    : ""}
                </select>
            </div>
            <div className="font-bold justify-center flex space-x-10 mt-5 mb-3">
                <button>&lt;</button>
                <span>{month} {year}</span>
                <button>&gt;</button>
            </div>
            <Link href="/reporting/annual-evaluation">
                <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">zur Jahresentwicklung wechseln
                </button>
            </Link>
            <div className="flex mt-5">
                <div className="flex m-auto space-x-1">
                <Link href="/reporting/annual-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Gewichtentwicklung
                    </button>
                </Link>
                <Link href="/reporting/annual-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Monatspreis
                    </button>
                </Link>
                <Link href="/reporting/annual-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Erlösentwicklung
                    </button>
                </Link>
                </div>
            </div>
            <p className="mt-5 text-xs uppercase font-bold text-gray-500">Gewichtentwicklung</p>
            <div className="mb-10 mt-5 w-10/12" id="line-chart"/>
            <div className="mb-10 mt-5 w-10/12" id="line-chart2"/>
            <div className="sm:rounded-lg shadow-md border">
                <table className="flex-row w-full table-auto overflow-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 text-right border-b">
                        <th className="font-normal">Datum</th>
                        <th className="font-normal text-right">Wiege-Nr.<br/>
                            Masch.-ID</th>
                        <th className="font-normal text-right">PDF</th>
                        <th className="font-normal text-right">Warenart<br/>
                            Sorte-Nr.</th>
                        <th className="font-normal text-right">Abgangs-<br/>
                            gew.</th>
                        <th className="font-normal text-right">Werks-<br/>
                            gew.</th>
                        <th className="font-normal text-right">Delta<br/>
                            (A. -W.)</th>
                        <th className="font-normal text-right">Monats-<br/>
                            preis</th>
                        <th className="font-normal text-right">Betrag<br/>
                            Abgangsgew.</th>
                        <th className="font-normal text-right">Betrag<br/>
                            Werksgew.</th>
                        <th className="font-normal text-right">Betrag<br/>
                            erhalten</th>
                        <th className="font-normal text-right">Delta<br/>
                            (Werk. -erh.)</th>
                        <th className="font-normal text-right">Proforma</th>
                        <th className="font-normal text-right">Wiege-<br/>
                            schein</th><th className="font-normal text-right">Bemerkung</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    <tr>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MonthlyEvaluation
