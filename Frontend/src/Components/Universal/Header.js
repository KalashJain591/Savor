import React, { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {FiShoppingCart} from "react-icons/fi"
import {NavLink} from "react-router-dom"
import AuthContext from "../../Context/auth_context"
import "./Header.css";
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <div className="NavBar">
        <div className="NavBar-nav">
          <ul className="Navigation">
            <li className="Nav-list">
              < NavLink to ="/">Home Page</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to ="/products">Products</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to ="/aboutus">About Us</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to ="/contactus">Contact Us</NavLink>
            </li>
            {loggedIn?  
            <li className="Nav-list">
              < NavLink to ="/dashboard"><i className="fa-solid fa-user"></i></NavLink>
            </li> 
            :           <li className="Nav-list">
            < NavLink to ="/login">Sign in <i className="fa fa-sign-in"></i></NavLink>
            </li> }
            <li className="Nav-list">
              < NavLink to ="/Cart"><FiShoppingCart className="cart-trolley"/></NavLink>
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
                  < NavLink to ="/">Home Page</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to ="/products">Products</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to ="/aboutus">About Us</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to ="/contactus">Contact Us</NavLink>
                </li>
                {loggedIn?  
            <li className="R_Nav-list">
              < NavLink to ="/dashboard"><i className="fa-solid fa-user"></i></NavLink>
            </li> 
            :           <li className="R_Nav-list">
            < NavLink to ="/login">Sign in <i className="fa fa-sign-in"></i></NavLink>
            </li> }
                <li className="R_Nav-list">
                  < NavLink to ="/Cart">Your Cart</NavLink>
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
