import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((a, b) => a + b.amount, 0);
  let location = useLocation();
  return (
    <React.Fragment>
      <div className="top-header">
        <div className="balance">
          <h4>Your Balance</h4>
          <h1>${total.toFixed(2)}</h1>
        </div>
        <div className="link">
          {location.pathname === "/" ? (
            <NavLink to="/add" className="btn btn-link">
              Add Transaction
            </NavLink>
          ) : (
            <NavLink to="/" className="btn btn-link">
              Back to home
            </NavLink>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
