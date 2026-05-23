import React from "react";

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CampaignIcon from '@mui/icons-material/Campaign';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import VerifiedIcon from '@mui/icons-material/Verified';
import HandshakeIcon from '@mui/icons-material/Handshake';

import '../assets/styles/Expertise.scss';

const leadershipCards = [
  {
    icon: <AutoAwesomeIcon />,
    title: "Leadership with Vision",
    description:
      "Focused on building an OSMECON driven by teamwork, professionalism, inclusiveness, and long-term growth."
  },

  {
    icon: <CrisisAlertIcon />,
    title: "Crisis Management",
    description:
      "Experienced in handling high-pressure situations, real-time coordination, and fast decision making during major events."
  },

  {
    icon: <CampaignIcon />,
    title: "Public Relations",
    description:
      "Strong communication, outreach, and networking experience across conferences, colleges, and organizational platforms."
  },

  {
    icon: <Diversity3Icon />,
    title: "Team Coordination",
    description:
      "Belief in collaborative leadership where every team member feels included, valued, and motivated."
  },

  {
    icon: <VerifiedIcon />,
    title: "Commitment & Accountability",
    description:
      "Dedicated towards responsible leadership, consistency, transparency, and professional execution."
  },

  {
    icon: <HandshakeIcon />,
    title: "People First Approach",
    description:
      "Building stronger teams through communication, respect, adaptability, and openness to continuous improvement."
  }
];

function Expertise() {

  return (
    <div className="container" id="expertise">

      <div className="leadership-section">

        <div className="leadership-header">

          <p className="section-tag">
            LEADERSHIP & QUALITIES
          </p>

          <h1>
            Leadership That Builds Teams
          </h1>

          <p className="section-description">
            Organising OSMECON is not just about managing an event —
            it is about bringing people together, creating strong teams,
            handling responsibilities professionally, and building an
            environment where everyone feels motivated and valued.
          </p>

        </div>

        <div className="leadership-grid">

          {leadershipCards.map((card, index) => (

            <div className="leadership-card" key={index}>

              <div className="card-icon">
                {card.icon}
              </div>

              <h3>
                {card.title}
              </h3>

              <p>
                {card.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Expertise;