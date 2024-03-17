import React from 'react';
import './Game_card.css';
import CPS from '../../../Images/CPS.png';
import android from '../../../Images/android.png';
import IOs from '../../../Images/ios.png';
const GameCard = () => {
    return (
      <div className="Game-Card">
        <h2 className="card-heading">Game Development Services</h2>
        <div className="card-container">
          <div className="card-item card1">
            <div className="item-group">
              <div className="icon">
              <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="Gheading-Img1"
                  />             </div>
              <h3 className="item-heading"> Android Game Development</h3>
            </div>
            <p className="description"> Android Game Development: Collaborate with the leading
expert on Android games development, AIRAI, and experience exceptional outcomes firsthand.
Our team uses the newest game design techniques to create visually stunning 2D and 3D
games that are affordable. Additionally to improve your gaming experience, we also offer free
demos and in-game advertisements.</p>
          </div>
          <div className="card-item card2">
            <div className="item-group">
              <div className="icon">
              <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="Gheading-Img2"
                  />               </div>
              <h3 className="item-heading">iOS Game Development</h3>
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
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </div>
              <h3 className="item-heading">Cross-Platform Solutions</h3>
            </div>
            <p className="description">Save time and cost by opting for our top-notch Hybrid Cross-Platform Applications. Our cross-platform
development expertise allows us to create game applications that run seamlessly on various devices
and operating systems. Whether it's Android or iOS, our hybrid solutions ensure consistent
performance and user experience across different platforms.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default GameCard;
