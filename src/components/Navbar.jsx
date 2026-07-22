import React from 'react';
import Logo from '../assets/Razorpay_logo-removebg-preview.png'
const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-20 overflow-x-hidden fixed top-0 right-0 bg-white z-50 shadow transition-shadow duration-300">
        <div className="max-w-7xl h-full px-6 flex justify-between items-center mx-auto">

          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/">
              <img 
                src={Logo} 
                alt="Razorpay Logo"
                className="h-20 w-auto bg-none" 
              />
            </a>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-7">
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Payment</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Banking</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Payroll</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Engages</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Partners</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Resources</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
            <li className="group text-black hover:text-blue-700 font-bold relative cursor-pointer py-2">
              <a href="/">Pricing</a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
            </li>
          </ul>

          {/* Action Buttons & Flag */}
          <div className="hidden md:flex items-center space-x-5">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" 
              alt="Indian Flag"
              className="w-6 h-4 object-cover" 
            />
            <a 
              href="/src/main.jsx" 
              className="text-blue-700 border border-blue-700 px-4 py-1.5 rounded font-bold cursor-pointer hover:bg-blue-50 transition-colors"
            >
              Log in
            </a>
            <button 
              className="text-white bg-blue-800 px-4 py-2.5 rounded text-xs font-bold hover:bg-blue-700 cursor-pointer transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="flex md:hidden flex-col justify-between w-6 h-5 cursor-pointer">
            <div className="bg-blue-800 h-1 w-full rounded"></div>
            <div className="bg-blue-800 h-1 w-full rounded"></div>
            <div className="bg-blue-800 h-1 w-full rounded"></div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;