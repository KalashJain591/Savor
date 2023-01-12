import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/cart_context";
import { FilterContextProvider } from "./Context/FilterContext";
import { AppProvider } from "./Context/ProductContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
             <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
