import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Product from "./Pages/Product/Product";
import NewArrival from "./Pages/NewArrival/NewArrival";
import About from "./Pages/About/About";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import EllaInstagram from "./Components/EllaInstagram/EllaInstagram";
import Button1 from "./Button1";
import Hero from "./Components/Hero/Hero";
import Card2 from "./Components/Card2/Card2";
import NewArrivalCom from "./Components/NewArrival/NewArrivalCom";
import Hero2 from "./Components/Hero2/Hero2";
import Featured from "./Components/FEATURED ON ELLA/Featured";
import CardLogo from "./Components/CardLogo/CardLogo";
import Blogpage from "./Pages/Blog/Blogpage";
import EllaNews from "./Components/EllaNews/EllaNews";
import ImgSection from "./Components/ImgSection/ImgSection";
import Hero3 from "./Components/Hero3/Hero3";
import ProductHero from "./Components/ProductHero/ProductHero";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
     {/* <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> */}
      <Routes>
      
        <Route
          path="/"
          element={
            <>
              {" "}
              
              <Header />
              <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
              <Hero />
              <Card2 />
              <ImgSection />
              <NewArrivalCom />
              <Hero2 />
              <Featured />
              <Hero3/>
              <EllaNews />
              <ProductHero/>
              <CardLogo />
              <EllaInstagram />
              <Button1 />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/Product" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/Product"
          element={isLoggedIn ? <Product /> : <Navigate to="/Login" />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/NewArrival" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/NewArrival"
          element={isLoggedIn ? <NewArrival /> : <Navigate to="/Login" />}
        />

        <Route path="/About" element={<About />} />
        <Route path="/Blogpage" element={<Blogpage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

