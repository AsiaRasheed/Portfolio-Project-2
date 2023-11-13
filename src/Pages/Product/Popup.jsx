import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import "./Popup.css";
import { motion } from "framer-motion";

function Popup({ modal, toggle, product }) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className="model">
        <ModalHeader className="pop-head">
          {product.category}
          <button className="close-icon" onClick={toggle}>
            &times;
          </button>
        </ModalHeader>
        <ModalBody className="bg-light pop-back">
          <img className="popimg" src={product.image} alt={product.title} />
          <p className="pdata">
            <span className="ptitle">Title: </span>
            {product.title}
          </p>
          <p className="pdata">
            <span className="pdescription">Description: </span>
            {product.description}
          </p>
          <p className="pdata">
            <span className="pprice">Price: </span>
            {product.price}
          </p>
          <motion.button
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            className="pbtn"
          >
            Add to cart
          </motion.button>
        </ModalBody>

        <ModalFooter className="bg-light pop-foot">
          <div>
            <div className="px-1 card-star1">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star text-secondary"></span>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Popup;

