import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


import './WhyChooseWeb.css';
import ChoseICon from '../../../Images/Icon/meeting.svg';
import Solutions from '../../../Images/Icon/Solutions.svg';
import Compre from '../../../Images/Icon/Compre-Choose.svg';
import QualityChose from '../../../Images/Icon/quality-choose.svg';
import Assurity from '../../../Images/Icon/Assurity-chose.svg';
import Personalized from '../../../Images/Icon/Personalized.svg';
import Experties from '../../../Images/Icon/Expertise.svg';
import Develop from '../../../Images/Icon/Develop.svg';


  
function WhyChooseMobile(){
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
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
    
    return(
        <div className='wcmabc'>
            <div className="wcmChoose-head">
      <h2 className="wcmChoose-text">
      <em className="wcmChoose_icon">
            <img src={ChoseICon} alt="Requirement" width="30"  />
          </em> 
          Why Choose Airai</h2>
      <h2 className='wcmcolor-text'>Because we match your project expectations with our unwavering commitment.</h2>
      <p className='wcmChoose-p'>We have a team of talented developers with years of experience in the industry.</p>
    <div className='wcmChoose-butn'>  <button type='button' className='wcmChoose_btn'>Schedule Call</button>
    </div>   </div>
           
            
            <div className="wcmcarousal">
            <Slider {...settings}>
         
          <div className="wcmChoose-box">
          <div className="wcmChoose-top">
                            <img width="60" height="60" src={Experties} className="icon-pic" alt="tailored" />
                            <h5 className="wcmHead">Expertise</h5>
                           </div>
                            <p className="wcmChoose-para">With a team of seasoned profess-<br/>ionals boasting over 12 years of experience,
we possess the skills and knowledge to crafttop-notch websites using a variety of
plat-<br/>forms and frameworks, including WordPress, Magento, OpenCart, and more.</p>
                        </div>
                        <div className="wcmChoose-box">
                        <div className="wcmChoose-top">
                            <img width="60" height="60" src={Compre} className="icon-pic" alt="project"  />
                            <h5 className="wcmHead">Comprehensive Services</h5>
                            </div>
                            <p className="wcmChoose-para">From custom website develop-<br />ment to theme integration,
CMS integration, and PHP or ASP.Net website creation, we offer a wide range of
services to cater to your every need.</p>
                        </div>
                        <div className="wcmChoose-box">
                        <div className="wcmChoose-top">
                            <img width="60" height="60" src={Solutions} className="icon-pic" alt="quality"  />
                            <h5 className="wcmHead">Search Engine Friendliness</h5>
                           </div>
                            <p className="wcmChoose-para">Our websites are meticulously designed to be search
engine friendly, ensuring maximum visibility and organic traffic for your business.</p>
                        </div>
                        <div className="wcmChoose-box">
                        <div className="wcmChoose-top">
                            <img width="60" height="60" src={QualityChose} className="icon-pic" alt="expertise" />
                            <h5 className="wcmHead">User Experience</h5>
                           </div>
                            <p className="wcmChoose-para">We prioritize user experience, crafting websites that are not only
visually appealing but also fast-loading and easy to navigate, leading to higher user
engagement and conversion rates.</p>
                        </div>
                        <div className="wcmChoose-box">
                        <div className="wcmChoose-top">
                            <img width="60" height="60" src={Assurity} className="icon-pic" alt="expertise" />
                            <h5 className="wcmHead">Quality Assurance</h5>
                           </div>
                            <p className="wcmChoose-para">Our rigorous testing process ensures that your website is error-free
and performs flawlessly across all devices and browsers.</p>
                        </div>
                        <div className="wcmChoose-box">
                        <div className="wcmChoose-top">
                            <img width="60" height="60" src={Personalized} className="icon-pic" alt="expertise"  />
                            <h5 className="wcmHead">Personalized Support</h5>
                           </div>
                            <p className="wcmChoose-para">We provide dedicated support services to address any issues or
concerns you  may have, ensuring a seamless experiencefrom start to finish.</p>
                        </div>
                        <div className="wcmChoose-box">
                        <div className="wcmChoose-top">
                            <img width="60" height="60" src={Develop} className="icon-pic" alt="expertise" />
                            <h5 className="wcmHead">Innovative Game Design</h5>
                           </div>
                            <p className="wcmChoose-para">Combine aesthetics and accessibi-<br />lity  for a smooth user
                                            experience.</p>
                        </div>
        </Slider>
            </div>
           
        </div>
    )
}

export default WhyChooseMobile;