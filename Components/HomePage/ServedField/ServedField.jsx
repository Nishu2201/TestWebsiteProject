import React from 'react';
import '../ServedField/ServedField.css';
import field from '../../../Images/solution_icon.png';
import Book from '../../../Images/Education.gif';
import Fitness from '../../../Images/Fitness.gif';
import Travel from '../../../Images/Travel.gif';
import Game1 from '../../../Images/Game.gif';
import Business from '../../../Images/Business.gif';
import Logistic from '../../../Images/Logistic.gif';
import Health from '../../../Images/Health.gif';
import Social from '../../../Images/Social.gif';


function ServedField(){
    const servedData = [
        { img: Book, title: 'Education' },
        { img: Travel, title: 'Travel' },
        { img: Social, title: 'Social Networking' },
        { img: Fitness, title: 'Fitness' },
        { img: Business, title: 'Business' },
        { img: Logistic, title: 'Logistics' },
        { img: Game1, title: 'Game' },
        { img: Health, title: 'Health Care' },
      ];
return(
    <section className='data'>
    <div className="field">
      <section className="served-field">
    <div className="field-row1">
                <em className="served-field_icon ">
                  <img
                    src={field}
                    alt="pics"
                    width="30"
                    className="img-fluid"
                  />
                </em>
                <h2 className="Head-Served">Industries We Serve</h2>
          </div>
          <div className="field-row2">
              <h2>
              Award winning full service digital agency that drives revenue
              </h2>
              <p
                className="Served-p"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1s',
                  animationDelay: '0.4s',
                  animationName: 'fadeInUpSlide',
                }}
              >
                "We at Airai, where creativity meets innovation in the world of game design and
development  as per your requirements.<br/>
&nbsp;&nbsp;We create beyond the box immersive digital experiences."
              </p>
              <div className='filed-btn'>
              <a href="/service"  className="button-link">  <button
    type="button"
    className="Servefield_btn"
  >
    Know more.
  </button></a></div>
</div>
              {/* <button
  type="button"
  className="field_btn"
>
  <em>
    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="fieldBtn-img" />
  </em>
  <span>Book A Demo</span>
</button> */}
<br/>
    <div className="served_blocks">
      <div className="served_blocks_row">
        {servedData.map((served, index) => (
          <div className="box-field" key={index}>
            <i>
              <img src={served.img} alt={served.title} />
              <p>{served.title}</p>
            </i>
          </div>
        ))}
      </div>
    </div>
            {/* </div> */}
            
          </section>
    </div>  </section>
);

}

export default ServedField;