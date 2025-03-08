import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="nav-one">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Link to Tail.jsx */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
