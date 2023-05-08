import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import fromHex from "../../components/helpers/fromHex";
import API from "axios";
import moment from "moment";
import Link from "next/link";

const PriceMatrix = () => {
    const [currentTime] = useState<any>(moment());
    const [priceMatrix, setPriceMatrix] = useState<any>({
            price_matrix: "",
            indexgroup_name: "",
            indeces: [],
            prices: {
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
                'Dezember:': {}
            },
        }
    );
    const [prices, setNewPrices] = useState<any>({
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
            'Dezember:': {}
    });

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
                        matrix.price_matrix == fromHex(pid.sort_name))[0].indexgroup_name,
                    prices: response.data.Items.filter((matrix: any) =>
                        matrix.price_matrix == fromHex(pid.sort_name))[0].prices,
                    indeces: response.data.Items.filter((matrix: any) =>
                        matrix.price_matrix == fromHex(pid.sort_name))[0].indeces
                    },
                )
            })
            .catch((error) => {
                console.log(error.response);
            });


    }, []);

    console.log(prices)
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

    const responseBody = { price_matrix: "", indexgroup_name: "", indeces: [], prices: {} }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.price_matrix = priceMatrix.price_matrix
        responseBody.indexgroup_name = priceMatrix.indexgroup_name
        responseBody.indeces = priceMatrix.indeces
        responseBody.prices = prices
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
    console.log(priceMatrix)
    return(
        <div id="content-page" className="px-24 h-full overflow-auto">
            <div className="h-max overflow-auto">
                <Link href={"/kalkulation/"}>
                    <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1
                        bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">
                        ← Zurück
                    </button>
                </Link>
                <p className="text-lg font-bold mb-3">
                    Preismatrix: {priceMatrix.indexgroup_name + " - " + fromHex(pid.sort_name)}</p>
                <p className="font-bold text-sm">2023</p>
                <form onSubmit={onSubmitHandler}>
                <div className="mb-3 sm:rounded-lg shadow-md border overflow-auto max-h-full w-3/5 mt-3">
                    <table className="flex-row w-full table-fixed">
                        <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th className="font-normal">Monat</th>
                            { priceMatrix
                                ? priceMatrix.indeces
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
                                    <th key={index}
                                        className="font-normal text-right">
                                        {index}
                                    </th>
                                ) : ""}
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                            {monthsList.map((month: any) => (
                                <tr key={month} className="text-xs text-gray-500 border-b">
                                    <td>{month}</td>
                                    {   priceMatrix.price_matrix != "" &&
                                        months[currentTime.month()] == month
                                            ? priceMatrix.indeces
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
                                                    <td key={index}>
                                                    <input  className="border rounded pl-2.5 py-0.5 w-full"
                                                     defaultValue={priceMatrix ? priceMatrix.prices[month][index]: ""}
                                                 onChange={
                                                     (e)=>
                                                         setNewPrices({...prices,
                                                             [month]: {...prices[month],
                                                                 [index]: parseInt(e.target.value)}
                                                         })}/>
                                                    </td>)
                                            : priceMatrix.indeces
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
                                                <td key={index}>
                                                    <p>{}</p>
                                                </td>)
                                        }
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