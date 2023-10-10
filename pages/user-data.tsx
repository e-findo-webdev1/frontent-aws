import {useEffect, useState} from "react";
import "moment-timezone"
import API from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import user from "./master-data/edit-worker/[user]";

const UserData = () => {

    const [data, setData] = useState<any>();
    const [materials, setMaterials] = useState<any>();
    const [machinesData, setMachinesData] = useState<any>();
    const [shifts, setShift] = useState<any>();
    const [shiftHours, setShiftHours] = useState<any>();
    const [userPermissions, setUserPermissions] = useState<any>();

    useEffect(() => {
        setUserPermissions(JSON.parse(sessionStorage.getItem('user') as string))
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

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts')
            .then((response) => {
                setShift(
                    response.data.Items
                        .filter( (shift: any) => shift.client_id ==
                        JSON.parse(sessionStorage.getItem('company') as string).client_id
                        )[0].shifts
                );
                setShiftHours(
                    response.data.Items
                        .filter( (shift: any) => shift.client_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_id
                        )[0].shiftHours
                );
            })
            .catch((error) => {
                console.log(error.response);
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
          <div className={userPermissions && userPermissions.shiftEvaluationPermission ? 'columns-2 h-max' +
              'overflow-auto mt-5' : 'hidden'}>
          <div>
              <Link href="/master-data/shift-manager">
                  <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs flex">Schichten Bearbeiten
                  </button>
              </Link>
          </div>
          <span className="text-xs uppercase font-bold text-gray-500">
                      Schichten
                </span>
          <div className="mb-10 sm:rounded-lg border overflow-auto h-full">
              <table className="flex-row w-full table-auto">
                  <thead>
                  <tr className="text-xs text-gray-500 border-b text-left">
                      <th/>
                      <th className="font-normal">Start</th>
                      <th className="font-normal">Ende</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="bg-gray-50 text-xs border-b text-left">
                      <td className="w-24">Schicht 1</td>
                      <td>{shiftHours ? shiftHours.shift1_start : "00:00"}</td>
                      <td>{shiftHours ? shiftHours.shift1_end : "00:00"}</td>
                  </tr>
                  {   shiftHours && shiftHours.shift2_start != "00:00" && shiftHours.shift2_end != "00:00"
                      ? <tr className="bg-gray-50 text-xs border-b text-left">
                          <td className="w-24">Schicht 2</td>
                          <td>{shiftHours ? shiftHours.shift2_start : "00:00"}</td>
                          <td>{shiftHours ? shiftHours.shift2_end : "00:00"}</td>
                      </tr>
                      : ""}
                  {   shiftHours && shiftHours.shift3_start != "00:00" && shiftHours.shift3_end != "00:00"
                      ? <tr className="bg-gray-50 text-xs border-b text-left">
                          <td className="w-24">Schicht 3</td>
                          <td>{shiftHours ? shiftHours.shift3_start : "00:00"}</td>
                          <td>{shiftHours ? shiftHours.shift3_end : "00:00"}</td>
                      </tr>
                      : ""}
                  {   shiftHours && shiftHours.shift4_start != "00:00" && shiftHours.shift4_end != "00:00"
                      ? <tr className="bg-gray-50 text-xs border-b text-left">
                          <td className="w-24">Schicht 4</td>
                          <td>{shiftHours ? shiftHours.shift4_start : "00:00"}</td>
                          <td>{shiftHours ? shiftHours.shift4_end : "00:00"}</td>
                      </tr>
                      : ""}

                  </tbody>
              </table>
          </div>
          </div>
          <div className={userPermissions && userPermissions.shiftEvaluationPermission ? '' : 'hidden'}>
              <div className="flex mt-5">
                  <Link href="/master-data/shift-calendar">
                      <button className="border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4
                        hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs">Zeiten Bearbeiten
                      </button>
                  </Link>
              </div>
              <span className="text-xs uppercase font-bold text-gray-500">
                  Arbeitszeiten
              </span>
              <div className="mb-10 sm:rounded-lg shadow-md border overflow-auto">
                  <table className="flex-row w-full table-auto">
                      <thead>
                      <tr className="text-xs text-gray-500 border-b text-left">
                          <th/>
                          <th className="font-normal">Schicht 1</th>
                          <th className="font-normal">Schicht 2</th>
                          <th className="font-normal">Schicht 3</th>
                          <th className="font-normal">Schicht 4</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Montag</td>
                          <td>
                              {
                                  shifts
                                  && shifts.monday.shift1.start != null
                                  && shifts.monday.shift1.end != null
                                      ? shifts.monday.shift1.start + "-" + shifts.monday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.monday.shift2.start != null
                                  && shifts.monday.shift2.end != null
                                      ? shifts.monday.shift2.start + "-" + shifts.monday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.monday.shift3.start != null
                                  && shifts.monday.shift3.end != null
                                      ? shifts.monday.shift3.start + "-" + shifts.monday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.monday.shift4.start != null
                                  && shifts.monday.shift4.end != null
                                      ? shifts.monday.shift4.start + "-" + shifts.monday.shift4.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Dienstag</td>
                          <td>
                              {
                                  shifts
                                  && shifts.tuesday.shift1.start != null
                                  && shifts.tuesday.shift1.end != null
                                      ? shifts.tuesday.shift1.start + "-" + shifts.tuesday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.tuesday.shift2.start != null
                                  && shifts.tuesday.shift2.end != null
                                      ? shifts.tuesday.shift2.start + "-" + shifts.tuesday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.tuesday.shift3.start != null
                                  && shifts.tuesday.shift3.end != null
                                      ? shifts.tuesday.shift3.start + "-" + shifts.tuesday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.tuesday.shift4.start != null
                                  && shifts.tuesday.shift4.end != null
                                      ? shifts.tuesday.shift4.start + "-" + shifts.tuesday.shift4.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Mittwoch</td>
                          <td>
                              {
                                  shifts
                                  && shifts.wednesday.shift1.start != null
                                  && shifts.wednesday.shift1.end != null
                                      ? shifts.wednesday.shift1.start + "-" + shifts.wednesday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.wednesday.shift2.start != null
                                  && shifts.wednesday.shift2.end != null
                                      ? shifts.wednesday.shift2.start + "-" + shifts.wednesday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.wednesday.shift3.start != null
                                  && shifts.wednesday.shift3.end != null
                                      ? shifts.wednesday.shift3.start + "-" + shifts.wednesday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.wednesday.shift4.start != null
                                  && shifts.wednesday.shift4.end != null
                                      ? shifts.wednesday.shift4.start + "-" + shifts.wednesday.shift4.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Donnerstag</td>
                          <td>
                              {
                                  shifts
                                  && shifts.thursday.shift1.start != null
                                  && shifts.thursday.shift1.end != null
                                      ? shifts.thursday.shift1.start + "-" + shifts.thursday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.thursday.shift2.start != null
                                  && shifts.thursday.shift2.end != null
                                      ? shifts.thursday.shift2.start + "-" + shifts.thursday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.thursday.shift3.start != null
                                  && shifts.thursday.shift3.end != null
                                      ? shifts.thursday.shift3.start + "-" + shifts.thursday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.thursday.shift4.start != null
                                  && shifts.thursday.shift4.end != null
                                      ? shifts.thursday.shift4.start + "-" + shifts.thursday.shift4.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Freitag</td>
                          <td>
                              {
                                  shifts
                                  && shifts.friday.shift1.start != null
                                  && shifts.friday.shift1.end != null
                                      ? shifts.friday.shift1.start + "-" + shifts.friday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.friday.shift2.start != null
                                  && shifts.friday.shift2.end != null
                                      ? shifts.friday.shift2.start + "-" + shifts.friday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.friday.shift3.start != null
                                  && shifts.friday.shift3.end != null
                                      ? shifts.friday.shift3.start + "-" + shifts.friday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.friday.shift4.start != null
                                  && shifts.friday.shift4.end != null
                                      ? shifts.friday.shift4.start + "-" + shifts.friday.shift4.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Samstag</td>
                          <td>
                              {
                                  shifts
                                  && shifts.saturday.shift1.start != null
                                  && shifts.saturday.shift1.end != null
                                      ? shifts.saturday.shift1.start + "-" + shifts.saturday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.saturday.shift2.start != null
                                  && shifts.saturday.shift2.end != null
                                      ? shifts.saturday.shift2.start + "-" + shifts.saturday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.saturday.shift3.start != null
                                  && shifts.saturday.shift3.end != null
                                      ? shifts.saturday.shift3.start + "-" + shifts.saturday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.saturday.shift3.start != null
                                  && shifts.saturday.shift3.end != null
                                      ? shifts.saturday.shift3.start + "-" + shifts.saturday.shift3.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      <tr className="bg-gray-50 text-xs border-b text-left">
                          <td>Sonntag</td>
                          <td>
                              {
                                  shifts
                                  && shifts.sunday.shift1.start != null
                                  && shifts.sunday.shift1.end != null
                                      ? shifts.sunday.shift1.start + "-" + shifts.sunday.shift1.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.sunday.shift2.start != null
                                  && shifts.sunday.shift2.end != null
                                      ? shifts.sunday.shift2.start + "-" + shifts.sunday.shift2.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.sunday.shift3.start != null
                                  && shifts.sunday.shift3.end != null
                                      ? shifts.sunday.shift3.start + "-" + shifts.sunday.shift3.end
                                      : "-"
                              }
                          </td>
                          <td>
                              {
                                  shifts
                                  && shifts.sunday.shift4.start != null
                                  && shifts.sunday.shift4.end != null
                                      ? shifts.sunday.shift4.start + "-" + shifts.sunday.shift4.end
                                      : "-"
                              }
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    )
}

export default UserData

