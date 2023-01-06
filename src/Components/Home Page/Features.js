import React from 'react'
import FeatureCard from './FeatureCard'
import { itemData } from '../../itemData'
import { useCartContext } from '../../Context/cart_context'
export default function Features() {
  const { addToCart } = useCartContext();
  return (
    <div>
      <div className="container-md green">
        <div className="container-md  p-4 text-lg-start text-center">
          <p className='p-2'>check know </p>
          <h2 className='col-sm-4 col-12 text-lg-start text-center'>Our Feature Services</h2>
          <div className="row justify-content-evenly  ">
            {
              itemData.map((data, key) => (
                <div className='d-flex col-lg-4 col-12 p-2 justify-content-center'>
                  <div className='d-flex flex-column'>
                    <FeatureCard className='text-center' title={data.title} image={data.image} Rate={data.Rate} />
                    <div className="card-body">
                      <p href="/" className="text-center btn-primary btn-lg" onClick={() => addToCart(data.id,data.title, data.Rate, data.Company,key)} >Add to cart</p>
                    </div></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div >
  )

}
