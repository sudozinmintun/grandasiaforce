import React from "react";
import CountryLogo from "../components/CountryLogo";
import { Link } from "react-router-dom";
import CustomerLogo from "../components/CustomerLogo";
import Statement from "../components/Statement";
import AboutUs from "../components/AboutUs";
import Organization from "../components/Organization";
import CallAction from "../components/CallAction";
import News from "./News";
import JobList from "../components/JobList";

function Home() {
  return (
    <div>
      <CountryLogo />

      <JobList />

      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: 'url("/assets/images/shapes/bg_pattern_4.svg")',
          backgroundColor: "white !important",
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

      <div className="col-lg-12 d-flex justify-content-center pt-5">
        <Link className="btn" to={"/team"}>
          <span className="btn_label" data-text="Meet Our Team Members">
            Meet Our Team Members
          </span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right" />
          </span>
        </Link>
      </div>

      <section className="client_logo_section section_space bg-white">
        <div className="container">
          <div className="section_space pt-0">
            <div className="heading_block text-center">
              <div className="heading_focus_text mb-0">
                <span className="badge bg-secondary text-white">OUR</span>
                Service Countries
              </div>
            </div>

            <CustomerLogo />
          </div>

          <div className="row funfact_wrapper">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <img
                        src="assets/images/icons/icon_head.svg"
                        alt="Techco - SVG Icon Head"
                      />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count={25}>
                          6
                        </span>
                        <span>+</span>
                      </div>
                      <h3 className="funfact_title mb-0">
                        Years of experience
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <img
                        src="assets/images/icons/icon_check.svg"
                        alt="Techco - SVG Icon Check"
                      />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count={280}>
                          100
                        </span>
                        <span>+</span>
                      </div>
                      <h3 className="funfact_title mb-0">Success Stories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="our_world_employees">
                <div className="image_wrap">
                  <img
                    src="data/bg/2.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "280px",
                      backgroundSize: "cover",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallAction />

      <News />
    </div>
  );
}

export default Home;
