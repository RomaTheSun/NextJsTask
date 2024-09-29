
interface ResultProps {
    monthlyPayment: number
}

export default function Result({monthlyPayment}:ResultProps) {
    return (
        <section className="result_cont">
            <h2 className="title white">Your results</h2>
            <div className="repayments_sum_cont">
                <span className="label white">Your monthly repayments</span>
                <div id="sum">$ {monthlyPayment?.toFixed(2)}</div>
            </div>
        </section>
    )
}