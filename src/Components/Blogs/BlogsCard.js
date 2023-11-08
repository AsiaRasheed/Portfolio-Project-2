import "./Blogs.css"
import React from "react";
const BlogsCard = (props) => {
 const { title, subtitle, image } = props;

  return (
<>
<div className="col-lg-12 col-md-12 col-sm-12 border p-2 mt-2 mb-3  card-pblog">
<div className=" ms-lg-0 border h-100 ">
<div className="position-relative">
   <img src={image} alt={title} className="w-100 " />
    <div class="blog-over2 d-flex align-items-center"></div>
   </div>

   <div class="crd-idblog">
              <span><i className="fa fa-search-plus card-sqrblog"></i></span>
              <span><i className="fa fa-link card-sqrblog"></i></span>
     </div>
      <div className="card-body">
             <b className="card-title mt-2 blogcard">{title}</b>
             <p className="cardp">{subtitle}</p>
            <button className="Readbtn">Read More</button>
      </div>
     <div/>
    </div>
   </div>
</>
);};
   
export default BlogsCard;