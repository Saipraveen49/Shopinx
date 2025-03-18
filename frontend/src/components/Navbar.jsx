import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import LocationFinder from './LocationFinder.jsx';
import { ShopContext } from '../Context/ShopContext.jsx';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { getCartCount } =useContext(ShopContext);
    return (
        <>
            {/* Main Navbar */}
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

                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex gap-6 text-white font-semibold'>
                    <NavLink to='/' className='hover:text-yellow-300'>Home</NavLink>
                    <NavLink to='/' className='hover:text-yellow-300 flex items-center gap-1'>
                        Products <img className='w-3 h-3' src={assets.down_arrow} alt="Down Arrow" />
                    </NavLink>
                    <NavLink to='/near-stores' className='hover:text-yellow-300'>Stores</NavLink>
                </ul>

                {/* Right-side icons */}
                <div className='hidden md:flex items-center gap-5'>
                    <p onClick={() => setShowModal(true)} className='flex items-center gap-1 px-3 py-1 rounded-md border border-white text-white font-semibold cursor-pointer hover:text-yellow-300'>
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
                    <Link to='/access-account'>
                        <img className='w-6 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <img onClick={() => setVisible(true)} className='w-6 cursor-pointer md:hidden' src={assets.drop_down_menu} alt="Dropdown Menu" />
            </div>

            {/* Fix content overlap by adding padding-top equal to navbar height */}
            <div className="pt-[60px]"></div> {/* Adjust this value if needed */}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-screen bg-[#2a3d55] text-white shadow-lg z-50 transition-transform duration-300 ${visible ? "translate-x-0" : "translate-x-full"}`}>
                <div className='p-4 pt-16 flex flex-col gap-4 overflow-y-auto h-full'>
                    {/* Close Button */}
                    <div onClick={() => setVisible(false)} className='flex items-center gap-2 cursor-pointer'>
                        <img className='w-4 rotate-180' src={assets.dropdown_icon} alt="Back Icon" />
                        <p className='text-lg'>Back</p>
                    </div>

                    {/* Login Button */}
                    <button className='bg-yellow-500 text-black font-semibold py-2 rounded-md w-full'>Login</button>

                    <hr className='border-gray-500' />
                    <p className='hover:text-yellow-300 cursor-pointer' onClick={() => setShowModal(true)}>Location</p>
                    <hr className='border-gray-500' />
                    <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/">Home</NavLink>
                    <hr className='border-gray-500' />
                    <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/">Products</NavLink>
                    <hr className='border-gray-500' />
                    <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/near-stores">Stores</NavLink>
                    <hr className='border-gray-500' />
                    <Link onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/">Logout</Link>
                    <hr className='border-gray-500' />
                </div>
            </div>

            {/* Location Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Select Your Location</h2>

                        {/* Location Finder Component */}
                        <LocationFinder setShowModal={setShowModal} />

                        {/* Close Button */}
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
