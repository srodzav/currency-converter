import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyInput from "./CurrencyInput";
import ExchangeTable from "./ExchangeTable";
import AboutButton from "./AboutButton";
const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;

function App() {
    const [amount, setAmount] = useState("1.00");
    const [currency, setCurrency] = useState("EUR");
    const [convertedRates, setConvertedRates] = useState({});
    const [loading, setLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    const targetCurrencies = ["MXN", "USD", "EUR", "GBP", "JPY", "CAD"];

    const handleConvert = () => {
        setLoading(true);
        fetch(
            `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=MXN,USD,EUR,GBP,CAD,JPY`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const baseRate = data.rates[currency] || 1;
                    const newRates = {};
                    for (let key of targetCurrencies) {
                        newRates[key] = data.rates[key] / baseRate;
                    }
                    setConvertedRates(newRates);
                }
            })
            .catch((error) =>
                console.error("Error fetching exchange rates:", error)
            )
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const fecthDate = async () => {
            const exchangeDate = new Date().toLocaleDateString("es-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            setCurrentTime(`Currency Change at ${exchangeDate}`);
        };
        fecthDate();
    }, []);

    return (
        <div className="container mt-5 px-lg-5 App">
            <div className="card">
                <h2 className="text-center mb-3">Currency Converter</h2>
                <CurrencyInput
                    amount={amount}
                    setAmount={setAmount}
                    currency={currency}
                    setCurrency={setCurrency}
                    targetCurrencies={targetCurrencies}
                    handleConvert={handleConvert}
                    loading={loading}
                />
                <ExchangeTable
                    targetCurrencies={targetCurrencies}
                    convertedRates={convertedRates}
                    amount={amount}
                />
            </div>
            <div class="text-center pt-4">
                <small className="text-muted">{currentTime}</small>
            </div>
            <div className="mt-3">
                <AboutButton />
            </div>
        </div>
    );
}

export default App;
