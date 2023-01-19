import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import './cart.css';
const CartAmountToggler = ({ Quantity, SetDecrease, SetIncrease }) => {

  // console.log(id);
  return (
    <div className="cart-button">
      <div className=" d-flex flex-row justify-content-center ">
        <button onClick={() => SetDecrease()} className="toggler px-2">
          <p className="toggler fs-sm-4" style={{
            fontSize: "2rem"
          }} >-</p>
        </button>
        <div className="amount-style mt-2 px-3" style={{ fontSize: "24px" }}>{Quantity}</div>
        <button onClick={() => SetIncrease()} className='toggler'>
          <p className='toggler px-2' style={{
            fontSize: "2rem"
          }}>+</p>
        </button>
      </div>
    </div>
  );

}

export default CartAmountToggler
