import React from "react";
import ContactFront from "./Contact_front/ContactFront";
import ContactForm from "./Contact_Form/ContactForm";
import Contact_Services from "./Contact_Service/Contact_Services";
import How_we_work from "../HomePage/How_we_work/How_we_work"
import ChooseUs from "../ChooseUs/ChooseUs"

import "../Contact/Contact.css";

function Contact(){
  return(
    <>
    <ContactFront/>
    <ContactForm/>
    <div className="Contact_service">
    <Contact_Services/>
    </div>
    <How_we_work/>
    <ChooseUs/>
    </>
  )
}
export default Contact;