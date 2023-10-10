import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../../components/helpers/fromHex";
import toHex from "../../../components/helpers/toHex";


const EditIndex = () => {
    const [indexName, setIndexName] = useState<any>();
    const [priceMatrix, setPriceMatrix] = useState<any>();

    const router = useRouter()
    const pid = router.query

    useEffect(() => {

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
            .then((response) => {
                setPriceMatrix(response.data.Items.filter((matrix: any) =>
                    matrix.price_matrix ==
                    // @ts-ignore
                    fromHex(pid.index_name).substring(0, fromHex(pid.index_name).search(" -")))[0])
            })
            .catch((error) => {
                console.log(error.response);
            });


    }, []);

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        let indeces = priceMatrix.indeces

        let position = priceMatrix.indeces.findIndex((index: any) =>
            // @ts-ignore
            index == fromHex(pid.index_name).substring(fromHex(pid.index_name).search("- ")+2,))
        indeces.splice(position, 1)
        {indeces ? indeces = [...indeces, indexName] : indeces = [indexName]}
        event.preventDefault();
        await sendData(indeces)
        window.location.replace("/kalkulation/edit-sort/" + toHex(priceMatrix.indexgroup_name));
    }

    const sendData = async (indeces: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            {price_matrix: priceMatrix.price_matrix, indexgroup_name: priceMatrix.indexgroup_name,
                indeces: indeces, prices: priceMatrix.prices})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className="px-20">
            <Link href={priceMatrix ? "/kalkulation/edit-sort/" + toHex(priceMatrix.indexgroup_name) : '/'}>
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                </button>
            </Link>
            <p className="my-9 text-3xl font-bold">Index bearbeiten</p>
            <div className="flex">
                <form onSubmit={onSubmitHandler}>
                    <input className="border rounded pl-2.5 py-0.5 mr-1"
                           defaultValue=
                               // @ts-ignore
                               { fromHex(pid.index_name).substring(fromHex(pid.index_name).search("- ")+2,)}
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

export default EditIndex