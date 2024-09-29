"use client"
import { useState } from "react"

interface CalculationsProps {
    onCalculate: (monthlyPayment: number) => void
    onClear: () => void
}

export default function Calculations({ onCalculate, onClear }: CalculationsProps) {
    const [mortgageAmount, setMortgageAmount] = useState<number | string>(200000)
    const [mortgageRate, setMortgageRate] = useState<number | string>(30)
    const [mortgageTerm, setMortgageTerm] = useState<number | string>(3)

    const clearAll = () => {
        setMortgageAmount(0)
        setMortgageRate(0)
        setMortgageTerm(0)
        onClear()
    }

    const calculateMortgage = () => {

        const principal = Number(mortgageAmount)
        const rate = Number(mortgageRate)
        const term = Number(mortgageTerm)

        const monthlyRate = rate / 100 / 12
        const numberOfPayments = term * 12

        const monthlyPayment =
            (principal *
                monthlyRate *
                Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

        onCalculate(monthlyPayment)
    }
    return (
        <section className="calc_cont">
            <div className="title_cont">
                <h1 className="title">Mortgage Calculator</h1>
                <input type="reset" value="Clear All" id="clear_btn" className="clear_btn" onClick={clearAll} />
            </div>

            <label className="mortgage_cont label">
                Mortgage Amount
                <div className="input_cont">
                    <div className="input_img">$</div>
                    <input
                        className="mortgage_input"
                        type="number"
                        id="mortgageAmount"
                        value={mortgageAmount}
                        onChange={(e) => setMortgageAmount(e.target.value)}
                    />
                </div>
            </label>

            <div className="year_and_interest_cont">
                <label className="input_box label">
                    Mortgage Term
                    <div className="input_cont">
                        <input
                            className="reverse_mortgage_input"
                            type="number"
                            id="mortgageTerm"
                            value={mortgageTerm}
                            onChange={(e) => setMortgageTerm(e.target.value)}
                        />
                        <div className="reverse_input_img">years</div>
                    </div>
                </label>

                <label className="input_box label">
                    Interest Rate
                    <div className="input_cont">
                        <input
                            className="reverse_mortgage_input"
                            type="number"
                            id="interestRate"
                            step="0.01"
                            value={mortgageRate}
                            onChange={(e) => setMortgageRate(e.target.value)}
                        />
                        <div className="reverse_input_img">%</div>
                    </div>
                </label>
            </div>
            <button className="calculate_btn" id="calculate_btn" onClick={calculateMortgage}>
                Calculate
            </button>
        </section>
    )
}