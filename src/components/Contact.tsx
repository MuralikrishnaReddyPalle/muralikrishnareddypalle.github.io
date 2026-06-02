import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PhoneIcon from '@mui/icons-material/Phone';

import '../assets/styles/Contact.scss';

function Contact() {

  return (

    <div
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="contact-top">

          <p className="contact-tag">
            CONNECT WITH THE CAMPAIGN
          </p>

          <h1>
            Together, Let Us <br />
            Redefine OSMECON
          </h1>

          <p className="contact-description">

            Leadership is not built by one individual alone,
            it is built through teamwork, inclusiveness,
            responsibility, and collective effort.
            Let us work together towards an OSMECON 2026
            that reflects professionalism, growth, innovation,
            and unity.

          </p>

        </div>


        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}

        <div className="campaign-cta">

          <div className="cta-content">

            <h2>
              #VoteForMurali
            </h2>

            <p>
              Leadership. Dedication. Vision.
            </p>

          </div>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap'
            }}
          >

            {/* EMAIL */}

            <a
              href="mailto:muralikrishnareddy.palle@gmail.com"
              className="cta-button"
            >
              Connect
              <ArrowForwardIcon />
            </a>

            {/* GOOGLE FORM */}

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Suggestions
              <RateReviewIcon />
            </a>

          </div>

        </div>

        {/* ========================================= */}
        {/* SOCIAL */}
        {/* ========================================= */}

        <div className="social-strip">

          <a
            href="https://www.instagram.com/_reddy.mk_021?igsh=MXRoeTJlMXI1dTdhZg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href="mailto:muralikrishnareddy.palle@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <MailOutlineIcon />
          </a>

          <a
            href="tel:+919347185058"
            aria-label="Phone"
            title="+91 9347185058"
          >
            <PhoneIcon />
          </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;