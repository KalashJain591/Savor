import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./EditProductPage.css"
const API = "/editproduct";
const EditProductPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [productName, setProductName] = useState('');
  const [NameError, setNameError] = useState('');
  const [editmode, seteditmode] = useState(true);
  const [price, setPrice] = useState('');
  const [star, setStar] = useState('');
  const [reviews, setReviews] = useState('');
  const [feature, setFeature] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  // console.log(dataSource)
  const validname = (name) => {
    if (!name) {
      setNameError('Complete Name is required');
      return false;
    }
    setNameError('');
    return true;
  }
  const { id } = useParams();
  console.log("id", id)
  const callapi = async () => {
    await axios.get(`/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setDataSource(res.data);
        setProductName(res.data.name);
        setPrice(res.data.price)
        setStar(res.data.rating)
        setReviews(res.data.reviews)
        setFeature(res.data.feature)
        setStock(res.data.stock)
        setDescription(res.data.description)
        setCategory(res.data.category)
      })
  }
  const submit = async () => {
    await axios.post(`/admin/editproduct/${id}`, {name: productName,description: description,price: price,stock : stock,feature: feature, category: category,rating:star,reviews: reviews})
      .then((res) => {
       alert("Product has been Edited")
       window.location.reload()
      })
  }
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
  useEffect(() => {
    callapi();
    // setProductName(dataSource.name)
  }, []);
  return (
    <div className="EditProduct-Section">
      <div className="Edit-product-section">
        <div className="Edit-container">
          <h3>Edit Product</h3>
          <div id="edit-form">
            <div className="edit-section-images">
              <div className="edit-sub-section-img">
                {dataSource.images && dataSource.images.map((item) => {
                  return (
                    <div className="child-single-edit-img" key={item.id}>
                      <img src={item.imgUrl} alt="Loading..." />
                      <input className='edit-file-img' type='file'></input>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="edit-page-form-group">
              <label for="name">Name</label>
              <input type="text" value={productName} disabled={editmode} id="name" onChange={changeProfile} className="me-3" ></input>
            </div>
            <div className="edit-page-form-group">
              <label for="prize">Prize</label>
              <input type="text" value={price}  disabled={editmode} id="prize" onChange={changeProfile} className="me-3" ></input>
            </div>
            <div className="edit-page-form-group">
              <label for="Rating">Rating</label>
              <input
                type="text"
                id="Rating"
                name="Rating"
                value={star} onChange={changeProfile} className="me-3"
                disabled={editmode}
              />
            </div>
            <div className="edit-page-form-group">
              <label for="Reviews">Reviews</label>
              <input
                type="text"
                id="Reviews"
                name="Reviews"
                value={reviews}  disabled={editmode} onChange={changeProfile} className="me-3"
              />
            </div>
            <div className="edit-page-form-group">
              <label for="Feature">Feature</label>
              <select id="Feature" disabled={editmode} name="Feature">
                <div value="False">{feature}</div>
                <option value="true" >True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="edit-page-form-group">
              <label for="Stock">Stock</label>
              <input id="stock" name="stock"type="text" disabled={editmode} value={stock} 
              onChange={changeProfile} className="me-3"/>
            </div>
            <div className="edit-page-form-group">
              <label for="Category">Category</label>
              <input
                type="text"
                id="Category"
                value={category}
                onChange={changeProfile}
                className="me-3" disabled={editmode}
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
              />
            </div>
            {editmode ? <button className="edit-contain-button" onClick={()=>{seteditmode(!editmode)}}>Edit Content</button> : 
            <button className="edit-contain-button" onClick={()=>submit()}>Upadate Content</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProductPage
