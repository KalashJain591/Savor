import { createContext, useReducer,useContext } from "react";
import reducer from "../Reducer/CartReducer";
import itemData from "../itemData";
// import {ItemData} from "../Data/ItemData";
const CartContext=createContext();
const initialState = {
   
    cart: [],
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
  };
const CartProvider=({children})=>{
    // creating reducer to perform different operations
    const[state,dispatch] = useReducer(reducer,initialState);
    
    // add to cart functionality
    const addToCart = (id,title,Rate,Company,key) =>{
      dispatch({ type: "ADD_TO_CART", payload: {id, title,Rate,Company,key }});
    };
     

     
    return <CartContext.Provider value={{...state,addToCart}}>
      {children}
      </CartContext.Provider>

}
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };