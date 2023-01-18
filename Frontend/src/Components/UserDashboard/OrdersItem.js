import React from 'react'

export default function OrdersItem({images, price, Quantity,total_cost, name}) {
    return (
        <>
            <tr>
                <td className="align-middle "><img src={images} className='m-0 ' alt="" style={{ width: "70px", padding: "0px" }} /> {name}</td>
                <td className="align-middle" value="1">₹{price}</td>
                <td className="align-middle" >{Quantity}</td>
                <td className="align-middle" value="1">₹{total_cost}</td>
            </tr>
        </>
    )
}
