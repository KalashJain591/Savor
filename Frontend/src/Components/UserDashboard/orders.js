import React, { useState } from 'react'
import { useCartContext } from '../../Context/cart_context';
import OrdersItem from './OrdersItem';

export default function Orders() {
    const {cart}=useCartContext();

    const[window,setwindow]=useState(cart);
    // change should be done in the first if condition id (cart && past && cancelle ==0) then renderd the No orders component
    if (window.length === 0) {
        return (<>
         <h1 className='text-center'>Your Orders</h1>
         <hr/>
            <div className='d-flex justify-content-evenly'>
                <p className='btn m-1' style={{}} onClick={()=>setwindow(cart)}>Past Orders</p>
                <p className=' btn m-1' style={{}} onClick={()=>setwindow(cart)}>Current Orders</p>
                <p className='btn m-1' style={{}} onClick={()=>setwindow(cart)}>Cancelled Orders</p>
            </div>
            <hr/>
        <h1 className='text-center fs-1' style={{height:"18rem", display:"flex", alignItems:"center", justifyContent:"center" }} >No Orders</h1>
        </>)}

    return (
        <div className='container'>
            <h1 className='text-center mb-4'>Your Orders</h1>
          
            <div className='d-flex justify-content-evenly'>
                <p className='btn m-1' style={{}} onClick={()=>setwindow(cart)}>Past Orders</p>
                <p className=' btn m-1' style={{}} onClick={()=>setwindow(cart)}>Current Orders</p>
                <p className='btn m-1' style={{}} onClick={()=>setwindow(cart)}>Cancelled Orders</p>
            </div>
            <hr/>
           
            <div className=" container-fluid  col-12 col-lg-8 table-responsive mb-5">
            <table className="table text-center mb-0">
            <thead className="text-dark">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            
              {window.length && window.map(Element => (
                <OrdersItem key={Element.id} {...Element} />
              ))}
              
            </tbody>
          </table>
        </div>
        </div>
    )
}
