import React from "react";
import '../HomePage/Home.css';
import MainSlide from "./mainSlide/MainSlide";
import Marquee from "./Marquee/Marquee_effect";
import Innovator from "./Innovator/Innovator";
import OurService from "./OurServices/OurService";
import ServedField from "./ServedField/ServedField";
import Tech from "./Tech/Tech";
import How_we_work from "./How_we_work/How_we_work";
import ChooseUs from "../ChooseUs/ChooseUs";
function Home(){
    return(
        <>
        <MainSlide/>
        <Marquee/>
        <Innovator/>
        <OurService/>
        <ServedField/>
        <Tech/>
        <How_we_work/>
        <ChooseUs/>
        </>
    )
}
export default Home;