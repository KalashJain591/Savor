import React from 'react'
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      <Menu
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
      ></Menu>
    </div>
  )
}

export default SideBar
