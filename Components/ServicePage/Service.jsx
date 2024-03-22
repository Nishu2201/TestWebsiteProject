import React from "react";
import ServiceFront from "./ServiceFront/ServiceFront";
// import ProjectSlider from "./ProjectSlider/ProjectSlider";
import WebPortfolio from './Portfolio/WebPortfolio';
import MobPortfolio from './Mobile-Portfolio/MobPortfolio';
import GamePortfolio from './GamePortfolio/GamePortfolio';
import How_we_work   from "../HomePage/How_we_work/How_we_work"
import ChooseUs from "../ChooseUs/ChooseUs"
import ContactForm from "../Contact/Contact_Form/ContactForm";
function Service(){
    return(
        <>
        <ServiceFront/>
      <WebPortfolio/>
      <MobPortfolio/>
      <GamePortfolio/>
        {/* <ProjectSlider/> */}
        <How_we_work/>
        <ChooseUs/>
        <ContactForm/>
        </>
    )
}

export default Service;