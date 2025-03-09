import React from 'react'
import { assets } from "../assets/assets";
import { Link } from 'react-router-dom';
const AccessAccount = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
          {/* Card Container */}
          <div className="bg-white  p-8 md:p-15 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 w-full max-w-4xl border border-gray-300">
            
            {/* Vendor Section */}
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h2 className="text-2xl font-bold text-gray-900">Business</h2>
              <p className="text-gray-700 font-medium text-lg mt-2">For Vendors</p>
              <img className="w-12" src={assets.seller} alt="" />
              <p className="text-gray-500 text-sm mt-2 px-6">
              We are a market-leading eCommerce platform that empowers local vendors to sell their products online          </p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all">
              <Link to="/login">Login</Link>
              </button>
              <p className="text-sm mt-4 text-gray-600">
                Don't have an account?{" "}
                <span className="text-blue-600 cursor-pointer font-semibold hover:underline">
                  Sign up
                </span>
              </p>
            </div>
    
            {/* Divider Line */}
            <div className="hidden md:block w-[2px] bg-gray-300 h-24"></div>
    
            {/* Buyer Section */}
            <div className="flex flex-col gap-3 items-center text-center w-full">
              <h2 className="text-2xl font-bold text-gray-900">Shopper</h2>
              <p className="text-gray-700 font-medium text-lg mt-2">For Buyers</p>
              <img className="w-12" src={assets.buyer} alt="" />
              <p className="text-gray-500 text-sm mt-2 px-6">
              Shop from your favorite local stores with just a few clicks—convenience meets quality at your doorstep!
              </p>
              <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-all">
              <Link to="/login">Login</Link>
              </button>
              <p className="text-sm mt-4 text-gray-600">
                Don't have an account?{" "}
                <span className="text-green-600 cursor-pointer font-semibold hover:underline">
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
  )
}

export default AccessAccount
