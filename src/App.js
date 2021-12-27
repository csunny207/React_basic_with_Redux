import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calc from './containers/Calc';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routing /> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              React Assignment
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calc">
                  Calculator
                </Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={ProductListing} />
          <Route path="/calc" component={Calc}></Route>
      </Router>
    </div>
  );
}

export default App;
