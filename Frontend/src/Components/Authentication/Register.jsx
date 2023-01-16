import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './login.css'
import AuthContext from '../../Context/auth_context';
import Signinwithgoogle from './Signinwithgoogle';
export default function Register() {
  const { getLoggedIn } = useContext(AuthContext);
   const history = useNavigate()
   const [ user, setUser] = useState({
      name: "",
      email:"",
      phoneno:"",
      password:"",
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  async function signup() {
   try {
     const { name, email,phoneno, password } = user
    //  console.log(user);
     await axios.post("/auth/register",user);
     await getLoggedIn();
     history("/");
   } catch (err) {
     console.error(err);
   }
 }


 const register = () => {
     const { name, email,phoneno, password } = user
      if(phoneno.length!==10){
       alert("Invalid Phone Number");
     }
     else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
       alert("Invalid Email");
     }
     else if(name&& email && phoneno && password ){
         signup();
     } else {
         alert("Please fill all the fields")
     }
   }
  return (
   <div className="containerdiv card1">
   {/* <img className='card-img' src='https://previews.123rf.com/images/lenm/lenm1411/lenm141100355/34020456-illustration-featuring-materials-for-making-homemade-herbal-medicine.jpg' alt=''/> */}
   <h2 className="title"> Sign up</h2>
   <p className="subtitle">Do you have an account? <a href="/login"> Sign in</a></p>
   <Signinwithgoogle/>
   <div className="email-login">
   <label htmlFor="name"> <b>Full Name</b> <i className="fa fa-user" aria-hidden="true"></i></label>
      <input type="text" name="name" 
            value={user.name} 
            placeholder="Enter Your Name" 
            onChange={ handleChange } required/>
      <label htmlFor="Phone No"> <b>Phone No</b> <i className="fa fa-phone" aria-hidden="true"></i></label>
      <input type="text" name="phoneno"
             value={user.phoneno}
              placeholder="Enter Your Phone Number"
               onChange={ handleChange } required/>
      <label htmlFor="email"> <b>Email</b> <i className="fa fa-envelope" aria-hidden="true"></i></label>
      <input type="text" name="email"
             value={user.email}
              placeholder="Enter Your Email"
               onChange={ handleChange } />
      <label htmlFor="psw"><b>Password</b> <i className="fa fa-eye-slash" aria-hidden="true"></i></label>
      <input type="password" name="password"
             value={user.password}
              placeholder="Enter Your Password"
               onChange={ handleChange } required/>
   </div>
   <button  onClick={register} className="submit-btn">Sign up</button>
   {/* <a className="forget-pass" href="#">Forgot password?</a> */}
</div>

  )
}
