import { Link } from "react-router-dom";
import "./Footer.css"
function Footer(){
    return(
        <>
    <section className="container-fluid foo">
      <div className="row px-lg-5 px-md-5 c-f-bg py-4 mb-5">
        <div className="row d-flex c-f-bg">
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex footer-text1 borderr">
            <div className="pt-2 p-2">
              <span><i className="fa-solid fa-gift fa-3x"></i></span>
            </div>
            <div>
              <h5>SPECIAL GIFT CARDS</h5>
              <p className="para">Give The Perfect Gift</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  footer-text1 borderr">
            <div className="pt-2 p-2">
              <span><i className="fa-solid fa-shop fa-3x"></i></span>
            </div>
            <div>
              <h5>FREE SHIPPING</h5>
              <p className="para">On Orders Over $99</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 d-flex footer-text1 borderr">
            <div className="pt-2 p-2">
              <span><i className="fa-brands fa-first-order-alt fa-3x"></i></span>
            </div>
            <div>
              <h5>ORDER ONLINE</h5>
              <p className="para">Hours : 8am - 11pm</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  footer-text1">
            <div className="pt-2 p-2">
              <span><i className="fa-solid fa-basket-shopping fa-3x"></i></span>
            </div>
            <div>
              <h5>SHOP AND SAVE</h5>
              <p className="para">For All Spices & Herbs</p>
            </div>
          </div>
        </div>
      </div>
               {/* <!-- footer column section nested container--> */}
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 footer-text2 ftext2b mt-4">
            <h5>INFORMATION</h5>
            <div>
              <div><Link to = "">About Us</Link></div>
              <div><Link to = "">Delivery Information</Link></div>
              <div><Link to = "">Privacy Policy</Link></div>
              <div><Link to = "">Terms & Conditions</Link></div>
              <div><Link to = "">Returns</Link></div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-text2 ftext2b mt-4">
            <h5>EXTRAS</h5>
            <div>
              <div><Link to = "">Brand</Link></div>
              <div><Link to = "">Gift Certificates</Link></div>
              <div><Link to = "">Affiliates</Link></div>
              <div><Link to = "">Specials</Link></div>
              <div><Link to = "">Contacts us</Link></div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 footer-text2 ftext2b mt-4">
            <h5>MY ACCOUNt</h5>
            <div>
              <div><Link to = "">my account</Link></div>
              <div><Link to = "">older history</Link></div>
              <div><Link to = "">Wish list</Link></div>
              <div><Link to = "">Newslater</Link></div>
              <div><Link to = "">Site Map</Link></div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-text2 ftext2b mt-4">
            <h5>Company info</h5>
            <p><span><i className="fa-solid fa-location-dot comp-icon"></i></span>507-Union Trade Centre,
              Beside Apple Hospital,
              Udhana Darwaja, Surat</p>
            <p><span><i className="fa-solid fa-mobile comp-icon"></i></span>0123-456-789</p>
            <p><Link to = ""><span><i className="fa-solid fa-mobile comp-icon"></i></span>demo@catchy.com</Link></p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-text2 mt-4">
            <h5>SIGNUP AND GET A VOUCHER</h5>
            <p>Contrary to popular belief, Lorem Ipsum Latin Latin from.</p>
            <div>
              <input type="email" placeholder="E-Mail" className="input-lg"/>
              <button type="submit" className="subscribe-btn outline-none border-0">Subscribe</button>
            </div>
            <div className="footer-text3">
              <i className="fa-brands fa-facebook-f icon"></i>
              <i className="fa-brands fa-twitter icon"></i>
              <i className="fa-brands fa-google-plus-g icon"></i>
              <i className="fa-brands fa-linkedin-in icon"></i>
            </div>
          </div>
        </div>
             {/* <!-- horizontal line second container --> */}
        <hr className="coll mt-3"/>
            {/* <!-- row two in second container --> */}
        <div className="row d-flex">
          <div className="col-lg-7 col-md-12 col-sm-12 payment mt-2">
            <Link to = "" className="paymentb">special</Link>
            <Link to = "">Affiliates</Link>
            <Link to = "">Get Certificates</Link>
            <Link to = "">Brands</Link>
            <Link to = "">Returns</Link>
            <Link to = "">Site Map</Link>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 payment text-center mt-2">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-discover"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
           </div>
  
        </div>
        <div className="row mt-2">
           <div className="col-lg-6 col-md-6 col-sm-12 text-md-center text-sm-center text-lg-start p-0 m-0">
              <p className="s2023">Powered By OpenCart Your Store © 2023</p>
           </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default Footer;