import { useState } from 'react';
import './App.css';
import { convertCurrency } from './converCurrency';

function App() {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("")
  const [toCurrency, setToCurrency] = useState("")
  const [convertAmount, setConvertAmount] = useState(0)

  const handleConvert = () =>{
    if(!amount || !fromCurrency || !toCurrency){
      alert("Please fill the form completely...")
    }else{
      let result = convertCurrency(amount, fromCurrency, toCurrency)
      setConvertAmount(result.toFixed(2))
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1>Currency Converter</h1>
        </div>
        <div className='inputBox'>
          <label>
            Amount :
            <input type="number" id='amount' placeholder='Enter the amount to convert' onChange={(e) => setAmount(e.target.value)} value={amount} />
          </label>
        </div>
        <div className='selectbox'>
          <label>
            <span>Currency convert from :</span>
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              <option style={{ display: 'none' }} value=""></option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="AED">AED</option>
            </select>
          </label>
        </div>
        <div className='selectbox'>
          <label>
            <span>Currency convert to :</span>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              <option style={{ display: 'none' }} value=""></option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="AED">AED</option>
            </select>
          </label>
        </div>
        <button className='convertBtn' onClick={handleConvert}>Convert</button>
        <div className="result">
          <span>Converted amount :</span>
          <h2>${convertAmount}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
