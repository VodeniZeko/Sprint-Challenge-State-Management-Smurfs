import React, { Component } from "react";
//import redux stuff
import { connect } from "react-redux";
import { getData } from "../actions/";
//import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div className="App">
      <button onClick={handleGetData}>hit me</button>
      {props.smurfs.map(lilGuy => (
        <div>
          <h1>{lilGuy.name}</h1>
          <h1>{lilGuy.age}</h1>
          <h1>{lilGuy.height}</h1>
        </div>
      ))}
    </div>
  );
};

const MSTP = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(MSTP, { getData })(App);
