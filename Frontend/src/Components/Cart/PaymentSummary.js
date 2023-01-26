import React from 'react'
import { useCartContext } from '../../Context/cart_context';
import './cart.css'
export default function PaymentSummary() {
  const { total_items, total_price, final_amount, shipping_fee, Discount, hurray } = useCartContext();


  return (
    <>
      {
        hurray > 0 &&

        <div className='text-center'>
          <span class=" mx-3  fw-bold" style={{ color: "orange", fontSize: "25px" }}>Hurray!</span><img src="./images/congo.png" height={"50px"} width={"50px"} />
          <p style={{ color: "#2aa8d4a1", fontSize: "23px" }}>Free delivery on  orders above 2000</p>
        </div>
      }

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
            {hurray > 0 && <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Free Delivery
              <div><span className='fs-5 fw-bold me-2 text-dark'>-</span><span className='text-decoration-line-through fw-bold fs-5 text-dark'>{shipping_fee}</span></div>
            </li>}

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
