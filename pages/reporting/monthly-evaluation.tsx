'use client'
import {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import Link from "next/link";
import Chart from 'chart.js/auto';
import PDF from "../components/helpers/pdf";
import PDFLink from "../components/helpers/pdfLink";
import Proforma from "../components/helpers/proforma";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useSWR from "swr";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
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

    const [selectedMachine, setSelectedMachine] = useState<any>('- Alle -');
    const [selectedMonth, setSelectedMonth] = useState<any>(monthsList[moment().month()])
    const [selectedYear, setSelectedYear] = useState<any>(moment().year());
    const [popupCertificate, setPopupCertificate] = useState<any>();
    const [receivedIncome, setReceivedIncome] = useState<any>(0);
    const [myChart, setMyChart] = useState<any>();
    const [myChart2, setMyChart2] = useState<any>();
    const [selectedCategory, setSelectedCategory] = useState<any>('Gewichtentwicklung');
    const [filteredControlDocuments, setFilteredControlDocuments] = useState<any>();
    const [companyMachines, setCompanyMachines] = useState<any>();
    const [chartsDrawn, setChartsDrawn] = useState<any>(false);


    const {data: waretypes, error: waretypesError,
        isLoading: waretypesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes', fetcher)
    const {data: priceMatrices, error: priceMatricesError, isLoading: priceMatricesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices', fetcher)
    const {data: controlDocuments, error: controlDocumentsError,
        isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
    const {data: machinesData, error: machinesDataError,
        isLoading: machinesDataLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: certificates, error: certificatesError,
        isLoading: certificatesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher)

    const filterControlDocuments = () => {
        if (!controlDocumentsLoading && !machinesDataLoading && !filteredControlDocuments) {
            const filteredControlDocuments = controlDocuments.Items.filter((document: any) =>
                moment(document.endOfCycle).year() == selectedYear
                && moment(document.endOfCycle).month() == monthsList.indexOf(selectedMonth))
                .filter((document: any) =>
                    machinesData.Items.reduce(function (a: any, b: any) {
                        return a + (b['machine_id']);
                    }, []).includes(document.machine_id)
                )
            setFilteredControlDocuments(filteredControlDocuments)
        }
    }


    const getCompanyMachines = () => {
        if (!machinesDataLoading && !companyMachines ) {
            const companyMachines = machinesData.Items.filter((machine:any) =>
                machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
            )
            setCompanyMachines(companyMachines)
        }
    }

    const drawCharts = () => {
        if (companyMachines && !certificatesLoading && filteredControlDocuments && !chartsDrawn)
        {
            const labels: any = [];
            for (let day = 1; day <= moment(`${selectedYear}-${monthsList.indexOf(selectedMonth) + 1}`,
                "YYYY-MM")
                .daysInMonth(); day++) {
                labels.push(day)
            }

            const datasets = controlDocuments.Items.reduce(function (a: any, b: any) {
                if (a && a.includes(b['waretype']) == false) {
                    return [...a, (b['waretype'])];
                } else {
                    return a
                }
            }, [])


            if (selectedCategory == 'Gewichtentwicklung') {
                const data = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Gesamt-Werksgewicht',
                            backgroundColor: 'rgb(218,0,44)',
                            borderColor: 'rgb(218,0,44)',
                            data: labels.map((day: any) =>
                                certificates.Items
                                    .filter((document: any) => {
                                        if (selectedMachine != '- Alle -') {
                                            return document.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                    .filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(selectedMonth)
                                        && moment(certificate.endOfCycle).date() == day)
                                    .reduce(function (a: any, b: any) {
                                        return a + (parseInt(b['workingWeight']));
                                    }, 0)
                            )
                        },
                    ]
                };

                data.datasets.push(
                    {
                        label: 'Gesamt-Abgangsgewicht',
                        backgroundColor: 'rgb(232,188,83)',
                        borderColor: 'rgb(232,188,83)',
                        data: labels.map((day: any) =>
                            controlDocuments.Items
                                .filter((document: any) => {
                                    if (selectedMachine != '- Alle -') {
                                        return document.machine_id == selectedMachine
                                    } else {
                                        return true
                                    }
                                })
                                .filter((document: any) =>
                                    moment(document.endOfCycle).month() ==
                                    monthsList.indexOf(selectedMonth))
                                .filter((document: any) => moment(document.endOfCycle).date() == day)
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
                            data: labels.map((day: any) =>
                                certificates.Items
                                    .filter((document: any) => {
                                        if (selectedMachine != '- Alle -') {
                                            return document.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                    .filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(selectedMonth)
                                        && moment(certificate.endOfCycle).date() == day)
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

                const config2 = {
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
                    // @ts-ignore
                    document.getElementById("line-chart2").innerHTML =
                        "<canvas id=\"myChart2\"></canvas>"


                    setMyChart(new Chart(
                        // @ts-ignore
                        document.getElementById('myChart'),
                        config
                    ));

                    setMyChart2(new Chart(
                        // @ts-ignore
                        document.getElementById('myChart2'),
                        config2
                    ));
                }


            const datasetsIndex = controlDocuments.Items.reduce(function (a: any, b: any) {
                if (a && a.includes(b['waretype']) == false) {
                    return [...a, (b['waretype'])];
                } else {
                    return a
                }
            }, [])


            /// !!!!!!

            // Add indexes unassigned to any machine to display prices for each month
            const datasetPriceMatrices = priceMatrices.Items.filter((matrix: any) =>
                matrix.indeces && matrix.indeces != '' && matrix.prices != undefined
                && matrix.prices[selectedYear][selectedMonth])
                .reduce(function (a: any, b: any) {
                    for (let index in b['indeces']) {
                        if (b
                            .prices[selectedYear][selectedMonth][b['indeces'][index]] != undefined) {
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
                const data: any = {
                    labels: [monthsList[monthsList.indexOf(selectedMonth)]],
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
                    if (datasetsIndex[dataset].includes('Index') && priceMatrices.Items.filter((matrix: any) =>
                        datasetsIndex[dataset].includes(matrix.price_matrix) &&
                        datasetsIndex[dataset].includes(matrix.indexgroup_name)
                    )[0].prices[selectedYear][selectedMonth][datasetsIndex[dataset]
                        .slice(datasetsIndex[dataset]
                            .indexOf("-", datasetsIndex[dataset]
                                .indexOf("-") + 1) + 1).replace(" ", "")]
                        .replace(',', '.')) {
                        data.datasets.push(
                            {
                                label: datasetsIndex[dataset],
                                // @ts-ignore
                                backgroundColor: colors[dataset],
                                // @ts-ignore
                                borderColor: colors[dataset],
                                data:
                                    [parseFloat(priceMatrices.Items.filter((matrix: any) =>
                                        datasetsIndex[dataset].includes(matrix.price_matrix) &&
                                        datasetsIndex[dataset].includes(matrix.indexgroup_name)
                                    )[0].prices[selectedYear][selectedMonth][datasetsIndex[dataset]
                                        .slice(datasetsIndex[dataset]
                                            .indexOf("-", datasetsIndex[dataset]
                                                .indexOf("-") + 1) + 1).replace(" ", "")]
                                        .replace(',', '.'))]
                            });
                    } else {
                        data.datasets.push(
                            {
                                label: datasetsIndex[dataset],
                                // @ts-ignore
                                backgroundColor: colors[dataset],
                                // @ts-ignore
                                borderColor: colors[dataset],
                                data:[parseInt(companyMachines
                                    .filter((machine: any) => machine.waretype == datasetsIndex[dataset] && machine.price_list.prices[selectedYear])
                                    .map((machine: any) =>
                                        parseInt(machine.price_list.prices[selectedYear][selectedMonth])
                                    ))]
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

                const config2 = {
                    type: 'line',
                    data: data,
                    options: {
                        scales: {
                            y: {},
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
                // @ts-ignore
                document.getElementById("line-chart2").innerHTML =
                    "<canvas id=\"myChart2\"></canvas>"


                setMyChart(new Chart(
                    // @ts-ignore
                    document.getElementById('myChart'),
                    config
                ));

                setMyChart2(new Chart(
                    // @ts-ignore
                    document.getElementById('myChart2'),
                    config2
                ));
            }

            const datasetsPrices = controlDocuments.Items.reduce(function (a: any, b: any) {
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
                            data: labels.map((day: any) =>
                                certificates.Items
                                    .filter((document: any) => {
                                        if (selectedMachine != '- Alle -') {
                                            return document.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                    .filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(selectedMonth)
                                        && moment(certificate.endOfCycle).date() == day)
                                    .reduce(function (a: any, b: any) {
                                        return a + (parseInt(b['income']));
                                    }, 0))
                        },
                    ]
                };

                const colors = [
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
                            data: labels.map((day: any) =>
                                certificates.Items
                                    .filter((document: any) => {
                                        if (selectedMachine != '- Alle -') {
                                            return document.machine_id == selectedMachine
                                        } else {
                                            return true
                                        }
                                    })
                                    .filter((certificate: any) =>
                                        moment(certificate.endOfCycle).month() == monthsList.indexOf(selectedMonth)
                                        && moment(certificate.endOfCycle).date() == day)
                                    .reduce(function (a: any, b: any) {
                                        return a + (parseInt(b['income']));
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

                const config2 = {
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
                // @ts-ignore
                document.getElementById("line-chart2").innerHTML =
                    "<canvas id=\"myChart2\"></canvas>"


                setMyChart(new Chart(
                    // @ts-ignore
                    document.getElementById('myChart'),
                    config
                ));

                setMyChart2(new Chart(
                    // @ts-ignore
                    document.getElementById('myChart2'),
                    config2
                ));
            }

            setChartsDrawn(true)
        }
    }

    filterControlDocuments();
    getCompanyMachines();

    useEffect(() => {
        drawCharts();
    }, );





    const handlePopupSend = async () => {
        let certificate = certificates.Items.filter((certificate: any)=> certificate.document_id == popupCertificate)[0]
        let responseBody = {
            workingWeight: certificate.workingWeight,
            comment: certificate.comment,
            document_id: certificate.document_id,
            formData: certificate.pdf_data,
            income: receivedIncome,
            endOfCycle: certificate.endOfCycle,
            machine_id: certificate.machine_id,
            client_id: certificate.client_id
        }

        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        window.location.reload()
    }

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="mt-5 text-3xl font-bold mb-5">Monatsauswertung</p>
            <div className="flex space-x-2 text-sm">
                <span>Maschine:</span>
                <select className="w-40 text-blue-500 border" name="machines" id="machines"
                    onChange={(e)=>setSelectedMachine(e.target.value)}
                >
                    <option selected>- Alle -</option>
                    {!machinesDataLoading && companyMachines ?
                    companyMachines.map((machine: any) =>
                        <option key={machine.machine_id}
                                value={machine.machine_id}>{machine.machine_id}
                        </option>
                    )
                    : ""}
                </select>
            </div>
            <div className="font-bold justify-center flex space-x-10 mb-3">
                <button onClick={()=> {
                    if(monthsList.indexOf(selectedMonth) > 0) {
                        setSelectedMonth(monthsList[monthsList.indexOf(selectedMonth) - 1])
                        setChartsDrawn(false)
                    } else {
                        setSelectedMonth(monthsList[11])
                        setSelectedYear(selectedYear - 1)
                        setChartsDrawn(false)
                    }
                }}>&lt;</button>
                <span>{selectedMonth} {selectedYear}</span>
                <button onClick={()=> {
                    if(monthsList.indexOf(selectedMonth) < 11) {
                        setSelectedMonth(monthsList[monthsList.indexOf(selectedMonth) + 1])
                        setChartsDrawn(false)
                    } else {
                        setSelectedMonth(monthsList[0])
                        setSelectedYear(selectedYear + 1)
                        setChartsDrawn(false)
                    }
                }}>&gt;</button>
            </div>
            <div className="flex-row mt-5">
                    <Link href="/reporting/annual-evaluation">
                        <button className="border mx-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                        >zur Jahresentwicklung wechseln
                        </button>
                    </Link>
                <div className="flex justify-center space-x-1 mt-5">
                    <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex"
                            onClick={()=>{setSelectedCategory('Gewichtentwicklung');setChartsDrawn(false)}}
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
            <p className="mt-5 text-xs uppercase font-bold text-gray-500">
                {selectedCategory == 'Gewichtentwicklung' ? 'Gewichtentwicklung'
                : selectedCategory == 'Monatspreis' ? 'Indexpreis-Verlauf'
                : selectedCategory == 'Erlösentwicklung' ? 'Erlösentwicklung' : ''}
            </p>

            {!companyMachines && !chartsDrawn ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="min-h-[37rem] mt-5 mb-5 w-10/12 sm:rounded-lg shadow-md"/>
                </SkeletonTheme> :
                <div className='min-h-[37rem] min-w-10/12 mt-5 mb-5'>
            <div className="mb-10 mt-5 w-10/12" id="line-chart"/>
            <div className="mb-10 mt-5 w-10/12" id="line-chart2"/></div>}
            <div id="popup" className={ popupCertificate ?
                "border ml-[40rem]  w-max shadow-md mb-2 rounded"
                : "border ml-[40rem]w-max shadow-md mb-2 rounded hidden"}>
                <button className="float-right p-0.5 w-5 h-5 text-xs flex bg-red-500"
                        onClick={()=>setPopupCertificate(null)}>
                    <span className="w-full font-bold text-white">X</span>
                </button>
                <div className=" text-xs p-5">
                    <span className="font-bold">Betrag erhalten</span><br/>
                    <input className="w-20 text-right border rounded pl-2.5 py-0.5"
                           defaultValue={!certificatesLoading && popupCertificate && certificates.Items
                               .filter((certificate: any) =>
                               certificate.document_id == popupCertificate
                           )[0].income ?
                               certificates.Items.filter((certificate: any) =>
                               certificate.document_id == popupCertificate
                               )[0].income
                               : 0}
                           onChange={(e)=>setReceivedIncome(e.target.value)}
                    /> €
                    <button className="border border-accent-color-1 bg-accent-color-4
                            hover:bg-accent-color-5 rounded p-2.5 py-0.5 shadow-md ml-2"
                            onClick={certificatesLoading ? ()=>handlePopupSend() : ()=>{}}
                    >Setzen
                    </button>
                </div>
            </div>
            <div className="sm:rounded-lg shadow-md overflow-auto mb-10">
            <div className="rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 text-right border-b">
                        <th className="font-normal text-left">Datum</th>
                        <th className="font-normal text-left">Wiege-Nr.<br/>
                            Masch.-ID</th>
                        <th className="font-normal">PDF</th>
                        <th className="font-normal text-left">Warenart<br/>
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
                    { !waretypesLoading && !controlDocumentsLoading ?
                        controlDocuments.Items
                            .sort(function(a: any, b: any){
                                // @ts-ignore
                                return a.document_id - b.document_id
                            })
                            .map((document: any) =>
                            <tr key={document.document_id}
                                className="text-xs text-gray-500 border-b text-left">
                                <td>
                                        {moment(document.endOfCycle).format('DD.MM.YYYY HH:mm')}
                                </td>
                                <td>
                                    <PDFLink
                                        endOfCycle = {document.endOfCycle}
                                        document_id = {document.document_id}
                                        brutto = {document.brutto}
                                        netto = {document.netto}
                                        timestamp = {document.timestamp}
                                        tara = {document.tara}
                                        machine_id = {document.machine_id}
                                        company = {JSON.parse(sessionStorage.getItem('company') as string)}
                                        waretype = {document.waretype}
                                        sort = { !waretypesLoading && waretypes && !controlDocumentsLoading && filteredControlDocuments
                                            ? waretypes.Items.filter((ware: any) =>
                                            ware.name_waretype == document.waretype).waretype_number : '' ?
                                        waretypes.filter((ware: any) =>
                                                ware.name_waretype == document.waretype)[0].waretype_number
                                        : ''}
                                    />
                                    {document.machine_id}
                                </td>
                                <td>
                                    <PDF
                                        endOfCycle = {document.endOfCycle}
                                        document_id = {document.document_id}
                                        brutto = {document.brutto}
                                        netto = {document.netto}
                                        timestamp = {document.timestamp}
                                        tara = {document.tara}
                                        machine_id = {document.machine_id}
                                        company = {JSON.parse(sessionStorage.getItem('company') as string)}
                                        waretype = {document.waretype}
                                        sort = {!waretypesLoading && !controlDocumentsLoading && filteredControlDocuments
                                            ?
                                                waretypes.Items.filter((ware: any) =>
                                                    ware.name_waretype == document.waretype).waretype_number : ''
                                                }
                                    />
                                </td>
                                <td>
                                    {document.waretype}, {!controlDocumentsLoading && !machinesDataLoading &&
                                filteredControlDocuments && companyMachines ? companyMachines.filter((machine: any) =>
                                    machine.machine_id == document.machine_id).quality : ''}<br/>
                                    {!waretypesLoading && !controlDocumentsLoading && filteredControlDocuments
                                        ? waretypes.Items.filter((item: any) =>
                                    item.name_waretype == document.waretype
                                    ).internal_number : ''}
                                </td>
                                <td className="text-right">
                                    {document.netto}
                                </td>
                                <td className="text-right">
                                    {!certificatesLoading && certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id).length != 0 &&
                                    certificates.Items.filter((certificate: any) =>
                                       certificate.document_id == document.document_id)[0].workingWeight
                                        ? certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                       : ''}
                                </td>
                                <td className="text-right">
                                    {!certificatesLoading && certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id).length != 0 &&
                                    certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        ? (document.netto) - certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        : ''}
                                </td>
                                <td className="text-right">
                                        {filteredControlDocuments ? companyMachines.filter((machine:any)=>machine.machine_id==document.machine_id).price_list : '' ?
                                            parseInt(companyMachines.filter((machine:any)=>machine.machine_id==document.machine_id)
                                                [0].price_list.prices
                                                // @ts-ignore
                                                [moment().year()][monthsList[moment().month()]]).toFixed(2) : "0,00"} €
                                </td>
                                <td className="text-right">
                                    { filteredControlDocuments ? companyMachines.filter((machine:any)=>
                                        machine.machine_id==document.machine_id).price_list : ''
                                        ?  ((document.netto) / 1000 *
                                            parseInt(companyMachines.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list.prices
                                                [moment().year()][monthsList[moment().month()]]))
                                            .toFixed(2)
                                        : '0.00'} €
                                </td>
                                <td className="text-right">
                                    { !certificatesLoading
                                    && !machinesDataLoading && companyMachines ? companyMachines.filter((machine:any)=>
                                        machine.machine_id==document.machine_id).price_list &&
                                    certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id).length != 0
                                        && certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        : '' ?   (certificates.Items.filter((certificate: any) =>
                                               certificate.document_id == document.document_id)[0].workingWeight / 1000 *
                                            parseInt(companyMachines.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list.prices
                                                [moment().year()][monthsList[moment().month()]]))
                                            .toFixed(2) + ' €' : ''
                                        }
                                </td>
                                <td className="text-right">
                                    <button className={JSON.parse(sessionStorage.getItem('user') as string)
                                        .enterAmountReceivedPermission && !certificatesLoading
                                    && certificates.Items.filter((certificate: any)=>
                                        certificate.document_id == document.document_id).length != 0 ? "underline" : "pointer-events-none"}
                                            onClick={()=>setPopupCertificate(document.document_id)}>
                                        {!certificatesLoading ?
                                        certificates.Items.filter((certificate: any)=>
                                            certificate.document_id == document.document_id).length != 0
                                        && certificates.Items.filter((certificate: any)=>
                                            certificate.document_id == document.document_id)[0].income : '' ?
                                                certificates.Items
                                            .filter((certificate: any)=>
                                        certificate.document_id == document.document_id)[0].income : '0.00'
                                            } €</button>
                                </td>
                                <td className="text-right">
                                    {!certificatesLoading && companyMachines
                                    ? companyMachines.filter((machine:any)=>
                                        machine.machine_id==document.machine_id).price_list
                                        && certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id).length != 0
                                    && certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight
                                        && certificates.Items.filter((certificate: any)=>
                                        certificate.document_id == document.document_id)[0].income
                                        : '' ?   (certificates.Items.filter((certificate: any) =>
                                               certificate.document_id == document.document_id)[0].workingWeight / 1000 *
                                            parseInt(companyMachines.filter((machine:any)=>
                                                machine.machine_id==document.machine_id)[0].price_list.prices
                                               [moment().year()][monthsList[moment().month()]])
                                            - certificates.Items.filter((certificate: any)=>
                                        certificate.document_id == document.document_id)[0].income)
                                        .toFixed(2) + ' €': ''
                                        }
                                </td>
                                <td>
                                    <Proforma
                                        document_id = {document.document_id}
                                        brutto = {document.brutto}
                                        netto = {document.netto}
                                        timestamp = {document.timestamp}
                                        tara = {document.tara}
                                        machine_id = {document.machine_id}
                                        company = {JSON.parse(sessionStorage.getItem('company') as string)}
                                        waretype = {document.waretype}
                                        sort = {!waretypesLoading && !controlDocumentsLoading && filteredControlDocuments
                                            ?
                                            waretypes.Items.filter((ware: any) =>
                                                ware.name_waretype == document.waretype).waretype_number : ''
                                        }
                                    />
                                </td>
                                <td>
                                    <Link href={"/reporting/monthly-evaluation/" + document.document_id}>
                                        <button className="m-auto flex">
                                            {/* @ts-ignore */}
                                            <img className="h-5" src={
                                                !certificatesLoading && filteredControlDocuments
                                                 &&
                                                certificates.Items.filter((certificate: any) =>
                                                certificate.document_id == document.document_id).length == 0
                                                 ? "/upload-svgrepo-com.svg"
                                                 : '/document.png'}/></button>
                                    </Link>
                                </td>
                                <td>
                                    {!certificatesLoading ? certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id).length > 0 : ''
                                        ? certificates.Items.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].comment : '' }
                                </td>

                            </tr>
                        )
                    : ""}
                    </tbody>
                </table>
            </div>
            </div>

        </div>
    )
}

export default MonthlyEvaluation
