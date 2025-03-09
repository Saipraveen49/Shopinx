import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-[#1f2937] text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img className="w-32" src={assets.logo} alt="Logo" />
          <div className="flex gap-6">
            <img
              className="w-8 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              src={assets.instagram_icon}
              alt="Instagram"
            />
            <img
              className="w-8 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              src={assets.twitter_icon}
              alt="Twitter"
            />
            <img
              className="w-8 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              src={assets.facebook_icon}
              alt="Facebook"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-4 text-sm">
          <p className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Sell on ShopinX</p>
          <p className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Complaints</p>
          <p className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Chat with Us</p>
        </div>

        {/* Extra Section (Can Add More Info) */}
        <div className="flex flex-col items-center md:items-start gap-4 text-sm">
          <p className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Privacy Policy</p>
          <p className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Terms of Service</p>
          <p className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Contact Us</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} ShopinX. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
