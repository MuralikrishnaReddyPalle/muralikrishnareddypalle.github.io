import React from "react";

import poster01 from "../assets/images/poster01.png";
import poster02 from "../assets/images/poster02.png";
import poster03 from "../assets/images/poster03.png";
import poster04 from "../assets/images/poster04.png";

import "../assets/styles/Posters.scss";

const posters = [
  poster01,
  poster02,
  poster03,
  poster04,
];

function Posters() {

  return (

    <div
      className="posters-section"
      id="posters"
    >

      <div className="posters-container">

        <div className="posters-header">

          <p className="posters-tag">
            THE CAMPAIGN
          </p>

          <h1>
            Ideas. Vision. <br />
            Action.
          </h1>

          <p className="posters-description">

            Leadership is not about promises alone,
            it is about direction, responsibility,
            and action. These campaign messages reflect
            the vision and commitment behind every step
            towards OSMECON 2026.

          </p>

        </div>

        <div className="posters-grid">

          {posters.map((poster, index) => (

            <div
              className="poster-card"
              key={index}
            >

              <img
                src={poster}
                alt={`Campaign Poster ${index + 1}`}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Posters;