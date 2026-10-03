import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import currencies from "./currencies.json";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch exchange rate whenever the currencies change
  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        setLoading(true);
        setError("");

        const url = `https://v6.exchangerate-api.com/v6/49d6ea6f89f4fc1757050845/latest/${fromCurrency}`;

        const response = await axios.get(url);

        const rate = response.data.conversion_rates[toCurrency];

        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setError("Unable to fetch exchange rate. Please try again.");
        setExchangeRate(null);
      } finally {
        setLoading(false);
      }
    };

    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  // Calculate converted amount
  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (event) => {
    const value = Number(event.target.value);

    setAmount(Number.isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  return (
    <div className="currency-converter">
      <div className="box"></div>

      <div className="data">
        <h1>Currency Converter</h1>

        {/* Amount */}
        <div className="input-container">
          <label htmlFor="amt">Amount:</label>

          <input
            type="number"
            id="amt"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        {/* From Currency */}
        <div className="input-container">
          <label htmlFor="fromCurrency">From Currency:</label>

          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>

        {/* To Currency */}
        <div className="input-container">
          <label htmlFor="toCurrency">To Currency:</label>

          <select
            id="toCurrency"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>

        {/* Result */}
        <div className="result">
          {loading ? (
            <p>Fetching exchange rate...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <p>
              {amount} {fromCurrency} is equal to{" "}
              <span className="result-value" >
                {convertedAmount} 
              </span>
             {" "} {toCurrency}
            </p>
          )}
        </div>
      </div>

      <p className="copyright">
        Designed and Developed by <span>Velachi</span>
      </p>
    </div>
  );
}

export default App;

