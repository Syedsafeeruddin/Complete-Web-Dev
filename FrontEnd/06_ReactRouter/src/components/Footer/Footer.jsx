import React from "react";
import { NavLink } from "react-router";

function Footer() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "hover:text-blue-600";
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} React-Router. All rights reserved.
        </p>
        <div className="flex justify-center gap-5"> 
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="charges" className={linkClass}>
            Charges
          </NavLink>
          <NavLink to="contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
