import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className='flex items-center justify-between bg-[#23598e] p-3 shadow-md w-full'>
                {/* Logo */}
                <Link to='/'>
                    <img className='w-[100px] sm:w-[120px] rounded-md' src={assets.logo} alt="Logo" />
                </Link>

                {/* Search Bar */}
                <div className='hidden sm:flex items-center border border-yellow-400 rounded-md px-2 bg-white w-1/3'>
                    <input className='bg-transparent outline-none px-2 py-1 w-full' type="text" placeholder='Search...' />
                    <img className='w-5 cursor-pointer' src={assets.search_icon} alt="Search Icon" />
                </div>

                {/* Navigation Links */}
                <ul className='hidden md:flex gap-6 text-white font-semibold'>
                    <NavLink to='/' className='hover:text-yellow-300'>Home</NavLink>
                    <NavLink to='/' className='hover:text-yellow-300 flex items-center gap-1'>
                        Products <img className='w-3 h-3' src={assets.down_arrow} alt="Down Arrow" />
                    </NavLink>
                    <NavLink to='/near-stores' className='hover:text-yellow-300'>Stores</NavLink>
                </ul>

                {/* Right-side icons */}
                <div className='hidden md:flex items-center gap-5'>
                    <p className='flex items-center gap-1 px-3 py-1 rounded-md border border-white text-white font-semibold cursor-pointer hover:text-yellow-300'>
                        Location <img className='w-5' src={assets.location_icon} alt="Location Icon" />
                    </p>
                    <Link to='/cart'>
                        <img className='w-6 cursor-pointer' src={assets.cart_icon} alt="Cart Icon" />
                    </Link>
                    <Link to='/access-account'>
                        <img className='w-6 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
                    </Link>

                </div>

                {/* Mobile Menu Toggle */}
                <img onClick={() => setVisible(!visible)} className='w-6 cursor-pointer md:hidden' src={assets.drop_down_menu} alt="Dropdown Menu" />
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-[#2a3d55] text-white transition-transform duration-300 ease-in-out ${visible ? 'w-3/4 max-w-[250px]' : 'w-0'} md:hidden overflow-hidden`}>
                <div className='p-4 flex flex-col gap-4'>
                    {/* Close Button */}
                    <div onClick={() => setVisible(false)} className='flex items-center gap-2 cursor-pointer'>
                        <img className='w-4 rotate-180' src={assets.dropdown_icon} alt="Back Icon" />
                        <p className='text-lg'>Back</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button className='bg-yellow-500 text-black font-semibold py-2 rounded-md w-full'>Login</button>
                        <hr className='border-gray-500' />
                        <p className='hover:text-yellow-300 cursor-pointer'>Location</p>
                        <hr className='border-gray-500' />
                        <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/">Home</NavLink>
                        <hr className='border-gray-500' />
                        <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300'>Products</NavLink>
                        <hr className='border-gray-500' />
                        <NavLink onClick={() => setVisible(false)} className='hover:text-yellow-300'>Stores</NavLink>
                        <hr className='border-gray-500' />
                        <Link onClick={() => setVisible(false)} className='hover:text-yellow-300' to="/">Logout</Link>
                        <hr className='border-gray-500' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
