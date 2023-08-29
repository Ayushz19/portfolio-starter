import React from "react";
import "./Navbar.css";
import Toogle from "../Toogle/Toogle";
import { Link } from "react-scroll";
import Services from "../Services/Services";
import Experience from '../Experiences/Experience'
import Portfolio from '../Portfolio/Portfolio'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Ayush </div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              activeClass="activeClass"
              smooth={true}
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>PortFolio</li>
            </Link>
            <button className="button n-button">Contact Us</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
