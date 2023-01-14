import React from 'react'
import "./AdditionalServices.css"
export default function AdditionalServices() {
  return (
    <section className="service-section py-5">
  <div className="container">
    <div className="row justify-content-center py-3">
      <div className="col-md-8 col-12 text-center">
        {/* <h3 className="service-main-heading">Features</h3> */}
        <h3 style={{textAlign:"center"}}>Features Section: </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-6 col-12">
        <div className="icon-box">
        <img src="/images/pricing.png" alt='img' ></img>
          <p className="service-title"><a href="#">Lorem Ipsum</a></p>
          <p className="service-para">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
        <img src="/images/deliveryicon.png" alt='img'></img>
          <p className="service-title"><a href="#">Dolor Sitema</a></p>
          <p className="service-para">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
        <img src="/images/returns.png" alt='img' width="50px" height="50px"></img>
          <p className="service-title"><a href="#">Sed ut perspiciatis</a></p>
          <p className="service-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
        <img src="/images/quality.png" alt='img' ></img>
          <p className="service-title"><a href="#">Nemo Enim</a></p>
          <p className="service-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </div>
  </div>
</section>
  //   <div className='container my-5'>
  //     <br/>
  //     <h3 style={{textAlign:"center"}}>Features Section: </h3>
  //   <div className=" row align-items-center">
  //   <div className=" col-lg-4 col-12 text-center border-0 rounded-3">
  //       <img src="/images/deliveryicon.png" alt='img'></img>
  //     <p>Fast delivery</p>
  //   </div>
  
  //   <div className="col-lg-4 col-12 ">  
     
  //       <div className='col-12 text-center m-2 border-0 rounded-3'>
  //    <img src="/images/pricing.png" alt='img' ></img>
  //       <p>Affordable Price</p>
  //     </div>
  //     <div className='col-12 text-center m-2 border-0 rounded-3'>
  //     <img src="/images/quality.png" alt='img' ></img>
  //     <p>Quality Check</p>
  //     </div>
  //   </div>

  //    <div className="col-lg-4 col-12 text-center border-0 rounded-3">
  //    <img src="/images/returns.png" alt='img' width="50px" height="50px"></img>
  //    <p>Easy returns </p>
  //   </div>
  // </div>
  //   </div>
  )
}
