import React from "react";
import ill from "../images/delivery-animate.svg";

function About() {
  return (
    <div className="container">
      <div className="about-body">
        <div className="text-sec">
          <div className="heading1"> OnRoadOut</div>
          <div className="heading1-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
        <img src={ill} className="ill" />
      </div>
      <svg
        className="white-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 267"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,160L40,176C80,192,160,224,240,213.3C320,203,400,149,480,138.7C560,128,640,160,720,154.7C800,149,880,107,960,101.3C1040,96,1120,128,1200,154.7C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default About;
