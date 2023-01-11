import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// import axios from "axios";
import reducer from "../Reducer/ProductReducer";
const AppContext = createContext();
// const API = "http://localhost:3000/Product.json";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/Product.json");
    const products = await res.json();
    // console.log(products);
    dispatch({ type: "SET_API_DATA", payload: products });

  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
