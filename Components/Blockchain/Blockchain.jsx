import React from "react";
import './Blockchain.css'
import BlockchainFront from "./BlockchainFront/BlockchainFront";
import BlockchainService from "./BlockchainService/BlockchainService";
import BlockchainWork from "./BlockchainWork/BlockchainWork";
import ChooseBlockchain from "./ChooseBlockchain/ChooseBlockchain";
import ContactForm from "../Contact/Contact_Form/ContactForm";

export default function Blockchain(){
    return(
        <>
        <BlockchainFront/>
        <div className="Block_service">
        <BlockchainService/>
        </div>
        <BlockchainWork/>
        <ChooseBlockchain/>
        <ContactForm/>
        </>
    )
}