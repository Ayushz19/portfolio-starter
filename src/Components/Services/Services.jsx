import React from "react";
import "./Services.css";
import HearEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './AYUSHZ19_RESUME (1).pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="services">
      {/* {Left side} */}
      <div className="awesome">
        <span style={{
        
        color: darkMode ? "white" : "",
      }}>My</span>
        <span>Skills</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing
          <br />
          and typesetting industry.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download Cv</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {right side} */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HearEmoji}
            heading={"Design"}
            detail={"Figma,Sketch,Photoshop,Adobe"}
          />
        </div>
        <div style={{top:'12rem' , left:'-4rem'}}>
        <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Figma,Sketch,Photoshop,Adobe"}
          />
        </div>
        <div style={{top:"19rem" , left:"22rem"}}>
        <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma,Sketch,Photoshop,Adobe"}
          />
        </div>
        <div className="blur s-blur2" style={{background:'var(--purple'}}></div>
      </div>
    </div>
  );
};

export default Services;
