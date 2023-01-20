import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-image footer-solo-section">
            <img src="/images/Savor_Logo.png" alt=""/>
          </div>
          <div className="footer-content-section footer-solo-section">
            <div className="content-section-heading">
              <h6>Category</h6>
              <ul>
                <li>Spices</li>
                <li>Flours</li>
                <li>Healthy Snacks</li>
                <li>Sweetners</li>
                <li>Cereals</li>
                <li>GoSeva Products</li>
              </ul>
            </div>
          </div>
          <div className="footer-help-section footer-solo-section">
            <h6>Help</h6>
            <ul>
              <li>Shipping Information (FAQs)</li>
              <li>Returns & Exchange (Contact)</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-contact-section footer-solo-section">
            <h6>Have a Questions?</h6>
            <div className="footer-address solo-contact">
              <i className="fa-solid fa-location-dot"></i> 184, Sukhdev Vihar, 60 Feet Rd, Indore, Madhya Pradesh 452005
            </div>
            <div className="footer-contact-no solo-contact">
              <i className="fa-solid fa-phone"></i> 9827141324
            </div>
            <div className="footer-gmail solo-contact">
              <i className="fa-solid fa-envelope"></i> admin@savornaturals.in
            </div>
          </div>
        </div>
      </div>
  );
}
