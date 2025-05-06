import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import slider1 from "../assets/events/wedding2.png";
import slider2 from "../assets/slider/2.jpg";
import slider3 from "../assets/events/wedding3.jpg";
import slider4 from "../assets/events/wedding4.jpg";
import slider5 from "../assets/slider/4.jpg";
import room from "../assets/room/4.png";

const slides = [
  {
    imageUrl: slider3,
    title: "Celebrate Your Special Day with Us",
    description:
      "Create unforgettable wedding memories in our stunning venues with exceptional service.",
    subDescription: "Your perfect beginning starts here.",
    callToAction: "Enquire About Wedding Events",
    navigateTo: "/wedding-events",
  },
  {
    imageUrl: slider1, // Replace with an actual image path
    title: "Comprehensive Wedding Amenities",
    description:
      "From catering to photography, we provide everything you need for a perfect wedding.",
    subDescription: "Stress-free planning for your joyous occasion.",
    callToAction: "See Our Wedding Amenities",
    navigateTo: "/wedding-amenities",
  },
  {
    imageUrl: slider2,
    title: "Ideal Stay in Dehradun with 24/7 Service",
    description:
      "Savor exquisite flavors crafted with local inspiration near the river.",
    subDescription: "Indulge in nature's symphony and culinary artistry.",
    callToAction: "Explore Dining Area",
    navigateTo: "/dining",
  },
  {
    imageUrl: room,
    title: "Premium Rooms & Executive Suites",
    description:
      "Our rooms offer a sanctuary for relaxation after exploration.",
    subDescription: "Experience tranquility and luxury.",
    callToAction: "View Our Luxurious Rooms",
    navigateTo: "/rooms",
  },
  {
    imageUrl: slider4,
    title: "Your Dream Wedding, Effortlessly Planned",
    description:
      "We handle all your wedding expectations, from elegant decor to seamless coordination.",
    subDescription: "Let us bring your vision to life.",
    callToAction: "Explore Wedding Packages",
    navigateTo: "/weddings",
  },
];

const HomeHero2 = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    } else {
      console.log("No navigation path defined for this slide.");
      // Optionally handle cases where navigateTo is not defined
    }
  };

  return (
    <div className="w-full  py-10 px-1 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          className="rounded-xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/50 rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row items-stretch">
                {/* Image */}
                <div className="w-full md:w-1/2 h-[250px] md:h-[500px] ">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-6 py-8 flex flex-col justify-center text-center md:text-left gap-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-bold text-gray-800"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-600 text-base"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm text-gray-500"
                  >
                    {slide.subDescription}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    onClick={() => handleButtonClick(slide.navigateTo)} // Use dynamic navigation
                    className="mt-4 w-max mx-auto md:mx-0 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black border border-black transition-all"
                  >
                    {slide.callToAction}
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeHero2;
