import React from 'react';
import './ServiceFront.css'; // assuming you have a CSS file for styling
import Page from '../../../Images/ServicePage.png';
import videoSource from '../../../Images/Bg2.mp4';
function ServiceFront() {
  return (
    <>
    <div className="full-page-video">
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    <div className="ServiceFront">
      <div className="Service_desc">
        <h3>Our Services</h3>
        <h1>Welcome to <span>Airai's Services</span></h1>
        <p>Elevate your digital presence with our diverse range of services. 
                            From cutting-edge web development and mobile applications to innovative blockchain solutions, game development, 
                            and captivating 3D designs, we bring your ideas to life. Our team is dedicated to delivering tailored solutions 
                            that seamlessly blend creativity and technology. <br/> Whether you're envisioning a dynamic website, a mobile app that
                             stands out, secure blockchain implementations, engaging games, or immersive 3D designs, 
                            we have the expertise to turn your vision into reality. 
                            Explore the possibilities with our comprehensive suite of services.</p>
      </div>
      <div className="ServFront-image">
        <img src={Page} alt="Service-img" className='FrontServ-image'/>
      </div>
    </div>
    </>
  );
}

export default ServiceFront;
