import { uesState } from "react";

export default function UserInputs({ handleChange, inputs }) {
    const [userInput, setUserInput] = uesState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 6,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        onChange={handleChange}
                        value={inputs.initialInvestment}
                        type="number"
                        required
                        name="initialInvestment"
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        onChange={handleChange}
                        value={inputs.annualInvestment}
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
                        onChange={handleChange}
                        value={inputs.expectedReturn}
                        name="expectedReturn"
                        required
                        type="number"
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        onChange={handleChange}
                        value={inputs.duration}
                        type="number"
                        required
                        name="duration"
                    />
                </p>
            </div>
        </section>
    );
}
