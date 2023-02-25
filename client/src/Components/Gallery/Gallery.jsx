import axios from "axios";
import React, { useEffect, useState } from "react";
import "./gallery.css";
import SingleGallery from "./SingleGallery";
export default function Gallery() {
  const [content,setContent]=useState([]);
  const callapi = async () => {
    await axios.get(`/gallery/`).then((res) => {
      setContent(res.data);
      // console.log(res.data)
    });
  };
  useEffect(() => {
    callapi();
  }, []);
 
  return (
    <div>
      <p class="heading">Gallery</p>
      <div class="gallery-image">
        {content.map((currele)=>{
          return <SingleGallery photolink={currele.photolink} name={currele.name} details={currele.details}/>
        })}
      </div>
    </div>
  );
}
