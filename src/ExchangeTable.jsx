import React from "react";

function ExchangeTable({ targetCurrencies, convertedRates, amount }) {
    const getFlagUrl = (currency) => {
        const countryCodes = {
            USD: "us",
            EUR: "eu",
            MXN: "mx",
            GBP: "gb",
            JPY: "jp",
            CAD: "ca",
        };
        return `https://flagcdn.com/w40/${countryCodes[currency]}.png`;
    };

    return (
        <div className="container mt-4">
            <table className="table table-striped table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Currency</th>
                        <th>Exchange Rate</th>
                        <th>Converted Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {targetCurrencies.map((target) => (
                        <tr key={target}>
                            <td
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={getFlagUrl(target)}
                                    alt={target}
                                    style={{
                                        width: 20,
                                        height: 15,
                                        marginRight: 10,
                                    }}
                                />
                                {target}
                            </td>
                            <td>
                                {convertedRates[target]
                                    ? "$" + convertedRates[target].toFixed(2)
                                    : "N/A"}
                            </td>
                            <td>
                                {convertedRates[target] && amount
                                    ? "$" +
                                      (amount * convertedRates[target]).toFixed(
                                          2
                                      )
                                    : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExchangeTable;
