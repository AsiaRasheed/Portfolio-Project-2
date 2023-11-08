import React from 'react'

const StyleGallery = () => {
     const Styleimages = [
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/1_d6cce640-4c72-42c3-9060-4290d8e85972.jpg?v=1640579576",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/3_36007b4b-a3f2-440d-9990-3f8647cf1724.jpg?v=1640579616",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/4_c909ee0f-da5f-4e61-b032-1045b3fe0a49.jpg?v=1640579628",
    },
    {
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/5_9817980f-67d6-4b1f-bea4-3392899f50e0.jpg?v=1640579642",
    }
  ];
  return (
    <>
     <div className="container py-3">
    <div className="text-center">
   <p className="fw-bold font" style={{fontSize: "25px"}} >#STYLE GALLERY</p> 
    </div>
      <div className="row">
        {Styleimages.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12">
            <div className="card instacard">
              <img
                src={image.image}
                alt=""
                className=" image-fluid"
               
              />
            </div>

          </div>
        ))}
      </div>
      
    </div>
    
    </>
  )
}

export default StyleGallery