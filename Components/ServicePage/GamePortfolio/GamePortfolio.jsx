import React, { useEffect, useState } from 'react';
import './GamePortfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from 'react-fast-marquee';
const GamePortfolio = () => {
  const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(0);
 const totalSlides = data.length;
    useEffect(() => {
      const intervalId = setInterval(() => {
        plusSlides(1);
      }, 5000);

      return () => clearInterval(intervalId);
    }, []);

    function plusSlides(n) {
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + n;
        if (newIndex >= totalSlides) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = totalSlides - 1;
        }
        return newIndex;
      });
    }
    function showSlide(index) {
    const item = data[index];
    return (
      <div key={index} className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: index === slideIndex ? 'block' : 'none' }}>
        <img className="BgImg-image" src={item.image} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />
        <div className="ImgSlide-content">
          <h3 className="ImgSlide-title">{item.title}</h3>
          <p className="ImgSlide-desc">{item.description}</p>
        </div>
        <div className="OtherText">
          <h1 className="OtherText-Content">{title} Designs</h1>
        </div>
      </div>
    );
  }

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });

      return () => {
        AOS.refresh();
      };
    }, []);

    return (
      <section className="images_Carousel">
        <div className="ImgSlider-container">
        <button className="Leftarrow-btn" onClick={() => plusSlides(-1)}>❮</button>
          <button className="Rightarrow-btn" onClick={() => plusSlides(1)}>❯</button>
          {/* Slide 1 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
            <img className="BgImg-imageGame" src={data[0].image} alt="ImgSlide_pic_0"  />
            <img className="ImgSlide-imageGame1" src={data[0].image1} alt="ImgSlide_pic_0" />
           {/* <div className='Movement' > */}
            <img className="ImgSlide-imageGame2" src={data[0].image2} alt="ImgSlide_pic_0" data-aos="fade-left" />
            <img className="ImgSlide-imageGame3" src={data[0].image3} alt="ImgSlide_pic_0" data-aos="fade-down" />
            <img className="ImgSlide-imageGame4" src={data[0].image4} alt="ImgSlide_pic_0"  data-aos="fade-right"/>
            {/* </div> */}
            <img className="ImgSlide-imageGame5" src={data[0].image5} alt="ImgSlide_pic_0" data-aos="fade-right" />
            <img className="ImgSlide-imageGame6" src={data[0].image6} alt="ImgSlide_pic_0" data-aos="fade-right" />
            <img className="ImgSlide-imageGame7" src={data[0].image7} alt="ImgSlide_pic_0" data-aos="fade-right" />
            <div className="ImgSlideMob-content">
              <h3 className="ImgSlideMob-title"dangerouslySetInnerHTML={{ __html:data[0].title}}/>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
            <img className="BgImg-imageGame" src={data[1].image} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imageGame8" src={data[1].image8} alt="ImgSlide_pic_1" data-aos="fade-down" />
            <img className="ImgSlide-imageGame9" src={data[1].image9} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imageGame10" src={data[1].image10} alt="ImgSlide_pic_1" data-aos="fade-right" />
            <img className="ImgSlide-imageGame11" src={data[1].image11} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <div className="ImgSlide2-content">
              <h3 className="ImgSlide2-title">{data[1].title}</h3>
            </div>
          </div>

          {/* Slide 3 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
            <img className="BgImg-imageGame" src={data[2].image} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-imageGame12" src={data[2].image12} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-imageGame13" src={data[2].image13} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-imageGame14" src={data[2].image14} alt="ImgSlide_pic_2" data-aos="fade-left" /> 
            <img className="ImgSlide-imageGame15" src={data[2].image15} alt="ImgSlide_pic_2" data-aos="fade-left" /> 
            <img className="ImgSlide-imageGame16" src={data[2].image16} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-imageGame17" src={data[2].image17} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-imageGame18" src={data[2].image18} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-imageGame19" src={data[2].image19} alt="ImgSlide_pic_2" data-aos="fade-left" />
           
          </div>

        </div>
      </section>
    );
  };

  const GameData = [
    {
        // title: 'MOBILE APP DESIGN & DEVELOPMENT',
        // description: 'Unique Websites for your Unique Needs',
        image: require('../../../Images/Web-designs/game1/bg.png'),
        image1: require('../../../Images/Web-designs/game1/logo_.png'),
        image2: require('../../../Images/Web-designs/game1/1.png'),
        image3: require('../../../Images/Web-designs/game1/2.png'),
        image4: require('../../../Images/Web-designs/game1/3.png'),
        image5: require('../../../Images/Web-designs/game1/4.png'),
        image6: require('../../../Images/Web-designs/game1/5.png'),
        image7: require('../../../Images/Web-designs/game1/6.png'),
      },
      {
        
        image: require('../../../Images/Web-designs/game3/bg.png'),
        image8: require('../../../Images/Web-designs/game3/1.png'),
        image9: require('../../../Images/Web-designs/game3/2.png'),
        image10: require('../../../Images/Web-designs/game3/3.png'),
        image11: require('../../../Images/Web-designs/game3/4.png'),
      },
      {
        image: require('../../../Images/Web-designs/game2/bg.png'),
        image12: require('../../../Images/Web-designs/game2/logo_.png'),
        image13: require('../../../Images/Web-designs/game2/screen1.png'),
        image14: require('../../../Images/Web-designs/game2/screen2.png'),
        image15: require('../../../Images/Web-designs/game2/screen3.png'),
        image16: require('../../../Images/Web-designs/game2/screen4.png'),
        image17: require('../../../Images/Web-designs/game2/screen5.png'),
        image18: require('../../../Images/Web-designs/game2/screen6.png'),
        image19: require('../../../Images/Web-designs/game2/screen7.png'),
      },
  ];

  return (
    <div className='Portfolio'>
      <ImageCarousel data={GameData} title="Game" />
    </div>
  );
};

export default GamePortfolio;
