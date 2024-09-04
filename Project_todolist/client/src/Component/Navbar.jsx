import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for the menu button
import Dropdown from './Dropdown';
import Photo from "./Image/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  // State to manage the menu button

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle menu visibility
  };

  return (
    <>
      <nav>
        <div className="font-serif">
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Sahitya:wght@400;700&display=swap');`}
          </style>
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Lancelot&family=Sahitya:wght@400;700&display=swap');`}
          </style>
          
          <div className="text-sky-800 bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 p-2 ">
            <div className="text-6xl font-sahitya">ToDo LIST</div>
            <p className="text-xs -mt-1">PLAN. ACT. ACHIEVE.</p>
          </div>

          <div className="border-2 bg-gray-900">
            {/* Menu Button for Mobile Screens */}
            <div className="flex justify-between items-center p-2 md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}  {/* Toggle icon */}
              </button>
            </div>

            {/* Navbar Links as Centered Grid */}
            <div className={`grid gap-2 px-2 ${isOpen ? 'grid-cols-1' : 'hidden'} md:grid md:grid-cols-6 md:gap-4 md:justify-center md:items-center`}>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-2 py-2 text-sm font-medium text-center"
                    : "text-white hover:text-gray-500 px-2 py-2 text-sm font-medium text-center"
                }
              >
                Home
              </NavLink>

              <NavLink 
                className={({ isActive }) =>
                  isActive
                    ? "text-white px-2 py-2 rounded-md text-sm font-medium text-center"
                    : "text-white hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                }
              >
                <Dropdown />
              </NavLink>

              <NavLink 
                to="/aboutus" 
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                    : "text-white hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                }
              >
                About Us
              </NavLink>

          

              <NavLink 
                to="/contactus" 
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                    : "text-white hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                }
              >
                Contact Us
              </NavLink>

              <NavLink 
                to="/signin_page" 
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                    : "text-white hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium text-center"
                }
              >
                Signin/Signup
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
