import React from "react";
import { IncomeExpence } from "../components/IncomeExpence";
import { TransactionList } from "../components/TransactionList";

export const Home = () => {
  return (
    <React.Fragment>
      <IncomeExpence />
      <TransactionList />
    </React.Fragment>
  );
};
