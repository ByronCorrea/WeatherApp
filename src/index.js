import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./container/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
