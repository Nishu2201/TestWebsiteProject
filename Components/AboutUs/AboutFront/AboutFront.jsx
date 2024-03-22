import React from 'react';
import '../AboutFront/AboutFront.css'; // assuming you have a CSS file for styling
import AboutPic from '../../../Images/AboutPage.png';
import videoSource from '../../../Images/Bg2.mp4';
function AboutFront() {
  return (
    <>
    <div className="full-page-video">
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    <div className="AboutFront">
      <div className="About_desc">
        <h3>About us</h3>
        <h1>Welcome to <span>Airai</span></h1>
        <p>where creativity meets innovation in the world of game design and
development. We create beyond the box immersive digital experiences. In the constantly
changing game industry, we are driven by our passion, innovation, and dedication to quality.We
are a group of creative minds with a simple yet ambitious goal: to redefine the gaming industry.
</p>       
<p>What sets AIRAI apart is our constant commitment to both technology and artistry. We
understand that great games are created when visually striking graphics, stunning visuals, and
compelling stories come together. That's why our team comprises not just skilled developers,
but artists, and innovators who bring diverse and unique viewpoints to the table.</p>
      </div>
      <div className="image">
        <img src={AboutPic} alt="About-img" className='about-image'/>
      </div>
    </div>
    </>
  );
}

export default AboutFront;
