import React from 'react'
import './login.css'
export default function Login() {
  return (
   <div className='box'>
      <div style={{textAlign:"center"}}><h1 >Sign in <i className="fa fa-sign-in"></i></h1></div>
      <div className='glg'><i className="fa-brands fa-google"></i> Sign in with Google</div>
      <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="xxxxxxxxx"/>
      </div>
      <p className="subtitle">Don't have an account? <a href="/register"> Sign up</a></p>
      <button className='submit-btn' >Submit</button>
   </div>
   )
}
