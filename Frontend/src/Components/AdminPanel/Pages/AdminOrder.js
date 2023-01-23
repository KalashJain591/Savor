import { Avatar, Rate, Space, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../AdminPanelComponents/Footer";
import Header from "../AdminPanelComponents/Header";
import ChangeOrderStatus from "../AdminPanelComponents/Orders/ChangeOrderStatus";
import OrderUserInfo from "../AdminPanelComponents/Orders/OrderUserInfo";
import ProductInfo from "../AdminPanelComponents/Orders/ProductInfo";
import UserInfo from "../AdminPanelComponents/Orders/UserInfo";
import SideBar from "../AdminPanelComponents/SideBar";

export const AdminOrder = () => {
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
    // <Space size={20} direction="vertical">
    //   <Typography.Title level={4}>Orders</Typography.Title>
    //   <Table
    //     loading={loading}
    //     columns={[
    //       {
    //         title: "Photo",
    //         dataIndex: "profilePic",
    //         render: (link) => {
    //           return <Avatar src={link} />;
    //         },
    //       },
    //       {
    //         title: "Name",
    //         dataIndex: "name",
    //       },
    //       {
    //         title: "Phone No.",
    //         dataIndex: "phoneno",
    //       },
    //       {
    //         title: "Email",
    //         dataIndex: "email",
    //       },
    //       {
    //         title: "DOB",
    //         dataIndex: "dob",
    //       },
    //       {
    //         title: "Ordered Name",
    //         dataIndex: "ordername",
    //       },
    //       {
    //         titlAdminO: "Order Phone No.",
    //         dataIndex: "ordermobile1",
    //       },
    //       {
    //         titlAdminO: "Order Phone No. (Optional)",
    //         dataIndex: "ordermobile2",
    //       },

    //       {
    //         title: "Address",
    //         dataIndex: "address",
    //       },
    //       {
    //         title: "Optional Address",
    //         dataIndex: "addressoptional",
    //       },
    //       {
    //         title: "City",
    //         dataIndex: "city",
    //       },
    //       {
    //         title: "State",
    //         dataIndex: "state",
    //       },
    //       {
    //         title: "PIN CODE",
    //         dataIndex: "postalcode",
    //       },
    //       {
    //         title:"ORDER SUMMARY",
    //         dataIndex:"products",
    //         render: (value) =><div ><ProductInfo products={value}/></div>,
    //       }
    //       ,
    //       {
    //         title: "Bill",
    //         dataIndex: "bill",
    //         render: (value) => <span>₹{value}</span>,
    //       },
    //       {
    //         title: "Status",
    //         dataIndex: "order_status",
    //         render: (value) => <ChangeOrderStatus orderid={dataSource._id} order_status={value}/>,
    //       },
    //       {
    //         title: "DateAdminOof Order",
    //         dataIndex: "date_added",
    //         render: (value) => <span>{value}</span>,
    //       },
    //     ]}
    //     dataSource={dataSource}
    //     pagination={{
    //       pageSize: 5,
    //     }}
    //   ></Table>
    // </Space>
    <div className='admin-section'>
      <Header />
      <div className="SideMenuAndPageContent">
        <SideBar ></SideBar>
        
    <div  className="container">
      <br/>
    <table class="table" style={{backgroundColor:"white", borderRadius:"10px"}}>
  <thead>
    <tr>
      <th scope="col">User Details</th>
      <th scope="col">Customer Details</th>
      <th scope="cAdminOl">Order Details</th>
      <th scope="cAdminOl">Order Status</th>
      <th scope="col">Bill</th>
    </tr>
  </thead>
  {dataSource.map((order) =>
     <tbody  key={order.productId} >
    <tr>
      <th scope="row"><UserInfo profilePic={order.profilePic} name={order.name} phoneno={order.phoneno} email={order.email} dob={order.dob}/></th>
      <td><OrderUserInfo ordername={order.ordername} address={order.address} addressoptional={order.addressoptional} state={order.state} city={order.city} postalcode={order.postalcode} ordermobile1={order.ordermobile1} ordermobile2={order.ordermobile2} Address={order.Address} AddressOptional={order.AddressOptional} /></td>
      <td> <ProductInfo products={order.products}/></td>
      <td><ChangeOrderStatus orderId={order._id} order_status={order.order_status}/></td>
      <td> <span>₹{order.bill}</span></td>
    </tr>
    </tbody>
  )} 
</table>
</div>
        
      </div>
      <Footer />
    </div>
  )
}

