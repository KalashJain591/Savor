import React from 'react'
import Footer from '../AdminPanelComponents/Footer'
import Header from '../AdminPanelComponents/Header'
import PageContent from '../AdminPanelComponents/PageContent'
import SideBar from '../AdminPanelComponents/SideBar'
import "./Index.css"
const Index = () => {
  return (
    <div className='admin-section'>
      <Header />
      <div className="SideMenuAndPageContent">
        <SideBar></SideBar>
        <PageContent></PageContent>
      </div>
      <Footer />
    </div>
  )
}

export default Index
