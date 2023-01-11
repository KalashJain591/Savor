import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Product.css"
const Product = (curElem) => {
  const {id, name, image, rate } = curElem
  return (
    <NavLink className="singleProduct-origin" to={`/singleProduct/${id}`}>
      <div className="product-card">
        <figure>
          <img src={image} alt={name}/>
          {/* <figcaption className='caption'>{}</figcaption> */}
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <p className='card-data--name'>{name}</p>
            <p className='card-data--price'>
              {rate}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
