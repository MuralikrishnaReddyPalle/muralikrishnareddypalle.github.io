import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import CampaignIcon from '@mui/icons-material/Campaign';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import '../assets/styles/Timeline.scss';

const timelineData = [

  {
    year: "OSMECON",
    title: "First Year Experience",
    subtitle: "Workshops, Passive Events & Support Work",
    icon: <SchoolIcon />,
    description:
      "Worked in Symposium operations, Forensic Workshops, Dare 2 Diagnose, MedQuiz, Public Relations, Technical Coordination, Delegate Handling, and various support activities contributing to the smooth execution of OSMECON."
  },

  {
    year: "OSMECON",
    title: "Second Year Experience",
    subtitle: "Workshops, Active & Passive Events, Support Work",
    icon: <SchoolIcon />,
    description:
      "Contributed to Body PR Team activities, Symposium operations, Research Methodology Workshop management, and multiple organizational responsibilities involving coordination, logistics, and participant engagement."
  },

  {
    year: "Leadership",
    title: "Third Year OSMECON",
    subtitle: "Publicity, PR & Workshop Management",
    icon: <EmojiEventsIcon />,
    description:
      "Handled publicity campaigns across 3+ districts and 10+ colleges, influencing participants to attend OSMECON. Worked extensively in PR operations under high-pressure conditions while managing Basic Surgical Skills Workshop operations, Symposium coordination, Delegate Management, and Event Coordination."
  },

  {
    year: "TEAM S16",
    title: "OSMECON 15th Edition",
    subtitle: "Team S16 • Demanding Crisis Situations",
    icon: <WorkspacePremiumIcon />,
    description:
      "Worked closely in technical coordination, AV handling, operational support, problem-solving, and collaborative execution during demanding crisis situations requiring rapid decisions and coordinated teamwork."
  },

  {
    year: "3 Years",
    title: "Rotaract Club",
    subtitle: "Joint Treasurer & Active Member",
    icon: <GroupsIcon />,
    description:
      "Led awareness drives, outreach initiatives, public relations activities, social service programs, while also handling treasury-related responsibilities during the previous tenure."
  },

  {
    year: "Riveria 2026",
    title: "Freshers'26 - RIVERIA",
    subtitle: "Tech & Content Teams",
    icon: <GroupsIcon />,
    description:
      "Worked in technical pit management, content operations, creative coordination, and live-event execution within dynamic and fast-paced environments."
  },

  {
    year: "Exposure",
    title: "National Conferences",
    subtitle: "Departmental Conferences",
    icon: <CampaignIcon />,
    description:
      "Gained exposure to conference logistics, organizational execution, public relations systems, networking opportunities, and professional event management through participation in conferences including JIPMER, IISc, ESIC, and others."
  },

  {
    year: "OMC CARES",
    title: "White Coat Summer Camp",
    subtitle: "For Medical Aspiring Students",
    icon: <Diversity3Icon />,
    description:
      "Managed student coordination, technical execution, participant engagement, event operations, and organizational support for medical aspiring students exploring careers in healthcare."
  },

  {
    year: "Representation",
    title: "IDYE & MDYE",
    subtitle: "Inter-District Leadership Platforms",
    icon: <WorkspacePremiumIcon />,
    description:
      "Represented the club across district exchange platforms while building communication, networking, leadership, and organizational skills through interactions with diverse teams and institutions."
  },

  {
    year: "Beginning",
    title: "Voice of Osmania",
    subtitle: "Photography Team",
    icon: <CampaignIcon />,
    description:
      "First exposure to student organizations, teamwork, media coverage, photography operations, coordination, and collaborative event environments."
  }
];

function Timeline() {

  return (

    <div id="history" className="timeline-section">

      <div className="timeline-header">

        <p className="timeline-tag">
          EXPERIENCE & JOURNEY
        </p>

        <h1>
          The Journey Towards Leadership
        </h1>

        <p className="timeline-description">
          Experiences that shaped teamwork,
          professionalism, responsibility,
          organizational coordination, and leadership
          throughout the journey towards OSMECON 2026.
        </p>

      </div>

      <VerticalTimeline lineColor="rgba(212,175,55,0.18)">

        {timelineData.map((item, index) => (

          <VerticalTimelineElement
            key={index}

            contentStyle={{
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.92), rgba(255,255,255,0.78))",

              color: "#07111f",

              borderRadius: "28px",

              boxShadow:
                "0 14px 40px rgba(0,0,0,0.05)",

              border:
                "1px solid rgba(0,0,0,0.04)"
            }}

            contentArrowStyle={{
              borderRight:
                "7px solid rgba(255,255,255,0.9)"
            }}

            date={item.year}

            iconStyle={{
              background:
                "linear-gradient(135deg,#d4af37,#e0c36a)",

              color: "#07111f",

              boxShadow:
                "0 0 0 6px rgba(212,175,55,0.12)"
            }}

            icon={item.icon}
          >

            <h3 className="vertical-timeline-element-title">
              {item.title}
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>

            <p>
              {item.description}
            </p>

          </VerticalTimelineElement>

        ))}

      </VerticalTimeline>

    </div>
  );
}

export default Timeline;