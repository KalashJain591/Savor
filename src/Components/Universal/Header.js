import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {FiShoppingCart} from "react-icons/fi"
import "./Header.css";
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="NavBar">
        <div className="NavBar-nav">
          <ul className="Navigation">
            <li className="Nav-list">
              <a href="/">Home Page</a>
            </li>
            <li className="Nav-list">
              <a href="/products">Products</a>
            </li>
            <li className="Nav-list">
              <a href="/aboutus">About Us</a>
            </li>
            <li className="Nav-list">
              <a href="/contactus">Contact Us</a>
            </li>
            <li className="Nav-list">
              <a href="/dashboard"><i class="fa-solid fa-user"></i></a>
            </li>
            <li className="Nav-list">
              <a href="/Cart"><FiShoppingCart className="cart-trolley"/></a>
            </li>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas show={show} className="off_canvas" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Savor</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_Nav-list">
                  <a href="/">Home Page</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/Products">Products</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/About">About Us</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/Contact">Contact Us</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/Account">Account</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}

export default NavBar;
