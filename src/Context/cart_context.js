import { createContext, useReducer, useContext,useEffect} from "react";
import { JSON } from "react-router-dom";
import reducer from "../Reducer/CartReducer";

// import {ItemData} from "../Data/ItemData";
const CartContext = createContext();
const initialState = {

  cart: [],
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  // creating reducer to perform different operations
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart functionality
  const addToCart = (id, title, Rate, Company, key) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, title, Rate, Company, key } });
  };

  const SetDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const SetIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  // every time the cart changes , the useffect hook invokes and the 2 functions get executed
  useEffect(() => {
    localStorage.setItem("mycart",JSON.stringify(state.cart));
    console.log("Hey use effect")
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  


  return <CartContext.Provider value={{ ...state, addToCart, SetIncrease, SetDecrease, removeItem }}>
    {children}
  </CartContext.Provider>

}
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };