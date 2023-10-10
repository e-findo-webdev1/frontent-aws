import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import NavigationButtons from "./NavigationButtons";
import {useEffect, useState} from "react";
import API from "axios";

const Navigation = () => {

    const [clients, setClients] = useState<any>();
    const [selectedCompany, setSelectedCompany] = useState<any>();
    const [userPermissions] = useState(
        JSON.parse(sessionStorage.getItem('user') as string));

    useEffect(() => {

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setClients(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

    }, []);

    return (
        <div id="navigation" className="mb-2 flex">
            <Logo/>
            <NavigationLinks/>
            { userPermissions.admin ?
                <select className="pl-2.5 py-0.5 appearance-none
                    border rounded
                    h-5 w-1/3 flex m-auto bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')]
                    bg-no-repeat bg-[length:15px] [background-position-x:95%]
                    [background-position-y:3px] text-xs mr-3"

                        value={JSON.parse(sessionStorage.getItem("company") as string).client_name}

                        onChange={(e)=>{sessionStorage
                            .setItem("company", JSON.stringify(clients.filter((client: any) =>
                                client.client_name == e.target.value)[0]));setSelectedCompany(e.target.value);
                            window.location.reload()}}


                >
                    {clients ? clients.sort(function (a: any, b: any) {
                        if (a.client_name < b.client_name) {
                            return 1;
                        }
                        if (a.client_name > b.client_name) {
                            return -1;
                        }
                        return 0;
                    }).map((client: any) =>
                        <option key={client.client_id}>
                            {client.client_name}
                        </option>
                    ) : ""}
                </select>
            :   <span className="text-xs flex m-auto font-bold">
                    {JSON.parse(sessionStorage.getItem('company') as string).client_name}
                </span>
            }

            <NavigationButtons/>
        </div>
    )
}

export default Navigation