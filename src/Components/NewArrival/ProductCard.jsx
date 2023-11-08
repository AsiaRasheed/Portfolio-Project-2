import React from "react";
import "./CardNewArrival.css";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card card1">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotateY: 360 }}
          transition={{ delay: 1, duration: 1 }}
          src={product.imgSrc}
          className="image-fluid Fimg zooming-image"
          alt="..."
        />
        <img
          src={product.hoverImgSrc}
          className="image-fluid hideimg Fimg zooming-image"
          alt="Hover"
        />
        <div className="text-center hide">
          <button className="py-2 Arrival">QUICK ADD
                  <span className="text-center">
                  <i class="fa-regular fa-heart px-2 fs-5"></i>
                  <i class="fa-solid fa-cart-shopping px-2 fs-5"></i>
                  </span>
                  
                  </button>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">{product.title}</h5>
          <p className="card-text text-center text">{product.description}</p>
          <h5 className="price text-center">{product.price}</h5>
          <div className="border-icon">
            <div className="py-2 px-1 card-star1">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star text-secondary"></span>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

