import React, { useState } from "react";
import { CloseIcon, Hamburger } from "./icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="bg-black/90 text-white border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold md:mr-auto cursor-pointer ">
            Crew Booking
          </h1>
          <div className="md:hidden cursor-pointer">
            <div
              onClick={() => setOpen(!isOpen)}
              className="text-white cursor-pointer"
            >
              {isOpen ? <CloseIcon /> : <Hamburger />}
            </div>
          </div>
          <ul
            className='hidden md:flex items-center gap-10 font-medium text-lg'
          >
            <li>
            <Link to='/'  className="cursor-pointer hover:underline hover:text-gray-400 transition duration-300">
            
              Home
              </Link>
            </li>
            <li>
              <Link to='/browse-crew'
              className="cursor-pointer hover:underline hover:text-gray-400 transition duration-300"
            >
              Browse
              </Link>
            </li>
            <li>
              <Link to='/dashboard'
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:underline hover:text-gray-400 transition duration-300"
            >
              Dashboard
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
           <ul
            className='md:hidden flex flex-col items-center gap-6 py-6 font-medium text-lg border-t border-gray-800'
          >
            <li
              onClick={() => setOpen(false)}>
             <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setOpen(false)}>
               <Link to="/browse-crew">Browse</Link>
            </li>
            <li
              onClick={() => setOpen(false)}>
               <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
