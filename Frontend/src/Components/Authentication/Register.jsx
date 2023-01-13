import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './login.css'
import AuthContext from '../../Context/auth_context';
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
   <div className="social-login">
      <button className="ggle-btn">
         <img alt="Google" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
         <p className="btn-text">Sign up with Google</p>
      </button>
   </div>
   <p className="or1"><span>or</span></p>
   <div className="email-login">
   <label htmlFor="name"> <b>Full Name</b></label>
      <input type="text" name="name" 
            value={user.name} 
            placeholder="Enter Your Name" 
            onChange={ handleChange } required/>
      <label htmlFor="Phone No"> <b>Phone No</b> <i class="fa fa-phone" aria-hidden="true"></i></label>
      <input type="text" name="phoneno"
             value={user.phoneno}
              placeholder="Enter Your Phone Number"
               onChange={ handleChange } required/>
      <label htmlFor="email"> <b>Email</b></label>
      <input type="text" name="email"
             value={user.email}
              placeholder="Enter Your Email"
               onChange={ handleChange } />
      <label htmlFor="psw"><b>Password</b></label>
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
