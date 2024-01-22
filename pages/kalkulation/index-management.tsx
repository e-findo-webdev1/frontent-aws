import Link from "next/link";
import React, {useEffect, useState} from "react";
import API from "axios";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const IndexManagement = () => {
    const [indexGroups, setIndexGroups] = useState<any>();
    const [isDataLoaded, setIsDataLoaded] = useState<any>(false);

    useEffect(() => {
        const fetchData = () => {
            let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/index-group';

            API.get(apiName)
                .then((response) => {
                    setIndexGroups(response.data.Items)
                })
                .catch((error) => {
                    console.log(error.response);
                });
            setIsDataLoaded(true)
        }

        fetchData()
    },[] );

    function toHex(str: string){
        const hex = encodeURIComponent(str)
            .split('').map(function(v){
                return v.charCodeAt(0).toString(16)
            }).join('')

        return hex
    }

    return(
        <div className="overflow-auto h-full px-48 m-auto">
            <p className="my-9 text-3xl font-bold">Indexverwaltung</p>
            <div className="mb-5 w-max">
                <Link href="/kalkulation/new-indexgroup"><button className="border ml-auto p-1.5 px-3.5 font-bold
                              border-accent-color-1 bg-accent-color-4
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">
                    + Neue Indexgrouppe
                </button>
                </Link>
            </div>
            {!isDataLoaded ?
                <SkeletonTheme baseColor={"#F9FAFB"} highlightColor={"#ffffff"}>
                    <Skeleton className="h-[26.5rem] max-w-[45rem] mt-5 mb-5 sm:rounded-lg shadow-md"/>
                </SkeletonTheme> :
            <div className="h-[26.5rem] bg-gray-50 mb-10 sm:rounded-lg shadow-md border overflow-auto m-auto">
                <table className="flex-row h-full w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b bg-white text-left">
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
            </div>}
        </div>
    )
}

export default IndexManagement