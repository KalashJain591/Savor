import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducer/CartReducer";

// import {ItemData} from "../Data/ItemData";
const CartContext = createContext();
const placed=1;
// to prevent the data loss on refresh/rendering ,we use local storage to temp store the data
const getLocalCartData = () => {
  let locaCartData = localStorage.getItem("SavorCart");
  if (locaCartData === null) {
    return [];
  }
  else {
    return JSON.parse(locaCartData);
  }

}
const initialState = {
  //  cart:[],
  cart: getLocalCartData(),
  total_items: 0,
  total_price: 0,
  shipping_fee: 50,
  final_amount:0,
  Discount:0,
  hurray:0,
  city:0,
};

const CartProvider = ({ children }) => {
  // creating reducer to perform different operations
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart functionality
  const addToCart = (id, price, images, name, userId,quantity,Weight,unit) => {
    dispatch({ type: "ADD_TO_CART", payload: {id, price, images, name, userId ,quantity,Weight,unit} });
  };

  const SetDecrease = (id, userId) => {
    dispatch({ type: "SET_DECREMENT", payload: {id,userId} });
  };

  const SetIncrease = (id, userId) => {
    dispatch({ type: "SET_INCREMENT", payload: {id,userId} });
  };

  const removeItem = (id,userId) => {
    dispatch({ type: "REMOVE_ITEM", payload: {id,userId} });
  }
   
  const clearCart=()=>{
  dispatch({type:"CLEAR_CART"});
  }

  // function to set custom discount 
  // disc=delivery charge , place =according to place
const setdiscount=(disc,place)=>{
  // console.log(place);
dispatch({type:"SET_DISCOUNT",payload:{disc,place}});
}

  // to add data in local storage
  // using set method
  useEffect(() => {
    dispatch({type:"TOTAL_ITEMS"});
    dispatch({type:"TOTAL_AMOUNT"});
    dispatch({type:"FINAL_AMOUNT"});
    localStorage.setItem("SavorCart", JSON.stringify(state.cart));
  }, [state.cart,state.shipping_fee])
  
  return <CartContext.Provider value={{ ...state, placed,addToCart, SetIncrease, SetDecrease, removeItem ,clearCart,setdiscount}}>
    {children}
  </CartContext.Provider>

}
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };