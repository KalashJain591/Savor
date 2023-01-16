import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useProductContext } from '../../../Context/ProductContext';
import Star from "./Star"
import axios from "axios"
import "./SinglePage.css"
const API = "/product";
const SingleProduct = () => {
    // const [dataProduct, setDataProduct] = useState()
    // const product = async() =>{
    //          await  axios.get(`/product/${id}`).then((response) => {
    //         setDataProduct(response.data);
    //         console.log(response.data)
    //       });
    // }

    const { getSingleProduct, singleProduct, isLoading } = useProductContext();
    if (isLoading) {
        <div className='Loading-page'>Loading...</div>
    }
    const { id } = useParams();
    const {
        id: alice,
        name,
        category,
        description,
        images,
        price,
        rating,
        stock,
        reviews
    } = singleProduct
    const [img, setImg] = useState(images && images[0].imgUrl)
    console.log("test", images)
    useEffect(() => {
        // product();
        getSingleProduct(`${API}/${id}`);
    }, [])

    return (
        <section className='single-product-page'>
            <div className="single-product-info">
                <div className="single-product-image-section">
                    <div className="parent-image">
                        <img src={img} alt={name} />
                    </div>
                    <div className="child-sec2-img">
                        <div className="child-images">
                            {images && images.map((item) => {
                                return (
                                    <div className="child-single-img" key={item.id}>
                                        <img src={item.imgUrl} alt="Loading..." onClick={() => setImg(item.imgUrl)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="single-product-description">
                    <p className="single-product-heading">{name}</p>
                    <div className="customer-info">
                        <Star rating={rating} reviews={reviews} />
                        {/* <p>{rating}</p>
                        <p>{reviews} customer reviews</p> */}
                    </div>
                    <div className="product-info">
                        <div className="product-price">MRP : ₹{price}</div>
                        <div className="product-Weight">{price} kg</div>
                    </div>
                    <div className="product-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae vero obcaecati illum neque quidem voluptatum minus enim sint corrupti id optio dolor praesentium doloremque corporis aspernatur harum, commodi tenetur?</p>
                    </div>
                    <div className="product-data-warranty">
                        <div className="warranty-img">
                            <div className="img-contain">
                                <i class="fa-solid fa-truck-fast warranty-icon"></i>
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <div className="warranty-img">
                            <div className="img-contain">
                                <i class="fa-solid fa-arrows-rotate warranty-icon"></i>
                                <p>30 Days Replacement</p>
                            </div>
                        </div>
                        <div className="warranty-img">
                            <div className="img-contain">
                                <i class="fa-solid fa-truck-fast warranty-icon"></i>
                                <p>Savor Delivered</p>
                            </div>
                        </div>
                        <div className="warranty-img">
                            <div className="img-contain">
                                <i class="fa-solid fa-shield-halved warranty-icon"></i>
                                <p>6 months warranty</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <p>Available : <span>{stock ? "Is Available" : "Out of stock"}</span></p>
                        <p>Weight : <span>{price}Kg</span></p>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default SingleProduct
