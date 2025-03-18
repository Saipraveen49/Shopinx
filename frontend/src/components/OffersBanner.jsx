import React from "react";

const OffersBanner = () => {
  return (
    <div className="bg-black text-white py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 opacity-10"></div>
      <div className="animate-marquee whitespace-nowrap text-lg font-bold uppercase tracking-wide">
        🚀 Mega Sale! Flat 50% Off on Electronics! 🛒 Free Shipping on Orders Above $99! 🎉 
        New Arrivals Dropping Soon! 🔥 Limited Time Offers! ⏳
      </div>
    </div>
  );
};

export default OffersBanner;