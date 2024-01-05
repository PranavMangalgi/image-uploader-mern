import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ImageContextProvider from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImageContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImageContextProvider>
  </React.StrictMode>,
);
