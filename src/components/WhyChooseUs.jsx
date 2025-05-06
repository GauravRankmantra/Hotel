import React from 'react';
import { FaBed, FaGlassCheers, FaHandsHelping, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import HomeHero2 from './HomeHero2';

const features = [
  {
    icon: <FaBed className="text-5xl md:text-6xl text-indigo-500 mb-4" />,
    title: 'Sanctuary of Comfort',
    description: 'Experience rooms designed for ultimate relaxation, boasting elegant décor and breathtaking views that soothe the soul.',
    accentColor: 'bg-indigo-100',
    nav:'/rooms'
  },
  {
    icon: <FaGlassCheers className="text-5xl md:text-6xl text-emerald-500 mb-4" />,
    title: 'Celebrate Life Beautifully',
    description: 'From joyous weddings to milestone birthdays, our venues provide the perfect backdrop for unforgettable celebrations.',
    accentColor: 'bg-emerald-100',
    nav:'/events'
  },
  {
    icon: <FaHandsHelping className="text-5xl md:text-6xl text-orange-500 mb-4" />,
    title: 'Service Beyond Expectation',
    description: 'Our dedicated team anticipates your needs, ensuring a seamless and personalized experience from arrival to departure.',
    accentColor: 'bg-orange-100',
    nav:'/rooms'
  },
  {
    icon: <FaStar className="text-5xl md:text-6xl text-yellow-500 mb-4" />,
    title: 'A Legacy of Excellence',
    description: 'Trusted by many, our consistently high ratings reflect our commitment to quality and creating exceptional guest experiences.',
    accentColor: 'bg-yellow-100',
    nav:"/contactus"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const WhyChooseUs = () => {

    const navigate =useNavigate()

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-200">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Discover the Exceptional
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full ${feature.accentColor}`}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-8 flex flex-col items-center justify-center h-40 md:h-48">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 mt-3">{feature.title}</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-end items-start">
              <p className="text-gray-700 text-sm mb-4">{feature.description}</p>
              <button
              onClick={()=>navigate(feature.nav)}
              className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm flex items-center transition duration-200">
                Learn More <BsArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <HomeHero2/>
    </section>
  );
};

export default WhyChooseUs;