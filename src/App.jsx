import "./App.css";

function App() {
  return (
    <>
      <div className="currency-converter">
        <div className="box"></div>

        <div className="data">
          <h1>Currency Converter</h1>

          <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number" id="amt" />
          </div>

          <div className="input-container">
            <label htmlFor="fromCurrency">From Currency:</label>

            <select id="fromCurrency">
              <option value="USD">USD - United States</option>
              <option value="EUR">EUR - European Union</option>
              <option value="GBP">GBP - United Kingdom</option>
              <option value="JPY">JPY - Japan</option>
              <option value="AUD">AUD - Australia</option>
              <option value="CAD">CAD - Canada</option>
              <option value="CNY">CNY - China</option>
              <option value="INR">INR - India</option>
              <option value="BRL">BRL - Brazil</option>
              <option value="ZAR">ZAR - South Africa</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="toCurrency">To Currency:</label>

            <select id="toCurrency">
              <option value="USD">USD - United States</option>
              <option value="EUR">EUR - European Union</option>
              <option value="GBP">GBP - United Kingdom</option>
              <option value="JPY">JPY - Japan</option>
              <option value="AUD">AUD - Australia</option>
              <option value="CAD">CAD - Canada</option>
              <option value="CNY">CNY - China</option>
              <option value="INR">INR - India</option>
              <option value="BRL">BRL - Brazil</option>
              <option value="ZAR">ZAR - South Africa</option>
            </select>
          </div>
          <div className="result">
            <p>1 INR is equal to 83.25 USD</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
