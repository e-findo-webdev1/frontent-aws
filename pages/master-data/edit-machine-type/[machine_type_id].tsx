import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";
import {useRouter} from "next/router";


const EditMachineType = () => {
    const router = useRouter()
    const pid = router.query

    const [machineType, setMachineType] = useState<any>();

    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machine-types')
                .then((response) => {
                    setMachineType(
                        response.data.Items.filter((machineType: any) =>
                            machineType.machine_type_id == pid.machine_type_id)[0]
                    )
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }

        fetchData()

    },[pid]);

    const responseBody = {
        machine_type_id: 0, machine_type_name: '', description: ''
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        responseBody.machine_type_id = machineType.machine_type_id;
        responseBody.machine_type_name = machineType.machine_type_name;
        responseBody.description = machineType.description
        await sendData(responseBody);

        window.location.replace('/master-data')
    }

    const sendData = async (responseBody: any) => {
        await API.put('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machine-types',
            responseBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div id="content-page" className="px-20 h-full overflow-auto">
            <Link href="/master-data">
                <button className="float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs mt-10">← Zurück
                </button>
            </Link>
            <p className="mt-10 text-2xl font-bold mb-5">Maschinentyp</p>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <table className="text-xs">
                        <tbody>
                        <tr>
                            <td className="text-xs font-semibold">Name:</td>
                            <td>
                                <input id="name" className="border rounded px-2.5 py-0.5"
                                       required={ true }
                                       value={machineType ? machineType.machine_type_name : ''}
                                       onChange={(e)=>
                                           setMachineType({...machineType, machine_type_name: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xs font-semibold">Description:</td>
                            <td>
                                <input id="description" className="border rounded px-2.5 py-0.5"
                                       required={ true }
                                       value={machineType ? machineType.description : ''}
                                       onChange={(e)=>
                                           setMachineType({...machineType, description: e.target.value})}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="mb-10 ml-[15rem]  mt-5 p-1.5 px-3.5
                                 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs" type="submit">
                        Speichern
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditMachineType