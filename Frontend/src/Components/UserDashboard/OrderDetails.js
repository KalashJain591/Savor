import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OrderDetailComponent from './OrderDetailComponent';
export default function OrderDetails() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);

  const callapi = async () => {
    // console.log('first')
    await axios.get(`/paticularOrderofperson/${id}`).then((res) => {
      setData(res.data);
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
            <OrderDetailComponent val={currelem.products}  />
          })}
          <div>
            <h3>Total Bill :{data.bill}</h3>
          </div>
        </tbody>
      </table>

    </div>
  )
}
