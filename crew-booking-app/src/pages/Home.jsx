import React from "react";
import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex items-center justify-center bg-black text-white ">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Find & Book Crew
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            Easily discover and book professional crew members for your projects. Fast, simple and reliable.
          </p>
          <button onClick={()=>navigate("/browse-crew")} className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
            Browse Crew
          </button>

        </div>

      </div>
    </>
  );
};

export default Home;