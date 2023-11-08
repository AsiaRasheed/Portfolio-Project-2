import React from "react";
import "./Featured.css"
import FeatureItem from "./FeatureItem";
const Featured = () => {
  const features = [
    {
      title: "LOREM DE DORUS",
      description:
        "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/1_157354b3-717d-4e2f-be6e-b5b4f8e44467_370x.jpg?v=1629950570",
    },
    {
      title: "MILANCELOS LANOS",
      description:
        "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_669a1171-f379-4a53-9a12-a7eef46e4c94_370x.jpg?v=1629950593",
    },
    {
      title: "COMO A MILANO",
      description:
        "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/collections/banner-marketing-4.jpg?v=1566289459",
    },
    {
      title: "GLOMOS BOSIO",
      description:
        "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/collections/collections-5-compressor.jpg?v=1566293890",
    },
    {
      title: "BLAZERO ANUM",
      description:
        "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/collections/collections-3-compressor.jpg?v=1566295625",
    },
    {
      title: "VAL KERIO BNA",
      description:
        "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
      image:
        "https://new-ella-demo.myshopify.com/cdn/shop/collections/collections-7-compressor.jpg?v=1566295469",
    },
  ];

  return (
    <div className="container-fluid cont-fluid ">
      <div className="container py-5">
        <h2 className="text-center fw-bold pt-4 fs-4 with-lines font">FEATURED ON ELLA</h2>
        <h4 className=" text-center font" style={{color: "#ba7a2d",
    fontSize: "16px",fontWeight:"bold"}}>VIEW ALL</h4>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;


































// import React from "react";
// import "./Featured.css"
// const Featured = () => {
//   const features = [
//     {
//       title: "LOREM DE DORUS",
//       description:
//         "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/1_157354b3-717d-4e2f-be6e-b5b4f8e44467_370x.jpg?v=1629950570",
//     },
//     {
//       title: "MILANCELOS LANOS",
//       description:
//         "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/files/2_669a1171-f379-4a53-9a12-a7eef46e4c94_370x.jpg?v=1629950593",
//     },
//     {
//       title: "COMO A MILANO",
//       description:
//         "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//       image:
//         "https://new-ella-demo.myshopify.com/cdn/shop/collections/banner-marketing-4.jpg?v=1566289459",
//     },
//   ];

//   return (
//     <>
  
//     <div className="container-fluid cont-fluid">
//     <div className="container py-3" >
//     <h2 className="text-center fw-bold py-4 fs-4">FEATURED ON ELLA</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-3">
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="card card1  border-0 shadow-none">
//             <img src={features[0].image} className="image-fluid Fimg" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title text-center fw-bold">{features[0].title}</h5>
//               <p className="card-text text-center text">{features[0].description}</p>
//             </div>
//             <div className="text-center">
//               {" "}
//               <button className="py-2 insta">SHOP NOW</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="card card1  border-0 shadow-none">
//             <img src={features[1].image} className="image-fluid Fimg" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title text-center fw-bold">{features[1].title}</h5>
//               <p className="card-text text-center text">{features[1].description}</p>
//             </div>
//             <div className="text-center">
//               {" "}
//               <button className="py-2 insta">SHOP NOW</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="card card1  border-0 shadow-none">
//             <img src={features[2].image} className="image-fluid Fimg" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title text-center fw-bold">{features[2].title}</h5>
//               <p className="card-text text-center text">{features[2].description}</p>
//             </div>
//             <div className="text-center">
//               {" "}
//               <button className="py-2 insta">SHOP NOW</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Featured;

// import React from 'react';
// import "../EllaInstagram/EllaInstagram.css"
// const Featured = () => {
//   const features = [
//     {
//       title: "LOREM DE DORUS",
//       description: "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//       image: "https://new-ella-demo.myshopify.com/cdn/shop/files/1_157354b3-717d-4e2f-be6e-b5b4f8e44467_370x.jpg?v=1629950570",
//     },
//     {
//       title: "MILANCELOS LANOS",
//       description: "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//       image: "https://new-ella-demo.myshopify.com/cdn/shop/files/2_669a1171-f379-4a53-9a12-a7eef46e4c94_370x.jpg?v=1629950593",
//     },
//     {
//       title: "COMO A MILANO",
//       description: "Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//       image: "https://new-ella-demo.myshopify.com/cdn/shop/collections/banner-marketing-4.jpg?v=1566289459",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="row">
//         {features.map((feature, index) => (
//           <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//             <div className="card border-0">
//               <img
//                 src={feature.image}
//                 alt=""
//                 className="card-img-top"
//                 style={{ objectFit: "cover", height: "200px" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-center fw-bold">{feature.title}</h5>
//                 <p className="card-text text-center" style={{color:"#3c3c3c"}}>{feature.description}</p>

//               </div>
//   <div className="text-center"> <button className="py-2 insta" >SHOP NOW</button></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;

// import React from 'react'

// const Featured = () => {

//     const Feature = [
//         {
//             title:"LOREM DE DORUS",
//             description:"Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//           image:
//             "https://new-ella-demo.myshopify.com/cdn/shop/files/1_157354b3-717d-4e2f-be6e-b5b4f8e44467_370x.jpg?v=1629950570",
//         },
//         {
//             title:"MILANCELOS LANOS",
//             description:"Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//           image:
//             "https://new-ella-demo.myshopify.com/cdn/shop/files/2_669a1171-f379-4a53-9a12-a7eef46e4c94_370x.jpg?v=1629950593",
//         },
//         {
//             title:"COMO A MILANO",
//             description:"Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis.",
//           image:
//             "https://new-ella-demo.myshopify.com/cdn/shop/collections/banner-marketing-4.jpg?v=1566289459",
//         },

//       ];

//   return (
//     <>

//     </>
//   )
// }

// export default Featured
