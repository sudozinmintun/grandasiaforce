import React from "react";
import CustomerLogo from "./CustomerLogo";
import { Link, useLocation } from "react-router-dom";

export default function JobList({
  maintitle = "Job Vacancies",
  subtitle = "Our Services",
}) {
  const location = useLocation();
  return (
    <div>
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
              {subtitle}
            </div>
            <h2 className="heading_text mb-0">{maintitle}</h2>
          </div>

          <div className="row">
            
            {location.pathname === "/jobs" && (
              <div className="col-md-12">
                <CustomerLogo />
              </div>
            )}

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
                  <Link to={"/submit-cv"}>THAILAND</Link>
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
                  <Link to={"/submit-cv"}>JAPAN</Link>
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
                  <Link to={"/submit-cv"}>MALAYSIA</Link>
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
    </div>
  );
}
