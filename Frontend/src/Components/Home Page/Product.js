import React from 'react'
import { NavLink } from 'react-router-dom'
import Star from "../Product/SingleProduct/Star"
import "./Product.css"
const Product = (curElem) => {
  const {_id, name, images, price, rating, reviews } = curElem
  return (
    <NavLink className="singleProduct-origin" to={`/SingleProduct/${_id}`}>
      <div className="product-card">
        <figure>
          <img src={images[0].imgUrl} alt={name}/>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <p className='card-data--name'>{name}</p>
            <p><i class="fa-regular fa-heart"></i></p>
          </div>
          <div className="card-data-rating">
            <Star rating={rating} reviews ={reviews}/>
          </div>
          <div className="rate-section">
              <p>₹{price}</p>
              <div className="addTocart">
                <button class="add-cart"><i class="fas fa-plus"></i></button>
              </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
