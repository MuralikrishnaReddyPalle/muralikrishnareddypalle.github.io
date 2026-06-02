import React from "react";

import PublicIcon from '@mui/icons-material/Public';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ScienceIcon from '@mui/icons-material/Science';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import '../assets/styles/Goals.scss';

const goals = [

  {
    icon: <PublicIcon />,
    number: "01",
    title: "OSMECON Beyond Boundaries",
    description:
      "Through aggressive digital outreach and targeted publicity campaigns, the objective is to increase participation beyond Telangana and establish OSMECON as a preferred conference destination for medical students nationwide."
  },

  {
    icon: <CelebrationIcon />,
    number: "02",
    title: "Elevate Delegate Experience",
    description:
      "Introducing a Gala Dinner celebrating achievements, networking, and the spirit of OSMECON through a formal closing event that creates a premium conference experience and lasting memories."
  },

  {
    icon: <MedicalServicesIcon />,
    number: "03",
    title: "Advanced Clinical Skills Workshops",
    description:
      "Develop hands-on workshops focused on real-world clinical examination and patient interaction, bridging theoretical knowledge with practical clinical application."
  },

  {
    icon: <SchoolIcon />,
    number: "04",
    title: "Creating Lasting Career Impact",
    description:
      "Career guidance and mentorship sessions led by distinguished alumni and medical professionals, offering insights into postgraduate preparation, research opportunities, and career pathways."
  },

  {
    icon: <GroupsIcon />,
    number: "05",
    title: "Meaningful Networking",
    description:
      "Structured networking sessions, discussion tables, and guided conversations that help delegates build professional relationships and long-term collaborations."
  },

  {
    icon: <PrecisionManufacturingIcon />,
    number: "06",
    title: "Emerging Medical Technologies",
    description:
      "Workshops and demonstrations on robotic surgery, artificial intelligence in healthcare, and modern surgical technologies to expose delegates to the future of medicine."
  },

  {
    icon: <ScienceIcon />,
    number: "07",
    title: "State-of-the-Art Medical Advancements",
    description:
      "Showcasing breakthrough technologies, evolving treatment approaches, innovation exhibits, and expert-led sessions highlighting modern medical practice."
  },

  {
    icon: <EmojiEventsIcon />,
    number: "08",
    title: "Build a Legacy Worth Carrying Forward",
    description:
      "Strengthening OSMECON's reputation as a conference remembered not only for its scale but for its impact, innovation, and ability to inspire future generations of medical students."
  }
];

function Goals() {

  return (

    <div className="goals-section" id="goals">

      <div className="goals-container">

        <div className="goals-header">

          <p className="goals-tag">
            STRATEGIC ROADMAP
          </p>

          <h1>
            Goals For OSMECON 2026
          </h1>

          <p className="goals-description">

            Beyond organizing a successful conference,
            the aim is to create meaningful academic,
            professional, and personal impact that
            elevates OSMECON to a nationally recognized platform.

          </p>

        </div>

        <div className="goals-timeline">

          {goals.map((goal, index) => (

            <div
              className={`goal-card ${
                index % 2 === 0
                  ? 'left'
                  : 'right'
              }`}
              key={index}
            >

              <div className="goal-number">
                {goal.number}
              </div>

              <div className="goal-icon">
                {goal.icon}
              </div>

              <h3>
                {goal.title}
              </h3>

              <p>
                {goal.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Goals;