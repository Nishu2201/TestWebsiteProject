import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Work from '../../../Images/Icon/tools.svg';
import './BlockchainWork.css';

import Design from '../../../Images/Icon/Design.svg';
import Plan from '../../../Images/Icon/Idea.svg';
import Develop from '../../../Images/Icon/Develop.svg';
import Test from '../../../Images/Icon/Test.svg';
import Deliver from '../../../Images/Icon/Deliver.svg';

function BlockchainWork(){
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
          Our Process</h2>
      <h2 className='colored-text'>We put the work into your idea, and here’s how we do it!</h2>
      {/* <p>
        Explore our other fine quality techs and choose one that suits your needs.
      </p> */}
      </div>
        <div className="work_part ">
          <Slider {...sliderSettings}>
            
              <div className="BlockPlace">
                <div className="effect">
                  <em><img src={Plan} alt="" /></em>
                 
                    <h3 >Requirement Gathering and Elicitation</h3>
                </div>
                <div className="work_Block">
                  <p className="work-Block-para">We kick off every project with a focused
brainstorming session to understand your requirements and mitigate risks.</p>
                </div>
              </div>
              <div className="BlockPlace">
                <div className="effect">
                  <em><img src={Design} alt="" /></em>
                 
                    <h3>Design and Development </h3>
                </div>
                <div className="work_Block">
                  <p className="work-Block-para">Our experts design and develop robust solutions tailored to
your business needs, ensuring seamless integration and functionality.</p>
                </div>
              </div>
           
            <div className="slick-slide" >
              <div className="BlockPlace">
                  <div className="effect">
                    <em><img src={Develop} alt="" /></em>
                  
                      <h3>UAT and QA on Testnets</h3>
                    
                  </div>
                  <div className="work_Block">
                    <p className="work-Block-para">We conduct rigorous testing to ensure the quality and
reliability of our blockchain products, eliminating any flaws or errors.</p>
                  </div>
                </div>
              </div>

              <div className="slick-slide" >
              <div className="BlockPlace">
                  <div className="effect">
                    <em><img src={Test} alt="" /></em>
                      <h3>Production-Level Deployment</h3>
                  </div>
                  <div className="work_Block">
                    <p className="work-Block-para">Finally, we deploy your blockchain solutions on multiple
platforms, ensuring smooth and hassle-free integration with your existing infrastructure.</p>
                  </div>
                </div>
              </div>

              <div className="slick-slide" >
              <div className="BlockPlace">
                  <div className="effect">
                    <em><img src={Deliver} alt="" /></em>
                      <h3>Delivery and Support</h3>
                  </div>
                  <div className="work_Block">
                    <p className="work-Block-para">Upon completion, we deliver the website to you and provide
ongoing support to address any further needs or enhancements.</p>
                  </div>
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

export default BlockchainWork;