import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import room1 from "../assets/room/1.png";
import room2 from "../assets/room/2.png";
import room3 from "../assets/room/3.png";
import room4 from "../assets/room/4.png";

const roomsData = [
  {
    id: 1,
    name: "Deluxe Sea View Room",
    images: [room1, room4, room2],
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
    images: [room2, room4, room3],
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
    images: [room3, room1, room2],
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
    images: [room4, room1, room3],
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
    images: [room3, room4, room1],
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
    images: [room3, room1],
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

const Rooms2 = () => {
  return (
    <section className="hidden md:flex py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Explore Our Rooms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RoomCard = ({ room }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
      );
    }

    return stars;
  };
  useEffect(() => {
    // Delay enabling swiper buttons until refs are mounted
    setTimeout(() => {
      setSwiperReady(true);
    }, 0);
  }, []);

  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden relative border border-gray-200">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={
            swiperReady
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : false
          }
          className="roomSwiper h-60 w-full"
        >
          {room.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Room ${room.id} - ${i}`}
                className="w-full h-60 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 bg-white/30 text-black p-2 cursor-pointer rounded-full shadow hover:bg-black hover:text-white transition"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2 bg-white/30 text-black p-2 cursor-pointer rounded-full shadow hover:bg-black hover:text-white transition"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>

      {/* Room Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
        <p className="text-gray-600 mt-1">{room.description}</p>

        <div className="flex items-center gap-1 mt-2">
          {renderRatingStars(room.rating)}
        </div>

        <div className="mt-4 text-green-600 font-sans font-semibold">
          ₹{room.pricePerNight}<span className="text-gray-800 font-ralewayM">/ night</span> 
        </div>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Rooms2;
