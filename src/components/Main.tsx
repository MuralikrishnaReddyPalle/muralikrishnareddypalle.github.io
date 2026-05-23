import React, { useEffect } from "react";

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import portfolioImage from '../assets/images/portfolio_dp.png';

import '../assets/styles/Main.scss';

function Main() {

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY;

      const portrait = document.querySelector(
        '.candidate-image img'
      ) as HTMLElement;

      if (portrait) {

        const blurValue =
          Math.min(scrollY / 180, 8);

        const opacityValue =
          Math.max(0.92 - scrollY / 5000, 0.45);

        const scaleValue =
          1 + Math.min(scrollY / 12000, 0.03);

        portrait.style.filter =
          `blur(${blurValue}px) drop-shadow(0 30px 60px rgba(0,0,0,0.14))`;

        portrait.style.opacity =
          `${opacityValue}`;

        portrait.style.transform =
          `scale(${scaleValue})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (

    <div className="container" id="home">

      <div className="about-section">

        {/* HERO PORTRAIT */}

        <div className="hero-left">

          <div className="candidate-image">

            <img
              src={portfolioImage}
              alt="Candidate Portrait"
            />

          </div>

        </div>

        {/* HERO CONTENT */}

        <div className="content">

          <h1>

          <span className="line-one">
            PALLE
          </span>

          <span className="line-two">
            MURALIKRISHNA
          </span>

          <span className="line-three">
            REDDY
          </span>

        </h1>

          <h2>
            Candidate for Organising Secretary
          </h2>

          <div className="campaign-badge">
            OSMECON 2026 CORE TEAM ELECTION
          </div>

          <p className="campaign-line">
            Leadership. Dedication. Vision.
          </p>

          <p className="campaign-description">

            Building OSMECON 2026 through teamwork,
            professionalism, inclusiveness,
            and experience gained through years
            of organizational leadership and student engagement.

          </p>

          <div className="stats-row">

            <div className="stat-card">

              <EmojiEventsIcon />

              <h3>3+</h3>

              <p>
                Years of Leadership
              </p>

            </div>

            <div className="stat-card">

              <GroupsIcon />

              <h3>1000+</h3>

              <p>
                People Impacted
              </p>

            </div>

            <div className="stat-card">

              <AccountBalanceIcon />

              <h3>10+</h3>

              <p>
                Colleges Reached
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Main;