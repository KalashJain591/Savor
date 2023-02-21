import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OrderDetailComponent from './OrderDetailComponent';
export default function OrderDetails() {
  const { id } = useParams();
  // console.log(id);

  const [data, setData] = useState([]);
  const [bill, setBill] = useState(0);
  const [date,setDate]=useState("");
  const callapi = async () => {
    // console.log('first')
    await axios.get(`/order/paticularOrderofperson/${id}`).then((res) => {
      let obj=res.data.products;
      let dates=res.data.date_added.slice(0,10);
      setDate(dates);
      setData(obj);
      setBill(res.data.bill)
      console.log(data, "HELLO");
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
             console.log(data) 
            return <OrderDetailComponent val={currelem }  />
          })}
          
         
          
          
        </tbody>
        
      </table>
      <div className='mt-5 d-flex justify-content-evenly'>
            <h3 className='p-2' style={{backgroundColor:"#98e0ec"}}>Total Bill :-<br/> {bill}</h3>
            <h3   className='p-2'style={{backgroundColor:"#98e0ec"}}>Ordered On :-<br/>{date}</h3>
            </div>

    </div>
  )
}
