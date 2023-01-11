

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
  console.log({cat});
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
 
    console.log(state.cart)

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

  if (action.type === "CART_TOTAL_ITEM") {
console.log("Chill");
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;
      // 25000 + 0 = 25000
      // 10199 + 25000 = 121

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }


  return state;


};

export default CartReducer;
