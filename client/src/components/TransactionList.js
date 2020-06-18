import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
    </React.Fragment>
  );
};
