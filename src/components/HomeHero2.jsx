import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import slider1 from "../assets/slider/1.jpg";
import slider2 from "../assets/slider/2.jpg";
import slider3 from "../assets/slider/3.jpg";
import slider4 from "../assets/slider/5.jpg";
import slider5 from "../assets/slider/4.jpg";
import room from "../assets/room/4.png";

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 } },
};

const slides = [
  {
    imageUrl: slider3,
    title: "Breathtaking Coastal Views",
    description:
      "Witness the breathtaking dawn paint the distant Himalayan peaks in vibrant hues. Our vantage point offers an unparalleled panoramic vista of the serene valley.",
    subDescription: "Begin your day with nature's grandest display.",
    image: slider1,
    callToAction: "See Our Valley View Rooms",
  },
  {
    imageUrl: slider2,
    title: "Ideal Stay in the Heart of Dehradun with 24/7 Service",
    description:
      "Savor exquisite flavors crafted with local inspiration, accompanied by the soothing melody of the nearby river. A unique dining experience in a tranquil setting.",
    subDescription: "Indulge in nature's symphony and culinary artistry.",
    image: slider2,
    callToAction: "Explore Dining Area",
  },
  {
    imageUrl: room,
    title: "Premium Rooms & Executive Suites with Modern Comforts",
    description:
      "Discover havens of refined comfort and style. Our exquisitely designed rooms offer a sanctuary for relaxation after a day of exploration.",
    subDescription: "Experience tranquility and luxurious amenities.",

    callToAction: "View Our Luxurious Rooms",
  },
  {
    title: "Inspiring Spaces for Every Occasion",
    description:
      "Elevate your events in our versatile venues, where sophisticated ambiance meets seamless service. Perfect for memorable celebrations and successful gatherings.",
    subDescription: "Create unforgettable moments with us.",
    imageUrl: slider4,
    callToAction: "Plan Your Special Event",
  },
  {
    title: "Elegant Accommodation for Business & Leisure Travelers",
    description:
      "Unwind as the day transitions into night in our sophisticated lounge. Enjoy handcrafted beverages and a soothing atmosphere.",
    subDescription: "Your perfect evening escape awaits.",
    imageUrl: slider5,
    callToAction: "Discover Our Evening Lounge",
  },
];

const HomeHero2 = () => {
  return (
    <div className="relative py-10 w-full h-max bg-white overflow-hidden flex  items-center justify-center">
      <div className="w-full  max-w-7xl mx-auto  px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full h-full rounded-xl shadow-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative  w-full h-full flex flex-col md:flex-row items-center rounded-xl overflow-hidden"
            >
              {/* Image */}
        
              <div className=" w-full md:w-1/2  h-full flex items-center justify-start ">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className=" w-full h-[25rem] md:h-[30rem] object-cover rounded-tl-xl rounded-bl-xl"
                />
              </div>
              {/* Content Container */}
              <div className="md:absolute md:top-0 md:right-0 z-20  w-full md:w-1/2  h-full flex items-center justify-end px-2 py-4 md:px-16 lg:px-24 ">
                <div className="w-full ">
                  <motion.h2
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold md:text-black mb-4 md:mb-6  "
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-700 mb-8 md:mb-10  "
                  >
                    {slide.description}
                  </motion.p>
                  <motion.p
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, delay: 0.2 }}
                    className="text-xs md:text-sm text-gray-500 mb-8 md:mb-10  "
                  >
                    {slide.subDescription}
                  </motion.p>

                  <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, delay: 0.4 }}
                  >
                    <button
                      className="bg-black/80 text-white hover:text-black cursor-pointer  border-white/50 hover:bg-white/30
                                              hover:border-white/70 transition-all duration-300
                                              shadow-lg py-3 px-6 rounded-full"
                    >
                      {slide.callToAction}
                    </button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20">
            <button
              className="text-white hover:bg-white/20  rounded-full p-3"
              aria-label="Previous Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
            <button
              className="text-white hover:bg-white/20 rounded-full p-3"
              aria-label="Next Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          {/* Pagination */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full">
            <div className="swiper-pagination flex justify-center items-center"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeHero2;
