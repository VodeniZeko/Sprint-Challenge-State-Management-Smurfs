import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//import redux stuff
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//import the state
import { reducer } from "./reducers/";

//create the store and pass it to the provider
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
