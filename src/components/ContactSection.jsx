import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BiSend } from "react-icons/bi"; // Import send icon

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-black mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Let's Connect!
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-gray-600">
            Whether you're interested in booking accommodation, organizing an
            event, making a restaurant reservation, or have questions about our
            facilities and services in Dehradun, our dedicated team is ready to
            help. Please use the contact information provided below.
          </p>
          <div className="flex items-center gap-6 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md">
            {" "}
            {/* Glassmorphism effect */}
            <div className="text-white bg-[#f79b1e] p-4 rounded-full text-xl shadow-sm">
              {" "}
              {/* Slightly larger icon background */}
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold ">Call Us</h4>{" "}
              {/* Accent color */}
              <p className="text-gray-700">+91 987xxxxx10</p>
            </div>
          </div>
          <div className="flex items-center gap-6 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md">
            <div className="text-white bg-green-500 p-4 rounded-full text-xl shadow-sm">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold ">Email Us</h4>
              <p className="text-gray-700">info@chandraInn.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md">
            <div className="text-white bg-[#e72025] p-4 rounded-full text-xl shadow-sm">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold ">Visit Us</h4>
              <p className="text-gray-700">123 Isbt Road, Dehradun, India</p>
            </div>
          </div>
        </motion.div>
        {/* Contact Form */}
        <motion.form
          className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div>
            <label className="block font-semibold mb-2">Your Name</label>{" "}
            {/* Accent color */}
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner"
            />
          </div>
          <div>
            <label className="block  font-semibold mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-inner"
            />
          </div>
          <div>
            <label className="block  font-semibold mb-2">Your Message</label>{" "}
            {/* Accent color */}
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-black/80 text-white font-semibold rounded-lg cursor-pointer hover:bg-black/90 transition-shadow shadow-md hover:shadow-lg flex justify-center items-center gap-2"
          >
            Send Message <BiSend className="text-xl" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
