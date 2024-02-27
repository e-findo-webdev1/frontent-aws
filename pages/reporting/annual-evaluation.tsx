'use client'
import {useEffect, useState} from "react";
import Chart from 'chart.js/auto';
import moment from "moment";
import API from "axios";
import Link from "next/link";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useSWR from "swr";
import {machine} from "os";
const fetcher = (url:  string) => fetch(url).then(r => r.json())
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

    const [currentYear, setCurrentYear] = useState<any>(moment().year());
    const [selectedMachine, setSelectedMachine] = useState<any>('- Alle -');
    const [myChart, setMyChart] = useState<any>({set: false});
    const [selectedCategory, setSelectedCategory] = useState<any>('Gewichtentwicklung');
    const [chartsDrawn, setChartsDrawn] = useState<any>(false);
    const [companyMachines, setCompanyMachines] = useState<any>();
    const [filteredControlDocuments, setFilteredControlDocuments] = useState<any>();

    const {data: certificates, error: certificatesError,
        isLoading: certificatesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher)
    const {data: priceMatrices, error: priceMatricesError, isLoading: priceMatricesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices', fetcher)
    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: controlDocuments, error: controlDocumentsError, isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)

    const getCompanyMachines = () => {
        if (!machinesLoading && !companyMachines ) {
            const companyMachines = machines.Items.filter((machine:any) =>
                machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
            )
            setCompanyMachines(companyMachines)
        }
    }
    const filterControlDocuments = () => {
        if (!controlDocumentsLoading && !machinesLoading && !filteredControlDocuments && companyMachines) {
            if (selectedMachine == "- Alle -" ) {
                const filteredControlDocuments =
                    controlDocuments.Items
                        .filter((document: any) => moment(document.endOfCycle).year() == currentYear)
                        .filter((document: any) =>
                            companyMachines.reduce(function (a: any, b: any) {
                                return a + (b['machine_id']);
                            }, []).includes(document.machine_id)
                );
                setFilteredControlDocuments(filteredControlDocuments)
            } else {
                const filteredControlDocuments =
                    controlDocuments.Items
                        .filter((document: any) => document.machine_id == selectedMachine)
                        .filter((document: any) => moment(document.endOfCycle).year() == currentYear)
                        .filter((document: any) =>
                            companyMachines.reduce(function (a: any, b: any) {
                                return a + (b['machine_id']);
                            }, []).includes(document.machine_id)
                );
                setFilteredControlDocuments(filteredControlDocuments)
            }

        }
    }
    const drawCharts = () => {
        if (companyMachines && !priceMatricesLoading && !certificatesLoading && filteredControlDocuments && !chartsDrawn) {
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
            const datasets = filteredControlDocuments.reduce(function (a: any, b: any) {
                if (a && a.includes(b['waretype']) == false) {
                    return [...a, (b['waretype'])];
                } else {
                    return a
                }
            }, [])

            if (selectedCategory == 'Gewichtentwicklung') {
                const dataset = []
                for (let month in labels) {
                    if (certificates.Items.filter((certificate: any) =>
                        moment(certificate.endOfCycle).month() == parseInt(month)
                        && moment(certificate.endOfCycle).year() == parseInt(currentYear)
                    ).length == 0) {
                        dataset.push([labels[month], 0])
                    } else {
                        dataset.push([
                            certificates.Items
                                .filter((document: any) => {
                                    if (selectedMachine != '- Alle -') {
                                        return document.machine_id == selectedMachine
                                    } else {
                                        return true
                                    }
                                })
                                .filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == parseInt(month))
                                .reduce(function (a: any, b: any) {
                                    return a + (parseInt(b['workingWeight']));
                                }, 0)
                        ])
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

                data.datasets.push(
                    {
                        label: 'Gesamt-Abgangsgewicht',
                        // @ts-ignore
                        backgroundColor: 'rgb(232,188,83)',
                        // @ts-ignore
                        borderColor: 'rgb(232,188,83)',
                        data: monthsList.map((month: any) =>
                            filteredControlDocuments
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
                                    return a + ((b['netto']));
                                }, 0))
                    }
                )

                const colors = [
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
                                certificates.Items
                                    .filter((document: any) => {
                                        if (selectedMachine != '- Alle -') {
                                            return document.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                    .filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month))
                                    .reduce(function (a: any, b: any) {
                                        return a + (parseInt(b['workingWeight']));
                                    }, 0))
                        }
                    )
                }

                const config = {
                    type: 'bar',
                    data: data,
                    options: {
                        animation: {
                            duration: 0
                        },
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


                setChartsDrawn(true)
            }

            const datasetsIndex = filteredControlDocuments.reduce(function (a: any, b: any) {
                if (a && a.includes(b['waretype']) == false) {
                    return [...a, (b['waretype'])];
                } else {
                    return a
                }
            }, [])

            // Add indexes unassigned to any machine to display prices for each month
            const datasetPriceMatrices = priceMatrices.Items.filter((matrix: any) => matrix.prices != undefined
                && matrix.prices[currentYear] && matrix.indeces && matrix.indeces != '')
                .reduce(function (a: any, b: any) {
                    for (let index in b['indeces']) {
                        if (b
                            .prices[currentYear] != undefined) {
                            return [...a, 'Index: ' + b['price_matrix'] + ' - ' + b['indexgroup_name'] +
                            ' - ' + b['indeces'][index]];
                        } else {
                            return a
                        }
                    }

                }, [])
            for (let dataset in datasetPriceMatrices) {
                datasetsIndex.push(datasetPriceMatrices[dataset])
            }
            //


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
                                            priceMatrices.Items.filter((matrix: any) =>
                                                datasetsIndex[dataset].includes(matrix.price_matrix) &&
                                                datasetsIndex[dataset].includes(matrix.indexgroup_name)
                                                && matrix.prices[currentYear][month]
                                            )[0].prices[currentYear][month][datasetsIndex[dataset]
                                                .slice(datasetsIndex[dataset]
                                                    .indexOf("-", datasetsIndex[dataset]
                                                        .indexOf("-") + 1) + 1).replace(" ", "").replace('.', ',')]
                                        )) == true ? 0 : parseFloat(
                                            priceMatrices.Items.filter((matrix: any) =>
                                                datasetsIndex[dataset].includes(matrix.price_matrix) &&
                                                datasetsIndex[dataset].includes(matrix.indexgroup_name)
                                                && matrix.prices[currentYear][month]
                                            )[0].prices[currentYear][month][datasetsIndex[dataset]
                                                .slice(datasetsIndex[dataset]
                                                    .indexOf("-", datasetsIndex[dataset]
                                                        .indexOf("-") + 1) + 1).replace(" ", "")
                                                .replace('.', ',')]
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
                                    parseInt(companyMachines
                                        .filter((machine: any) => machine.waretype ==
                                            datasetsIndex[dataset]
                                        )
                                        .filter((machine: any) => machine.price_list.prices[currentYear] && machine.price_list.prices[currentYear][month])
                                        .map((machine: any) =>
                                            machine.price_list.prices[currentYear][month]
                                        )))
                            }
                        )
                    }
                }

                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        animation: {
                            duration: 0
                        },
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
            const datasetsPrices = filteredControlDocuments.reduce(function (a: any, b: any) {
                if (a && a.includes(b['waretype']) == false) {
                    return [...a, (b['waretype'])];
                } else {
                    return a
                }
            }, [])

            if (selectedCategory == 'Erlösentwicklung') {
                const data: any = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Gesamt-Erlöse',
                            backgroundColor: 'rgb(218,0,44)',
                            borderColor: 'rgb(218,0,44)',
                            data: monthsList.map((month: any) =>
                                filteredControlDocuments
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
                                        return a + ((b['netto']) - b.tara) *
                                            parseInt(companyMachines.filter((machine: any) =>
                                                machine.machine_id == b['machine_id'])[0]
                                                // @ts-ignore
                                                .price_list.prices[moment().year()]
                                                [monthsList[moment().month()]]) / 1000
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
                                filteredControlDocuments
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
                                        return a + ((b['netto']) - b.tara) *
                                            parseInt(companyMachines.filter((machine: any) =>
                                                machine.machine_id == b['machine_id'])[0]
                                                // @ts-ignore
                                                .price_list.prices
                                                [moment().year()][monthsList[moment().month()]]) / 1000
                                    }, 0))
                        }
                    )
                }

                const config = {
                    type: 'bar',
                    data: data,
                    options: {
                        animation: {
                            duration: 0
                        },
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
        }
    }

    getCompanyMachines();
    filterControlDocuments();

    useEffect(() => {
        drawCharts();
    }, );

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="mt-9 text-3xl font-bold mb-5">Jahresauswertung</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines"
                        onChange={(e)=>{setSelectedMachine(e.target.value);
                            }}
                >
                    <option selected>- Alle -</option>
                    {!machinesLoading && companyMachines?
                        companyMachines.map((machine: any) =>
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
                    onClick={()=>{setCurrentYear(currentYear - 1);
                        setChartsDrawn(false);
                        setFilteredControlDocuments(undefined);
                        }}
                >&lt;</button>
                <span>{currentYear}</span>
                <button
                    onClick={()=>{setCurrentYear(currentYear + 1);
                        setChartsDrawn(false);
                        setFilteredControlDocuments(undefined);
                        }}
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
                            onClick={()=>{setSelectedCategory('Gewichtentwicklung'); setChartsDrawn(false)}}
                    >Gewichtentwicklung
                    </button>
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>{setSelectedCategory('Monatspreis'); setChartsDrawn(false)}}
                    >Monatspreis
                    </button>
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>{setSelectedCategory('Erlösentwicklung'); setChartsDrawn(false)}}
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
                {!companyMachines && !certificatesLoading && !chartsDrawn && !filteredControlDocuments ?
                    <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                        <Skeleton className="min-h-[50.7rem] mt-5 mb-5 min-w-10/12 sm:rounded-lg shadow-md"/>
                    </SkeletonTheme> :
                    <div className='min-h-[20.2rem] min-w-10/12 mt-5 mb-5'>
                        <div className="mb-10 mt-5 w-10/12" id="line-chart"/>
                        </div>}
            </div>

            <div className="sm:rounded-lg shadow-md border mb-10 w-3/4">
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
                                    {!certificatesLoading ?

                                        certificates.Items
                                            .filter((document: any) => {
                                                if (selectedMachine != '- Alle -') {
                                                    return document.machine_id == selectedMachine
                                                } else {
                                                    return true
                                                }
                                            })
                                            .filter((certificate: any) =>
                                                moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                            &&  moment(certificate.endOfCycle).year() == currentYear
                                            )
                                            .reduce(function (a: any, b: any) {
                                                return a + (parseInt(b['workingWeight']));
                                            }, 0)

                                        : ''}
                                </td>
                                <td className="text-right">
                                    {!machinesLoading && companyMachines && !certificatesLoading
                                    && certificates.Items.length != 0 ?
                                        certificates.Items.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                            &&  moment(certificate.endOfCycle).year() == currentYear)
                                            .filter((certificate: any) => {
                                                if (selectedMachine != "- Alle -") {
                                                    return certificate.machine_id == selectedMachine
                                                } else {
                                                    return true
                                                }
                                            })
                                        .reduce(function (a: any, b: any) {
                                            if (!machinesLoading && companyMachines && companyMachines
                                                .filter(
                                                    (machine: any) => machine.machine_id == b.machine_id)[0].price_list.prices[currentYear]){
                                                return a + parseInt((b['workingWeight'])) *
                                                    companyMachines
                                                        .filter(
                                                            (machine: any) => machine.machine_id == b.machine_id)[0]
                                                        .price_list.prices[currentYear][month] / 1000
                                            } else { return 0 }

                                        }, 0).toFixed(2) + ' €' : '0 €'}
                                    </td>
                                <td className="text-right">
                                    {!certificatesLoading ? certificates.Items.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                        &&  moment(certificate.endOfCycle).year() == currentYear)
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                        .reduce(function (a: any, b: any) {
                                            return a + parseInt((b['income']));
                                        }, 0).toFixed(2) + ' €' : ''}
                                </td>
                                <td className="text-right">
                                    {!machinesLoading && companyMachines && !certificatesLoading
                                    && certificates.Items.length != 0
                                        ? (certificates.Items.filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                            &&  moment(certificate.endOfCycle).year() == currentYear)
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                    .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0) - certificates.Items.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                            &&  moment(certificate.endOfCycle).year() == currentYear)
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                return true
                                            }
                                        })
                                        .reduce(function (a: any, b: any) {
                                            if (!machinesLoading && companyMachines && companyMachines.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0].price_list.prices[currentYear]) {
                                                return a + parseInt((b['workingWeight'])) * companyMachines.filter(
                                                    (machine: any) => machine.machine_id == b.machine_id)[0]
                                                    .price_list.prices[currentYear][month] / 1000
                                            } else {return 0}

                                        }, 0)).toFixed(2) + ' €' : '0 €'}
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
                            {
                                !certificatesLoading && !machinesLoading && companyMachines && certificates.Items.length != 0?

                                    certificates.Items.filter((certificate: any) => moment(certificate.endOfCycle).year() == currentYear)
                                        .reduce(function (a: any, b: any) {
                                            return a + (parseInt(b['workingWeight']));
                                        }, 0)

                                    : ''}
                        </td>
                        <td>
                            { !certificatesLoading && !machinesLoading && companyMachines && certificates.Items.length != 0 ?
                                monthsList.map((month: any) =>
                                certificates.Items.filter((certificate: any) =>
                                    moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                    &&  moment(certificate.endOfCycle).year() == currentYear
                                )
                                    .filter((certificate: any) => {
                                        if (selectedMachine != "- Alle -") {
                                            return certificate.machine_id == selectedMachine
                                        } else {
                                            if (moment(certificate.endOfCycle).year() == currentYear) {
                                                return true
                                            }
                                        }
                                    })
                                    .reduce(function (a: any, b: any) {
                                        if (!machinesLoading && companyMachines && companyMachines.filter(
                                            (machine: any) => machine.machine_id == b.machine_id)[0].price_list.prices[currentYear]) {
                                            return a + parseInt((b['workingWeight'])) * companyMachines.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0]
                                                .price_list.prices[currentYear][month] / 1000
                                        } else {return 0}

                                    }, 0) + ' €'
                            ).reduce(function (a: any, b: any) {
                                    return a + parseInt(b)
                                }, 0).toFixed(2)  + ' €' : '0 €'}
                        </td>
                        <td>
                            {!certificatesLoading ?
                                certificates.Items
                                .filter((certificate: any) => {
                                    if (selectedMachine != "- Alle -") {
                                        return certificate.machine_id == selectedMachine
                                    } else {
                                        if (moment(certificate.endOfCycle).year() == currentYear) {
                                            return true
                                        }
                                    }
                                })
                                .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0).toFixed(2)  + ' €' : '0 €'}
                        </td>
                        <td>
                            {!certificatesLoading && certificates.Items.length != 0 && companyMachines && !machinesLoading ?
                                certificates.Items
                                    .filter((certificate: any) => {
                                        if (selectedMachine != "- Alle -") {
                                            return certificate.machine_id == selectedMachine
                                        } else {
                                            if (moment(certificate.endOfCycle).year() == currentYear) {
                                                return true
                                            }
                                        }
                                    })
                                .reduce(function (a: any, b: any) {
                                    return a + parseInt((b['income']));
                                }, 0)  -
                                monthsList.map((month: any) =>
                                    certificates.Items.filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(month)
                                        &&  moment(certificate.endOfCycle).year() == currentYear)
                                        .filter((certificate: any) => {
                                            if (selectedMachine != "- Alle -") {
                                                return certificate.machine_id == selectedMachine
                                            } else {
                                                    return true

                                            }
                                        })
                                        .reduce(function (a: any, b: any) {
                                            if (!machinesLoading && companyMachines && companyMachines.filter(
                                                (machine: any) => machine.machine_id == b.machine_id)[0].price_list.prices[currentYear]) {
                                                return a + parseInt((b['workingWeight'])) * companyMachines.filter(
                                                    (machine: any) => machine.machine_id == b.machine_id)[0]
                                                    .price_list.prices[currentYear][month] / 1000
                                            }
                                                else {return 0}
                                        }, 0) + ' €'
                                ).reduce(function (a: any, b: any) {
                                    return a + parseInt(b)
                                }, 0).toFixed(2)  + ' €' : '0 €'}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnnualEvaluation