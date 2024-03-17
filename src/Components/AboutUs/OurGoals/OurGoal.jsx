import React from 'react';
import './OurGoal.css'; // Import CSS file for styling
import { GoGoal } from "react-icons/go";
import { GiEyeTarget } from "react-icons/gi";
import { BsTrophyFill } from "react-icons/bs";
import InnoImg from '../../../Images/Innovation.gif';
import Satisfy from '../../../Images/satisfaction.gif';
import Proquality from '../../../Images/quality.gif';
import Empower from '../../../Images/Empower.gif';
import Craft from '../../../Images/Crafting.gif';
import Driver from '../../../Images/Driver.gif';
import Port from '../../../Images/portfolio.gif';
import globe from '../../../Images/impact.gif';
import leader from '../../../Images/client.gif';
const OurGoal = () => {
  return (
    <div className="About_Goal">
      <div className="Our-goal">
        <h2><i className="icon"><GoGoal size={30}/></i> Our Goals</h2>
        <div className="cards">
          <div className="card">
            <h3>
                <em>
                <img
                    src={InnoImg}
                    alt="pics"
                    // width="35"
                     className="AboutIcon-Img"
                  />
                  </em>
                  Innovation</h3>
            <p className='card-p'>Constantly push the boundaries of creativity and technology in digital experiences.</p>
          </div>
          <div className="card">
            <h3>
                <em>
            <img
                    src={Satisfy}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                  </em>
                Client Satisfaction</h3>
            <p className='card-p'>Ensure client success through transparent communication and collaborative partnerships.</p>
          </div>
          <div className="card">
            <h3>
                <em>
            <img
                    src={Proquality}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                  </em>
                Quality</h3>
            <p className='card-p'>Deliver exceptional quality in game development and digital solutions.</p>
          </div>
        </div>
      </div>
      <div className="Our-mission">
        <h2><i className="icon"><BsTrophyFill/></i> Our Mission</h2>
        <div className="cards">
          <div className="card">
            <h3>
            <em>
                  <img
                    src={Craft}
                    alt="pics"
                    width="30"
                     className="AboutCraft-Img"
                  />
                </em>Crafting Experiences</h3>
            <p className='card-p'>To create games and digital solutions that transport users into captivating realms.</p>
          </div>
          <div className="card">
            <h3>
            <em>
                  <img
                    src={Driver}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
                Tech-Driven Excellence</h3>
            <p className='card-p'>Embrace cutting-edge technology to stay at the forefront of the industry.</p>
          </div>
          <div className="card">
            <h3>
            <em>
                  <img
                    src={Empower}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
                Client Empowerment</h3>
            <p className='card-p'>Empower clients by translating their visions into digital realities.</p>
          </div>
        </div>
      </div>
      <div className="Our-vision">
        <h2><i className="icon"><GiEyeTarget size={30}/></i> Our Vision</h2>
        <div className="cards">
          <div className="card">
            <h3>
            <em>
                  <img
                    src={leader}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
                Industry Leadership</h3>
            <p className='card-p'>To be recognized as leaders in innovative game design and development.</p>
          </div>
          <div className="card">
            <h3>
            <em>
                  <img
                    src={globe}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
                Global Impact</h3>
            <p className='card-p'>Extend our reach globally, leaving a mark on the digital landscape.</p>
          </div>
          <div className="card">
            <h3>
            <em>
                  <img
                    src={Port}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
                Diverse Portfolio</h3>
            <p className='card-p'>Build a diverse portfolio that caters to various industries and technological advancements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
