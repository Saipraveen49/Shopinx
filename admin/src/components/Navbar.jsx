import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={assets.logo} alt="Vendor Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              <NavLink 
                to="/dashboard" 
                className={({isActive}) => 
                  isActive ? "text-indigo-600 px-3 py-2 rounded-md text-sm font-medium" 
                  : "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Dashboard
              </NavLink>
              
              <NavLink 
                to="/products" 
                className={({isActive}) => 
                  isActive ? "text-indigo-600 px-3 py-2 rounded-md text-sm font-medium" 
                  : "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Products
              </NavLink>
              
              <NavLink 
                to="/listProducts" 
                className={({isActive}) => 
                  isActive ? "text-indigo-600 px-3 py-2 rounded-md text-sm font-medium" 
                  : "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Orders
              </NavLink>
              
              <NavLink 
                to="/analytics" 
                className={({isActive}) => 
                  isActive ? "text-indigo-600 px-3 py-2 rounded-md text-sm font-medium" 
                  : "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Analytics
              </NavLink>
            </div>
            
            {/* Auth/Profile Section */}
            <div className="flex items-center ml-4 space-x-3">
              <NavLink 
                to="/login" 
                className={({isActive}) => 
                  isActive ? "text-indigo-600 px-3 py-2 rounded-md text-sm font-medium" 
                  : "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Login
              </NavLink>
              
              <NavLink 
                to="/signup" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                Sign Up
              </NavLink>
              
              {/* Profile Dropdown */}
              <div className="relative ml-3">
                <button 
                  onClick={toggleProfile}
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-indigo-500"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <span className="text-xs font-bold">VD</span>
                  </div>
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg z-10">
                    <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</NavLink>
                    <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Store Settings</NavLink>
                    <NavLink to="/update-details" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Update Details</NavLink>
                    <NavLink to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/dashboard" 
              className={({isActive}) => 
                isActive ? "text-indigo-600 block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Dashboard
            </NavLink>
            
            <NavLink 
              to="/products" 
              className={({isActive}) => 
                isActive ? "text-indigo-600 block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Products
            </NavLink>
            
            <NavLink 
              to="/orders" 
              className={({isActive}) => 
                isActive ? "text-indigo-600 block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Orders
            </NavLink>
            
            <NavLink 
              to="/analytics" 
              className={({isActive}) => 
                isActive ? "text-indigo-600 block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              Analytics
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                  <span className="text-sm font-bold">VD</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Vendor Name</div>
                <div className="text-sm font-medium text-gray-500">vendor@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <NavLink to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Your Profile</NavLink>
              <NavLink to="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Store Settings</NavLink>
              <NavLink to="/update-details" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Update Details</NavLink>
              <NavLink to="/logout" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Sign out</NavLink>
            </div>
          </div>
          <div className="px-5 py-4 border-t border-gray-200 flex flex-col space-y-3">
            <NavLink to="/login" className="block text-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Login</NavLink>
            <NavLink to="/signup" className="block text-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-white hover:bg-gray-50">Sign Up</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;