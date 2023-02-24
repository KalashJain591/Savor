import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function ChangeOrderStatus(props) {
  const [payment_status,setpaymentstatus]=useState(props.payment_status); 
  const callapi=async()=>{
    // console.log(props.orderId , order_status);
    await axios.post(`/admin/editpaymentstatus/${props.orderId}`,{payment_status});   
  } 
  useEffect(() => {
    callapi();
   }, [payment_status]);
   const handleInput = (e) => {
     setpaymentstatus(e.target.value);
   }
return (
    <div>
      <div style={{width:"90%"}}>
        <p>Transaction Status</p>
          <select className="form-select" placeholder='choose...' value={payment_status} onChange={handleInput} required>
              <option>Pending</option>
              <option>Failed</option>
              <option>Completed</option>
          </select>
      </div>
    </div>
  )
}
