import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './login.css'
import AuthContext from '../../Context/auth_context';
import Signinwithgoogle from './Signinwithgoogle';
import { storage } from '../../Firebase/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
import Loading from './Loading';

export default function Register() {
  const [loadingbtn,setloadingbtn]=useState(false);
  const [imageUpload,setImageUpload]=useState(null);
  const fileListRef=ref(storage,'files/');
  const {loggedIn,getuserdeatils ,getLoggedIn } = useContext(AuthContext);
   const history = useNavigate()
   useEffect(() => {
    if (loggedIn) {
      history("/");
    }
  }, [loggedIn]);

   const [ user, setUser] = useState({
      profilePic:"",
      name: "",
      email:"",
      phoneno:"",
      dob:"",
      password:"",
  })
  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  const afterregister= ()=>{
    console.log("After order");
    getuserdeatils()
    getLoggedIn();
    history("/");
   }

async function callapi(url) {
  try{
    // console.log(user);
    const {profilePic, name, email,phoneno,dob, password } = user
    await axios.post("/auth/register",{profilePic:url,name, email,phoneno,dob, password})
    .then(()=>{afterregister()});
  }catch(err){
    console.log(err);
  }

}
 
  async function signup() {
   try {
    // console.log("SIGNUP");
   if(imageUpload!==null){
    if(!checkimg()){
      alert("Please upload Valid image in less than 200KB ");
   }
    const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
    await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setUser({
          ...user,
          profilePic:url
        })
        // console.log("UPDATED USER",user,url);
          callapi(url);
        // console.log("stored in firebase");
      })
    }) 
   }
   else{
    callapi("https://img.icons8.com/fluency/512/test-account.png");
   }
    //  console.log(user);
   } catch (err) {
     console.error(err);
   }
 }

 const checkimg=()=>{
  // console.log(imageUpload);
  // console.log(imageUpload.size);
  if(imageUpload.size>200000){
    return false;
  }
  // console.log(imageUpload.name)
  const fileExtension = imageUpload.name.split(".").at(-1);
  // console.log(fileExtension)
  const allowedFileTypes = ["jpg", "png","gif","jpeg"];
  if (!allowedFileTypes.includes(fileExtension)) {
      return false;
  }  
  return true;
 }

 const register = () => {
     const { name, email,phoneno,dob, password } = user
      if(phoneno.length!==10){
       alert("Invalid Phone Number");
     }
     else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
       alert("Invalid Email");
     }
     else if(name&& email && phoneno && password ){
      setloadingbtn(true);
         signup();
     } 
     else {
         alert("Please fill all the fields")
     }
   }
   
  const loadingstyle={
    filter:"blur(8px)"
  }   
  const nothing={
  }   
  
 
  return (
    <div>
   <div className="containerdiv card1" style={loadingbtn?loadingstyle:nothing}>
   {/* <img className='card-img' src='https://previews.123rf.com/images/lenm/lenm1411/lenm141100355/34020456-illustration-featuring-materials-for-making-homemade-herbal-medicine.jpg' alt=''/> */}
   <h2 className="title"> Sign up</h2>
   <p className="subtitle" style={{color:'black'}}>Do you have an account? <a href="/login"> Sign in</a></p>
   <Signinwithgoogle/>
   <div className="email-login">
   <label htmlFor="name"> <b>Profile Photo</b> <i className="fa fa-user" aria-hidden="true"></i></label> 
        <input type="file" className='btn btn-secondary mx-4 my-4'  accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0]) }} />
      {/* <button  type="button"  className='btn btn-secondary' onClick={uploadImage}>Upload File</button> */}

   <label htmlFor="name"> <b>Full Name</b> <i className="fa fa-user" aria-hidden="true"></i></label>
      <input type="text" name="name" 
            value={user.name} 
            placeholder="Enter Your Name" 
            onChange={ handleChange } required/>
      <label htmlFor="Phone No"> <b>Phone No</b> <i className="fa fa-phone" aria-hidden="true"></i></label>
      <input type="tel" name="phoneno"
             value={user.phoneno}
              placeholder="Enter Your Phone Number"
               onChange={ handleChange } required/>
      <label htmlFor="email"> <b>Email</b> <i className="fa fa-envelope" aria-hidden="true"></i></label>
      <input type="text" name="email"
             value={user.email}
              placeholder="Enter Your Email"
               onChange={ handleChange } />
      
      <label htmlFor="birthday">Date of Birth <i class="fa fa-birthday-cake" aria-hidden="true"></i> </label>
       <input type="date" id="dob" name="dob" value={user.dob} onChange={ handleChange } />

      <label htmlFor="psw"><b>Password</b> <i className="fa fa-eye-slash" aria-hidden="true"></i></label>
      <input type="password" name="password"
             value={user.password}
              placeholder="Enter Your Password"
               onChange={ handleChange } required/>
   </div>
   <button  onClick={register} className="submit-btn">Sign up</button>
   {/* <a className="forget-pass" href="#">Forgot password?</a> */}
</div>
   {loadingbtn? <Loading/>:<></>}
</div>
  )
}