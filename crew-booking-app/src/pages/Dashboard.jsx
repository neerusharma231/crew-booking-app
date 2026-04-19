import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);
  return (
    <>  
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Bookings
      </h1>
      {bookings.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No bookings yet!!</p>
      )}
      <div className="max-w-4xl mx-auto grid gap-4">
        {bookings.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="text-lg font-semibold text-white">{item.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-semibold text-white">{item.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Date</p>
                <p className="text-lg font-semibold text-white">{item.date}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Description</p>
                <p className="text-lg font-semibold text-white">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
