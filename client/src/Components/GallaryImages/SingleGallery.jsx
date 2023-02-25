import axios from 'axios';
import React from 'react'
export default function SingleGallery(props) {

  const afterapi=()=>{
    alert("Deleted Successfully")
    window.location.reload()
  }
const callapi = async () => {
  // console.log(props.id)
  const re=props.id;
  await axios.get(`/gallerys/deleteimg/${re}`).then((res) => {afterapi()});
};

return (
       <tr>
      <th > 
        <img  className="galleryimg" width={"200px"} src={props.img} alt={props.name} />
      </th>
      <td>{props.name}</td>
      <td>{props.details}</td>
      <td><button onClick={()=>{callapi()}}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
    </tr>
  )
}
