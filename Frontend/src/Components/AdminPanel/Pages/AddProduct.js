import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../Firebase/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import "./EditProductPage.css"
import AuthContext from '../../../Context/auth_context';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [editmode, seteditmode] = useState(true);
    const [price, setPrice] = useState('');
    const [star, setStar] = useState('');
    const [reviews, setReviews] = useState('');
    const [feature, setFeature] = useState("Select");
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [images,setimages]=useState([]);
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

    const afterurl=async(url)=>{
        setimages(prevState=>[...prevState,{imgUrl:url}]);

        // alert("Image was Succesfully Updated");
    }
    
    // useEffect(() => {
    //     console.log("IMG :",images);
    //     // setImageUpload(null);
    // }, [images])
    

    const changeimage=async ()=>{
        // console.log("change image");
        try{
        if(!checkimg()){
            alert("Please Upload Valid image on 200KB");
        }
        else if(imageUpload!==null){
            const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
            await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
              getDownloadURL(snapshot.ref).then((url)=>{
                // console.log(url); 
                 afterurl(url);
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


    const changeProfile = (e) => {
        let key = e.target.id
        let val = e.target.value
        if (key === "name") {
            setProductName(val);
        }
        if (key === "prize") {
            setPrice(val);
        }
        if (key === "Rating") {
            setStar(val);
        }
        if (key === "Reviews") {
            setReviews(val);
        }
        if (key === "Feature") {
            setFeature(val);
          }
        if (key === "description") {
            setDescription(val);
        }
        if (key === "stock") {
            setStock(val);
        }
        if (key === "Category") {
            setCategory(val);
        }
    }
    const addNewProduct = async () => {
        // console.log("hello guys")
        await axios.post(`/admin/addproduct`, {images,name: productName,description: description,price: price,stock : stock,feature: feature, category: category,rating:star,reviews: reviews})
          .then((res) => {
           alert("Product has been Added")
           window.location.reload()
          })
      }
      const navigate=useNavigate();
    return (
        <div className="EditProduct-Section">
            <div className="Edit-product-section">
                <div className="Edit-container">
                <button onClick={()=>{navigate('/adminpanel/products')}} className='my-2' style={{padding:"5px",marginLeft:"85%", borderRadius:"25px"}}><i class="fa fa-arrow-left" aria-hidden="true"></i> back</button>         
                    <h3>Add Product</h3>
                    <div id="edit-form">
                    
                    <div style={{display:'flex', flexWrap:"wrap"}}>
                        {images.map((url)=>{
                            // {console.log(url.imgUrl)}
                            return <img className='mx-1 my-1' style={{alignItems:'center'}} src={url.imgUrl} alt="image" width={"100px"}/>
                        })}
                    </div>

                        <div className="edit-section-images">
                            <div className="edit-sub-section-img">
                            <input type="file" className='btn btn-secondary my-4'  accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />
                            </div>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="name">Name</label>
                            <input type="text" value={productName} placeholder="Product Name" disabled={editmode} id="name" onChange={changeProfile} className="me-3" ></input>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="prize">Price</label>
                            <input type="text" value={price} placeholder="Product Price" disabled={editmode} id="prize" onChange={changeProfile} className="me-3" ></input>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="Rating">Rating</label>
                            <input
                                type="text"
                                id="Rating"
                                name="Rating"
                                value={star} onChange={changeProfile} className="me-3"
                                disabled={editmode} placeholder="Product Rating"
                            />
                        </div>
                        <div className="edit-page-form-group">
                            <label for="Reviews">Reviews</label>
                            <input
                                type="text"
                                id="Reviews"
                                name="Reviews" placeholder="No. of people Reviewed the Product"
                                value={reviews} disabled={editmode} onChange={changeProfile} className="me-3"
                            />
                        </div>
                        <div className="edit-page-form-group">
                            <label for="Feature">Feature</label>
                            <select id="Feature"  value={feature}  onChange={changeProfile} disabled={editmode} name="Feature">
                                <option value="true" >True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="Stock">Stock</label>
                            <input id="stock" name="stock" type="text" disabled={editmode} value={stock}
                               placeholder="Number of available product" onChange={changeProfile} className="me-3" />
                        </div>
                        <div className="edit-page-form-group">
                            <label for="Category">Category</label>
                            <input
                                type="text"
                                id="Category"
                                value={category}
                                onChange={changeProfile}
                                className="me-3" disabled={editmode}
                                placeholder="Category"
                            />
                        </div>
                        <div className="edit-page-form-group">
                            <label for="Description">Description</label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={changeProfile}
                                className="me-3" disabled={editmode}
                                placeholder="Write a description"
                            />
                        </div>
                        {editmode ? <button className="edit-contain-button" onClick={() => { seteditmode(!editmode) }}>Edit Content</button> :
                            <button className="edit-contain-button" onClick={()=>addNewProduct()}>Upadate Content</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
