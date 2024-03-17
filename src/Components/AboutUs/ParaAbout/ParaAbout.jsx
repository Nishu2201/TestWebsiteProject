import React from 'react';
import './ParaAbout.css'; // Import CSS file for styling
import AboutImgage from '../../../Images/softPic.jpg';
const ParaAbout = () => {
  return (
    <div className="para-about-container">
      <div className="Paraleft-div">
        <img src={AboutImgage} alt="Airai" class="abouUsImg" />
      </div>
      <div className="Pararight-div">
        <h2>We love transforming product ideas to digital realities.</h2>
        <p>Every game, in our opinion, ought to tell a unique story. We invest the time to fully comprehend
the core of every project, crafting an immersive experience. We infuse magic into every line of
code, whether crafting fantastical worlds or adopting cutting-edge technology. Even if technology serves as our foundation, we never forget about the human factor, which gives our
games happiness, excitement, and emotional connection.</p>
        <p>Collaborating with clients as partners,
communication, transparency and satisfaction are at the core of our strong relationships.

Join AIRAI, where every game is an adventure, and every project is an opportunity to elevate
digital experiences. Let's embark on a journey of endless possibilities, where the sky's not the
limit—it's just the beginning.</p>
        <ul className='aboutItems-ul'>
          <li className='aboutItem-li'>Mobile App Development</li>
          <li className='aboutItem-li'>Game Development</li>
        </ul>
        <ul className='aboutItems-ul'>
          <li className='aboutItem-li'>UI/UX Design</li>
          <li className='aboutItem-li'>Web Development</li>
          </ul>
      </div>
    </div>
  );
}

export default ParaAbout;
