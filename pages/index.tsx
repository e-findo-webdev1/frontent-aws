import type { NextPage } from 'next'
import Header from "./components/start/Header";
import StorageSystemDashboard from "./components/start/StorageSystemDashboard";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import API from "axios";
import 'react-loading-skeleton/dist/skeleton.css'
import PDFSVG from "../public/pdf-svgrepo-com";
import CalendarSVG from "../public/calendar-day-svgrepo-com";
import CalendarYearSVG from "../public/calendar-clock-svgrepo-com";
import AnnualSVG from "../public/sales-amount-svgrepo-com";
import Co2SVG from "../public/truck-trash-svgrepo-com";
import ScrapSVG from "../public/car-accident-car-crash-scrap-metal-svgrepo-com";

const Home: NextPage = () => {



    const [workingHours, setWorkingHours] = useState<any>();
    const [shifts, setShifts] = useState<any>();
    const [shiftsList, setShiftsList] = useState<any>();
    const [workers, setWorkers] = useState<any>();
    const [emailList, setEmailList] = useState<any>();
    const [emailListBack, setEmailListBack] = useState<any>(['webdev1@e-findo.de', 'it-service@e-findo.de',
        'a.maier@rail-kontor.ch']);
    const [dataLoaded, setDataLoaded] = useState<any>(false);



    useEffect(() => {

        const fetchData = async () => {
            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users')
                .then((response) => {
                    setWorkers(
                        response.data.Items.filter((obj: any) => obj.client_id ==
                            JSON.parse(sessionStorage.getItem('company') as string).client_id));
                })
                .catch((error) => {
                    console.log(error.response);
                });

            await API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts')
                .then((response) => {
                    setShifts(
                        response.data.Items
                            .filter( (shift: any) => shift.client_id ==
                                JSON.parse(sessionStorage.getItem('company') as string).client_id)[0].shifts
                    );
                    setWorkingHours(
                        response.data.Items
                            .filter( (shift: any) => shift.client_id ==
                                JSON.parse(sessionStorage.getItem('company') as string).client_id)[0].shiftHours
                    );
                })
                .catch((error) => {
                    console.log(error.response);
                });
            setDataLoaded(true)
        }

        fetchData()

        },[]
    )


    const sendEmail = (e: any) => {
        e.preventDefault();
        const emailList = []
        for (let worker in workers) {
            emailList.push(workers[worker].email)
        }
        setEmailList(emailList)

        emailjs.send('service_q2p4iwl', 'template_svalxfj',
           { email_list: emailList,
                client_company: JSON.parse(sessionStorage.getItem('company') as string).client_name },
            'T3_j793le9k-t00DB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const sendEmailBack = (e: any) => {
        e.preventDefault();

        emailjs.send('service_q2p4iwl', 'template_r2wmwre',
            {
                client_company: JSON.parse(sessionStorage.getItem('company') as string).client_name,
                email_list_back: emailListBack,
                shift1_start: workingHours.shift1_start,
                shift1_end: workingHours.shift1_end,
                shift2_start: workingHours.shift2_start,
                shift2_end: workingHours.shift2_end,
                shift3_start: workingHours.shift3_start,
                shift3_end: workingHours.shift3_end,
                shift4_start: workingHours.shift4_start,
                shift4_end: workingHours.shift4_end,
                monday_shift1_start: shifts['monday'].shift1.start,
                monday_shift1_end: shifts['monday'].shift1.end,
                monday_shift2_start: shifts['monday'].shift2.start,
                monday_shift2_end: shifts['monday'].shift2.end,
                monday_shift3_start: shifts['monday'].shift3.start,
                monday_shift3_end: shifts['monday'].shift3.end,
                monday_shift4_start: shifts['monday'].shift4.start,
                monday_shift4_end: shifts['monday'].shift4.end,
                tuesday_shift1_start: shifts['tuesday'].shift1.start,
                tuesday_shift1_end: shifts['tuesday'].shift1.end,
                tuesday_shift2_start: shifts['tuesday'].shift2.start,
                tuesday_shift2_end: shifts['tuesday'].shift2.end,
                tuesday_shift3_start: shifts['tuesday'].shift3.start,
                tuesday_shift3_end: shifts['tuesday'].shift3.end,
                tuesday_shift4_start: shifts['tuesday'].shift4.start,
                tuesday_shift4_end: shifts['tuesday'].shift4.end,
                wednesday_shift1_start: shifts['wednesday'].shift1.start,
                wednesday_shift1_end: shifts['wednesday'].shift1.end,
                wednesday_shift2_start: shifts['wednesday'].shift2.start,
                wednesday_shift2_end: shifts['wednesday'].shift2.end,
                wednesday_shift3_start: shifts['wednesday'].shift3.start,
                wednesday_shift3_end: shifts['wednesday'].shift3.end,
                wednesday_shift4_start: shifts['wednesday'].shift4.start,
                wednesday_shift4_end: shifts['wednesday'].shift4.end,
                thursday_shift1_start: shifts['thursday'].shift1.start,
                thursday_shift1_end: shifts['thursday'].shift1.end,
                thursday_shift2_start: shifts['thursday'].shift2.start,
                thursday_shift2_end: shifts['thursday'].shift2.end,
                thursday_shift3_start: shifts['thursday'].shift3.start,
                thursday_shift3_end: shifts['thursday'].shift3.end,
                thursday_shift4_start: shifts['thursday'].shift4.start,
                thursday_shift4_end: shifts['thursday'].shift4.end,
                friday_shift1_start: shifts['friday'].shift1.start,
                friday_shift1_end: shifts['friday'].shift1.end,
                friday_shift2_start: shifts['friday'].shift2.start,
                friday_shift2_end: shifts['friday'].shift2.end,
                friday_shift3_start: shifts['friday'].shift3.start,
                friday_shift3_end: shifts['friday'].shift3.end,
                friday_shift4_start: shifts['friday'].shift4.start,
                friday_shift4_end: shifts['friday'].shift4.end,
                saturday_shift1_start: shifts['saturday'].shift1.start,
                saturday_shift1_end: shifts['saturday'].shift1.end,
                saturday_shift2_start: shifts['saturday'].shift2.start,
                saturday_shift2_end: shifts['saturday'].shift2.end,
                saturday_shift3_start: shifts['saturday'].shift3.start,
                saturday_shift3_end: shifts['saturday'].shift3.end,
                saturday_shift4_start: shifts['saturday'].shift4.start,
                saturday_shift4_end: shifts['saturday'].shift4.end,
                sunday_shift1_start: shifts['sunday'].shift1.start,
                sunday_shift1_end: shifts['sunday'].shift1.end,
                sunday_shift2_start: shifts['sunday'].shift2.start,
                sunday_shift2_end: shifts['sunday'].shift2.end,
                sunday_shift3_start: shifts['sunday'].shift3.start,
                sunday_shift3_end: shifts['sunday'].shift3.end,
                sunday_shift4_start: shifts['sunday'].shift4.start,
                sunday_shift4_end: shifts['sunday'].shift4.end
            },
            'T3_j793le9k-t00DB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="content-page" className="overflow-auto h-full px-28 m-auto">
            <div className="grid grid-cols-3 mt-4 ">
                <div className="border-r mt-2">
                    <Header/>
                    <img src="/esb_start2.jpg" className="h-40 min-w-[10rem] max-w-[15rem] w-full m-auto mt-5 rounded-lg shadow-md" />
                    <div className={JSON.parse(sessionStorage.getItem('user') as string).admin ?
                        "flex mt-7" : "hidden"}>
                            <button className="border mx-auto p-2 px-3.5
                             border-accent-color-1
                            bg-accent-color-4
                    hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"
                                onClick={sendEmail}
                            >
                                Email Arbeitszeiten senden
                            </button>
                    </div>
                    <div className={!JSON.parse(sessionStorage.getItem('user') as string).admin ?
                        "flex mt-7" : "hidden"}>
                        <button className="border mx-auto p-2 px-3.5
                              border-accent-color-1 bg-accent-color-4 font-medium
                              hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs"
                                onClick={sendEmailBack}
                        >
                            Email Arbeitszeiten senden
                        </button>
                    </div>
                    <p className="mb-5 mt-5 text-xl font-bold text-center">Reporting</p>
                    <div className="flex-row m-auto text-sm mx-5 px-12">
                        <div className="flex space-x-1 justify-center">
                            <Link href="reporting/control-documents" className="">
                                <button className="min-w-[4.5rem] min-h-[4.5rem] w-full h-full max-w-[4.5rem] max-h-[4.5rem] border bg-gray-50 hover:bg-white font-medium
                        sm:rounded-lg shadow-md border text-xs">
                                    <PDFSVG/>
                                </button>
                            </Link>
                            <Link href="/reporting/monthly-evaluation" className="">
                                <button className="min-w-[4.5rem] min-h-[4.5rem] w-full h-full max-w-[4.5rem] max-h-[4.5rem] border bg-gray-50 hover:bg-white
                                 hover:bg-accent-color-5 font-medium
                        sm:rounded-lg shadow-md border text-xs">
                                   <CalendarSVG/></button>
                            </Link>
                            <Link href="/reporting/annual-evaluation" className="">
                                <button className="min-w-[4.5rem] min-h-[4.5rem] w-full h-full max-w-[4.5rem] max-h-[4.5rem] border bg-gray-50 hover:bg-white
                                 hover:bg-accent-color-5 font-medium
                        sm:rounded-lg shadow-md border text-xs">
                                    <CalendarYearSVG/></button>
                            </Link>
                        </div>
                        <div className="flex space-x-1 justify-center mt-1">
                            <Link href="/reporting/annual-revenues" className="">
                                <button className="min-w-[4.5rem] min-h-[4.5rem] w-full h-full max-w-[4.5rem] max-h-[4.5rem] border bg-gray-50 hover:bg-white
                                 hover:bg-accent-color-5 font-medium
                        sm:rounded-lg shadow-md border text-xs">
                                    <AnnualSVG/></button>
                            </Link>
                            <Link href="/reporting/co2-evaluation" className="">
                                <button className="min-w-[4.5rem] min-h-[4.5rem] w-full h-full max-w-[4.5rem] max-h-[4.5rem] border bg-gray-50 hover:bg-white
                                 font-medium
                        sm:rounded-lg shadow-md border text-xs">
                                    <Co2SVG/></button>
                            </Link>
                            <Link href="/reporting/waste-balance" className="">
                                <button className="min-w-[4.5rem] min-h-[4.5rem] w-full h-full max-w-[4.5rem] max-h-[4.5rem] border bg-gray-50 hover:bg-white font-medium
                        sm:rounded-lg shadow-md border  text-xs">
                                    <ScrapSVG/></button>
                            </Link>
                        </div>
                    </div>
                </div>

                    <div className="col-span-2 pl-10 flex">
                                    <StorageSystemDashboard/>
                    </div>
            </div>
        </div>

    )
}

export default Home
