import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import ProductData from "../Product/ProductData.json";
import '../../Components/Card/Card.css';
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = ProductData.filter((product) => {
    const categoryMatch =
      selectedCategory === '' || product.category === selectedCategory;
    const searchMatch =
      searchTerm === '' ||
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
              <option value="jewelery">jewelery</option>
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
        <h1 className="text-center fw-bold py-3 fs-3 with-lines font" style={{color:"#232323"}}>TOP PRODUCTS</h1>
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
        {/* Pagination controls */}
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





































// import React, {useState } from "react";
// import Card from "../../Components/Card/Card";
// import ProductData from "../Product/ProductData.json"
// import '../../Components/Card/Card.css';
// import Header from "../../Components/Header/Header";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// const Product = () => {
//   // const [search, setSearch] = useState('');
//   return (
//     <>
//     <Header/>
//     <Navbar/>
//       <div>
//       <div className="container pt-5">
//         <div className="product-card-container">
        
//           {ProductData.map((product, index) => (
//             <Card
//           key={index}
//           title={product.title}
//           category={product.category}
//           description={product.description}
//           image={product.image}
//           price={product.price}
//           product={product}
//         />
//           ))}
//         </div>
//       </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Product;























// import React, { useEffect, useState } from "react";
// import Card from "../../Components/Card/Card";
// import '../../Components/Card/Card.css';
// import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";
// import axios from "axios";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // useEffect(() => {
//   //   axios
//   //     .get("https://fakestoreapi.com/products")
//   //     .then((res) => {
//   //       setProducts(res.data);
//   //       setFilteredProducts(res.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log("Error occurred:", error);
//   //     });
//   // }, []);
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         // Get the data from the response
//         const apiData = res.data;
  
//         // Use the slice method to get the first 4 items
//         const slicedData = apiData.slice(0, 3);
  
//         // Set your state variables with the sliced data
//         setProducts(slicedData);
//         setFilteredProducts(slicedData);
//       })
//       .catch((error) => {
//         console.log("Error occurred:", error);
//       });
//   }, []);
  



//   // Function to filter products by category
//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//     if (category === "all") {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((product) => product.category === category);
//       setFilteredProducts(filtered);
//     }
//   };

//   // Get unique categories from the products
//   const categories = [...new Set(products.map((product) => product.category))];

//   return (
//     <div className="bg-light">
//       {/* <h1>Product</h1> */}
//       <CategoryFilter
//         categories={["all", ...categories]}
//         selectedCategory={selectedCategory}
//         onCategoryChange={filterProductsByCategory}
//       />

//       <div className="container bg-light">
//         <div className="card-container p-3">
//           {filteredProducts.map((item) => (
//             <Card key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React, { useEffect, useState } from "react";
// import Card from "../../Components/Card/Card";
// import '../../Components/Card/Card.css';

// import axios from "axios";
// const Product = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log("show data", res.data);
//         setProduct(res.data);
//       })
//       .catch((Error) => {
//         console.log("error occure", Error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Product</h1>
//       {/* card */}
//       <div>
//       <div className="container">
//         <div className="card-container">
        
//           {product.map((item) => (
//             <Card key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Product;