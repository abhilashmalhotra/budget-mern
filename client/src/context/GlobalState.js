import React, { useReducer, createContext } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
  error: null,
  loading: false,
};

// create context
export const GlobalContext = createContext(initialState);

// global provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transaction");
      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data.data.transactions,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: "Somthing went wrong",
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transaction/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: "Somthing went wrong",
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/v1/transaction",
        transaction,
        config
      );
      console.log(res.data.data);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data.transation,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: "Somthing went wrong",
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
