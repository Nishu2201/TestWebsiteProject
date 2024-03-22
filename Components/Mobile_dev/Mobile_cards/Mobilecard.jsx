import React from 'react';
import '../Mobile_cards/Mobile_card.css'; // Import CSS file for styling
import { DiAndroid } from "react-icons/di"
import { FaAppStoreIos } from "react-icons/fa";
import CPS from '../../../Images/CPS.png';
const MobileCard = () => {
    return (
      <div className="mobile-card">
        <h2 className="card-heading">Mobile App Solutions</h2>
        <div className="card-container">
          <div className="card-item card1">
            <div className="item-group">
              <div className="icon"><DiAndroid size={30} color='#00ff00'/></div>
              <h3 className="item-heading"> Android Development</h3>
            </div>
            <p className="description">Are you seeking to enhance devlopmober engagement and boost
                brand recognition through devlopmob mobile app solutions? <br />
                Look no further! AIRAI stands ready to elevate your business to
                new heights with our expertise in mobile technologies and
                frameworks.
                <br /> Our expert team specializes in both native and hybrid platform
                solutions, ensuring that your app reaches your target audience
                effectively.</p>
          </div>
          <div className="card-item card2">
            <div className="item-group">
              <div className="icon"><FaAppStoreIos size={30} color='#B4B4B8'/></div>
              <h3 className="item-heading">iOS Development</h3>
            </div>
            <p className="description">Given how widely available Apple products are becoming, it's
                critical to serve a diverse range of clientele. Our iOS
                development team makes use of a variety of cutting-edge
                technologies to make sure your application is accessible and
                easy to use on iPhones and iPads. We help you maximize your
                reach and engage a broader audience.</p>
          </div>
          <div className="card-item card3">
            <div className="item-group">
              <div className="icon">
               
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                    //  className="heading-Img3"
                  />
               {/* </em> */}
               </div>
              <h3 className="item-heading">Cross-Platform Solutions</h3>
            </div>
            <p className="description">Save time and cost by opting for our top-notch Hybrid Mobile
                Applications. Our cross-platform development expertise allows us
                to create applications that run seamlessly on various devices
                and operating systems. Whether it's Android or iOS, our hybrid
                solutions ensure consistent performance and user experience
                across different platforms.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileCard;
