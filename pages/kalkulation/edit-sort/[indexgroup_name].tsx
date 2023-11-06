import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../components/helpers/fromHex";
import toHex from "../../components/helpers/toHex";
import API from "axios";


const EditSort = () => {
    const [sorts, setSorts] = useState<any>();
    const [priceMatrices, setPriceMatrices] = useState<any>();

    const router = useRouter()
    const pid = router.query

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts';

        API.get(apiName)
            .then((response) => {
                setSorts(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
            .then((response) => {
                setPriceMatrices(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });

    },[] );

    const deleteSort = async (sort: any) => {
        await API.delete('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts',
            { data: { sort_name: sort } })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        await API.delete('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            { data: { price_matrix: sort } })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.replace("/kalkulation/edit-sort/" + pid.indexgroup_name as string);
    }

    return(
        <div className="px-20 h-full overflow-auto">
            <div className="flex w-full mb-5">
                <Link href="/kalkulation/index-management">
                    <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                    </button>
                </Link>
            </div>
            <div>
                <Link href={"/kalkulation/new-sort/" + pid.indexgroup_name}>
                    <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"> + Neue Sorte
                    </button>
                </Link>
            </div>
            <p className="my-9 text-3xl font-bold">{"Indexgruppe bearbeiten '" + fromHex(pid.indexgroup_name) + "'"}</p>
            <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto overflow-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Sorte</th>
                        <th className="font-normal">Beschreibung</th>
                        <th className="font-normal">Preismatrix</th>
                        <th className="font-normal">Indexe</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        {sorts ?
                            sorts
                                .filter((sort: any) =>
                                    sort.indexgroup_name == fromHex(pid.indexgroup_name)
                                )
                                .sort(function (a: any, b: any){
                                    if (a.sort_name < b.sort_name) {
                                        return -1;
                                    }
                                    if (a.sort_name > b.sort_name) {
                                        return 1;
                                    }
                                    return 0;
                                })
                                .map((sort: any) =>
                                <tr key={toHex(sort.sort_name)}
                                    className="bg-gray-50 text-xs border-b text-left">
                                    <td className="underline">
                                        <Link href={"/kalkulation/edit-sort/sort/" +
                                            toHex(sort.sort_name)}>
                                            {fromHex(pid.indexgroup_name) + ' - ' + sort.sort_name}
                                        </Link>
                                    </td>
                                    <td>{sort.description}</td>
                                    <td>
                                        <Link href={"/kalkulation/price-matrix/" +
                                            toHex(sort.sort_name)}>
                                            <div>
                                                {priceMatrices
                                                    && priceMatrices.filter((matrix: any) =>
                                                        matrix.indexgroup_name == sort.indexgroup_name
                                                        && matrix.price_matrix == sort.sort_name)[0]
                                                    && priceMatrices.filter((matrix: any) =>
                                                        matrix.indexgroup_name == sort.indexgroup_name
                                                    && matrix.price_matrix == sort.sort_name)[0].indeces
                                                    ? `${priceMatrices.filter((matrix: any) =>
                                                matrix.indexgroup_name == sort.indexgroup_name
                                                && matrix.price_matrix == sort.sort_name && matrix.indeces)[0].indeces.length} Indexe `
                                                    : "0 Indexe "}
                                                <button className="p-2 font-bold text-xs border-accent-color-1
                                                    bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg
                                                    shadow-md border">
                                                    Preismatrix
                                                </button>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={"/kalkulation/indeces/" + toHex(sort.sort_name)}>
                                            <button className="p-2 font-bold text-xs border-accent-color-1
                                    bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border">
                                                Bearbeiten
                                            </button>
                                        </Link>

                                    </td>
                                    <td>
                                        <button
                                            className="p-2 font-bold text-xs border-accent-color-1
                                                       bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg
                                                       shadow-md border"
                                            onClick={()=>{deleteSort(sort.sort_name)}}>
                                            Sorte löschen
                                        </button>
                                    </td>
                                </tr>
                        ) : ""}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EditSort