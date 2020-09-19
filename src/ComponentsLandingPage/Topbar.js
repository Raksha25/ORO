import React from "react";
import logo from "./images/orologonew11.ico";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Topbar() {
  function handleActive(e) {
    e.preventDefault();
    document.getElementsById("topbarteam ").classList.add("active");
  }
  return (
    <div className="topbar">
      <img id="logo" src={logo} />
      <div id="optionContainer">
        <button className="topbarOption active">What is OnRoadOut?</button>
        <button id="topbarteam" className="topbarOption" onClick={handleActive}>
          Meet the Team
        </button>
        <button className="topbarOption">
          Purchase
          <span>
            <button id="betaTag">BETA</button>
          </span>
        </button>

        <AccountCircleIcon
          viewBox="0 0 24 10"
          fontSize="large"
          titleAccess="Login"
          htmlColor="white"
          className="login"
        ></AccountCircleIcon>
      </div>
    </div>
  );
}

export default Topbar;
