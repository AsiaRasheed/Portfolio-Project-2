import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <>
      <div className="container-fluid back">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 text-center mt-5 logo">
            <motion.img
              initial={{ Y: -200, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              src="https://new-ella-demo.myshopify.com/cdn/shop/files/ella-logo-black-compressor.png?v=1629858814&width=300"
              alt="abd"
              width="120"
              height="60"
            />
          </div>
          <div className="col-lg-9 ">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent row1">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link  text"
                        aria-current="page"
                        href="#"
                      >
                        Customer Service 091 234-ELLA
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle fw-normal text"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://opencart.templatemela.com/OPC08/OPC080192/OPC4/catalog/language/en-gb/en-gb.png"
                          alt=""
                          className="px-1"
                        />
                        EN
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" href="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle fw-normal text"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="w-12 h-12 Norway px-1"
                          enable-background="new 0 0 512 512"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
                          <g fill="#d80027">
                            <path d="m8.819 322.783c14.812 54.959 47.457 102.593 91.355 136.322v-136.322z" />
                            <path d="m233.739 511.026c7.338.632 14.759.974 22.261.974 118.279 0 217.805-80.221 247.181-189.217h-269.442z" />
                            <path d="m503.181 189.217c-29.376-108.996-128.902-189.217-247.181-189.217-7.502 0-14.923.342-22.261.974v188.243z" />
                            <path d="m100.174 52.895c-43.898 33.73-76.543 81.363-91.355 136.322h91.355z" />
                          </g>
                          <path
                            d="m509.833 222.609h-309.484-.001v-216.524c-23.658 5.246-46.087 13.749-66.783 25.042v191.48.001h-131.398c-1.425 10.931-2.167 22.075-2.167 33.392s.742 22.461 2.167 33.391h131.397.001v191.481c20.696 11.292 43.125 19.797 66.783 25.042v-216.52-.002h309.485c1.423-10.931 2.167-22.075 2.167-33.392s-.744-22.461-2.167-33.391z"
                            fill="#0052b4"
                          />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                        </svg>
                        EUR
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" href="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="#">
                            Another action
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" href="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input
                      className="form-control me-1 text bg-light size"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <i
                      className="fa-solid fa-magnifying-glass text"
                      style={{
                        position: "relative",
                        marginTop: "10px",
                        right: "40px",
                      }}
                    ></i>
                  </form>
                </div>
              </div>
            </nav>
            <div className="row">
              <div className="col fw-normal row2">
                FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
              </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent mx-2 row3">
              <div class="container-fluid">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link
                        class="nav-link  d-flex align-items-center text"
                        aria-current="page"
                        href="#"
                      >
                        <i class="fa-solid fa-cart-shopping cart px-1 fs-5"></i>{" "}
                        Shopping Cart <span className="cartitem">0</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        class="nav-link  d-flex align-items-center text"
                        aria-current="page"
                        href="#"
                      >
                        <i class="fa-regular fa-heart dil px-1 fs-5"></i> My
                        Wish List
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link  text" aria-current="page" href="#">
                        Sign In or Create an Account
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
