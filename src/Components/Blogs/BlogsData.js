import React from "react";
import BlogsCard from './BlogsCard'
import './Blogs.css';

const data = [
  {
    id: 1,
    subtitle:"Deumanto Sollicitudin Delo Milancelos",
    title: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus. Quisque volutpat...",
    image: "https://new-ella-demo.myshopify.com/cdn/shop/articles/blog-default-6_870x.jpg?v=1644919496",
  },
  {
    id: 2,
    subtitle:"Duis Risus An Selementum In Malesuada",
    title: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus. Quisque volutpat...",
    image: "https://new-ella-demo.myshopify.com/cdn/shop/files/1_58f7e86a-53fe-4f18-8d44-d5c361af3b63.jpg?v=1642146594&width=1500",
  },
  {
    id: 3,
    subtitle:"Deumanto Sollicitudin Delo Milancelos",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit...",
    image: "https://new-ella-demo.myshopify.com/cdn/shop/articles/blog-full-width-3_eb5ec4f8-2e40-46ce-a243-3da65469af82_720x.jpg?v=1644897254",
  },
  {
    id: 4,
    subtitle:"Nam Suscipit Mollis Dellus An Malesuo",
    title: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus. Quisque volutpat...",
    image: "https://new-ella-demo.myshopify.com/cdn/shop/articles/blog-full-width-5_720x.jpg?v=1644814559",
  },
  {
    id: 5,
    subtitle:"Nam Suscipit Mollis Dellus An Malesuo",
    title: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam dolor, elementum et lobortis at, mollis ut risus. Sedcuman des faucibus sullamcorper mattis fusce molestie elit a lorem tempus scelerisque blandit est cursus. Quisque volutpat...",
    image: "https://new-ella-demo.myshopify.com/cdn/shop/articles/blog-full-width-2_ac484675-cb1d-42b0-9e16-af2b3cd66de7_720x.jpg?v=1644897211",
  },

];

const BlogsData = () => {
  return (

    <> 
     <div className="">
      {data.map((item) => (
        <BlogsCard key={item.id} title={item.title} subtitle={item.subtitle} image={item.image} />
      ))}
    </div>
    </>
  );
};

export default BlogsData;