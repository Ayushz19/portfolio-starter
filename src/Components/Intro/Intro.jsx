import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
// import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
// import glassesimoji from "../../img/glassesimoji.png";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi I Am</span>
          <span>Ayush Verma</span>
          <span>
            Frontend Developer with experience in web designing and development
            and quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" className="" />
          <img src={LinkedIn} alt="" className="" />
          <img src={Instagram} alt="" className="" />
        </div>
      </div>
      <div className=" i-right">
        <img src={Vector1} alt="" className="" />
        <img src={Vector2} alt="" className="" />
        <img src={Boy} alt="" className="" />
        <div style={{ top: "-4%", left: "60%" }}>
          <FloatingDiv image={Crown} txt1="WEB" txt2="Developer" />
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{background:'#C1F5FF' , top:'12rem' , width:'21rem' , height:'11rem' , left:'-9rem'}}></div>
      </div>
    </div>
  );
};

export default Intro;
