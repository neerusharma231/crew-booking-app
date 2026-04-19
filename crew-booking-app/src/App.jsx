import React from 'react'
import AppRoutes from './routes/AppRoutes'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
    <AppRoutes />
     <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App