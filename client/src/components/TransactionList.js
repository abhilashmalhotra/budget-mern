import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, getTransactions, error } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <React.Fragment>
      <h3>History</h3>
      {error ? <span className="error-server">{error}</span> : null}

      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
    </React.Fragment>
  );
};
