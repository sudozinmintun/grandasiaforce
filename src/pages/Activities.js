import React from "react";
import { Link, useParams } from "react-router-dom";
import SlugTitle from "../utility/SlugTitle";

const images = [
  "1.jpg",
  "1686130380901.jpg",
  "2.jpg",
  "3.jpg",
  "1695437245757.jpg",
  "1695437245875.jpg",
  "1698032191398.jpg",
  "1709544458944.jpg",
  "1709544468253.jpg",
  "1724520207248.jpg",
  "1724520207455.jpg",
  "1724520227261.jpg",
  "1724520227446.jpg",
  "IMG_20230907_133034.jpg",
  "IMG_20240419_161457.jpg",
  "IMG_20240419_161502.jpg",
  "IMG_20240419_161609.jpg",
];

const th_images = [
  "1683527690853.jpg",
  "1683527690967.jpg",
  "1683784080751.jpg",
  "1683784080841.jpg",
  "1683784080977.jpg",
];

function Activities() {
  const { slug } = useParams();
  const selectedImages = slug === "labour-activities" ? th_images : images;
  const columnClass = slug === "labour-activities" ? "col-lg-6" : "col-lg-3";

  return (
    <div>
      <section
        className="page_banner_section text-center"
        style={{
          backgroundImage: 'url("/assets/images/shapes/bg_pattern_4.svg")',
        }}
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            Our
            <span className="badge bg-secondary">Activities 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">
            <SlugTitle slug={slug} />
          </h1>
        </div>
      </section>

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

                  <h2 className="heading_text">
                    {slug === "labour-activities"
                      ? "Labour Activities"
                      : "Japanese Interviews and Activities"}
                  </h2>
                  <p className="heading_description mb-0">
                    {slug === "labour-activities"
                      ? "Explore labour activities, focusing on worker rights, safety protocols, and career development opportunities."
                      : "Explore Japanese interviews and activities, focusing on etiquette and cultural insights for successful job hunting and heritage appreciation."}
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
            {selectedImages.map((imageName, index) => (
              <div
                className={
                  slug === "labour-activities" ? "col-lg-6" : "col-lg-3"
                }
              >
                <div className="portfolio_block portfolio_layout_1">
                  <div className="portfolio_image">
                    <a className="portfolio_image_wrap bg-light" href="#!">
                      <img
                        key={index}
                        src={`/data/japan/${imageName}`}
                        alt={`Japan ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "250px",
                          backgroundSize: "cover",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </a>
                  </div>
                  <div
                    className="portfolio_content"
                    style={{ padding: "14px 30px 28px" }}
                  >
                    <h6 class="portfolio_title" style={{ fontSize: "21px" }}>
                      <SlugTitle slug={slug} />
                    </h6>
                    <ul className="category_list unordered_list">
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-building" /> Grand Asia
                          Force Co.,Ltd
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Activities;
