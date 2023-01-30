import { Avatar, Rate, Space, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../AdminPanelComponents/Footer";
import Header from "../AdminPanelComponents/Header";
import ChangeOrderStatus from "../AdminPanelComponents/Orders/ChangeOrderStatus";
import ChangePaymentStatus from "../AdminPanelComponents/Orders/ChangePaymentStatus";
import OrderUserInfo from "../AdminPanelComponents/Orders/OrderUserInfo";
import ProductInfo from "../AdminPanelComponents/Orders/ProductInfo";
import UserInfo from "../AdminPanelComponents/Orders/UserInfo";
import SideBar from "../AdminPanelComponents/SideBar";
import "../HomePage/Index.css"
export const AdminOrder = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const callapi = async () => {
    await axios.get("/admin/order")
      .then((res) => {
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
    <div className='admin-section'>
          <Header />
      <div className="admin-section-grid-2">
        <div className="SideMenuAndPageContent">
          <div className="container-order">
            <br />
            <table class="table" style={{ backgroundColor: "white", borderRadius: "10px" }}>
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
                <tbody key={order.productId} >
                  <tr>
                    <th scope="row"><UserInfo profilePic={order.profilePic} name={order.name} phoneno={order.phoneno} email={order.email} dob={order.dob} /></th>
                    <td><OrderUserInfo ordername={order.ordername} address={order.address} addressoptional={order.addressoptional} state={order.state} city={order.city} postalcode={order.postalcode} ordermobile1={order.ordermobile1} ordermobile2={order.ordermobile2} Address={order.Address} AddressOptional={order.AddressOptional} /></td>
                    <td> <ProductInfo products={order.products} /></td>
                    <td><ChangeOrderStatus orderId={order._id} order_status={order.order_status} />
                     <div class="alert alert-warning my-2" role="alert">
                         {order.cash_on_delivery}
                    </div> 
                    <ChangePaymentStatus orderId={order._id} payment_status={order.payment_status} />
                    </td>
                    <td> <span>₹{order.bill}</span></td>
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

