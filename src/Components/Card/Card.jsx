import React, { useState } from "react";
import "./Card.css";
import Popup from "../../Pages/Product/Popup";
import { motion } from "framer-motion";


function Card({ title, image, price, product }) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  
  return (
    <>
      <div className="product-card">
        <div className="overlay-container">
          <img src={image} alt={title} className="product-image" />
          <div className="overlay">30% OFF</div>
        </div>

        <div className="product-card-body">
          <h2 className="title">{title}</h2>
          <p className="price">${price}</p>
          <div className="border-icon">
            <div className="py-2 px-1 card-star1">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star text-secondary"></span>
            </div>
          </div>

          <motion.button
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2.5, type: "spring", stiffness: 80 }}
            onClick={toggle}
            className="Productbtn"
          >
            Product Detail
          </motion.button>
          <Popup modal={modal} toggle={toggle} product={product} />
        </div>
      </div>
    </>
  );
}

export default Card;
