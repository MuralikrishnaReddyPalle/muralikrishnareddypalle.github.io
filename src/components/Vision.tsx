import React from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import '../assets/styles/Vision.scss';

function Vision() {

  return (

    <div className="vision-section" id="vision">

      <div className="vision-container">

        <div className="vision-top">

          <p className="vision-tag">
            THE VISION FOR OSMECON 2026
          </p>

          <h1>
            Building An Event <br />
            Defined By Excellence
          </h1>

          <p className="vision-description">

            OSMECON 2026 should not just be an event —
            it should become an experience that reflects
            professionalism, inclusiveness, innovation,
            teamwork, and strong organizational coordination.

            The vision is to create a platform where every
            participant, organizer, delegate, and institution
            feels involved, represented, and inspired.

          </p>

        </div>

        <div className="vision-grid">

          <div className="vision-card">

            <div className="vision-icon">
              <VisibilityIcon />
            </div>

            <h3>
              Professional Execution
            </h3>

            <p>

              Ensuring smooth coordination,
              structured management,
              responsible delegation,
              and disciplined execution
              across all departments.

            </p>

          </div>

          <div className="vision-card">

            <div className="vision-icon">
              <Diversity3Icon />
            </div>

            <h3>
              Inclusive Teamwork
            </h3>

            <p>

              Building a collaborative environment
              where every member contributes,
              participates, communicates,
              and grows together as a team.

            </p>

          </div>

          <div className="vision-card">

            <div className="vision-icon">
              <WorkspacePremiumIcon />
            </div>

            <h3>
              Strong Representation
            </h3>

            <p>

              Enhancing the visibility,
              reputation, and outreach
              of OSMECON 2026 across colleges,
              institutions, and participants.

            </p>

          </div>

          <div className="vision-card">

            <div className="vision-icon">
              <AutoAwesomeIcon />
            </div>

            <h3>
              Innovation & Experience
            </h3>

            <p>

              Creating an engaging and memorable
              experience through creativity,
              organization, participation,
              and impactful event planning.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Vision;