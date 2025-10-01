export default function ResultTable({ tableData }) {
    console.log(tableData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableData && tableData.length > 0 ? (
                    tableData.map((element) => (
                        <tr key={element.year}>
                            <td>{element.year}</td>
                            <td>{element.valueEndOfYear}</td>
                            <td>{element.interest}</td>
                            <td>{/* Total interest calculation needed */}</td>
                            <td>{/* Invested capital calculation needed */}</td>
                        </tr>
                    ))
                ) : (
                    <tr className="center">
                        <td colSpan="5">
                            No data available. Please enter your investment
                            details.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
