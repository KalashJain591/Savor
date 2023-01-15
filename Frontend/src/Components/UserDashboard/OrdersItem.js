import React from 'react'

export default function OrdersItem({title, Rate, Quantity,total_cost}) {
    return (
        <>
            <tr>
                <td className="align-middle "><img src="/images/dal_image1.jpg" class='m-0 ' alt="" style={{ width: "70px", padding: "0px" }} /> {title}</td>
                <td className="align-middle" value="1">₹{Rate}</td>
                <td className="align-middle" >{Quantity}</td>
                <td className="align-middle" value="1">₹{total_cost}</td>
            </tr>
        </>
    )
}
