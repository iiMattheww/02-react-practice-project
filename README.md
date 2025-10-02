# React Investment Calculator

This is a practice React project that calculates and displays investment growth over time based on user input.  
Users can enter their initial investment, annual investment, expected return rate, and duration to see a year-by-year breakdown of their investment.

## Features

- **User Inputs:**  
  Enter initial investment, annual investment, expected return (%), and duration (years).

- **Live Calculation:**  
  Results update instantly as you change any input.

- **Results Table:**  
  See a detailed table of your investment value, yearly interest, total interest, and invested capital for each year.

- **Validation:**  
  Prevents calculation if the duration is not valid.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd 02-react-practice-project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```

4. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/App.jsx` – Main app logic and state management
- `src/components/UserInputs.jsx` – Input form for investment parameters
- `src/components/Results.jsx` – Displays the results table
- `src/util/investment.js` – Investment calculation logic

## Customization

You can adjust the default values in `App.jsx` or enhance the UI as you wish.

## License

This project is for learning and personal use.