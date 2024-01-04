import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import API from "axios";
import moment from "moment";

const PriceList = () => {
    const [currentYear, setCurrentYear] = useState<any>(moment().year())
    const [machineData, setMachineData] = useState<any>(undefined);
    const [newPriceList, setNewPriceList] = useState<any>({prices: {
            [moment().year()]: {
                Januar: '0,00',
                Februar: '0,00',
                März: '0,00',
                April: '0,00',
                Mai: '0,00',
                Juni: '0,00',
                Juli: '0,00',
                August: '0,00',
                September: '0,00',
                Oktober: '0,00',
                November: '0,00',
                Dezember: '0,00'
            }
        }
    });

    const router = useRouter()
    const pid = router.query

    const monthsList = [
        "Januar", "Februar", "März", "April",
        "Mai", "Juni", "Juli", "August",
        "September", "Oktober", "November", "Dezember"
    ]

    useEffect(() => {
        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines')
                .then((response) => {
                    setMachineData(response.data.Items.filter((item: any) => item.machine_id == pid.id)[0]);
                    if (machineData.price_list[currentYear]) {
                        setNewPriceList(response.data.Items
                            .filter((item: any) => item.machine_id == pid.id)[0].price_list)
                    }
                })
                .catch((error) => {
                    console.log(error.response);
                });

    }, [pid.id, currentYear]);

    const sendData = async () => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines',
            machineData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        window.location.replace('/master-data/' +
            JSON.parse(sessionStorage.getItem('company') as string).client_id);
    }

    return(
        <div id="content-page" className="mx-20 overflow-auto h-full">
            <p className="mb-7 text-3xl font-bold">Maschinen</p>
            <div>
                {machineData ? Object.keys(machineData.price_list.prices).map((year: any) =>
                    <span key={year}>
                        <span className="text-xs">
                            <button className={year == currentYear ? "underline font-bold" : "underline"}
                            onClick={()=>setCurrentYear(year)}>{year}</button></span>
                        <span className="text-xs"> | </span>
                    </span>

                ) : ''}
            </div>
            <p className="text-xs mt-2.5">
                <span className="font-bold">Monatpreise Jahr {currentYear}</span> für:
                <span className="font-bold"> {pid.id}</span>
            </p>

            {machineData ? monthsList.map((month: any) =>
                <div key={month} className="mt-2">
                    <div className="flex w-40">
                        <span className="text-xs py-1">{month}</span>
                        <input className="text-xs ml-auto border rounded pl-2.5 py-1 mr-1 w-20"
                               value={machineData.price_list && machineData.price_list.prices[currentYear]
                               && machineData.price_list.prices[currentYear][month]
                                   ? machineData.price_list.prices[currentYear][month]
                                   : newPriceList.prices[currentYear][month]
                        }
                               onChange={(e)=>
                                setMachineData({
                                    ...machineData, price_list: {...machineData.price_list,
                                        prices: {...machineData.price_list.prices,
                                            [currentYear]:
                                                {...machineData.price_list.prices[currentYear],
                                                    [month]: e.target.value
                                                }
                                    }
                                    }})
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
//
export default PriceList