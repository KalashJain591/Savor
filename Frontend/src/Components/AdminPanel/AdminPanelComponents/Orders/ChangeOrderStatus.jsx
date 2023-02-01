import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function ChangeOrderStatus(props) {
  const [order_status, setorderstatus] = useState(props.order_status);
  const callapi = async () => {
    // console.log(props.orderId , order_status);
    await axios.post(`/admin/editorderstatus/${props.orderId}`, { order_status });
  }
  useEffect(() => {
    callapi();
  }, [order_status]);
  const handleInput = (e) => {
    setorderstatus(e.target.value);
  }
  return (
    <div>
      <div style={{ width: "90%" }}>
        <p>Shipping Status</p>
        <select className="form-select" placeholder='choose...' value={order_status} onChange={handleInput} required>
          <option>Placed</option>
          <option>Processed</option>
          <option>Shipped</option>
          <option>On the way</option>
          <option>Delivered</option>
        </select>
      </div>
    </div>
  )
}
