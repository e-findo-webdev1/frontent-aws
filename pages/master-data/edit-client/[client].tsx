import React, {useState, useEffect} from "react";
import API from "axios";
import {useRouter} from "next/router";
import Link from "next/link";

const EditClient= () => {

    const router = useRouter()
    const pid = router.query

    const [lands, setLands] = useState<any[]>([{land_name: ""}]);
    const [data, setData] = useState({
        address_id: "0", city: "", client_id: 0, client_name: "", client_number: "0", client_status: "0", co_distance: 0,
        co_load: 0, co_orig_amount: 0, co_orig_trips: 0, co_orig_year: 0, co_show: 0, contact: "", country_id: 1,
        email: "", land_id: 0, logo_url: "", next_pdf_nr: 0, spokesperson: "", street: "", telefon: "",
        worktime_mail: 0, worktime_status: 0, zip_code: "", automatic_email: false,
    });
    const [landName, setLandName] = useState<any>("")

    useEffect(() => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients';

        API.get(apiName)
            .then((response) => {
                setData(response.data.Items.filter((item: any) => item.client_id == pid.client)[0])
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

    }, [pid, lands[0].land_name]);


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
        responseBody.client_id = data.client_id
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
        <div id="content-page" className="px-20 h-full overflow-auto">
            <Link href="/master-data/0">
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
                                       defaultValue={data ? data.client_name : ''}
                                       onChange={(e)=>
                                           setData({...data, client_name: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">KundenNr.:</td>
                            <td>
                                <input id="client_number" className="border rounded px-2.5 py-0.5"
                                       defaultValue={data
                                           ? JSON.parse(sessionStorage.getItem('company') as string).client_number : ''}
                                       onChange={(e)=>
                                           setData({...data, client_number: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">PLZ:</td>
                            <td>
                                <input id="zip_code" className="border rounded px-2.5 py-0.5"
                                       defaultValue={data ? data.zip_code : ''}
                                       onChange={(e)=>
                                           setData({...data, zip_code: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Stadt:</td>
                            <td>
                                <input id="city" className="border rounded px-2.5 py-0.5"
                                       defaultValue={data ? data.city : ''}
                                       onChange={(e)=>
                                           setData({...data, city: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Straße:</td>
                            <td>
                                <input id="street" className="border rounded px-2.5 py-0.5"
                                       defaultValue={data ? data.street : ''}
                                       onChange={(e)=>
                                           setData({...data, street: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Telefon:</td>
                            <td>
                                <input id="telephone" className="border rounded px-2.5 py-0.5"
                                       defaultValue={data ? data.telefon : ''}
                                       onChange={(e)=>
                                           setData({...data, telefon: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">E-Mail:</td>
                            <td>
                                <input id="email" className="border rounded px-2.5 py-0.5"
                                       defaultValue={data ? data.email : ''}
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
                                        value={ lands && data &&
                                        lands.filter((land: any) => land.land_id == data.land_id).length > 0
                                            ?
                                            lands.filter((land: any) => land.land_id == data.land_id)[0].land_name : "" }
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
                            <td className="text-xs font-semibold">Mailversand automatisch <br/>
                                Arbeitszeiten:</td>
                            <td>
                                <input id="automatic_email" className="border rounded pl-2.5 py-0.5" type="checkbox"
                                       checked={data ? data.automatic_email : false}
                                       onChange={(e)=>
                                           setData({...data, automatic_email: e.target.checked})}/>
                                <span>&nbsp; aktivieren<br/>
                                    Erstversand Mittwoch 15 Uhr, Nachfrage nächster Tag 15 Uhr</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Ansprechpartner:</td>
                            <td>
                                <input id="spokesperson" className="border rounded pl-2.5 py-0.5"
                                       defaultValue={data ? data.spokesperson : ''}
                                       onChange={(e)=>
                                           setData({...data, spokesperson: e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Logo:</td>
                            <td>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr className="mt-5"/>
                    <p className="mt-5 text-xl font-bold mb-5">Benutzerkonto</p>
                    <div className="text-sm space-y-3 mb-10">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-xs font-semibold">Benutzer:
                                        <input id="user" className="border rounded pl-2.5 py-0.5"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-xs font-semibold">Passwort:
                                        <input id="user-password" className="border rounded pl-2.5 py-0.5"/>
                                    <span className="font-normal"> (wird nicht angezeigt)</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="mb-10 float-right border p-1.5 px-3.5
                                 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit">
                        Speichern
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditClient