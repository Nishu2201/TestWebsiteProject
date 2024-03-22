import React from "react";
import GamePic from '../../../Images/GamePic.png';

import './GameFront.css';
function GameFront() {
  return (
    <>
      <div class="GameFront">
        <div class="Game-Baner">
            <h3  className="Gametitle">AIRAI: Where Innovation Meets Gaming- Mohali's Trusted</h3>
          <h1>
            <span> Game Development Partner</span>
          </h1>
          <p className="game_para">
          AIRAI is the place to go if you're looking for the best game development services in Mohali. We
feel immense pride in being known as the Best Game Development Company in Mohali, one of
the few pioneers in the mobile game development industry. We distinguish ourselves with our
unmatched experience and unwavering commitment to quality, having demonstrated our ability
to produce outstanding iOS, Android, HTML, PC, and other games for a large number of
satisfied gDevers.
          </p>
        </div>
        <div class="Gamedev">
          <img  src={GamePic} class="game-Img" alt="Contact-us"
          />
        </div>
      </div>
    </>
  );
}

export default GameFront;
