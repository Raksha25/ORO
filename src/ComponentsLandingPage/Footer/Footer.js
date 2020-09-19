import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="Footer-border">
          <div className="fBox">
            <div className="fItem">Contact Us</div>

            <div className="fItem">FAQ</div>
            <div className="fItem">Reviews</div>
            <div className="fItem">Blog</div>
            <Link to="/terms-of-use" className="fItem">
              Legal
            </Link>
            <Link to="/privacy-policy" className="fItem fItem-end">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
