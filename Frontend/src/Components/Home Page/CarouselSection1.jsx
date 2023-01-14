import React from 'react'
import "./CarouselSection1.css"
function Carousel() {
  return (
    
        <div className='my-4'>      
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://fandbrecipes.com/wp-content/uploads/2022/03/Indian-Masala-Types-and-Recipe.png " className="carousel-img d-block w-100 " height={"369px"} alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.shopaccino.com/refresh/articles/garammasala-769591_l.jpg" className="carousel-img d-block w-100 " height={"369px"} alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.shopaccino.com/refresh/articles/garammasala-769591_l.jpg" className="carousel-img d-block w-100 " height={"369px"} alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">last</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
        </div>
      
    
  
 )
 }

export default Carousel