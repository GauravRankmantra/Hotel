import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import contactImage from "../assets/slider/3.jpg"; // Import your image

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number:"",
  });

  const isFormValid = form.name && form.email && form.message &&form.number;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", message: "",number:"" });
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            />
          </div>

          {/* Contact Form & Info */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600">
              We're here to help! Reach out with any questions or inquiries.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <MdPhone className="text-xl text-indigo-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MdEmail className="text-xl text-indigo-500" />
                <span>info@chandraInn.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MdLocationOn className="text-3xl text-indigo-500" />
                <span>Haridwar Bypass Rd, opp. Big Bazaar Mall, near ISBT, Chaudhary Colony, Majra, Dehradun, Shewala Kala, Uttarakhand 248001</span>
              </div>
            </div>

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-md space-y-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Enter your Phone Number"
                    value={form.number}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Type your message here"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 rounded-md text-white font-semibold transition-colors duration-300 ${
                  isFormValid
                    ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                    : "bg-gray-400 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map (moved below form for better mobile layout) */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
        <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.5249446976435!2d77.99929017971178!3d30.289713316718345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b002a671881%3A0x3ad16d250dd4ccd5!2sHotel%20chandraa%20celebrations!5e0!3m2!1sen!2sin!4v1746509931795!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;