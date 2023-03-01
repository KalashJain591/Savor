import React, { useEffect, useState } from 'react'
import SingleGallery from './SingleGallery'
import axios from 'axios';
import Addimg from './Addimg.jsx'
import { useNavigate } from 'react-router-dom';
export default function Galleryimg() {
  const navigate=useNavigate();
  const [content,setContent]=useState([]);
  const callapi = async () => {
    await axios.get(`/gallerys/`).then((res) => {
      setContent(res.data);
      // console.log(res.data)
    });
  };
  useEffect(() => {
    callapi();
  }, []);
   
  return (
    <div>
      <div style={{display:"flex", justifyContent:"end"}}>
          <button style={{backgroundColor:"yellow",padding:"5px", borderRadius:"5px"}} onClick={()=>{navigate("/addgalleryimg/")}} >Add Photo</button>
      </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Details</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  <tbody >
    {content.map((currelem)=>{
      return <SingleGallery id={currelem._id} img={currelem.photolink} name={currelem.name} details={currelem.details}/>
    })}
    </tbody>
</table>
    </div>
  )
}
