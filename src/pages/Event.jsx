import React from 'react';
import bg from "../assets/slider/2.jpg"
import wedding from "../assets/events/wedding.png";
import birthday from "../assets/slider/1.jpg";
import anniversaries from "../assets/slider/8.jpg";
import corporateEvents from "../assets/slider/3.jpg";
import ceremonies from "../assets/slider/4.jpg";
import familyGatherings from "../assets/slider/5.jpg"
import img1 from "../assets/slider/6.jpg"
import img2 from "../assets/slider/7.jpg"
const Event = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black/20  flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Celebrate Your Special Moments With Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            From weddings to birthdays, anniversaries to corporate gatherings — we craft unforgettable experiences in the heart of nature.
          </p>
          <a href="/contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition">
              Book Your Event
            </button>
          </a>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">We Host All Kinds of Events</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Weddings", img: wedding, desc: "Tie the knot in a breathtaking setting surrounded by your loved ones." },
              { title: "Birthday Parties", img: birthday, desc: "Celebrate another year of life with joy, laughter, and elegance." },
              { title: "Anniversaries", img: anniversaries, desc: "Reignite your love story with a romantic and thoughtful celebration." },
              { title: "Corporate Events", img: corporateEvents, desc: "Host productive and stylish offsite events in a serene atmosphere." },
              { title: "Family Gatherings", img: familyGatherings, desc: "Reunite with family in a comfortable and scenic space built for joy." },
              { title: "Custom Events", img: ceremonies, desc: "Got something special in mind? We’ll help you bring it to life." }
            ].map(({ title, img, desc }, idx) => (
              <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={img} alt={title} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f7f5dd] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Host Your Event With Us?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            We offer a blend of nature, luxury, and meticulous planning that ensures your event is not just another occasion — it's a memory etched forever.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Scenic indoor & outdoor venues",
              "Complete event planning & decor",
              "Delicious, customizable catering",
              "Comfortable guest accommodations",
              "Bonfire, music & entertainment options",
              "Professional photography & videography"
            ].map((point, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h4 className="text-xl font-semibold text-yellow-600 mb-2">✓ {point}</h4>
                <p className="text-gray-600">We take care of everything so you can focus on celebrating.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Event Moments Captured</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[img1, img2, corporateEvents, ceremonies, anniversaries, birthday].map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                <img src={src} alt={`Event ${idx + 1}`} className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-50 py-20 text-center text-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Plan the Perfect Event?</h2>
          <p className="text-lg mb-6">Let us make your next celebration truly unforgettable. Reach out now and let's make it happen.</p>
          <a href="/contact">
            <button className="bg-[#f79b1e] text-white cursor-pointer px-8 py-4 rounded-full font-semibold hover:bg-[#e72025] transition">
              Book Your Event
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Event;
