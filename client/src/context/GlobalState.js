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
    dispatch({ type: "LOADING_START" });
    try {
      const res = await axios.get("/api/v1/transaction");
      if (res.data.status === 'success') {
        dispatch({
          type: "GET_TRANSACTION",
          payload: res.data.data.transactions,
        });
        dispatch({ type: "LOADING_END" });
      }

    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: "Somthing went wrong!",
      });
      dispatch({ type: "LOADING_END" });
    }
  }

  async function deleteTransaction(id) {
    dispatch({ type: "LOADING_START" });
    try {
      await axios.delete(`/api/v1/transaction/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
      dispatch({ type: "LOADING_END" });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: "Somthing went wrong!",
      });
      dispatch({ type: "LOADING_END" });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: "LOADING_START" });
    try {
      const res = await axios.post(
        "/api/v1/transaction",
        transaction,
        config
      );
      if (res.data.status === 'success') {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: res.data.data.transation,
        });
        dispatch({ type: "LOADING_END" });
      }

    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: "Somthing went wrong!",
      });
      dispatch({ type: "LOADING_END" });
    }
  }

  return (
    < GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }
      }
    >
      {children}
    </GlobalContext.Provider >
  );
};
