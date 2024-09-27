import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div>
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
                      alt=""
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
                    href="#!"
                  >
                    <img
                      src="assets/images/team/team_member_image_2.webp"
                      alt=""
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
                    href="#!"
                  >
                    <img
                      src="assets/images/team/team_member_image_3.webp"
                      alt="MD"
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
    </div>
  );
}
