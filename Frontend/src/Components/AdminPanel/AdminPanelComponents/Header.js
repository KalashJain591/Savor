import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  async function logOut() {
    await axios.get("/auth/logout")
      .then((res) => { navigate("/") });
  }
  return (
    <>
      <div className='header-section-admin-panel'>
        <div className="admin-panel-logo">
          <img src="/images/SavorLogoTag.png" alt="" />
        </div>
        <button className='admin-panel-logout' onClick={logOut}><i className="fa fa-sign-out admin-sign-out" aria-hidden="true"></i><p>Logout</p></button>
      </div>
      <div className="NavBar">
        <div className="NavBar-nav">
          <div className="navbar-image">
            <img className='logo-img' src="/images/logo-img.png" alt="" />
            <img className='logo-tag' src="/images/SavorLogoTag.png" alt="" />
          </div>
          <ul className="Navigation">
            <li className="Nav-list">
              < NavLink to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to="/products"><i className="fa fa-shopping-basket" aria-hidden="true"></i> Products</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to="/aboutus"><i className="fa fa-info-circle" aria-hidden="true"></i> About Us</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to="/contactus"><i className="fa fa-address-book" aria-hidden="true"></i> Contact Us</NavLink>
            </li>
              <li className="Nav-list">
                < NavLink onClick={logOut}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout  </NavLink>
              </li>
            <li className="Nav-list">
              < NavLink to="/login">Sign in <i className="fa fa-sign-in"></i></NavLink>
            </li>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="R_navbar-image">
            <img src="/images/SavorLogoTag.png" alt="" />
          </div>
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas show={show} className="off_canvas" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="R-navbar-image">
                  <img className='R-logo-tag' src="/images/SavorLogoTag.png" alt="" />
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_Nav-list">
                  < NavLink to="/" onClick={handleClose}><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/products" onClick={handleClose}><i className="fa fa-shopping-basket" aria-hidden="true"></i>Products</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/aboutus" onClick={handleClose}><i className="fa fa-info-circle" aria-hidden="true"></i>About Us</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/contactus" onClick={handleClose}><i className="fa fa-address-book" aria-hidden="true"></i>Contact Us</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink onClick={logOut}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout  </NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/dashboard" onClick={handleClose}><i className="fa-solid fa-user"></i></NavLink>
                </li>

                <li className="R_Nav-list">
                  < NavLink to="/login" onClick={handleClose}>Sign in <i className="fa fa-sign-in"></i></NavLink>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  )
}

export default Header
