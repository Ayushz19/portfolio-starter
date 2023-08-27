import React from "react";
import "./Works.css";
import debsoc from "../../img/DS.jpeg";
import RA from "../../img/RA.jpeg";
import VS from "../../img/VS.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Worked For All these</span>
        <span>Organisation</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing
          <br />
          and typesetting industry.
          <br />
          welkfnwefffffffffffffwlke
          <br />
          qwdnofnowfnonfo3nfo3nff3o
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {{right side}} */}
      <div className="w-right">
      <div className="w-mainCircle">
        <div className="w-secCircle">
          <img className="ds" src={debsoc} alt="" />
        </div>
        <div className="w-secCircle">
          <img className="ra"src={RA} alt="" />
        </div>
        <div className="w-secCircle">
          <img className="vistaar"src={VS} alt="" />
        </div>

        {/* bg circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      </div>    
    </div>
  );
};

export default Works;
