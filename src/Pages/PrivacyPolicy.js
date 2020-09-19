import React from "react";
import Topbar from "../ComponentsLandingPage/Topbar";
import Footer from "../ComponentsLandingPage/Footer/Footer";

function PrivacyPolicy() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="ppContainer">
        <h3 className="headings ppHeading">Privacy Policy</h3>

        <p className="para-txt">
          The OnRoadOut (hereinafter referred to as “we”, “us” or “our”)
          recognizes the need for theproper management of personal information,
          and we handle such information in our possessionin accordance with the
          following principles:
        </p>
        <ol>
          <li>
            Collection of Personal InformationWe will collect and process your
            personal information (regardless of electronic or
            non-electronicinformation) lawfully, fairly and in a transparent
            manner only to the extent necessary forproviding our services or
            performing our contractual obligations.
          </li>
          <li>
            Data minimizationWe will keep personal information adequate,
            relevant and limited to what is necessary inrelation to the purpose
            for which it was provided. We will not collect personal information
            inadvance or store personal information for future purposes, unless
            required or permitted by lawsor regulations.
          </li>
          <li>
            Intended Use of Personal InformationWe will only use the personal
            information for one or more specified and legitimate
            purposes.Personal information will not be used or processed in any
            manner incompatible with thosepurposes. When we need to use your
            personal information beyond the scope of such purposes,we shall
            obtain your consent, except when extended use would be permitted by
            laws orregulations.4
          </li>
          <li>
            AccuracyWe will keep personal information accurate and up-to-date
            and shall take all reasonable stepsto ensure that personal
            information that is inaccurate will be removed or rectified without
            delay.5
          </li>
          <li>
            Limited retentionWe will keep personal information no longer than is
            necessary for the purposes for which thepersonal information was
            provided. Unless otherwise permitted by laws and
            regulations,personal information that is no longer needed or
            relevant will be purged or deleted.
          </li>
          <li>
            Management of Personal InformationYour personal information is
            subject to data secrecy. In managing personal information, weassign
            an officer in charge of handling personal information, and take
            appropriate and adequateprotective measures on a technical and
            organizational level against unauthorized or unlawfuluse and
            processing.
          </li>
          <li>
            Provision to Third PartiesUnless otherwise permitted by laws and
            regulations, we will not provide your personalinformation to any
            third party without your consent. In addition, your personal
            information will not be transferred to another country or territory
            unless that country or territory will ensure anadequate level of
            data protection.
          </li>
          <li>
            Inquiries, Corrections, and Erasure of Personal InformationWe
            acknowledge that you have the right to know which of your personal
            information we holdand have the right to access your personal
            information, ask for rectification, removal or object tothe
            (automated) processing of it. We will respond promptly in a suitable
            and reasonable mannerto any inquiry from you about your personal
            information or requests for corrections or erasure.
          </li>
          <li>
            Compliance with Laws and Regulations, and Commitment to this
            PolicyWe fully abide by all laws and regulations concerning personal
            information protection. Moreover,we are committed to compliance with
            the provisions of this Group Privacy Policy.
          </li>
        </ol>
        <p className="para-txt">
          For further queries regarding our privacy policy please write us at
          info@onroadout.com
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default PrivacyPolicy;
