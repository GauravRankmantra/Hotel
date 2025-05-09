import React from 'react';
import bg from "../assets/room/5.jpg"
import room1 from "../assets/room/4.jpg"
import Rooms from "../components/Rooms";
import Rooms2 from "../components/Rooms2";

const Room = () => {
  return (
    <div className="w-full">
      {/* Hero Section 1 */}
      <section
        className="relative h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/40 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Stay In Style & Comfort
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover our elegant rooms tailored for luxury, peace, and unforgettable experiences.
            </p>
            <a href="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
                Explore Rooms
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Luxury Meets Nature
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Whether you're seeking a tranquil retreat or a premium stay, our rooms offer the perfect balance of comfort, design, and natural charm.
            </p>
            <a href="/contact">
              <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition">
                Book Now
              </button>
            </a>
          </div>
          <div>
            <img
              src={room1}
              alt="Luxury Room Interior"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>


      <div className="w-[90%] mx-auto my-20">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h1 className="text-3xl font-ralewaySb">Our Rooms - </h1>
            <p className="text-sm font-ralewayM text-gray-600 ml-2">
              Choose Your Ideal Accommodation
            </p>
          </div>
          <div>
            <button className="border px-2 py-3 border-gray-400 rounded">
              View All
            </button>
          </div>
        </div>
        <Rooms />
        <Rooms2 />
      </div>
    </div>
  );
};

export default Room;
