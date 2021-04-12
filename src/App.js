import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
