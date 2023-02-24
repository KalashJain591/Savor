import React from 'react'
import Button from 'react-bootstrap/Button'
import { FiShoppingCart } from 'react-icons/fi'
import './dashboard.css'
import DashboardsingleCart from './DashboardsingleCart'

export default function Dashboardcarts() {
  return (
    <div>
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><FiShoppingCart className="cart-trolley"/> Already Purchased Products</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">

                <DashboardsingleCart productname={"Boat earphones"} productid={"hkj4sd56fh5"} productprice={'123$'} producturl={"/"}/>         

            </table>
          </div>
        </div>
      </div>
  )
}
