import React from 'react'
import "./ProductHero.css"
import { motion } from 'framer-motion'
const ProductHero = () => {
  return (
    <section className='ProdHero my-3'>
 <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <h2 className="fs-1 fw-bold">INSTILEY</h2>
          <p
         
            className="text-white fs-6 py-2"
          >
            Neque porro quisquam est qui dolorem ipsum quia <br></br>dolor sit amet consectetur adipisci velit sed quia <br></br>non numquam eius modi tempora incidunto.
          </p>
          <button className="py-2 hero4btn ">BLOG</button>
        </motion.div>
    </section>
  )
}

export default ProductHero