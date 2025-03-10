import React from "react";

function CurrencyInput({
    amount,
    setAmount,
    currency,
    setCurrency,
    targetCurrencies,
    handleConvert,
    loading,
}) {
    return (
        <div className="container my-3">
            <div className="row g-2 align-items-center">
                <div className="col-md-4">
                    <input
                        type="number"
                        className="input-amount form-control"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <select
                        className="form-select"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        {targetCurrencies.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>
                    <div className="col-md-4">
                        <button
                            className="btn btn-primary w-100"
                            onClick={handleConvert}
                            disabled={loading}
                        >
                            {loading ? "Convirtiendo..." : "Convertir"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyInput;
