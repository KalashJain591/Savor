import React from 'react'
import './login.css'
export default function Login() {
  return (
   <div className='box'>
      <div style={{textAlign:"center"}}><h1 >Sign in <i className="fa fa-sign-in"></i></h1></div>
      <div className='glg'><i class="fa-brands fa-google"></i> Sign in with Google</div>
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="xxxxxxxxx"/>
      </div>
      <p className="subtitle">Don't have an account? <a href="/register"> Sign up</a></p>
      <button className='submit-btn' >Submit</button>
   </div>
   )
}
