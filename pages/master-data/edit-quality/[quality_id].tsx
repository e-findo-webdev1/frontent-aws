import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";
import {useRouter} from "next/router";


const EditQuality = () => {
    const router = useRouter()
    const pid = router.query

    const [quality, setQuality] = useState<any>();

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities')
                .then((response) => {
                    setQuality(
                        response.data.Items.filter((quality: any) => quality.quality_id == pid.quality_id)[0]
                    )
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        fetchData()

    },[pid]);

    const responseBody = {
        quality_id: '', quality_name: ''
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        responseBody.quality_id = quality.quality_id;
        responseBody.quality_name = quality.quality_name;
        await sendData(responseBody);

        window.location.replace('/master-data')
    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities',
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
            <p className="mt-10 text-2xl font-bold mb-5">Qualität</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-xs">
                        <tbody>
                        <tr>
                            <td className="text-xs font-semibold">Name:</td>
                            <td>
                                <input id="name" className="border rounded px-2.5 py-0.5"
                                       required={ true }
                                       value={quality ? quality.quality_name : ''}
                                       onChange={(e)=>
                                           setQuality({...quality, quality_name: e.target.value})}
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

export default EditQuality