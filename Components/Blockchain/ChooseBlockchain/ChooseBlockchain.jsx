import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ChoseICon from '../../../Images/Icon/meeting.svg';
import Develop from '../../../Images/Icon/Develop.svg';
import AIML from '../../../Images/Icon/Ai-ml.svg';
import Compre from '../../../Images/Icon/Compre-Choose.svg';
import QualityChose from '../../../Images/Icon/quality-choose.svg';
import Assurity from '../../../Images/Icon/Assurity-chose.svg';
import Personalized from '../../../Images/Icon/Personalized.svg';
import Experties from '../../../Images/Icon/Expertise.svg';
import Block from '../../../Images/Icon/block-choose.svg';
import Price from '../../../Images/Icon/Price-choose.svg';

import './ChooseBlockchain.css';

// const images = [
//     { src:"https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" , title: 'Innovative Solutions', description: 'The library for web and native user interfaces.' },
//     { src: python, title: 'Python', description: 'High-level programming language' },
//     {src: flutter, title: 'Flutter', description: 'Develop cross-platform applications with Fluttermy name is nikhil singh' },
//     {src: nodePic, title: 'Node.js', description: 'Designed to build scalable network applications' },
//     { src: html, title: 'HTML', description: 'Markup language for creating web pages' },
//     { src: Css, title: 'CSS', description: 'Style sheet language for web development' },
//   ];

  
function ChooseBlockchain(){
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
        <div className='abc'>
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
                            <img width="60" height="60" src={Compre} className="icon-pic" alt="tailored" />
                            <h5 className='DesignChooseh5'>Expert Developers</h5>
                           </div>
                            <p className="Choose-para">Benefit from the expertise of our seasoned developers who are
dedicated to delivering exceptional results.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Price} className="icon-pic" alt="project"  />
                            <h5 className='DesignChooseh5'>Client-Oriented Price</h5>
                           </div>
                            <p className="Choose-para">We offer competitive pricing without compromising on quality or
reliability.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Block} className="icon-pic" alt="quality"  />
                            <h5 className='DesignChooseh5'>Custom Blockchain Development</h5>
                           </div>
                            <p className="Choose-para">Say goodbye to quality roadblocks with our custom
blockchain development services. We offer tailored solutions crafted with the latest
advancements in technology to align with your unique business goals.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Develop} className="icon-pic" alt="expertise" />
                            <h5 className='DesignChooseh5'>Business Automation</h5>
                           </div>
                            <p className="Choose-para">Drive decentralization and automate routine operations with our
secure and scalable blockchain solutions, ensuring efficient and transparent
transactions.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={QualityChose} className="icon-pic" alt="expertise" />
                            <h5 className='DesignChooseh5'>Outstanding User Experience</h5>
                           </div>
                            <p className="Choose-para">Using customized UX/UI design, our skilled developers
concentrate on providing outstanding user experiences.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={AIML} className="icon-pic" alt="expertise"  />
                            <h5 className='DesignChooseh5'>AI/ML Solutions</h5>
                            </div>
                            <p className="Choose-para">Empower your business with intelligent automation technology and
boost effici<br/>-ency with our AI/ML solutions tailored <br/>to your specific needs.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Compre} className="icon-pic" alt="expertise" />
                            <h5 className='DesignChooseh5'>Strong Collaborations</h5>
                           </div>
                            <p className="Choose-para">We prioritize collaboration and communi<br/>-cation to ensure the
success of every project.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Assurity} className="icon-pic" alt="expertise"  />
                            <h5 className='DesignChooseh5'>100% Quality</h5>
                           </div>
                            <p className="Choose-para"> Our commitment to excellence guarantees <br/>top-notch solutions that meet
the highest industry standards.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Experties} className="icon-pic" alt="expertise" />
                            <h5 className='DesignChooseh5'>New-Age Technology</h5>
                           </div>
                            <p className="Choose-para">Stay ahead of the curve with our innovative approach and
cutting-edge technologies.</p>
                        </div>
                        <div className="DesignChoose-box">
                <div className="DesignChoose-Head">
                            <img width="60" height="60" src={Personalized} className="icon-pic" alt="expertise" />
                            <h5 className='DesignChooseh5'>24/7 Support</h5>
                           </div>
                            <p className="Choose-para">Our dedicated support team is always <br/>available to address your queries
                                        and <br/>concerns.</p>
                        </div>
        </Slider>
            </div>
            
        </div>
    )
}

export default ChooseBlockchain;