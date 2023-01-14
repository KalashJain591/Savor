// import React from 'react'
// import './contactus.css'
// export default function Contactus() {
//   return (
//     <div className='bgcol'>
//           <h1  style={{textAlign:"center" ,color:'gray', fontSize:"40px", marginTop:"8px" }}>Contact us </h1>
//           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14719.972156865595!2d75.8277861!3d22.7285001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3e29863ff9874e3!2sSavor%20Naturals!5e0!3m2!1sen!2sin!4v1673534575361!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  style={{border:"3px solid  rgba(124,196,70,1) ", borderRadius:"8px", padding:"12px"}}  width={"100%"} height={"450"}  ></iframe>
//       <section className="contact-sec sec-pad">
//   <div className="container">
//     <div className="row">
//       <div className="col-md-6">
//         <div className="contact-detail">
//           <h1 className="section-title">Contact us</h1>

//           <ul className="contact-ul">
//             <li><i className="fa fa-location-dot"></i> Indore, Madhya Pradesh</li>

//             <li>
//               <i className="fa fa-phone"></i>
//               <a href="tel:08510004495"><b>0255000XXXX</b></a>,
//               <a href="tel:08510005495"><b>0251600XXXX</b></a>
//             </li>

//             <li>
//               <i className="fa-solid fa-envelope"></i>
//               <a href="mailto:pardeepkumar4bjp@gmail.com"><b>savronaturals@gmail.com</b></a>
//             </li>
//           </ul>

//           <span>
//             <a href="#" className="fb"><i className="fa-brands fa-facebook"></i></a>
//             <a href="#" className="insta"><i className="fa-brands fa-instagram"></i></a>
//             <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
//           </span>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <form action="#" className="contFrm" method="POST">
//           <div className="row">
//             <div className="col-sm-6">
//               <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
//             </div>

//             <div className="col-sm-6">
//               <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
//             </div>

//             <div className="col-sm-6">
//               <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
//             </div>

//             <div className="col-sm-6">
//               <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
//             </div>

//             <div className="col-12">
//               <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
//             </div>

//             <div className="col-12">
//               <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//     <hr style={{color:"black"}}/>
//   </div>
// </section>
//     </div>
//   )
// }













// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");


// /* .bgcol{
//   background:  #90EE90; 
// } */

// ul {
//   list-style: none;
// }

// input {
//   overflow: hidden;
// }

// .section-title {
//   position: relative;
//   font-size: 30px;
//   font-weight: 600;
//   font-family: "Poppins", sans-serif;
//   margin: 0 0 35px;
// }

// .sec-pad {
//   padding: 60px 0 0;
//   /* margin: 50px 0; */
// }

// .contact-sec {
//   /* align-item: center; */
//   display: flex;
//   background: linear-gradient(90deg, rgba(124,196,70,1) 20%, rgba(79,184,72,1) 45%, rgba(33,173,76,1) 73%);
//   /* background-color: #5cbde466; */
// }

// .contact-sec .contact-ul li,
// .contact-ul b {
//   font-size: 20px;
//   margin: 10px 0;
//   font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
//   word-wrap: break-word;
// }

// .contact-sec .contact-ul i {
//   font-size: 18px;
//   padding: 10px;
//   margin-right: 10px;
//   border-radius: 50%;
// }
// .contact-detail a {
//   color: #000;
//   text-decoration: none;
// }

// .contact-sec .contact-ul li b:hover {
//   color: #f93;
// }

// .contact-sec .contact-ul li .fa-location-dot {
//   color: #f44337;
//   border: 2px solid #f4433790;
// }

// .contact-sec .contact-ul li .fa-phone {
//   color: #00b055;
//   border: 2px solid #00b05590;
// }

// .contact-sec .contact-ul li .fa-envelope {
//   color: #ff6347;
//   border: 2px solid #ff634790;
// }

// .contact-detail span {
//   width: 400px;
//   display: flex;
//   justify-content: center;
// }
// .contact-detail span a {
//   font-size: 20px;
//   padding: 6px 12px;
//   color: #000;
//   border-radius: 50%;
//   margin: 0px 5px;
// }
// .contact-detail span .fb {
//   color: #3b5998;
//   border: 3px solid #3b5998;
// }
// .contact-detail span .fb:hover {
//   color: #fff;
//   background-color: #3b5998;
// }

// .contact-detail span .insta {
//   color: #833ab4;
//   border: 3px solid #833ab4;
// }
// .contact-detail span .insta:hover {
//   color: #fff;
//   background-color: #833ab4;
// }

// .contact-detail span .twitter {
//   color: #00acee;
//   border: 3px solid #00acee;
// }
// .contact-detail span .twitter:hover {
//   color: #fff;
//   background-color: #00acee;
// }

// form.contFrm {
//   max-width: 396px;
//   margin: auto;
// }

// .inptFld {
//   width: 100%;
//   height: 50px;
//   border: 0;
//   margin: 0 0 10px;
//   border-radius: 8px;
//   padding: 0 20px;
//   font-size: 16px;
//   color: #000;
// }

// .inptFld:focus {
//   outline-offset: -4px;
//   outline: 1px solid #f93;
// }

// .contFrm textarea {
//   height: 75px;
//   padding-top: 5px;
// }
// .inptBtn {
//   height: 50px;
//   border: 0;
//   background: #00b055;
//   font-size: 14px;
//   color: #fff;
//   margin: auto;
//   letter-spacing: 1px;
//   cursor: pointer;
//   width: 100%;
//   max-width: 200px;
// }

// /* Responcive css Start */

// @media (max-width: 991px) {
//   .sec-pad {
//     padding: 20px 0 0px;
//   }

//   .contact-sec .contact-ul li,
//   .contact-ul b {
//     font-size: 18px;
//   }

//   .contact-sec .contact-ul i {
//     font-size: 14px;
//     padding: 6px;
//     margin-right: 6px;
//   }

//   .inptFld {
//     height: 40px;
//     margin: 0 0 10px;
//     padding: 0 14px;
//     font-size: 14px;
//   }
// }

// @media (max-width: 767px) {
//   .contact-detail span {
//     width: auto;
//   }
//   .contact-detail span a {
//     font-size: 18px;
//     padding: 5px 10px;
//     color: #000;
//     border-radius: 50%;
//     margin: 0px 5px 20px;
//   }
// }

// @media (max-width: 575px) {
//   .section-title {
//     font-size: 26px;
//     font-weight: 500;
//   }
//   .contact-sec {
//     border-radius: 10% 10% 0% 0% / 5% 5% 0% 0%;
//   }

//   .contact-sec .contact-ul i {
//     border: none;
//   }
//   .inptFld {
//     height: 36px;
//     margin: 0 0 8px;
//     padding: 0 14px;
//     font-size: 14px;
//   }
// }

// @media (max-width: 480px) {
//   .contact-sec .contact-ul li,
//   .contact-ul b {
//     font-size: 16px;
//   }
// }