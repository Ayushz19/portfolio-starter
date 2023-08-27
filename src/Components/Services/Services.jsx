import React from "react";
import "./Services.css";
import HearEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      {/* {Left side} */}
      <div className="awesome">
        <span>My</span>
        <span>Skills</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing 
          <br/>
          and typesetting industry.
        </span>
        <button className="button s-button">Download Cv</button>
        <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* {right side} */}
      <div className="cards">
        <div className="div">
            <Card 
            emoji={HearEmoji}
            heading={'Design'}
            detail={'Figma,Sketch,Photoshop,Adobe'}/>
        </div>
      </div>
    </div>
  );
};

export default Services;
