import React from "react";

function ExchangeTable({ targetCurrencies, convertedRates, amount }) {
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
                            <td>{target}</td>
                            <td>
                                {convertedRates[target]
                                    ? convertedRates[target].toFixed(4)
                                    : "N/A"}
                            </td>
                            <td>
                                {convertedRates[target] && amount
                                    ? (amount * convertedRates[target]).toFixed(
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
