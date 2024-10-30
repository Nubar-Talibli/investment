import { calculateInvestmentResults, formatter } from "../util/investment"


export default function Result({data}) {;

    const calculator = calculateInvestmentResults(data)
    const initial = data.initialInvestment

    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Saving</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        calculator.map((item)=>{
                            const totalInterest = item.valueEndOfYear - item.year*item.annualInvestment - initial
                            const investedCapital = item.valueEndOfYear - totalInterest

                            return (
                                <tr key={item.year}>
                                    <th>{item.year}</th>
                                    <th>{formatter.format(item.valueEndOfYear)}</th>
                                    <th>{formatter.format(item.interest)}</th>
                                    <th>{formatter.format(totalInterest)}</th>
                                    <th>{formatter.format(investedCapital)}</th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}