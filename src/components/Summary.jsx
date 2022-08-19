import React from "react";

export default function Summary() {
    return (
        <div className="summary--main">
            <h1 className="summary--h1">Stephen Klotz</h1>
            <h3 className="summary--h3">Full Stack Engineer</h3>
            <a className="summary--a" href="https://www.linkedin.com/in/stephen-klotz-0254a895/">My Linkedin</a>
            <div className="summary--button-div">
                <button>
                    Email
                </button>
                <button>
                    Linkedin
                </button>
            </div>
        </div>
    );
}