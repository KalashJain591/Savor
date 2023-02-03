import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OrderDetailComponent from './OrderDetailComponent';
export default function OrderDetails() {
  const { id } = useParams();
  // console.log(id);

  const [data, setData] = useState([]);
  const [bill, setBill] = useState(0);
  const callapi = async () => {
    // console.log('first')
    await axios.get(`/order/paticularOrderofperson/${id}`).then((res) => {
      setData(res.data.products);
      setBill(res.data.bill)
      console.log(res.data, "HELLO");
    });
  };
  useEffect(() => {
    callapi();
  }, []);


  return (
    <div className='container'>
      <table className="table text-center mb-0">
        <thead className="text-dark">
          <tr>
            <th>Item</th> 
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((currelem)=>{
            {/* {console.log("map ke andar",currelem)} */}
            return <OrderDetailComponent val={currelem }  />
          })}
          <div>
          {/* {console.log(data)} */}
            <h3>Total Bill : {bill}</h3>
          </div>
        </tbody>
      </table>

    </div>
  )
}
