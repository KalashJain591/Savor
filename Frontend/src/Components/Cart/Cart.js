
// import styled from "styled-components";
import { useCartContext } from '../../Context/cart_context';
import { NavLink } from 'react-router-dom'
import CartItem from './CartItem';
export default function Cart() {
  const { cart, total_items, total_price, clearCart,final_amount,shipping_fee,Discount } = useCartContext();
  if(cart.length===0)
  {
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
        <div className="  col-12 col-lg-4">
          <div className="card p-0 container-fluid">
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
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Discount (5%)
                  <span>- ₹{Discount}</span>
                </li>
                

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
              <div className="align-self-center m-4">
                <button type="button" className="btn btn-primary  btn-md ">
                  Proceed for Payment
                </button></div>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}
// const EmptyDiv = styled.div`
//   display: grid;
//   place-items: center;
//   height: 50vh;

//   h3 {
//     font-size: 4.2rem;
//     text-transform: capitalize;
//     font-weight: 300;
//   }
// `;

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .grid-four-column {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   .grid-five-column {
//     grid-template-columns: repeat(4, 1fr) 0.3fr;
//     text-align: center;
//     align-items: center;
//   }
//   .cart-heading {
//     text-align: center;
//     text-transform: uppercase;
//   }
//   hr {
//     margin-top: 1rem;
//   }
//   .cart-item {
//     padding: 3.2rem 0;
//     display: flex;
//     flex-direction: column;
//     gap: 3.2rem;
//   }

//   .cart-user--profile {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 1.2rem;
//     margin-bottom: 5.4rem;

//     img {
//       width: 8rem;
//       height: 8rem;
//       border-radius: 50%;
//     }
//     h2 {
//       font-size: 2.4rem;
//     }
//   }
//   .cart-user--name {
//     text-transform: capitalize;
//   }
//   .cart-image--name {
//     /* background-color: red; */
//     align-items: center;
//     display: grid;
//     gap: 1rem;
//     grid-template-columns: 0.4fr 1fr;
//     text-transform: capitalize;
//     text-align: left;
//     img {
//       max-width: 5rem;
//       height: 5rem;
//       object-fit: contain;
//       color: transparent;
//     }

//     .color-div {
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       gap: 1rem;

//       .color-style {
//         width: 1.4rem;
//         height: 1.4rem;

//         border-radius: 50%;
//       }
//     }
//   }

//   .cart-two-button {
//     margin-top: 2rem;
//     display: flex;
//     justify-content: space-between;

//     .btn-clear {
//       background-color: #e74c3c;
//     }
//   }

//   .amount-toggle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2.4rem;
//     font-size: 1.4rem;

//     button {
//       border: none;
//       background-color: #fff;
//       cursor: pointer;
//     }

//     .amount-style {
//       font-size: 2.4rem;
//       color: ${({ theme }) => theme.colors.btn};
//     }
//   }

//   .remove_icon {
//     font-size: 1.6rem;
//     color: #e74c3c;
//     cursor: pointer;
//   }

//   .order-total--amount {
//     width: 100%;
//     margin: 4.8rem 0;
//     text-transform: capitalize;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-items: flex-end;

//     .order-total--subdata {
//       border: 0.1rem solid #f0f0f0;
//       display: flex;
//       flex-direction: column;
//       gap: 1.8rem;
//       padding: 3.2rem;
//     }
//     div {
//       display: flex;
//       gap: 3.2rem;
//       justify-content: space-between;
//     }

//     div:last-child {
//       background-color: #fafafa;
//     }

//     div p:last-child {
//       font-weight: bold;
//       color: ${({ theme }) => theme.colors.heading};
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-five-column {
//       grid-template-columns: 1.5fr 1fr 0.5fr;
//     }
//     .cart-hide {
//       display: none;
//     }

//     .cart-two-button {
//       margin-top: 2rem;
//       display: flex;
//       justify-content: space-between;
//       gap: 2.2rem;
//     }

//     .order-total--amount {
//       width: 100%;
//       text-transform: capitalize;
//       justify-content: flex-start;
//       align-items: flex-start;

//       .order-total--subdata {
//         width: 100%;
//         border: 0.1rem solid #f0f0f0;
//         display: flex;
//         flex-direction: column;
//         gap: 1.8rem;
//         padding: 3.2rem;
//       }
//     }
//   }
// `;
