
export default function Main({userInput, change}){
    return(
        <main>
            <section id="user-input">
                <div className="input-group">
                    <label htmlFor="initialInvestment">
                        Initial Investment
                        <input id="initialInvestment" type="number" 
                            onChange={(event) =>  change('initialInvestment', event.target.value)}  
                            value={userInput.initialInvestment}
                            min="0"
                            required
                        />
                    </label>
                    <label htmlFor="annualInvestment">
                        Annual Investment
                        <input id="annualInvestment" type="number" 
                            onChange={(event) =>  change('annualInvestment', event.target.value)}  
                            value={userInput.annualInvestment}
                            min="0"
                            required
                        />
                    </label>
                    <label htmlFor="expectedReturn">
                        Expected Return
                        <input id="expectedReturn" type="number" 
                            onChange={(event) =>  change('expectedReturn', event.target.value)} 
                            value={userInput.expectedReturn}
                            min="0"
                            required
                        />
                    </label>
                    <label htmlFor="duration">
                        Duration
                        <input id="duration" type="number" 
                            onChange={(event) =>  change('duration', event.target.value)} 
                            value={userInput.duration}
                            min="0"
                            required
                        />
                    </label>
                </div>
            </section>
        </main>
    );
}