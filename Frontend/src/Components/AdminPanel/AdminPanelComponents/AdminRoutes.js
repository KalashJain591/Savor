import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Customer from '../Pages/Customer';
import Dashboard from '../Pages/Dashboard';
import Inventory from '../Pages/Inventory';
import Order from '../Pages/Order';
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route exact path="../Inventory" element={<Inventory />}></Route>
            <Route path="./Orders" element={<Order />}></Route>
            <Route path="./Customers" element={<Customer />}></Route>
        </Routes>
    )
}

export default AdminRoutes
