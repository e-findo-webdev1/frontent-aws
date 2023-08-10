import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import API from "axios";
import fromHex from "../../components/helpers/fromHex";

const EditIndex = () => {
    const router = useRouter()
    const pid = router.query

    const [priceMatrix, setPriceMatrix] = useState<any>();
    const [newIndeces, setNewIndeces] = useState<any>();
    // @ts-ignore
    const [newIndexName, setNewIndexName] = useState<any>(fromHex(pid.index_name)
        // @ts-ignore
        .slice(fromHex(pid.index_name)
            // @ts-ignore
            .indexOf("-", fromHex(pid.index_name)
                .indexOf("-") + 1)+1).replace(" ", ""));
    const [newPrices, setNewPrices] = useState<any>();



    const monthsList = [
        "Januar", "Februar", "März", "April",
        "Mai", "Juni", "Juli", "August",
        "September", "Oktober", "November", "Dezember"
    ]

    useEffect(() => {
            API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
                .then((response) => {
                    setPriceMatrix(response.data.Items.filter((matrix: any) =>
                        // @ts-ignore
                        fromHex(pid.index_name).includes(matrix.price_matrix) &&
                        // @ts-ignore
                        fromHex(pid.index_name).includes(matrix.indexgroup_name)
                    )[0]);
                })
                .catch((error) => {
                    console.log(error.response);
                });

    }, [pid.id]);

    const sendData = async () => {
        // @ts-ignore
        if (newIndexName != fromHex(pid.index_name)
            // @ts-ignore
            .slice(fromHex(pid.index_name)
                // @ts-ignore
                .indexOf("-", fromHex(pid.index_name)
                    .indexOf("-") + 1)+1).replace(" ", ""))
        {
            let newIndecesList: any = []
            newIndecesList = [...priceMatrix.indeces]
            // @ts-ignore
            newIndecesList.pop(fromHex(pid.index_name)
                // @ts-ignore
                .slice(fromHex(pid.index_name)
                    // @ts-ignore
                    .indexOf("-", fromHex(pid.index_name)
                        .indexOf("-") + 1)+1).replace(" ", ""))
            newIndecesList.push(newIndexName)
            let newPricesObject: any []
            newPricesObject = {...priceMatrix.prices}
            for (let month in newPricesObject) {
                // @ts-ignore
                if (newPricesObject[month][fromHex(pid.index_name)
                    // @ts-ignore
                    .slice(fromHex(pid.index_name)
                        // @ts-ignore
                        .indexOf("-", fromHex(pid.index_name)
                            .indexOf("-") + 1) + 1).replace(" ", "")]) {
                    newPricesObject = {
                        ...newPricesObject, [month]: {
                            // @ts-ignore
                            ...newPricesObject[month], [newIndexName]: newPricesObject[month][fromHex(pid.index_name)
                                // @ts-ignore
                                .slice(fromHex(pid.index_name)
                                    // @ts-ignore
                                    .indexOf("-", fromHex(pid.index_name)
                                        .indexOf("-") + 1) + 1).replace(" ", "")]
                        }
                    }
                    // @ts-ignore
                    delete newPricesObject[month][fromHex(pid.index_name)
                        // @ts-ignore
                        .slice(fromHex(pid.index_name)
                            // @ts-ignore
                            .indexOf("-", fromHex(pid.index_name)
                                .indexOf("-") + 1) + 1).replace(" ", "")]
                }}
            let newPriceMatrix = {...priceMatrix, prices: newPricesObject, indeces: newIndecesList}
            console.log(newPriceMatrix)
            await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            newPriceMatrix)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                 console.log(error);
            });

             window.location.replace('/master-data');
        } else {
            await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
                '')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            window.location.replace('/master-data');
        }
    }

            return(
                <div id="content-page" className="mx-20 overflow-auto h-full">
            <p className="mb-3 text-3xl font-bold">Index</p>
            <form>
                <table className="mb-3 text-xs">
                    <tbody>
                    <tr>
                        <td className="text-xs font-semibold">Name:</td>
                        <td>
                            <input id="name" className="border rounded px-2.5 py-0.5"
                                   required={ true }
                                // @ts-ignore
                                   defaultValue={fromHex(pid.index_name)
                                       // @ts-ignore
                                       .slice(fromHex(pid.index_name)
                                           // @ts-ignore
                                           .indexOf("-", fromHex(pid.index_name)
                                               .indexOf("-") + 1)+1).replace(" ", "")}
                                   onChange={(e) =>
                                   {
                                        setNewIndexName(e.target.value)
                                   }
                            }
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
            <span className="text-xs"><button className="underline">2023</button></span>
            <span className="text-xs"> |</span>
            <p className="text-xs mt-2.5">
                <span className="font-bold">Indexpreise Jahr 2023</span>
            </p>
            {priceMatrix ? monthsList.map((month: any) =>
                <div key={month} className="mt-2">
                    <div className="flex w-40">
                        <span className="text-xs py-1">{month}</span>
                        <input className="text-xs ml-auto border text-right px-2.5 rounded pl-2.5 py-1 mr-1 w-20"
                               defaultValue={priceMatrix && priceMatrix.prices[month]
                                   // @ts-ignore
                                   [fromHex(pid.index_name)
                                   // @ts-ignore
                                   .slice(fromHex(pid.index_name)
                                       // @ts-ignore
                                       .indexOf("-", fromHex(pid.index_name)
                                           .indexOf("-") + 1)+1).replace(" ", "")
                                   .replace(',', '.')] ? parseInt(priceMatrix.prices[month]
                                   // @ts-ignore
                                   [fromHex(pid.index_name)
                                   // @ts-ignore
                                   .slice(fromHex(pid.index_name)
                                       // @ts-ignore
                                       .indexOf("-", fromHex(pid.index_name)
                                           .indexOf("-") + 1)+1).replace(" ", "")
                                   .replace(',', '.')]) : 0}
                               onChange={(e) =>
                               {
                                   setPriceMatrix({...priceMatrix,
                                       prices: {...priceMatrix.prices,
                                           [month]: {...priceMatrix.prices[month],
                                               // @ts-ignore
                                                [fromHex(pid.index_name)
                                                    // @ts-ignore
                                                    .slice(fromHex(pid.index_name)
                                                        // @ts-ignore
                                                        .indexOf("-", fromHex(pid.index_name)
                                                            .indexOf("-") + 1)+1).replace(" ", "")]: e.target.value
                                           }}})
                               }
                        }
                        />
                        <span className="text-xs py-1">€</span>
                    </div>

                </div>
            ) : ""}
            <button className="ml-20 p-1.5 mt-7 font-bold text-xs border-accent-color-1
                            bg-accent-color-4 hover:bg-accent-color-5
                            sm:rounded-lg shadow-md border"
                    onClick={()=>sendData()}>
                Speichern</button>
        </div>
    )
}

export default EditIndex