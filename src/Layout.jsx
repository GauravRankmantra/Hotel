import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex bg-white font-ralewayM flex-col min-h-screen">
      {/* <ToastContainer /> */}
      <div className="top-0">
        <Navbar />
      </div>

   
      <div className="flex-auto overflow-hidden  ">
        <Outlet />
      </div>

 

      <Footer /> 
    </div>
  );
};

export default Layout;
