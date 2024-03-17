import React from 'react';

// Services icon start here 
import web from '../../../Images/Web.svg';
import Design3d from '../../../Images/Icon/3D-design.svg';
import NFTDev from '../../../Images/Icon/NFT-development.svg';
import UIDesign from '../../../Images/Icon/Ui-design.png';
import BackendDev from '../../../Images/Icon/Backend-dev.svg';
import Token from '../../../Images/Icon/Token.svg';
// import Blockchain from '../../../Images/Blockchain.svg';
import devOps from '../../../Images/devOps.svg';
import Game from '../../../Images/Game.svg';
import Java from '../../../Images/JAVA.svg';
import Meta from '../../../Images/Metaverse.svg';
import service from '../../../Images/service.png';
import '../OurServices/OurService.css';

function OurService(){
  const servicesData = [
    { img: Java, title: 'Mobile Development ' },
    { img: web, title: 'Web Development' },
    { img: Game, title: 'Game Development' },
    { img: Token, title: 'Blockchain Development' },
    { img: devOps, title: 'Front-End Development' },
    { img: Meta, title: 'Graphic/Game Designing' },
    { img: BackendDev, title: 'Backend Development' },
    { img: Design3d, title: '3D Modeling/Animation' },
    { img: UIDesign, title: 'UI/UX Design' },
    { img: NFTDev, title: 'NFT Design/Development' },
  ];
    return(
        <section className="services">
            <div className="service-row1">
                <div className='title'>
                  <em className="services_icon bg-white">
                    <img
                      src={service}
                      alt=""
                      width="30"
                      className="img-fluid"
                    />
                  </em>
                  <h2 className="Services-h2">Services</h2>
                </div>
             
            </div>
            <div className="service-row2">
              <div className="text">
                <h2>
                  Enjoy a Decade-worth of Experience!
                </h2>
                <p>
                  Enjoy the best NFT App Development Services from a company with
                  more than a decade of experience in the industry. Our team of
                  expert developers understands how to innovate and create
                  products that boost business goals.
                </p>
              </div>
              <div className='serve-btn'>
              <a href="/service"  className="button-link">  <button
    type="button"
    className="Servicecta_btn"
  >
    Know more.
  </button></a></div>
            </div>
                
  
                  <div className="services_blocks">
        <div className="services_blocks_row">
          {servicesData.map((service, index) => (
            <div className="Service-box" key={index}>
              <i>
                <img src={service.img} alt={service.title} />
                <p>{service.title}</p>
              </i>
              {/* <div className="hover-content">
            <p>{service.additionalText}</p>
          </div> */}
            </div>
          ))}
        </div>
      </div>
      
      </section> 
    )
}

export default OurService;