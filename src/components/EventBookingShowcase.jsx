import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import wedding from "../assets/events/wedding3.jpg";
import birthday from "../assets/slider/1.jpg";
import anniversaries from "../assets/slider/2.jpg";
import corporateEvents from "../assets/slider/3.jpg";
import ceremonies from "../assets/slider/4.jpg";

const events = [
  {
    title: "Weddings",
    description:
      "Make your wedding day magical with stunning decor and service.",
    image: wedding,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-pink-50",
    hoverBg: "bg-pink-200",
  },
  {
    title: "Corporate Events",
    description: "Professional, elegant spaces for meetings & conferences.",
    image: corporateEvents,
    className: "md:row-span-3",
    bg: "bg-blue-50",
    hoverBg: "bg-blue-200",
  },
  {
    title: "Birthdays",
    description: "Fun-filled celebrations with custom themes and catering.",
    image: birthday,
    className: "md:row-span-1 md:col-span-1",
    bg: "bg-yellow-50",
    hoverBg: "bg-yellow-200",
  },
  {
    title: "Anniversaries",
    description: "Romantic settings to celebrate love and togetherness.",
    image: anniversaries,
    className: "md:col-span-2 md:row-span-3",
    bg: "bg-rose-50",
    hoverBg: "bg-rose-200",
  },
  {
    title: "Ceremonies",
    description: "Spiritual & cultural ceremonies in serene surroundings.",
    image: ceremonies,
    className: "md:col-span-2 md:row-span-3",
    bg: "bg-green-50",
    hoverBg: "bg-green-200",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const EventBookingBento = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="px-4 md:px-12 py-5 md:py-16 bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-200 " ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Host Unforgettable Moments With Us
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-4  md:grid-rows-4 gap-4 auto-rows-[180px]">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`relative rounded overflow-hidden shadow-md transition-all duration-300 group ${
              event.className
            } ${event.bg} ${
              event.hoverBg ? `hover:${event.hoverBg}` : "hover:bg-gray-100"
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover   transition-opacity duration-300"
            />
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl md:text-2xl font-semibold text-white bg-black/20 rounded">
                {event.title}
              </h3>
              <p className="text-xs md:text-base text-gray-100 mt-2 inline bg-black/20 rounded ">
                {event.description}
              </p>
              {/* <div className="absolute bottom-4 left-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Book Now
                </motion.button>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventBookingBento;
