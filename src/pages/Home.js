import React from "react";
import CountryLogo from "../components/CountryLogo";
import { Link } from "react-router-dom";
import CustomerLogo from "../components/CustomerLogo";
import Statement from "../components/Statement";
import AboutUs from "../components/AboutUs";
import Organization from "../components/Organization";
import Team from "../components/Team";
import News from "./News";
import WhyChoose from "../components/WhyChoose";

function Home() {
  return (
    <div>
      <CountryLogo />

      <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
        <div className="container">
          <div className="heading_block text-center">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{
                backgroundImage:
                  'url("assets/images/shapes/shape_title_under_line.svg")',
              }}
            >
              Our Services
            </div>
            <h2 className="heading_text mb-0">
              How We Can <mark>Help</mark> You
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="service_block_2">
                <div className="service_icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2095/2095629.png"
                    alt="Techco - Service icon"
                    style={{ width: "100px" }}
                  />
                </div>
                <h3 className="service_title">
                  <a href="#!">THAILAND</a>
                </h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Electronics</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Restaurants</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Furniture</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Supermarket</span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Construction</span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Factory</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service_block_2">
                <div className="service_icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6920/6920180.png"
                    alt="Techco - Service icon"
                    style={{ width: "100px" }}
                  />
                </div>
                <h3 className="service_title">
                  <a href="#!">JAPAN</a>
                </h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Electronics</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Restaurants</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Furniture</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Supermarket</span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Construction</span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Factory</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service_block_2">
                <div className="service_icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/984/984093.png"
                    alt="Techco - Service icon"
                    style={{ width: "100px" }}
                  />
                </div>
                <h3 className="service_title">
                  <a href="#!">MALAYSIA</a>
                </h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Electronics</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Restaurants</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Furniture</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Supermarket</span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Construction</span>
                  </li>

                  <li>
                    <span className="icon_list_icon">
                      <i className="fa-regular fa-circle-dot" />
                    </span>
                    <span className="icon_list_text">Factory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="decoration_item shape_image_1">
          <img src="assets/images/shapes/shape_line_5.svg" alt="Techco Shape" />
        </div>
        <div className="decoration_item shape_image_2">
          <img src="assets/images/shapes/shape_line_6.svg" alt="Techco Shape" />
        </div>
        <div className="decoration_item shape_image_3">
          <img
            src="assets/images/shapes/shape_space_1.svg"
            alt="Techco Shape"
          />
        </div>
        <div className="decoration_item shape_image_4">
          <img
            src="assets/images/shapes/shape_angle_1.webp"
            alt="Techco Shape Angle"
          />
        </div>
        <div className="decoration_item shape_image_5">
          <img
            src="assets/images/shapes/shape_angle_2.webp"
            alt="Techco Shape Angle"
          />
        </div>
      </section>

      <section
        className="empowering_success_section section_space"
        style={{ background: "#fafafa" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="heading_block text-center">
                <h2 className="heading_text mb-0">
                  Empowering Success through Strategic Partnerships Since 2019
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="image_wrap position-relative">
                <img
                  className="rounded"
                  src="/assets/images/about/about_image_7.webp"
                  alt="Grand Asia Force"
                />
                <Link className="video_btn ripple_effect" to="#">
                  <span className="btn_icon">
                    <i className="fa-solid fa-play" />
                  </span>
                </Link>
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

      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: 'url("assets/images/shapes/bg_pattern_4.svg")',
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

      <Team />

      

      <section
        className="client_logo_section section_space"
        style={{
          backgroundImage: 'url("assets/images/shapes/bg_pattern_1.svg")',
        }}
      >
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
                <div className="col-md-6">
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <img
                        src="assets/images/icons/icon_like.svg"
                        alt="Techco - SVG Icon Like"
                      />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count="5.6">
                          15
                        </span>
                        <span>K+</span>
                      </div>
                      <h3 className="funfact_title mb-0">Companies Trust Us</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <img
                        src="assets/images/icons/icon_dart_board.svg"
                        alt="Techco - SVG Icon Head"
                      />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count={100}>
                          100
                        </span>
                        <span>%</span>
                      </div>
                      <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our_world_employees">
                <div className="image_wrap">
                  <img
                    src="data/about_image_1.png"
                    alt="Techco - Employees Guoup Image"
                  />
                </div>
                <div className="content_wrap">
                  <h3 className="title_text mb-0">
                    <b className="d-block">12000+</b> employees in 5 countries
                    in Asia
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      
      <News />
    </div>
  );
}

export default Home;
