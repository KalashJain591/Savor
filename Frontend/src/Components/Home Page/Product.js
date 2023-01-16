import React from 'react'
import { NavLink } from 'react-router-dom'
import Star from "../Product/SingleProduct/Star"
import { useCartContext } from "../../Context/cart_context";
import "./Product.css"

const Product = (curElem) => {
  const { addToCart } = useCartContext();
  const { _id, name, images, price, rating, reviews } = curElem;
  return (
    <NavLink className="singleProduct-origin" to={`/SingleProduct/${_id}`}>
      <div className="product-card">
        <figure>
          <img src={images[0].imgUrl} alt={name} />
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <p className='card-data--name'>{name}</p>
            <p><i class="fa-regular fa-heart"></i></p>
          </div>
          <div className="card-data-rating">
            <Star rating={rating} reviews={reviews} />
          </div>
          <div className="rate-section">
            <p>₹{price}</p>
            <NavLink to="/cart" onClick={() => addToCart(_id, price, images, name)}>
              <div className="addTocart">
                <button class="add-cart"><i className="fas fa-plus"></i></button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
