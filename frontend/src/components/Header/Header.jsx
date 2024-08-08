import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div className='py-4 px-10 mb-[1rem] shadow-md w-full bg-white'>
      <div className="content flex items-center justify-between">
        <div className="logo">
            <h1 className={`font-bold text-4xl text-customPurple`}>BSG</h1>
        </div>
        <nav className='flex items-center justify-between space-x-32'>
            <ul className='flex items-center justify-between space-x-14'>
                <li className='active-nav cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About Us</li>
                <li className={`cursor-pointer`}>Contact Us</li>
            </ul>
            <div className='auth'>
                <button className='bg-customPurple px-4 py-2 text-white hover:scale-105 duration-500'>Sign Up</button>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
