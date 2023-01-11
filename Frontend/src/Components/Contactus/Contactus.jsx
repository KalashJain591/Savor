import React from 'react'
import './contactus.css'
export default function Contactus() {
  return (
    <div className='bgcol'>
          <h1  style={{textAlign:"center" ,color:'gray', fontSize:"40px", marginTop:"8px" }}>Contact us </h1>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924403243!2d75.7237605292052!3d22.72422843169994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1673347131144!5m2!1sen!2sin" style={{border:"3px solid  rgba(124,196,70,1) ", borderRadius:"8px", padding:"12px"}}  width={"100%"} height={"450"}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <section className="contact-sec sec-pad">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-detail">
          <h1 className="section-title">Contact us</h1>

          <ul className="contact-ul">
            <li><i className="fa fa-location-dot"></i> Indore, Madhya Pradesh</li>

            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:08510004495"><b>0255000XXXX</b></a>,
              <a href="tel:08510005495"><b>0251600XXXX</b></a>
            </li>

            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:pardeepkumar4bjp@gmail.com"><b>savronaturals@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="#" className="fb"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="insta"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
          </span>
        </div>
      </div>

      <div className="col-md-6">
        <form action="#" className="contFrm" method="POST">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
            </div>

            <div className="col-12">
              <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div className="col-12">
              <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <hr style={{color:"black"}}/>
  </div>
</section>
    </div>
  )
}
