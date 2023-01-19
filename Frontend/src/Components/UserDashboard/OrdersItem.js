import React from 'react'

export default function OrdersItem({images, price, Quantity,total_cost, name}) {
    return (
        <>
            <tr className='container-sm container-fluid'>
                <td className="p-0"><img src={images}  alt="product image" style={{ width: "70px", padding: "0px",marginTop:'15px' }} /><div className='d-block my-1 d-sm-none'>{name}</div></td>
                <td className="align-middle d-sm-table-cell d-none" value="1">{name}</td>
                <td className="align-middle m-sm-0" value="1">₹{price}</td>
                <td className="align-middle m-sm-0" >{Quantity}</td>
                <td className="align-middle m-sm-0" value="1">₹{total_cost}</td>
            </tr>
        </>
    )
}
