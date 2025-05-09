import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import wedding from "../assets/events/wedding3.jpg";
import wedding2 from "../assets/events/wedding4.jpg";
import wedding3 from "../assets/events/wedding7.jpg";
import birthday from "../assets/slider/1.jpg";
import room2 from "../assets/room/2.jpg";
import corporateEvents from "../assets/slider/3.jpg";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    occasion: "",
    tentativeGuestCount: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_g1o0vkh",
        "template_fpc0eqe",
        formData,
        "RIKudciWiLHhLZTdn"
      )
      .then(() => {
        setEmailSent(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          date: "",
          occasion: "",
          tentativeGuestCount: "",
        });
      })
      .catch((error) => {
        console.error("Email send error:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  const slidesData = [
    {
      img: room2,
      heading: "Indulge in Our Luxurious Rooms",
      desc: "Experience unparalleled comfort and sophistication in our meticulously designed luxury rooms. Each space is crafted with premium materials, exquisite furnishings, and thoughtful amenities to ensure a truly indulgent stay. From plush bedding and spacious layouts to stunning views and state-of-the-art technology, we've anticipated every detail to exceed your expectations and provide a serene sanctuary for relaxation and rejuvenation.",
    },
    {
      img: wedding2,
      heading: "Celebrate Your Special Day with Us",
      desc: "Create unforgettable wedding memories in our stunning venues with exceptional service.",
    },
    ,
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
    <div className="w-full h-max md:h-screen flex flex-col md:flex-row  overflow-hidden shadow-xl">
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
                className="md:h-full h-[35rem]  bg-cover bg-center  flex items-start  justify-center text-white p-8 md:p-16"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* <div className="absolute inset-0 bg-black/10 " /> */}
                <div className="absolute bg-black/30 py-5 w-full bottom-1 z-10 text-center max-w-4xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {slide.heading}
                  </h2>
                  {/* <p className="text-xs md:text-lg text-gray-200 mb-6">{slide.desc}</p> */}
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-[#f79b1e]  text-white font-semibold text-xs md:text-sm px-3 py-3 md:px-6 md:py-3 rounded-full transition-colors duration-300 shadow-md"
                  >
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
      <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-gray-50 p-4 md:p-12 lg:p-16">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-yellow-100 py-6 px-8 border-b border-yellow-200">
            <h3 className="text-2xl font-semibold text-yellow-700 text-center">
              Let's Plan Your Special Day
            </h3>
            <p className="text-gray-600 text-center mt-1 text-sm">
              Tell us about your event.
            </p>
          </div>

          {emailSent ? (
            <div className="p-6 text-green-600 text-center font-medium">
              ✅ Your message has been sent successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="py-8 px-8 space-y-4">
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
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="shadow-inner border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="shadow-inner border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
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
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="shadow-inner border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="occasion"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Occasion
                </label>
                <input
                  type="text"
                  id="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  placeholder="occasion"
                  className="shadow-inner border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date"
                  className="shadow-inner border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="tentativeGuestCount"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tentative Guest Count
                </label>
                <input
                  type="text"
                  id="tentativeGuestCount"
                  value={formData.tentativeGuestCount}
                  onChange={handleChange}
                  placeholder="Tentetive Guest Count"
                  className="shadow-inner border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={!isFormValid || isSending}
                className={`bg-[#f79b1e] text-white font-bold py-3 rounded shadow-md w-full transition-opacity ${
                  !isFormValid || isSending
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e68a0e]"
                }`}
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send <BsArrowRight className="inline-block ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
