import React from 'react'
import { useCartContext } from '../../Context/cart_context';
import { FaTrash } from 'react-icons/fa';

import CartAmountToggler from './CartAmountToggler';

export default function CartItem({id, price, images, name, total_cost, Quantity }) {
    const { removeItem, SetDecrease, SetIncrease } = useCartContext();
    return (
        <>
            <tr>
                <td className="align-middle "><img src={images}  className='m-0 ' alt="" style={{ width: "70px", padding: "0px", margin:"10px"}} /> {name}</td>
                <td className="align-middle" value="1">₹{price}</td>

                <td className="align-middle"><CartAmountToggler Quantity={Quantity} id={id} SetDecrease={() => SetDecrease(id)}
                    SetIncrease={() => SetIncrease(id)} /> </td>
                <td className="align-middle" value="1">₹{total_cost}</td>
                <td className="align-middle"> <FaTrash onClick={() => removeItem(id)} /></td>
            </tr>
        </>
    )
}
