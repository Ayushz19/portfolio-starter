import React from "react";
import "./Experience.css";

import { themeContext } from "../../Context";
import { useContext } from "react";
import Roll from "react-reveal/Roll";
import Fade from 'react-reveal/Fade';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <Roll left>
          <div className="circle">3+</div>

          <span>Years</span>
          <span>Experience</span>
        </Roll>
      </div>

      <div className="achievement">
        <Fade top>
        <div className="circle">10+</div>
        <span>completed</span>
        <span>projects</span>
        </Fade>
      </div>
      <div className="achievement">
        <Roll right>
        <div className="circle">2+</div>
        <span>companies</span>
        <span>work</span>
        </Roll>
      </div>
      
    </div>
  );
};

export default Experience;
