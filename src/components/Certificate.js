import React from "react";

export default function Certificate() {
  return (
    <div>
      <section
        className="empowering_success_section section_space"
        style={{ background: "#fafafa" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="heading_block text-center">
                <h3 className="heading_text mb-0">
                  Empowering Success through Strategic Partnerships Since 2019
                </h3>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="image_wrap position-relative">
                <img
                  className="rounded"
                  src="/data/company.png"
                  alt="Grand Asia Force"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <ul className="empowering_services unordered_list_block ps-lg-5">
                <li>
                  <div className="iconbox_block layout_icon_left">
                    <div className="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_bulb.svg"
                        alt="Bulb SVG Icon"
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title">Tailored Solutions</h3>
                      <p className="mb-0">
                        Our consulting services are customized to suit the
                        unique needs and goals of each client, ensuring precise
                        alignment with their business objectives.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="iconbox_block layout_icon_left">
                    <div className="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_user_rating.svg"
                        alt="User Rating SVG Icon"
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title">Collaborative Approach</h3>
                      <p className="mb-0">
                        We believe in fostering strong partnerships with our
                        clients, working closely with them to understand their
                        challenges, identify opportunities.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="iconbox_block layout_icon_left">
                    <div className="iconbox_icon">
                      <img
                        src="assets/images/icons/icon_hand_shake.svg"
                        alt="Hand Shake SVG Icon"
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title">Expert Team Members</h3>
                      <p className="mb-0">
                        We believe in fostering strong partnerships with our
                        clients, working closely with them to understand their
                        challenges, identify opportunities.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
