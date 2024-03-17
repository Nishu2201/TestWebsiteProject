import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Work from '../../../Images/Icon/tools.svg';
import './How_we_work.css';
import Design from '../../../Images/Icon/Design.svg';
import Plan from '../../../Images/Icon/Idea.svg';
import Develop from '../../../Images/Icon/Develop.svg';
import Test from '../../../Images/Icon/Test.svg';
import Deliver from '../../../Images/Icon/Deliver.svg';

function How_we_work(){
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
                <em><img src={Plan} alt="" /></em>                 
                    <h3 >Plan</h3>
                </div>
                <div className="work_max">
                  <p className="work-max-para">Strategize for success. We analyze goals, crafting a roadmap that aligns every
step with your vision.</p>
                </div>
              </div>
              <div className="work_place">
                <div className="effect">
                <em><img src={Design} alt="" /></em>                 
                    <h3>Design </h3>
                </div>
                <div className="work_max">
                  <p className="work-max-para">Ignite creativity. Our team brings ideas to life, prioritizing aesthetics and
functionality for engaging designs.</p>
                </div>
              </div>
           
           
              <div className="work_place">
                  <div className="effect">
                  <em><img src={Develop} alt="" /></em>                  
                      <h3>Develop</h3>
                    
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Transform concepts seamlessly. Our developers use cutting-edge tech to
create robust solutions that exceed expectations.</p>
                  </div>
                </div>
             

              
              <div className="work_place">
                  <div className="effect">
                  <em><img src={Test} alt="" /></em>    
                                    <h3>Test</h3>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Ensure excellence. Rigorous testing guarantees a flawless product, identifying and
resolving issues before launch.</p>
                  </div>
                </div>
              
              <div className="work_place">
                  <div className="effect">
                  <em><img src={Deliver} alt="" /></em>                      <h3>  Deliver </h3>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Culmination of hard work. We deliver with precision, ensuring your product
reaches its destination seamlessly and on time.</p>
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

export default How_we_work;