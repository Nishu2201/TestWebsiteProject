import React from 'react';
import './DesignFront.css'; // assuming you have a CSS file for styling
import DesignPic from '../../../Images/Design.png';
import videoSource from '../../../Images/Bg-V1 (4).mp4';
function DesignFront() {
  return (
    <>
    <div className="full-page-video">
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    {/* <div className="DesignFront">
      <div className="Design_desc">
        <h3>Contact us</h3>
        <h1>Need <span>Airai’s</span> <br /> Help?</h1>
        <p>Ready to level up your gaming experience? Reach out to the best in the business for innovative
game design and development. Whether you have a groundbreaking idea or need to enhance
an existing project, we're here to bring your vision to life.</p>
      </div>
      <div className="Designimage">
        <img src={DesignPic} alt="DesignImage" />
      </div>
    </div> */}
    <div className="DesignFront">
      <div className="Des_desc">
        <h3 className="Des-title">Design Beyond Boundaries: Mohali's Trusted Agency for</h3>
        <h1><span> Creative Design Solutions</span></h1>
        <p className="Des-para">Welcome to our world, where gaming experiences are beyond the realm of the mind and
creativity has no limitations. Being the leading Mohali, Punjab, game design and development
company, we produce captivating, immersive gaming experiences. Our innovative development
services enable us to accomplish your gaming goals for mobile, PC, and console platforms.</p>
      </div>
      <div className="Page-pic">
        <img src={DesignPic} alt="contact" className="Des-Pic"/>
      </div>
    </div>
    </>
  );
}

export default DesignFront;
