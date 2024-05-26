import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white py-4 px-8">
      <div className="text-xl font-bold">SEVA CONNECT</div>
      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-900" : "text-white"
          }
        >Home</NavLink>
        
        <NavLink
          to="/bookOnline"
          className={({ isActive }) =>
            isActive ? "text-purple-900" : "text-white"
          }
        >
          Book Online
        </NavLink>
        <div>
          <input
            className="bg-gray-800 text-white px-4 py-2 rounded"
            name="text"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
