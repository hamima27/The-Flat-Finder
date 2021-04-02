import "./App.css";
import React from "react";
import Form from "./Form";
import Login from "./loginForm";
//import Hello1 from "./hello";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
