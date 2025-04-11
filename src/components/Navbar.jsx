import React from "react";
import "./Navbar.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo copy.png"; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <HiMenuAlt4 className="icon" />
        <span className="menu-text">MENU</span>
      </div>

      <div className="navbar-center">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
      <div className="icon">📊</div>
      <div className="icon">🌐</div>
      </div>
    </header>
  );
};

export default Navbar;
