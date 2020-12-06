import React from "react";
import ReactDOM from "react-dom";
import {persistor} from "./redux/store";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
/**
 * ? why do we include {} while importing BrowerRouter component
 */
import { Provider } from "react-redux";
 import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";


ReactDOM.render(
  /**
   * *We wrap our app component around browserRouter component so that we can access all the functionality of the browserRouter inside App
   * we wrap our application between the provider component that we get from react-redux so that the entire state would be available to the whole application
   */
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
