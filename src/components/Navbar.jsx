import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import ShinyText from "./ShinyText";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-sm">
      {/* Top Contact Info */}
      <div className="bg-white border-b border-gray-200 py-2 text-sm text-gray-600">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <a
              href="mailto:info@chandraInn.com"
              className="hover:text-gray-800 flex items-center space-x-1"
            >
              <MdAlternateEmail />
              <span>
              info@chandraInn.com
              </span>
          
            </a>
            <span className="hidden sm:inline-block mx-2">|</span>
            <a href="tel:+919876543210" className="hover:text-gray-800 flex items-center space-x-1">
              <FaPhoneAlt />
              <span>
              +91 987xxx908
              </span>
       
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="hover:text-gray-700">
            <img src={logo} className="w-36 aspect-auto" alt="logo" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18V6H3v2z"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {["/", "/rooms", "/events", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`hover:text-gray-700 relative ${
                  activeLink === path ? "font-semibold" : ""
                }`}
                onClick={() => handleLinkClick(path)}
              >
                {path === "/"
                  ? "Home"
                  : path
                      .slice(1)
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                {activeLink === path && (
                  <span className="absolute bottom-[-3px] left-0 w-full h-0.5 bg-black scale-x-100 transition-transform" />
                )}
                <span className="absolute bottom-[-3px] left-0 w-full h-0.5 bg-gray-300 scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            <Link
              to="/book-now"
              className="bg-[#e9692a] text-white hover:bg-gray-800 py-2 px-4 rounded-md transition duration-300"
            >
              <ShinyText
                text="Book Now"
                disabled={false}
                speed={3}
                className="text-white"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            {["/", "/rooms", "/amenities", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`block text-gray-700 hover:text-black py-2 px-2 rounded ${
                  activeLink === path ? "font-semibold" : ""
                }`}
                onClick={() => handleLinkClick(path)}
              >
                {path === "/"
                  ? "Home"
                  : path
                      .slice(1)
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            ))}
            <Link
              to="/book-now"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#e9692a] text-white hover:bg-gray-800 py-2 px-4 rounded-md transition"
            >
              <ShinyText
                text="Book Now"
                disabled={false}
                speed={3}
                className="text-white"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
