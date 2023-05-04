import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";


const IndexManagement = () => {
    const [indexGroups, setIndexGroups] = useState<any>();

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/index-group';

        API.get(apiName)
            .then((response) => {
                setIndexGroups(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });

    },[] );

    function toHex(str: string){
        const hex = encodeURIComponent(str)
            .split('').map(function(v){
                return v.charCodeAt(0).toString(16)
            }).join('')

        return hex
    }

    return(
        <div className="px-20">
            <div className="flex mb-5">
                <Link href="/kalkulation/new-indexgroup"><button className="border ml-auto p-1.5 px-3.5 font-bold
                              border-accent-color-1 bg-accent-color-4
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">
                    + Neue Indexgrouppe
                </button>
                </Link>
            </div>
            <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Indexgruppe</th>
                        <th className="font-normal">Sorten</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {indexGroups
                     ? indexGroups.sort(function (a: any, b: any){
                         if (a.indexgroup_name < b.indexgroup_name) {
                             return -1;
                         }
                         if (a.indexgroup_name > b.indexgroup_name) {
                             return 1;
                         }
                         return 0;
                        })
                            .map((index_group: any) =>
                         <tr key={index_group.indexgroup_name} className="bg-gray-50 text-xs border-b text-left tex-xs">
                             <td className="underline">
                                 <Link href={"/kalkulation/edit-indexgroup/" + toHex(index_group.indexgroup_name)} >
                                     {index_group.indexgroup_name}
                                 </Link>
                             </td>
                             <td>
                                 <Link href={"/kalkulation/edit-sort/" + toHex(index_group.indexgroup_name)}>
                                     <button className="p-1.5 font-bold text-xs border-accent-color-1 bg-accent-color-4
                                  hover:bg-accent-color-5 sm:rounded-lg shadow-md border">
                                         Sorten bearbeiten</button>
                                 </Link>
                             </td>
                         </tr>
                        ) : ""}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IndexManagement