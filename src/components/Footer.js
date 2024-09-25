// Footer.js
import React from "react";

function Footer() {
  return (
    <footer
      className="site_footer footer_layout_2 section_decoration"
      style={{
        backgroundImage: 'url("assets/images/shapes/bg_pattern_3.svg")',
      }}
    >
      <div className="decoration_item shape_image_1">
        <img src="assets/images/shapes/shape_space_2.svg" alt="Techco Shape" />
      </div>
      <div className="container">
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Useful Links </h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">Our achievements</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">Our partners</span>
                    </a>
                  </li>

                  <li>
                    <a href="#!">
                      <span className="icon_list_text">Contacts</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Our Company</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">MD's Message</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">Our Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">Submit CV</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon_list_text">News</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Job Vacancies</h3>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <a href="#!">Jobs in Thailand</a>
                  </li>

                  <li>
                    <a href="#!">Jobs in Japan</a>
                  </li>

                  <li>
                    <a href="#!">Jobs in Malaysia</a>
                  </li>

                  <li>
                    <a href="#!">Jobs in Singapore</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Keep in Touch </h2>
                <p>Do you have questions?</p>
                <ul className="social_icons_block unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer_bottom"
        style={{
          backgroundImage: 'url("assets/images/shapes/shape_space_6.svg")',
        }}
      >
        <div className="container">
          <p className="copyright_text m-0">
            <center>
              Copyright © 2024 Grand Asia Force Co.,Ltd, All rights reserved.
            </center>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
