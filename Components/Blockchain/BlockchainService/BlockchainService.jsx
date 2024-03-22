import React from 'react';

// ConServe icon start here 
import Crypto from '../../../Images/Icon/CryptoMArket.svg';
import web3Dev from '../../../Images/Icon/Web3develop.svg';
import CryExc from '../../../Images/Icon/Crypto-exchange.svg';
import BlockNFT from '../../../Images/Icon/BlockNFTs.svg';
import Token from '../../../Images/Icon/Token.svg';
import Contract from '../../../Images/Icon/Contract-Security.svg';
import service from '../../../Images/service.png';
import '../BlockchainService/BlockchainService.css'

function Contact_ConServe(){
  const ConServeData = [
    { img: Contract, title: 'Smart Contracts Development ' },
    { img: CryExc, title: 'Crypto Exchange Development' },
    { img: web3Dev, title: 'Web3 Development' },
    { img: Token, title: 'Tokenization' },
    { img: BlockNFT, title: 'NFT Marketplace Development' },
    { img: Crypto, title: 'Crypto Marketing' },
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
                  <h2 className="ConServe-h2">BlockChain Services</h2>
                </div>
             
            </div>
            <div className="contServe-Row2">
              <div className="Servetext">
                <h2>
                Experience Revolutionary Blockchain Solutions!
                </h2>
                <p>
                Enjoy the best NFT App Development, Blockchain Services from a company with
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