import React from "react";
import './DesignChoose.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Plan from '../../../Images/Icon/Idea.svg';
import ChoseICon from '../../../Images/Icon/meeting.svg';
import Solutions from '../../../Images/Icon/Solutions.svg';
import QualityChose from '../../../Images/Icon/quality-choose.svg';
import Assurity from '../../../Images/Icon/Assurity-chose.svg';
import Experties from '../../../Images/Icon/Expertise.svg';
import Develop from '../../../Images/Icon/Develop.svg';

export default function DesignChoose(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
        <div className="Choose-head">
      <h2 className="Choose-text">
      <em className="Choose_icon">
            <img src={ChoseICon} alt="Requirement" width="30"  />
          </em> 
          Why Choose Airai</h2>
      <h2 className='color-text'>Because we match your project expectations with our unwavering commitment.</h2>
      <p className='Choose-p'>We have a team of talented developers with years of experience in the industry.</p>
    <div className='Choose-butn'>  <button type='button' className='Choose_btn'>Schedule Call</button>
    </div>   </div>
        <div className="carousal">
        <Slider {...settings}>
            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Develop} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Creating Gaming Legacies</h5>
                </div>
                <p className="DesignChoose-para">We design experiences that have a lasting impact in
addition to games. With unmatched creativity and skill, our team is committed to honing
your game development concepts and seeing them through to completion.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Experties} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Top-Notch Design Services</h5>
                </div>
                <p className="DesignChoose-para">Our in-house designers are passionate about
world-building and narrative, and they work diligently to develop each and every detail of
your game to captivate players and keep them engaged for hours on end.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={QualityChose} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Proven Track Record</h5>
                </div>
                <p className="DesignChoose-para">With a track record of delivering amazing game development
solutions, we have established ourselves as industry leaders. Our portfolio clearly
demonstrates our dedication to excellence and innovation.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Solutions} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Let's Strategize</h5>
                </div>
                <p className="DesignChoose-para">Ready to embark on your gaming journey? Let's collaborate to turn
your visions into reality. Whether you're a seasoned developer or a newcomer to the
gaming industry, we have the expertise and passion to help you succeed.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Plan} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Innovative Solutions</h5>
                </div>
                <p className="DesignChoose-para">Transform ideas into robust web solutions <br/> for brand growth.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Assurity} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Experience the Difference</h5>
                </div>
                <p className="DesignChoose-para">Transform ideas into robust web solutions <br/> for brand growth.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Plan} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Innovative Solutions</h5>
                </div>
                <p className="DesignChoose-para">Explore our creative game design and development
portfolio to see the magic we can create together. From captivating worlds to memorable
characters, we bring your gaming fantasies to life with unrivaled skill and passion.</p>
            </div>
        </Slider>
      </div>
        </>
    )
}