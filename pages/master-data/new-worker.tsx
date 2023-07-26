import React, {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";

const NewWorker = () => {
    const [userName, setUserName] = useState<any>('');
    const [initials, setInitials] = useState<any>('');
    const [email, setEmail] = useState<any>('');

    const [loginName, setLoginName] = useState<any>('');
    const [password, setPassword] = useState<any>('');

    const [controlDocumentsPermission, setControlDocumentsPermission] = useState<any>(false);
    const [monthlyEvaluationPermission, setMonthlyEvaluationPermission] = useState<any>(false);
    const [yearlyEvaluationPermission, setYearlyEvaluationPermission] = useState<any>(false);
    const [shiftEvaluationPermission, setShiftEvaluationPermission] = useState<any>(false);
    const [annualRevenuePermission, setAnnualRevenuePermission] = useState<any>(false);
    const [CO2EvaluationPermission, setCO2EvaluationPermission] = useState<any>(false);
    const [wasteBalancePermission, setWasteBalancePermission] = useState<any>(false);
    const [merchandiseManagementPermission, setMerchandiseManagementPermission] = useState<any>(false);
    const [logsPermission, setLogsPermission] = useState<any>(false);
    const [customerLogsPermission, setCustomerLogsPermission] = useState<any>(false);
    const [totalAmountPermission, setTotalAmountPermission] = useState<any>(false);
    const [abholdatumPopupPermission, setAbholdatumPopupPermission] = useState<any>(false);
    const [indexMatrixPermission, setIndexMatrixPermission] = useState<any>(false);
    const [adminIndexManagementPermission, setAdminIndexManagementPermission] = useState<any>(false);
    const [calculationPermission, setCalculationPermission] = useState<any>(false);
    const [storageSystemPermission, setStorageSystemPermission] = useState<any>(false);
    const [showPricesPermission, setShowPricesPermission] = useState<any>(false);
    const [enterAmountReceivedPermission, setEnterAmountReceivedPermission] = useState<any>(false);
    const [client_id, setClientId] = useState<any>();

    useEffect(() => {
        setClientId(JSON.parse(sessionStorage.getItem('user') as string).client_id)
    }, []);

    const responseBody = {
        userName: '', initials: '', email: '', loginName: '', password: '',
        controlDocumentsPermission: false, monthlyEvaluationPermission: false,
        yearlyEvaluationPermission: false, shiftEvaluationPermission: false,
        annualRevenuePermission: false, CO2EvaluationPermission: false, wasteBalancePermission: false,
        merchandiseManagementPermission: false, logsPermission: false, customerLogsPermission: false,
        totalAmountPermission: false, abholdatumPopupPermission: false, indexMatrixPermission: false,
        adminIndexManagementPermission: false, calculationPermission: false, storageSystemPermission: false,
        showPricesPermission: false, enterAmountReceivedPermission: false, client_id: 0,
    }

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.userName = userName
        responseBody.initials = initials
        responseBody.email = email
        responseBody.loginName = loginName
        responseBody.password = password
        responseBody.controlDocumentsPermission = controlDocumentsPermission
        responseBody.monthlyEvaluationPermission = monthlyEvaluationPermission
        responseBody.yearlyEvaluationPermission = yearlyEvaluationPermission
        responseBody.shiftEvaluationPermission = shiftEvaluationPermission
        responseBody.annualRevenuePermission = annualRevenuePermission
        responseBody.CO2EvaluationPermission = CO2EvaluationPermission
        responseBody.wasteBalancePermission = wasteBalancePermission
        responseBody.merchandiseManagementPermission = merchandiseManagementPermission
        responseBody.logsPermission = logsPermission
        responseBody.customerLogsPermission = customerLogsPermission
        responseBody.totalAmountPermission = totalAmountPermission
        responseBody.abholdatumPopupPermission = abholdatumPopupPermission
        responseBody.indexMatrixPermission = indexMatrixPermission
        responseBody.adminIndexManagementPermission = adminIndexManagementPermission
        responseBody.calculationPermission = calculationPermission
        responseBody.storageSystemPermission = storageSystemPermission
        responseBody.showPricesPermission = showPricesPermission
        responseBody.enterAmountReceivedPermission = enterAmountReceivedPermission
        responseBody.client_id = client_id
        await sendData(responseBody)
        window.location.replace('/master-data/' +
            JSON.parse(sessionStorage.getItem('company') as string).client_id)
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
                <form onSubmit={onSubmitHandler}>
                    <Link href={"/master-data/" + JSON.parse(sessionStorage.getItem('company') as string).client_id}>
                        <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">← Zurück
                        </button>
                    </Link>
                <p className="mt-5 text-2xl font-bold mb-5">Mitarbeiter</p>
                <table className="text-sm space-y-5">
                    <tr>
                        <td className="text-sm font-semibold">Name:</td>
                        <td>
                            <input className="border rounded pl-2.5 py-0.5"
                                   required={ true }
                                   onChange={(e)=>
                                       setUserName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm font-semibold">Kürzel:</td>
                        <td>
                            <input className="border rounded pl-2.5 py-0.5"
                                   onChange={(e)=>
                                       setInitials(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm font-semibold">Email:</td>
                            <td>
                                <input className="border rounded pl-2.5 py-0.5"
                                       required={ true }
                                       onChange={(e)=>
                                           setEmail(e.target.value)}/>
                        </td>
                    </tr>
                </table>
                <p className="mt-5 text-xl font-bold mb-5">Logindaten</p>
                <table className="text-sm space-y-5">
                    <tr>
                        <td className="text-sm font-semibold">Loginname:</td>
                        <td>
                            <input className="border rounded pl-2.5 py-0.5"
                                   required={ true }
                                   onChange={(e)=>
                                       setLoginName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm font-semibold">Passwort:</td>
                        <td>
                            <input className="border rounded pl-2.5 py-0.5"
                                   required={ true }
                                   onChange={(e)=>
                                       setPassword(e.target.value)}/>
                        </td>
                    </tr>
                </table>
            <hr className="mt-5"/>
            <p className="mt-5 text-xl font-bold mb-5">Berechtigungen</p>
            <div className="text-sm space-y-3 mb-10 columns-2">
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setControlDocumentsPermission(e.target.checked)}/>
                    Kontrollbelege</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setMonthlyEvaluationPermission(e.target.checked)}/>
                    Monatsauswertung</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setYearlyEvaluationPermission(e.target.checked)}/>
                    Jahresauswertung</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setShiftEvaluationPermission(e.target.checked)}/>
                    Schichtauswertung</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setAnnualRevenuePermission(e.target.checked)}/>
                    Jahreserlöse</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setCO2EvaluationPermission(e.target.checked)}/>
                    CO² Auswertung</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setWasteBalancePermission(e.target.checked)}/>
                    Abfallbilanz</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setMerchandiseManagementPermission(e.target.checked)}/>
                    Warenwirtschaft</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setLogsPermission(e.target.checked)}/>
                    Logs</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setCustomerLogsPermission(e.target.checked)}/>
                    Logs (Kunde)</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setTotalAmountPermission(e.target.checked)}/>
                    Gesamtsumme</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setAbholdatumPopupPermission(e.target.checked)}/>
                    Abholdatum Popup</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setIndexMatrixPermission(e.target.checked)}/>
                    Indexmatrix</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setAdminIndexManagementPermission(e.target.checked)}/>
                    Indexverwaltung (Admin)</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setCalculationPermission(e.target.checked)}/>
                    Berechnung</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setStorageSystemPermission(e.target.checked)}/>
                    Für Entsorger: Lagersysteme</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setShowPricesPermission(e.target.checked)}/>
                    Preise anzeigen</p>
                <p><input type="checkbox" className="mr-3"
                          onChange={(e)=>
                              setEnterAmountReceivedPermission(e.target.checked)}/>
                    Monatsauswertung: Betrag erhalten eintragen</p>
            </div>
            <input className="mb-10 border p-1.5 px-3.5
                                 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"
                   type="submit" value="Speichern"></input>
                </form>
        </div>

    )
}

export default NewWorker