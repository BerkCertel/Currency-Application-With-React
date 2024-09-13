import React, { useState } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'
import "../Css/currency.css";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_QEENL6AfXzFyed7679odhFgIKIuAyIL7wKFTANhx";

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        // console.log(amount)
        // console.log(fromCurrency);
        // console.log(toCurrency);

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);

        // console.log(response.data.data[toCurrency]);
        setResult(((response.data.data[toCurrency]) * amount).toFixed(2))

    }

    return (
        <div className='currency-div'>
            <div>
                <h3 className='title'>DOVIZ KURU UYGULAMASI</h3>
            </div>
            <div className='currency-main'>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount-input' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='first-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight className='arrow' />

                <select onChange={(e) => setToCurrency(e.target.value)} className='second-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result-input' />
            </div>
            <div>
                <button
                    onClick={exchange}
                    className='btn'>Çevir</button>
            </div>
        </div>
    );
}

export default Currency;
