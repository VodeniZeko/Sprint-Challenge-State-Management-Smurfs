import React from "react";
import Main from "./Main";
import Form from "../formik/Form";

//import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = props => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">See smurfs</Link>
            </li>
            <li>
              <Link to="/add-smurfs">Add smurfs</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/add-smurfs">
            <Form />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
