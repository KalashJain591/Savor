import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function ViewOrderComponent(props) {
  
    
    return (
        <>
            <tr className='text-center'>
                <td style={{wordWrap: "normal"}}> Order {props.idx +1}</td>
                <td><NavLink to={`./orderDetails/${props.id}`}> <button className='btn btn-sm'>See Details</button></NavLink></td>
                <td><NavLink to={`./trackorder/${props.status}`}><button className='btn btn-sm'>Track Order</button></NavLink></td>
            </tr>
        </>
    )
}
