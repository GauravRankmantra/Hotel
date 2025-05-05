import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

import bg from "../assets/heroBg.jpg";
import logo1s from "../assets/logo1s.svg";
import SplitText from "./SplitText";

const HeroSection = () => {
  return (
    <div className="relative h-[45rem] bg-gray-100 font-ralewayB overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Hotel Lobby"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />
      <div className="absolute inset-0 bg-black/15 md:bg-black/0 z-0" />

      {/* Gradient Top & Bottom */}
      <div className="absolute top-0 left-0  w-full h-32 bg-gradient-to-b from-white to-transparent z-30" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative md:z-20 mt-5 md:mt-20 flex flex-col z-50  items-center justify-start text-center h-full px-6">
        <h1 className="relative">
          <SplitText
            text="Discover Your Dream Stay"
            className=" text-5xl lg:text-7xl font-ralewayB  bg-clip-text text-black drop-shadow-md leading-tight"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

          <img
            src={logo1s}
            alt="Logo"
            className="absolute  w-10 h-10 md:w-16 md:h-16 -top-10 right-[-1.5rem] md:-top-16 md:right-[-4rem] "
          />
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white drop-shadow-2xl md:text-gray-700 max-w-2xl font-ralewayM leading-relaxed">
          Experience unparalleled luxury and comfort at our exquisite hotel.
          Your perfect getaway awaits with elegance, style, and tranquility.
        </p>

        <button
          className="mt-10 bg-gradient-to-r from-[#f79b1e] to-[#e72025] text-white py-3 px-8 rounded-full text-lg font-semibold 
                     shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Book Your Escape
        </button>
      </div>

      {/* Explore More Section */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm bg-black/30 px-3 py-1 rounded-full mb-2">
          Explore More
        </span>
        <button className="bg-white/90 p-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          <FaLongArrowAltDown className="text-black w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
