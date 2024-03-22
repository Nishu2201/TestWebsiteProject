import React from 'react';

// ConServe icon start here 
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
import './Contact_Service.css';

function Contact_ConServe(){
  const ConServeData = [
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
        <section className="ConServe">
            <div className="contServe-Row1">
                <div className='ContTitle'>
                  <em className="ConServe_icon bg-white">
                    <img
                      src={service}
                      alt=""
                      width="30"
                      className="img-fluid"
                    />
                  </em>
                  <h2 className="ConServe-h2">Services</h2>
                </div>
             
            </div>
            <div className="contServe-Row2">
              <div className="Servetext">
                <h2>
                  Enjoy a Decade-worth of Experience!
                </h2>
                <p>
                  Enjoy the best NFT App Development ConServe from a company with
                  more than a decade of experience in the industry. Our team of
                  expert developers understands how to innovate and create
                  products that boost business goals.
                </p>
              </div>
              <div className='ConService-butn'>
              <a href="/service"  className="buton-links">  <button
    type="button"
    className="ContactServ_butn"
  >
    Know more.
  </button></a></div>
            </div>
                
  
                  <div className="ConServe_blocks">
        <div className="ConServe_blocks_row">
          {ConServeData.map((service, index) => (
            <div className="ContServ-boxs" key={index}>
              <i>
                <img src={service.img} alt={service.title} />
                <p>{service.title}</p>
              </i>
              {/* <div className="hover-content">
            <p>{service.additionalServetext}</p>
          </div> */}
            </div>
          ))}
        </div>
      </div>
      
      </section> 
    )
}

export default Contact_ConServe;