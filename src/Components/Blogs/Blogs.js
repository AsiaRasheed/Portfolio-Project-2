import { Link } from "react-router-dom";
import BlogsData from "./BlogsData";
import Information from "../../Information";
function Blogs() {
  return (
    <div className="back-color">
      <div className="container pt-5 back-color">
        <div className="row">
          <div class="col-lg-3 col-md-12 col-sm-12  p-0 mt-4">
            <Information />
          </div>

          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div></div>
              </div>
              <div className="col-lg-9 col-md-7 col-sm-12 d-flex">
                <div>
                  <Link href="" className="icon-reg-name">
                    {" "}
                    <i className="fa-sharp fa-solid fa-house icon-reg"></i>{" "}
                    <i className="fa-solid fa-angles-right icon-reg"></i> BLOGS
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <BlogsData />
              </div>
            </div>
            <div class="row mt-4 mb-3">
              <div class="col-lg-12 col-md-12 col-sm-12 d-lg-flex d-md-flex justify-content-lg-end justify-content-md-end">
                <p class="col-lg-auto col-md-auto col-sm-12 mt-2 alread-acc me-lg-4 fs-6">
                  I understand that gift certificates are non-refundable.
                </p>
                <input type="checkbox" class=" col-auto me-3" />
                <button class=" col-auto contin-b">CONTINUE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div />
    </div>
  );
}

export default Blogs;
