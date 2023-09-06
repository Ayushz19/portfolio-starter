import React from "react";
import "./Works.css";
import debsoc from "../../img/DS.jpeg";
import RA from "../../img/RA.jpeg";
import VS from "../../img/VS.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Roll from "react-reveal/Roll";
import { Link } from "react-scroll";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="work">
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
          I have had the privilege of working in several esteemed organizations
          <br />
          throughout , each contributing significantly to my
          <br />
          professional growth and skill set
          <br />and eager to leverage this rich background to bring 
          innovation to my future endeavors.
        </span>
<Link spy={true} to="contact" smooth={true} >
      <button className="button s-button"  >Hire Me</button>
                    </Link>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="w-right">
        <Roll left>
          <motion.div
            className="w-mainCircle"
            animate={{ rotate: 360 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
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
        </Roll>
        <Roll right>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </Roll>
      </div>
    </div>
  );
};

export default Works;
