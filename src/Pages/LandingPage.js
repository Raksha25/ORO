import React from "react";
import Topbar from "../ComponentsLandingPage/Topbar";
import Section1 from "../ComponentsLandingPage/Section1/Section1";
import Section2a from "../ComponentsLandingPage/Section2/Section2a";
import Section2b from "../ComponentsLandingPage/Section2/Section2b";
import Footer from "../ComponentsLandingPage/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Topbar></Topbar>
      <Section1></Section1>
      <div className="S2container">
        <Section2b></Section2b>
        <Section2a></Section2a>
      </div>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
