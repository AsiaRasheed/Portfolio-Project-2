import React from "react";
import "./Aboutpage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Aboutpage = () => {
  return (
    <>
      <section className="sec-1">
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <h2 className="fs-2 fw-bold">Cosmopolis</h2>
          <p
         
            className="text-white fs-5"
          >
            Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo{" "}
            <br></br>lacus meleifend menean diverra loremous.
          </p>
          <button className="py-2 aboutbtn ">SHOP NOW</button>
        </motion.div>
      </section>

      <section className="main-section">
        <div className="center-content py-4">
          <h1 className="font fw-bold">We are Ella</h1>
          <h4 className="font my-3" style={{color: "#ba7a2d",
    fontSize: "16px",fontWeight:"bold"}}>ABOUT US</h4>
          <p>
            Cosmo lacus meleifend menean diverra loremous. Nullam sit amet orci
            rutrum risus laoreet semper vel non magna. Mauris vel sem Link
            lectus vehicula ultricies. Etiam semper sollicitudin lectus indous
            scelerisque.
          </p>
        </div>

        <div className="card-container py-3">
          <div className="aboutcard">
            <img
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/policy-1.jpg?v=1648203091"
              alt="Image 1"
            />
            <h3>Lorem De Dorus</h3>
            <p>
              Nullam aliquet vestibulum augue non varius. Cras cosmo congue an
              melitos. Duis tristique del maliquam.
            </p>
            <Link className="link">Learn How</Link>
          </div>

          <div className="aboutcard">
            <img
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/policy-2.jpg?v=1648203103"
              alt="Image 2"
            />
            <h3>Milancelos Lanos</h3>
            <p>
              Nullam aliquet vestibulum augue non varius. Cras cosmo congue an
              melitos. Duis tristique del maliquam.
            </p>
            <Link className="link">Read Full Story</Link>
          </div>

          <div className="aboutcard">
            <img
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/policy-3.jpg?v=1648203112"
              alt="Image 3"
            />
            <h3>Como A Milano</h3>
            <p>
              Nullam aliquet vestibulum augue non varius. Cras cosmo congue an
              melitos. Duis tristique del maliquam.
            </p>
            <Link className="link"> Learn How</Link>
          </div>
        </div>
      </section>

      <section className="section-3 py-5">
        <div className="left-part">
          <div className="card-3">
            <h3>ABOUT STORE</h3>
            <p>
              Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
              lacus meleifend menean diverra loremous. Nullam sit amet orci
              rutrum risus laoreet semper vel non magna. Mauris vel sem a lectus
              vehicula ultricies. Etiam semper sollicitudin lectus indous
              scelerisque...
            </p>
            <button className="py-2 secbtn-3 ">Explore shop</button>
          </div>
        </div>

        <div className="right-part ">
          <div className="video-thumbnail zooming-img-3">
            <img
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/Slider_Banner_Mobile.jpg?v=1648202236&width=1500"
              alt="Video Thumbnail"
            />

            <div className="control-icons">
              <i className="play-icon fas fa-play"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 py-5">
        <div className="right-part">
          <div className="video-thumbnail ">
            <img
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/about-us-banner.jpg?v=1648432992&width=1500"
              alt=" Thumbnail"
              className="sec-4"
            />
          </div>
        </div>
        <div className="left-part" style={{ display: "flex" }}>
          <div>
            <div className="card-4" style={{ width: "18rem" }}>
              <div className="card-body card-4">
                <h2 className="card-title fw-bold fs-3">CONTACT US</h2>
                <li className="list-group-item list-4">
                  {" "}
                  <span>
                    <i className="fa-solid fa-message px-1"></i>
                  </span>
                  TEXT: 091-123-ELLA
                </li>
                <li className="list-group-item list-4">
                  <span>
                    <i className="fa-solid fa-envelope px-1"></i>
                  </span>
                  email@domain.com
                </li>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-4">685 Market Street</li>
                  <li className="list-group-item list-4">
                    San Francisco, CA 94105,
                  </li>
                  <li className="list-group-item list-4">United States</li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-4"> Opening Hours</li>
                  <li className="list-group-item list-4">
                    MON to SAT: 9:00 AM - 10:00 PM
                  </li>
                  <li className="list-group-item list-4">
                    SUN: 10:00 AM - 6:00 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="card-4-2">
              <div className="card-body card-4-2">
                <button className="py-2 sec-4-btn1">LIVE CHAT</button>
                <button className="py-2 sec-4-btn2">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;
