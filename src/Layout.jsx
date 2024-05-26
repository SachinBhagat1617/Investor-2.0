import React from "react";
import Navbar from "./componenets/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./componenets/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-8">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
