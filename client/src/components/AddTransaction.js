import React, { useState, useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const history = useHistory();
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const firstRender = useRef(true);

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  const [disable, setDisabled] = useState(true);
  const [textError, setTextError] = useState(null);
  const [amountError, setAmountError] = useState(null);

  useEffect(() => {
    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // in a call to the validation function which returns true/false
    setDisabled(formValidation());
  }, [text, amount]);

  // here we run any validation, returning true/false
  const formValidation = () => {
    if (text === "") {
      setTextError("Text can not be blank!");
      return true;
    }
    if (amount === "") {
      setAmountError("Amount can not be blank!");
      return true;
    }
    setTextError(null);
    setAmountError(null);
    return false;
  };

  const saveTransaction = (event) => {
    event.preventDefault();
    const newTrasaction = {
      text,
      amount: +amount,
    };
    addTransaction(newTrasaction);
    setText("");
    setAmount("");
    history.push("/");
  };

  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={saveTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
          {textError && <span className="form-error">{textError}</span>}
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          {amountError && <span className="form-error">{amountError}</span>}
        </div>
        <button className="btn" disabled={disable}>
          Add transaction
        </button>
      </form>
    </React.Fragment>
  );
};
