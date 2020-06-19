import React, { useContext } from "react";
import { IncomeExpence } from "../components/IncomeExpence";
import { TransactionList } from "../components/TransactionList";

import { GlobalContext } from "../context/GlobalState";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { loading } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      <IncomeExpence />
      <TransactionList />
    </React.Fragment>
  );
};
