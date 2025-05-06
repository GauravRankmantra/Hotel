import React from "react";
import HomeHero from "../components/HomeHero";
import HomeHero2 from "../components/HomeHero2";
import EventShowcase from "../components/EventShowcase";
import Rooms from "../components/Rooms";
import Rooms2 from "../components/Rooms2";
import EventBookingShowcase from "../components/EventBookingShowcase";
import ContactSection from "../components/ContactSection";
import GridMotion from "../components/GridMotion";
import slider1 from "../assets/slider/1.jpg";
import slider2 from "../assets/slider/2.jpg";
import slider3 from "../assets/slider/3.jpg";
import slider4 from "../assets/slider/4.jpg";
import slider5 from "../assets/slider/5.jpg";
import slider6 from "../assets/slider/6.jpg";
import slider7 from "../assets/slider/7.jpg";
import slider8 from "../assets/slider/8.jpg";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactMap from "../components/ContactMap";

const Home = () => {
  const baseImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
  ];

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const generateItemsWithoutAdjacentDuplicates = () => {
    const result = [];
    while (result.length < 28) {
      const shuffled = shuffleArray(baseImages);
      for (const img of shuffled) {
        if (result.length >= 28) break;
        if (result.length === 0 || result[result.length - 1] !== img) {
          result.push(img);
        }
      }
    }

    // If by chance the last two items are the same, adjust the last one
    for (let i = 1; i < result.length; i++) {
      if (result[i] === result[i - 1]) {
        const swapIndex = result.findIndex(
          (img, idx) => img !== result[i] && img !== result[i - 1] && idx !== i
        );
        if (swapIndex !== -1) {
          [result[i], result[swapIndex]] = [result[swapIndex], result[i]];
        }
      }
    }

    return result;
  };

  const items = generateItemsWithoutAdjacentDuplicates();

  return (
    <div className="bg-white">
      <div>
        <HomeHero />
      </div>
      <div className="z-50">
        <EventShowcase />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      {/* <div>
        <HomeHero2 />
      </div> */}
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
      <div>
        <EventBookingShowcase />
      </div>

      <hr className="text-gray-300"></hr>
      <div className="md:mt-20 mt-10 flex justify-center flex-col items-center">
        <h1 className="text-4xl font-ralewayB my-5">Our Gallery</h1>
        <GridMotion items={items} />
      </div>

      <div>
        <ContactMap />
      </div>
    </div>
  );
};

export default Home;
