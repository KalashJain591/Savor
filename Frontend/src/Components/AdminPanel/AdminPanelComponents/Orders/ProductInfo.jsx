import { Avatar } from 'antd'
import React, { useEffect } from 'react'

export default function ProductInfo(props) {
    
  return (
    <div>
        {props.products.map((product) =>
             <div  key={product.productId} >
             <div class="alert alert-dark">
               <p > <Avatar src={product.images} />{product.name} ₹{product.price} Quantity:{ product.quantity}</p>
             </div>
             </div> 
        )}
    </div>
  )
}
