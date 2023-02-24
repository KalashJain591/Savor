import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../Reducer/WishListReducer";

// import {ItemData} from "../Data/ItemData";
const WishListContext = createContext();

// to prevent the data loss on refresh/rendering ,we use local storage to temp store the data
const getLocalCartData = () => {
  let locaCartData = localStorage.getItem("kalashCart");
  if (locaCartData === null) {
    return [];
  }
  else {
    return JSON.parse(locaCartData);
  }

}
const initialState = {
  wishList: [],
  // cart: getLocalCartData(),
};
const WishListProvider = ({ children }) => {
  // creating reducer to perform different operations
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart functionality
  const addToWishList = (id, price, images, name) => {
    dispatch({ type: "ADD_TO_WISH_LIST", payload: { id, price, images, name } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  const clearWishList = () => {
    dispatch({ type: "CLEAR_WISH_LIST" });
  }
  // to add data in local storage
  // using set method
  // useEffect(() => {
  //   // localStorage.setItem("kalashCart", JSON.stringify(state.cart));
  // }, [state.wishList])

  return <WishListContext.Provider value={{ ...state, addToWishList, removeItem, clearWishList }}>
    {children}
  </WishListContext.Provider>

}
const useWishListContext = () => {
  return useContext(WishListContext);
};

export { WishListProvider, useWishListContext };