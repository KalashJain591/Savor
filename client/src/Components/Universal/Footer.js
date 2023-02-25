import React from "react";
import { useFilterContext } from "../../Context/FilterContext";
import {NavLink} from "react-router-dom"
import "./Footer.css";
export default function Footer() {
  const { updateFilterValue, all_products} = useFilterContext();

  //To Get the unique data of each fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return newVal = ["All", ...new Set(newVal)]
    // console.log(getUniqueData)
  }
  //We need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-image footer-solo-section">
          <img src="/images/Savor_Logo.png" alt="" />
        </div>
        <div className="footer-content-section footer-solo-section">
          <div className="content-section-heading">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-help-section footer-solo-section">
          <h6>Category</h6>
          <ul>
            {categoryOnlyData.map((curElem) => {
              return (
                <NavLink to = "/products"><button className="category-list-footer" key={curElem} type="button" name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button><br/></NavLink>
              )
            })}
          </ul>
        </div>
        <div className="footer-contact-section footer-solo-section">
          <h6>Have Questions?</h6>
          <div className="footer-address solo-contact">
            <i className="fa-solid fa-location-dot"></i> 184, Sukhdev Vihar, 60 Feet Rd, Indore, Madhya Pradesh 452005
          </div>
          <div className="footer-contact-no solo-contact">
            <i className="fa-solid fa-phone"></i>+91 9827141324
          </div>
          <div className="footer-gmail solo-contact">
            <i className="fa-solid fa-envelope"></i> info.savornaturals@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
