import React from "react";
import "./CardNewArrival.css";
import { motion } from "framer-motion";
const jsonData = [
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image22xxl_bf64f2aa-3b97-427c-b66d-f84e6674184a.jpg?v=1658136568",
    title: "COLLETTE",
    hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/image26dxxl_775x.jpg?v=1658136351",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€46.59",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-4.jpg?v=1641439130",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/image7xxl_be79c856-e4c3-48ed-8f01-24a2c67a93af.jpg?v=1658119813",
    title: "JIMMY CHOO",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.45",
  },
  {
   
    imgSrc:
      " https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-1_470x.jpg?v=1641365087",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-3_470x.jpg?v=1641365087",
    title: "BURBERRY",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€94.15",
   },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-5_470x.jpg?v=1641365087",
      
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/image9xxl-MAGENTA_73f6c1dd-2aa6-4e8b-9765-37287380796f_775x.jpg?v=1658215904",
    title: "DAVENTRY MEERS",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.45",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image25xxl_65bd1593-ae84-41ea-b09e-2a29b345a56d.jpg?v=1658136568",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/5-2-min_1066x.jpg?v=1641888395",
    title: "DONATELLO",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€378.45",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image10xxl_fe581016-64e9-4589-b7cb-710b320c7b4e.jpg?v=1658119813",
      hoverImgSrc:"https://cdn.shopify.com/s/files/1/0081/3305/0458/files/image-gallary-3.jpg?v=1658393919",
    title: "FRENCH CONNECTION",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.23",
  },
];

function CardNewArrival() {
  return (
    <div className="container-fluid cont-fluid">
      <div className="container py-3">
        <h1 className="text-center fw-bold pt-4 fs-3 with-lines">TRENDING NOW</h1>
        <h4 className=" text-center font" style={{color: "#ba7a2d",
    fontSize: "16px",fontWeight:"bold"}}>VIEW ALL</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {jsonData.map((product, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card card1">
                <div className="image-container">
                  <motion.img
                  initial={{opacity:0}}
                  animate={{opacity:1,rotateY:360}}
                  transition={{delay:1, duration:1, type:"spring", stiffness:50}}

                    src={product.imgSrc}
                    className="image-fluid  Fimg zooming-image"
                    alt="Default"
                  />
                  <img
                    src={product.hoverImgSrc}
                    className="image-fluid  hideimg Fimg zooming-image"
                    alt="Hover"
                  />
                </div>
                <div className="text-center hide">
                  <button className="py-2 Arrival">QUICK ADD
                  <span className="text-center">
                  <i class="fa-regular fa-heart px-2 fs-5"></i>
                  <i class="fa-solid fa-cart-shopping px-2 fs-5"></i>
                  </span>
                  
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">
                    {product.title}
                  </h5>
                  <p className="card-text text-center text">
                    {product.description}
                  </p>
                  <h5 className="price text-center">{product.price}</h5>
                  <div className="border-icon">
                    <div className="py-1 px-1 card-star1">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star text-secondary"></span>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardNewArrival;
