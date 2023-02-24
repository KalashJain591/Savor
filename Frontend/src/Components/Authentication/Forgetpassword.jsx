import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Forgetpassword() {
    const [email, setemail] = useState("")
    const navigate=useNavigate();
    const resetpassword=async()=>{
        await axios.post("auth/forgot-password",{email})
        .then((res)=>{ navigate("/login")});
        // console.log(email);
    }
    return (
    <div>
         <div className="containerdiv card1">
      <h2 className="title my-4"> Forget Password</h2>
      <div className="email-login">
         <label htmlFor="Email"> <b>Email</b> <i className="fa fa-envelope" aria-hidden="true"></i></label>

         <input type="text" placeholder="Enter Your Email" 
             value={email}
              onChange={(e)=> setemail(e.target.value) } required/>
      </div>
      <button  onClick={()=>{resetpassword()}} className="submit-btn">Reset Password</button>
</div>
    </div>
  )
}
