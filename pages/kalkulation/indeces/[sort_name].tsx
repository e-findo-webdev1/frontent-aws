import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import fromHex from "../../components/helpers/fromHex";
import toHex from "../../components/helpers/toHex";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const IndecesManegement = () => {
    const router = useRouter()
    const pid = router.query

    const [sort, setSort] = useState({
        sort_name: "",
        description: "",
        indexgroup_name: "",
    });
    const [priceMatrix, setPriceMatrix] = useState<any>();
    const [machines, setMachines] = useState<any>();
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false)

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
                        matrix.price_matrix == fromHex(pid.sort_name))[0])
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
                .then((response) => {
                    setMachines(response.data.Items)
                })
                .catch((error) => {
                    console.log(error.response);
                });
            setIsDataLoaded(true)
        }

        getData()


    }, [pid]);

    const deleteIndex = async (index: any) => {
        let indeces
        {priceMatrix.indeces ? indeces = priceMatrix.indeces : indeces = []}
        let position = priceMatrix.indeces.findIndex((index: any) => index == index)
        indeces.splice(position, 1)
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            {price_matrix: sort.sort_name, indexgroup_name: sort.indexgroup_name,
            indeces: indeces, prices: priceMatrix.prices})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.replace("/kalkulation/indeces/" + pid.sort_name);
    }



    return(
        <div className="overflow-auto h-full px-48 m-auto">
            <Link href={sort ? `/kalkulation/edit-sort/${toHex(sort.indexgroup_name)}`: ''}>
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1
                        bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">
                    ← Zurück
                </button>
            </Link>
            <div className="w-full flex float-right mt-5">
                <Link href={"/kalkulation/indeces/new-index/" + pid.sort_name}>
                    <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"> <p>+ Neuer Index</p>
                    </button>
                </Link>
            </div>
            <p className="text-lg font-bold mb-3 pb-12">
                {sort ? "Indexe zu der Sorte '" + sort.indexgroup_name + ' - ' + sort.sort_name + "'" : ''}</p>
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="h-[13.5rem] max-w-[45rem] mt-5 mb-5 sm:rounded-lg shadow-md"/>
                </SkeletonTheme> :
                <div className="max-h-[13.5rem] mb-3 sm:rounded-lg shadow-md border overflow-auto bg-gray-50 max-h-full w-3/5 mt-3">
                    <table className="flex-row w-full  table-fixed">
                        <thead>
                        <tr className="text-xs text-gray-500 bg-white border-b text-left">
                            <th className="font-normal">Indexname</th>
                            <th className="font-normal text-right">Verknüpfte Maschinen</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                        {priceMatrix && priceMatrix.indeces ? priceMatrix.indeces
                            .sort(function (a: any, b: any){
                                if (a < b) {
                                    return -1;
                                }
                                if (a > b) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((index: any) =>
                            <tr key={index} className="bg-gray-50 text-xs border-b text-left">
                                <td className="underline">
                                    <Link href={"/kalkulation/indeces/edit-index/" +
                                        toHex(priceMatrix.price_matrix + ' - ' + index)}>
                                        {index}
                                    </Link>
                                </td>
                                <td className={"text-right"}>{machines ? machines.filter((machine: any) =>
                                    machine.index == sort.sort_name + ' - ' + sort.indexgroup_name + ' - ' + index).length : ""}</td>
                                <td className={"text-right"}>
                                    <button
                                    className="p-2 font-bold text-xs border-accent-color-1
                                                       bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg
                                                       shadow-md border"
                                    onClick={()=>{deleteIndex(index)}}>
                                    Index löschen
                                </button>
                                </td>
                            </tr>
                        ) : ""}
                        </tbody>
                    </table>
                </div>}
        </div>
    )
}

export default IndecesManegement