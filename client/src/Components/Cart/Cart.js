
// import styled from "styled-components";
import { useCartContext } from '../../Context/cart_context';
import { NavLink } from 'react-router-dom'
import CartItem from './CartItem';
import AuthContext from '../../Context/auth_context';
import PaymentSummary from './PaymentSummary';
import { useContext, useEffect, useState } from 'react';

export default function Cart() {
  
  const { userId, loggedIn } = useContext(AuthContext);
  const { cart, clearCart, total_price } = useCartContext();

  useEffect(() => {
    if(loggedIn){
      const lcd=localStorage.getItem("SavorCart");
      const lcdsz =Object.keys(lcd).length/185;
      if(lcdsz!==cart.length){
        window.location.reload()
      }  
    }
  }, [])
  

  let ok = 0;
  if (total_price >= 500)
    ok = 1;
  // console.log(ok);

  if (cart.length === 0) {
    return (<><h1 className='text-center fs-1' style={{ height: "10rem", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "cursive" }} >Oop's,<br />No Item in Your Cart</h1>
      <div className='text-center mb-2'>
        <img className='img-fluid' src="images/emptyCart2.png" />
      </div>
      <div className='text-center'>
        <NavLink to="/products ">
          <button className='btn btn-lg my-3 fs-2' style={{ backgroundColor: "orange" }}>Fill Your Cart</button>
        </NavLink></div>
    </>)
  }

  const handleSubmit=(e)=>{
    localStorage.setItem("Buynow", "c:" + userId);
    if(!ok){
      alert("Minimum Cart value should be atleast ₹500")
      e.preventDefault();
    }
  }
  
  return (
    <>
      <h1 className='m-5'>Your Cart<hr></hr></h1>
      <div className="row container-fluid">
        <div className=" container-fluid  col-12 col-lg-8 table-responsive mb-5">
          <table className="table text-center mb-0">
            <thead className="text-dark">
              <tr>

                <th className='d-sm-none'>Item</th>
                <th className=' d-none d-sm-block'>Item</th>
                <th>Price</th>
                <th className=' d-none d-sm-block'>Quantity</th>
                <th>Total</th>
                {/* <th>Weight</th> */}
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(Element => (
                <CartItem key={Element.id} {...Element} />
              ))}
            </tbody>
          </table>
          <div className="d-flex bd-highlight mb-3">
            <NavLink to="/">  <button className=" btn btn-md btn-success m-2 " style={{ backgroundColor: "#13C50C" }}>Continue Shopping </button></NavLink>
            <button className="btn btn-md btn-  ms-auto m-2 " style={{ backgroundColor: "gray" }} onClick={clearCart.bind(this)}>Clear Cart </button>
          </div>
        </div>
        <div className="  d-flex flex-column col-12 col-lg-4">
          <PaymentSummary />
          <div className="align-self-center m-4">
            {loggedIn ? <NavLink to="./checkout" onClick={handleSubmit}>
              <button type="button" className="btn btn-primary  btn-lg ">
                Proceed for Payment
              </button>
            </NavLink> : <NavLink to="/login">
              <button type="button" className="btn btn-primary  btn-lg ">
                Proceed for Payment
              </button>
            </NavLink>}
          </div>
        </div>
      </div>

    </>

  )
}

