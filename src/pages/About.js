import React from "react";

function About() {
  return (
    <div>
      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: 'url("assets/images/shapes/bg_pattern_4.svg")',
        }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            About
            <span className="badge bg-secondary">More Techco 😃</span>
          </div>
          <h1 className="page_title mb-0 text-white">About Us</h1>
        </div>
      </section>
    </div>
  );
}

export default About;
