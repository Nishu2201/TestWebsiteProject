import React,{useState,useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../mainSlide/MainSlide.css';

const slides = [
    {
      title: "Mobile App Development",
      description: "<h3>Delivering Top-Notch <span><br/>App Development Services</span></h3><p>Transform ideas into user-friendly apps, staying competitive <br/>in the market.</p>",
      image: require("../../../assets/AppDev.png"),
    },
    {
      title: "Web Development",
      description: "<h3>Delivering Top-Notch <span><br/>Web Development Services</span></h3><p>Boost online visibility with sleek designs and powerful websites.</p>",
      image: require("../../../assets/Web.png"),
    },
    {
      title: "Game Development",
      description: "<h3>Revolutioning <span >Game <br/>Development Services</span></h3><p>Create engaging games for various platforms with our tech <br/>and creativity.</p>",
      image: require("../../../assets/Game (1).png"),
    },
    {
      title: "Design",
      description: "<h3>All your <span>Graphic/Game <br/>Designing </span>At one Place!</h3><p>Craft captivating visuals and UIs for immersive experiences.</p>",
      image: require("../../../assets/Design.png"),
    },
    {
      title: "Blockchain",
      description: "<h3>Your security with <span><br/>BlockChain Development<br/> Services</span></h3><p>Embrace the future with improved security and efficiency <br/> through  smart contracts.</p>",
      image: require("../../../assets/Blockchain.png"),
    },
  ];

function MainSlide(){
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
    
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
    return(
<div>
        <div className="header-row">
            <div className="slide-text">
              <div class="slidesDev-title ">
                {/* <div class="slidesDev-icon">
                <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                </div> */}
                <h2 className="slide-title">{slides[currentSlide].title} </h2>
                {/* <h3 >Increase Your Online Presence: Mohali's Top </h3> */}
              </div>
             
              <div className="slide-description" dangerouslySetInnerHTML={{ __html: slides[currentSlide].description }} />
          </div>
            <div className="slide-image-container">
              <img src={slides[currentSlide].image} alt="Slide" className="slide-image" />
            </div>
        </div>
</div>
    )
}
export default MainSlide;