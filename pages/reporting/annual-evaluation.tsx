import {useEffect, useState} from "react";
import Chart from 'chart.js/auto';
import moment from "moment";
import API from "axios";
import Link from "next/link";

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

    const [currentYear, setCurrentYear] = useState<any>();
    const [controlDocuments, setControlDocuments] = useState<any>({set: false});
    const [machinesData, setMachinesData] = useState<any>();
    const [selectedMachine, setSelectedMachine] = useState<any>('- Alle -');
    const [myChart, setMyChart] = useState<any>({set: false});
    const [weighingCertificates, setWeighingCertificates] = useState<any>();
    const [selectedCategory, setSelectedCategory] = useState<any>('Gewichtentwicklung');
    const [priceMatrices, setPriceMatrices] = useState<any>();
    const [sorts, setSorts] = useState<any>();

    useEffect(()=>{
        if (!currentYear) {
            setCurrentYear(moment().year())
        }

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
            .then((response) => {
                    setWeighingCertificates(
                        response.data.Items.filter((certificate: any) => certificate.client_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_id)
                            .filter((certificate: any) => moment(certificate.endOfCycle).year() == currentYear)
                    );
                    console.log(weighingCertificates)

            })
            .catch((error) => {
                console.log(error.response);
            });


        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
            .then((response) => {
                setPriceMatrices(
                    response.data.Items
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
                        if (selectedMachine == "- Alle -" ) {
                            setControlDocuments(
                                response.data.Items
                                    .filter((document: any) => moment(document.endOfCycle).year() == currentYear)
                                    .filter((document: any) =>
                                        machinesData.reduce(function (a: any, b: any) {
                                            return a + (b['machine_id']);
                                        }, []).includes(document.machine_id)
                                    )
                            );
                        } else {
                            setControlDocuments(
                                response.data.Items
                                    .filter((document: any) => document.machine_id == selectedMachine)
                                    .filter((document: any) => moment(document.endOfCycle).year() == currentYear)
                                    .filter((document: any) =>
                                        machinesData.reduce(function (a: any, b: any) {
                                            return a + (b['machine_id']);
                                        }, []).includes(document.machine_id)
                                    )
                            );
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
                        const datasets = controlDocuments.reduce(function (a: any, b: any) {
                            if (a && a.includes(b['waretype']) == false) {
                                return [...a, (b['waretype'])];
                            } else {
                                return a
                            }
                        }, [])

                        if (selectedCategory == 'Gewichtentwicklung') {
                            const dataset = []
                            for (let month in labels) {
                                if (controlDocuments.filter((document: any) =>
                                    moment(document.endOfCycle).month() == parseInt(month)
                                ).length == 0) {
                                    dataset.push([labels[month], 0])
                                } else {
                                    dataset.push([controlDocuments.filter((document: any) =>
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

                            const colors = [
                                'rgb(232,188,83)',
                                'rgb(88,206,48)',
                                'rgb(99,217,213)',
                                'rgb(56,97,201)',
                                'rgb(161,68,192)',
                                'rgb(194,100,41)',
                                'rgb(166,220,150)',
                                'rgb(69,203,142)',
                            ]

                            for (let dataset in datasets) {
                                data.datasets.push(
                                    {
                                        label: datasets[dataset],
                                        // @ts-ignore
                                        backgroundColor: colors[dataset],
                                        // @ts-ignore
                                        borderColor: colors[dataset],
                                        data: monthsList.map((month: any) =>
                                            controlDocuments
                                                .filter((document: any) => {
                                                    if (selectedMachine != '- Alle -') {
                                                        return document.machine_id == selectedMachine
                                                    } else {
                                                        return true
                                                    }
                                                })
                                                .filter((document: any) =>
                                                    moment(document.endOfCycle).month() == monthsList.indexOf(month))
                                                .reduce(function (a: any, b: any) {
                                                    return a + ((b['netto']) - b.tara);
                                                }, 0))
                                    }
                                )
                            }

                            const config = {
                                type: 'bar',
                                data: data,
                                options: {
                                    scales: {
                                        y: {beginAtZero: true}
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

                        const datasetsIndex = controlDocuments.reduce(function (a: any, b: any) {
                            if (a && a.includes(b['waretype']) == false) {
                                return [...a, (b['waretype'])];
                            } else {
                                return a
                            }
                        }, [])

                        const datasetExtra = machinesData.reduce(function (a: any, b: any) {
                            if (a && a.includes(b['index']) == false && b['index'] != '') {
                                return [...a, 'Index: ' + b['index']];
                            } else {
                                return a
                            }
                        }, [])

                        for (let dataset in datasetExtra) {
                            datasetsIndex.push(datasetExtra[dataset])
                        }
                        if (selectedCategory == 'Monatspreis') {

                            const data = {
                                labels: labels,
                                datasets: []
                            };


                            const colors = [
                                'rgb(232,188,83)',
                                'rgb(88,206,48)',
                                'rgb(99,217,213)',
                                'rgb(56,97,201)',
                                'rgb(161,68,192)',
                                'rgb(194,100,41)',
                                'rgb(166,220,150)',
                                'rgb(69,203,142)',
                            ]

                            for (let dataset in datasetsIndex) {
                                if (datasetsIndex[dataset].includes('Index')) {
                                    data.datasets.push(
                                        // @ts-ignore
                                        {
                                            // @ts-ignore
                                            label: datasetsIndex[dataset],
                                            // @ts-ignore
                                            backgroundColor: colors[dataset],
                                            // @ts-ignore
                                            borderColor: colors[dataset],
                                            data:
                                                monthsList.map((month: any) =>
                                                    isNaN(parseFloat(
                                                        priceMatrices.filter((matrix: any) =>
                                                            datasetsIndex[dataset].includes(matrix.price_matrix) &&
                                                            datasetsIndex[dataset].includes(matrix.indexgroup_name)
                                                        )[0].prices[month][datasetsIndex[dataset]
                                                            .slice(datasetsIndex[dataset]
                                                                .indexOf("-", datasetsIndex[dataset]
                                                                    .indexOf("-") + 1)+1).replace(" ", "").replace('.', ',')]
                                                    )) == true ? 0 : parseFloat(
                                                        priceMatrices.filter((matrix: any) =>
                                                            datasetsIndex[dataset].includes(matrix.price_matrix) &&
                                                            datasetsIndex[dataset].includes(matrix.indexgroup_name)
                                                        )[0].prices[month][datasetsIndex[dataset]
                                                            .slice(datasetsIndex[dataset]
                                                                .indexOf("-", datasetsIndex[dataset]
                                                                    .indexOf("-") + 1)+1).replace(" ", "").replace('.', ',')]
                                                    )
                                                )
                                        }
                                    );
                                } else {
                                    data.datasets.push(
                                        // @ts-ignore
                                        {
                                            label: datasetsIndex[dataset],
                                            // @ts-ignore
                                            backgroundColor: colors[dataset],
                                            // @ts-ignore
                                            borderColor: colors[dataset],
                                            data: monthsList.map((month: any) =>
                                                parseInt(machinesData
                                                    .filter((machine: any) => machine.waretype ==
                                                        datasetsIndex[dataset])
                                                    .map((machine: any) =>
                                                        machine.price_list.prices[currentYear][month]
                                                    )))
                                        }
                                    )
                                }
                            }

                            const config = {
                                type: 'bar',
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
                                                                style: 'currency',
                                                                currency: 'EUR'
                                                            }
                                                        ).format(context.parsed.y);
                                                    }
                                                    if (label) {
                                                        label += ' / t';
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
                            const datasetsPrices = controlDocuments.reduce(function (a: any, b: any) {
                                if (a && a.includes(b['waretype']) == false) {
                                    return [...a, (b['waretype'])];
                                } else {
                                    return a
                                }
                            }, [])

                            if (selectedCategory == 'Erlösentwicklung') {
                                console.log('s')
                                const data: any = {
                                    labels: labels,
                                    datasets: [
                                        {
                                            label: 'Gesamt-Erlöse',
                                            backgroundColor: 'rgb(218,0,44)',
                                            borderColor: 'rgb(218,0,44)',
                                            data: monthsList.map((month: any) =>
                                                controlDocuments
                                                    .filter((document: any) => {
                                                        if (selectedMachine != '- Alle -') {
                                                            return document.machine_id == selectedMachine
                                                        } else {
                                                            return true
                                                        }
                                                    })
                                                    .filter((document: any) =>
                                                        moment(document.endOfCycle).month() ==
                                                        monthsList.indexOf(month))
                                                    .reduce(function (a: any, b: any) {
                                                        return a + ((b['netto']) -b.tara)*
                                                            parseInt(machinesData.filter((machine: any) =>
                                                                machine.machine_id == b['machine_id'])[0]
                                                                // @ts-ignore
                                                                .price_list.prices[moment().year()]
                                                                [monthsList[moment().month()]])/1000
                                                    }, 0))
                                        },
                                    ]
                                };

                                const colors = [
                                    'rgb(232,188,83)',
                                    'rgb(88,206,48)',
                                    'rgb(99,217,213)',
                                    'rgb(56,97,201)',
                                    'rgb(161,68,192)',
                                    'rgb(194,100,41)',
                                    'rgb(166,220,150)',
                                    'rgb(69,203,142)',
                                ]

                                for (let dataset in datasetsPrices) {
                                    data.datasets.push(
                                        {
                                            label: datasetsPrices[dataset],
                                            // @ts-ignore
                                            backgroundColor: colors[dataset],
                                            // @ts-ignore
                                            borderColor: colors[dataset],
                                            data: monthsList.map((month: any) =>
                                                controlDocuments
                                                    .filter((document: any) => {
                                                        if (selectedMachine != '- Alle -') {
                                                            return document.machine_id == selectedMachine
                                                        } else {
                                                            return true
                                                        }
                                                    })
                                                    .filter((document: any) =>
                                                        moment(document.endOfCycle).month() ==
                                                        monthsList.indexOf(month))
                                                    .filter((document: any) => document.waretype ==
                                                        datasetsPrices[dataset])
                                                    .reduce(function (a: any, b: any) {
                                                        return a + ((b['netto']) -b.tara)*
                                                            parseInt(machinesData.filter((machine: any) =>
                                                                machine.machine_id == b['machine_id'])[0]
                                                                // @ts-ignore
                                                                .price_list.prices
                                                                [moment().year()][monthsList[moment().month()]])/1000
                                                    }, 0))
                                        }
                                    )
                                }

                                const config = {
                                    type: 'bar',
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
                                                                style: 'currency',
                                                                currency: 'EUR'
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

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts')
            .then((response) => {
                setSorts(
                    response.data.Items
                );
            })
            .catch((error) => {
                console.log(error.response);
            });

    },[currentYear, selectedMachine, myChart.set, controlDocuments.set, selectedCategory])

    return(
        <div id="content-page" className="overflow-auto h-full px-20">
            <p className="mt-9 text-3xl font-bold mb-5">Jahresauswertung</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines"
                        onChange={(e)=>{setSelectedMachine(e.target.value);
                            setControlDocuments({set: false})}}
                >
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
            <div className="font-bold justify-center flex space-x-10 my-5">
                <button
                    className={currentYear > 2023 ? '' : 'hidden'}
                    onClick={()=>{setCurrentYear(currentYear - 1); setControlDocuments({set: false});
                        setWeighingCertificates([])}}
                >&lt;</button>
                <span>{currentYear}</span>
                <button
                    onClick={()=>{setCurrentYear(currentYear + 1); setControlDocuments({set: false});
                        setWeighingCertificates([])}}
                >&gt;</button>
            </div>
            <div className="flex-row mt-5">
                <Link href="/reporting/monthly-evaluation">
                    <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                    >zur Monatsentwicklung wechseln
                    </button>
                </Link>
                <div className="flex justify-center space-x-1 mt-5">
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>setSelectedCategory('Gewichtentwicklung')}
                    >Gewichtentwicklung
                    </button>
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>setSelectedCategory('Monatspreis')}
                    >Monatspreis
                    </button>
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
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
                                    {machinesData && weighingCertificates
                                    && weighingCertificates.length != 0 ?
                                        weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                            .filter((certificate: any) => {
                                                if (selectedMachine != "- Alle -") {
                                                    return certificate.machine_id == selectedMachine
                                                } else {
                                                    return true
                                                }
                                            })
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['workingWeight'])) *
                                                machinesData
                                                .filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000

                                        }, 0) + ' €' : '0 €'}
                                    </td>
                                <td className="text-right">
                                    {weighingCertificates ? weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['income']));
                                        }, 0) + ' €' : ''}
                                </td>
                                <td className="text-right">
                                    {weighingCertificates
                                    && weighingCertificates.length != 0
                                        ? weighingCertificates.filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                    .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0) - weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000
                                        }, 0) + ' €' : '0 €'}
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
                            { weighingCertificates && machinesData && weighingCertificates.length != 0 ?
                                monthsList.map((month: any) =>
                                weighingCertificates.filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                    .filter((certificate: any) => {
                                        if (selectedMachine != "- Alle -") {
                                            return certificate.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                    .reduce(function (a: any, b: any) {
                                        return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                            (machine: any) => machine.machine_id == b.machine_id)[0]
                                            .price_list.prices[currentYear][month] / 1000
                                    }, 0) + ' €'
                            ).reduce(function (a: any, b: any) {
                                    return a + parseInt(b)
                                }, 0) + ' €' : '0 €'}
                        </td>
                        <td>
                            {weighingCertificates ? weighingCertificates
                                .filter((certificate: any) => {
                                    if (selectedMachine != "- Alle -") {
                                        return certificate.machine_id == selectedMachine
                                    } else {
                                        return true
                                    }
                                })
                                .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0) + ' €' : '0 €'}
                        </td>
                        <td>
                            {weighingCertificates && weighingCertificates.length != 0 && machinesData ?
                                weighingCertificates
                                    .filter((certificate: any) => {
                                        if (selectedMachine != "- Alle -") {
                                            return certificate.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0)  -
                                monthsList.map((month: any) =>
                                    weighingCertificates.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['workingWeight'])) * machinesData.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000
                                        }, 0) + ' €'
                                ).reduce(function (a: any, b: any) {
                                    return a + parseInt(b)
                                }, 0) + ' €' : '0 €'}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnnualEvaluation