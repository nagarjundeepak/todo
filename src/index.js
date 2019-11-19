import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.scss";
import App from "./app";
import store from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
