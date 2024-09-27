import React from "react";
import AboutUs from "../components/AboutUs";
import Statement from "../components/Statement";
import Organization from "../components/Organization";
import CallAction from "../components/CallAction";
import WhyChoose from "../components/WhyChoose";
import Certificate from "../components/Certificate";

function About() {
  return (
    <div>
      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: 'url("/assets/images/shapes/bg_pattern_4.svg")',
        }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            About
            <span className="badge bg-secondary">Grand Asia Force Co.,Ltd</span>
          </div>
          <h1 className="page_title mb-0 text-white">About Us</h1>
        </div>
      </section>

      <Certificate />

      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: 'url("/assets/images/shapes/bg_pattern_4.svg")',
        }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            About
            <span className="badge bg-secondary">More Grand Asia Force</span>
          </div>
          <h1 className="page_title mb-0 text-white">About Us</h1>
        </div>
      </section>

      <AboutUs />

      <Statement />

      <Organization />

      <WhyChoose />

      <CallAction />
    </div>
  );
}

export default About;
