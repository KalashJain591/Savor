import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/auth_context';
import './login.css'
import Signinwithgoogle from './Signinwithgoogle';
export default function Login() {
  const { loggedIn,getLoggedIn, getuserdeatils} = useContext(AuthContext);
   const history = useNavigate()
   const [ user, setUser] = useState({
       phoneno:"",
       password:"",
   })

   useEffect(() => {
    if (loggedIn) {
      history("/");
    }
  }, [loggedIn]);

   const handleChange = e => {
       const { name, value } = e.target
       setUser({
           ...user,
           [name]: value
       })
   }
   const  afterlogin= ()=>{
    // console.log("After order");
    getuserdeatils()
    getLoggedIn();
    history("/");
   }
   async function login() {
     try {
       const { email, password } = user
    // console.log("before order");
       await axios.post("auth/login",user)
       .then((res)=>{afterlogin()});
     } catch (err) {
       console.error(err);
     }
   }
  return (
   <div className="containerdiv card1">
      {/* <img className='card-img' src='https://previews.123rf.com/images/lenm/lenm1411/lenm141100355/34020456-illustration-featuring-materials-for-making-homemade-herbal-medicine.jpg' alt=''/> */}
      <h2 className="title"> Log in</h2>
      <p className="subtitle" style={{color:'black'}}>Don't have an account? <a href="/register"> Signup</a></p>
      <Signinwithgoogle/>
      <div className="email-login">
         <label htmlFor="Phone No"> <b>Phone No</b> <i className="fa fa-phone" aria-hidden="true"></i></label>
         <input type="text" placeholder="Enter Your Phone Number" name="phoneno"
             value={user.phoneno}
              onChange={ handleChange } required/>
         <label htmlFor="psw"><b>Password</b> <i className="fa fa-eye-slash" aria-hidden="true"></i></label>
         <input  type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange } required/>
      </div>
      <button  onClick={()=>{login()}} className="submit-btn">Sign in</button>
      <a className="forget-pass" href="/passwordforget">Forgot password?</a>
</div>
  )
}