import React, { useCartContext, useEffect, useState, useContext } from 'react'
import './dashboard.css'
import trackRecord from './trackRecord'
import TrackComponent from './TrackComponent'
import axios from 'axios';
import AuthContext from '../../Context/auth_context';
import { useParams } from 'react-router-dom';

export default function TrackOrders() {
 
    const {id}=useParams();
    console.log(id);
    const [stats, setstatus] = useState(id);
    console.log(stats);
    let present_status = 0;
    const arr = ["ORDER PLACED", "Processed", "Shipped", "On the way", "Delivered"];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === stats) {
            present_status = i;
            break;
        }
    }
    



    return (

        < div className='container'>
            <h1 className='text-center my-4'>Track Your Order</h1>
            <div className=' row'>
                <div className='col-12 col-md-5'>
                    {
                        trackRecord.map((key, index) => {
                            return <TrackComponent idx={index} status={present_status} />
                        })}
                    <h1 className='ms-2 text-center' style={{ backgroundColor: present_status==4 ? "green" : "gray", color: stats ? "black" : "#6d6767" }}>Completed</h1>
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
