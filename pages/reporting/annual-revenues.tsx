'use client'
import React, {useState} from "react";
import moment from "moment";
import useSWR from "swr";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const fetcher = (url:  string) => fetch(url).then(r => r.json())
const AnnualRevenues = () => {
    const [currentYear, setCurrentYear] = useState(0)
    const [weighingCertificates, setWeighingCertificates] = useState<any>();
    const [machinesData, setMachinesData] = useState<any>();
    const [workingYears, setWorkingYears] = useState<any>();

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

    const {data: certificates, error: certificatesError, isLoading: certificatesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates', fetcher);
    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher);

    const getWeighingCertificates = () => {
        if (!certificatesLoading && !weighingCertificates)
      {
          const filteredWeighingCertificates =
              certificates.Items.filter((certificate: any) => certificate.client_id ==
                  JSON.parse(sessionStorage.getItem('company') as string).client_id)
                  .filter((certificate: any) => moment(certificate.endOfCycle).year() == currentYear)
          setWeighingCertificates(filteredWeighingCertificates)
      }
    }

    const getMachinesData = () => {
        if (!machinesLoading && !machinesData) {
            setMachinesData(machines.Items.filter((machine: any) =>
                machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name));
        }
    }

    const getCurrentYear = () => {
        if (!currentYear) {
            setCurrentYear(moment().year())
        }
    }

    const getWorkingYears = () => {
        if (machinesData && !workingYears) {
            let workingYears: number | string[] = []

            for (let machine in machinesData) {
                let machinesWorkingYears= Object.keys(machinesData[machine].price_list.prices)
                for (let year in machinesWorkingYears) {
                    if (workingYears.includes(machinesWorkingYears[year]) == false) {
                        workingYears.push(machinesWorkingYears[year])
                    }
                }
            }
            setWorkingYears(workingYears)
        }
    }

    getCurrentYear();
    getWeighingCertificates();
    getMachinesData();
    getWorkingYears();

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
                        workingYears ? workingYears.sort().map((year: any) =>
                            <a key={year}
                               className="cursor-pointer"
                               onClick={(e)=>{setWeighingCertificates(undefined);setCurrentYear(year)}}>
                                <span className={currentYear == year ? 'font-bold underline' : ''}>
                                    {year}
                                </span>
                                {" | "}
                            </a>
                        ) : <a key={currentYear}
                               className="cursor-pointer"
                               onClick={(e)=>{setWeighingCertificates(undefined);setCurrentYear(currentYear)}}>
                                <span className={'font-bold underline'}>
                                    {currentYear}
                                </span>
                        </a>
                    }
                    {
                        // @ts-ignore
                        <a key={workingYears ? workingYears.sort(function(a,b){ // @ts-ignore
                            return b-a})[0] : ''}
                           className="cursor-pointer"
                           onClick={(e)=>{
                               // @ts-ignore
                               setCurrentYear(parseInt(workingYears.sort(function(a,b){ // @ts-ignore
                                   return b-a})[0]) + 1);}
                           }
                        >
                            <span className={
                                // @ts-ignore
                                workingYears && currentYear == parseInt(workingYears.sort(function(a,b){ // @ts-ignore
                                    return b-a})[0]) + 1
                                    ? 'font-bold underline' : ''
                            }>
                                {// @ts-ignore
                                    workingYears && workingYears.length > 0 ? parseInt(workingYears.sort(function(a,b){ // @ts-ignore
                                        return b-a})[0]) + 1
                                        : ''
                                }
                            </span>
                        </a>
                    }
                </p>
            </div>

            <div className="sm:rounded-lg shadow-md border">
                {!machinesData ?
                    <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                        <Skeleton className="h-[10.7rem] shadow-md"/>
                    </SkeletonTheme> :
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
                </table>}
            </div>
        </div>
    )
}

export default AnnualRevenues