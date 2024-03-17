import React, { useState } from "react";
import logo from "../../assets/company logo.webp";
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
// import { FaBars,FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
      </div>

      <div className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="/mobile-development" className="nav-link">Mobile Development</a>
        </li>
        <li className="nav-item nav-item-with-submenu">
          {/* Web Development Menu with Submenus */}
          <a href="/web-devlopmement" className="nav-link">Web Development</a>
          <ul className="submenu">
            <li><a href="/frontend">Frontend Development</a></li>
            <li><a href="/backend">Backend Development</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/game-devlopmement" className="nav-link">Game Development</a>
        </li>
        <li className="nav-item">
          <a href="/blockchain" className="nav-link">Blockchain</a>
        </li>
        <li className="nav-item">
          <a href="/design" className="nav-link">Design</a>
        </li>
        <li className="nav-item">
          <a href="/service" className="nav-link">Service</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
