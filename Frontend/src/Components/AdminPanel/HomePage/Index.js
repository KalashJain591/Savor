import React, { useContext, useEffect, useState } from 'react'
import Footer from '../AdminPanelComponents/Footer'
import Header from '../AdminPanelComponents/Header'
import PageContent from '../AdminPanelComponents/PageContent'
import SideBar from '../AdminPanelComponents/SideBar'
import "./Index.css"
import AuthContext from '../../../Context/auth_context';
import { Link, Outlet, useNavigate } from 'react-router-dom'
const Index = () => {
  const { loggedIn , admin} = useContext(AuthContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(admin!==true){
  //     navigate("/");          
  //   }
  // }, [admin])
  
  return (
    <div className='admin-section'>
      <Header />
      <div className="SideMenuAndPageContent">
        <SideBar ></SideBar>
        <PageContent></PageContent>
        
      </div>
      <Footer />
    </div>
  )
}

export default Index
