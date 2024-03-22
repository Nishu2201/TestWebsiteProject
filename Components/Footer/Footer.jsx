import React from "react";
import "./Footer.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import videoSource from '../../Images/BG-V1 (1).mp4';
import Camlogo from "../../Images/logo1.png";

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-video">
        <video autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Our Links</h3>
          <ul>
            <li className="Footerli">
              <a href="/">Home</a>
            </li>
            <li className="Footerli">
              <a href="/about">About us</a>
            </li>
            <li className="Footerli">
              <a href="/service">Service</a>
            </li>
            <li className="Footerli">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Airai Services</h3>
          <ul>
            <li className="Footerli">
              <a href="/mobile devlopmement">Mobile Development</a>
            </li>
            <li className="Footerli">
              <a href="/web devlopmement">Web development</a>
            </li>
            <li className="Footerli">
              <a href="/game devlopmement">Game Development</a>
            </li>
            <li className="Footerli">
              <a href="/blockchain devlopmement">Blockchain</a>
            </li>
            <li className="Footerli">
              <a href="/design">UI/UX</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li className="Footerli">
              {" "}
              <FaMapMarkerAlt /> AIRAI TECHNOLOGIES PVT. LTD.
              <br /> F-177, KAILASH TOWER, PHASE 8B, MOHALI, PB
            </li>
            <li className="Footerli">
              <IoIosMail /> contact@airai.games
            </li>
            <li className="Footerli">
              <FaPhone /> +1 234 567 890
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>All rights reserved</p>
          <img src={Camlogo} alt="Company Logo" className="camlogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
