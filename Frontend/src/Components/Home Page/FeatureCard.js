import React from 'react'
import { useCartContext } from '../../Context/cart_context'
export default function FeatureCard(props) {
  return (
    <div>
      
      <div className="card " style={{ width: '18rem' }}>
        <img src="/images/dal_image1.jpg" className="card-img-top p-2 zoom " alt="images" width="250" height="250" />
        <div className="card-body p-0">
          <h5 className="card-title pt-3 ps-1">{props.title}</h5>
          <p className="card-text ps-1">Description about product</p>
        </div>
        <div className="card-body p-0">
          <p className="card-text ps-1" >Rate - {props.Rate}</p>
        </div>

    </div>
  </div >
  )
}


