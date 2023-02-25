import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import AuthContext from "../../Context/auth_context"
import { useCartContext } from "../../Context/cart_context";
import "./Header.css";
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { getLoggedIn, loggedIn, UserName, userprofile, getuserdeatils } = useContext(AuthContext);
  const history = useNavigate()
  async function logOut() {
    await axios.get("/auth/logout");
    await getLoggedIn();
    await getuserdeatils();
    history('/');
  }

  useEffect(() => {
    getuserdeatils();
  }, [])
  const { total_items } = useCartContext()
  return (
    <>
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
                  < NavLink to="/gallery" onClick={handleClose}><i class="fa-solid fa-image"></i> Gallery</NavLink>
              </li>
            <li className="Nav-list">
              < NavLink to="/aboutus"><i className="fa fa-info-circle" aria-hidden="true"></i> About Us</NavLink>
            </li>
            <li className="Nav-list">
              < NavLink to="/contactus"><i className="fa fa-address-book" aria-hidden="true"></i> Contact Us</NavLink>
            </li>
            {loggedIn ?
              <>
                <li className="Nav-list">
                  < NavLink onClick={logOut}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout  </NavLink>
                </li>
                <li className="Nav-list">
                  < NavLink to="/UserDashboard">
                    {/* {UserName} */}
                    <img src={userprofile} width={"35px"} height={"35px"} style={{ borderRadius: "25px" }} />
                  </NavLink>
                </li>
              </>
              : <li className="Nav-list">
                < NavLink to="/login">Sign in <i className="fa fa-sign-in"></i></NavLink>
              </li>}
            <li className="Nav-list">
              <NavLink to="/cart" className="navbar-link cart-trolley--link  me-2 ">
                <FiShoppingCart className="cart-trolley " />
                <span className="item-count ">{total_items}</span>
              </NavLink>
            </li>
            {/* <li className="Nav-list">
              < NavLink to="/UserDashboard">Dashboard</NavLink>
            </li> */}
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
                  < NavLink to="/" onClick={handleClose}><i className="fa fa-home R_icon" aria-hidden="true"></i> Home</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/products" onClick={handleClose}><i className="fa fa-shopping-basket R_icon" aria-hidden="true"></i>Products</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/gallery" onClick={handleClose}><i class="fa-solid fa-image R_icon"></i>Gallery</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/aboutus" onClick={handleClose}><i className="fa fa-info-circle R_icon" aria-hidden="true"></i>About Us</NavLink>
                </li>
                <li className="R_Nav-list">
                  < NavLink to="/contactus" onClick={handleClose}><i className="fa fa-address-book R_icon" aria-hidden="true"></i>Contact Us</NavLink>
                </li>
                {loggedIn ?
                  <>
                    <li className="R_Nav-list">
                      < NavLink onClick={logOut}><i className="fa fa-sign-out R_icon" aria-hidden="true"></i> Logout  </NavLink>
                    </li>
                    <li className="R_Nav-list">
                      < NavLink to="/UserDashboard" onClick={handleClose}><i className="fa-solid fa-user R_icon"></i>Dashboard</NavLink>
                    </li>
                  </>
                  : <li className="R_Nav-list">
                    < NavLink to="/login" onClick={handleClose}>Sign in <i className="fa fa-sign-in R_icon"></i></NavLink>
                  </li>}
                  <li className="R_Nav-list">
                    <NavLink to="/cart" onClick={handleClose} className="navbar-link cart-trolley--link  me-2 ">
                      <FiShoppingCart className="cart-trolley"/> 
                      <span className="item-count ">{total_items}</span>
                    </NavLink>
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
