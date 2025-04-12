import React from "react";
import { assets } from "../assets/assets";

const categories = [
  { name: "Electronics", image: assets.electronics },
  { name: "Fashion", image: assets.fashion },
  { name: "Home Decor", image: assets.decor },
  { name: "Beauty", image: assets.beauty },
];

const CategoryIcons = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-6">
      🛍️ Shop by Category 🛍️
      </h2>

      <div className="flex justify-center gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group w-24 h-24 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-all">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all">
              <p className="text-sm font-bold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
