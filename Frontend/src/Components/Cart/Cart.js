
// import styled from "styled-components";
import { useCartContext } from '../../Context/cart_context';
import { NavLink } from 'react-router-dom'
import CartItem from './CartItem';

import PaymentSummary from './PaymentSummary';
export default function Cart() {
  const { cart, clearCart, } = useCartContext();
  if (cart.length === 0) {
    return (<><h1 className='text-center fs-1'>No Item in Your Cart</h1>
    </>)
  }
  return (
    <>
      <h1 className='m-5'>Your Cart<hr></hr></h1>
      <div className="row container-fluid">
        <div className=" container-fluid  col-12 col-lg-8 table-responsive mb-5">
          <table className="table text-center mb-0">
            <thead className="text-dark">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(Element => (
                <CartItem key={Element.id} {...Element} />
              ))}
            </tbody>
          </table>
          <div class="d-flex bd-highlight mb-3">
            <NavLink to="/">  <button class=" btn btn-md btn-success m-2 ">Continue Shopping </button></NavLink>
            <button class="btn btn-md btn-success  ms-auto m-2 " onClick={clearCart.bind(this)}>Clear Cart </button>
          </div>
        </div>
        <div className="  d-flex flex-column col-12 col-lg-4">
        <PaymentSummary />
        <div className="align-self-center m-4">
          <NavLink to="./checkout"> <button type="button" className="btn btn-primary  btn-lg ">
            Proceed for Payment
          </button></NavLink>
          </div>
        </div>
      </div>

    </>

  )
}

