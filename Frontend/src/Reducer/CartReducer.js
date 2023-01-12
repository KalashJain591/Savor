

import { itemData } from '../itemData';


const CartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    console.log("clicked");
    console.log(state.cart);
    let { id, title, Rate, Company, key } = action.payload;
    // console.log(itemData[key]);
   
  // tackle the existing product
 
    
  let existingProduct = state.cart.find(
    (curItem) => curItem.id === id
  );
// agar product exist krta hai
  if (existingProduct) {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === id ) {
        let newAmount = curElem.Quantity + 1;

        if (newAmount >= curElem.max) {
          newAmount = curElem.max;
        }
        return {
          ...curElem,
          Quantity: newAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
else{
    let cartProduct = {
      id: id,
      title: title,
      Rate: Rate,
      Quantity:1,
      image: itemData[key].image,
      max: 6,
      Company: Company,
      total_cost:Rate
    };
    // console.log(state.cart);
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
}
 
if (action.type === "SET_DECREMENT") {
  let updatedProduct = state.cart.map((curElem) => {
   
    if (curElem.id === action.payload) {
      // console.log("reached");
      let decAmount = curElem.Quantity - 1;

      if (decAmount <= 1) {
        decAmount = 1;
      }

      return {
        ...curElem,
        Quantity: decAmount,
        total_cost:decAmount*(curElem.Rate),
      };
    } else {
      return curElem;
    }
  });
  return { ...state, cart: updatedProduct };
}

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log("reached");
        let incAmount = curElem.Quantity + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          Quantity: incAmount,
          total_cost:incAmount*(curElem.Rate)
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
    
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if(action.type==="TOTAL_ITEMS")
  {
    let updated=state.cart.reduce((initial,curElem)=>{
        initial=initial+curElem.Quantity;
        return initial;
    },0);
    return {...state,total_items:updated};
  }
  if(action.type==="TOTAL_AMOUNT"){
    
   let updated=state.cart.reduce((initial,curElem)=>{
    initial=initial+curElem.total_cost;
    return initial;
   },0)
   return {...state,total_price:updated};
  }
  if(action.type==="FINAL_AMOUNT"){
    let discount=(state.total_price*5)/100;
    // console.log(state.total_price);
  let updated=state.total_price-discount+state.shipping_fee;
  return {...state,final_amount:updated,Discount:discount};
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   console.log("hello2");
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { Quantity } = curElem;

  //     initialVal = initialVal +Quantity;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, Quantity } = curElem;

  //     initialVal = initialVal + price * Quantity;
  //     // 25000 + 0 = 25000
  //     // 10199 + 25000 = 121

  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }


  return state;


};

export default CartReducer;
