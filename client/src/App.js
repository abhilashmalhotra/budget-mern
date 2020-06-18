import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";

// Global Context
import { GlobalProvider } from "./context/GlobalState";
import { Home } from "./containers/Home";
import { AddData } from "./containers/AddData";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddData} />
          <Redirect from="*" to='/' />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
