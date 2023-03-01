import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import AuthContext from '../../../Context/auth_context';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const {admin, setLoggedIn, setadmin, getLoggedIn,getuserdeatils } = useContext(AuthContext);
  async function logOut() {
    setadmin(false);
    await axios.get("/auth/logout")
      await getLoggedIn();
      await getuserdeatils();
      navigate("/") 
  }
  useEffect(() => {
    if(admin!==true){
      navigate("/");          
    }
  }, [])

  return (
    <div className='header-container-admin-panel'>
      <div className='header-section-admin-panel'>
        <div className="sideBar-heading">
          <h4>Admin Dashboard</h4>
        </div>
        <ul className="Navigation-admin-panel">
          <li>
            <NavLink to="/adminPanel"><AppstoreOutlined className='admin-panel-icon' />Dashbaord</NavLink>
          </li>
          <li>
            <NavLink to="/adminpanel/products"><ShopOutlined className='admin-panel-icon' />Products</NavLink>
          </li>
          <li>
            <NavLink to="/adminpanel/orders"><ShoppingCartOutlined className='admin-panel-icon' />Orders</NavLink>
          </li>
          <li>
            <NavLink to="/adminpanel/customer"><UserOutlined className='admin-panel-icon' />Users </NavLink>
          </li>
          <button className='admin-panel-logout' onClick={logOut}><i className="fa fa-sign-out admin-sign-out" aria-hidden="true"></i><p>Logout</p></button>
        </ul>
      </div>
      <div className="header-container-admin-panel">
        <div className="R_NavBar-nav-admin-panel">
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas show={show} className="off_canvas" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                Admin Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation-admin-panel">
                <li>
                  <NavLink to="/adminPanel"><AppstoreOutlined className='admin-panel-icon' />Dashbaord</NavLink>
                </li>
                <li>
                  <NavLink to="/adminpanel/products"><ShopOutlined className='admin-panel-icon' />Products</NavLink>
                </li>
                <li>
                  <NavLink to="/adminpanel/orders"><ShoppingCartOutlined className='admin-panel-icon' />Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/adminpanel/customer"><UserOutlined className='admin-panel-icon' />Users </NavLink>
                </li>
                <button className='admin-panel-logout' onClick={logOut}><i className="fa fa-sign-out admin-sign-out" aria-hidden="true"></i><p>Logout</p></button>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  )
}

export default Header
