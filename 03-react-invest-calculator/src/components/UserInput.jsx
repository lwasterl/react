export default function UserInput({ inputData, onValueChange }) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = inputData;
    return (
        <div>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial investment</label>
                        <input type="number" min="0" required value={initialInvestment} onChange={(event) => onValueChange('initialInvestment', event.target.value)} />
                    </p>
                    <p>
                        <label>Annual investment</label>
                        <input type="number" min="0" required value={annualInvestment} onChange={(event) => onValueChange('annualInvestment', event.target.value)} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>Expected return</label>
                        <input type="number" min="0" required value={expectedReturn} onChange={(event) => onValueChange('expectedReturn', event.target.value)} />
                    </p>
                    <p>
                        <label>duration</label>
                        <input type="number" min="0" required value={duration} onChange={(event) => onValueChange('duration', event.target.value)} />
                    </p>
                </div>
            </section>
        </div>
    )
}