import {useEffect, useState} from "react";
import API from "axios";
import Link from "next/link";
import moment from "moment";
import toHex from "./components/helpers/toHex";

const MasterDataSummary = () => {
    const [machinesData, setMachinesData] = useState<any>();
    const [clients, setClients] = useState<any>();
    const [materials, setMaterials] = useState<any>();
    const [machineTypes, setMachineTypes] = useState<any>();
    const [priceMatrices, setPriceMatrices] = useState<any>();
    const [contractors, setContractors] = useState<any>();
    const [emailTexts, setEmailTexts] = useState<any>();
    const [qualities, setQualities] = useState<any>();
    const [workers, setWorkers] = useState<any>();


    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setClients(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
            .then((response) => {
                setMaterials(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machine-types')
            .then((response) => {
                setMachineTypes(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices')
            .then((response) => {
                setPriceMatrices(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors')
            .then((response) => {
                setContractors(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/email-texts')
            .then((response) => {
                setEmailTexts(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/qualities')
            .then((response) => {
                setQualities(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/accounts')
            .then((response) => {
                setWorkers(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

    }, []);

    const monthsList = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ]

    if (JSON.parse(sessionStorage.getItem('user') as string).admin) {
        return (
            <div id="content-page" className="px-24 h-full overflow-auto">
                <div className="mt-10">
                    <Link href="/new-client">
                        <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                        bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Kunde</button>
                    </Link>
                    <p className="mt-5 text-2xl font-bold mb-5">Stammdaten</p>
                </div>
                <div className="sm:rounded-lg shadow-md border overflow-auto">
                    <table className="flex-row table-auto w-full">
                        <thead>
                        <tr className="text-xs text-gray-500 border-b text-left">
                            <th className="font-normal">Firma</th>
                            <th className="font-normal">KundenNr.</th>
                            <th className="font-normal">PLZ</th>
                            <th className="font-normal">Stadt</th>
                            <th className="font-normal">Straße</th>
                            <th className="font-normal">Telefon</th>
                            <th className="font-normal">E-Mail</th>
                            <th className="font-normal">Maschinen</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                        {
                            machinesData && clients ?
                                clients.sort(function(a: any, b: any){
                                    // @ts-ignore
                                    return a.client_id - b.client_id})
                                    .map((client: any) =>
                                        <tr key={client.client_id} className="text-xs border-t">
                                            <Link href={"/master-data/" + client.client_id}>
                                                <a><td className="underline">{client.client_name}</td></a>
                                            </Link>
                                            <td>{client.client_number}</td>
                                            <td>{client.zip_code}</td>
                                            <td>{client.city}</td>
                                            <td>{client.street}</td>
                                            <td>{client.telefon}</td>
                                            <td>{client.email}</td>
                                            <td>{machinesData.filter((machine: any) =>
                                                machine.client == client.client_name
                                            ).length}</td>
                                        </tr>
                                    )
                                : ""
                        }
                        </tbody>
                    </table>
                </div>
                <hr className="mt-9"/>
                <div className="columns-2 h-max mt-7 space-x-5">
                    <div>
                        <div>
                            <Link href="/master-data/new-material">
                                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neues Material</button>
                            </Link>
                            <p className="text-2xl font-bold mb-5">Material</p>
                            <div className="sm:rounded-lg border overflow-auto h-full">
                                <table className="flex-row table-auto w-full">
                                    <thead>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <th className="font-normal">Material</th>
                                        <th className="font-normal">AVV Nr.</th>
                                        <th className="font-normal">Sorte Nr.</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-gray-50">
                                    {
                                        materials ?
                                            materials.sort(function(a: any, b: any){
                                                // @ts-ignore
                                                return a.waretype_id - b.waretype_id})
                                                .map((material: any) =>
                                                    <tr key={material.waretype_id}
                                                        className="text-xs text-gray-500 border-b text-left">
                                                        <Link href={"/master-data/edit-material/" +
                                                            material.waretype_id}>
                                                            <a><td className="underline">{material.name_waretype}</td></a>
                                                        </Link>
                                                        <td>{material.waretype_number}</td>
                                                        <td>{material.internal_number}</td>
                                                    </tr>
                                                )
                                            : ""
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Link href="/master-data/new-quality">
                            <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neue Qualität</button>
                        </Link>
                        <p className="text-2xl font-bold mb-5">Qualität</p>
                        <div className="sm:rounded-lg shadow-md overflow-auto h-full"></div>
                        <div className="sm:rounded-lg border overflow-auto h-full">
                            <table className="flex-row table-auto w-full">
                                <thead>
                                <tr className="text-xs text-gray-500 border-b text-left">
                                    <th className="font-normal">Qualität</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                {qualities ? qualities.map((quality: any) =>
                                    <tr key={quality.quality_id}
                                        className="text-xs text-gray-500 border-b text-left underline">
                                        <Link href={"/master-data/edit-quality/" +
                                            quality.quality_id}>
                                            <a><td className="underline">{quality.quality_name}</td></a>
                                        </Link>
                                    </tr>
                                )
                                    : ""
                                }
                                </tbody>
                            </table>
                        </div>
                        <Link href="/kalkulation/index-management">
                            <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2 mt-7">+ Neuer Index</button>
                        </Link>
                        <p className="text-2xl font-bold mb-5 mt-5">Indexe</p>
                        <div className="sm:rounded-lg shadow-md overflow-auto h-full"></div>
                        <div className="sm:rounded-lg border overflow-auto h-full">
                            <table className="flex-row table-auto w-full">
                                <thead>
                                <tr className="text-xs text-gray-500 border-b text-left">
                                    <th className="font-normal">Index</th>
                                    <th className="font-normal">Aktueller Preis</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                { priceMatrices ?
                                    priceMatrices.filter((priceMatrix: any) => priceMatrix.indeces != undefined)
                                        .map((priceMatrix: any) =>
                                            priceMatrix.indeces.map((index: any) =>
                                                <tr key={priceMatrix.price_matrix + index}
                                                    className="text-xs text-gray-500 border-b text-left">
                                                    <Link href={"/master-data/edit-index/" +
                                                        toHex(priceMatrix.indexgroup_name + " - "
                                                            + priceMatrix.price_matrix + " - " + index)}>
                                                        <a><td className="underline">{priceMatrix.indexgroup_name + " - "
                                                            + priceMatrix.price_matrix + " - " + index}</td></a>
                                                    </Link>
                                                    <td>
                                                        {
                                                            priceMatrix.prices ?
                                                                priceMatrix.prices
                                                                    [monthsList[moment().month()]]
                                                                    [index] + " €"
                                                                : "0.00 €"
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                    )
                                    : ""}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div className="columns-2 h-max mt-7 space-x-5">
                    <div>
                        <div>
                            <Link href="/master-data/new-machine-type">
                                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Maschinentyp</button>
                            </Link>
                            <p className="text-2xl font-bold mb-5">Maschinentypen</p>
                            <div className="sm:rounded-lg border overflow-auto h-full">
                                <table className="flex-row table-auto w-full">
                                    <thead>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <th className="font-normal">Maschinentyp</th>
                                        <th className="font-normal">Bezeichnung</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-gray-50">
                                    {
                                        machineTypes ?
                                            machineTypes.sort(function(a: any, b: any){
                                                // @ts-ignore
                                                return a.machine_type_id - b.machine_type_id})
                                                .map((machineType: any) =>
                                                    <tr key={machineType.machine_type_id}
                                                        className="text-xs text-gray-500 border-b text-left">
                                                        <Link href={"/master-data/edit-machine-type/"
                                                            + machineType.machine_type_id}>
                                                            <a><td className="underline">
                                                                {machineType.machine_type_name}</td></a>
                                                        </Link>
                                                        <td>{machineType.description}</td>
                                                    </tr>
                                                )
                                            : ""
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                                <Link href="/master-data/new-worker">
                                <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Mitarbeiter</button>
                            </Link>
                            <p className="text-2xl font-bold mb-5 mt-5">Mitarbeiter</p>
                            <div className="sm:rounded-lg shadow-md overflow-auto h-full"></div>
                            <div className="sm:rounded-lg border overflow-auto h-full">
                                <table className="flex-row table-auto w-full">
                                    <thead>
                                    <tr className="text-xs text-gray-500 border-b text-left">
                                        <th className="font-normal">Mitarbeiter</th>
                                        <th className="font-normal">Kürzel</th>
                                        <th className="font-normal">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-gray-50">
                                    {workers ? workers.map((worker: any) =>
                                        <tr key={worker.userName}
                                            className="text-xs text-gray-500 border-b text-left">
                                            <Link href={"/master-data/edit-worker/" + worker.loginName}>
                                                <a><td className="underline">
                                                    {worker.userName}</td></a>
                                            </Link>
                                            <td>{worker.initials}</td>
                                            <td>{worker.email}</td>
                                        </tr>
                                    ) : ''}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>

                <div>
                    <div>
                        <Link href="/master-data/new-contractor">
                            <button className="border float-right p-1.5 px-3.5 font-bold border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs ml-2">+ Neuer Auftragnehmer</button>
                        </Link>
                        <p className="text-2xl mt-7 font-bold mb-5">Auftragnehmer</p>
                        <div className="sm:rounded-lg border overflow-auto h-full mb-20">
                            <table className="flex-row table-auto w-full">
                                <thead>
                                <tr className="text-xs text-gray-500 border-b text-left">
                                    <th className="font-normal">Auftragnehmer</th>
                                    <th className="font-normal">Strasse</th>
                                    <th className="font-normal">PLZ</th>
                                    <th className="font-normal">Ort</th>
                                    <th className="font-normal">Telefon</th>
                                    <th className="font-normal">Email</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-50">
                                {
                                    contractors ?
                                        contractors.map((contractor: any) =>
                                            <tr key={contractor.contractor_id}
                                                className="text-xs text-gray-500 border-b text-left">
                                                <Link href={"/master-data/edit-contractor/" + contractor.contractor_id}>
                                                    <a><td className="underline">
                                                        {contractor.contractor_name}</td></a>
                                                </Link>
                                                <td>
                                                    {contractor.street}
                                                </td>
                                                <td>
                                                    {contractor.zip_code}
                                                </td>
                                                <td>
                                                    {contractor.city}
                                                </td>
                                                <td>
                                                    {contractor.telefon}
                                                </td>
                                                <td>
                                                    {contractor.email}
                                                </td>
                                            </tr>
                                        )
                                        : ""
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

export default MasterDataSummary