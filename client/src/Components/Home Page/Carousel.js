import React from 'react'
import "./Carousel.css"
function Carousel() {
  return (
    
        <div className='my-4'>      
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2600">
          <img src="https://fandbrecipes.com/wp-content/uploads/2022/03/Indian-Masala-Types-and-Recipe.png " className="d-block w-100 rounded" height={"369px"} alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="https://cdn.shopaccino.com/refresh/articles/garammasala-769591_l.jpg" className="d-block w-100 rounded" height={"369px"} alt="..."/>
        </div>
        {/* <div className="carousel-item" data-bs-interval="3600">
          <img src="img 3" className="d-block w-100 rounded" height={"369px"}  alt="..."/>
        </div> */}
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
      
    
    
//       <div>
//       <div>
//   <div className="carousel">
//     <ul className="slides">
//       <input type="radio" name="radio-buttons" id="img-1" checked />
//       <li className="slide-container">
//         <div className="slide-image">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"/>
//         </div>
//         <div className="carousel-controls">
//           <label for="img-3" className="prev-slide">
//             <span>&lsaquo;</span>
//           </label>
//           <label for="img-2" className="next-slide">
//             <span>&rsaquo;</span>
//           </label>
//         </div>
//       </li>
//       <input type="radio" name="radio-buttons" id="img-2" />
//       <li className="slide-container">
//         <div className="slide-image">
//           <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"/>
//         </div>
//         <div className="carousel-controls">
//           <label for="img-1" className="prev-slide">
//             <span>&lsaquo;</span>
//           </label>
//           <label for="img-3" className="next-slide">
//             <span>&rsaquo;</span>
//           </label>
//         </div>
//       </li>
//       <input type="radio" name="radio-buttons" id="img-3" />
//       <li className="slide-container">
//         <div className="slide-image">
//           <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"/>
//         </div>
//         <div className="carousel-controls">
//           <label for="img-2" className="prev-slide">
//             <span>&lsaquo;</span>
//           </label>
//           <label for="img-1" className="next-slide">
//             <span>&rsaquo;</span>
//           </label>
//         </div>
//       </li>
//       <div className="carousel-dots">
//         <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
//         <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
//         <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
//       </div>
//     </ul>
//   </div>
// </div>
//     </div>
 )
 }

export default Carousel
