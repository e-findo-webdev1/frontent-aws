import {useEffect, useState} from "react";

const revenues_2020 = [
    {
        product: "Aluminium Späne, normal",
        weight: 46480,
        value: 60024.07,
        income: 60024.07,
        delta: 0.00
    },
    {
        product: "Aluminium Späne, nass",
        weight: 6860,
        value: 8807.58,
        income: 7310.29,
        delta: -1497.29
    },
    {
        product: "Aluminium Profile AlSi1, Fe frei",
        weight: 50540,
        value: 75635.31,
        income: 75635.31,
        delta: 0.00
    },
    {
        product: "Mischschrott mit Eisenanhaftung, Alu Anteil ca. 70 %",
        weight: 13780,
        value: 2388.75,
        income: 2370.67,
        delta: -18.08
    }
]
const revenues_2021 = [
    {
        product: "Eisenspäne",
        weight: 1060,
        value: 275.28,
        income: 275.28,
        delta: 0.00
    },
    {
        product: "Aluminium Späne, normal",
        weight: 112990,
        value: 149397.55,
        income: 149397.55,
        delta: 0.00
    },
    {
        product: "Aluminium Späne, nass",
        weight: 10030,
        value: 6132.90,
        income: 6132.90,
        delta: 0.00
    },
    {
        product: "Aluminium Profile AlSi1, Fe frei",
        weight: 57990,
        value: 99753.66,
        income: 99753.66,
        delta: 0.00
    },
    {
        product: "Mischschrott mit Eisenanhaftung, Alu Anteil ca. 70 %",
        weight: 31450,
        value: 8435.58,
        income: 7851.48,
        delta: -584.10
    }
]
const revenues_2022 = [
    {
        product: "Mischschrott",
        weight: 17170,
        value: 4931.18,
        income: 4931.18,
        delta: 0
    },
    {
        product: "Eisenspäne",
        weight: 18510,
        value: 4788.59,
        income: 4762.91,
        delta: -25.68
    },
    {
        product: "Aluminium Späne, normal",
        weight: 80250,
        value: 142491.14,
        income: 142028.53,
        delta: -462.61
    },
    {
        product: "Aluminium Späne, nass",
        weight: 9770,
        value: 6909.20,
        income: 6909.20,
        delta: 0
    },
    {
        product: "Aluminium Profile AlSi1, Fe frei",
        weight: 47790,
        value: 100481.65,
        income: 100647.85,
        delta: 166.20
    },
]

const AnnualRevenues = () => {
    const [currentYearString, setCurrentYearString] = useState("2020")
    const [currentYear, setCurrentYear] = useState(revenues_2020)
    const [totalWeight, setTotalWeight] = useState( 0);
    const [totalValue, setTotalValue] = useState( 0);
    const [totalIncome, setTotalIncome] = useState( 0);
    const [totalDelta, setTotalDelta] = useState( 0);

    const calculateTotalWeight = ()  => {
        let weight = 0

            for (let product in currentYear) {
                weight = (weight + currentYear[product].weight)
            }
        return weight;
    }
    const calculateTotalValue = ()  => {
        let value = 0

        for (let product in currentYear) {
            value = (value + currentYear[product].value)
        }
        return value;
    }
    const calculateTotalIncome = ()  => {
        let income = 0

        for (let product in currentYear) {
            income = (income + currentYear[product].income)
        }
        return income;
    }
    const calculateTotalDelta = ()  => {
        let delta = 0

        for (let product in currentYear) {
            delta = (delta + currentYear[product].delta)
        }
        return delta;
    }

    useEffect(() => {
        let weight = calculateTotalWeight()
        setTotalWeight(weight)
        let income = calculateTotalIncome()
        setTotalIncome(income)
        let value = calculateTotalValue()
        setTotalValue(value)
        let delta = calculateTotalDelta()
        setTotalDelta(delta)

    }, [currentYear]);

    return(
        <div id="content-page" className="px-20">
            <p className="mt-9 text-3xl font-bold mb-5">Jahreserlöse {currentYearString}</p>
            <div className="mb-2.5">
                <span onClick={()=>{setCurrentYear(revenues_2020);setCurrentYearString("2020")}}
                      className="text-sm cursor-pointer underline m-1">2020</span>|
                <span onClick={()=>{setCurrentYear(revenues_2021);setCurrentYearString("2021")}}
                      className="text-sm cursor-pointer underline m-1">2021</span>|
                <span onClick={()=>{setCurrentYear(revenues_2022);setCurrentYearString("2022")}}
                      className="text-sm cursor-pointer underline m-1">2022</span>
            </div>

            <div className="sm:rounded-lg shadow-md border">
                <table className="flex-row w-full table-auto">
                    <thead>
                    <tr className="text-xs text-gray-500 border-b text-left">
                        <th className="font-normal">Warenart</th>
                        <th className="text-right font-normal">Werksgewicht</th>
                        <th className="text-right font-normal">Betrag Werksgewicht</th>
                        <th className="text-right font-normal">Betrag erhalten</th>
                        <th className="text-right font-normal">Delta</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                    {currentYear.map((year) =>
                        <tr key={year.product} className="text-xs border-t">
                            <td>{year.product}</td>
                            <td className="text-right">{year.weight}</td>
                            <td className="text-right">{year.value} €</td>
                            <td className="text-right">{year.income} €</td>
                            <td className="text-right">{year.delta} €</td>
                        </tr>
                        )}
                    <tr>
                        <td colSpan={5}>
                            <hr/>
                        </td>
                    </tr>
                    <tr className="text-xs">
                        <td/>
                        <td className="text-right">
                            {totalWeight}
                        </td>
                        <td className="text-right">
                            {totalValue} €
                        </td>
                        <td className="text-right">
                            {totalIncome} €
                        </td>
                        <td className="text-right">
                            {totalDelta.toFixed(2)} €
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnnualRevenues