import React from "react";
import "./EllaInstagram.css";

const EllaInstagram = () => {
  const images = [
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-6.jpg?v=1641439129",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-4.jpg?v=1641439130",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-2.jpg?v=1641439129",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-3.jpg?v=1641439129",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/4_e57f5e04-3b76-46f3-991f-ad7acfb517c9.jpg?v=1642127521",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/3_46c589ba-3927-42c5-8012-be4610badd86.jpg?v=1642127522",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_2bb902d1-2541-4965-b109-6d7ed5da8e7a.jpg?v=1642127521",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/6_e4bf204b-d729-482f-b46f-86fd7bdcd11a.jpg?v=1642127527",
    },
  ];

  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <p className="fw-bold font" style={{ fontSize: "25px" }}>
            {" "}
            <i className="fa-brands fa-instagram m-2 fs-3"></i>#ELLA ON
            INSTAGRAM
          </p>
          <h4
            className="font"
            style={{ color: "#ba7a2d", fontSize: "14px", fontWeight: "bold" }}
          >
            FOLLOW US @ELLANOW
          </h4>
          <p className="py-2 text-secondary">
            Phasellus lorem malesuada ligula pulvinar commodo maecenas
          </p>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card instacard">
                <img src={image.image} alt="" className=" image-fluid " />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          {" "}
          <button className="py-2 insta">View Gallery</button>
        </div>
      </div>
    </>
  );
};

export default EllaInstagram;
