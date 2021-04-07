import "./App.css";
import React from "react";
import Form from "./Form";
import Login from "./LoginForm";
import Dashboard from "./Dashboard";
//import Hello1 from "./hello";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//import { FirebaseDatabaseProvider } from "@react-firebase/database";
//import firebase1 from "./firebase";
//import firebase from "firebase";
import { AuthProvider } from "./contexts/authcontext";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/Login" exact component={Login} />
            <PrivateRoute path="/Dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
