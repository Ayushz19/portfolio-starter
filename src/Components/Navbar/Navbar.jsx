import React from "react";
import "./Navbar.css";
import Toogle from "../Toogle/Toogle";
import { Link } from "react-scroll";
import Ham from "../../img/ham.png";

import cross from '../../img/cross.png'

const Navbar = () => {
  // const [open,setopen]=useState

  return (
    <div className="n-wrapper">
      <img
        src={Ham}
        className="ham"
        onClick={() => {
          document.getElementById("mobnav").classList.toggle("mobnav-vis");
        }}
      ></img>

      <div className="n-left">
        <div className="n-name">Ayush </div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          
          <ul className="nav-ul"style={{ listStyleType: "none" }} id="mobnav"
           onClick={() => {
            document
              .getElementById("mobnav")
              .classList.toggle("mobnav-vis");
          }}>
            <img src={cross} className="cross" alt="" ></img>
            
            <Link
              spy={true}
              to="Navbar"
              activeClass="activeClass"
              smooth={true}
            >
              <li
                onClick={() => {
                  document
                    .getElementById("mobnav")
                    .classList.toggle("mobnav-vis");
                }}
              >
                Home
              </li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li
                onClick={() => {
                  document
                    .getElementById("mobnav")
                    .classList.toggle("mobnav-vis");
                }}
              >
                Services
              </li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li
                onClick={() => {
                  document
                    .getElementById("mobnav")
                    .classList.toggle("mobnav-vis");
                }}
              >
                Experience
              </li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li
                onClick={() => {
                  document
                    .getElementById("mobnav")
                    .classList.toggle("mobnav-vis");
                }}
              >
                PortFolio
              </li>
            </Link>
            <button className="button n-button">Contact Us</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
