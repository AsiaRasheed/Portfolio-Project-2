// Card2.js

import React from "react";
import "./Card2.css";

const Card2 = () => {
  const card2data = [
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/1_257d98ae-1c96-4fdd-b3ea-8439950530cb_370x.jpg?v=1630924167",
      text: "EDITOR’S PICK",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_987fd332-b977-48d4-9e91-aaf5bf9e372e_370x.jpg?v=1630924187",
      text: "SHOES",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/3_006e87f5-cb50-4183-81b9-0c6f16774ff5_370x.jpg?v=1630924212",
      text: "ACCESSORIES",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {card2data.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card card2">
              <div className="image-container">
                <img src={item.image} alt="" className="image-fluid zooming-image" />
                <div className="overlaycard2"></div>
                <div className="centered-text fw-bold">{item.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;


