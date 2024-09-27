import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <section className="portfolio_section section_space bg-light">
        <div className="container">
          <div class="container">
            <div class="heading_block">
              <div class="row align-items-end">
                <div class="col-lg-7">
                  <div class="heading_focus_text">
                    <span class="badge bg-secondary text-white">Crafting</span>
                    Success With 😍 Us
                  </div>
                  <h2 class="heading_text">Our Services</h2>
                  <p class="heading_description mb-0">
                    Sourcing both male and female, age range, physically fit
                    Myanmar labors as required by prospect overseas employer
                  </p>
                </div>
                <div class="col-lg-5 d-none d-lg-flex justify-content-end">
                  <Link class="btn btn-primary" to={"/contact"}>
                    <span class="btn_label" data-text="Contact">
                      Contact Us
                    </span>
                    <span class="btn_icon">
                      <i class="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="filter_elements_wrapper row">
            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/1.png"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/2.png"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/3.png"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/4.png"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="container">
          <div class="container">
            <div class="heading_block">
              <div class="row align-items-end">
                <div class="col-lg-12">
                  <p class="heading_description mb-0">
                    Providing all the recruitment processes: since scouring the
                    right lobours, applying passport , medical check up, giving
                    necessary training, applying work permit and visa, and so
                    until the labours are sent to the factories or work site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="filter_elements_wrapper row">
            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/5.jpg"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/6.png"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="container">
          <div class="container">
            <div class="heading_block">
              <div class="row align-items-end">
                <div class="col-lg-12">
                  <p class="heading_description mb-0">
                    Provide free of charge after employment consultancy service,
                    sending our bilingual personnel to your premises as per your
                    request to solving any problems that may occur over the time
                    and leave you at worry free for the contracted employment
                    period.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="filter_elements_wrapper row">
            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/7.jpg"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio_block portfolio_layout_1">
                <div className="portfolio_image">
                  <a className="portfolio_image_wrap bg-light" href="#!">
                    <img
                      src="/data/services/8.jpg"
                      alt="Services"
                      style={{
                        width: "100%",
                        height: "330px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
