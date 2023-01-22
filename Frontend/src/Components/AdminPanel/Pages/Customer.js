import React from 'react'
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from 'axios';
const Customer = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  
  const callapi=async()=>{
    await axios.get("/admin/user")
    .then((res)=>{
      // console.log(res.data);
      setDataSource(res.data);
    })
  }  

  useEffect(() => {
    setLoading(true);
    callapi();
    setLoading(false);
  }, []);
  
  return (
    <div className='container'>
      <br/>
      <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "profilePic",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Phone No.",
            dataIndex: "phoneno",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "DOB",
            dataIndex: "dob",
          },

          // {
          //   title: "address",
          //   dataIndex: "address",
          //   render: (address) => {
          //     return (
          //       <span>
          //         {address.address}, {address.city}
          //       </span>
          //     );
          //   },
          // },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </div>
  )
}

export default Customer
