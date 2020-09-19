import React from "react";
import logo from "../ComponentsLandingPage/images/orologonew11.ico";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  return (
    <div>
      <div className="signUpPageContainer">
        <div className="leftBox Box">
        <img className="signUpLogo" src={logo} style={{ height: "4rem" }} />
          <svg data-name="Layer 1" viewBox="80 50 400 800" className="test">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#302794", stopOpacity: "0.5" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#471261", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#2d0b3d", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 50 50 C 50 150 150 150 150 250 Q 150 350 250 400 C 345 450 250 550 350 600 L 600 600 C 600 500 500 500 500 400 C 500 300 400 350 400 250 C 400 100 300 150 300 50 Z"
              fill="url(#wave1)"
            ></path>
          </svg>
          <h2 className="signUpheading">Welcome to</h2>
          <h1 className="signUpheading2">OnRoadOut</h1>
          <p className="signUpheading3">Mauris porttitor ex sit amet nulla vulputate dapibus</p>
          <div id="circle1"></div>
          <div id="circle2"></div>
          <div id="circle3"></div>
        </div>
        <div className="Box">
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
