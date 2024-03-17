import React, { useState } from "react";
import "./ContactForm.css";
import email from "../../../Images/Icon/email.svg";
import hiring from "../../../Images/Icon/hiring.svg";
import whatsapp from "../../../Images/Icon/whatsapp.svg";
import skype from "../../../Images/Icon/skype.svg";
// import username from "../../../Images/Icon/username.svg";
// import emailIicon from "../../../Images/Icon/email-icon.svg";
// import badge from "../../../Images/Icon/security-badge.svg";
import { BsShieldFillCheck } from "react-icons/bs";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      acceptedTerms: false,
    });
  };

  return (
    <div className="contact-form">
      <div className="contactFormleft-div">
        <h2>Have An Idea?</h2>
        <p>
          Contact us today to embark on a journey of innovation and success with
          AIRAI, your premier development partner in Mohali. Let's collaborate
          and create a successful history together!
        </p>
        <div className="info-box">
          <span className="mailicon">
            <img src={email} alt="Email" width="30"  className="Icons"/>
            <h3>Mail us</h3> </span>
          
          <p>
            <strong>sales@airai.games</strong>
          </p>
        </div>
        <div className="info-box">
          <span className="icon">
            <img src={hiring} alt="Email" width="30"  className="Icons"/>
            <h3>For Hiring Inquiry </h3>
          </span>
          
          <p>
            <strong>+91-9877150016</strong>
          </p>
        </div>
        <div className="info-box">
          <span className="icon">
            <img src={whatsapp} alt="Whatsapp" width="30"  className="Icons" />
            <h3>Whatsapp</h3>
          </span>
        
          <p>
            <strong>+91-9877150016</strong>
          </p>
        </div>
        <div className="info-box">
          <span className="icon">
            <img src={skype} alt="Email" width="30"  className="Icons" />
            <h3>Skype</h3>
          </span>
         
          <p>
            <strong>sales@airai.games</strong>
          </p>
        </div>
        {/* <div className="info-box">
          <span className="icon">Icon</span>
          <h3>Heading 5</h3>
          <p>Text 5</p>
        </div> */}
        <p class="text-para">
          Feel free to fill out the form, and our team will get in touch within
          <strong> 24 hours.</strong>
        </p>
      </div>
      <div className="contactFormright-div">
        <div className="contact_box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="icon1"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="icon2"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
          {/* <p className=""> <label htmlFor="acceptTerms">
            <BsShieldFillCheck color="#20bf55" size="2.5rem" className="Shield"/>
              Your Idea is Fully Protected By Our <strong>Non Disclosure Agreement (NDA)</strong>
            
           </label></p> */}
           <p className="NDA-text"> 
            <BsShieldFillCheck color="#20bf55" size="2.5rem" className="Shield"/>
              Your Idea is Fully Protected By Our <strong>Non Disclosure Agreement (NDA)</strong>
          </p>
          </div>
          <button className="send_btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
