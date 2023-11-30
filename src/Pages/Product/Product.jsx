import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import "../../Components/Card/Card.css";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Product = () => {
  // const items = useSelector((state) => state.allCart.items);
   const items = useSelector((state) => state.allCart?.items || []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on category and search term
  const filteredProducts = items.filter((product) => {
    const categoryMatch =
      selectedCategory === "" || product.category === selectedCategory;
    const searchMatch =
      searchTerm === "" ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Define the number of products to display per page
  const productsPerPage = 18;

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Create an array to hold the product data for the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="main bg-light">
       <Header />
      <Navbar />
      <div className="container pt-5 pro-container bg-light">
        <div className="product-filter productback py-3">
          <div>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="selectcatagory"
            >
              <option value="">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">jewelry</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="inputproduct"
            />
          </div>
        </div>
        <div>
          <h1 className="text-center fw-bold py-3 fs-3 with-lines font" style={{ color: "#232323" }}>
            TOP PRODUCTS
          </h1>
        </div>
        <div className="product-card-container">
          {currentProducts.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              category={product.category}
              description={product.description}
              image={product.image}
              price={product.price}
              product={product}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;


// import React, { useState } from "react";
// import Card from "../../Components/Card/Card";

// import ProductData from "../Product/ProductData.json";
// import '../../Components/Card/Card.css';
// import Header from "../../Components/Header/Header";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// const Product = () => {

//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };
//  // Filter products based on category and search term
//   const filteredProducts = ProductData.filter((product) => {
//     const categoryMatch =
//       selectedCategory === '' || product.category === selectedCategory;
//     const searchMatch =
//       searchTerm === '' ||
//       product.title.toLowerCase().includes(searchTerm.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   // Define the number of products to display per page
//   const productsPerPage = 18;

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   // Create an array to hold the product data for the current page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the index range for the current page
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const endIndex = startIndex + productsPerPage;
//   const currentProducts = filteredProducts.slice(startIndex, endIndex);

//   // Function to handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="main bg-light">
//       <Header />
//       <Navbar />
//       <div className="container pt-5 pro-container bg-light">
//         <div className="product-filter productback py-3">
//           <div>
        
//             <select
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               className="selectcatagory"
//             >
//               <option value="">All Categories</option>
//               <option value="men's clothing">Men's Clothing</option>
//               <option value="women's clothing">Women's Clothing</option>
//               <option value="electronics">Electronics</option>
//               <option value="jewelery">jewelery</option>
//             </select>
//           </div>
         
//           <div>
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={handleSearch}
//               className="inputproduct"
//             />
//           </div>
//         </div>
//         <div>
//         <h1 className="text-center fw-bold py-3 fs-3 with-lines font" style={{color:"#232323"}}>TOP PRODUCTS</h1>
//         </div>
//         <div className="product-card-container">
//           {currentProducts.map((product, index) => (
//             <Card
//               key={index}
//               title={product.title}
//               category={product.category}
//               description={product.description}
//               image={product.image}
//               price={product.price}
//               product={product}
//             />
//           ))}
//         </div>
//         {/* Pagination */}
//         <div className="pagination">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;



























































