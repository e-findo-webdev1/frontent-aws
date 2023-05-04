import React, {useState} from "react";
import API from "axios";
import Link from "next/link";


const NewIndexgroup = () => {
    const [indexName, setIndexName] = useState<any>();

    const responseBody = {indexgroup_name: ""}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.indexgroup_name = indexName
        sendData(responseBody)
    }

    const sendData = (responseBody: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/index-group',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className="px-20">
            <Link href="/kalkulation/index-management">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                </button>
            </Link>
            <p className="my-9 text-3xl font-bold">Indexgruppe bearbeiten</p>
            <div className="flex">
                <form onSubmit={onSubmitHandler}>
                <input className="border rounded pl-2.5 py-0.5 mr-1"
                       onChange={(e)=>
                           setIndexName(e.target.value)}/>
                <button className="p-2 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border">
                    Speichern</button>
                </form>
            </div>
        </div>
    )
}

export default NewIndexgroup