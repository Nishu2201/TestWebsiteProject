import React from "react";
import '../Marquee/Marquee_effect.css';
import Marquee from 'react-fast-marquee';
import card from '../../../Images/cardano-logo.png';
import cash from '../../../Images/cashback-logo.png';
import frubi from '../../../Images/frubi-logo.png';
import funko from '../../../Images/funko-logo.png';
import hsc from '../../../Images/hsc_logo.png';
import luxel from '../../../Images/luxel-logo.png';
import microsoft from '../../../Images/microsoft-logo.png';
// import pg from '../Images/pg-logo.png';
// import stanford from '../Images/stanford-logo.png';
// import swiggy from '../Images/swiggy-logo.png';
// import upwork from '../Images/upwork-logo.png';

function Marquee_effect(){
    return(
        <section className="Marquee">
        <div>
            <Marquee className="marquee-container" speed={250}>
              <div className="image-wrapper" >
              <img src={card} alt="pics" />
              </div>
              <div className="image-wrapper">
                {/* <div className="overlay"></div> */}
            <img src={cash} alt="pics" height={70} />
            </div>
            <div className="image-wrapper" >
            <img src={frubi} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={funko} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={hsc} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={luxel} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={microsoft} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            {/* <img src={pg} alt="pics" height={70}/> */}
            </div>
            <div className="image-wrapper">
            {/* <img src={stanford} alt="pics" height={70}/> */}
            </div>
            <div className="image-wrapper">
            {/* <img src={swiggy} alt="pics" height={70}/> */}
            </div>
            <div className="image-wrapper">
            {/* <img src={upwork} alt="pics"height={70}/> */}
            </div>
            
    
            {/* <img src={card} alt="pics"/>
            <img src={card} alt="pics"/> */}
        
            </Marquee>
          </div>
          </section>
    )
}

export default Marquee_effect;