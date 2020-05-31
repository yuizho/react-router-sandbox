import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";

import Home from "./components/Home";
import Ramens from "./components/Ramens";

import "./App.css";

const App: FC<{}> = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/ramens/:code" component={Ramens}></Route>
        <Route path="/" component={Home}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
