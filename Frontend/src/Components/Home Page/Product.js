import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Star from "../Product/SingleProduct/Star"
import { useCartContext } from "../../Context/cart_context";
import {useWishListContext} from "../../Context/WishListContext"
import "./Product.css"

const Product = (curElem) => {
  const { addToCart } = useCartContext();
  // const { addToWishList } = useWishListContext();

  const { _id, name, images, price, rating, reviews } = curElem;
  const [heart, setHeart] = useState(false)
  return (
    <div className="singleProduct-origin" >
      <div className="product-card">
        <NavLink to={`/SingleProduct/${_id}`} className="figure">
          <img src={images[0].imgUrl} alt={name} />
        </NavLink>
        <div className="card-data">
          <div className="card-data-flex">
            <NavLink to={`/SingleProduct/${_id}`}>
              <p className='card-data--name'>{name}</p>
            </NavLink>
            <p>{heart ? (<i class="fa-solid fa-heart red-heart" onClick={() => setHeart(false)}></i>) : (<i class="fa-regular fa-heart" onClick={() => setHeart(true)}></i>)}</p>
          </div>
          <div className="card-data-rating">
            <Star rating={rating} reviews={reviews} />
          </div>
          <div className="rate-section">
            <p>₹{price}</p>
            <NavLink to="/cart" onClick={() => addToCart(_id, price, images, name)}>
              <div className="addTocart">
                <button className="add-cart"><i className="fas fa-plus"></i></button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Product
