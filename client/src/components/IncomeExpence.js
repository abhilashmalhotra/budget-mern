import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((a, b) => a + b.amount, 0);
  const expence = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((a, b) => a + b.amount, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(expence).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
