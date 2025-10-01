import ResultTable from "./components/ResultTable";
import UserInputs from "./components/UserInputs";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
    const [inputs, setInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 6,
    });
    const [tableData, setTableData] = useState(
        calculateInvestmentResults(inputs)
    );
    function handleChange(event) {
        const { name, value } = event.target;
        const updatedInputs = {
            ...inputs,
            [name]: +value,
        };
        setInputs(updatedInputs);
        const newTableData = calculateInvestmentResults(updatedInputs);
        // console.log(newTableData);
        setTableData(newTableData);
    }

    return (
        <>
            <UserInputs handleChange={handleChange} inputs={inputs} />
            <ResultTable tableData={tableData} />
        </>
    );
}

export default App;
