import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import LocationFinder from './LocationFinder.jsx';
import { ShopContext } from '../Context/ShopContext.jsx';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { getCartCount, token,setToken ,uname,setCart} = useContext(ShopContext);
  const logout =()=>{
    setToken("");
    localStorage.removeItem("token");
    setCart([]);
  }
  return (
    <>
      {/* Navbar */}
      <div className='flex items-center justify-between bg-[#23598e] p-3 shadow-md w-full fixed top-0 left-0 z-50'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-[100px] sm:w-[120px] rounded-md' src={assets.logo} alt="Logo" />
        </Link>

        {/* Search Bar */}
        <div className='hidden sm:flex items-center border border-yellow-400 rounded-md px-2 bg-white w-1/3'>
          <input className='bg-transparent outline-none px-2 py-1 w-full' type="text" placeholder='Search...' />
          <img className='w-5 cursor-pointer' src={assets.search_icon} alt="Search Icon" />
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-6 text-white font-semibold'>
          <NavLink to='/' className='hover:text-yellow-300'>Home</NavLink>
          <NavLink to='/products' className='hover:text-yellow-300 flex items-center gap-1'>
            Products <img className='w-3 h-3' src={assets.down_arrow} alt="Down Arrow" />
          </NavLink>
          <NavLink to='/near-stores' className='hover:text-yellow-300'>Stores</NavLink>
        </ul>

        {/* Desktop Icons */}
        <div className='hidden md:flex items-center gap-5'>
          <p
            onClick={() => setShowModal(true)}
            className='flex items-center gap-1 px-3 py-1 rounded-md border border-white text-white font-semibold cursor-pointer hover:text-yellow-300'
          >
            Location <img className='w-5' src={assets.location_icon} alt="Location Icon" />
          </p>

          <Link to='/cart'>
            <div className="relative">
              <img className="w-6 cursor-pointer" src={assets.cart_icon} alt="Cart Icon" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-primary text-secondary text-xs font-bold rounded-full flex items-center justify-center">
                {getCartCount()}
              </div>
            </div>
          </Link>

          {token ? (
            <Link to='/'>
              <img
                className='w-8 h-8 rounded-full object-cover cursor-pointer'
                src='https://i.pravatar.cc/150?img=3'
                onClick={logout}
                alt="User"
              />
            </Link>
          ) : (
            <Link to='/access-account'>
              <img  className='w-6 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <img onClick={() => setVisible(true)} className='w-6 cursor-pointer md:hidden' src={assets.drop_down_menu} alt="Menu" />
      </div>

      {/* Spacing to prevent content hidden under fixed navbar */}
      <div className="pt-[60px]"></div>

      {/* Sidebar - Mobile Menu */}
      <div className={`fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-screen bg-[#2a3d55] text-white shadow-lg z-50 transition-transform duration-300 ${visible ? "translate-x-0" : "translate-x-full"}`}>
        <div className='p-4 pt-16 flex flex-col gap-4 overflow-y-auto h-full'>

          {/* Back Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-2 cursor-pointer'>
            <img className='w-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p className='text-lg'>Back</p>
          </div>

          {/* Profile Icon in Sidebar */}
          {token ? (
            <Link to='/profile' onClick={() => setVisible(false)}>
              <div className="flex items-center gap-2 mt-2">
                <img className='w-8 h-8 rounded-full object-cover' src='https://i.pravatar.cc/150?img=3' alt="User" />
                <span className='text-sm'>Hello {uname}</span>
              </div>
            </Link>
          ) : (
            <Link to='/access-account' onClick={() => setVisible(false)}>
              <div className="flex items-center gap-2 mt-2">
                <img className='w-6' src={assets.profile_icon} alt="Profile Icon" />
                <span className='text-sm'>Login / Register</span>
              </div>
            </Link>
          )}

          <hr className='border-gray-500' />
          <p className='hover:text-yellow-300 cursor-pointer' onClick={() => { setShowModal(true); setVisible(false); }}>
            Location
          </p>
          <hr className='border-gray-500' />
          <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/">Home</NavLink>
          <hr className='border-gray-500' />
          <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/products">Products</NavLink>
          <hr className='border-gray-500' />
          <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/near-stores">Stores</NavLink>
          <hr className='border-gray-500' />
          {token && <div className='flex-column mb-3'><Link onClick={() => setToken("")} className='hover:text-yellow-300' to="/">Logout</Link>
          <hr className='border-gray-500' /> </div>}
        </div>
      </div>

      {/* Location Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full mx-4">
            <h2 className="text-lg font-bold mb-4">Select Your Location</h2>

            <LocationFinder setShowModal={setShowModal} />

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
