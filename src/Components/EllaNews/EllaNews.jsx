import React from "react";
import "./EllaNews.css";
import { Link } from "react-router-dom";

const EllaNews = () => {
  const images = [
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr2-1_460x.jpg?v=1641373891",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr2-2_460x.jpg?v=1641373891",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr2-3_460x.jpg?v=1641373891",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr2-4_460x.jpg?v=1641373892",
    },
  ];

  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <p className="fw-bold font" style={{ fontSize: "25px" }}>
            {" "}
            #ELLA NEWS
          </p>
          <h4
            className="font"
            style={{ color: "#ba7a2d", fontSize: "14px", fontWeight: "bold" }}
          >
            FOLLOW US
          </h4>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card newscard">
                <img
                  src={image.image}
                  alt=""
                  className="image-fluid rotating-image" // Add a class for animation
                />
              </div>
              <div className="newdiv py-3">
                <Link
                  className="newlink fw-normal"
                  style={{ color: "#3c3c3c" }}
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EllaNews;

