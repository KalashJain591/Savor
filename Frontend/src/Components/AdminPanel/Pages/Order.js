import { Avatar, Rate, Space, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  
  const callapi=async()=>{
    await axios.get("/admin/order")
    .then((res)=>{
      console.log(res.data);
      setDataSource(res.data);
    })
  }  
  useEffect(() => {
    callapi();
    setLoading(true);
      setLoading(false);
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
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
          //   title: "Title",
          //   dataIndex: "title",
          // },
          // {
          //   title: "Price",
          //   dataIndex: "price",
          //   render: (value) => <span>${value}</span>,
          // },
          // {
          //   title: "DiscountedPrice",
          //   dataIndex: "discountedPrice",
          //   render: (value) => <span>${value}</span>,
          // },
          // {
          //   title: "Quantity",
          //   dataIndex: "quantity",
          // },
          // {
          //   title: "Total",
          //   dataIndex: "total",
          // },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  )
}

export default Order
