import React from 'react'
import Button from 'react-bootstrap/Button'
import { FiShoppingCart } from 'react-icons/fi'
import './dashboard.css'
import DashboardsingleCart from './DashboardsingleCart'

export default function Dashboardcarts() {
  return (
    <div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><FiShoppingCart className="cart-trolley"/> Purchased Products</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">

                <DashboardsingleCart productname={"Boat earphones"} productid={"hkj4sd56fh5"} productprice={'123$'} producturl={"/"}/>         

            </table>
          </div>
        </div>
      </div>
  )
}
