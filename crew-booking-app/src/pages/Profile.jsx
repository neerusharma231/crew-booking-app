import React, { useState } from "react";
import { useParams } from "react-router-dom";
import crewCard from "../data/data.json";
import Navbar from "../components/Navbar";
import BookingModal from "./BookingModal";
const Profile = () => {
  const { id } = useParams();
  const[open,setOpen]= useState(false);
  const user = crewCard.find((item) => item.id == id);
  return (
    <>
      <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex items-center justify-center p-6">
      
      <div className="w-full max-w-4xl backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/20">
           
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {user.name}
          </h1>
            <span className="px-4 py-1 text-sm rounded-full bg-blue-500/20 border border-blue-400 text-blue-300 w-fit">
            {user.rating}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <p className="text-sm text-gray-400">Role</p>
            <p className="text-lg font-semibold text-white">{user.role}</p>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-lg font-semibold text-white">{user.location}</p>
          </div>

        </div>
         <div className="mt-8 text-center">
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300"
          >
             Book Now
          </button>
        </div> 
        {open && <BookingModal setOpen={setOpen} isOpen={open} crewId={id} />}
        </div>
      </div>
    </>
  );
};

export default Profile;
