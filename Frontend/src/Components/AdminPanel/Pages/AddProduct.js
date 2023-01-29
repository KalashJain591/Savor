import axios from 'axios';
import React, { useState } from 'react'
import "./EditProductPage.css"
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
    const addNewProduct = async () => {
        console.log("hello guys")
        await axios.post(`/admin/addproduct`, {name: productName,description: description,price: price,stock : stock,feature: feature, category: category,rating:star,reviews: reviews})
          .then((res) => {
           alert("Product has been Added")
           window.location.reload()
          })
      }
    return (
        <div className="EditProduct-Section">
            <div className="Edit-product-section">
                <div className="Edit-container">
                    <h3>Add Product</h3>
                    <div id="edit-form">
                        <div className="edit-section-images">
                            <div className="edit-sub-section-img">
                                <input className='edit-file-img' type='file'></input>
                            </div>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="name">Name</label>
                            <input type="text" value={productName} placeholder="Product Name" disabled={editmode} id="name" onChange={changeProfile} className="me-3" ></input>
                        </div>
                        <div className="edit-page-form-group">
                            <label for="prize">Prize</label>
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
                            <select id="Feature" disabled={editmode} name="Feature" placeholder="Product Name">
                                {/* <div value="False">{feature}</div> */}
                                <option value="True" >True</option>
                                <option value="False">False</option>
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
