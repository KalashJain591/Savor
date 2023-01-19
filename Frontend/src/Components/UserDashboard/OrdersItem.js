import React from 'react'

export default function OrdersItem({images, price, Quantity,total_cost, name}) {
    return (
        <>
            <tr className='container-sm container-fluid'>
            <td className="p-0 d-flex  flex-column align-items-center"><img src={images}  alt="product image" style={{ width: "70px", padding: "0px",marginTop:'15px' }} /><div className='fs-5 m-2'>{name}</div>
                <div className='d-sm-none'></div> </td>

             
                <td className="align-middle m-sm-0" value="1">₹{price}</td>
                <td className="align-middle m-sm-0" >{Quantity}</td>
                <td className="align-middle m-sm-0" value="1">₹{total_cost}</td>
            </tr>
        </>
    )
}
