import React from "react";
import PageImg from '../../../Images/MobilePic.png';

import './MobileFront.css';
function MobileFront() {
  return (
    <>
      <div class="mobileFront">
        <div class="mobDev_banner">
            <h3  className="mob-title">AIRAI: Innovate, Create, Dominate: Mohali's Best</h3>
          <h1>
            <span> Mobile App Developers</span>
          </h1>
          <p className="mobDev-para">
            Are you seeking to enhance devlopmober engagement and boost brand
            recognition through devlopmob mobile app solutions? Look no further!
            AIRAI stands ready to elevate your business to new heights with our
            expertise in mobile technologies and frameworks. We offer best
            mobile app development services in mohali, punjab. Our expert team
            specializes in both native and hybrid platform solutions, ensuring
            that your app reaches your target audience effectively.
          </p>
        </div>
        <div class="mobDev">
          <img  src={PageImg} class="Page-img" alt="Contact-us"
          />
        </div>
      </div>
    </>
  );
}

export default MobileFront;
