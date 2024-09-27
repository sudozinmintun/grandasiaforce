import React from "react";
import { Link } from "react-router-dom";

export default function CallAction() {
  return (
    <div>
      <section
        className="calltoaction_section parallaxie"
        style={{
          backgroundImage: 'url("data/contact.jpg")',
        }}
      >
        <div className="container text-center">
          <div className="heading_block text-white">
            <h2 className="heading_text">Ready to Work, Let's Talk</h2>
            <p className="heading_description mb-0">
              Our team of experts is ready to collaborate with you every step of
              the way, from initial consultation to implementation.
            </p>
          </div>
          <Link className="btn btn-primary" to={"/contact"}>
            <span className="btn_label" data-text="Contact Us Today!">
              Contact Us Today!
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
