import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import wedding from "../assets/events/wedding2.png";
import birthday from "../assets/slider/1.jpg";
import corporateEvents from "../assets/slider/3.jpg"; // Using corporate image as it was "Seamless Events"
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate()
  const slidesData = [
    {
      img: wedding,
      heading: "Crafting Magical Wedding Celebrations",
      desc: "Immerse yourselves in nature's beauty as you begin your journey together. Our exquisite venues and dedicated team ensure a wedding beyond your dreams.",
    },
    {
      img: birthday,
      heading: "Vibrant Birthday Celebrations Tailored for You",
      desc: "Celebrate another year with a bespoke party filled with joy, laughter, and unforgettable moments. From intimate gatherings to grand affairs.",
    },
    {
      img: corporateEvents,
      heading: "Elevate Your Corporate Events with Seamless Excellence",
      desc: "Impress your colleagues and clients with sophisticated events in a serene setting. We handle every detail for productive and memorable experiences.",
    },
  ];

  return (
    <div className="w-full h-max md:h-screen flex flex-col md:flex-row rounded-md overflow-hidden shadow-xl">
      {/* Left Side - Slider */}
      <div className="md:w-8/12 w-full h-1/2 md:h-full relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {slidesData.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="md:h-full h-[350px]  bg-center flex items-center  justify-center text-white p-8 md:p-16"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/30 " />
                <div className="relative z-10 text-center max-w-xl">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.heading}
                  </h2>
                  {/* <p className="text-xs md:text-lg text-gray-200 mb-6">{slide.desc}</p> */}
                  <button
                  onClick={()=>navigate("/contact")}
                  className="bg-[#f79b1e]  text-white font-semibold text-xs md:text-sm px-3 py-3 md:px-6 md:py-3 rounded-full transition-colors duration-300 shadow-md">
                    <span>Book Now </span>
                    <BsArrowRight className="inline-block ml-1" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side - Modern Form */}
      <div className="md:w-1/2 w-full h-1/2  md:h-full flex items-center justify-center bg-gray-50 p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-yellow-100 py-6 px-8 border-b border-yellow-200">
            <h3 className="text-2xl font-semibold text-yellow-700 text-center">
              Let's Plan Your Special Day
            </h3>
            <p className="text-gray-600 text-center mt-1 text-sm">
              Tell us about your event.
            </p>
          </div>
          <form className="py-8 px-8 space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your Name"
                className="shadow-inner appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="shadow-inner appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Your Phone"
                className="shadow-inner appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                placeholder="Your Message"
                className="shadow-inner appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* <div>
              <label htmlFor="eventType" className="block text-gray-700 text-sm font-bold mb-2">Event Type</label>
              <div className="relative">
                <select
                  id="eventType"
                  className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div> */}
            {/* <div>
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date of Event</label>
              <input
                type="date"
                id="date"
                className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div> */}
            <button
              type="submit"
              className="bg-[#f79b1e] text-white font-bold py-3 rounded shadow-md transition-colors duration-300 w-full"
            >
              Send <BsArrowRight className="inline-block ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
