import React from "react";
import "./Hero2.css"; // Create a CSS file for styling
import { motion } from "framer-motion";
const Hero2 = () => {
  return (
    <div className="hero-section2 mb-3">
      <div className="hero-content2">
        <span className="hero2-h1 fw-bold py-2">METROPÓLIS</span>
        <motion.p
        animate={{rotateY:360}}
        transition={{delay:1, duration:1 }}
        className="pt-4"
        >
        Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.</motion.p>
        <motion.button 
       initial={{x:"100vw"}}
        animate={{x:0}}
        transition={{delay:1,type:"spring",stiffness:80}}
        className="py-2 insta">SHOP NOW</motion.button>      </div>
    </div>
  );
};

export default Hero2;
