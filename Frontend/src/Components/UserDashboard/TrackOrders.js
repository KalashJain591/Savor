import React, { useCartContext, useEffect, useState, useContext } from 'react'
import './dashboard.css'
import trackRecord from './trackRecord'
import TrackComponent from './TrackComponent'
import axios from 'axios';
import AuthContext from '../../Context/auth_context';

export default function TrackOrders() {
    // const { placed } = useCartContext();
    // console.log(placed);
    let status = trackRecord[4].status;
    // if (!placed) {
    //     return (<>
    //         <div className='text-center'>
    //             <h1>Oop's <br />You Have not placed any order yet</h1>
    //         </div>
    //     </>)
    // }
    // var x = localStorage.getItem("Buynow");
    // console.log(x);
    // let id1 = x.slice(2);
    // console.log(id1);
    // console.log("hello from ")



    const { userId, loggedIn } = useContext(AuthContext);
    const [id, setid] = useState();
    const [stats, setstatus] = useState([]);
    const [dataSource, setDataSource] = useState("");
    console.log(userId);
    const callapi = async () => {
        await axios.get("/admin/order")
            .then((res) => {
                setDataSource(res.data);
                console.log(res.data);
                console.log("hello from view");
                //   setstatus(res.data.order_status);
                //   console.log(res.data.order_status);

                //   console.log(res.data);
                console.log(res.data[2].userId + "jelly");

            })
    }

    // console.log(stats);
    // console.log(order_id)
    // const callapi = async () => {
    //     // console.log(props.orderId , order_status);
    //     await axios.post(`/admin/editorderstatus/${props.orderId}`);
    // }
    useEffect(() => {
        callapi();
    }, []);

    let present_status = 0;
    const arr = ["placed", "processed", "shipped", "on the way", "delivered"];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === stats) {
            present_status= i;
            break;
        }
    }



    return (

        < div className='container'>
            <h1 className='text-center my-4'>Track Your Order</h1>
            <div className=' row'>
                <div className='col-12 col-md-5'>
                    {
                        trackRecord.map((key,index) => {
                            return <TrackComponent idx={index} status={present_status}  />
                        })}
                    <h1 className='ms-2 text-center' style={{ backgroundColor: status ? "green" : "gray", color: status ? "black" : "#6d6767" }}>Completed</h1>
                </div>
                {/* <div style={{color:"black"}}>{dataSource.map((currelem)=>
             <h1>{currelem._id}</h1>
               )}</div> */}

                <div className='col-12 col-md-7'>
                    <h3 className='text-dark float-end'>expected Delivery :<br /></h3>
                </div>
            </div>
        </div>
    )
}
