import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Forgetpassword() {
    const [password, setpassord] = useState("")
    const navigate=useNavigate();
    const { id } = useParams();
    const afterreset=()=>{
      alert("Password Changed Successfully");
      navigate("/login")
  }
    const resetpassword=async()=>{
        await axios.post(`/auth/passwordreseted/${id}`,{password})
        .then((res)=>{ afterreset()});
        // console.log(password);
        // console.log(id);
    }
    return (
    <div>
    <div className="containerdiv card1">
      <h2 className="title my-4"> Reset Password</h2>
      <div className="email-login">
         <label htmlFor="Password"> <b>Password</b> <i className="fa fa-eye-slash" aria-hidden="true"></i></label>
         <input type="password" placeholder="Enter Your New Password"  value={password}  onChange={(e)=> setpassord(e.target.value) } required/>
      </div>
      <button  onClick={()=>{resetpassword()}} className="submit-btn">Reset Password</button>
    </div>
    </div>
  )
}
