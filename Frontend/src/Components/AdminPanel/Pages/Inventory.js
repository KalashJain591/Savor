import React from 'react'
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import SideBar from '../AdminPanelComponents/SideBar';
import Header from '../AdminPanelComponents/Header';
import Footer from '../AdminPanelComponents/Footer';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Modal';
// import EditOrderPage from './EditOrderPage';
import "../HomePage/Index.css"
import { NavLink, useNavigate } from 'react-router-dom';
const Inventory = ({setChangeId}) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [manualId, setManualId] = useState("")
  const callapi = async () => {
    await axios.get("/admin/product")
      .then((res) => {
        console.log(res.data);
        setDataSource(res.data);
      })
  }
  // setChangeId()
 
  useEffect(() => {
    setLoading(true);
    callapi();
    // getInventory().then((res) => {
    //   setDataSource(res.products);
    // });
    setLoading(false);
  }, []);
  // useEffect(() => {
  //   console.log("mI", manualId)
  // }, [manualId]);
  const navigate = useNavigate();

  return (
    // <div className='admin-section'>
    //   <div className="admin-section-grid-2">
    //     <SideBar />
    //     <div className="SideMenuAndPageContent">
    //       <Header />
    //       <div className='container'>
    //         <Space size={20} direction="vertical">
    //           <Typography.Title level={4}>Inventory</Typography.Title>
    //           <Table
    //             loading={loading}
    //             columns={[
    //               {
    //                 title: "Thumbnail",
    //                 dataIndex: "images",
    //                 render: (link) => {
    //                   return <Avatar src={link[0].imgUrl} />;
    //                 },
    //               },
    //               {
    //                 title: "Title",
    //                 dataIndex: "name",
    //               },
    //               {
    //                 title: "Price",
    //                 dataIndex: "price",
    //                 render: (value) => <span>₹{value}</span>,
    //               },
    //               {
    //                 title: "Rating",
    //                 dataIndex: "rating",
    //                 render: (rating) => {
    //                   return <Rate value={rating} allowHalf disabled />;
    //                 },
    //               },
    //               {
    //                 title: "Reviews",
    //                 dataIndex: "reviews",
    //               },
    //               {
    //                 title: "Stock",
    //                 dataIndex: "stock",
    //               },
    //               {
    //                 title: "Category",
    //                 dataIndex: "category",
    //               },
    //               {
    //                 title: "Feature",
    //                 dataIndex: "feature",
    //               },
    //               {
    //                 title: "description",
    //                 dataIndex: "description",
    //               },
    //               {
    //                 title: "Edit Product",
    //                 dataIndex: "_id",
    //                 render: (_id) => <>
    //                   {/* {console.log(_id)} */}
    //                   <Button variant="primary" onClick={() => {setModalShow(true); localStorage.setItem("dataItem", _id)}}>
    //                     Edit Product
    //                   </Button>
    //                   <MyVerticallyCenteredModal
    //                     show={modalShow}
    //                     onHide={() => setModalShow(false)}
    //                   />
    //                 </>,
    //               },
    //             ]}
    //             dataSource={dataSource}
    //             pagination={{
    //               pageSize: 5,
    //             }}
    //           ></Table>
    //         </Space>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='admin-section'>
      <div className="admin-section-grid-2">
        <SideBar />
        <div className="SideMenuAndPageContent">
          <Header />
          <div className="container">
            <div className="upper-section" style={{display: "flex", justifyContent: "space-between"}}>
              <h3>Products</h3>
              <button>Add new Product</button>
            </div>
            <table class="table" style={{ backgroundColor: "white", borderRadius: "10px" }}>
              <thead>
                <tr>
                  <th scope="row">Thumbnail</th>
                  <th> Price</th>
                  <th>Rating</th>
                  <th>Reviews</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Feature</th>
                  <th>description</th>
                  <th>Product</th>
                </tr>
              </thead>
              {dataSource.map((product) =>
                <tbody key={product.productId} >
                  <tr>
                    <td scope="row"><Avatar src={product.images[0].imgUrl}/></td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                    <td>{product.reviews}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>{product.feature}</td>
                    <td>{product.description}</td>
                    <td><Button onClick={()=>navigate(`./EditProductPage/${product._id}`)}>Edit Product</Button></td>
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
