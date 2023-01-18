
import React, { useContext, useState } from 'react'
import "./dashboard.css"
import Component1 from './component1';
import { dashData } from './dashboardData';
import AuthContext from '../../Context/auth_context';

export default function UserDashboard() {
 
  const { getLoggedIn, loggedIn ,UserName,userprofile,getuserdeatils } = useContext(AuthContext);
  const [DashItem, setDashItem] = useState("Order");
  return (
    <>
      <div className='container mb-4'>
        <div className='row text-center'>
          <h1>User Dashboard</h1>
        </div>
        <div className="d-flex flex-column-reverse  justify-content-between align-items-center">
          <div>
            <h1>Hello User ,</h1>
            <p className='fs-5  desc fs-4'>We've designed your dashboard to be intuitive and user-friendly. You can easily
              view your account information, order history,
              and much more. If you have any questions
              or need help, don't hesitate to reach out
              to our customer service team.</p>
          </div>
          <div>
            <img src={userprofile} className='UserImage' /></div>
        </div>
        <hr />

     



        <div className='d-flex flex-wrap justify-content-evenly '>
          {dashData.map((curElem, key) => {
            return <div className='d-inline-flex col-md-5 col-12'><Component1 idx={key} />  </div >


          })}
        </div>


        <div className='row'>
          <div className='col-md-5 col-12'>

          </div>
        </div>

      </div>
    </>
  )
}
