import React from "react";
import CountryLogo from "../components/CountryLogo";
import { Link } from "react-router-dom";
import CustomerLogo from "../components/CustomerLogo";

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
                    style={{width: "100px"}}
                  />
                </div>
                <h3 className="service_title">
                  <a href="service_details.html">THAILAND</a>
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
                    style={{width: "100px"}}
                  />
                </div>
                <h3 className="service_title">
                  <a href="service_details.html">JAPAN</a>
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
                    style={{width: "100px"}}
                  />
                </div>
                <h3 className="service_title">
                  <a href="service_details.html">MALAYSIA</a>
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

      <section className="intro_about_section section_space bg-light">
        <div className="intro_about_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="image_wrap">
                  <img
                    src="https://grandasiaforce-gaf.com/public/data/slider/5.jpeg"
                    alt="About Techco"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="image_wrap position-relative">
                  <img src="/data/about_image_4.png" alt="About Techco" />

                  <Link className="video_btn ripple_effect" href="#">
                    <span className="btn_icon">
                      <i className="fa-solid fa-play" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="heading_block mb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-4">
                <div className="heading_focus_text">
                  Grand Asia Force Co.,Ltd
                  <span className="badge bg-secondary text-white"></span>
                </div>
                <h2 className="heading_text mb-0">
                  About of <br /> Our Company
                </h2>
              </div>

              <div className="col-lg-8">
                <p
                  className="heading_description mb-0"
                  style={{ textAlign: "justify" }}
                >
                  Grand Asia Force is a top Myanmar employment agency, licensed
                  by the Ministry of Labour (No. 222/2019). We specialize in
                  sourcing and training skilled workers, ensuring full legal
                  compliance, and offering post-employment support. With
                  successful placements in Thailand, Japan, Singapore, and
                  Malaysia, we’re your trusted partner for fast, reliable
                  recruitment solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policy_section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="iconbox_block">
                <div className="iconbox_icon bg-warning-subtle">
                  <img
                    src="assets/images/icons/icon_dart_board_2.svg"
                    alt="Dart Board SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Our Mission</h3>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    To provide quality recruitment services for both of
                    candidates and clients.
                    <br />
                    <br />
                    To help the urban and rural citizenry in gaining overseas
                    working experience, technical skill and expertise to utilize
                    in the country development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="iconbox_block">
                <div className="iconbox_icon bg-secondary-subtle">
                  <img
                    src="assets/images/icons/icon_target.svg"
                    alt="Target SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Our Vision</h3>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    To be a reputable overseas employment agency, maintaining
                    its sustainable growth with quality recruitment services and
                    diverse business to other sectors along with the country
                    development.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="iconbox_block">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_clock.svg"
                    alt="Clock SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Our Values</h3>
                  <p className="mb-0" style={{ textAlign: "justify" }}>
                    <span style={{ color: "blue", fontWeight: "bold" }}>G</span>
                    lorious,
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      {" "}
                      A
                    </span>
                    ccountable and
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      {" "}
                      F
                    </span>
                    acilitative represented our organization attitude,
                    fundamental corporate business principle that help us to
                    achieve our organizational goals in accordance with our
                    customers and clients’ satisfaction and fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team_section section_space">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Our Expert</span>
              Team Members 😍
            </div>
            <h2 className="heading_text mb-0">Skilled Experts</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_block">
                <div className="team_member_image">
                  <Link
                    className="image_wrap"
                    aria-label="Team Details Button"
                    to="#"
                  >
                    <img
                      src="/assets/images/team/team_member_image_1.webp"
                      alt="Team Member Image"
                    />
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>

                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <Link to="#">MR.__________</Link>
                  </h3>
                  <h4 className="team_member_designation">Managing Director</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_facebook.svg"
                          alt="Icon Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_twitter_x.svg"
                          alt="Icon Twitter X"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_linkedin.svg"
                          alt="Icon Linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_instagram.svg"
                          alt="Icon Instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_block">
                <div className="team_member_image">
                  <a
                    className="image_wrap"
                    aria-label="Team Details Button"
                    href="team_details.html"
                  >
                    <img
                      src="assets/images/team/team_member_image_2.webp"
                      alt="Team Member Image"
                    />
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <Link to="#">MR.__________</Link>
                  </h3>
                  <h4 className="team_member_designation">Director</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_facebook.svg"
                          alt="Icon Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_twitter_x.svg"
                          alt="Icon Twitter X"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_linkedin.svg"
                          alt="Icon Linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_instagram.svg"
                          alt="Icon Instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_block">
                <div className="team_member_image">
                  <a
                    className="image_wrap"
                    aria-label="Team Details Button"
                    href="team_details.html"
                  >
                    <img
                      src="assets/images/team/team_member_image_3.webp"
                      alt="Team Member Image"
                    />
                    <i className="fa-solid fa-arrow-up-right" />
                  </a>
                </div>
                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <Link to="#">MR.__________</Link>
                  </h3>
                  <h4 className="team_member_designation">Manager</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_facebook.svg"
                          alt="Icon Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_twitter_x.svg"
                          alt="Icon Twitter X"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_linkedin.svg"
                          alt="Icon Linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          src="assets/images/icons/icon_instagram.svg"
                          alt="Icon Instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default Home;
