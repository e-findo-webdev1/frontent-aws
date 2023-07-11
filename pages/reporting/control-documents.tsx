import {useEffect, useState} from "react";
import API from "axios";
import moment from "moment";
import PDF from "../components/helpers/pdf";

const ControlDocuments = () => {
    const [company, setCompany] = useState({
        address_id: '', automatic_email: false, city: "", client_id: 0, client_name: "",
        client_number: "", client_status: 1, co_distance: 0, co_orig_amount: 0, co_orig_trips: 0,
        co_orig_year: 0, co_show: 1, contact: "", email: "", land_id: 0, logo_url: "", next_pdf_nr: 0,
        spokesperson: "", street: "", telefon: "", worktime_mail: 0, worktime_status: 0, zip_code: ""
    });
    const [controlDocuments, setControlDocuments] = useState([]);
    const [machines, setMachines] = useState<any>();
    const [waretypes, setWaretypes] = useState<any>();

    useEffect(() => {
        setCompany(JSON.parse(sessionStorage.getItem('company') as string));

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents')
            .then((response) => {
                setControlDocuments(response.data.Items)
                ;})
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
            .then((response) => {
                setMachines(response.data.Items)
                ;})
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
            .then((response) => {
                setWaretypes(response.data.Items);
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);

    return(
        <div id="content-page" className="px-20">
            <p className="mt-9 text-3xl font-bold mb-10">Kontrollbelege</p>
            <div className="sm:rounded-lg shadow-md border overflow-auto max-h-96">
                <table className="table-auto w-full overflow-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Maschine</th>
                        <th className="font-normal">PDF</th>
                        <th className="font-normal">Wiegenr.</th>
                        <th className="font-normal">Datum</th>
                        <th className="font-normal">Warenart</th>
                        <th className="font-normal">Bruttogewitcht</th>
                        <th className="font-normal">Taragewitcht</th>
                        <th className="font-normal">Nettogewicht</th>
                        <th className="font-normal">Standzeit</th>
                        <th className="font-normal">Prod.-<br/>Zeit</th>
                        <th className="font-normal">kg / h</th>
                        <th className="font-normal">Bemerkung</th>
                        <th className="font-normal">W.<br/>Schein</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {controlDocuments.sort(function(a: any, b: any){
                        // @ts-ignore
                        return moment(b.endOfCycle).unix() - moment(a.endOfCycle).unix()})
                        .map((document: any) =>
                        <tr key={document.document_id} className="text-xs border-t">
                            <td>{document.machine_id}</td>
                            <td>
                                <PDF
                                    document_id = {document.document_id}
                                    brutto = {document.brutto}
                                    netto = {document.netto}
                                    timestamp = {document.timestamp}
                                    tara = {document.tara}
                                    machine_id = {document.machine_id}
                                    company = {company}
                                    waretype = {machines != undefined
                                        ? machines.filter((item: any) =>
                                            item.machine_id == document.machine_id)[0].waretype
                                        : ''}
                                    sort = {
                                    machines != undefined
                                    && waretypes
                                        ? waretypes.filter((ware: any) =>
                                            ware.name_waretype == document.waretype).waretype_number
                                        : ''}
                                />
                            </td>
                            <td>{company.client_number}-<br/>{parseInt(company.client_number) + document.document_id}</td>
                            <td>{moment(document.timestamp).format('DD.MM.yyyy HH:mm')}</td>
                            <td>{document.waretype}</td>
                            <td>{document.brutto}</td>
                            <td>{document.tara}</td>
                            <td>{document.netto}</td>
                            <td>{((moment(document.endOfCycle).unix()-moment(document.startOfCycle).unix())
                                /3600).toFixed(2)}h</td>
                            <td>{(document.totalProductionTime/3600000).toFixed(2)}h</td>
                            <td>{controlDocuments ? (document.averageThroughput).toFixed(2) : ''}</td>
                            <td>{}</td>
                            <td><img className="h-5" src="/upload-svgrepo-com.svg"/></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ControlDocuments