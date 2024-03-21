import React from 'react';
import './home.css';
import { PRODUCTS } from '../../products';
import { Product } from "../../pages/shop/product"; // Corrected import path
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"

const textVariants = {
  initial: {
    x: 800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const sliderImage = {
  initial: {
    x: 2000,
    opacity: 4,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },

}

const Home = () => {
  return (
    <div>
      <section className='section1'>
        <div className='Wrapper'>
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>Unilock Your</motion.h2>
            <motion.h1 variants={textVariants}>Financial Freedom</motion.h1>
            <motion.h1 variants={textVariants}>Move To The Moon</motion.h1>
            <motion.div className='buttonContainer'>
              <motion.button variants={buttonVariants} initial="initial" animate="animate">Visit the product in shop</motion.button>
              <motion.button variants={buttonVariants} initial="initial" animate="animate">Buy and get bonus</motion.button>
            </motion.div>
          </motion.div>
          <motion.div className='immagContainer' variants={sliderImage} initial="initial" animate="animate">
            <img src='/images (1).png' alt=''/> 
          </motion.div>
        </div> 
      </section>
      <section className='section2'>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
