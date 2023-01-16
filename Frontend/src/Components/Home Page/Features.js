import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import { itemData } from "../../itemData";
import { useCartContext } from "../../Context/cart_context";
import { NavLink } from "react-router-dom";
import { useProductContext } from '../../Context/ProductContext';
export default function Features() {
 
  const { addToCart } = useCartContext();
  const {featureProduct} = useProductContext();
  return (
    <div>
      <div className="container-md green">
        <div className="container-md  p-4 text-lg-start text-center">
          <p className="p-2">check know </p>
          <h2 className="col-sm-4 col-12 text-lg-start text-center">
            Our Feature Services
          </h2>
          <div className="row justify-content-evenly">
            {itemData.map((data, key) => (
              <div
                key={key}
                className="d-flex col-lg-4 col-12 p-2 justify-content-center"
              >
                <div className="d-flex align-items-center flex-column">
                  <FeatureCard
                    className="text-center"
                    title={data.title}
                    image={data.image}
                    Rate={data.Rate}
                  />
                  <div className="card-body">
                    {/* <NavLink
                      to="/cart"
                      onClick={() =>
                        addToCart(
                          data.id,
                          data.title,
                          data.Rate,
                          data.Company,
                          key
                        )
                      }
                    >
                      <button className="btn-primary btn-lg">
                        Add to cart
                      </button>
                    </NavLink> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
