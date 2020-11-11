import React from "react";
import ReactDOM from "react-dom";
import store from './redux/store';
/**
 * ? why do we include {} while importing BrowerRouter component
 */
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  /**
   * *We wrap our app component around browserRouter component so that we can access all the functionality of the browserRouter inside App
   * we wrap our application between the provider component that we get from react-redux so that the entire state would be available to the whole application
   */
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
