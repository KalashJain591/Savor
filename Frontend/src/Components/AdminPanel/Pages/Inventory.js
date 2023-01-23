import React from 'react'
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
import SideBar from '../AdminPanelComponents/SideBar';
import Header from '../AdminPanelComponents/Header';
import Footer from '../AdminPanelComponents/Footer';

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const callapi=async()=>{
    await axios.get("/admin/product")
    .then((res)=>{
      console.log(res.data);
      setDataSource(res.data);
    })
  }  

  useEffect(() => {
    setLoading(true);
    callapi();
    // getInventory().then((res) => {
    //   setDataSource(res.products);
    // });
      setLoading(false);
  }, []);
  return (
    <div className='admin-section'>
      <Header />
      <div className="SideMenuAndPageContent">
        <SideBar ></SideBar>
        <div className='container'>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "images",
            render: (link) => {
              return <Avatar src={link[0].imgUrl} />;
            },
          },
          {
            title: "Title",
            dataIndex: "name",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>₹{value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Reviews",
            dataIndex: "reviews",
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Feature",
            dataIndex: "feature",
          },
          {
            title: "description",
            dataIndex: "description",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </div>       
    </div>
      <Footer />
    </div>
  )
}

export default Inventory
