import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-white shadow-sm'>
      <div className='flex flex-col gap-4 pt-8 pl-[15%] pr-2 text-[15px]'>
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`
          } 
          to="/addproduct"
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`
          } 
          to="/list"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`
          } 
          to="/orders"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`
          } 
          to="/analytics"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Analytics</p>
        </NavLink>
        
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`
          } 
          to="/settings"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Settings</p>
        </NavLink>
      </div>
      
      <div className="mt-auto pt-6 pl-[15%] pr-2 pb-8">
        <NavLink 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-3 rounded-l-lg transition-all duration-200 
            ${isActive 
              ? 'bg-red-100 border-r-4 border-red-600 text-red-600 font-medium' 
              : 'hover:bg-gray-100 text-gray-700'}`
          } 
          to="/logout"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Logout</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;