import Results from "./components/Results";
import UserInputs from "./components/UserInputs";
import { useState } from "react";

function App() {
    const [inputs, setInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setInputs((prevInputs) => {
            return { ...prevInputs, [name]: +value };
        });
    }

    const inputIsValid = inputs.duration > 0 ;

    return (
        <>
            <UserInputs onChange={handleChange} inputs={inputs} />
            {!inputIsValid && <p className="center">Please enter a valid duration.</p>}
            {inputIsValid && <Results inputs={inputs} />}
        </>
    );
}

export default App;
