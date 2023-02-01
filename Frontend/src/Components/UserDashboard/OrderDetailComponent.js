import React from 'react'

export default function OrderDetailComponent(props) {
 const data=props.val
 let total=data.price*data.quantity
    return (
    <div>
        <tr className='text-center'>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.quantity}</td>
            <td>{total}</td>
        </tr>
      
    </div>
  )
}
