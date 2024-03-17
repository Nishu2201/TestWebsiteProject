import React from 'react';
import '../Contact_front/ContactFront.css'; // assuming you have a CSS file for styling
import contactImage from '../../../Images/Contact.png';
import videoSource from '../../../Images/Bg2.mp4';
function ContactFront() {
  return (
    <>
    <div className="full-page-video">
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    <div className="ContactFront">
      <div className="contact_desc">
        <h3>Contact us</h3>
        <h1>Need <span>Airai’s</span> <br /> Help?</h1>
        <p>Ready to level up your gaming experience? Reach out to the best in the business for innovative
game design and development. Whether you have a groundbreaking idea or need to enhance
an existing project, we're here to bring your vision to life.</p>
      </div>
      <div className="Con-image">
        <img src={contactImage} alt="contact" className="contact-image"/>
      </div>
    </div>
    </>
  );
}

export default ContactFront;
