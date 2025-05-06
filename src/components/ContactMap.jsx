import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <div className="w-full mt-16 py-16 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Find Us & Get in Touch
      </motion.h2>

      <div className="flex border border-gray-300 rounded shadow flex-col md:flex-row gap-10">
        {/* Map Section */}
        <div className="w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.5249446976435!2d77.99929017971178!3d30.289713316718345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b002a671881%3A0x3ad16d250dd4ccd5!2sHotel%20chandraa%20celebrations!5e0!3m2!1sen!2sin!4v1746509931795!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info Section */}
        <div className="w-full p-4 md:w-1/3 flex flex-col justify-center gap-6 text-gray-800">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-lg font-medium">Phone</p>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-lg font-medium">Email</p>
              <p className="text-sm text-gray-600">info@chandrainn.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-5xl" />
            <div>
              <p className="text-lg font-medium">Location</p>
              <p className="text-sm text-gray-600">
                Haridwar Bypass Rd, opp. Big Bazaar Mall, near ISBT, Chaudhary
                Colony, Majra, Dehradun, Shewala Kala, Uttarakhand 248001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
