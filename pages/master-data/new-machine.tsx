import API from "axios";
import React, {useEffect, useState} from "react";
import moment from "moment";

const NewMachine = () => {
    const [data, setData] = useState<any>([]);

    const [machineID, setMachineID] = useState<any>(0);
    const [machineType, setMachineType] = useState<any>("esb");
    const [machineName, setMachineName] = useState<any>("");
    const [group, setGroup] = useState<any>("");
    const [waretype, setWaretype] = useState<any>("Altholz A1-A3");
    const [quality, setQuality] = useState<any>("normal");
    const [index, setIndex] = useState<any>("");
    const [maxNetto, setMaxNetto] = useState<any>(0);
    const [minContainer, setMinContainer] = useState<any>(0);
    const [maxContainer, setMaxContainer] = useState<any>(0);
    const [averageThroughput, setAverageTroughput] = useState<any>(0);
    const [manualTara, setManualTara] = useState<any>(0);
    const [minForFullStart, setMinForFullStart] = useState<any>(0);
    const [newFT111, setNewFT111] = useState<any>(false);
    const [automaticTara, setAutomaticTara] = useState<any>(false);
    const [fillingType, setFillingType] = useState<any>("Automatisch");
    const [plandateCalculation, setPlandateCalculation] = useState<any>("Plandatum V.1");
    const [status, setStatus] = useState<any>("Wird befüllt (1)");
    const [client, setClient] = useState<any>("e-findo GmbH");
    const [total_working_time, setTotalWorkingTime] = useState<any>(0);
    const [total_working_weight, setTotalWorkingWeight] = useState<any>(0);

    const responseBody = {machine_id: 0, machineType: "", machineName: "", group: "", waretype: "", quality: "",
    index: "", maxNetto: 0, minContainer: 0, maxContainer: 0, averageThroughput: 0, manualTara: "", minForFullStart: 0,
    newFT111: "", automaticTara: "", fillingType: "", plandateCalculation: "", status: "", client: "",
    total_working_time: 0, lastIndicate: 0, total_working_weight: 0, price_list: {
            prices: {
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
        }
    }

    useEffect(() => {
        const apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes';

        API.get(apiName)
            .then((response) => {
                setData(response.data.Items);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.machine_id = machineID
        responseBody.machineType = machineType
        responseBody.machineName = machineName
        responseBody.group = group
        responseBody.waretype = waretype
        responseBody.quality = quality
        responseBody.index = index
        responseBody.maxNetto = maxNetto
        responseBody.minContainer = minContainer
        responseBody.maxContainer = maxContainer
        responseBody.averageThroughput = averageThroughput
        responseBody.manualTara = manualTara
        responseBody.minForFullStart = minForFullStart
        responseBody.newFT111 = newFT111
        responseBody.automaticTara = automaticTara
        responseBody.fillingType = fillingType
        responseBody.plandateCalculation = plandateCalculation
        responseBody.status = status
        responseBody.client = client
        responseBody.total_working_time = total_working_time
        responseBody.total_working_time = total_working_weight
        responseBody.price_list
        responseBody.lastIndicate = 0
        sendData(responseBody)
    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.replace('/');
    }


    return(
        <div id="content-page" className="overflow-auto h-full px-48 m-auto">
            <p className="mb-7 mt-10 text-3xl font-bold">Maschinen</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-sm">
                        <tr>
                            <td className="p-1 pl-0">Maschinen ID</td>
                            <td className="p-1 pl-0">
                                <input id="machineID" className="border rounded w-full pl-2.5 py-0.5"
                                onChange={(e)=>setMachineID(parseInt(e.target.value))}
                                required={true}
                                /></td>
                            <td className="p-1 pl-3">Durchsatz Durchschnitt</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                                                            defaultValue="0"
                                                            onChange={(e)=>
                                                                setAverageTroughput(e.target.value)}
                           /></td>
                        </tr>
                        <tr className="h-8">
                            <td className="p-1 pl-0">Maschinentyp</td>
                            <td className="p-1 pl-0">
                                <select id="machineType" className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                onChange={(e)=>setMachineType(e.target.value)}>
                                    <option>esb</option>
                                    <option>bw</option>
                                    <option>Silo</option>
                                </select>
                            </td>
                            <td className="p-1 pl-3">Man. Tara (Maschine)</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                                                            defaultValue="0"
                                                            onChange={(e)=>
                                                                setManualTara(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0 pr-12">Machinenbezeichnung</td>
                            <td className="p-1 pl-0"><input id="machineName"
                                                            className="border rounded w-full pl-2.5 py-0.5"
                                                            required={true}
                            onChange={(e)=>setMachineName(e.target.value)}/></td>
                            <td className="p-1 pl-3">Min. Füllmenge für Füll-Start</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                                                            defaultValue="0"
                                                            onChange={(e)=>
                                                                setMinForFullStart(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Gruppierung</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                            onChange={(e)=>setGroup(e.target.value)}/></td>
                            <td className="p-1 pl-3 pr-12">Neue Berechnung FT-111 (automatisch)</td>
                            <td className="p-1 pl-0.5"><input type="checkbox"
                                                              onChange={(e)=>
                                                                  setNewFT111(e.target.checked)}/></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Warentyp</td>
                            <td className="p-1 pl-0"><select className="w-full pl-2.5 py-0.5 appearance-none
                            border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                            onChange={(e)=>setWaretype(e.target.value)}>
                                { data
                                    ? data
                                        .sort(function (a: any, b: any) {
                                            if (a.name_waretype < b.name_waretype) {
                                                return -1;
                                            }
                                            if (a.name_waretype > b.name_waretype) {
                                                return 1;
                                            }
                                            return 0;
                                        })
                                        .map((waretype: any) =>
                                    <option key={waretype.waretype_id}>{waretype.name_waretype}</option>
                                )
                                    : ""
                                }
                            </select>
                            </td>
                            <td className="p-1 pl-3">Einmaliges Tarieren</td>
                            <td className="p-1 pl-0.5"><input type="checkbox"
                                                              onChange={(e)=>
                                                                  setAutomaticTara(e.target.checked)}/></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Warenqualität</td>
                            <td className="p-1 pl-0">
                                <select className="w-full pl-2.5 py-0.5 appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                onChange={(e)=>setQuality(e.target.value)}>
                                    <option>normal</option>
                                    <option>gebrochen</option>
                                </select>
                            </td>
                            <td className="p-1 pl-3">Befüllart</td>
                            <td className="p-1 pl-0"><select className="w-full pl-2.5 py-0.5 appearance-none
                            border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                             onChange={(e)=>
                                                                 setFillingType(e.target.value)}>
                                <option>Automatisch</option>
                                <option>Manuell</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Index</td>
                            <td className="p-1 pl-0"><select className="w-full pl-2.5 py-0.5 appearance-none
                            border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                            onChange={(e)=>setIndex(e.target.value)}>
                                <option>- kein Index -</option>
                                <option>BDSV - Sorte 2/8 - Bundesweit</option>
                                <option>BDSV - Sorte 5 - Bundesweit</option>
                                <option>Bundesweit</option>
                                <option>Euwid V2A</option>
                                <option>LME HG</option>
                                <option>Marketpreis International Sorte 2</option>
                                <option>Nord-Ost</option>
                                <option>Sorte 5</option>
                                <option>Süd</option>
                                <option>West</option>
                            </select></td>
                            <td className="p-1 pl-3">Plandatum Berechnung</td>
                            <td className="p-1 pl-0"><select className="w-full pl-2.5 py-0.5
                            appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                             onChange={(e)=>
                                                                 setPlandateCalculation(e.target.value)}>
                                <option>Plandatum V.1</option>
                                <option>Plandatum V.2</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Max Netto</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                                                            defaultValue="0"
                            onChange={(e)=>setMaxNetto(e.target.value)}/></td>
                            <td className="p-1 pl-3">Status</td>
                            <td className="p-1 pl-0"><select className="w-full pl-2.5 py-0.5
                            appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                             onChange={(e)=>
                                                                 setStatus(e.target.value)}>
                                <option>Wird befüllt (1)</option>
                                <option>kein Container (2)</option>
                                <option>Container tariert (3)</option>
                                <option>Übergewicht (4)</option>
                                <option>Fertig (5)</option>
                                <option>Abholung (6)</option>
                                <option>Stillstand (7)</option>
                                <option>Containertausch (8)</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Min Container Gewicht</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                                                            defaultValue={0}
                            onChange={(e)=>setMinContainer(e.target.value)}/></td>
                            <td className="p-1 pl-3">Kunde</td>
                            <td className="p-1 pl-0"><select className="w-full pl-2.5 py-0.5
                            appearance-none border rounded
                                bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                                bg-no-repeat bg-[length:15px] [background-position-x:95%]
                                [background-position-y:5px]"
                                                             onChange={(e)=>
                                                                 setClient(e.target.value)}>
                                <option>e-findo GmbH</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td className="p-1 pl-0">Max Container Gewicht</td>
                            <td className="p-1 pl-0"><input className="border rounded w-full pl-2.5 py-0.5"
                                                            defaultValue={0}
                                                            onChange={(e)=>
                                                                setMaxContainer(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td/>
                        </tr>
                        <tr>
                            <td/>
                            <td/>
                            <td/>
                            <td className="p-1 pl-0">
                                <input className="float-right border p-1.5 px-3.5
                                 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit" value="Speichern"></input>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default NewMachine