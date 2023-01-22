import React from 'react'
import { useCartContext } from '../../Context/cart_context';

export default function SingleProductSummary(props) {
    const {   shipping_fee, Discount } = useCartContext();
const total_items =1;
const total_price =props.price;
const final_amount=props.price+shipping_fee;
  return (
    <>
     
          <div className="card p-0 mb-2 container-fluid">
            <div className="card-header ">
              <h5 className="mb-0">Your Order Summary</h5>
            </div>
            <div className="card-body d-flex flex-column   ">
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Price ({total_items} items)
                  <span>+ {total_price}</span>
                </li>
                {/* <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Discount (5%)
                  <span>- ₹{Discount}</span>
                </li> */}


                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Delivery Charges
                  <span>+ {shipping_fee}</span>
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong><h3>Total Amount</h3></strong>
                    <strong>
                      <p className="mb-0">(GST included )</p>
                    </strong>
                  </div>
                  <span><strong><h4>₹{final_amount}</h4></strong></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 text-success">
                  <strong className='fs-2'>You will save ₹ {Discount} on this order</strong>
                </li>
              </ul>
            </div>
          </div>
        
    </>
  )
}
