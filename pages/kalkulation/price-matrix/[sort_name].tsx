import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import fromHex from "../../components/helpers/fromHex";
import API from "axios";
import moment from "moment";

const PriceMatrix = () => {
    const [currentTime] = useState<any>(moment());
    const [priceMatrix, setPriceMatrix] = useState<any>({
            price_matrix: "",
            indexgroup_name: "",
            prices: {
                'Januar': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'Februar': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'März': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'April': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'Mai': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'Juni': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'Juli': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'August': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'September': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'Oktober': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'November': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
                'Dezember': {
                    bundesweit: 0,
                    nort_ost: 0,
                    sud: 0,
                    west: 0,
                },
            }
        }
    );
    const [newPrices, setNewPrices] = useState<any>(
        priceMatrix.prices
    );

    const router = useRouter()
    const pid = router.query

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices';

        API.get(apiName)
            .then((response) => {
                setPriceMatrix({
                    ...priceMatrix,
                    price_matrix: response.data.Items.filter((matrix: any) =>
                        matrix.price_matrix == fromHex(pid.sort_name))[0].price_matrix,
                    indexgroup_name: response.data.Items.filter((matrix: any) =>
                        matrix.price_matrix == fromHex(pid.sort_name))[0].indexgroup_name
                    }
                )
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);

    const monthsList = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember'
    ]
    const months: any = {
        0: 'Januar',
        1: 'Februar',
        2: 'März',
        3: 'April',
        4: 'Mai',
        5: 'Juni',
        6: 'Juli',
        7: 'August',
        8: 'September',
        9: 'Oktober',
        10: 'November',
        11: 'Dezember'
    }

    const responseBody = { price_matrix: "", indexgroup_name: "", prices: {
            'Januar': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'Februar': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'März': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'April': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'Mai': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'Juni': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'Juli': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'August': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'September': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'Oktober': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'November': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
            'Dezember': {
                bundesweit: 0,
                nort_ost: 0,
                sud: 0,
                west: 0,
            },
        }}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.price_matrix = priceMatrix.price_matrix
        responseBody.indexgroup_name = priceMatrix.indexgroup_name
        responseBody.prices = newPrices
        sendData(responseBody)
    }

    const sendData = (responseBody: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div id="content-page" className="px-24 h-full overflow-auto">
            <div className="h-max overflow-auto">
                <p className="text-lg font-bold mb-3">
                    Preismatrix: {priceMatrix.indexgroup_name + " - " + fromHex(pid.sort_name)}</p>
                <p className="font-bold text-sm">2023</p>
                <form onSubmit={onSubmitHandler}>
                <div className="mb-3 sm:rounded-lg shadow-md border overflow-auto max-h-full w-3/5 mt-3">
                    <table className="flex-row w-full table-fixed">
                        <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th className="font-normal">Monat</th>
                            <th className="font-normal text-right">Bundesweit</th>
                            <th className="font-normal text-right">Nort-Ost</th>
                            <th className="font-normal text-right">Süd</th>
                            <th className="font-normal text-right">West</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                            {monthsList.map((month: any) => (
                                <tr key={month} className="text-xs text-gray-500 border-b">
                                    <td>{month}</td>
                                    <td>
                                        {   priceMatrix.prices[month].bundesweit == 0 ?
                                            months[currentTime.month()] == month
                                                ? <input className="border rounded pl-2.5 py-0.5 w-full"
                                                         defaultValue={ priceMatrix.prices[month].bundesweit }
                                                         onChange={
                                                    (e)=>
                                                         setNewPrices({...newPrices,
                                                             [month]: {...newPrices[month],
                                                                bundesweit: parseInt(e.target.value)
                                                         }
                                                             })}/>
                                                : <p className="text-right">{ priceMatrix.prices[month].bundesweit }</p>
                                        : ""}
                                    </td>
                                    <td>
                                        {
                                            months[currentTime.month()] == month
                                                ? <input className="border rounded pl-2.5 py-0.5 w-full"
                                                     defaultValue={ priceMatrix.prices[month].nort_ost }
                                                     onChange={
                                                         (e)=>
                                                             setNewPrices({...newPrices,
                                                                 [month]: {...newPrices[month],
                                                                     nort_ost: parseInt(e.target.value)
                                                                 }
                                                             })}/>
                                                : <p className="text-right">{ priceMatrix.prices[month].nort_ost }</p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            months[currentTime.month()] == month
                                                ? <input className="border rounded pl-2.5 py-0.5 w-full"
                                                     defaultValue={ priceMatrix.prices[month].sud}
                                                     onChange={
                                                         (e)=>
                                                             setNewPrices({...newPrices,
                                                                 [month]: {...newPrices[month],
                                                                     sud: parseInt(e.target.value)
                                                                 }
                                                             })}/>
                                                : <p className="text-right">{ priceMatrix.prices[month].sud }</p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            months[currentTime.month()] == month
                                                ? <input className="border rounded pl-2.5 py-0.5 w-full"
                                                     defaultValue={ priceMatrix.prices[month].west}
                                                     onChange={
                                                         (e)=>
                                                             setNewPrices({...newPrices,
                                                                 [month]: {...newPrices[month],
                                                                     west: parseInt(e.target.value)
                                                                 }
                                                             })}/>
                                                : <p className="text-right">{ priceMatrix.prices[month].west }</p>
                                        }
                                    </td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                    </div>
                <button className="border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                                       hover:bg-accent-color-5 rounded-lg shadow-md text-xs"
                        type="submit">Speichern
                </button>
            </form>
            </div>
        </div>
    )
}

export default PriceMatrix