import React, { useEffect, useState } from 'react';
import './MobPortfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";

const MobPortfolio = () => {
  const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        plusSlides(1);
      }, 5000);

      return () => clearInterval(intervalId);
    }, []);

    function plusSlides(n) {
      setSlideIndex((prevIndex) => {
        const newIndex = (prevIndex + n) % data.length;
        return newIndex < 0 ? data.length - 1 : newIndex;
      });
    }

    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);

    function showSlides(n) {
      const slides = document.querySelectorAll(`.${title}-ImgSlide`);
      slides.forEach((slide, index) => {
        if (index === n) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }

    useEffect(() => {
      AOS.init({
        duration: 1200,
        once: false,
      });

      return () => {
        AOS.refresh();
      };
    }, []);

    return (
      <section className="images_Carousel">
        <div className="ImgSlider-container">
        <button className="Leftarrow-Mob" onClick={() => plusSlides(-1)}>❮</button>
          <button className="Rightarrow-Mob" onClick={() => plusSlides(1)}>❯</button>
          {/* Slide 1 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
            <img className="BgImg-imageMob" src={data[0].image} alt="ImgSlide_pic_0"  />
            <img className="ImgSlide-imagemob1" src={data[0].image1} alt="ImgSlide_pic_0"  data-aos="fade-left"/>
            <img className="ImgSlide-imagemob2" src={data[0].image2} alt="ImgSlide_pic_0" data-aos="fade-left" />
            <img className="ImgSlide-imagemob3" src={data[0].image3} alt="ImgSlide_pic_0" data-aos="fade-down" />
            <img className="ImgSlide-imagemob4" src={data[0].image4} alt="ImgSlide_pic_0"  data-aos="fade-right"/>
            <img className="ImgSlide-imagemob5" src={data[0].image5} alt="ImgSlide_pic_0" data-aos="fade-right" />
            <div className="ImgSlideMob-content">
              <h3 className="ImgSlideMob-title"dangerouslySetInnerHTML={{ __html:data[0].title}}/>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
            <img className="BgImg-image" src={data[1].image} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob6" src={data[1].image6} alt="ImgSlide_pic_1" data-aos="fade-down" />
            <img className="ImgSlide-imagemob7" src={data[1].image7} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob8" src={data[1].image8} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <div className="ImgSlideMob2-content">
              <h3 className="ImgSlideMob2-title"dangerouslySetInnerHTML={{ __html:data[1].title}}/>
            </div>
          </div>
 {/* Slide 3 */}
 <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
            <img className="BgImg-image" src={data[1].image} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob9" src={data[2].image9} alt="ImgSlide_pic_1" data-aos="fade-down" />
            <img className="ImgSlide-imagemob10" src={data[2].image10} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob11" src={data[2].image11} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob12" src={data[2].image12} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob13" src={data[2].image13} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-imagemob14" src={data[2].image14} alt="ImgSlide_pic_1" data-aos="fade-left" />
            {/* <div className="ImgSlideMob2-content">
              <h3 className="ImgSlideMob2-title"dangerouslySetInnerHTML={{ __html:data[1].title}}/>
            </div> */}
          </div>
        

          {/* Add more slides as needed */}
        </div>
      </section>
    );
  };

  const MobData = [
    {
        title: 'MOBILE APP DESIGN & DEVELOPMENT',
        description: 'Unique Websites for your Unique Needs',
        image: require('../../../Images/Web-designs/app1/bg.png'),
        image1: require('../../../Images/Web-designs/app1/1.png'),
        image2: require('../../../Images/Web-designs/app1/2.png'),
        image3: require('../../../Images/Web-designs/app1/3.png'),
        image4: require('../../../Images/Web-designs/app1/4.png'),
        image5: require('../../../Images/Web-designs/app1/5.png'),
      },
    {
      title: 'WE <br> <span>DESIGN </span><br>WE <br> <span>DEVELOP</span> <br>MOBILE APPS',
      description: 'Another description for the second web design.',
      image: require('../../../Images/Web-designs/app2/BG.png'),
      image6: require('../../../Images/Web-designs/app2/1.png'),
      image7: require('../../../Images/Web-designs/app2/2.png'),
      image8: require('../../../Images/Web-designs/app2/3.png'),
    },
    {
      // title: 'GROW YOUR BUSINESS WITH US ',
      // description: 'Yet another description for the third web design.',
      // image: require('../../Images/Web-designs/app3/bg_.png'),
      image9: require('../../../Images/Web-designs/app3/Phone_01.png'),
      image10: require('../../../Images/Web-designs/app3/Phone_02.png'),
      image11: require('../../../Images/Web-designs/app3/Phone_03.png'),
      image12: require('../../../Images/Web-designs/app3/Phone_04.png'),
      image13: require('../../../Images/Web-designs/app3/Phone_05.png'),
      image14: require('../../../Images/Web-designs/app3/Phone_06.png'),
    },
  ];

  return (
    <div className='Portfolio'>
      <ImageCarousel data={MobData} title="Mobile" />
    </div>
  );
};

export default MobPortfolio;
