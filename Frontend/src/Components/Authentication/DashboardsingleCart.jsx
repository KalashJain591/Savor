import React from 'react'

export default function DashboardsingleCart(props) {
  return (
             <tr>
                <th width="25%">{props.productid}</th>
                <th width="25%">{props.productname}</th>
                <td width="2%">:</td>
                <td>{props.productprice}</td>
                <td>
                <a url={props.producturl} className="primary"><i className="fa-solid fa-cart-shopping"></i> Buy Again</a>  
                </td>
              </tr>
  )
}
