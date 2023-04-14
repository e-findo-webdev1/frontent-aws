import React, {useState, useEffect} from "react";
import API from "axios";
import {useRouter} from "next/router";
import Link from "next/link";

const EditWorker = () => {

    const router = useRouter()
    const pid = router.query

    const [data, setData] = useState({
        userName: '', initials: '', email: '', loginName: '', password: '',
        controlDocumentsPermission: false, monthlyEvaluationPermission: false,
        yearlyEvaluationPermission: false, shiftEvaluationPermission: false,
        annualRevenuePermission: false, CO2EvaluationPermission: false, wasteBalancePermission: false,
        merchandiseManagementPermission: false, logsPermission: false, customerLogsPermission: false,
        totalAmountPermission: false, abholdatumPopupPermission: false, indexMatrixPermission: false,
        adminIndexManagementPermission: false, calculationPermission: false, storageSystemPermission: false,
        showPricesPermission: false, enterAmountReceivedPermission: false
    });

    useEffect(() => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users';

        API.get(apiName)
            .then((response) => {
                setData(response.data.Items.filter((item: any) => item.loginName == pid.user)[0]);
            })
            .catch((error) => {
                console.log(error.response);
            });


    }, [pid]);


    const responseBody = {
        userName: '', initials: '', email: '', loginName: '', password: '',
        controlDocumentsPermission: false, monthlyEvaluationPermission: false,
        yearlyEvaluationPermission: false, shiftEvaluationPermission: false,
        annualRevenuePermission: false, CO2EvaluationPermission: false, wasteBalancePermission: false,
        merchandiseManagementPermission: false, logsPermission: false, customerLogsPermission: false,
        totalAmountPermission: false, abholdatumPopupPermission: false, indexMatrixPermission: false,
        adminIndexManagementPermission: false, calculationPermission: false, storageSystemPermission: false,
        showPricesPermission: false, enterAmountReceivedPermission: false
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.userName = data.userName
        responseBody.initials = data.initials
        responseBody.email = data.email
        responseBody.loginName = data.loginName
        responseBody.password = data.password
        responseBody.controlDocumentsPermission = data.controlDocumentsPermission
        responseBody.monthlyEvaluationPermission = data.monthlyEvaluationPermission
        responseBody.yearlyEvaluationPermission = data.yearlyEvaluationPermission
        responseBody.shiftEvaluationPermission = data.shiftEvaluationPermission
        responseBody.annualRevenuePermission = data.annualRevenuePermission
        responseBody.CO2EvaluationPermission = data.CO2EvaluationPermission
        responseBody.wasteBalancePermission = data.wasteBalancePermission
        responseBody.merchandiseManagementPermission = data.merchandiseManagementPermission
        responseBody.logsPermission = data.logsPermission
        responseBody.customerLogsPermission = data.customerLogsPermission
        responseBody.totalAmountPermission = data.totalAmountPermission
        responseBody.abholdatumPopupPermission = data.abholdatumPopupPermission
        responseBody.indexMatrixPermission = data.indexMatrixPermission
        responseBody.adminIndexManagementPermission = data.adminIndexManagementPermission
        responseBody.calculationPermission = data.calculationPermission
        responseBody.storageSystemPermission = data.storageSystemPermission
        responseBody.showPricesPermission = data.showPricesPermission
        responseBody.enterAmountReceivedPermission = data.enterAmountReceivedPermission
        sendData(responseBody)
    }

    const sendData = (responseBody: any) => {
        API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div id="content-page" className="px-20 h-full overflow-auto">
                <Link href="/master-data">
                    <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                    </button>
                </Link>
                <p className="mt-10 text-2xl font-bold mb-5">Mitarbeiter</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-sm space-y-5">
                        <tbody>
                            <tr>
                                <td className="text-sm font-semibold">Name:</td>
                                <td>
                                    <input id="userName" className="border rounded w-full pl-2.5 py-0.5"
                                           onChange={(e)=>
                                               setData({...data, userName: e.target.value})}
                                           required={true}
                                           defaultValue={data ? data.userName : ''}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm font-semibold">Kürzel:</td>
                                <td>
                                    <input id="initials" className="border rounded pl-2.5 py-0.5"
                                           onChange={(e)=>
                                               setData({...data, initials: e.target.value})}
                                           defaultValue={data ? data.initials : ''}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm font-semibold">Email:</td>
                                <td>
                                    <input id="email" className="border rounded pl-2.5 py-0.5"
                                           onChange={(e)=>
                                               setData({...data, email: e.target.value})}
                                           required={ true }
                                           defaultValue={data ? data.email: ''}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-5 text-xl font-bold mb-5">Logindaten</p>
                    <table className="text-sm space-y-5">
                        <tbody>
                        <tr>
                            <td className="text-sm font-semibold">Loginname:</td>
                            <td>
                                <input id="loginName" className="border rounded w-full pl-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, loginName: e.target.value})}
                                       required={true}
                                       defaultValue={data ? data.loginName: ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-sm font-semibold">Passwort:</td>
                            <td>
                                <input id="password"
                                       type="password"
                                       className="border rounded pl-2.5 py-0.5"
                                       onChange={(e)=>
                                           setData({...data, password: e.target.value})}
                                       />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr className="mt-5"/>
                    <p className="mt-5 text-xl font-bold mb-5">Berechtigungen</p>
                    <div className="text-sm space-y-3 mb-10">
                        <p>
                            <input type="checkbox" className="mr-3"
                                checked={data ? data.controlDocumentsPermission : false}
                                onChange={(e)=>
                                    setData({...data, controlDocumentsPermission: e.target.checked})}
                                />
                            Kontrollbelege
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.monthlyEvaluationPermission : false}
                                   onChange={(e)=>
                                       setData({...data, monthlyEvaluationPermission: e.target.checked})}
                            />
                            Monatsauswertung
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.yearlyEvaluationPermission : false}
                                   onChange={(e)=>
                                       setData({...data, yearlyEvaluationPermission: e.target.checked})}
                            />
                            Jahresauswertung
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.shiftEvaluationPermission : false}
                                   onChange={(e)=>
                                       setData({...data, shiftEvaluationPermission: e.target.checked})}
                            />
                            Schichtauswertung
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.annualRevenuePermission : false}
                                   onChange={(e)=>
                                       setData({...data, annualRevenuePermission: e.target.checked})}
                            />
                            Jahreserlöse
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.CO2EvaluationPermission : false}
                                   onChange={(e)=>
                                       setData({...data, CO2EvaluationPermission: e.target.checked})}
                            />
                            CO² Auswertung
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.wasteBalancePermission : false}
                                   onChange={(e)=>
                                       setData({...data, wasteBalancePermission: e.target.checked})}
                            />
                            Abfallbilanz
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.merchandiseManagementPermission : false}
                                   onChange={(e)=>
                                       setData({...data, merchandiseManagementPermission: e.target.checked})}
                            />
                            Warenwirtschaft
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.logsPermission : false}
                                   onChange={(e)=>
                                       setData({...data, logsPermission: e.target.checked})}
                            />
                            Logs
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.customerLogsPermission : false}
                                   onChange={(e)=>
                                       setData({...data, customerLogsPermission: e.target.checked})}
                            />
                            Logs (Kunde)
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.totalAmountPermission : false}
                                   onChange={(e)=>
                                       setData({...data, totalAmountPermission: e.target.checked})}
                            />
                            Gesamtsumme
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.abholdatumPopupPermission : false}
                                   onChange={(e)=>
                                       setData({...data, abholdatumPopupPermission: e.target.checked})}
                            />
                            Abholdatum Popup
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.indexMatrixPermission : false}
                                   onChange={(e)=>
                                       setData({...data, indexMatrixPermission: e.target.checked})}
                            />
                            Indexmatrix
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.adminIndexManagementPermission : false}
                                   onChange={(e)=>
                                       setData({...data, adminIndexManagementPermission: e.target.checked})}
                            />
                            Indexverwaltung (Admin)
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.calculationPermission : false}
                                   onChange={(e)=>
                                       setData({...data, calculationPermission: e.target.checked})}
                            />
                            Berechnung
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.storageSystemPermission : false}
                                   onChange={(e)=>
                                       setData({...data, storageSystemPermission: e.target.checked})}
                            />
                            Für Entsorger: Lagersysteme
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.showPricesPermission : false}
                                   onChange={(e)=>
                                       setData({...data, showPricesPermission: e.target.checked})}
                            />
                            Preise anzeigen
                        </p>
                        <p>
                            <input type="checkbox" className="mr-3"
                                   checked={data ? data.totalAmountPermission : false}
                                   onChange={(e)=>
                                       setData({...data, totalAmountPermission: e.target.checked})}
                            />
                            Monatsauswertung: Betrag erhalten eintragen
                        </p>
                    </div>
                    <button className="mb-10 float-right border p-1.5 px-3.5
                                 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit">
                        Speichern
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditWorker