'use client'
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
import useSWR from "swr";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
const Home: NextPage = () => {

    const [companyWorkers, setCompanyWorkers] = useState<any>();
    const [companyShifts, setCompanyShifts] = useState<any>();
    const [companyWorkingHours, setCompanyWorkingHours] = useState<any>();
    const [companyMachines, setCompanyMachines] = useState<any>();
    const [companyControlDocuments, setCompanyControlDocuments] = useState<any>();

    const [emailList, setEmailList] = useState<any>();
    const [emailListBack, setEmailListBack] = useState<any>(['webdev1@e-findo.de', 'it-service@e-findo.de',
        'a.maier@rail-kontor.ch']);

    const {data: machines, error: machinesError, isLoading: machinesLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)
    const {data: controlDocuments, error: controlDocumentsError,
        isLoading: controlDocumentsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/control-documents', fetcher)
    const {data: users, error: usersError, isLoading: usersLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users', fetcher)
    const {data: shiftsData, error: shiftsDataError, isLoading: shiftsDataLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/shifts', fetcher)
    const {data: contractors, error: contractorsError, isLoading: contractorsLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/contractors', fetcher)

    const company = JSON.parse(sessionStorage.getItem('company') as string)
    const getCompanyWorkers = () => {
        if (!usersLoading && !companyWorkers) {
            const companyWorkers = users.Items.filter((user:any) =>
                user.client_id == company.client_id
            )
            setCompanyWorkers(companyWorkers)
        }
    }
    const getCompanyShifts = () => {
        if (!shiftsDataLoading && !companyShifts) {
            const companyShifts = shiftsData.Items.filter((shift:any) =>
                shift.shift_id == company.client_number
            )
            if(companyShifts[0] && companyShifts[0].shifts) {
                setCompanyShifts(companyShifts[0].shifts)
                setCompanyWorkingHours(companyShifts[0].shiftHours)
            }

        }
    }
    const getCompanyMachines = () => {
        if (!machinesLoading && !companyMachines) {
            const companyMachines = machines.Items.filter((machine:any) =>
                machine.client == JSON.parse(sessionStorage.getItem('company') as string).client_name
            )
            setCompanyMachines(companyMachines)
        }
    }
    const getCompanyControlDocuments = () => {
        if (!controlDocumentsLoading && companyMachines && !companyControlDocuments) {
            const companyControlDocuments = controlDocuments.Items.filter((document: any) =>
                    companyMachines.reduce( function(a: any, b: any){
                        a.push(b['machine_id']);
                        return a
                    }, []).includes(document.machine_id)

                )
            setCompanyControlDocuments(companyControlDocuments)
        }
    }
    getCompanyWorkers();
    getCompanyShifts();
    getCompanyMachines();
    getCompanyControlDocuments();

    const sendEmail = (e: any) => {
        e.preventDefault();
        const emailList = []
        for (let worker in companyWorkers) {
            emailList.push(companyWorkers[worker].email)
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
                shift1_start: companyWorkingHours.shift1_start,
                shift1_end: companyWorkingHours.shift1_end,
                shift2_start: companyWorkingHours.shift2_start,
                shift2_end: companyWorkingHours.shift2_end,
                shift3_start: companyWorkingHours.shift3_start,
                shift3_end: companyWorkingHours.shift3_end,
                shift4_start: companyWorkingHours.shift4_start,
                shift4_end: companyWorkingHours.shift4_end,
                monday_shift1_start: companyShifts['monday'].shift1.start,
                monday_shift1_end: companyShifts['monday'].shift1.end,
                monday_shift2_start: companyShifts['monday'].shift2.start,
                monday_shift2_end: companyShifts['monday'].shift2.end,
                monday_shift3_start: companyShifts['monday'].shift3.start,
                monday_shift3_end: companyShifts['monday'].shift3.end,
                monday_shift4_start: companyShifts['monday'].shift4.start,
                monday_shift4_end: companyShifts['monday'].shift4.end,
                tuesday_shift1_start: companyShifts['tuesday'].shift1.start,
                tuesday_shift1_end: companyShifts['tuesday'].shift1.end,
                tuesday_shift2_start: companyShifts['tuesday'].shift2.start,
                tuesday_shift2_end: companyShifts['tuesday'].shift2.end,
                tuesday_shift3_start: companyShifts['tuesday'].shift3.start,
                tuesday_shift3_end: companyShifts['tuesday'].shift3.end,
                tuesday_shift4_start: companyShifts['tuesday'].shift4.start,
                tuesday_shift4_end: companyShifts['tuesday'].shift4.end,
                wednesday_shift1_start: companyShifts['wednesday'].shift1.start,
                wednesday_shift1_end: companyShifts['wednesday'].shift1.end,
                wednesday_shift2_start: companyShifts['wednesday'].shift2.start,
                wednesday_shift2_end: companyShifts['wednesday'].shift2.end,
                wednesday_shift3_start: companyShifts['wednesday'].shift3.start,
                wednesday_shift3_end: companyShifts['wednesday'].shift3.end,
                wednesday_shift4_start: companyShifts['wednesday'].shift4.start,
                wednesday_shift4_end: companyShifts['wednesday'].shift4.end,
                thursday_shift1_start: companyShifts['thursday'].shift1.start,
                thursday_shift1_end: companyShifts['thursday'].shift1.end,
                thursday_shift2_start: companyShifts['thursday'].shift2.start,
                thursday_shift2_end: companyShifts['thursday'].shift2.end,
                thursday_shift3_start: companyShifts['thursday'].shift3.start,
                thursday_shift3_end: companyShifts['thursday'].shift3.end,
                thursday_shift4_start: companyShifts['thursday'].shift4.start,
                thursday_shift4_end: companyShifts['thursday'].shift4.end,
                friday_shift1_start: companyShifts['friday'].shift1.start,
                friday_shift1_end: companyShifts['friday'].shift1.end,
                friday_shift2_start: companyShifts['friday'].shift2.start,
                friday_shift2_end: companyShifts['friday'].shift2.end,
                friday_shift3_start: companyShifts['friday'].shift3.start,
                friday_shift3_end: companyShifts['friday'].shift3.end,
                friday_shift4_start: companyShifts['friday'].shift4.start,
                friday_shift4_end: companyShifts['friday'].shift4.end,
                saturday_shift1_start: companyShifts['saturday'].shift1.start,
                saturday_shift1_end: companyShifts['saturday'].shift1.end,
                saturday_shift2_start: companyShifts['saturday'].shift2.start,
                saturday_shift2_end: companyShifts['saturday'].shift2.end,
                saturday_shift3_start: companyShifts['saturday'].shift3.start,
                saturday_shift3_end: companyShifts['saturday'].shift3.end,
                saturday_shift4_start: companyShifts['saturday'].shift4.start,
                saturday_shift4_end: companyShifts['saturday'].shift4.end,
                sunday_shift1_start: companyShifts['sunday'].shift1.start,
                sunday_shift1_end: companyShifts['sunday'].shift1.end,
                sunday_shift2_start: companyShifts['sunday'].shift2.start,
                sunday_shift2_end: companyShifts['sunday'].shift2.end,
                sunday_shift3_start: companyShifts['sunday'].shift3.start,
                sunday_shift3_end: companyShifts['sunday'].shift3.end,
                sunday_shift4_start: companyShifts['sunday'].shift4.start,
                sunday_shift4_end: companyShifts['sunday'].shift4.end
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
                        <StorageSystemDashboard
                            companyMachines = { companyMachines }
                            companyControlDocuments = { companyControlDocuments }
                            companyShifts = { companyShifts }
                            contractors = { contractors }
                        />
                    </div>
            </div>
        </div>

    )
}

export default Home
