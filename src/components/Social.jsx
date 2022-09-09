import React from "react";
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub
} from '@fortawesome/fontawesome-free-brands'

export default function Social() {
    return ( 
        <div className="social--div">
            <h1 className="social--h1">Social Media</h1>
            <div className="social--div-icon">
            <a href="https://www.linkedin.com/in/stephen-klotz-0254a895"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/klotzey13"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
}