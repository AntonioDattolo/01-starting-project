import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}){
    const results = calculateInvestmentResults(input);
    
    function consolla(){
        console.log(results)
    }
    consolla();
    return(
        <section>
            
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investement Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Capital</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       results.map((data) => {
                        // interessi totali è uguale a il valore finale dell'anno meno il capitale annuale
                        // moltiplicato gli anni e sottratto il capitale iniziale
                        const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - input.initialInvestment
                        // il capitale finale è uguale al capitale annuale finale meno gli interessi.
                        const capital = data.valueEndOfYear - data.interest
                           return (
                            <tr>
                                <td>
                                    {data.year}
                                </td>
                                <td>
                                    {formatter.format(input.initialInvestment)}
                                </td>
                                <td>
                                    {formatter.format(data.interest)}
                                </td>
                                <td>
                                    {formatter.format(totalInterest)}
                                </td>
                                <td>
                                    {formatter.format(capital)}
                                </td>
                            </tr>
                        )
                    })
                   }
                </tbody>

            </table>
        </section>
    );
}