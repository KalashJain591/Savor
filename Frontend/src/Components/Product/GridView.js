import React from 'react'
import styled from "styled-components"
import Product from '../Home Page/Product'
import "./GridView.css"
const GridView = ({ products }) => {
    // console.log("products", products)
    return (
        <div className='product-grid-section'>
            {products.map((e) => {
                return (
                    <Product key={e.id} {...e}/>
                )
            })}
        </div>
    )
}


export default GridView
