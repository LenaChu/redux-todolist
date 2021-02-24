import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import iTunesReducer from "./reducer/Reducer";
import { BrowserRouter } from "react-router-dom";

let store = createStore(iTunesReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

store.subscribe(() => console.log(store.getState()));
