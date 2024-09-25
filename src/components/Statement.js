import React from "react";
import { Link } from "react-router-dom";

export default function Statement() {
  return (
    <div>
      <section className="about_section section_space">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="">
                <img src="/data/1.jpeg" alt="Grand Asia Force" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    Our Excellency for
                    <span className="badge bg-secondary text-white">
                      Your Fulfillment!
                    </span>
                  </div>
                  <h2 className="heading_text">Mission</h2>
                </div>
                <ul className="icon_list unordered_list_block mb-5">
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw" />
                    </span>
                    <span className="icon_list_text">
                      To provide quality recruitment services for both of
                      candidates and clients.
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw" />
                    </span>
                    <span className="icon_list_text">
                      To create sustainable growth of the company and diverse
                      business.
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw" />
                    </span>
                    <span className="icon_list_text">
                      To contribute in reducing the country's unemployment and
                      poverty rate.
                    </span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw" />
                    </span>
                    <span className="icon_list_text">
                      To help the urban and rural citizenry in gaining overseas
                      working experience, technical skill and expertise to
                      utilize in the country development.
                    </span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw" />
                    </span>
                    <span className="icon_list_text">
                      To gain foreign income for the country.
                    </span>
                  </li>
                </ul>

                <ul className="btns_group unordered_list p-0 justify-content-start">
                  <li>
                    <Link className="btn" to={"/contact"}>
                      <span className="btn_label" data-text="Contact">
                        Contact Us
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="video_btn"
                      to={"mailto:grandasiaforce.gaf@gmail.com"}
                    >
                      <span className="btn_icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <span className="btn_label">Send Mail</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policy_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_target.svg"
                    alt="User Check SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Vision</h3>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    To be a reputable overseas employment agency, maintaining
                    its sustainable growth with quality recruitment services and
                    diverse business to other sectors along with the country
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon bg-warning-subtle">
                  <img
                    src="assets/images/icons/icon_clock.svg"
                    alt="Headphone SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Core Values</h3>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>G</span>
                    lorious <br></br>
                    <span style={{ color: "blue", fontWeight: "bold" }}>A</span>
                    ccountable <br></br>
                    <span style={{ color: "blue", fontWeight: "bold" }}>F</span>
                    acilitative <br></br>
                    Glorious, Accountable and Facilitative represented our
                    organization attitude, fundamental corporate business
                    principle that help us to achieve our organizational goals
                    in accordance with our customers and clients’ satisfaction
                    and fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
    </div>
  );
}
