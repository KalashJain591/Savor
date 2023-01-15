import { createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../Reducer/ProductReducer";
const AppContext = createContext();
const API = "/product";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async () => {
    dispatch({ type: "SET_LOADING"});
    try{
      const res = await fetch("/product");
      const products = await res.json();
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch(error){
      dispatch({ type: "API_ERROR" });
    }
  };

  //2nd data fetching
  const getSingleProduct = async(url) =>{
    dispatch({ type: "SET_LOADING"});
    try{
      const res = await fetch(url);
      const singleProduct = await res.json();
      // console.log(products);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct});
    } catch(error){
      dispatch({ type: "API_ERROR" });
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct, }}>{children}</AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
