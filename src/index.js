import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to measure performance with analytics tools like Google Analytics,
// you can use the reportWebVitals() function. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
