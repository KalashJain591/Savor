import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductList from './ProductList'
import { useFilterContext } from '../../Context/FilterContext'
import "./Products.css"
function Products() {
  const { filter_products } = useFilterContext();
  console.log("fp ", filter_products)
  return (
    <div className="product-section">
      <div className="display-filterProduct-section">
        <div className='Filter-Section'>
          <FilterSection />
        </div>
        <div className="display-product-section">
          <div className="product-view--sort">
            <Sort />
          </div>
          <div className="main-product-list">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  )
};


export default Products
