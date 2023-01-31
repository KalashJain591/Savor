import React from 'react'
import { useState } from 'react'
import './contactus.css'
import axios from "axios"
const API="/mail"
export default function Contactus() {
const [FormData,setFormData]=useState({
  name:"",
  subject:"",
  text:"",
  userID:"",
  useremail:"",
  phone:"",
});

const handleChange=(e)=>{
  let key=e.target.name;
  let val=e.target.value;
  // console.log(key);
  // console.log(val);
  setFormData({...FormData,[key]:val});
}

const handleSubmit=(e)=>
{
  e.preventDefault();
  console.log(FormData);
  axios.post(`${API}/contactus`, FormData)
  .then((res) => {
    console.log(res);
    alert("Message Sent Successfully");
    
  })
  .catch((err) => {
    console.log(err);
  });
  

}


  return (
    <section className="contact-page-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="contact-info-text">
                <h2>address</h2>
                <span>184, 60 Feet Rd, Shakti Nagar, Loknayak Nagar, Sukhdev Vihar,</span> 
                <span> Indore, Madhya Pradesh 452005</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span> admin@savornaturals.in</span> 
                <span>yourmail@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-info-text">
                <h2>office time</h2>
                <span> 24 x 7 Support</span>
                {/* <span>Thu - Mon  10.00 pm - 5.00 pm</span> */}
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form  onSubmit={handleSubmit} action="contact-mail.php" method="post">
              <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"  onChange={handleChange}/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' className="form-control" placeholder="enter your email " onChange={handleChange} name="useremail"/>
                </div>
              </div>                            
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Phone Number" onChange={handleChange} name="phone"/>
                </div>
              </div>  
               
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Subject"  onChange={handleChange} name="subject" />
                </div>
              </div>                
              <div className="col-md-12 message-input">
                <div className="single-input-field">
                  <textarea  placeholder="Write Your Message" onChange={handleChange} name="text"></textarea>
                </div>
              </div>                                                
              <div className="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div className="col-md-4">        
          <div className="contact-page-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14719.972156865595!2d75.8277861!3d22.7285001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3e29863ff9874e3!2sSavor%20Naturals!5e0!3m2!1sen!2sin!4v1673534575361!5m2!1sen!2sin" width={"100%"} height={"450"}  style={{border:"0"}} allowfullscreen></iframe>
          </div>          
        </div>        
      </div>
    </div>
  </section>
  )
}
