import React from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa';
const CartAmountToggler = ({Quantity,SetDecrease,SetIncrease}) => {

    // console.log(id);
  return (
    <div className="cart-button">
    <div className="amount-toggle">
      <button onClick={() => SetDecrease()}>
        <FaMinus />
      </button>
      <div className="amount-style">{Quantity}</div>
      <button onClick={() => SetIncrease()}>
        <FaPlus />
      </button>
    </div>
  </div>
);
  
}

export default CartAmountToggler
