export default function UserInputs({ onChange, inputs }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        onChange={onChange}
                        defaultValue={inputs.initialInvestment}
                        type="number"
                        required
                        name="initialInvestment"
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        onChange={onChange}
                        defaultValue={inputs.annualInvestment}
                        type="number"
                        required
                        name="annualInvestment"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        onChange={onChange}
                        defaultValue={inputs.expectedReturn}
                        name="expectedReturn"
                        required
                        type="number"
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        onChange={onChange}
                        defaultValue={inputs.duration}
                        type="number"
                        required
                        name="duration"
                    />
                </p>
            </div>
        </section>
    );
}
