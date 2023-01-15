import React from 'react'
import "./Star.css"
const Star = ({rating, reviews}) => {
    const ratingStar = Array.from({length:5}, (elem, index)=>{
        let number = index + 0.5;
        return (
          <span className="star-color" key={index}>
              {rating >= index + 1 ? (
                  <i class="fa-solid fa-star"></i>
              ): rating >= number ? (
                  <i class="fa-solid fa-star-half-stroke"></i>
              ):(
                  <i class="fa-regular fa-star"></i>
              )}
           
          </span>
        )
    })
    return(
        <div className='star-section'>
            <div className="star-icon-style">
                {ratingStar}
            </div>
            <div className="reviews-section">
                <p>({reviews} customer reviews)</p>
            </div>
        </div>
    )
}

export default Star
