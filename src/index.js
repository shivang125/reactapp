import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { useAddress } from "./Context/AddressContext";
import { useAuth } from "./Context/AuthContext";
import { useCart } from "./Context/CartContext";
import { useData } from "./Context/DataContext";
import { useWish } from "./Context/WishListContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

export { useAddress, useAuth, useCart, useData, useWish };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
