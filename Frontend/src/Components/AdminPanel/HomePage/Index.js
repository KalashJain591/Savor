import React, { useContext, useEffect, useState } from 'react'
import Footer from '../AdminPanelComponents/Footer'
import Header from '../AdminPanelComponents/Header'
import PageContent from '../AdminPanelComponents/PageContent'
import SideBar from '../AdminPanelComponents/SideBar'
import "./Index.css"
import AuthContext from '../../../Context/auth_context';
import {useNavigate } from 'react-router-dom'
const Index = () => {
  const { loggedIn, admin } = useContext(AuthContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(admin!==true){
  //     navigate("/");          
  //   }
  // }, [admin])

  return (
    <div className='admin-section'>
      <div className="admin-section-grid-2">
        <SideBar />
        <div className="SideMenuAndPageContent">
          <Header />
          {/* <PageContent /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export default Index
