import React from 'react';
import { Reset } from 'styled-reset';

import './Intro.css';

const Intro = () => {
  return (
    <div className="main">
      <Reset />
      <div className="intro">Rogier Verkaik</div>
      <div className="tagline">Web Developer | Rotterdam | Javascript</div>
      <div className="icons-social">
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/rogierv">
          <i className="fab fa-github" />
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rogierverkaik">
          <i class="fab fa-linkedin" />
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.strava.com/athletes/574269">
          <i class="fab fa-strava" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
