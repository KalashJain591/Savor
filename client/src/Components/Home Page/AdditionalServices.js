import React from 'react'
import "./AdditionalServices.css"
export default function AdditionalServices() {
  return (
    <div className="service-section">
      <div className="service-container">
        <div className="single-service">
          <div className="service1 truck1">
            <div className="service2 truck2">
              <i className="fa-sharp fa-solid fa-truck icon-feature"></i>
            </div>
          </div>
          <div className="icon-text">
            <h6>Home Delivery</h6>
            <p>Product at your door step</p>
          </div>
        </div>
        <div className="single-service">
          <div className="service1 mortar1">
            <div className="service2 mortar2">
              <i className="fa-solid fa-mortar-pestle icon-feature"></i>
            </div>
          </div>
          <div className="icon-text">
            <h6>ALWAYS FRESH</h6>
            <p>PRODUCT WELL PACKAGE</p>
          </div>
        </div>
        <div className="single-service">
          <div className="service1 ranking-star1">
            <div className="service2 ranking-star2">
              <i className="fa-solid fa-ranking-star icon-feature"></i>
            </div>
          </div>
          <div className="icon-text">
            <h6>SUPERIOR QUALITY</h6>
            <p>QUALITY PRODUCTS</p>
          </div>
        </div>
        <div className="single-service">
          <div className="service1 headset1">
            <div className="service2 headset2">
              <i className="fa-solid fa-headset icon-feature"></i>
            </div>
          </div>
          <div className="icon-text">
            <h6>SUPPORT</h6>
            <p>24/7 SUPPORT</p>
          </div>
        </div>
      </div>
    </div>
  )
}