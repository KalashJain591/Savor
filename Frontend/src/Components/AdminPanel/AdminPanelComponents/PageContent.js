import React from 'react'
import Customer from '../Pages/Customer'
import Dashboard from '../Pages/Dashboard'
import Inventory from '../Pages/Inventory'
import Order from '../Pages/Order'
import AdminRoutes from './AdminRoutes'

const PageContent = () => {
  return (
    <div className='PageContent'>
      {/* <Dashboard/> */}
      {/* <Customer/> */}
      {/* <Inventory/> */}
      {/* <Order/> */}
      <AdminRoutes/>
    </div>
  )
}

export default PageContent
