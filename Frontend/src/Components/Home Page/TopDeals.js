import React from 'react'
// import { featureProduct} from 
import { useProductContext } from '../../Context/ProductContext';
import Product from './Product';
import "./TopDeals.css"
// import { useEffect, useState } from 'react';

function TopDeals() {
  const { featureProducts } = useProductContext();
  console.log("fp", featureProducts);
  return (
    <section className="topDealsSection">
      <div className="top-deal-content">
        <h2>Feature Products</h2>
        <div className='grid-three'>
          <div className="product-three">
            {featureProducts.map((curElem) => {
              return <Product key={curElem._id} {...curElem} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default TopDeals
