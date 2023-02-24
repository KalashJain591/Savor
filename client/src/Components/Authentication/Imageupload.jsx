import React, { useEffect, useState } from 'react'
import { storage } from '../../Firebase/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';

export default function Imageupload() {
    const [imageUpload,setImageUpload]=useState(null);
    const fileListRef=ref(storage,'files/');
    const uploadImage=()=> {
      if(imageUpload==null)return;
      const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
      uploadBytes(imageRef,imageUpload).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
            console.log(url);
        })
        // alert("File Uploaded Successfully")
      })
    };
    
  return (
    <div>
        <input type="file" className='btn btn-secondary mx-4 my-4' onChange={(event)=>{setImageUpload(event.target.files[0])}} />
      <button  type="button"  className='btn btn-secondary' onClick={uploadImage}>Upload File</button>
    </div>
  )
}
