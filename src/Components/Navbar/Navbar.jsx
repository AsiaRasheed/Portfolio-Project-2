import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
  // Function to handle logout and redirection
  const handleLogout = () => {
    setIsLoggedIn(false); // Clear the login status
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-color py-1">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/Product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/NewArrival"
                >
                  NewArrival
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-white fs-5 px-4"
                  to="/Blogpage"
                >
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <NavLink
                    className="nav-link fw-bold text-white fs-5 px-4"
                    to="/"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    className="nav-link fw-bold text-white fs-5 px-4"
                    to="/Login"
                  ></NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
