import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import './cart.css';
const CartAmountToggler = ({ Quantity, SetDecrease, SetIncrease }) => {

  // console.log(id);
  return (
    <div className="cart-button">
      <div className=" d-flex flex-row justify-content-evenly">
        <button onClick={() => SetDecrease()} className="toggler">
          <p className="toggler" style={{

            fontSize: "2rem"
          }} >-</p>
        </button>
        <div className="amount-style mt-2" style={{ fontSize: "24px" }}>{Quantity}</div>
        <button onClick={() => SetIncrease()} className='toggler'>
          <p className='toggler' style={{

            fontSize: "2rem"
          }}>+</p>
        </button>
      </div>
    </div>
  );

}

export default CartAmountToggler
