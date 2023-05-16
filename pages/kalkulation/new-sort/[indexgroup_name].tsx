import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../components/helpers/fromHex";


const NewSort = () => {
    const router = useRouter()
    const pid = router.query

    const [sortName, setSortName] = useState<any>();
    const [description, setDescription] = useState<any>();
    const [indexgroupName, setIndexgroupName] = useState<any>();

    useEffect(() => {
        setIndexgroupName(fromHex(pid.indexgroup_name))
    }, );

    const responseBody = {sort_name: "", description: "", indexgroup_name: ""}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.sort_name = sortName
        responseBody.description = description
        responseBody.indexgroup_name = indexgroupName
        sendData(responseBody)
    }

    const sendData = (responseBody: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            {price_matrix: responseBody.sort_name, indexgroup_name: indexgroupName})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className="px-20">
            <Link href={"/kalkulation/edit-sort/" + pid.indexgroup_name}>
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                </button>
            </Link>
            <p className="my-9 text-3xl font-bold">Sorte bearbeiten</p>
            <div className="flex">
                <form onSubmit={onSubmitHandler}>
                    <p>Name:</p>
                    <input className="border rounded pl-2.5 py-0.5 mr-1 mb-3"
                           onChange={(e)=>
                               setSortName(e.target.value)}/>
                    <p>Beschreibung:</p>
                    <input className="border rounded pl-2.5 py-0.5 mr-1"
                           onChange={(e)=>
                               setDescription(e.target.value)}/>
                    <p><button className="p-2 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border mt-5">
                        Speichern</button></p>
                </form>
            </div>
        </div>
    )
}

export default NewSort