import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import BrowseCrew from "../pages/BrowseCrew.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/browse-crew" element={<BrowseCrew />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
