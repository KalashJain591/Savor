import React from 'react'
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../API";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  async function logOut() {
    await axios.get("/auth/logout")
      .then((res) => { navigate("/") });
  }
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className='header-section-admin-panel'>
      <div className="admin-panel-logo">
        <img src="/images/SavorLogoTag.png" alt="" />
      </div>
      <div className='notification'>
        <button className='admin-panel-logout' onClick={logOut}><i className="fa fa-sign-out admin-sign-out" aria-hidden="true"></i><p>Logout</p></button>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24, color: "white" }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24, color: "white" }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </div>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  )
}

export default Header
