import React from "react";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';

import '../assets/styles/Project.scss';

const galleryItems = [

  {
    image: mock01,
    title: "CPR & Life Support Awareness",
    subtitle: "IIT Hyderabad",
    description:
      "Led a CPR and Life Support awareness session at IIT Hyderabad, turning knowledge into action. A lesson in leadership, communication, and staying calm under pressure."
  },

  {
    image: mock02,
    title: "Behind the Scenes of OSMECON",
    subtitle: "OSMECON Volunteer",
    description:
      "Worked behind the curtains of OSMECON and discovered what truly makes great events successful. Planning, precision, teamwork, and the courage to solve problems before they arise."
  },

  {
    image: mock03,
    title: "Medical Symposium 2025",
    subtitle: "Teamwork & Execution",
    description:
      "Sleepless nights, relentless teamwork, and a shared vision helped our team finish among the best. Proof that dedication, coordination, and collective effort can turn challenges into achievements."
  },

  {
    image: mock04,
    title: "Body Dysmorphia Awareness",
    subtitle: "Community Engagement",
    description:
      "Listened, guided, and supported young minds through conversations that truly mattered. Developed empathy, trust, and approachability—the qualities that help leaders connect with people, not just manage projects."
  },

  {
    image: mock05,
    title: "IDYE & MDYE",
    subtitle: "Learning Beyond Boundaries",
    description:
      "Met diverse minds, exchanged ideas, and embraced perspectives beyond my own. Strengthened the communication, adaptability, and networking skills needed to unite people and lead successful teams."
  },

  {
    image: mock06,
    title: "Service Through Action",
    subtitle: "Community Outreach",
    description:
      "Every act of service began with a simple goal—to make a difference, not seek recognition. Through community outreach, health awareness, and social service initiatives, I learned to organize, collaborate, and lead with empathy, purpose, and action."
  },

  {
    image: mock07,
    title: "Leadership Through Teamwork",
    subtitle: "College Events & Initiatives",
    description:
      "Leading events across my college life showed me that teamwork can achieve extraordinary things. I value approachability, coordination, open communication, and consistency because great teams perform best when every member feels heard, confident, and motivated."
  },

  {
    image: mock08,
    title: "Rotaract in Action",
    subtitle: "Service Above Self",
    description:
      "Every Rotaract activity reinforced the importance of teamwork, responsibility, and community service. Working alongside dedicated volunteers strengthened my ability to coordinate people, execute initiatives effectively, and contribute meaningfully toward a shared goal."
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
            Moments That Shaped <br />
            My Leadership Journey
          </h1>

          <p className="projects-description">
            Every experience teaches something valuable. From conferences,
            awareness campaigns, mentorship initiatives, community service,
            and student leadership activities, these moments helped shape
            the vision, teamwork, communication, and responsibility that I
            hope to bring to OSMECON 2026.
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