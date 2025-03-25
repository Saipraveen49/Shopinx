import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = ({ setToken }) => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-white shadow-sm'>
      <div className='flex flex-col gap-4 pt-8 pl-[15%] pr-2 text-[15px]'>

        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`}
          to="/addproduct"
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="Add Items" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`}
          to="/listProducts"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="List Items" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`}
          to="/orders"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="Orders" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`}
          to="/analytics"
        >
          <img className='w-5 h-5' src={assets.analytics_icon} alt="Analytics" />
          <p className='hidden md:block'>Analytics</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`}
          to="/settings"
        >
          <img className='w-5 h-5' src={assets.settings_icon} alt="Settings" />
          <p className='hidden md:block'>Settings</p>
        </NavLink>

        {/* Logout Button - Fixed */}
        <div 
          className="flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
          hover:bg-gray-100 text-gray-700 cursor-pointer"
          onClick={() => setToken("")}
        >
          <img className='w-5 h-5' src={assets.logout_icon} alt="Logout" />
          <p className='hidden md:block'>Logout</p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
