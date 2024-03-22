import React from "react";
import '../WhyChooseMobile/WhyChooseMobile.css'
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
import Experties from '../../../Images/Icon/Expertise.svg';
import Deliver from '../../../Images/Icon/Deliver.svg';
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
      <h2 className='color-text'>Because we match your project expectations with our unwavering commitment.</h2>
      <p className='Choose-p'>We have a team of talented developers with years of experience in the industry.</p>
    <div className='Choose-butn'>  <button type='button' className='Choose_btn'>Schedule Call</button>
    </div>   </div>
        <div className="carousal">
        <Slider {...settings}>
            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Solutions} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Significant Results</h5>
                </div>
                <p className="DesignChoose-para">Working with Fortec Web Solutions Pvt. Ltd. as a partner means
directing your ideas toward significant results.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Compre} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Enhanced Brand Recognition and consumer Engagement</h5>
                </div>
                <p className="DesignChoose-para">Our area of expertise is
creating intuitive  mobile applications that increase brand awareness and consumer
engagement.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Personalized} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Enhanced Business Operations</h5>
                </div>
                <p className="DesignChoose-para">We build strong relationships with both current and
new clients by utilizing our  <br/>mobile apps to enhance business operations.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Experties} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Customized Solutions</h5>
                </div>
                <p className="DesignChoose-para">We provide mobile app solutions that are specially designed to
meet your unique business requirements and tastes.</p>
            </div>

            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={QualityChose} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Outstanding User Experience</h5>
                </div>
                <p className="DesignChoose-para">Using devlopmobized UX/UI design, our skilled developers
concentrate on providing outstanding user experiences.</p>
            </div>
            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Assurity} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Scalability and Security</h5>
                </div>
                <p className="DesignChoose-para">We design mobile apps with scalability and security in mind,
ensuring your app can grow alongside your business without compromising user
experience.</p>
            </div>
            <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                <img width="60" height="60" src={Deliver} alt="tailored" className="DesignChoose-pic" />
                <h5 className="DesignChooseh5">Timely Delivery</h5>
                </div>
                <p className="DesignChoose-para">We value your time and prioritize timely delivery without compromising
on quality throughout the development process.</p>
            </div>
        </Slider>
      </div>
        </>
    )
}