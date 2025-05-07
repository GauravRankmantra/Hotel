import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="  text-gray-800 pt-12 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Hotel Logo" className=" mb-4" />
          <p className="text-gray-400 text-sm">
            Escape to comfort and luxury. Our resort offers a serene
            environment, perfect for your vacation, events, and more.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-6 text-gray-700 text-sm">
            <li>
              <Link to="/about" className="hover:text-black transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-black transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-black transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-6 text-gray-800 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#f79b1e] text-2xl" />
              <Link href="tel:+919876543210">+91 98765 43210</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-400 text-2xl" />
              <Link href="mailto:info@yourhotel.com">info@chandrainn.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500 text-6xl" />

              <Link href="mailto:info@yourhotel.com">
                Haridwar Bypass Rd, opp. Big Bazaar Mall, near ISBT, Chaudhary
                Colony, Majra, Dehradun, Shewala Kala, Uttarakhand 248001
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Hotel-Chandra-Celebrations/61563296889458/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f79b1e] hover:bg-indigo-600 text-white p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/hotel_chandraa_celebrations/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a24037] hover:bg-pink-600 text-white p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e9692a] text-white hover:bg-blue-600 p-3 rounded-full transition"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Chandra Inn. All rights reserved.
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918979861717"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative  animate-fade-in-slow"
        >
          <div className="p-3 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-100 hover:bg-green-200 shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <FaWhatsapp className="text-green-600 w-8 h-8 md:w-10 md:h-10 " />
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full w-2.5 h-2.5 animate-ping"></span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
