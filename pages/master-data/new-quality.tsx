import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";


const NewQuality = () => {

    const [qualities, setQualities] = useState<any>();
    const [qualityName, setQualityName] = useState<any>();
    const [dataSent, setDataSent] = useState<any>(false);

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities')
                .then((response) => {
                    setQualities(
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
        quality_id: '', quality_name: ''
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        responseBody.quality_id = String(parseInt(qualities.reduce((prev: any, current: any) => {
            return parseInt(prev.quality_id) > parseInt(current.quality_id) ? prev : current}).quality_id) + 1);
        responseBody.quality_name = qualityName;
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
        <div id="content-page" className="px-20 h-full overflow-auto">
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
                                       onChange={(e)=>
                                           setQualityName(e.target.value)}
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

export default NewQuality