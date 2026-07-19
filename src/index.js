import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import NavigationProvider from "./PageComponent/NavigationProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/cherish-cart-client">
    <NavigationProvider/>
    <App />
  </BrowserRouter>
);
