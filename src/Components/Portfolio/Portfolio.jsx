import React from "react";
import "./Portfolio.css";
import debsoc from "../../img/debsoc.png";
import vistaar from "../../img/vistaar.png";
import fic from "../../img/fic.png";
import kitchen from "../../img/kitchen.png";

import Slider from "infinite-react-carousel";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span
        style={{
          color: darkMode ? "white" : "",
        }}
      >
        Recent projects
      </span>
      <span>Portfolio</span>

      <Slider
        className="portfolio-slider"
        autoplay={true}
        autoplayScroll={1}
        autoplaySpeed={1500}
      >
        <img src={vistaar} alt="" 
         onClick={() => {
          window.open(
            "https://vistaar.debsocnitdgp.in/",
            "_blank"
          );
        }}/>

        <img src={fic} alt="" 
         onClick={() => {
          window.open(
            "https://fictionary-frontend-smoky.vercel.app/",
            "_blank"
          );
        }}/>

        <img src={kitchen} alt=""
         onClick={() => {
          window.open(
            "https://kitchendotcom.in/",
            "_blank"
          );
        }}/>

        <img src={debsoc} alt="" 
         onClick={() => {
          window.open(
            "https://www.debsocnitdgp.in/",
            "_blank"
          );
        }}/>
      </Slider>
      <h3 className="image-h" style={{fontSize:'2rem' , marginTop:'-4.7rem'}}>Click to know more</h3>
    </div>
  );
};

export default Portfolio;
