import React from 'react';
import '../Tech/Tech.css';
import techs from '../../../Images/techs.gif';import Css from '../../../Images/css-logo.png';
import Unity from '../../../Images/Unity.png';
import reactPic from '../../../Images/react.png';
import flutter from '../../../Images/Flutter.png';
import nodePic from '../../../Images/js.png';
import python from '../../../Images/Python.png';


function Tech(){
  
return(
 <div className="Techs-content">
      <div className="heading">
      <div className="tech-row1">
      <em className="tech_icon ">
                  <img
                    src={techs}
                    alt="pics"
                    width="30"
                    className="img-fluid"
                  />
                </em> <h2 className="tech-text">Other Quality Techs On Offer</h2></div>
                <div className="tech-row2">  <h2 className='color-text'>We have much more to offer!</h2>
      
      <p> 
        Explore our other fine quality techs and choose one that suits your needs.
      </p>
      </div></div>
      <div className="flex-grid">
        <div className="col">
        <img src={reactPic} alt="react" />
        <div className="new">
        <h4>React JS</h4>
        <p className='new-para'>The library for web and native user interfaces.</p>
        </div>
        </div>
        <div className="col">
        <img src={python} alt="python" />
        <div className="new">
        <h4>Python</h4>
        <p className='new-para'>High-level programming language.</p>
        </div>
        </div>
        <div className="col">
        <img src={flutter} alt="flutter" />
        <div className="new">
        <h4>Flutter</h4>
        <p className='new-para'>Develop cross-platform applications with Flutter.</p>
        </div>
        </div>
      </div>
      <div className="flex-grid">
      <div className="col">
      <img src={nodePic} alt="nodeJS" />
        <div className="new">
      <h4>Node JS</h4>
        <p className='new-para'>Designed to build scalable network applications.</p>
      </div>
      </div>
      <div className="col">
      <img src={Unity} alt="html" />
        <div className="new">
      <h4>Unity</h4>
        <p className='new-para'>Unity powers immersive gaming and simulations.</p>
      </div>
      </div>
      <div className="col">
      <img src={reactPic} alt="css" />
        <div className="new">
      <h4>React-Native</h4>
        <p className='new-para'>Facilitates cross-platform mobile development.</p>
      </div>
      </div>
      </div>
    </div> 
);

}

export default Tech;