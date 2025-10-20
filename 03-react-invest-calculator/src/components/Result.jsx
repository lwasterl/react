
import { calculateInvestmentResults, formatter } from '../util/investment.js';


function deriveResult(inputData) {
    const result = calculateInvestmentResults(inputData);
    return result.map((resultElement) => {
        const { year, interest, annualInvestment, valueEndOfYear } = resultElement;
        const totalInterest =
            valueEndOfYear -
            annualInvestment * year -
            inputData.initialInvestment;
        const totalAmountInvested = valueEndOfYear - totalInterest;


        return <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
    })
}

export default function Result({ inputData }) {
    return (
        <div>
            <table id="result">
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Investment Value</th>
                        <th scope="col">Interest (Year)</th>
                        <th scope="col">Total Interest</th>
                        <th scope="col">Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {deriveResult(inputData)}
                </tbody>
            </table>
        </div>
    )
}