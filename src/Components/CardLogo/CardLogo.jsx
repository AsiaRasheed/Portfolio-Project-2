import React from "react";

const images = [
  {
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/1_ef17145d-0465-452d-aca8-83a14ba8d359_185x.jpg?v=1629862512",
  },
  {
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
  },
  {
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/3_619ccb86-b7e3-47f4-90b8-d48fd4fd839f_185x.jpg?v=1629862539",
  },
  {
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/4_f9e9e6eb-6217-44de-a1e4-14c3250c8cb4_185x.jpg?v=1629862551",
  },
  {
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/5_96727d5e-48ba-43cf-99ef-ebecc9d480c9_185x.jpg?v=1629862561",
  },
];

const CardLogo = () => {
  return (
    <div className="container py-5" style={{ display: "flex" }}>
      {images.map((image, index) => (
        <div
          key={index}
          className="card border-0 shadow-none"
          style={{ flex: "1", maxWidth: "100%" }}
        >
          <img
            src={image.image}
            className="card-img-top"
            alt={`Card ${index}`}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};

export default CardLogo;








// import React from "react";
// const CardLogo = () => {
//   const images = [
//     {
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/1_ef17145d-0465-452d-aca8-83a14ba8d359_185x.jpg?v=1629862512",
//     },
//     {
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
//     },
//     {
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/3_619ccb86-b7e3-47f4-90b8-d48fd4fd839f_185x.jpg?v=1629862539",
//     },
//     {
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/4_f9e9e6eb-6217-44de-a1e4-14c3250c8cb4_185x.jpg?v=1629862551",
//     },
//     {
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/5_96727d5e-48ba-43cf-99ef-ebecc9d480c9_185x.jpg?v=1629862561",
//     },
//   ];
//   return (
//     <>
  
//       <div className="container py-5" style={{ display: "flex" }}>
//         <div
//           className="card border-0 shadow-none"
//           style={{ flex: "1", maxWidth: "100%" }}
//         >
//           <img
//             src={images[0].image}
//             className="card-img-top "
//             alt="..."
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div
//           className="card border-0 shadow-none"
//           style={{ flex: "1", maxWidth: "100%" }}
//         >
//           <img
//             src={images[1].image}
//             className="card-img-top"
//             alt="..."
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div
//           className="card border-0 shadow-none"
//           style={{ flex: "1", maxWidth: "100%" }}
//         >
//           <img
//             src={images[2].image}
//             className="card-img-top"
//             alt="..."
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div
//           className="card border-0 shadow-none"
//           style={{ flex: "1", maxWidth: "100%" }}
//         >
//           <img
//             src={images[3].image}
//             className="card-img-top"
//             alt="..."
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//         <div
//           className="card border-0 shadow-none"
//           style={{ flex: "1", maxWidth: "100%" }}
//         >
//           <img
//             src={images[4].image}
//             className="card-img-top"
//             alt="..."
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardLogo;
