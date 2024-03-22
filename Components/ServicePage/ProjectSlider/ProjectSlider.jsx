import React, {useState, useEffect} from "react";
import './ProjectSlider.css';



const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(1);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        plusSlides(1);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    function showSlides(n) {
      const slides = document.querySelectorAll(`.${title}-ImgSlide`);
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      slides[slideIndex - 1].style.display = 'block';
    }
  
    function plusSlides(n) {
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + n;
        return newIndex > data.length ? 1 : newIndex < 1 ? data.length : newIndex;
      });
    }
  
    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);
  
    return (
      
      <section className="images_Carousel">
        <div className="ImgSlider-container">
          {data.map((item, index) => (
            <div key={index} className={`ImgSlide  ${title}-ImgSlide`}>
             <img className="ImgSlide-image" src={item.image} alt={`ImgSlide_pic_${index}`} />
              {/* <div className="ImgSlide-content">
                <h3 className="ImgSlide-title">{item.title}</h3>
                <p className="ImgSlide-desc">{item.description}</p>
              </div> */}
              {/* <div className="OtherText">
                <h1 className="OtherText-Content">{title} Designs</h1>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    );
          }
function ProjectSlider(){
    const mobileAppData = [
        {
          title: 'Mobile-App 1',
          description: 'Transform your ideas into effective mobile applications. Our team of experienced and skilled developers specializes in developing innovative and user-friendly mobile apps for both Android and iOS platforms. With our cutting-edge solutions, you can stay ahead of the competition in the app market.',
          image: require('../../../Images/app/App1.jpg'),
         
        },
        {
          title: 'Mobile-App 2',
          description: 'Another description for the second mobile app.',
          image: require('../../../Images/app/App2.png'),
        },
        {
          title: 'Mobile-App 3',
          description: 'Yet another description for the third mobile app.',
          image: require('../../../Images/app/App3.png'),
        },
      ];
      
      const webData = [
        {
          title: 'Web Design 1',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: require('../../../Images/game/1.png'),       
        },
        {
          title: 'Web Design 2',
          description: 'Another description for the second web design.',
          image: require('../../../Images/game/2.png'),        },
        {
          title: 'Web Design 3',
          description: 'Yet another description for the third web design.',
          image: require('../../../Images/game/3.png'),        },
      ];
      
      const gameData = [
        {
          title: 'Game 1',
          description: 'Create engaging gaming experiences for your audience. Our game production service combines technological know-how with creativity to create visually appealing and captivating games for a variety of platforms. With our tailored solutions, your gaming initiatives will be elevated.',
          image: require('../../../Images/game/4.png'),        },
        {
          title: 'Game 2',
          description: 'Another description for the second game.',
          image: require('../../../Images/game/5.png'),        },
        {
          title: 'Game 3',
          description: 'Yet another description for the third game.',
          image: require('../../../Images/app/4.png'),        },
      ];
      const designData = [
        {
          title: '3D Modeling',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: require('../../../Images/app/5.png'),        },
        {
          title: 'UI/UX Design',
          description: 'Another description for the second blockchain design.',
          image: require('../../../Images/app/App3.png'),        },
        {
          title: 'Character Modeling',
          description: 'Yet another description for the third blockchain design.',
          image: require('../../../Images/app/App3.png'),        },
      ];
    return(
       

          <div className='Portfolio'>
          <ImageCarousel data={mobileAppData} title="Mobile-App" />
          <ImageCarousel data={webData} title="Web" />
          <ImageCarousel data={gameData} title="Game" />
          <ImageCarousel data={designData} title="Our" />
        </div>
    )
}

export default ProjectSlider;