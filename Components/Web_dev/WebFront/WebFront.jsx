import React from "react";
import WebImg from '../../../Images/WebPage.png';

import './WebFront.css';
function WebFront() {
  return (
    <>
      <div class="WebFront">
        <div class="webDev-Bnner">
            <h3  className="WebTitle">Increase Your Online Presence: Mohali's Top</h3>
          <h1>
            <span> Web Development Experts</span>
          </h1>
          <p className="Web-Paragraph">
          Are you seeking the perfect blend of creativity, functionality, and professionalism for your online
                                presence? Look no further than AIRAI, the leading web development company in Mohali. With a
                                proven track record of delivering exceptional websites specially designed and customized as
                                per our clients business needs, we stand out as the go-to choice for businesses in Mohali and
                                Chandigarh.
          </p>
        </div>
        <div class="Webdev">
          <img  src={WebImg} class="Web_pic" alt="Contact-us"
          />
        </div>
      </div>
    </>
  );
}

export default WebFront;
