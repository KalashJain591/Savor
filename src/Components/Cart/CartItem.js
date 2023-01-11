import React from 'react'
import { useCartContext } from '../../Context/cart_context';


import CartAmountToggler from './CartAmountToggler';

export default function CartItem({ title, Rate, Quantity, id,total_cost }) {
    const { removeItem, SetDecrease, SetIncrease } = useCartContext();
    return (
        <>
            <tr>
                <td className="align-middle "><img src="/images/dal_image1.jpg" alt="" style={{ width: "50px", padding: "5px" }} /> {title}</td>
                <td className="align-middle" value="1">{Rate}</td>

                <td className="align-middle"><CartAmountToggler Quantity={Quantity} id={id} SetDecrease={() => SetDecrease(id)}
                    SetIncrease={() => SetIncrease(id)} /> </td>
                <td className="align-middle" value="1">{total_cost}</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={()=>removeItem(id)}>☒</button></td>
            </tr>
        </>
    )
}
