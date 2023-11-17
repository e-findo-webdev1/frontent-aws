import React, {useState, useEffect} from "react";
import API from "axios";
import {useRouter} from "next/router";
import Link from "next/link";

const NewClient= () => {

    const [clients, setClients] = useState<any>();
    const [lands, setLands] = useState<any[]>([{land_name: ""}]);
    const [data, setData] = useState({
        address_id: "0", city: "", client_id: 0, client_name: "", client_number: "0", client_status: "0", co_distance: 0,
        co_load: 0, co_orig_amount: 0, co_orig_trips: 0, co_orig_year: 0, co_show: 0, contact: "", country_id: 1,
        email: "", land_id: 0, logo_url: "", next_pdf_nr: 0, spokesperson: "", street: "", telefon: "",
        worktime_mail: 0, worktime_status: 0, zip_code: "", automatic_email: false,
    });
    const [landName, setLandName] = useState<any>("")

    useEffect(() => {

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setClients(response.data.Items);
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/lands')
            .then((response) => {
                setLands(
                    response.data.Items);
                setLandName(lands.filter((land: any)=>land.land_id==data.land_id)[0].land_name)
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);

    const responseBody = {
        address_id: "0", city: "", client_id: 0, client_name: "", client_number: "0", client_status: "0", co_distance: 0,
        co_load: 0, co_orig_amount: 0, co_orig_trips: 0, co_orig_year: 0, co_show: 0, contact: "", country_id: 1,
        email: "", land_id: 0, logo_url: "", next_pdf_nr: 0, spokesperson: "", street: "", telefon: "",
        worktime_mail: 0, worktime_status: 0, zip_code: "", automatic_email: false,
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.address_id = data.address_id
        responseBody.city = data.city
        responseBody.client_id = Math.max(...clients.map((o: any) => o.client_id)) + 1
        responseBody.client_name = data.client_name
        responseBody.client_number = data.client_number
        responseBody.client_status = data.client_status
        responseBody.co_distance = data.co_distance
        responseBody.co_load = data.co_load
        responseBody.co_orig_amount = data.co_orig_amount
        responseBody.co_orig_trips = data.co_orig_trips
        responseBody.co_orig_year = data.co_orig_year
        responseBody.co_show = data.co_show
        responseBody.contact = data.contact
        responseBody.country_id = data.country_id
        responseBody.email = data.email
        responseBody.land_id = data.land_id
        responseBody.logo_url = data.logo_url
        responseBody.next_pdf_nr = data.next_pdf_nr
        responseBody.spokesperson = data.spokesperson
        responseBody.street = data.street
        responseBody.telefon = data.telefon
        responseBody.worktime_mail = data.worktime_mail
        responseBody.worktime_status = data.worktime_status
        responseBody.zip_code = data.zip_code
        responseBody.automatic_email = data.automatic_email
        sendData(responseBody)
    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.replace('/');
    }

    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <Link href="/master-data">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="mt-10 text-2xl font-bold mb-5">Stammdaten</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-xs">
                        <tbody>
                        <tr>
                            <td className="text-xs font-semibold">Firma:</td>
                            <td>
                                <input id="company" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, client_name: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">KundenNr.:</td>
                            <td>
                                <input id="client_number" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, client_number: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">PLZ:</td>
                            <td>
                                <input id="zip_code" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, zip_code: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Stadt:</td>
                            <td>
                                <input id="city" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, city: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Straße:</td>
                            <td>
                                <input id="street" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, street: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Telefon:</td>
                            <td>
                                <input id="telephone" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, telefon: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">E-Mail:</td>
                            <td>
                                <input id="email" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, email: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Bundesland (D):</td>
                            <td>
                                <select id="machineType"
                                        className="pl-2.5 py-0.5 appearance-none border rounded
                                        bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                        bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                        [background-position-y:5px]"
                                        onChange={ lands ?
                                            (e)=>
                                                setData({...data, land_id: parseInt(
                                                        lands
                                                            .filter((land: any)=>
                                                                land.land_name==e.target.value)[0].land_id)})
                                            : (e)=>{}}>
                                    {lands
                                        ? lands
                                            .map((land :any) =>
                                                <option key={land.land_name} id={land.land_id}>{land.land_name}</option>
                                            )
                                        : ''}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Ansprechpartner:</td>
                            <td>
                                <input id="spokesperson" className="border rounded pl-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, spokesperson: e.target.value})}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="mb-10 ml-[15rem]  mt-5 p-1.5 px-3.5
                                 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit">
                        Speichern
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewClient