import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../Firebase/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
const Addimg = () => {
  const [photolink, setPhotolink] = useState('');
  const [name, setname] = useState('');
  const [details, setdetails] = useState('');
  const [editmode, seteditmode] = useState(true);
  const [imageUpload,setImageUpload]=useState(null);
  const fileListRef=ref(storage,'files/');
  const [imagewasuploading, setimagewasuploading] = useState(false);

    const checkimg=()=>{
        // console.log(imageUpload);
        if(imageUpload.size>200000){
          return false;
        }
        const fileExtension = imageUpload.name.split(".").at(-1);
        const allowedFileTypes = ["jpg", "png","gif","jpeg"];
        if (!allowedFileTypes.includes(fileExtension)) {
            return false;
        }  
        return true;
    }

    

    const changeimage=async ()=>{
        // console.log("change image");
        try{
        if(!checkimg()){
            alert("Please Upload Valid image on 200KB");
        }
        else if(imageUpload!==null){
            const imageRef=ref(storage,'gallery/'+v4()+imageUpload.name);
            await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
              getDownloadURL(snapshot.ref).then((url)=>{
                // console.log(url); 
                 setPhotolink(url);
              })
            }) 
        }
        else{
            console.log("nothing")
        }
       //  console.log(user);
          } catch (err) {
         console.error(err);
           }
    }
    
    useEffect(() => {
        changeimage();
    }, [imageUpload])


    const addNewImage = async () => {
        // console.log("hello guys")
        await axios.post(`/gallerys/addimg`, {photolink, name, details})
          .then((res) => {
           alert("Image has been Added")
           window.location.reload()
          })
      }

      const navigate=useNavigate();
   return (
        <div className="EditProduct-Section">
            <div className="Edit-product-section">
                <div className="Edit-container">
                <button onClick={()=>{navigate('/adminpanel/')}} className='my-2' style={{padding:"5px",marginLeft:"85%", borderRadius:"25px"}}><i class="fa fa-arrow-left" aria-hidden="true"></i> back</button>         
                    <h3>Add Gallery Photo</h3>
                    <div id="edit-form">
                    
                    <div style={{display:'flex', flexWrap:"wrap"}}>
                    <img className='mx-1 my-1' style={{alignItems:'center'}} src={photolink} alt="image" width={"100px"}/>
                        {/* {images.map((url)=>{
                            // {console.log(url.imgUrl)}
                            return <img className='mx-1 my-1' style={{alignItems:'center'}} src={url.imgUrl} alt="image" width={"100px"}/>
                        })} */}
                    </div>

                        <div className="edit-section-images">
                            <div className="edit-sub-section-img">
                            <input type="file" className='btn btn-secondary my-4'  accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />
                            </div>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="name">Name</label>
                            <input type="text" value={name} placeholder="Name" disabled={editmode} id="name" onChange={(e)=>{setname(e.target.value)}} className="me-3" ></input>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="details">Details</label>
                            <input type="text" value={details} placeholder="Details" disabled={editmode} id="details" onChange={(e)=>{setdetails(e.target.value)}} className="me-3" ></input>
                        </div>
                        {editmode ? <button className="edit-contain-button" onClick={() => { seteditmode(!editmode) }}>Edit Content</button> :
                            <button className="edit-contain-button" onClick={()=>addNewImage()}>Upadate Content</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addimg
