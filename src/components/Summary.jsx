import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

export default function Summary() {
  return (
    <div className="summary--main">
      <h1 className="summary--h1">Stephen Klotz</h1>
      <h3 className="summary--h3">Full Stack Engineer</h3>
      <a
        className="summary--a"
        href="https://www.linkedin.com/in/stephen-klotz-0254a895/"
      >
        My Linkedin
      </a>
      <div className="summary--button-div">
        <button className="summary--email-button">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </button>
        <button className="summary--linkedin-button">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Linkedin</span>
        </button>
      </div>
    </div>
  );
}
