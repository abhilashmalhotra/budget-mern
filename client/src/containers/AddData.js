import React, { useContext } from "react";

import { AddTransaction } from "../components/AddTransaction";
import { GlobalContext } from "../context/GlobalState";
import { Loader } from "../components/Loader";

export const AddData = () => {
  const { loading } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      <AddTransaction />
    </React.Fragment>
  );
};
