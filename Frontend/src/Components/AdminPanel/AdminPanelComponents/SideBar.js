import React from 'react'
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import "./SideBar.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/adminPanel");
  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className='sideBar-admin-panel'>
      <div className="SideMenuVertical">
        <div className="sideBar-heading">
          <h4>Admin Dashboard</h4>
        </div>
        <ul className="sideBarMenu">
          <NavLink to="/adminPanel">
            <li><AppstoreOutlined className='admin-panel-icon'/>Dashbaord</li>
          </NavLink>
          <NavLink  to="/adminpanel/products">
            <li><ShopOutlined className='admin-panel-icon' />Products</li>
          </NavLink>
          <NavLink  to="/adminpanel/orders">
            <li><ShoppingCartOutlined className='admin-panel-icon' />Orders</li>
          </NavLink>
          <NavLink to="/adminpanel/customer">
            <li><UserOutlined className='admin-panel-icon' />Users</li>
          </NavLink>
        </ul>
      </div>
      {/* <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/adminpanel",
          },
          {
            label: "Products",
            key: "/adminpanel/products",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/adminpanel/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Users",
            key: "/adminpanel/customer",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu> */}
    </div>
  )
}

export default SideBar
