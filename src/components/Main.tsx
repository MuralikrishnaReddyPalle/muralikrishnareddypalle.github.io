import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import portfolioImage from '../assets/images/portfolio_dp.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">

        <div className="image-wrapper">
          <img src={portfolioImage} alt="Candidate Portrait" />
        </div>

        <div className="content">

          <div className="campaign-badge">
            OSMECON 2026 CORE TEAM ELECTION
          </div>

          <h1>
            PALLE <br />
            MURALIKRISHNA REDDY
          </h1>

          <h2>
            Candidate for Organising Secretary
          </h2>

          <p className="campaign-line">
            Leadership. Dedication. Vision.
          </p>

          <p className="campaign-description">
            Building OSMECON 2026 with teamwork,
            professionalism, inclusiveness, and experience
            gained through years of organizational leadership
            and student engagement.
          </p>

          <div className="stats-row">

            <div className="stat-card">
              <EmojiEventsIcon />
              <h3>3+</h3>
              <p>Years of Experience</p>
            </div>

            <div className="stat-card">
              <GroupsIcon />
              <h3>1000+</h3>
              <p>People Impacted</p>
            </div>

            <div className="stat-card">
              <InstagramIcon />
              <h3>10+</h3>
              <p>Colleges Reached</p>
            </div>

          </div>

          <div className="hero-buttons">
            <a href="#timeline">My Journey</a>
            <a href="#vision">My Vision</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;