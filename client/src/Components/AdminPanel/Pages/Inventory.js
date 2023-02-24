import React from 'react'
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import SideBar from '../AdminPanelComponents/SideBar';
import Header from '../AdminPanelComponents/Header';
import Footer from '../AdminPanelComponents/Footer';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa';
import "../HomePage/Index.css"
import { NavLink, useNavigate } from 'react-router-dom';
const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const callapi = async () => {
    await axios.get("/admin/product")
      .then((res) => {
        console.log(res.data);
        setDataSource(res.data);
      })
  }
  const removeItem = async(id) =>{
    await axios.get(`/admin/deleteproduct/${id}`)
    .then((res) => {
      window.location.reload()
      console.log("deleted")
      // setDataSource(res.data);
    })
  }
  // setChangeId()
 
  useEffect(() => {
    setLoading(true);
    callapi();
    setLoading(false);
  }, []);
  // useEffect(() => {
  //   console.log("mI", manualId)
  // }, [manualId]);
  const navigate = useNavigate();

  return (
    <div className='admin-section'>
          <Header />
      <div className="admin-section-grid-2">
        {/* <SideBar /> */}
        <div className="SideMenuAndPageContent">
          <div className="container-inventory">
            <div className="upper-section" style={{display: "flex", justifyContent: "space-between"}}>
              <h3>Products</h3>
              <button style={{padding: "2px 11px", border: "none", margin: "2px"}} onClick={()=>navigate('./AddProduct')}>Add new Product</button>
            </div>
            <table class="table" style={{ backgroundColor: "white", borderRadius: "10px" }}>
              <thead>
                <tr>
                  <th scope="row">Thumbnail</th>
                  <th> Name</th>
                  <th> Price</th>
                  <th>Rating</th>
                  <th>Reviews</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Feature</th>
                  <th>description</th>
                  <th>Product</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {dataSource.map((product) =>
                <tbody key={product.productId} >
                  <tr>
                    <td scope="row"><Avatar src={product.images[0].imgUrl}/></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                    <td>{product.reviews}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>{product.feature}</td>
                    <td>{product.description}</td>
                    <td><Button onClick={()=>navigate(`./EditProductPage/${product._id}`)}>Edit Product</Button></td>
                    <td><FaTrash onClick={() => removeItem(product._id)} /></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
