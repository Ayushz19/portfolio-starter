import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import vistaar from '../../img/vistaar.png'
import fic from '../../img/fic.png'
import kitchen from '../../img/kitchen.png'
import debsoc from '../../img/debsoc.png'
import 'swiper/css';
import Slider from 'infinite-react-carousel';

const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* heading */}
        <span>Recent projects</span>
        <span>Portfolio</span>

        {/* slider */}
        {/* <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'> */}
        <Slider className="portfolio-slider"
        autoplay={true}
        autoplayScroll={1}
        autoplaySpeed={2000}>

         {/* <SwiperSlide> */}
            <img src={vistaar} alt="" />
            {/* </SwiperSlide>   
            <SwiperSlide> */}
            <img src={fic} alt="" />
            {/* </SwiperSlide>   
            <SwiperSlide> */}
            <img src={kitchen} alt="" />
            {/* </SwiperSlide> 
            <SwiperSlide> */}
            <img src={debsoc} alt="" />
            {/* </SwiperSlide>    
        </Swiper> */}
        </Slider>
    </div>
  )
}

export default Portfolio