import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect/dist/core";
const Intro = () => {
  // var app = document.getElementById("ap");

  // var typewriter = new Typewriter(app, {
  //   loop: true,
  //   delay: 75,
  // });

  // typewriter
    
  // .pauseFor(2500)
  // .typeString('Ayush Verma')
  // .pauseFor(300)
  // .deleteChars(10)
  // .typeString('')
  // .typeString('')
  // .pauseFor(1000)
  // .start();

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Hi I Am
          </span>
          <span id="ap">Ayush Verma</span>
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

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          animate={{ x: -60 }}
          transition={{ repeat: 100000, repeatType: "reverse", duration: 1 }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="WEB" txt2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "12rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
