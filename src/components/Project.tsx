import React from "react";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';

import '../assets/styles/Project.scss';

const galleryItems = [

  {
    image: mock01,
    title: "Leadership & Coordination",
    subtitle: "OSMECON Operations",
    description:
      "Managing teams, delegates, workshops, and technical coordination during high-pressure organizational environments."
  },

  {
    image: mock02,
    title: "Public Outreach",
    subtitle: "10+ Colleges Reached",
    description:
      "Conducted publicity and outreach campaigns across multiple medical colleges and districts for OSMECON."
  },

  {
    image: mock03,
    title: "Community Impact",
    subtitle: "1000+ Individuals",
    description:
      "Awareness drives, public engagement programs, vaccination initiatives, and educational outreach activities."
  },

  {
    image: mock04,
    title: "Team Leadership",
    subtitle: "Rotaract & OSMECON",
    description:
      "Experience in PR, teamwork, coordination, logistics, treasury responsibilities, and collaborative execution."
  },

  {
    image: mock05,
    title: "Conference Exposure",
    subtitle: "National-Level Experience",
    description:
      "Exposure to conference systems, delegate management, technical operations, and professional execution models."
  },

  {
    image: mock06,
    title: "Future Campaign Posters",
    subtitle: "Coming Soon",
    description:
      "Dedicated section for future campaign posters, event highlights, and visual campaign announcements."
  }
];

function Project() {

  return (

    <div className="projects-section" id="projects">

      <div className="projects-container">

        <div className="projects-header">

          <p className="section-tag">
            CAMPAIGN GALLERY
          </p>

          <h1>
            Moments, Leadership <br />
            & Campaign Highlights
          </h1>

          <p className="projects-description">
            A visual showcase of experiences, leadership moments,
            outreach initiatives, organizational work, and future
            campaign highlights throughout the journey towards
            OSMECON 2026.
          </p>

        </div>

        <div className="projects-grid">

          {galleryItems.map((item, index) => (

            <div className="project-card" key={index}>

              <div className="project-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="project-content">

                <p className="project-subtitle">
                  {item.subtitle}
                </p>

                <h2>
                  {item.title}
                </h2>

                <p className="project-description">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Project;