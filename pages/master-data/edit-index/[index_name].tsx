import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import API from "axios";
import fromHex from "../../components/helpers/fromHex";
import moment from "moment";

const EditIndex = () => {
    const router = useRouter()
    const pid = router.query

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
                'Dezember': {}
            },
        }
    );
    const [newIndeces, setNewIndeces] = useState<any>();
    // @ts-ignore
    const [newIndexName, setNewIndexName] = useState<any>();
    const [newPrices, setNewPrices] = useState<any>();
    const [currentYear, setCurrentYear] = useState<any>(0);


    useEffect(() => {
        currentYear == 0 ? setCurrentYear(moment().year()) : ''
        priceMatrix.prices[currentYear] == undefined ? setPriceMatrix({
                ...priceMatrix,
                prices: {
                    ...priceMatrix.prices,
                    [currentYear]: {
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
                }
            }
        ) : ''
        // @ts-ignore
        newIndexName ? '' : setNewIndexName(fromHex(pid.index_name)
            // @ts-ignore
            .slice(fromHex(pid.index_name)
                // @ts-ignore
                .indexOf("-", fromHex(pid.index_name)
                    .indexOf("-") + 1)+1).replace(" ", ""))

        const fetchData = async () => {
            let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices';

            await API.get(apiName)
                .then((response) => {
                    if (priceMatrix.price_matrix == '') {
                        setPriceMatrix({
                                ...priceMatrix,
                                price_matrix: response.data.Items.filter((matrix: any) =>
                                    matrix.price_matrix == fromHex(pid.index_name).slice(
                                fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") - 1)
                                + 1, fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") + 1)).trim())[0].price_matrix,
                                indexgroup_name: response.data.Items.filter((matrix: any) =>
                                    matrix.price_matrix == fromHex(pid.index_name).slice(
                                        fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") - 1)
                                        + 1, fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") + 1)).trim())[0].indexgroup_name,
                                prices: response.data.Items.filter((matrix: any) =>
                                    matrix.price_matrix == fromHex(pid.index_name).slice(
                                        fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") - 1)
                                        + 1, fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") + 1)).trim())[0].prices,
                                indeces: response.data.Items.filter((matrix: any) =>
                                    matrix.price_matrix == fromHex(pid.index_name).slice(
                                        fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") - 1)
                                        + 1, fromHex(pid.index_name).indexOf("-", fromHex(pid.index_name).indexOf("-") + 1)).trim())[0].indeces
                            },
                        );
                    }
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
        fetchData()

    }, [pid.index_name, currentYear]);

    console.log(priceMatrix)

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
            //console.log(newPriceMatrix)
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
                {...priceMatrix, prices: priceMatrix.prices})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            window.location.replace('/master-data');
        }
    }



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



        return(
        <div id="content-page" className="px-20 overflow-auto h-full">
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
                                   defaultValue={pid ? fromHex(pid.index_name)
                                       // @ts-ignore
                                       .slice(fromHex(pid.index_name)
                                           // @ts-ignore
                                           .indexOf("-", fromHex(pid.index_name)
                                               .indexOf("-") + 1)+1).replace(" ", "") : ''}
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
            <div className="h-max overflow-auto">
                <p className="text-sm">
                    { priceMatrix && priceMatrix.prices ?
                        Object.keys(priceMatrix.prices)
                            .map((year: any) =>
                                <a key={year}
                                   className="cursor-pointer"
                                   onClick={(e)=>{setCurrentYear(year)}}
                                >
                                    <span className={currentYear == year ? 'font-bold underline' : ''}>{year}</span>
                                    {" | "}
                                </a>
                            ) : ''}
                    {
                        // @ts-ignore
                        <a key={priceMatrix.prices ? Math.max(...Object.keys(priceMatrix.prices)) + 1 : ''}
                           className="cursor-pointer"
                           onClick={(e)=>{priceMatrix.prices ?
                               // @ts-ignore
                               setCurrentYear(Math.max(...Object.keys(priceMatrix.prices)) + 1) : ''}
                           }
                        >
                    <span className={ priceMatrix.prices &&
                        // @ts-ignore
                        currentYear == Math.max(...Object.keys(priceMatrix.prices)) + 1
                            ? 'font-bold underline' : ''
                    }>
                        {priceMatrix.prices && priceMatrix.price_matrix != "" ?
                            // @ts-ignore
                            Math.max(...Object.keys(priceMatrix.prices)) + 1 : ''}
                    </span>
                        </a>
                    }
                </p>
            </div>
            <p className="text-xs mt-2.5">
                <span className="font-bold">Indexpreise Jahr {currentYear}</span>
            </p>
            {priceMatrix ? monthsList.map((month: any) =>
                <div key={month} className="mt-2">
                    <div className="flex w-40">
                        <span className="text-xs py-1">{month}</span>
                        <input className="text-xs ml-auto border text-right px-2.5 rounded pl-2.5 py-1 mr-1 w-20"
                               value={priceMatrix.prices && priceMatrix.prices[currentYear] && priceMatrix.prices[currentYear][month]
                               && priceMatrix.prices[currentYear][month]
                                   // @ts-ignore
                                   [fromHex(pid.index_name)
                                   // @ts-ignore
                                   .slice(fromHex(pid.index_name)
                                       // @ts-ignore
                                       .indexOf("-", fromHex(pid.index_name)
                                           .indexOf("-") + 1)+1).replace(" ", "")
                                   .replace(',', '.')]

                                   ? priceMatrix.prices[moment().year()][month]
                                       // @ts-ignore
                                       [fromHex(pid.index_name)
                                       // @ts-ignore
                                       .slice(fromHex(pid.index_name)
                                           // @ts-ignore
                                           .indexOf("-", fromHex(pid.index_name)
                                               .indexOf("-") + 1)+1).replace(" ", "")
                                       .replace(',', '.')] : 0}

                               onChange={(e) =>
                                   setPriceMatrix({
                                       ...priceMatrix,
                                       prices: {
                                            ...priceMatrix.prices,
                                            [currentYear]: {
                                                ...priceMatrix.prices[currentYear],
                                               [month]:
                                               {...priceMatrix.prices[month],
                               // @ts-ignore
                               [fromHex(pid.index_name)
                               // @ts-ignore
                               .slice(fromHex(pid.index_name)
                               // @ts-ignore
                               .indexOf("-", fromHex(pid.index_name)
                               .indexOf("-") + 1)+1).replace(" ", "")]: e.target.value
                                               }
                                           }
                                       }
                                   }
                               )
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