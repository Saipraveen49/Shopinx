import React, { useEffect, useState } from "react";

const offers = [
  { name: "Smartphones", discount: "30% Off", image: "https://source.unsplash.com/400x400/?smartphone" },
  { name: "Watches", discount: "40% Off", image: "https://source.unsplash.com/400x400/?watch" },
  { name: "Shoes", discount: "50% Off", image: "https://source.unsplash.com/400x400/?shoes" },
];

const LimitedTimeOffers = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        ⚡ Limited Time Offers ⚡
      </h2>
      <p className="text-center text-red-500 text-lg font-semibold mb-8">⏳ Time Left: {formatTime(timeLeft)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div key={index} className="relative group transform transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-red-500 blur-lg opacity-30 rounded-xl"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-lg border border-gray-300">
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-70">
                <h3 className="text-2xl font-semibold text-white">{offer.name}</h3>
                <p className="text-lg font-bold text-yellow-300 mt-2">{offer.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitedTimeOffers;
