import React from "react";
import videoSource from '../../Images/Bg-V1 (5).mp4';
import PageImg from '../../Images/MobilePic.png';

import '../Mobile_dev/Mobile_dev.css';
import MobileCard from "./Mobile_cards/Mobilecard";
import How_we_work from "../HomePage/How_we_work/How_we_work";
import WhyChooseMobile from "./WhyChooseMobile/WhyChooseMobile";
import ContactForm from "../Contact/Contact_Form/ContactForm";
import MobileFront from "./MobileFront/MobileFront";
function MobileDev(){
    return(
        <>
        <div className="full-page-video">
   <video autoPlay loop muted>
     <source src={videoSource} type="video/mp4" />
     Your browser does not support the video tag.
   </video>
   </div>
         <MobileFront/>
        <MobileCard/>
        <How_we_work/>
        <WhyChooseMobile/>
        <ContactForm/>
     </>
    )
}

export default MobileDev;