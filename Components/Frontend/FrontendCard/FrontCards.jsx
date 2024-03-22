import React from 'react';
import videoSource from '../../../Images/BG-V1 (2).mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FrontCards.css'; // Import CSS file for styling
import SPAS from '../../../Images/Landing-pic.png';
import JSDEv from '../../../Images/Icon/JSDevelopment.png';
import hCss from '../../../Images/Icon/htmlCss.png';
import Cms from '../../../Images/Icon/CmsTheme.png';
import POA from '../../../Images/Web_dev.png';
import UIUx from '../../../Images/Ui-ux.png';
// import { DiAndroid } from "react-icons/di"
// import { FaAppStoreIos } from "react-icons/fa";
const FrontCards = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
          }
        ]
      };

    return (
        <section className="FrontEndcards">
{/* <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    <div className="FrontCard-container">
   <div> <h1 className="Frontheading-cards">Front-End Solutions</h1> </div>
   <div className="FrontcardSlider">
   <Slider {...settings}>
    
   <div class="FrontRoleCard Frontcard-1">
   <div className="FrontHead-part">
     <em className="FrontheadingICON-Img ">
                  <img
                    src={hCss}
                    alt="pics"
                    width="30"
                     className="frontheadImg1"
                  />
                </em>
                <h2 className="frontroleCards-headings">  CSS3 and HTML5
                </h2></div>
      <p className="frontroleCards-text">
      We strongly believe that responsive design has the ability to improve
user engagement. Our front-end developers construct websites and web applications
that smoothly adjust to different device sizes and types by process-dataively using HTML5 and
CSS3. Across all platforms—desktop and mobile—our designs remain elegant and
consistent.</p>
      </div> 
      <div class="FrontRoleCard Frontcard-2">
      <div className="FrontHead-part">
      <em className="FrontheadingICON-Img">
                  <img
                    src={JSDEv}
                    alt="pics"
                    width="30"
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> Framework-Based Custom JavaScript Development
                </h2></div>
      <p className="frontroleCards-text">
      JavaScript empowers dynamic user interfaces with features like animations, parallax scrolling, and picture carousels. Leveraging frameworks such as React, Vue, and Angular, our team crafts robust desktop, mobile, and online applications. Through client-side routing and API integration, 
      we ensure stable performance and seamless user experiences.</p>
    </div>
      <div class="FrontRoleCard Frontcard-3">
    <div className="FrontHead-part">
    <em className="FrontheadingICON-Img ">
                 <img
                   src={Cms}
                   alt="pics"
                   width="30"
                    className="frontheadImg3"
                 />
              </em>
              <h2 className="frontroleCards-headings"> CMS Theming</h2> </div>
     <p className="frontroleCards-text">
     Make a statement with unique CMS theming for WordPress, Drupal,
Magento, and Joomla platforms. By crafting custom layouts that showcase your brand
identity, our front-end developers help you establish a distinctive online presence and
increase user engagement.</p>
     </div>
     <div class="FrontRoleCard Frontcard-1">
     <div className="FrontHead-part">
      <em className="FrontheadingICON-Img">
                  <img
                    src={UIUx}
                    alt="pics"
                    width="30"
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> UI/UX Design</h2></div>
      <p className="frontroleCards-text">
      Our specialty is turning ideas into clear user interfaces and captivating
experiences. Our UI/UX designs, which are based on data-driven insights gleaned from
thorough user research, combine aesthetics with utility. We put user-centric design ideas
first from conception to completion in order to produce outstanding digital solutions.
      </p> 
    </div>
    <div class="FrontRoleCard Frontcard-2">
    <div className="FrontHead-part">
      <em className="FrontheadingICON-Img">
                  <img
                    src={SPAS}
                    alt="pics"
                    width="30"
                    // height={60}
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> Applications on a single <br/>page (SPAs)</h2></div>
      <p className="frontroleCards-text">
      With our single-page applications, which
provide app-like experiences on a single web page, you may experience the smooth flow
of material. SPAs reduce the number of page refreshes, guaranteeing quick and
seamless user experiences.</p>
    </div>
    <div class="FrontRoleCard Frontcard-3">
    <div className="FrontHead-part">
      <em className="FrontheadingICON-Img">
                  <img
                    src={POA}
                    alt="pics"
                    width="30"
                    // height={50}
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> Progressive online <br/> Applications (PWAs)
                </h2></div>
      <p className="frontroleCards-text">
      These online applications offer a native
app-like experience, helping you embrace the future of web development. We create
PWAs with responsive designs, push notifications, offline accessibility, and lightning-fast
load times by utilizing frameworks such as React.</p>
    </div>
    </Slider></div>
    </div>
</section>
    );
}

export default FrontCards;
