import React from "react";
import Select from "react-select";

const getFlagUrl = (currency) => {
    const countryMap = {
        USD: "us",
        EUR: "eu",
        MXN: "mx",
        GBP: "gb",
        JPY: "jp",
        CAD: "ca",
    };
    return `https://flagcdn.com/w40/${countryMap[currency]}.png`;
};

function CurrencyInput({
    amount,
    setAmount,
    currency,
    setCurrency,
    targetCurrencies,
    handleConvert,
    loading,
}) {
    const currencyOptions = targetCurrencies.map((curr) => ({
        value: curr,
        label: (
            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                    src={getFlagUrl(curr)}
                    alt={curr}
                    style={{ width: 20, height: 15, marginRight: 10 }}
                />
                {curr}
            </div>
        ),
    }));

    return (
        <div className="container">
            <div className="row d-grid gap-3">
                <div className="col-lg-6 col-sm">
                    <div class="input-group">
                        <span class="input-group-text">$</span>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-sm">
                    <Select
                        options={currencyOptions}
                        value={currencyOptions.find(
                            (opt) => opt.value === currency
                        )}
                        onChange={(selectedOption) =>
                            setCurrency(selectedOption.value)
                        }
                    />
                </div>
            </div>
            <div className="col-lg-12 pt-3">
                <button
                    className="btn btn-success w-100"
                    onClick={handleConvert}
                    disabled={loading}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-exchange"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
                    </svg>{" "}
                    {loading ? "Converting..." : "Convert"}
                </button>
            </div>
        </div>
    );
}

export default CurrencyInput;
