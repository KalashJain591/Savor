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
    <div className='grid-three'>
      <div className="product-three">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />
        })}
      </div>
    </div>
  )
}
export default TopDeals
