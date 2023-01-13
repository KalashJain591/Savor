import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './dashboard.css'
import Dashboardcarts from './Dashboardcarts'

export default function Dashboard() {
  const [userDetails,setuserDetails]=useState({});
 
  async function details() {
    try {
     const response=await axios.get("/auth/dashboard")
        setuserDetails(response.data);
      // console.log(response.data);
  } catch (err) {
      console.error(err);
    }
  }
 
  useEffect(() => {
     details();
  },[userDetails]);

  return (
   <div>
    <div className="student-profile py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent text-center">
            <img className="profile_img" src="https://img.icons8.com/fluency/512/user-male-circle.png" alt=""/>
            <h3>{userDetails.name}</h3>
          </div>
          <div className="card-body">
            <p className="mb-0"><strong className="pr-1">Customer ID:</strong> {userDetails._id}</p>
            {/* <p className="mb-0"><strong className="pr-1">Class:</strong>4</p> */}
            {/* <p className="mb-0"><strong className="pr-1">Section:</strong>A</p> */}
          </div>
        </div>
      </div>
      <div className="col-lg-8 ">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0">General Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
            <tr>
                <th width="30%">Customer Id</th>
                <td width="2%">:</td>
                <td>{userDetails._id}</td>
              </tr>
            <tr>
                <th width="30%">Customer Name</th>
                <td width="2%">:</td>
                <td>{userDetails.name}</td>
              </tr>
              <tr>
                <th width="30%">Phone Number</th>
                <td width="2%">:</td>
                <td>{userDetails.phoneno}</td>
              </tr>
             
             
              {/* <tr>
                <th width="30%">Religion</th>
                <td width="2%">:</td>
                <td>Group</td>
              </tr>
              <tr>
                <th width="30%">blood</th>
                <td width="2%">:</td>
                <td>B+</td>
              </tr> */}
            </table>
          </div>
        </div>
        <Dashboardcarts/>
      </div>
    </div>
  </div>
</div>

   </div>
  )
}
