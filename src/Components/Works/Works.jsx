import React from "react";
import "./Works.css";
import debsoc from "../../img/DS.jpeg";
import RA from "../../img/RA.jpeg";
import VS from "../../img/VS.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span
          style={{
            color: darkMode ? "white" : "",
          }}
        >
          Worked For All these
        </span>
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

      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          animate={{ rotate: 360 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          transition={{ repeat: 50, repeatType: "reverse", duration: 10 }}
          
          
        >
          <div className="w-secCircle">
            <img className="ds" src={debsoc} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="ra" src={RA} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="vistaar" src={VS} alt="" />
          </div>

          {/* bg circle */}
          
        </motion.div>
        <div className="w-backCircle blueCircle" ></div>
          <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
