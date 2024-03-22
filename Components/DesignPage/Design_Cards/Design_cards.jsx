import React from 'react';
import './Design_cards.css';
import UIUx from '../../../Images/Ui-ux.png';
import LogoDes from '../../../Images/Logo-ICon.png';
import Landing from '../../../Images/Landing-pic.png';
// import LogoICon from '../Images/Logo-ICon.jpg';
import WebdeV from '../../../Images/Web_dev.png';
import WebDes from '../../../Images/WebDes.png';
import Graphic from '../../../Images/Graphic.png';
import Model from '../../../Images/3d modeling.png';
import Props from '../../../Images/Props.png';
import D from '../../../Images/3d_model.png';
import Nft from '../../../Images/NFT.png';
import Avatar from '../../../Images/Avatar.png';
import GArt from '../../../Images/GameArt.png';
import EnvDev from '../../../Images/Env-des.png';
import GAsset from '../../../Images/GAsset.png';
import Chracter from '../../../Images/Chracter.png';
const DesignCard = () => {
    return (
      <>
      <div className="design_card">
            <h2 className="desCard-heads">Design Services</h2>
            <div className="CardContainer">
                <div className="DesCards-Items DeCard-1">
                <div className='headPart'>
                    <div className="CardIcons">
                        <img
                            src={Graphic}
                            alt="pics"
                            width="30"
                            className="DesH1-Pics" />
                        <h3 className="Card-h3head"> Graphic Designing</h3>

                    </div>
                    </div>
                    <p className="Card-datas"> With captivating and engaging visuals, our talented graphic
                        designers bring your ideas to reality. We make sure that every design, from marketing
                        brochures to branding materials, perfectly conveys your unique voice and message.
                    </p>
                </div>
                <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                    <div className="CardIcons">
                        <img
                            src={UIUx}
                            alt="pics"
                            width="30"
                            className="DesPicture2" />
                        {/* <h3 className="Card2-h3head"> UI/UX  Design</h3> */}

                        <h3 className=" Card-2h3" >UI/UX (App, Website, Game design)</h3>
                    </div></div>
                    <p className="Card2-datas">  UI/UX is an essential component of all we do in the
                        design of apps, websites, and games. Our UI/UX designers create user-friendly
                        interfaces that improve usability and make consumers satisfied. We make sure every
                        interaction—whether it's through a game, website, or mobile app—is seamless and fun.
                    </p>
                </div>
                <div className="DesCards-Items DeCard-2">
                <div className='headPart'>
                    <div className="CardIcons">

                        <img
                            src={LogoDes}
                            alt="pics"
                            width="30"
                            className="DesH1-Pics" />
                        <h3 className="Card-h3head">Logo Design</h3>
                    </div> </div>
                    <p className="Card-datas">The foundation of your brand identification is your logo. Our designers
                        create original, unique, creative and memorable logos that effectively conveys your
                        brand's values to your target audience.</p>
                </div>
            </div>
        </div>
        <div className="design_card">
                <h2 className="desCard-heads">Web Services</h2>
                <div className="CardContainer">
                    <div className="DesCards-Items DeCard-1">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={WebDes}
                                alt="pics"
                                width="30"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head"> Web Design</h3>
</div>
                        </div>
                        <p className="Card-datas"> Use our unique web design solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.</p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={Landing}
                                alt="pics"
                                width="25"
                                className="DesH1-Pics" />
                            {/* <h3 className="Card2-h3head"> UI/UX  Design</h3> */}

                            <h3 className="Card-h3head"> Landing Page</h3>
                        </div>
                        </div>
                        <p className="Card-datas">  Use our eye-catching landing page designs to make a strong first
impression. We optimize every component to increase engagement and boost
conversions, making it easier for you to meet your marketing goals and objectives.
      </p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={WebdeV}
                                alt="pics"
                                width="30"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head">Web Development</h3>
                        </div>
                        </div>
                        <p className="Card2-datas"> Use our unique web Development solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.</p>
                    </div>
                </div>
            </div>
            <div className="design_card">
                <h2 className="desCard-heads">Model Design Services</h2>
                <div className="CardContainer">
                    <div className="DesCards-Items DeCard-1">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={Model}
                                alt="pics"
                                width="35"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head"> 3D modeling</h3>

                        </div>
                        </div>
                        <p className="Card-datas">  With the help of our expert modeling services, transport your audience to
stunning 3D landscapes. We carefully create 3D models of things, people, and places to
give your creative ideas depth and reality.</p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={Chracter}
                                alt="pics"
                                width="35"
                                className="DesH1-Pics" />
                            {/* <h3 className="Card2-h3head"> UI/UX  Design</h3> */}

                            <h3 className="Card-h3head"> Character Modeling</h3>
                        </div> 
                        </div>
                        <p className="Card2-datas">  Our character modeling expertise brings your fictional creations to
life with personality and charm For storytelling, gaming, or animation, we design
enduring characters who connect with your viewership.
      </p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">

                            <img
                                src={Props}
                                alt="pics"
                                width="38"
                                height="38"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head">Prop modeling</h3>
                        </div>
                        </div>
                        <p className="Card-datas"> Use our unique web Development solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.</p>
                    </div>
                </div>
            </div>
            <div className="design_card">
                <h2 className="desCard-heads">Game Development Services</h2>
                <div className="CardContainer">
                    <div className="DesCards-Items DeCard-1">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={EnvDev}
                                alt="pics"
                                width="30"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head"> Environment Design</h3>
</div>
                        </div>
                        <p className="Card2-datas"> Transport your audience to immersive worlds with our
environment design services. Whether it's for film, gaming, or virtual reality, we create
rich and detailed environments that enhance storytelling and immersion.
      </p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={GAsset}
                                alt="pics"
                                width="35"
                                className="DesH1-Pics" />
                            {/* <h3 className="Card2-h3head"> UI/UX  Design</h3> */}

                            <h3 className="Card-h3head"> Game Asset Design</h3>
                        </div>
                        </div>
                        <p className="Card2-datas">   Level up your game development with our game asset design
services. From characters to props to environments, we create high-quality assets that
elevate the visual appeal and gameplay experience of your game.
      </p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">

                            <img
                                src={GArt}
                                alt="pics"
                                width="38"
                                height="36"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head">Game Art</h3>
                        </div>
                        </div>
                        <p className="Card-datas"> Our game art services cover everything from concept art to final assets,
ensuring your game stands out with captivating visuals and immersive aesthetics.
Whether it's 2D or 3D, we bring your game world to life with creativity and skill.</p>
                    </div>
                </div>
            </div>
            <div className="design_card">
                <h2 className="desCard-heads"> Modeling & Rendering Services</h2>
                <div className="CardContainer">
                    <div className="DesCards-Items DeCard-1">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={D}
                                alt="pics"
                                width="30"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head"> 3D Modeling & Rendering</h3>
</div>
                        </div>
                        <p className="Card2-datas">  With the help of our expert modeling services, transport your audience to
stunning 3D landscapes. We carefully create 3D models of things, people, and places to
give your creative ideas depth and reality.
Showcase your designs with photorealistic 3D renderings that wow your
audience. </p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">
                            <img
                                src={Avatar}
                                alt="pics"
                                width="25"
                                className="DesH1-Pics" />
                            {/* <h3 className="Card2-h3head"> UI/UX  Design</h3> */}

                            <h3 className="Card-h3head"> 3D Avatar</h3>
                        </div>
                        </div>
                        <p className="Card-datas">   Personalize your digital presence with custom 3D avatars that reflect your
unique identity. Whether it's for gaming, virtual events, or social media, we create
avatars that capture your personality and style.
      </p>
                    </div>
                    <div className="DesCards-Items DeCard-2">
                    <div className='headPart'>
                        <div className="CardIcons">

                            <img
                                src={Nft}
                                alt="pics"
                                width="38"
                                height="40"
                                className="DesH1-Pics" />
                            <h3 className="Card-h3head"> NFT Creation (2D, 3D)</h3>
                        </div>
                        </div>
                        <p className="Card2-datas"> Ride the wave of the digital art revolution with our NFT creation
services. Whether it's 2D illustrations or 3D sculptures, we help you tokenize your
creations and unlock new possibilities in the world of blockchain art.</p>
                    </div>
                </div>
            </div>
            </>
    );
  };
  
  export default DesignCard;
