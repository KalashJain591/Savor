import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/auth_context";
import ViewOrderComponent from "./ViewOrderComponent";
const ViewOrders = () => {
  // const { userId} = useContext(AuthContext);
  const [id, setid] = useState();
  const [stats, setstatus] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const callapi2= async (userId)=>{
    console.log('first',userId)
    await axios.get(`/order/personorder/${userId}`).then((res) => {
      setDataSource(res.data);
      console.log(res.data);
    });
  }
  const callapi = async () => {
    await axios.get("/auth/dashboard")
    .then((res)=>{callapi2(res.data._id)})
   
  };

  useEffect(() => {
    callapi();
  }, []);

  return (
    <div className="viewOrderSection container">
      <h1 className="fs-1 text-center">Your Orders</h1>
      <table class="table">
        <thead>
          <tr className="text-center"> 
            <th className="col-6">Orders</th>
            <th className="col-3">details</th>
            <th className="col-3">Track</th>
          </tr>
        </thead>
      <tbody>
       {/* { console.log("hello" , dataSource)} */}
        {dataSource.map((currelem)=>{
       return  <ViewOrderComponent id={currelem._id} status={currelem.order_status}/>
        })}
      </tbody>
      </table>
    </div>
  );
};

export default ViewOrders;
