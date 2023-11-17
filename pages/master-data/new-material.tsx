import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";


const NewMaterial = () => {

    const [materials, setMaterials] = useState<any>();
    const [materialName, setMaterialName] = useState<any>();
    const [avvNumber, setAvvNumber] = useState<any>();
    const [sortNumber, setSortNumber] = useState<any>();

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
                .then((response) => {
                    setMaterials(
                        response.data.Items
                    );
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        fetchData()

    },[])

    const responseBody = {
        material_id: 0, material_name: '', avv_number: 0, sort_number: 0
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        responseBody.material_id = materials.reduce((prev: any, current: any) => {
            return prev.waretype_id > current.waretype_id ? prev : current}).waretype_id + 1;
        responseBody.material_name = materialName;
        responseBody.avv_number = avvNumber;
        responseBody.sort_number = sortNumber;
        await sendData(responseBody);
        window.location.replace('/master-data')
    }

    const sendData = (responseBody: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <Link href="/master-data">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="mt-10 text-2xl font-bold mb-5">Material</p>
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
                                           setMaterialName(e.target.value)}
                                       />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">AVV Nr.:</td>
                            <td>
                                <input id="avv-nr" className="border rounded px-2.5 py-0.5"
                                       required={ true }
                                       onChange={(e)=>
                                           setAvvNumber(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Sorte Nr.:</td>
                            <td>
                                <input id="sorte-nr" className="border rounded px-2.5 py-0.5"
                                       required={ true }
                                       onChange={(e)=>
                                           setSortNumber(e.target.value)}
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

export default NewMaterial