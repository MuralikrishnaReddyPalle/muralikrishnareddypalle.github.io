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
    year: "Beginning",
    title: "Voice of Osmania",
    subtitle: "Photography Team",
    icon: <CampaignIcon />,
    description:
      "First exposure to student organizations, teamwork, coordination, and collaborative event environments."
  },

  {
    year: "3 Years",
    title: "Rotaract Club",
    subtitle: "Joint Treasurer & Active Member",
    icon: <GroupsIcon />,
    description:
      "Led awareness drives, outreach initiatives, public relations activities, and social service programs impacting 1000+ individuals."
  },

  {
    year: "Representation",
    title: "IDYE & MDYE",
    subtitle: "Inter-District Leadership Platforms",
    icon: <WorkspacePremiumIcon />,
    description:
      "Represented the club across district exchange platforms while building communication, networking, and leadership skills."
  },

  {
    year: "OSMECON",
    title: "First Year Experience",
    subtitle: "Workshops & Technical Teams",
    icon: <SchoolIcon />,
    description:
      "Worked in symposium management, forensic workshops, delegate handling, technical coordination, and PR activities."
  },

  {
    year: "OSMECON",
    title: "Second Year Experience",
    subtitle: "Research Methodology Workshop",
    icon: <SchoolIcon />,
    description:
      "Coordinated technical execution, workshop management, symposium operations, and collaborative organizational activities."
  },

  {
    year: "Leadership",
    title: "Third Year OSMECON",
    subtitle: "Publicity, Coordination & Operations",
    icon: <EmojiEventsIcon />,
    description:
      "Handled publicity campaigns across districts, delegate management, workshop operations, and high-pressure coordination responsibilities."
  },

  {
    year: "TEAM S16",
    title: "OSMECON 15th Edition",
    subtitle: "Symposium Finalists",
    icon: <WorkspacePremiumIcon />,
    description:
      "Worked closely in technical coordination, AV handling, operational support, and collaborative execution during demanding situations."
  },

  {
    year: "OMC CARES",
    title: "White Coat Summer Camp",
    subtitle: "Event Management & Technical Team",
    icon: <Diversity3Icon />,
    description:
      "Managed student coordination, technical execution, delegate handling, and event operations for aspiring medical students."
  },

  {
    year: "Exposure",
    title: "National Conferences",
    subtitle: "JIPMER, IISc, ESIC & More",
    icon: <CampaignIcon />,
    description:
      "Gained exposure to conference logistics, PR systems, organizational execution, and national-level event management."
  },

  {
    year: "Riveria 2026",
    title: "Tech & Content Teams",
    subtitle: "Live Event Operations",
    icon: <GroupsIcon />,
    description:
      "Worked in technical pit management, content operations, and live-event coordination under dynamic environments."
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