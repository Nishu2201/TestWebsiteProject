import React, { useState } from 'react';
import './Navbar1.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/company logo.webp";
const Navbar1 = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="logo">
            <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" width={75} height={75} />
        </Link>
            </div>
            <div className={`nav-links ${isActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="/mobile-development">Mobile Development</a></li>
                    <li className="dropdown">
                        <a href="/web-development">Web Development</a>
                        <ul className="dropdown-menu">
                            <li><a href="/frontend-development">Frontend Development</a></li>
                            <li><a href="/backend-development">Backend Development</a></li>
                        </ul>
                    </li>
                    <li><a href="/game-development">Game Development</a></li>
                    <li><a href="/blockchain">Blockchain</a></li>
                    <li><a href="/design">Design</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="toggle-button" onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar1;
