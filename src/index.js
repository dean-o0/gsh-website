// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Global CSS imports
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./assets/css/animate.css";
import "./assets/css/style.css";
import "./assets/css/animate-header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // this includes Popper

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
