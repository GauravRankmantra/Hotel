'use client';
import React from 'react';
import { motion } from 'framer-motion';
// import './fonts.css';

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeLineVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const EventShowcase = () => {
  return (
    <section className="w-full px-2 py-10 md:px-6 md:py-24 bg-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h1
          className="font-luxury text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-wide"
        >
          <motion.span variants={fadeLineVariant} className="block">
            Unforgettable Moments.
          </motion.span>
          <motion.span variants={fadeLineVariant} className="block text-[#f79b1e]">
            Luxurious Stays.
          </motion.span>
          <motion.span variants={fadeLineVariant} className="block text-gray-700">
            Exceptional Dining.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeLineVariant}
          className="mt-6 text-lg md:text-xl text-gray-600 font-light font-sans"
        >
          Discover elegance, comfort, and cuisine that <span className='text-[#e72025]'>redefine</span>  experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EventShowcase;
