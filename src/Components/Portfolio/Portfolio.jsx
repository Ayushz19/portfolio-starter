import React from 'react'
import './Portfolio.css'
import debsoc from '../../img/debsoc.png'
import vistaar from '../../img/vistaar.png'
import fic from '../../img/fic.png'
import kitchen from '../../img/kitchen.png'

import Slider from 'infinite-react-carousel';

const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* heading */}
        <span>Recent projects</span>
        <span>Portfolio</span>

     
        <Slider className="portfolio-slider"
        autoplay={true}
        autoplayScroll={1}
        autoplaySpeed={1000}>

            <img src={vistaar} alt="" />
              
       
            <img src={fic} alt="" />
              
           
            <img src={kitchen} alt="" />
            
           
            <img src={debsoc} alt="" />
               
     
        </Slider>
    </div>
  )
}

export default Portfolio