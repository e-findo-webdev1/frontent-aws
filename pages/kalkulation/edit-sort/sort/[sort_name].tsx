import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../../components/helpers/fromHex";
import toHex from "../../../components/helpers/toHex";

const SortEdit = () => {
    const router = useRouter()
    const pid = router.query

    const [sort, setSort] = useState({
        sort_name: "",
        description: "",
        indexgroup_name: ""
    });

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts';

        API.get(apiName)
            .then((response) => {
                setSort(response.data.Items.filter((sort: any) => sort.sort_name == fromHex(pid.sort_name))[0])
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);

    const responseBody = {sort_name: "", description: "", indexgroup_name: ""}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.sort_name = sort.sort_name
        responseBody.description = sort.description
        responseBody.indexgroup_name = sort.indexgroup_name
        deleteData(sort.sort_name)
        sendData(responseBody)
    }

    const deleteData = (sort: any) => {
        API.delete('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts',
            { data: { sort_name: fromHex(pid.sort_name) } })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        API.delete('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            { data: { price_matrix: fromHex(pid.sort_name) } })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
            {price_matrix: responseBody.sort_name, indexgroup_name: responseBody.indexgroup_name})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className="px-20">
            <Link href={sort ? "/kalkulation/edit-indexgroup/" + toHex(sort.indexgroup_name) : "/kalkulation/"}>
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1
                        bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">
                    ← Zurück
                </button>
            </Link>
            <p className="my-9 text-3xl font-bold">Sorte bearbeiten</p>
            <div className="flex">
                <form onSubmit={onSubmitHandler}>
                    <p>Name:</p>
                    <input className="border rounded pl-2.5 py-0.5 mr-1 mb-3"
                           defaultValue={fromHex(pid.sort_name)}
                           onChange={(e)=>
                               setSort({...sort, sort_name: e.target.value})}/>
                    <p>Beschreibung:</p>
                    <input className="border rounded pl-2.5 py-0.5 mr-1"
                           defaultValue={sort ? sort.description : ""}
                           onChange={(e)=>
                               setSort({...sort, description: e.target.value})}/>
                    <p><button className="p-2 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border mt-5">
                        Speichern</button></p>
                </form>
            </div>
        </div>
    )
}

export default SortEdit