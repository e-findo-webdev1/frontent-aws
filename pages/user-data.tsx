import {useEffect, useState} from "react";
import "moment-timezone"
import API from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const UserData = () => {

    const [data, setData] = useState<any>();
    const [materials, setMaterials] = useState<any>();
    const [machinesData, setMachinesData] = useState<any>();


    useEffect(() => {
        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setData(
                    response.data.Items
                        .filter( (client: any) => client.client_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_id)
                );
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes')
            .then((response) => {
                setMaterials(response.data.Items)
            })
            .catch((error) => {
                console.log(error); //
            });

        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines';

        API.get(apiName)
            .then((response) => {
                setMachinesData(response.data.Items.filter((machine: any) =>
                    machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name))
            })
            .catch((error) => {
                console.log(error); //
            });


    },[] );

    return(
      <div id="content-page" className="px-24 h-full overflow-auto">
          <div className="grid grid-cols-3">
              <div className="mr-5">
                  <div className="mt-10">
                      <p className="mt-5 text-2xl font-bold mb-5">Stammdaten</p>
                  </div>
                  <div className="mb-10">
                      {data ? data.map((data: any) =>
                          <div key={data.client_id} className="text-xs space-y-2.5">
                              <p><span className="font-bold">Firma:</span> {data.client_name}<br/></p>
                              <p><span className="font-bold">PLZ:</span> {data.zip_code}<br/></p>
                              <p><span className="font-bold">Stadt:</span> {data.city}<br/></p>
                              <p><span className="font-bold">Straße:</span> {data.street}<br/></p>
                              <p><span className="font-bold">Telefon:</span> {data.telefon}<br/></p>
                              <p><span className="font-bold">E-Mail:</span> {data.email}<br/></p>
                              <p><span className="font-bold">Ansprechp.:</span> {data.spokesperson}</p>
                          </div>
                      ) : ''}
                  </div>
                  <hr className="mt-5"/>
              </div>
              <div className="col-span-2">
                  <div className="mt-10">
                      <p className="mt-5 text-2xl font-bold mb-5">Material / Sorten</p>
                  </div>
                  <div className="sm:rounded-lg border overflow-auto">
                      <table className="flex-row table-auto w-full">
                          <thead>
                          <tr className="text-xs text-gray-500 border-b text-left">
                              <th className="font-normal">Sortennumber</th>
                              <th className="font-normal">Bezeichnung</th>
                              <th className="font-normal">Index</th>
                              <th className="font-normal">Preis Index</th>
                              <th className="font-normal">Preis vereinbart</th>
                          </tr>
                          </thead>
                          <tbody className="bg-gray-50">
                          {
                              materials && machinesData ?
                                  materials.sort(function(a: any, b: any){
                                      // @ts-ignore
                                      return a.waretype_id - b.waretype_id})
                                      .filter((waretype: any) => machinesData.reduce(function (a: any, b: any) {
                                      return a + (b['waretype']);
                                  }, [])
                                      .includes(waretype.name_waretype))
                                      .map((material: any) =>
                                          <tr key={material.waretype_id}
                                              className="text-xs text-gray-500 border-b text-left">
                                              <td>{material.waretype_number}</td>
                                              <Link href="/">
                                                  <a><td className="underline">{material.name_waretype}</td></a>
                                              </Link>
                                              <td/>
                                              <td/>
                                              <td/>
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
}

export default UserData

