import React from "react";
import DesignCard from "./Design_Cards/Design_cards";
import DesignFront from "./DesignFront/DesignFront";
import DesignWork from './DesignWork/Designwork.jsx';
import DesignChoose from "./DesignChoose/DesignChoose";
import ContactForm from '../Contact/Contact_Form/ContactForm.jsx'
import Designwork from "./DesignWork/Designwork.jsx";
export default function Design(){
    return(
        <>
        <DesignFront/>
        <DesignCard/>
        <Designwork/>
        <DesignChoose/>
        <ContactForm/>
        </>
    )
}