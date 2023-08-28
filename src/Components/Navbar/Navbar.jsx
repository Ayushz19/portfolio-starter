import React from "react";
import './Navbar.css'
import Toogle from "../Toogle/Toogle";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Ayush </div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li>
              Home
            </li>
            <li>
              Services
            </li>
            <li>
              Experience
            </li>
            <li>
              About me
            </li>
            <button className="button n-button">Contact Us</button>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
