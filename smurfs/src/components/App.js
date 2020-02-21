import React from "react";
import Main from "./Main";
//redux
import { connect } from "react-redux";
import { getData } from "../actions";
import { postData } from "../actions";
import { FormikForm } from "../formik/Form";
//import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = props => {
  console.log(props);
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
          <Route exact path="/">
            <Main getData={props.getData} smurfs={props.smurfs} />
          </Route>
          <Route path="/add-smurfs">
            <FormikForm postData={props.postData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
const MSTP = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(MSTP, { getData, postData })(App);
