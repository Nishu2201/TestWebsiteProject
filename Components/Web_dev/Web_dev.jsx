import React from "react";
import videoSource from '../../Images/Bg-V1 (5).mp4';
import How_we_work from "../HomePage/How_we_work/How_we_work";
import WhyChooseWeb from './WhyChooseWeb/WhyChooseWeb.jsx'
import ContactForm from "../Contact/Contact_Form/ContactForm";
import WebFront from "./WebFront/WebFront";
import WebCard from "./Web_cards/Webcard";
function MobileDev(){
    return(
        <>
        <div className="full-page-video">
   <video autoPlay loop muted>
     <source src={videoSource} type="video/mp4" />
     Your browser does not support the video tag.
   </video>
   </div>
         <WebFront/>
         <WebCard/>
        <How_we_work/>
        <WhyChooseWeb/>
        <ContactForm/>
     </>
    )
}

export default MobileDev;