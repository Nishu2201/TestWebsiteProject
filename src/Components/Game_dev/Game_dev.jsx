import React from "react";
import videoSource from '../../Images/Bg-V1 (5).mp4';
import How_we_work from "../HomePage/How_we_work/How_we_work";
import WhyChooseGame from './WhyChooseGame/WhyChooseGame.jsx';
import ContactForm from "../Contact/Contact_Form/ContactForm";
import GameFront from "./GameFront/GameFront";
import Gamecard from "./Game_cards/Gamecard.jsx";
function GameDev(){
    return(
        <>
        <div className="full-page-video">
   <video autoPlay loop muted>
     <source src={videoSource} type="video/mp4" />
     Your browser does not support the video tag.
   </video>
   </div>
         <GameFront/>
         <Gamecard/>
        <How_we_work/>
        <WhyChooseGame/>
        <ContactForm/>
     </>
    )
}

export default GameDev;