import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footerContainer">
      <div id="sec1">
        <div className="dashedLine"></div>
        <div className="label">OnRoadOut</div>
        <div className="dashedLine"></div>
      </div>
      <div id="sec2">
        <ul className="F-content">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>About</li>
        </ul>
        <div id="sec2b">
          <div id="sm">
            <FacebookIcon className="smIcon fb" fontSize="large"></FacebookIcon>
            <LinkedInIcon className="smIcon linkedin" fontSize="large"></LinkedInIcon>
            <TwitterIcon className="smIcon twitter" fontSize="large"></TwitterIcon>
          </div>
          <div id="FC-dashedLine"></div>
        </div>
        <ul className="F-content">
          <li>Shipping Info</li>
          <li>Returns</li>
          <li>Career Page</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
