import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../src/Components/Blogs/Blogs.css"
const Information = ()=> {
 return (
    <motion.div 
      initial={{x:"-100vw"}}
        animate={{x:0}}
        transition={{delay:0.5,type:"spring",stiffness:80}}
    class="col-lg-12 col-md-12 col-sm-12  p-0 shadow infoback">
    <div class="border mb-5 d-lg-block d-none">
        <h5 class="card-header bg-dark text-white">INFORMATION</h5>
        <div class="card-body">
          <h5 class=""><Link to= "" class="info-sideb">About Us</Link></h5>
          <h5 class=""><Link to= ""  class="info-sideb">Delivery Information</Link></h5>
          <h5 class=""><Link to= ""  class="info-sideb">Privacy policy</Link></h5>
          <h5 class=""><Link to= ""  class="info-sideb">Terms & Condition</Link></h5>
          <h5 class=""><Link to= ""  class="info-sideb">Contact  Us</Link></h5>
          <h5 class=""><Link to= ""class="info-sideb">Site Map</Link></h5>
        </div>
    </div>
</motion.div>
 );
};
export default Information;