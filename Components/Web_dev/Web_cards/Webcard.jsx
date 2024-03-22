import React from 'react';
import '../Web_cards/Web_card.css'; // Import CSS file for styling
import WebdeV from '../../../Images/Web_dev.png';
import WebDes from '../../../Images/WebDes.png';
import Landing from '../../../Images/Landing-pic.png';
const WebCard = () => {
    return (
      <div className="Web-Card">
        <h2 className="card-heading">Web Development Solutions</h2>
        <div className="card-container">
          <div className="card-item card1">
            <div className="item-group">
              <div className="icon">
              <img
                    src={WebDes}
                    alt="pics"
                    width="30"
                     className="WebDesPicture2"
                  />                </div>
              <h3 className="item-heading"> Web Design</h3>
            </div>
            <p className="description">Use our unique web design solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.</p>
          </div>
          <div className="card-item card2">
            <div className="item-group">
              <div className="icon">
              <img
                    src={Landing}
                    alt="pics"
                   
                    height="30"
                     className="WebDesPicture2"
                  />                </div>
              <h3 className="item-heading">Landing Page</h3>
            </div>
            <p className="description">Use our eye-catching landing page designs to make a strong first
impression. We optimize every component to increase engagement and boost
conversions, making it easier for you to meet your marketing goals and objectives.
      </p>
          </div>
          <div className="card-item card3">
            <div className="item-group">
              <div className="icon">
               
              <img
                    src={WebdeV}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </div>
              <h3 className="item-heading">Web Development</h3>
            </div>
            <p className="description"> Use our unique web Development solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WebCard;
