import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../../components/helpers/fromHex";


const NewIndex = () => {
    const router = useRouter()
    const pid = router.query

    const [indexName, setIndexName] = useState<any>();
    const [sort, setSort] = useState<any>(
        {
            sort_name: "", description: "", indexgroup_name: "", indeces: []}
    );
    const [priceMatrix, setPriceMatrix] = useState<any>();
    const [prices, setPrices] = useState<any>(
        {
            'Januar': {},
            'Februar': {},
            'März': {},
            'April': {},
            'Mai': {},
            'Juni': {},
            'Juli': {},
            'August': {},
            'September': {},
            'Oktober': {},
            'November': {},
            'Dezember': {}
        }
    );

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts';

        API.get(apiName)
            .then((response) => {
                setSort(response.data.Items.filter((sort: any) => sort.sort_name == fromHex(pid.sort_name))[0])
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
            .then((response) => {
                setPriceMatrix(response.data.Items.filter((matrix: any) =>
                    matrix.price_matrix == fromHex(pid.sort_name))[0])
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);
    console.log(prices)

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPrices({
            'Januar': {...prices, [indexName]: 0},
            'Februar': {...prices, [indexName]: 0},
            'März': {...prices, [indexName]: 0},
            'April': {...prices, [indexName]: 0},
            'Mai': {...prices, [indexName]: 0},
            'Juni': {...prices, [indexName]: 0},
            'Juli': {...prices, [indexName]: 0},
            'August': {...prices, [indexName]: 0},
            'September': {...prices, [indexName]: 0},
            'Oktober': {...prices, [indexName]: 0},
            'November': {...prices, [indexName]: 0},
            'Dezember': {...prices, [indexName]: 0}
        })
        let indeces
        {priceMatrix.indeces ? indeces = [...priceMatrix.indeces, indexName] : indeces = [indexName]}
        sendData(indeces)
    }


    const sendData = (indeces: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            {price_matrix: sort.sort_name, indexgroup_name: sort.indexgroup_name,
                indeces: indeces, prices: prices})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div className="px-20">
            <Link href={"/kalkulation/"}>
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                </button>
            </Link>
            <p className="mt-9 mb-2 text-3xl font-bold">Index bearbeiten</p>
            <div className="flex">
                <form onSubmit={onSubmitHandler}>
                    <input className="border rounded pl-2.5 py-0.5 mr-1"
                           onChange={(e)=>
                               setIndexName(e.target.value)
                    }/>
                    <button className="p-2 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5
                    sm:rounded-lg shadow-md border mt-5">
                        Speichern</button>
                </form>
            </div>
        </div>
    )
}

export default NewIndex