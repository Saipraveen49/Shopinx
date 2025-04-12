import React from "react";

const OffersBanner = () => {
  return (
    <div className="bg-black text-white py-3 sm:py-4 overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 opacity-10 pointer-events-none"></div>
      
      {/* Marquee text */}
      <div
        className="whitespace-nowrap text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wide animate-marquee"
        style={{
          animation: "marquee 20s linear infinite",
          display: "inline-block",
        }}
      >
        🚀 Mega Sale! Flat 50% Off on Electronics! 🛒 Free Shipping on Orders Above $99! 🎉 
        New Arrivals Dropping Soon! 🔥 Limited Time Offers! ⏳
      </div>

      {/* Keyframes defined inside style tag */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default OffersBanner;
