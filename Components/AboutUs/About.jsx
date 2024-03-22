import React from "react";
import AboutFront from "./AboutFront/AboutFront";
import OurGoal from "./OurGoals/OurGoal";
import ParaAbout from "./ParaAbout/ParaAbout";
import '../Contact/Contact_Service/Contact_Service.css'
import Contact_Services from "../Contact/Contact_Service/Contact_Services.jsx"
import How_we_work from "../HomePage/How_we_work/How_we_work";
import ContactForm from "../Contact/Contact_Form/ContactForm";
function About(){
    return(
     <>
     <AboutFront/>
     <OurGoal/>
     <ParaAbout/>
     <div className="Contact_service">
    <Contact_Services/>
    </div>
     <How_we_work/>
     <ContactForm/>
     </>   
    )
}

export default About;