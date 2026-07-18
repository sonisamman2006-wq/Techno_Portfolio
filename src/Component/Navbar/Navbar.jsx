import React, { useState } from "react";
import "./Navbar.css";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);    
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="navbar">

      <div className="logo">
        <span className="white">Eli</span>
        <span className="orange">ott</span>
      </div>

      <nav className={menu ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={() => setMenu(false)}>Home</a>
        <a href="#services" onClick={() => setMenu(false)}>Services</a>
        <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
        <a href="#about" onClick={() => setMenu(false)}>About</a>
        <a href="#reviews" onClick={() => setMenu(false)}>Reviews</a>
        <a href="#blog" onClick={() => setMenu(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
      </nav>

      <div className="right-section">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <a href="#contact" className="hire-btn">
          Hire Me →
        </a>

        <div className="menu-btn" onClick={() => setMenu(!menu)}>
          {menu ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </header>
  );
}

export default Navbar;
