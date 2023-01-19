import React from 'react'
import { useCartContext } from '../../Context/cart_context';
import { FaTrash } from 'react-icons/fa';

import CartAmountToggler from './CartAmountToggler';

export default function CartItem({id, price, images, name, total_cost, Quantity }) {
    const { removeItem, SetDecrease, SetIncrease } = useCartContext();
    return (
        <>
            <tr>
            <td className="p-0 d-flex  flex-column align-items-center"><img src={images}  alt="product image" style={{ width: "70px", padding: "0px",marginTop:'15px' }} /><div className='fs-5 m-2'>{name}</div>
                <div className='d-sm-none'><CartAmountToggler  Quantity={Quantity} id={id} SetDecrease={() => SetDecrease(id)}
                    SetIncrease={() => SetIncrease(id)} /></div> </td>

                {/* <td className="align-middle "><img src={images}  className='m-0 ' alt="" style={{ width: "70px", padding: "0px", margin:"10px"}} /> {name}</td> */}
                {/* <td className="align-middle d-sm-table-cell d-none" value="1">{name}</td> */}
                <td className="align-middle" value="1">₹{price}</td>

                <td className="d-none d-sm-table-cell align-middle p-0"><CartAmountToggler Quantity={Quantity} id={id} SetDecrease={() => SetDecrease(id)}
                    SetIncrease={() => SetIncrease(id)} /> </td>
                <td className="align-middle" value="1">₹{total_cost}</td>
                <td className="align-middle p-0"> <FaTrash onClick={() => removeItem(id)} /></td>
            </tr>
        </>
    )
}
