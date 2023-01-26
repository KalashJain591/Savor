import axios from "axios";
const CartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    // console.log("clicked");
    // console.log(state.cart);
    let { id, price, images, name, userId } = action.payload;
    // console.log(itemData[key]);

    // tackle the existing product


    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id
    );
    // agar product exist krta hai
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id) {
          let newAmount = curElem.Quantity + 1;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          // console.log("hello", newAmount);
          if (userId !== undefined) {
            axios.post(`/cart/updatecart/${userId}`, { productId: id, quantity: newAmount });
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
    else {
      let cartProduct = {
        id: id,
        name: name,
        price: price,
        Quantity: 1,
        images: images[0].imgUrl,
        max: 6,
        total_cost: price
      };
      if (userId !== undefined) {
        axios.post(`/cart/addtocart/${userId}`, { productId: id, quantity: 1 });
      }
      // console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      let { id, userId } = action.payload;
      if (curElem.id === id) {
        console.log("reached");
        let decAmount = curElem.Quantity - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }
        if(userId!==undefined){
        axios.post(`/cart/updatecart/${userId}`,{productId:id, quantity:decAmount});
        }

        return {
          ...curElem,
          Quantity: decAmount,
          total_cost: decAmount * (curElem.price),
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      let { id, userId } = action.payload;
      if (curElem.id === id) {
        // console.log("reached");
        let incAmount = curElem.Quantity + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        if (userId !== undefined) {
          axios.post(`/cart/updatecart/${userId}`, { productId: id, quantity: incAmount });
        }
        return {
          ...curElem,
          Quantity: incAmount,
          total_cost: incAmount * (curElem.price)
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "REMOVE_ITEM") {
    let { id, userId } = action.payload;
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== id
    );
    if (userId !== undefined) {
      axios.get(`/cart/removefromcart/${userId}/${id}`);
    }
    return {
      ...state,
      cart: updatedCart,
    };
  }

  const callapi=async()=>{
    await axios.post("/cart/clearcart",{})
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    // console.log("clearcart")
    // axios.get('/cart/clearcart/');
    
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "TOTAL_ITEMS") {
    let updated = state.cart.reduce((initial, curElem) => {
      initial = initial + curElem.Quantity;
      return initial;
    }, 0);
    return { ...state, total_items: updated };
  }
  if (action.type === "TOTAL_AMOUNT") {

    let updated = state.cart.reduce((initial, curElem) => {
      initial = initial + curElem.total_cost;
      return initial;
    }, 0)
    return { ...state, total_price: updated };
  }
  if (action.type === "FINAL_AMOUNT") {
    // let discount=(state.total_price*5)/100;
    let discount = 0;
    // console.log(state.total_price);
    
    let updated = state.total_price - discount + state.shipping_fee;
    if(state.total_price>=2000){
    updated-=state.shipping_fee;
    return { ...state, final_amount: updated, Discount: discount+80,hurray:1 };}
    else
    return { ...state, final_amount: updated, Discount: discount,hurray:0  };
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
