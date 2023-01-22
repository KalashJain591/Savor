import { Avatar, Rate, Space, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductInfo from "../AdminPanelComponents/Orders/ProductInfo";

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  
  const callapi=async()=>{
    await axios.get("/admin/order")
    .then((res)=>{
      // console.log(res.data);
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
          {
            title: "Ordered Name",
            dataIndex: "ordername",
          },
          {
            title: "Order Phone No.",
            dataIndex: "ordermobile1",
          },
          {
            title: "Order Phone No. (Optional)",
            dataIndex: "ordermobile2",
          },

          {
            title: "Address",
            dataIndex: "address",
          },
          {
            title: "Optional Address",
            dataIndex: "addressoptional",
          },
          {
            title: "City",
            dataIndex: "city",
          },
          {
            title: "State",
            dataIndex: "state",
          },
          {
            title: "PIN CODE",
            dataIndex: "postalcode",
          },
          {
            title:"ORDER SUMMARY",
            dataIndex:"products",
            render: (value) =><div ><ProductInfo products={value}/></div>,
          }
          ,
          {
            title: "Bill",
            dataIndex: "bill",
            render: (value) => <span>₹{value}</span>,
          },
          {
            title: "Status",
            dataIndex: "order_status",
          },
          {
            title: "Date of Order",
            dataIndex: "date_added",
            render: (value) => <span>{value.slice(0,10)}</span>,
          },
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
