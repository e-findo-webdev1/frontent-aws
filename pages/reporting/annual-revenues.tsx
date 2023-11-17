import React, {useEffect, useState} from "react";
import moment from "moment";
import API from "axios";

const AnnualRevenues = () => {
    const [currentYear, setCurrentYear] = useState(0)
    const [weighingCertificates, setWeighingCertificates] = useState<any>();
    const [priceMatrices, setPriceMatrices] = useState<any>({set: false});
    const [machinesData, setMachinesData] = useState<any>();

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

    const months: any = {
       'Januar': 0,
        'Februar': 1,
        'März': 2,
        'April': 3,
        'Mai': 4,
        'Juni': 5,
        'Juli': 6,
        'August': 7,
        'September': 8,
        'Oktober': 9,
        'November': 10,
        'Dezember': 11
}
    useEffect(() => {
        currentYear == 0 ? setCurrentYear(moment().year()) : ''

        const fetchData = async () => {

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
                .then((response) => {
                    setWeighingCertificates(
                        response.data.Items.filter((certificate: any) => certificate.client_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_id)
                            .filter((certificate: any) => moment(certificate.endOfCycle).year() == currentYear)
                    );

                })
                .catch((error) => {
                    console.log(error.response);
                });

            let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

            await API.get(apiName)
                .then((response) => {
                    setMachinesData(response.data.Items.filter((machine: any) =>
                        machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name));

                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
                .then((response) => {
                    setPriceMatrices(
                        response.data.Items
                    );
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        fetchData();

    }, [currentYear, priceMatrices.set]);

    let workingYears: number | string[] = []

    for (let machine in machinesData) {
        let machinesWorkingYears= Object.keys(machinesData[machine].price_list.prices)
        for (let year in machinesWorkingYears) {
            if (workingYears.includes(machinesWorkingYears[year]) == false) {
                workingYears.push(machinesWorkingYears[year])
            }
        }
    }

    let waretypes: any[] = []

    for (let machine in machinesData) {
        if (!waretypes.includes(machinesData[machine].waretype)) {
            waretypes.push(machinesData[machine].waretype)
        }
    }

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="mt-9 text-3xl font-bold mb-5">Jahreserlöse {currentYear}</p>
            <div className="mb-2.5">
                <p className="text-sm">
                    {
                        workingYears.length > 0 ? workingYears.map((year: any) =>
                            <a key={year}
                               className="cursor-pointer"
                               onClick={(e)=>{setCurrentYear(year)}}>
                                <span className={currentYear == year ? 'font-bold underline' : ''}>
                                    {year}
                                </span>
                                {" | "}
                            </a>
                        ) : <a key={currentYear}
                               className="cursor-pointer"
                               onClick={(e)=>{setCurrentYear(currentYear)}}>
                                <span className={'font-bold underline'}>
                                    {currentYear}
                                </span>
                        </a>
                    }
                    {
                        // @ts-ignore
                        <a key={Math.max((workingYears)) + 1}
                           className="cursor-pointer"
                           onClick={(e)=>{
                               // @ts-ignore
                               setCurrentYear(Math.max(workingYears) + 1);}
                           }
                        >
                            <span className={
                                // @ts-ignore
                                currentYear == Math.max(workingYears) + 1
                                    ? 'font-bold underline' : ''
                            }>
                                {// @ts-ignore
                                    workingYears.length > 0 ? Math.max(workingYears) + 1
                                        : ''
                                }
                            </span>
                        </a>
                    }
                </p>
            </div>

            <div className="sm:rounded-lg shadow-md border">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Warenart</th>
                        <th className="text-right font-normal">Werksgewicht</th>
                        <th className="text-right font-normal">Betrag Werksgewicht</th>
                        <th className="text-right font-normal">Betrag erhalten</th>
                        <th className="text-right font-normal">Delta</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {waretypes.sort(function (a: any, b: any){
                        if (a < b) {
                            return -1;
                        }
                        if (a > b) {
                            return 1;
                        }
                        return 0;
                    }).map((waretype: any) =>
                        <tr key={waretype} className="text-xs text-gray-500 text-left">
                            <td>{waretype}</td>
                            <td className='text-right'>
                                {weighingCertificates && machinesData ? weighingCertificates.filter((certificate: any) =>
                                    machinesData.filter((machine: any) =>
                                        machine.waretype == waretype).map((machine: any) => machine.machine_id)
                                        .includes(certificate.machine_id)
                                ).reduce(function (a: any, b: any) {
                                    return a + (parseInt(b['workingWeight']));
                                }, 0) + '' : ''}
                            </td>
                            <td className='text-right'>
                                {
                                    weighingCertificates && machinesData  ?
                                        monthsList.map((month: any) =>
                                            weighingCertificates
                                                .filter((certificate: any) =>
                                                    moment(certificate.endOfCycle).month() == months[month]
                                                    && machinesData.filter((machine: any) =>
                                                        machine.machine_id == certificate.machine_id)[0].waretype
                                                    == waretype
                                                )
                                                .reduce(function (a: any, b: any) {
                                                    if (machinesData.filter((machine: any) =>
                                                        machine.machine_id == b['machine_id'])[0].price_list.prices
                                                        [currentYear]) {
                                                        return a + ((parseInt(b['workingWeight']) *
                                                            parseInt(machinesData.filter((machine: any) =>
                                                                machine.machine_id == b['machine_id'])
                                                                [0].price_list.prices[currentYear][month])) / 1000)
                                                    }
                                                else return a + 0
                                                }, 0))
                                            .reduce(function (a: any, b: any) {
                                                return a + b
                                            }, 0).toFixed(2).replace('.', ',') + ' €'
                                        : ''
                                }
                            </td>
                            <td className='text-right'>
                                { weighingCertificates && machinesData ? weighingCertificates.filter((certificate: any) =>
                                    machinesData.filter((machine: any) =>
                                        machine.waretype == waretype).map((machine: any) => machine.machine_id)
                                        .includes(certificate.machine_id)
                                ).reduce(function (a: any, b: any) {
                                    return a + (parseInt(b['income']));
                                }, 0).toFixed(2).replace('.', ',') + ' €' : ''}
                            </td>
                            <td className='text-right'>
                                {
                                    weighingCertificates && machinesData  ?
                                        ((monthsList.map((month: any) =>
                                            weighingCertificates
                                                .filter((certificate: any) =>
                                                    moment(certificate.endOfCycle).month() == months[month]
                                                    && machinesData.filter((machine: any) =>
                                                        machine.machine_id == certificate.machine_id)[0].waretype
                                                    == waretype
                                                )
                                                .reduce(function (a: any, b: any) {
                                                    if (machinesData.filter((machine: any) =>
                                                        machine.machine_id == b['machine_id'])[0].price_list.prices
                                                        [currentYear]) {
                                                        return a + ((parseInt(b['workingWeight']) *
                                                            parseInt(machinesData.filter((machine: any) =>
                                                                machine.machine_id == b['machine_id'])
                                                                [0].price_list.prices[currentYear][month])) / 1000)
                                                    }
                                                        else return a + 0
                                                }, 0))
                                            .reduce(function (a: any, b: any) {
                                                return a + b
                                            }, 0)) - (weighingCertificates.filter((certificate: any) =>
                                            machinesData.filter((machine: any) =>
                                                machine.waretype == waretype).map((machine: any) => machine.machine_id)
                                                .includes(certificate.machine_id)
                                        ).reduce(function (a: any, b: any) {
                                            return a + (parseInt(b['income']));
                                        }, 0))).toFixed(2).replace('.', ',') + ' €'
                                        : ''
                                }
                            </td>
                        </tr>
                    )}
                    <tr className='text-xs text-gray-500 p-0 m-0 text-left'>
                        <td colSpan={5} className=''>
                            <hr/>
                        </td>
                    </tr>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <td/>
                        <td className="text-right pt-1.5 pb-4">
                            {weighingCertificates && machinesData ? weighingCertificates.filter((certificate: any) =>
                                machinesData.map((machine: any) => machine.machine_id)
                                    .includes(certificate.machine_id)
                            ).reduce(function (a: any, b: any) {
                                return a + (parseInt(b['workingWeight']));
                            }, 0) + '' : ''}
                        </td>
                        <td className="text-right pt-1.5 pb-4">
                            {
                                weighingCertificates && machinesData  ?
                                    monthsList.map((month: any) =>
                                        weighingCertificates
                                            .filter((certificate: any) =>
                                                moment(certificate.endOfCycle).month() == months[month]
                                            )
                                            .reduce(function (a: any, b: any) {
                                                if (machinesData.filter((machine: any) =>
                                                    machine.machine_id == b['machine_id'])[0].price_list.prices
                                                    [currentYear]) {
                                                    return a + ((parseInt(b['workingWeight']) *
                                                        parseInt(machinesData.filter((machine: any) =>
                                                            machine.machine_id == b['machine_id'])
                                                            [0].price_list.prices[currentYear][month])) / 1000)
                                                }
                                                else return a + 0
                                            }, 0))
                                        .reduce(function (a: any, b: any) {
                                            return a + b
                                        }, 0).toFixed(2).replace('.', ',') + ' €'
                                    : ''
                            }
                        </td>
                        <td className="text-right pt-1.5 pb-4">
                            { weighingCertificates && machinesData ? weighingCertificates.filter((certificate: any) =>
                                machinesData.map((machine: any) => machine.machine_id)
                                    .includes(certificate.machine_id)
                            ).reduce(function (a: any, b: any) {
                                return a + (parseInt(b['income']));
                            }, 0).toFixed(2).replace('.', ',') + ' €' : ''}
                        </td>
                        <td className="text-right pt-1.5 pb-4">
                            {
                                weighingCertificates && machinesData  ?
                                    (monthsList.map((month: any) =>
                                        weighingCertificates
                                            .filter((certificate: any) =>
                                                moment(certificate.endOfCycle).month() == months[month]
                                            )
                                            .reduce(function (a: any, b: any) {
                                                if (machinesData.filter((machine: any) =>
                                                    machine.machine_id == b['machine_id'])[0].price_list.prices
                                                    [currentYear]) {
                                                    return a + ((parseInt(b['workingWeight']) *
                                                        parseInt(machinesData.filter((machine: any) =>
                                                            machine.machine_id == b['machine_id'])
                                                            [0].price_list.prices[currentYear][month])) / 1000)
                                                }
                                                else return a + 0
                                            }, 0))
                                        .reduce(function (a: any, b: any) {
                                            return a + b
                                        }, 0)

                                    - weighingCertificates.filter((certificate: any) =>
                                        machinesData.map((machine: any) => machine.machine_id)
                                            .includes(certificate.machine_id)
                                    ).reduce(function (a: any, b: any) {
                                        return a + (parseInt(b['income']));
                                    }, 0)).toFixed(2).replace('.', ',') + ' €'
                                    : ''
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnnualRevenues