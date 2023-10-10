import {useEffect, useState} from "react";
import API from "axios";
import {useRouter} from "next/router";

const ClientPage = () => {
    const [data, setData] = useState<any>([]);
    const [land, setLand] = useState<any>([]);
    const router = useRouter()
    const pid = router.query

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients';

        API.get(apiName)
            .then((response) => {
                setData(response.data.Items
                    .filter((client: { client_number: number; }) =>
                        client.client_number == parseInt(pid.client_id as string))[0]
                )
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/lands')
            .then((response) => {
                setLand(response.data.Items
                    .filter((land: { land_id: number; }) =>
                        land.land_id == data.land_id)[0].land_name)
            })
            .catch((error) => {
                console.log(error.response);
            });
    },[]);

    if (data) {
        return(
            <div id="content-page" className="mx-10 p-10 overflow-auto h-full">
                <p className="mb-9 text-3xl font-bold">Stammdaten</p>
                <div className="mb-9 text-sm">
                    <table>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">KundenNr.:</td>
                            <td className="p-0 pb-1.5 ">{data.client_number}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">Firma:</td>
                            <td className="p-0 pb-1.5 ">{data.client_name}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">PLZ:</td>
                            <td className="p-0 pb-1.5">{data.zip_code}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">Stadt:</td>
                            <td className="p-0 pb-1.5">{data.city}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">Straße:</td>
                            <td className="p-0 pb-1.5">{data.street}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0 pr-10">Bundesland (D):</td>
                            <td className="p-0 pb-1.5">{land}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">Telefon:</td>
                            <td className="p-0 pb-1.5">{data.telefon}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">E-Mail:</td>
                            <td className="p-0 pb-1.5">{data.email}</td>
                        </tr>
                        <tr>
                            <td className="font-bold pl-0 pb-1.5 pt-0">Ansprechpartner:</td>
                            <td className="p-0 pb-1.5">{data.contact}</td>
                        </tr>
                    </table>
                </div>
                <span className="text-xs uppercase font-bold text-gray-500">
                  Lagersysteme
                </span>
                <div className="sm:rounded-lg shadow-md border h-72 overflow-auto">
                    <table className="flex-row w-full table-auto">
                        <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th className="font-normal">Masch.-ID<br/>Max Netto</th>
                            <th className="font-normal">Material</th>
                            <th className="font-normal">Füllgrad</th>
                            <th className="font-normal">Netto (kg)</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }

}

export default ClientPage