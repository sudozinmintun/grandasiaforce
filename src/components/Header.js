import React from "react";
import { Link } from "react-router-dom";
import ActivitiesList from "./ActivitiesList";

function Header() {
  return (
    <header className="site_header site_header_1">
      <div className="header_top text-center">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <Link className="text-white">+959 750 126 100 &nbsp;&nbsp;</Link>
              <Link className="text-white"> grandasiaforce.gaf@gmail.com</Link>
            </div>

            <div className="col-md-6 ">
              <Link className="text-white">
                <img
                  src="https://iam-myanmar.com/data/us.gif"
                  style={{ width: "30px" }}
                  alt=""
                ></img>
                &nbsp; English
              </Link>

              <Link
                className="text-white"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/330/330447.png"
                  style={{ width: "30px" }}
                  alt=""
                ></img>
                &nbsp; Thailand
              </Link>

              <Link className="text-white">
                <img
                  src="https://iam-myanmar.com/data/jp.jpeg"
                  style={{ width: "30px" }}
                  alt=""
                ></img>
                &nbsp; Japanese
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header_bottom stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link className="site_link" to={"/"}>
                  <img
                    src="/data/logo.jpeg"
                    alt="Grand Asia Force"
                    style={{ width: "1000px", maxWidth: "250%" }}
                  />
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li>
                      <Link className="nav-link" to={"/"}>
                        Home
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        className="nav-link"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Company
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row">
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      className="iconbox_block_2"
                                      to={"/about"}
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src="/assets/images/icons/icon_wifi.svg"
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          About Us
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Learn more about Grand Asia Force
                                      </span>
                                    </Link>
                                  </div>

                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      className="iconbox_block_2"
                                      to={"/team"}
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src="/assets/images/icons/icon_user_2.svg"
                                            alt="User Check SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Team
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        We are friendly Join our team
                                      </span>
                                    </Link>
                                  </div>

                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      className="iconbox_block_2"
                                      to={"/services"}
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src="/assets/images/icons/icon_pen.svg"
                                            alt="Pen SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Services
                                        </small>
                                      </span>
                                      <small className="description mb-0">
                                        Happy to help you!
                                      </small>
                                    </Link>
                                  </div>

                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      className="iconbox_block_2"
                                      to={"/message"}
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src="/assets/images/icons/icon_user_2.svg"
                                            alt="Pen SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          MD's Message
                                        </small>
                                      </span>

                                      <small className="description mb-0">
                                        Meet our MD
                                      </small>
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              <ul className="btns_group p-0 unordered_list justify-content-start">
                                <li>
                                  <Link
                                    className="btn btn-primary"
                                    to={"/contact"}
                                  >
                                    <span className="btn_label" data-text="Now">
                                      Contact
                                    </span>
                                    <span className="btn_icon">
                                      <i className="fa-solid fa-arrow-up-right" />
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <div className="review_short_info_2">
                                    <div className="review_admin_logo">
                                      <img
                                        src="https://cdn-icons-png.flaticon.com/128/3938/3938039.png"
                                        alt="Client Logo"
                                        style={{ width: "50px" }}
                                      />
                                    </div>
                                    <div className="review_info_content">
                                      +959 750 126 100
                                      <div className="review_counter">
                                        <b>9:00 AM - 5:00 PM</b>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="review_short_info_2">
                                    <div className="review_admin_logo">
                                      <img
                                        src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                                        alt="Client Logo"
                                        style={{ width: "50px" }}
                                      />
                                    </div>
                                    <div className="review_info_content">
                                      𝐆𝐑𝐀𝐍𝐃 𝐀𝐒𝐈𝐀 𝐅𝐎𝐑𝐂𝐄 𝐂𝐎.,𝐋𝐓𝐃
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-3">
                              <div className="site_author bg-primary">
                                <div className="author_image ">
                                  <img src="/data/md.png" alt="MD" />
                                </div>

                                <div className="author_box pt-4">
                                  <div className="author_box_content">
                                    <h3 className="author_name text-white">
                                      Mr.Thaung Win Htay
                                    </h3>
                                    <span className="author_designation text-white">
                                      Managing Director
                                    </span>
                                  </div>
                                  <div className="quote_icon">
                                    <img
                                      src="/assets/images/icons/icon_quote.svg"
                                      alt="Quote Icon"
                                    />
                                  </div>
                                </div>
                                <p
                                  className="mb-0 text-white"
                                  style={{ textAlign: "justify" }}
                                >
                                  I’m deeply honored to address you as the
                                  Managing Director of Grand Asia Force Co.,Ltd.
                                  <Link
                                    className="text-white pt-2"
                                    to={"/message"}
                                  >
                                    Read more
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <Link className="nav-link" to={"/jobs"}>
                        Job Vacancies
                      </Link>
                    </li>

                    <li>
                      <Link to={"/submit-cv"}>Submit CV</Link>
                    </li>

                    <li class="dropdown">
                      <Link
                        class="nav-link"
                        href="#"
                        id="portfolio_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Activities
                      </Link>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="portfolio_submenu"
                      >

                        <ActivitiesList/>
                        
                      </ul>
                    </li>

                    <li>
                      <Link to={"/news"}>News</Link>
                    </li>

                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars" />
                  </button>
                </li>
                <li>
                  <Link
                    className="btn btn-outline-light"
                    to={"mailto:grandasiaforce.gaf@gmail.com"}
                  >
                    <span className="btn_label" data-text="Mail">
                      Send Mail
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
