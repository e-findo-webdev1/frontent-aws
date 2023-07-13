import {useEffect, useState} from "react";
import Chart from 'chart.js/auto';
import moment from "moment";
import API from "axios";
import {machine} from "os";

const AnnualEvaluation = () => {
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

    const [currentYear, setCurrentYear] = useState(moment().year());
    const [controlDocuments, setControlDocuments] = useState<any>({set: false});
    const [machinesData, setMachinesData] = useState<any>();
    const [selectedMachine, setSelectedMachine] = useState<any>('- Alle -');
    const [myChart, setMyChart] = useState<any>({set: false});
    const [weighingCertificates, setWeighingCertificates] = useState<any>();
    const [selectedCategory, setSelectedCategory] = useState<any>('Gewichtentwicklung');

    useEffect(()=>{

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
            .then((response) => {
                setWeighingCertificates(
                    response.data.Items.filter((certificate: any) => certificate.client_id ==
                        JSON.parse(sessionStorage.getItem('company') as string).client_id)
                );
            })
            .catch((error) => {
                console.log(error.response);
            });

        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items.filter((machine: any)=>
                    machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name));
                API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                    .then((response) => {
                        setControlDocuments(
                            response.data.Items
                                .filter((document: any) => moment(document.endOfCycle).year() == currentYear)
                                .filter((document: any) =>
                                    machinesData.reduce(function (a: any, b: any) {
                                        return a + (b['machine_id']);
                                    }, []).includes(document.machine_id)
                                )
                        );

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


                        if (selectedCategory == 'Gewichtentwicklung') {
                            const dataset = []
                            for (let month in labels) {
                                if (controlDocuments.filter((document: any) =>
                                    moment(document.endOfCycle).month() == parseInt(month)
                                ).length == 0) {
                                    dataset.push([labels[month], 0])
                                } else {
                                    dataset.push([labels[month], controlDocuments.filter((document: any) =>
                                        moment(document.endOfCycle).month() == parseInt(month))
                                        .reduce(function (a: any, b: any) {
                                            return a + (parseInt((b['netto'])) - parseInt((b['tara'])));
                                        }, 0)])
                                }
                            }

                            const data = {
                                labels: labels,
                                datasets: [{
                                    label: 'Gesamt-Werksgewicht',
                                    backgroundColor: 'rgb(218,0,44)',
                                    borderColor: 'rgb(218,0,44)',
                                    data: dataset,
                                }]
                            };

                            const config = {
                                type: 'line',
                                data: data,
                                options: {
                                    scales: {
                                        y: {}
                                    },
                                    plugins: {
                                        legend: {
                                            position: 'right'
                                        },
                                        tooltip: {
                                            callbacks: {
                                                label: function (context: any) {
                                                    let label = context.dataset.label || '';

                                                    if (label) {
                                                        label += ': ';
                                                    }
                                                    if (context.parsed.y !== null) {
                                                        label += new Intl.NumberFormat('de-DE', {
                                                            style: 'unit',
                                                            unit: 'kilogram'
                                                        }).format(context.parsed.y);
                                                    }
                                                    return label;
                                                }
                                            }
                                        }
                                    },
                                },
                            };

                            // @ts-ignore
                            document.getElementById("line-chart").innerHTML =
                                "<canvas id=\"myChart\"></canvas>"

                            setMyChart(new Chart(
                                // @ts-ignore
                                document.getElementById('myChart'),
                                config
                            ));
                        }

                    })
                    .catch((error) => {
                        console.log(error.response);
                    });
            })
            .catch((error) => {
                console.log(error); //
            });


    },[currentYear, selectedMachine, myChart.set, controlDocuments.set, selectedCategory])

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
                >&lt;</button>
                <span>{currentYear}</span>
                <button
                >&gt;</button>
            </div>
            <div className="flex mt-5">
                <div className="flex m-auto space-x-1">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>setSelectedCategory('Gewichtentwicklung')}
                    >Gewichtentwicklung
                    </button>
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>setSelectedCategory('Monatspreis')}
                    >Monatspreis
                    </button>
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>setSelectedCategory('Erlösentwicklung')}
                    >Erlösentwicklung
                    </button>
                </div>
            </div>
            <div>
                <p className="mt-5 text-xs uppercase font-bold text-gray-500">
                    {selectedCategory == 'Gewichtentwicklung' ? 'Gewichtentwicklung'
                        : selectedCategory == 'Monatspreis' ? 'Indexpreis-Verlauf'
                            : selectedCategory == 'Erlösentwicklung' ? 'Erlösentwicklung' : ''}
                </p>
                <div className="mb-10 mt-5 w-10/12" id="line-chart"/>
            </div>

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
                        {monthsList.map((month: any) =>
                            <tr key={month} className="text-xs text-gray-500 border-b text-left">
                                <td>
                                    {month} {currentYear}
                                </td>
                                <td className="text-right">
                                    {controlDocuments.set != false ? controlDocuments.filter((document: any) =>
                                        moment(document.endOfCycle).month() == monthsList.indexOf(month))
                                        .reduce(function (a: any, b: any) {
                                            return a + (parseInt((b['netto'])) - parseInt((b['tara'])));
                                        }, 0): ''}
                                </td>
                                <td className="text-right">
                                    {machinesData && weighingCertificates ? weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000
                                        }, 0) + ' €' : ''}
                                    </td>
                                <td className="text-right">
                                    {weighingCertificates ? weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['income']));
                                        }, 0) + ' €' : ''}
                                </td>
                                <td className="text-right">
                                    {weighingCertificates ? weighingCertificates.filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                    .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0) - weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000
                                        }, 0) + ' €' : ''}
                                </td>
                            </tr>
                        )
                        }
                    <tr>
                        <td colSpan={5}>
                            <hr/>
                        </td>
                    </tr>
                    <tr className="text-xs text-gray-500 border-b text-right">
                        <td/>
                        <td>
                            {controlDocuments.set != false ? controlDocuments
                                .reduce(function (a: any, b: any) {
                                    return a + (parseInt((b['netto'])) - parseInt((b['tara'])));
                                }, 0): ''}
                        </td>
                        <td>
                            { weighingCertificates && machinesData ?
                                monthsList.map((month: any) =>
                                weighingCertificates.filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                    .reduce(function (a: any, b: any) {
                                        return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                            (machine: any) => machine.machine_id == b.machine_id)[0]
                                            .price_list.prices[currentYear][month] / 1000
                                    }, 0) + ' €'
                            ).reduce(function (a: any, b: any) {
                                    return a + parseInt(b)
                                }, 0) + ' €' : ''}
                        </td>
                        <td>
                            {weighingCertificates ? weighingCertificates
                                .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0) + ' €' : ''}
                        </td>
                        <td>
                            {weighingCertificates && machinesData ?
                                weighingCertificates
                                .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0)  -
                                monthsList.map((month: any) =>
                                    weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000
                                        }, 0) + ' €'
                                ).reduce(function (a: any, b: any) {
                                    return a + parseInt(b)
                                }, 0) + ' €' : ''}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnnualEvaluation