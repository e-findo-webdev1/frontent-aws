import React, {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import PDF from "../components/helpers/pdf";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WasteBalance = () => {

    const [machines, setMachines] = useState<any>();
    const [controlDocuments, setControlDocuments] = useState<any>({set: false});
    const [waretypes, setWaretypes] = useState<any>();
    const [weighingCertificates, setWeighingCertificates] = useState<any>();

    const [selectedWaretype, setSelectedWaretype] = useState<any>('- Alle -');
    const [selectedAVVNumber, setSelectedAVVNumber] = useState<any>('- Alle -');

    const [startDate, setStartDate] = useState(
        moment().set({hour: 0, minute: 0, second: 0}).toDate()
    );
    const [endDate, setEndDate] = useState(
        moment().set({hour: 23, minute: 59, second: 59}).toDate()
    );
    const [filterDates, setFilterDates] = useState<any>(false)
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false)

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
                .then((response) => {
                    setMachines(response.data.Items.filter((machine:any) =>
                        machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
                    ))
                    if (machines) {
                        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
                            .then((response) => {
                                filterDates == false ?
                                    setControlDocuments(response.data.Items.filter((document: any) =>
                                        machines.reduce( function(a: any, b: any){
                                            return a + (b['machine_id']);
                                        }, []).includes(document.machine_id))

                                    ) : setControlDocuments(response.data.Items.filter((document: any) =>
                                        machines.reduce( function(a: any, b: any){
                                            return a + (b['machine_id']);
                                        }, []).includes(document.machine_id))
                                        .filter((document: any) =>
                                            document.endOfCycle != undefined &&
                                            new Date(document.endOfCycle) > startDate &&
                                            new Date(document.endOfCycle) < endDate
                                        ))
                            })
                    } else {
                        setControlDocuments({set: true})
                    }
                })

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
                .then((response) => {
                    setWaretypes(response.data.Items)})
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/certificates')
                .then((response) => {
                    setWeighingCertificates(response.data.Items.filter((certificate: any) =>
                    certificate.client_id == JSON.parse(sessionStorage.getItem('company') as string).client_id))})
            setIsDataLoaded(true)
        }

        fetchData()

    }, [controlDocuments.set, selectedWaretype, selectedAVVNumber, startDate, endDate, filterDates]);


    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <Link href="/reporting">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="mt-9 text-3xl font-bold mb-10">Abfallbilanz</p>
            <div className="flex space-x-2 text-sm">
                <span>Material:</span>
                <select className="w-40 text-xs text-blue-500 border" name="machines" id="machines"
                        onChange={(e)=>setSelectedWaretype(e.target.value) }

                >
                    <option selected>- Alle -</option>
                    {waretypes ?
                        waretypes
                            .sort(function (a: { name_waretype: number; }, b: { name_waretype: number; }) {
                                if (a.name_waretype < b.name_waretype) {
                                    return -1;
                                }
                                if (a.name_waretype > b.name_waretype) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((waretype: any) =>
                            <option key={waretype.name_waretype}
                                    value={waretype.name_waretype}>{waretype.name_waretype}
                            </option>
                        )
                        : ""
                        }
                </select>
                <span>AVV Nr.:</span>
                <select className="w-40 text-xs text-blue-500 border" name="machines" id="machines"
                    onChange={(e)=>setSelectedAVVNumber(e.target.value) }

                >
                    <option selected>- Alle -</option>
                    {waretypes ?
                        waretypes
                            .filter((obj: { [x: string]: any; }, pos: any, arr: any[]) => {
                                return arr.map(mapObj => mapObj['waretype_number']).indexOf(obj['waretype_number'])
                                    === pos
                            })
                            .sort(function(a: any, b: any){
                            // @ts-ignore
                            return a.waretype_number - b.waretype_number
                            })
                            .map((waretype: any) =>
                          <option key={waretype.name_waretype}
                                value={waretype.waretype_number}>{waretype.waretype_number}
                         </option>
                          )
                         : ""
                    }
                </select>
            </div>
            <div className="mt-2.5 flex space-x-2 text-sm">
                <span>Datum von:</span>
                <DatePicker
                    dateFormat="d.MM.yyyy"
                    selected={filterDates ? startDate : null}
                    onChange={(date:Date) => {setStartDate((date)); setFilterDates(true)}}
                    className="border text-center rounded w-32"/>
                <button onClick={()=>{setFilterDates(false);
                    setStartDate(moment().set({hour: 0, minute: 0, second: 0}).toDate());
                    setEndDate(moment().set({hour: 23, minute: 59, second: 59}).toDate())}}
                        className="border float-right px-2 py-0.5  rounded font-semibold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 shadow-md text-xs flex m-auto"
                >
                    x</button>
                <span>Datum bis:</span>
                <DatePicker
                    dateFormat="d.MM.yyyy"
                    selected={filterDates ? endDate : null}
                    onChange={(date:Date) =>
                    {setEndDate(moment(date).set({hour: 23, minute: 59, second: 59}).toDate());
                        setFilterDates(true)}}
                    className="border text-center rounded w-32"/>
                <button onClick={()=>{setFilterDates(false);
                    setStartDate(moment().set({hour: 0, minute: 0, second: 0}).toDate());
                    setEndDate(moment().set({hour: 23, minute: 59, second: 59}).toDate())}}
                        className="border float-right px-2 py-0.5  rounded font-semibold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 shadow-md text-xs flex m-auto"
                >
                    x</button>
            </div>
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="min-h-[37rem] max-w-[45rem] mt-5 mb-5 sm:rounded-lg shadow-md"/>
                </SkeletonTheme> :
            <div className="sm:rounded-lg shadow-md overflow-auto mt-5 w-[45rem]">
                <div className="rounded-lg shadow-md border overflow-auto">
                    <table className="flex-row table-auto w-full">
                        <thead>
                        <tr className="text-xs text-gray-500 text-center border-b">
                            <th className="font-normal ">Datum</th>
                            <th className="font-normal ">Material</th>
                            <th className="font-normal">Qualität</th>
                            <th className="font-normal ">AVV Nr.</th>
                            <th className="font-normal ">Menge<br/>
                                (Abgangsgew.)</th>
                            <th className="font-normal ">Menge<br/>
                                (Werksgew.)</th>
                            <th className="font-normal text-center">Delta<br/>
                                (A. -W.)</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                        { controlDocuments && controlDocuments.set != false && controlDocuments.set != true?
                            controlDocuments
                                .filter((document: any) => selectedWaretype == '- Alle -' ?
                                    true : document.waretype == selectedWaretype)
                                .filter((document: any) =>

                                        selectedAVVNumber == '- Alle -' ? true : waretypes.filter((waretype: any) =>
                                            waretype.name_waretype == document.waretype
                                    )[0].waretype_number == selectedAVVNumber
                                )
                                .sort(function(a: any, b: any){
                                // @ts-ignore
                                return b.document_id - a.document_id
                                })
                                .map((document: any) =>
                            <tr key={document.document_id}
                                className="text-xs text-gray-500 border-b text-left">
                                <td>
                                    {moment(document.endOfCycle).format('DD.MM.YYYY')}
                                </td>
                                <td>
                                    {document.waretype}
                                </td>
                                <td>
                                    {machines ? machines.filter((machine: any) =>
                                        machine.waretype == document.waretype)[0].quality : '-'}
                                </td>
                                <td>
                                    {waretypes && controlDocuments &&
                                        controlDocuments.set != false && controlDocuments.set != true ?
                                        waretypes.filter((waretype: any) =>
                                            waretype.name_waretype == document.waretype)[0].waretype_number
                                        : '-'}
                                </td>
                                <td className="text-right">
                                    {document.netto} kg
                                </td>
                                <td className="text-right">
                                    { weighingCertificates && weighingCertificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0] &&
                                    weighingCertificates.filter((certificate: any) =>
                                        certificate.document_id == document.document_id)[0].workingWeight ?
                                        weighingCertificates.filter((certificate: any) =>
                                            certificate.document_id == document.document_id)[0].workingWeight
                                        + ' kg' : '0 kg'}
                                </td>
                                <td className="text-right">
                                    {weighingCertificates ?
                                        document.netto - (weighingCertificates.filter((certificate: any) =>
                                            certificate.document_id == document.document_id)[0] &&
                                        weighingCertificates.filter((certificate: any) =>
                                            certificate.document_id == document.document_id)[0].workingWeight ?
                                        weighingCertificates.filter((certificate: any) =>
                                            certificate.document_id == document.document_id)[0].workingWeight : 0)
                                        + ' kg': '-'}
                                </td>
                            </tr>
                            )
                        : ''}
                        </tbody>
                    </table>
                </div>
            </div>}
            <p className="font-bold text-sm mb-10 mt-4">Gesamtmenge: {
                controlDocuments && controlDocuments.set != false && controlDocuments.set != true ?
                (controlDocuments
                    .filter((document: any) => selectedWaretype == '- Alle -' ? true :
                        document.waretype == selectedWaretype)
                    .filter((document: any) =>
                        selectedAVVNumber == '- Alle -' ? true : waretypes.filter((waretype: any) =>
                            waretype.name_waretype == document.waretype
                        )[0].waretype_number == selectedAVVNumber
                    )
                    .reduce(function (a: any, b: any) {
                return a + (parseInt(b['netto']));
            }, 0)/1000).toFixed(3) : 0} kg</p>
        </div>
    )
}

export default WasteBalance