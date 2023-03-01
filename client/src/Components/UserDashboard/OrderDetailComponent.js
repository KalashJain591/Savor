import React from 'react'

export default function OrderDetailComponent(props) {
 console.log(props);
 let total=props.val.price*props.val.quantity
    return (
        <tr className='text-center'>
        {/* { console.log("props ka val",props)} */}
            <td>{props.val.name}</td>
            <td>{props.val.price}</td>
            <td>{props.val.quantity}</td>
            <td>{total}</td>
            
        </tr>
      
  )
}
