import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Work from '../../../Images/Icon/tools.svg';
import '../DesignWork/Designwork.css';
import Solutions from '../../../Images/Icon/Solutions.svg';
import Design from '../../../Images/Icon/Design.svg';
import Plan from '../../../Images/Icon/Idea.svg';
import Develop from '../../../Images/Icon/Develop.svg';
import Test from '../../../Images/Icon/Test.svg';
import Deliver from '../../../Images/Icon/Deliver.svg';
import Personalized from '../../../Images/Icon/Personalized.svg';
function Designwork(){
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
      autoplaySpeed: 2000,
      };
return(
    <div className='data-work'>
    {/* <div className="Choose_Airai"> */}
    {/* <section className="how_it_work"> */}
      {/* <div className="work-container"> */}
      <div className="work-heading">
      <h2 className="work-text">
      <em className="work_icon">
            <img src={Work} alt="Requirement" width="30"  />
          </em> 
          How we work</h2>
      <h2 className='colored-text'>We put the work into your idea, and here’s how we do it!</h2>
      {/* <p>
        Explore our other fine quality techs and choose one that suits your needs.
      </p> */}
      </div>
        <div className="work_part ">
          <Slider {...sliderSettings}>
            
              <div className="work_place">
                <div className="effect">
                <em><img src={Solutions} alt="" /></em>                 
                    <h3 >Discovery</h3>
                </div>
                <div className="work_max">
                  <p className="work-max-para">We learn about your brand and goals.</p>
                </div>
              </div>
              <div className="work_place">
                <div className="effect">
                <em><img src={Design} alt="" /></em>                 
                    <h3>Research & Analysis </h3>
                </div>
                <div className="work_max">
                  <p className="work-max-para">We study trends and competitors.</p>
                </div>
              </div>
           
           
              <div className="work_place">
                  <div className="effect">
                  <em><img src={Plan} alt="" /></em>                  
                      <h3>Concept Development</h3>
                    
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We create tailored design ideas.</p>
                  </div>
                </div>
             

              
              <div className="work_place">
                  <div className="effect">
                  <em><img src={Test} alt="" /></em>    
                                    <h3>Design Execution</h3>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We bring your vision to life.</p>
                  </div>
                </div>
              
              <div className="work_place">
                  <div className="effect">
                  <em><img src={Develop} alt="" /></em>     
                    <h3>Feedback & Revisions</h3>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We refine based on your input.</p>
                  </div>
                </div>
                <div className="work_place">
                  <div className="effect">
                  <em><img src={Deliver} alt="" /></em>     
                    <h3>Finalization & Delivery</h3>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We prepare and deliver your design.</p>
                  </div>
                </div>
                <div className="work_place">
                  <div className="effect">
                  <em><img src={Personalized} alt="" /></em>     
                    <h3>Post-Project Support:</h3>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We're here for updates and maintenance.</p>
                  </div>
                </div>
              </Slider>
            </div>
         

          {/* <ul className="slick-dots" role="tablist">
            <li className="slick-active" role="presentation">
              <button type="button" role="tab" aria-controls="slick-slide40" aria-label="1 of 6" tabIndex="0" >1</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
           
          </ul> */}
        {/* </div> */}
    </div>
);

}

export default Designwork;