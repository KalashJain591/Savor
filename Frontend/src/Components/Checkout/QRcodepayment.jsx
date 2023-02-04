import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./QrPayment.css"
export default function QRcodepayment() {
    const navigate=useNavigate();
  return (
    <div className="payment-section">
    <div className='container-payment'>
        <img src="/images/qrcode.jpeg" alt='payment' width={"100%"}/>
        <a style={{margin:"15%", padding:"20px"}} target='_blank' href="https://web.whatsapp.com/send?phone=919827141324&text=Hi%20!" onClick={()=>{navigate("/UserDashboard/orders")}} className='btn my-4'>Submit Payment Recipt</a>
    </div>
    </div>
      
  )
}
