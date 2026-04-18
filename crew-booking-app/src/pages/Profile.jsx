import React from "react";
import { useParams } from "react-router-dom";
import crewCard from "../data/data.json";
import Navbar from "../components/Navbar";
const Profile = () => {
  const { id } = useParams();
  const user = crewCard.find((item) => item.id == id);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-950 text-white p-10 flex justify-center">
         <div className="max-w-4xl h-full mx-auto bg-gray-900/70 p-8 rounded-lg shadow-lg">
          
        <h1 className="text-white text-3xl font-bold mb-4">{user.name}</h1>
         
        <p className="text-white">Role: {user.role}</p>
        <p className="text-white">Rating: {user.rating}</p>
        <p className="text-white">Location: {user.location}</p>

        <button className="bg-blue-500 px-4 py-2 mt-4">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
