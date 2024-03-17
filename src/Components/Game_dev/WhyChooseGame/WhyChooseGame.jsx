import React from "react";
import '../WhyChooseGame/WhyChooseGame.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Plan from '../../../Images/Icon/Idea.svg';
import ChoseICon from '../../../Images/Icon/meeting.svg';
import Solutions from '../../../Images/Icon/Solutions.svg';
import QualityChose from '../../../Images/Icon/quality-choose.svg';
import Assurity from '../../../Images/Icon/Assurity-chose.svg';
import Compre from '../../../Images/Icon/Compre-Choose.svg';
import Personalized from '../../../Images/Icon/Personalized.svg';
export default function ChooseUs(){
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
      <h2 className='color-text'>We have the expertise to make your gaming ideas a reality<br /> due
to our years of experience.</h2>
      <p className='Choose-p'>We have a team of talented developers with years of experience in the industry.</p>
    <div className='Choose-butn'>  <button type='button' className='Choose_btn'>Schedule Call</button>
    </div>   </div>
        <div className="carousal">
        <Slider {...settings}>
            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Compre} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Unmatched Expertise</h5>
                </div>
                <p className="DesignChoose-para">We have the expertise to make your gaming ideas a reality due
to our years of experience and team of professional experts in the field.Our ability to
work across a wide range of platforms guarantees that your game will stand out in the
crowded market of today.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Solutions} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Cutting-Edge Solutionss</h5>
                </div>
                <p className="DesignChoose-para">We provide cutting-edge gaming experiences that go above
and beyond your expectations  by utilizing the newest technology and techniques.  Our
cutting-edge gaming solutions are unmatched because we consistently develop new
gameplay mechanics and <br/>visually captivating graphics.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={QualityChose} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Client-Centric Approach</h5>
                </div>
                <p className="DesignChoose-para">At AIRAI, our top priority is our clients' satisfaction.
Throughout the development process, we collaborate closely with you to  make sure your
goals are precisely and superbly achieved and your vision is realized.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Assurity} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Reasonably priced</h5>
                </div>
                <p className="DesignChoose-para">We provide competitive prices without compromising quality
because we recognize how important it is to stay within a certain budget. All businesses
can benefit from our various price choices, which make premium game production
affordable.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Personalized} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Exceptional Support</h5>
                </div>
                <p className="DesignChoose-para">Our dedication to quality doesn't end when <br/>the project is
completed. We guarantee that your game will run smoothly long after it has been
released by offering continuous support and maintenance services.</p>
            </div>
        </Slider>
      </div>
        </>
    )
}