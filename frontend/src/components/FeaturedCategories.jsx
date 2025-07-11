import React from "react";
import { assets } from "../assets/assets";

const categories = [
  { name: "Electronics", image: assets.electronics1 },
  { name: "Fashion", image: assets.fashion2},
  { name: "Home Decor", image: assets.decor },
  { name: "Sports", image: assets.sports },
  { name: "Books", image: assets.books },
  { name: "Beauty", image: assets.beauty },
];

const FeaturedCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-6">
      🌟 Featured Categories 🌟
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 blur-lg opacity-50 rounded-xl transition-opacity group-hover:opacity-75"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-300 bg-white bg-opacity-10 backdrop-blur-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60">
                <h3 className="text-2xl font-semibold text-white tracking-wider drop-shadow-lg group-hover:scale-110 transition-transform">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
