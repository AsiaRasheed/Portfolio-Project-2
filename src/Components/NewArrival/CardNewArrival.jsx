import React from 'react'
import ProductCard from './ProductCard'
import './CardNewArrival.css'
const jsonData = [
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/3-2-min_399611d9-2e8d-4936-85e2-23ea8984ef78_1066x.jpg?v=1641888387",
      
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/Aries_Top_2_1-ca2a82483c7d6d1fea038cee4b18_3a3a7084-bec5-49b3-b0d5-893805b135d5_1170x.jpg?v=1658213432",
    title: "COLLETTE",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€46.59",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image12xxl_70ddd643-0170-4b31-9051-0cceeeea4e1c_775x.jpg?v=1658119228",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-2_470x.jpg?v=1641365087",
    title: "JIMMY CHOO",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.45",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-3.jpg?v=1641439129",
    title: "BURBERRY",
    hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/image9xxl-WHITE_83caf984-431d-4a94-af9b-3ef2bef87acc_775x.jpg?v=1658136776",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€94.15",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image9xxl-MAGENTA_73f6c1dd-2aa6-4e8b-9765-37287380796f_775x.jpg?v=1658215904",
    title: "DAVENTRY MEERS",
    hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/image14xxl_ec91948b-4c5e-4308-aa88-003dd57a8c51.jpg?v=1658119792",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.45",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image11bxxl_0d80db37-389f-4bff-8e69-61f56b525de1_775x.jpg?v=1657872035",
    title: "DONATELLO",
    hoverImgSrc:"https://cdn.shopify.com/s/files/1/0081/3305/0458/files/image-gallary-3.jpg?v=1658393919",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€378.45",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image27xxl-compressor_d0f8be0b-d_720x.jpg?v=1663930838",
    title: "FRENCH CONNECTION",
    hoverImgSrc:"https://cdn.shopify.com/s/files/1/0081/3305/0458/files/image-gallary.jpg?v=1658393919",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.23",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image9xxl-LIGHT-RED_a4ce2db8-e01d-4fae-96a4-a727b377d555_775x.jpg?v=1657871230",
    title: "FRENCH CONNECTION",
    hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/image10xxl_fe581016-64e9-4589-b7cb-710b320c7b4e.jpg?v=1658119813",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.23",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image18xxl_841882af-a3f0-455b-8d81-e9049437c6b3_775x.jpg?v=1658136587",
    title: "FRENCH CONNECTION",
    hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/products/5-2-min_1066x.jpg?v=1641888395",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.23",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image13xxl_ff0ec4d0-17b1-4517-b0f3-50f3f8e56f5b_775x.jpg?v=1658141919",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-5_470x.jpg?v=1641365087",
    title: "ANNA",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€36.99",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/image4xxl_45ee99ef-ff8d-4214-ab7d-41b61bf73a39_775x.jpg?v=1658113326",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-3_470x.jpg?v=1641365087",
    title: "DONATELLO",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€286.23",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/A_Question_Of_Jacket_1_1-a2c688ba69acde08f5372d52965c_1170x.jpg?v=1658204495",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-spotlightr-1_470x.jpg?v=1641365087",
    title: "DONATELLO",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€398.23",
  },
  {
    imgSrc:
      "https://new-ella-demo.myshopify.com/cdn/shop/products/Kindersaimon_Top_3_1-361c02531315aa41ad6b8293d44d_1170x.jpg?v=1658212352",
      hoverImgSrc:"https://new-ella-demo.myshopify.com/cdn/shop/files/h17f5-instagram-1.jpg?v=1641439129",
    title: "SODLING",
    description:
      '(Product 35) Sample - Clothing And Accessory Boutiques For Sale"',
    price: "€568.23",
  },
];




const CardNewArrival = () => {
  return (
    <div className="container-fluid cont-fluid">
    <div className="container py-3">
      <h1 className="text-center fw-bold mt-3 fs-3 with-lines font">NEW ARRIVALS</h1>
      <h4 className=" text-center font" style={{color: "#ba7a2d",
    fontSize: "16px",fontWeight:"bold"}}>Shop Now</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {jsonData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default CardNewArrival

















