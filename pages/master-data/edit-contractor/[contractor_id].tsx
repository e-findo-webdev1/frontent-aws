import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";
import {useRouter} from "next/router";


const EditContractor = () => {
    const router = useRouter()
    const pid = router.query

    const [contractor, setContractor] = useState<any>();

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors')
                .then((response) => {
                    setContractor(
                        response.data.Items.filter((contractor: any) => contractor.contractor_id == pid.contractor_id)[0]
                    )
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        fetchData()

    },[pid]);

    const responseBody = {
        contractor_id: 0, contractor_name: '', email: '', street: '', city: '', telefon: '', zip_code: ''
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        responseBody.contractor_id = contractor.contractor_id
        responseBody.contractor_name = contractor.contractor_name
        responseBody.city = contractor.city
        responseBody.street = contractor.street;
        responseBody.zip_code = contractor.zip_code;
        responseBody.telefon = contractor.telefon;
        responseBody.email = contractor.email;
        await sendData(responseBody);

        window.location.replace('/master-data')
    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id="content-page" className="px-20 h-full overflow-auto">
            <Link href="/master-data">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="mt-10 text-2xl font-bold mb-5">Auftragnehmer</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-xs">
                        <tbody>
                        <tr>
                            <td className="text-xs font-semibold">Name:</td>
                            <td>
                                <input id="name" className="border rounded px-2.5 py-0.5"
                                       required={ true }
                                       value={contractor ? contractor.contractor_name : ''}
                                       onChange={(e)=>
                                           setContractor({...contractor, contractor_name: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Ort:</td>
                            <td>
                                <input id="city" className="border rounded px-2.5 py-0.5"
                                       value={contractor ? contractor.city : ''}
                                       onChange={(e)=>
                                           setContractor({...contractor, city: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Street:</td>
                            <td>
                                <input id="street" className="border rounded px-2.5 py-0.5"
                                       value={contractor ? contractor.street : ''}
                                       onChange={(e)=>
                                           setContractor({...contractor, street: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">PLZ:</td>
                            <td>
                                <input id="zip_code" className="border rounded px-2.5 py-0.5"
                                       value={contractor ? contractor.zip_code : ''}
                                       onChange={(e)=>
                                           setContractor({...contractor, zip_code: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Telefon:</td>
                            <td>
                                <input id="telefon" className="border rounded px-2.5 py-0.5"
                                       value={contractor ? contractor.telefon : ''}
                                       onChange={(e)=>
                                           setContractor({...contractor, telefon: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Email:</td>
                            <td>
                                <input id="email" className="border rounded px-2.5 py-0.5"
                                       value={contractor ? contractor.email : ''}
                                       onChange={(e)=>
                                           setContractor({...contractor, email: e.target.value})}
                                />
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

export default EditContractor