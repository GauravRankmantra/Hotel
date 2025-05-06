import React from "react";
import {
  MdLocationOn,
  MdHistory,
  MdRestaurant,
  MdHotel,
  MdEvent,
  MdSpa,
  MdWifi,
  MdCelebration,
  MdPeople,
  MdBusiness,
} from "react-icons/md";
import {
  FaMountain,
  FaLeaf,
  FaUsers,
  FaCheckCircle,
  FaUtensils,
  FaSwimmingPool,
  FaBirthdayCake,
  FaGlassCheers,
} from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { motion } from "framer-motion";

import aboutHero from "../assets/slider/1.jpg"; // Replace with your hero image
import storyImage from "../assets/slider/3.jpg"; // Replace with your story image
import team1 from "../assets/slider/1.jpg"; // Replace with team member image
import team2 from "../assets/slider/2.jpg"; // Replace with team member image
import team3 from "../assets/slider/5.jpg"; // Replace with team member image

import commitmentImage from "../assets/slider/4.jpg"; // Replace with commitment image

const teamMembers = [
  { name: "Rajesh Kumar", title: "General Manager", image: team1 },
  { name: "Pooja Verma", title: "Event Coordinator", image: team2 },
  { name: "Amit Singh", title: "Guest Relations", image: team3 },
];

const About = () => {
  return (
    <motion.div
      className="bg-gray-100 min-h-screen py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-lg shadow-md mx-auto max-w-7xl mb-16">
        <img
          src={aboutHero}
          alt="About Chandra Inn Hotel & Events"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center text-center text-white p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Chandra Inn Hotel - Your Premier Event Destination
            </h1>
            <p className="text-lg text-center md:text-xl max-w-2xl">
              Discover the story of Chandra Inn, where exceptional hospitality
              meets seamless event planning in the heart of Dehradun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={storyImage}
              alt="Our Story"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Journey: Crafting Unforgettable Events in Dehradun
            </h2>
            <p className="text-sm text-gray-700">
              Chandra Inn Hotel was established with a vision to provide a haven
              of comfort and a premier destination for events in Dehradun.
              Founded in [Year of Establishment] by [Founder's Name(s)], our
              journey began with a commitment to creating memorable experiences,
              from intimate gatherings to grand celebrations.
            </p>
            <p className="text-sm text-gray-700">
              Starting as a modest establishment, Chandra Inn quickly gained
              recognition for its warm hospitality and meticulous attention to
              event details. Over the years, we have thoughtfully expanded our
              facilities and services, always maintaining our core values of
              quality, comfort, and personalized care.
            </p>
            <p className="text-sm text-gray-700">
              From weddings and corporate conferences to birthday parties and
              family reunions, our growth has been driven by a passion for
              creating exceptional moments. We are proud to be a part of
              Dehradun's hospitality landscape and look forward to continuing
              our tradition of excellence for years to come.
            </p>
            <div className="flex items-center space-x-4">
              <MdLocationOn className="text-2xl text-indigo-500" />
              <span className="text-gray-600 font-semibold">
                Conveniently located in the heart of Dehradun, Uttarakhand
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-semibold text-gray-800 mb-10"
          >
            Our Guiding Principles for Exceptional Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <MdEvent className="text-4xl text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Seamless Event Planning
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We handle every detail, ensuring your event is flawlessly
                executed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-emerald-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <FaUsers className="text-4xl text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Personalized Service
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We tailor our services to your unique vision, creating a truly
                memorable experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-orange-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <MdHotel className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Comfort & Quality
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We provide comfortable accommodations and high-quality services
                for you and your guests.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-yellow-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <FaCheckCircle className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Integrity & Trust
              </h3>
              <p className="text-gray-700 text-sm text-center">
                We operate with transparency and honesty, building trust with
                our clients and partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Promise to Your Event
            </h2>
            <p className="text-lg text-gray-700">
              At Chandra Inn Hotel, we are committed to making your event a
              resounding success. We go beyond providing a venue; we create
              experiences.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Attentive and personalized service from our dedicated event
                planning team.
              </li>
              <li>
                Versatile event spaces that can be adapted to your specific
                needs and style.
              </li>
              <li>Delicious catering options to delight your guests.</li>
              <li>Comfortable accommodations for you and your attendees.</li>
              <li>
                A commitment to exceeding your expectations and creating lasting
                memories.
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <MdHistory className="text-2xl text-indigo-500" />
              <span className="text-gray-600 font-semibold">
                Dedicated to creating lasting positive experiences.
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={commitmentImage}
              alt="Our Commitment"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-semibold text-gray-800 mb-10"
          >
            Meet Our Passionate Event Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-semibold text-gray-800 mb-10 text-center"
        >
          We Host All Types of Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdCelebration className="text-5xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Weddings & Anniversaries
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Create unforgettable memories with our elegant venues and expert
              planning.
            </p>
            {/* Image suggestion:  elegant hotel ballroom setup for a wedding celebration */}
            {/* <img src={weddingImage} alt="Wedding Celebration" className="mt-4 rounded-md w-full h-auto" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdBusiness className="text-5xl text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Corporate Events & Conferences
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Impress clients and inspire your team with our professional
              facilities and services.
            </p>
            {/* Image suggestion: hotel conference room setup for a corporate event */}
            {/* <img src={conferenceImage} alt="Corporate Event" className="mt-4 rounded-md w-full h-auto" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaBirthdayCake className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Birthday Celebrations
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Celebrate in style with our versatile spaces and customizable
              packages.
            </p>
            {/* Image suggestion: festive hotel banquet hall decorated for a birthday party */}
            {/* <img src={birthdayImage} alt="Birthday Party" className="mt-4 rounded-md w-full h-auto" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdPeople className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Family Gatherings & Special Occasions
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Create lasting memories with your loved ones in our welcoming
              atmosphere.
            </p>
            {/* Image suggestion: hotel garden decorated for a family gathering */}
            {/* <img src={familyImage} alt="Family Gathering" className="mt-4 rounded-md w-full h-auto" /> */}
          </motion.div>
          {/* Add more event types as needed */}
        </div>
      </section>

      {/* Our Facilities & Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-semibold text-gray-800 mb-10 text-center"
        >
          Experience Our Amenities & Services for Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdHotel className="text-5xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Comfortable Accommodations
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Relax in our well-appointed rooms and suites, designed for a
              restful and comfortable stay for you and your guests.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaUtensils className="text-5xl text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Dining Delights
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Savor delicious culinary creations at our on-site restaurant,
              offering a variety of flavors for your event.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdEvent className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Versatile Event Spaces
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Host your special occasions and corporate events in our flexible
              and well-equipped venues.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdSpa className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Peaceful Environment
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Calm, serene, and free from disturbance, offering a sense of
              tranquility and well-being
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <FaSwimmingPool className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Refreshing Pool Area
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Enjoy a refreshing dip in our swimming pool and soak up the
              Dehradun sunshine.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <MdWifi className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Complimentary Wi-Fi
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Stay connected with our high-speed complimentary Wi-Fi access
              throughout the hotel.
            </p>
          </motion.div>
          {/* Add more facilities/services as needed */}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
