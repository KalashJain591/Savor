import React from 'react'

export default function SingleGallery(props) {
  return (
    <>
    {console.log(props.details.slice(0,4))}
    {props.details.slice(0,4)==="http"?
    <div class="img-box" onClick={()=>{window.location=props.details}} >
    <img src={props.photolink} alt="" />
    <div class="transparent-box">
      <div class="caption">
        <p>{props.name}</p>
        {/* <p class="opacity-low">{props.details}</p> */}
      </div>
    </div>
  </div>:
  <div class="img-box"  >
    <img src={props.photolink} alt="" />
    <div class="transparent-box">
      <div class="caption">
        <p>{props.name}</p>
        <p class="opacity-low">{props.details}</p>
      </div>
    </div>
  </div>}
  </>
   )
}
