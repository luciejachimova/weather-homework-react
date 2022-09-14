import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import WebVitals from "./WebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

WebVitals();
