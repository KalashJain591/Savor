import React from 'react'

export default function AdditionalServices() {
  return (
    <div className='container my-5'>
    <div className=" row align-items-center">
    <div className="col-lg-4 col-12 text-center border-0 rounded-3">
        <img src="/images/deliveryicon.png" alt='img'></img>
      <p>Fast delivery</p>
    </div>
  
    <div className="col-lg-4 col-12 ">  
     
        <div className='col-12 text-center m-2 border-0 rounded-3'>
     <img src="/images/pricing.png" alt='img' ></img>
        <p>Affordable Price</p>
      </div>
      <div className='col-12 text-center m-2 border-0 rounded-3'>
      <img src="/images/quality.png" alt='img' ></img>
      <p>Quality Check</p>
      </div>
    </div>

     <div className="col-lg-4 col-12 text-center border-0 rounded-3">
     <img src="/images/returns.png" alt='img' width="50px" height="50px"></img>
     <p>Easy returns </p>
    </div>
  </div>
    </div>
  )
}
