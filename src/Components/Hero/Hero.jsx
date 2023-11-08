
import React from "react";
import "./Hero.css"; // Create a CSS file for styling
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="fw-bold heroh1 py-2">COSMOPÓLIS</span>
        <motion.p animate={{rotateY:360,fontSize:"18px"}}
        transition={{delay:1, duration:1 }}
        className="pt-4"
        >Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.</motion.p>
        <motion.button
        initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{type:"spring",stiffness:80}}
         className="py-2 insta">SHOP NOW</motion.button>
      </div>
    </div>
  );
};

export default Hero;











