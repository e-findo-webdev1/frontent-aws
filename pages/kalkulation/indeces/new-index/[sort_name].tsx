import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../../components/helpers/fromHex";
import toHex from "../../../components/helpers/toHex";
import moment from "moment";

const NewIndex = () => {
    const router = useRouter()
    const pid = router.query

    const [indexName, setIndexName] = useState<any>();
    const [sort, setSort] = useState<any>(
        {
            sort_name: "", description: "", indexgroup_name: "", indeces: []}
    );
    const [priceMatrix, setPriceMatrix] = useState<any>({});
    const [prices, setPrices] = useState<any>({});

    useEffect(() => {

        const getData = async() => {
            let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts';

            await API.get(apiName)
                .then((response) => {
                    setSort(response.data.Items.filter((sort: any) => sort.sort_name == fromHex(pid.sort_name))[0])
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
                .then((response) => {
                    setPriceMatrix(response.data.Items.filter((matrix: any) =>
                        matrix.price_matrix == fromHex(pid.sort_name))[0]);
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
        getData()
        setPrices(priceMatrix.prices)

    }, );

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPrices({[moment().year()]: {
                'Januar': {...prices[moment().year()]['Januar'], [indexName]: 0},
                'Februar': {...prices[moment().year()]['Februar'], [indexName]: 0},
                'März': {...prices[moment().year()]['März'], [indexName]: 0},
                'April': {...prices[moment().year()]['April'], [indexName]: 0},
                'Mai': {...prices[moment().year()]['Mai'], [indexName]: 0},
                'Juni': {...prices[moment().year()]['Juni'], [indexName]: 0},
                'Juli': {...prices[moment().year()]['Juli'], [indexName]: 0},
                'August': {...prices[moment().year()]['August'], [indexName]: 0},
                'September': {...prices[moment().year()]['September'], [indexName]: 0},
                'Oktober': {...prices[moment().year()]['Oktober'], [indexName]: 0},
                'November': {...prices[moment().year()]['November'], [indexName]: 0},
                'Dezember': {...prices[moment().year()]['Dezember'], [indexName]: 0}
            }})
        let indeces
        {priceMatrix.indeces ? indeces = [...priceMatrix.indeces, indexName] : indeces = [indexName]}
        await sendData(indeces)
    }


    const sendData = async (indeces: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            {price_matrix: sort.sort_name, indexgroup_name: sort.indexgroup_name,
                indeces: indeces, prices: prices})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        //window.location.replace("/kalkulation/edit-sort/" + toHex(sort.indexgroup_name))
        window.location.replace("/kalkulation/indeces/" + pid.sort_name)
    }

    return(
        <div className="overflow-auto h-full px-48 m-auto">
            <Link href={"/kalkulation/edit-sort/" + toHex(sort.indexgroup_name)}>
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