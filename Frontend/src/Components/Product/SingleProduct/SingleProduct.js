import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { useProductContext } from '../../../Context/ProductContext';
// import {getSingleProduct} from
const API = "/product";
const SingleProduct = () => {
     const {getSingleProduct, singleProduct} = useProductContext
    const {id} = useParams();
    console.log(singleProduct)

    useEffect(()=>{
        getSingleProduct(`${API}/${id}`);
    }, [])

  return (
    <div>
      single Page
    </div>
  )
}

export default SingleProduct
