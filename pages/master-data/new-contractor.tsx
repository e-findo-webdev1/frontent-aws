import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";


const NewContractor = () => {

    const [contractors, setContractors] = useState<any>();
    const [contractorName, setContractorName] = useState<any>();
    const [contractorCity, setContractorCity] = useState<any>();
    const [contractorStreet, setContractorStreet] = useState<any>();
    const [contractorZipCode, setContractorZipCode] = useState<any>();
    const [contractorTelefon, setContractorTelefon] = useState<any>();
    const [contractorEmail, setContractorEmail] = useState<any>();
    const [dataSent, setDataSent] = useState<any>(false);

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors')
                .then((response) => {
                    setContractors(
                        response.data.Items
                    );
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        fetchData()

    },[dataSent])

    const responseBody = {
        contractor_id: 0, contractor_name: '', email: '', street: '', city: '', telefon: '', zip_code: ''
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        responseBody.contractor_id = parseInt(contractors.reduce((prev: any, current: any) => {
            return parseInt(prev.contractor_id) > parseInt(current.contractor_id)
                ? prev : current}).contractor_id) + 1;
        responseBody.contractor_name = contractorName;
        responseBody.city = contractorCity;
        responseBody.street = contractorStreet;
        responseBody.zip_code = contractorZipCode;
        responseBody.telefon = contractorTelefon;
        responseBody.email = contractorEmail;
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
                                       onChange={(e)=>
                                           setContractorName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Ort:</td>
                            <td>
                                <input id="city" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setContractorCity(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Strasse:</td>
                            <td>
                                <input id="street" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setContractorStreet(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">PLZ:</td>
                            <td>
                                <input id="zip_code" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setContractorZipCode(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Telefon:</td>
                            <td>
                                <input id="telefon" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setContractorTelefon(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Email:</td>
                            <td>
                                <input id="email" className="border rounded px-2.5 py-0.5"
                                       onChange={(e)=>
                                           setContractorEmail(e.target.value)}
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

export default NewContractor