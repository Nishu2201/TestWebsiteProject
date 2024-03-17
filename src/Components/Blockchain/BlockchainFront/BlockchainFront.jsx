import React from 'react';
import './BlockchainFront.css'; // assuming you have a CSS file for styling
import PagePic from '../../../Images/BlockChain.png';
import videoSource from '../../../Images/Bg2.mp4';
function BlockchainFront() {
  return (
    <>
    <div className="full-page-video">
    <video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    <div className="BlockchainFront">
      <div className="Blockchain_desc">
        <h3 className='Blockchainh3'>AIRAI: Empowering Your Business with Innovative</h3>
        <h1 className='Blockchainh1'><span className='Blockchainspan'>Blockchain Solutions</span></h1>
        <p className='Blockchainp'>At AIRAI, we are committed to revolutionizing your business through innovative blockchain
development service in mohali, punjab. With a dedicated team of skilled professionals, we
empower businesses across diverse industries to unlock their full potential and achieve
unparalleled success.</p>
      </div>
      <div className="BlockFront-image">
        <img src={PagePic} alt="Blockchain-img" className='BlockServ-image'/>
      </div>
    </div>
    </>
  );
}

export default BlockchainFront;
