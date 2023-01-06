import React from 'react'
import { itemData } from '../itemData';
const CartReducer = (state,action)=>  {
  if(action.type ==="ADD_TO_CART"){
    let{id,title,Rate,Company,key}=action.payload;
    console.log(itemData[key]);

    const cartProduct={
      id:itemData[key].id,
      name:itemData[key].title,
      price:Rate,
      image:itemData[key].image,
      max:6   
    }
    return [...state.cart,state.cartProduct]
  }
  return state;
  
  
};

export default CartReducer
