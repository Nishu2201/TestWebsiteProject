import React, { useEffect, useState } from 'react';
import './WebPortfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";

 const WebPortfolio = () => {
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
        } 
      });
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
        <button className="Leftarrow-web" onClick={() => plusSlides(-1)}>❮</button>
          <button className="Rightarrow-web" onClick={() => plusSlides(1)}>❯</button>
          {/* Slide 1 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
            <img className="BgImg-image" src={data[0].image} alt="ImgSlide_pic_0" data-aos="fade-left" />
            <img className="ImgSlide-image1" src={data[0].image1} alt="ImgSlide_pic_0" data-aos="fade-left" />
            <img className="ImgSlide-image2" src={data[0].image2} alt="ImgSlide_pic_0" data-aos="fade-left" />
            <div className="ImgSlide-content">
              <h3 className="ImgSlide-title"dangerouslySetInnerHTML={{ __html:data[0].title}}/>
              <p className="ImgSlide-desc">{data[0].description}</p>
            </div>
            {/* <div className="OtherText">
              <h1 className="OtherText-Content">{title} Designs</h1>
            </div> */}
          </div>

          {/* Slide 2 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
            <img className="BgImg-image" src={data[1].image} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-image3" src={data[1].image3} alt="ImgSlide_pic_1" data-aos="fade-down" />
            <img className="ImgSlide-image4" src={data[1].image4} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <img className="ImgSlide-image5" src={data[1].image5} alt="ImgSlide_pic_1" data-aos="fade-left" />
            <div className="ImgSlide2-content">
              <h3 className="ImgSlide2-title">{data[1].title}</h3>
            </div>
          </div>

          {/* Slide 3 */}
          <div className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
            <img className="BgImg-image" src={data[2].image} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-image6" src={data[2].image6} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <img className="ImgSlide-image7" src={data[2].image7} alt="ImgSlide_pic_2" data-aos="fade-left" />
            <div className="ImgSlide3-content">
              <h3 className="ImgSlide3-title"dangerouslySetInnerHTML={{ __html:data[2].title}}/>
              {/* <p className="ImgSlide3-desc">{data[2].description}</p> */}
            </div>
            {/* <div className="OtherText">
              <h1 className="OtherText-Content">{title} Designs</h1>
            </div> */}
          </div>

          {/* Add more slides as needed */}
        </div>
      </section>
    );
  };

  const webData = [
    {
      title: 'CRAFTING <br>YOUR DIGITAL VISION',
      description: 'Unique Websites for your Unique Needs',
      image: require('../../../Images/Web-designs/web 1/bg.png'),
      image1: require('../../../Images/Web-designs/web 1/1.png'),
      image2: require('../../../Images/Web-designs/web 1/2.png'),
    },
    {
      title: 'Design and Develop Websites',
      description: 'Another description for the second web design.',
      image: require('../../../Images/Web-designs/web 2/bg 2.png'),
      image3: require('../../../Images/Web-designs/web 2/1.png'),
      image4: require('../../../Images/Web-designs/web 2/2.png'),
      image5: require('../../../Images/Web-designs/web 2/3.png'),
    },
    {
      title: 'GROW <br>YOUR BUSINESS WITH US ',
      description: 'Yet another description for the third web design.',
      image: require('../../../Images/Web-designs/web 3/bg.png'),
      image6: require('../../../Images/Web-designs/web 3/1.png'),
      image7: require('../../../Images/Web-designs/web 3/2.png'),
    },
  ];

  return (
    <div className='Portfolio'>
      <ImageCarousel data={webData} title="Web" />
    </div>
  );
};


export default WebPortfolio;