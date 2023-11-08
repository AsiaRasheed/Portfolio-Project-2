import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CardNewArrival from "../../Components/NewArrival/CardNewArrival";
import StyleGallery from "../../Components/StyleGallery/StyleGallery";
import Hero4 from "../../Components/Hero4/Hero4";
const NewArrival = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Hero4 />
      <CardNewArrival />
      <StyleGallery />
      <Footer />
    </>
  );
};

export default NewArrival;
