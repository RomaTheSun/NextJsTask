"use client"

import { useState } from "react"
import Calculations from "../components/Calculation"
import Result from "../components/Result"

export default function MortgageCalculatorPage() {
    const [monthlyPayment, setMonthlyPayment] = useState(0)

    const handleCalculate = (payment: number) => {
        setMonthlyPayment(payment)
    }
    const handleClear = () => {
        setMonthlyPayment(0)
    }

    return (
        <div className="background">
            <main className="main_container">
                <Calculations onCalculate={handleCalculate} onClear={handleClear} />
                <Result monthlyPayment={monthlyPayment} />
            </main>
        </div>
    )
}