import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MoralisProvider } from "react-moralis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MoralisProvider
        serverUrl="https://k6vyq6jzjfn0.usemoralis.com:2053/server"
        appId="lCcVz5Jm7CmtUoAt4ZI5Qt5kWCZQEfGTpPXfwMuD"
      >
        <App />
      </MoralisProvider>
    </React.StrictMode>
  </BrowserRouter>
);
