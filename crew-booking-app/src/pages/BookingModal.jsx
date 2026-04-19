import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const BookingModal = ({ setOpen, isOpen,crewId  }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    description: "",
    date: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 const handleSubmit = () => {
  let err = {};

  if(!form.name) err.name = true;
  if(!form.phone) err.phone = true;
  if(!form.date) err.date =true;
  if(!form.description) err.description =true;

  if (form.phone && form.phone.length !== 10) {
    toast.error("Phone number must be 10 digits.");
    return;
  }
  setErrors(err);

  if (Object.keys(err).length > 0) {
    toast.error("Fill all the fields");
    return;
  }
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({ ...form, crewId }); 
    localStorage.setItem("bookings", JSON.stringify(bookings));
   toast.success("Booking Confirmed!");
   setTimeout(() => {
    setOpen(false);
     navigate("/dashboard");
   }, 1000);
    
  };
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 px-4">
  <div className="w-full max-w-md bg-gray-900/95 border border-white/10 text-white p-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">  <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Book Crew
      </h2>
        <div className="space-y-3">
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          onChange={handleChange}
        />
{errors.name && (
  <p className="text-red-500 text-sm">This field is required</p>
)}
        <input
          name="phone"
          placeholder="Phone Number"
           maxLength={10}
          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          onChange={handleChange}
        />
{errors.phone && (
  <p className="text-red-500 text-sm">This field is required</p>
)}
        <input
          name="description"
          placeholder="Requirement"
          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          onChange={handleChange}
        />
{errors.description && (
  <p className="text-red-500 text-sm">description is required</p>
)}
        <input
          type="date"
          name="date"
          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          onChange={handleChange}
        />
        {errors.date && (
  <p className="text-red-500 text-sm">Date is required</p>
)}
      </div>
       <div className="flex justify-between gap-4 mt-6">
        <button
          onClick={() => setOpen(false)}
          className="w-full py-2.5 rounded-xl bg-gray-600/70 hover:bg-gray-500 transition font-medium"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold"
        >
          Submit
        </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
