import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 px-4 md:px-16">
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
            Escape to comfort and luxury. Our resort offers a serene environment,
            perfect for your vacation, events, and more.
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
            <li><a href="#about" className="hover:text-black transition">About Us</a></li>
            <li><a href="#rooms" className="hover:text-black transition">Rooms & Cottages</a></li>
            <li><a href="#adventure" className="hover:text-black transition">Adventure</a></li>
            <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
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
              <FaPhoneAlt className="text-[#f79b1e]" />
              <a href="tel:+919876543210" className="hover:text-white transition">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" />
              <a href="mailto:info@yourhotel.com" className="hover:text-white transition">
                info@yourhotel.com
              </a>
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition"
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
    </footer>
  );
};

export default Footer;
