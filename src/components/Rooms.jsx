import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { FaArrowRight, FaStar } from "react-icons/fa";

import room1 from "../assets/room/1.png";
import room2 from "../assets/room/2.png";
import room3 from "../assets/room/3.png";
import room4 from "../assets/room/4.png";

const roomData = [
  {
    id: 1,
    name: "Deluxe Sea View Room",
    images: [
      room1,room4,room2
    ],
    pricePerNight: 4500,
    description:
      "A modern, sunlit room with floor-to-ceiling windows offering spectacular sea views. Designed for ultimate relaxation with premium bedding and serene decor.",
    amenities: [
      "King-size bed",
      "Private sea-facing balcony",
      "Rainfall shower",
      "Smart TV (Netflix/Prime)",
      "Tea & coffee maker",
      "Mini-bar",
      "Free high-speed Wi-Fi",
      "Room service (24x7)",
    ],
    bedType: "King",
    maxGuests: 2,
    roomSize: "35 sqm",
    view: "Ocean",
    includedMeals: "Breakfast",
    available: true,
    rating: 4.2,
  },
  {
    id: 2,
    name: "Family Suite With Garden View",
    images: [
      room2,room4,room3
    ],
    pricePerNight: 7200,
    description:
      "Comfortable and spacious suite for families. Features separate sleeping zones, a private balcony with garden view, and entertainment options for all ages.",
    amenities: [
      "Two queen-size beds",
      "Private balcony with garden view",
      "Kids play area access",
      "Refrigerator and microwave",
      "Complimentary breakfast",
      "Work desk",
      "Free Wi-Fi",
      "Daily housekeeping",
    ],
    bedType: "2 Queens",
    maxGuests: 4,
    roomSize: "55 sqm",
    view: "Garden",
    includedMeals: "Breakfast",
    available: true,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Executive Cottage With Jacuzzi",
    images: [
   room3,room1,room2
    ],
    pricePerNight: 9800,
    description:
      "A luxurious private cottage nestled in nature. Enjoy the open-air Jacuzzi, wooden interiors, and a romantic ambiance perfect for couples or solo travelers.",
    amenities: [
      "Outdoor Jacuzzi",
      "Private patio & garden",
      "Fireplace",
      "Butler service (on request)",
      "Complimentary mini-bar",
      "Bathrobes & slippers",
      "Wi-Fi & Smart TV",
    ],
    bedType: "King",
    maxGuests: 2,
    roomSize: "70 sqm",
    view: "Forest",
    includedMeals: "Breakfast & Dinner",
    available: false,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Budget Room (Non-AC)",
    images: [
     room4,room1,room3
    ],
    pricePerNight: 1800,
    description:
      "Clean and comfortable non-AC room, best suited for solo travelers or backpackers. Basic amenities with access to common lounge and kitchen.",
    amenities: [
      "Double bed",
      "Ceiling fan",
      "Shared lounge access",
      "Hot water",
      "Free Wi-Fi",
      "Complimentary bottled water",
    ],
    bedType: "Double",
    maxGuests: 2,
    roomSize: "20 sqm",
    view: "None",
    includedMeals: "None",
    available: true,
    rating: 5.0,
  },
  {
    id: 5,
    name: "Luxury Poolside Room",
    images: [
      room3,room4,room1
    ],
    pricePerNight: 6500,
    description:
      "A chic room with immediate access to the pool. Perfect for leisure lovers who enjoy a refreshing dip and stylish interiors with mood lighting.",
    amenities: [
      "Pool access from room",
      "Mood lighting",
      "Sound system",
      "Mini bar",
      "Bath tub with LED mirror",
      "Air conditioning",
      "Netflix access",
    ],
    bedType: "King",
    maxGuests: 2,
    roomSize: "40 sqm",
    view: "Pool",
    includedMeals: "Breakfast",
    available: true,
    rating: 4.2,
  },
  {
    id: 6,
    name: "Mountain View Suite",
    images: [
     room3,room1
    ],
    pricePerNight: 5300,
    description:
      "Wake up to stunning mountain vistas. This suite offers a warm wooden interior, reading nook, and panoramic balcony views of the hills.",
    amenities: [
      "Queen-size bed",
      "Panoramic balcony",
      "Reading corner",
      "Coffee machine",
      "Heater",
      "Room service",
    ],
    bedType: "Queen",
    maxGuests: 2,
    roomSize: "38 sqm",
    view: "Mountain",
    includedMeals: "Breakfast",
    available: true,
    rating: 4.5,
  },
];


const Rooms = () => {
  const handleBookNow = (title) => {
    alert(`Booking started for: ${title}`);
    // Or navigate to booking form
  };

  const handleViewDetails = (title) => {
    alert(`Opening details for: ${title}`);
    // Or navigate to detail page
  };

  return (
<div className="md:hidden w-full py-16 px-4 bg-white flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Choose Your Dream Accommodation
        </h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[90%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mySwiper"
        >
          {roomData.map((room, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg relative group transition-all duration-300">
                {/* Image with detail icon */}
                <div className="relative">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <button
                    onClick={() => handleViewDetails(room.name)}
                    className="absolute cursor-pointer top-3 z-50 right-3 bg-white/50 hover:bg-white p-2 rounded-full text-black shadow transition-all duration-300"
                    title="View Details"
                  >
                    <FaArrowRight />
                  </button>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                    {room?.rating && (
                      <div className="flex items-center text-sm text-yellow-500">
                        <FaStar className="mr-1" />
                        <span>{room.rating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{room.description}</p>

                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="font-semibold mr-2">Price:</span>
                    <p className="text-lg text-green-600 font-sans font-semibold">{room.pricePerNight} ₹ / night</p>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700">Amenities:</h4>
                    <ul className="list-disc list-inside text-xs text-gray-500">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                      {room.amenities.length > 3 && (
                        <li className="italic text-blue-500 cursor-pointer hover:underline" onClick={() => handleViewDetails(room.name)}>
                          + {room.amenities.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleBookNow(room.name)}
                    className="mt-4 w-full bg-gradient-to-r from-[#f79b1e] to-[#e72025] text-white py-2 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Rooms;
