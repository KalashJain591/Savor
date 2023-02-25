import React from 'react'

export default function SingleGallery(props) {
  return (
    <div><div class="img-box">
    <img src={props.photolink} alt="" />
    <div class="transparent-box">
      <div class="caption">
        <p>{props.name}</p>
        <p class="opacity-low">{props.details}</p>
      </div>
    </div>
  </div></div>
  )
}
