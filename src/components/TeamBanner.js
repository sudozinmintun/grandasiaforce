import React from "react";
import { Link } from "react-router-dom";

export default function TeamBanner() {
  return (
    <div>
      <section className="about_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 order-lg-last">
              <div className="team_cartoon_image">
                <img
                  src="assets/images/team/team_cartoon_image.webp"
                  alt="Team"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    Meet our
                    <span className="badge bg-secondary text-white">
                      Team 🙂
                    </span>
                  </div>
                  <h2 className="heading_text">Get to Know Our Team</h2>
                  <p className="heading_description mb-0">
                    Our ability to deliver customer’s satisfactory and excellent
                    quality of service starts from our vibrant, dedicated and
                    experienced team of individuals. Each of us has diverse
                    experience and background, and together, we serve our
                    customer better and bring the successful growth of our
                    company in the employment industry.
                  </p>
                </div>
                <Link className="btn" to={"/contact"}>
                  <span className="btn_label" data-text="Talk to an Expart">
                    Talk to an Expart
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
