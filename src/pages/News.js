import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div>
      <section
        className="blog_section section_space bg-light"
        style={{
          backgroundImage: 'url("assets/images/shapes/bg_pattern_1.svg")',
        }}
      >
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Update</span>
              News
            </div>
            <h2 className="heading_text mb-0">News & Info </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog_post_block">
                <div className="blog_post_image">
                  <Link className="image_wrap" to={`/news/detail/1`}>
                    <img
                      src="https://recruitmentmyanmarsak.com/admin/uploads/files/v3bgmik8raeo96w.jpg"
                      alt=""
                      style={{
                        width: "100%",
                        height: "250px",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </Link>
                </div>
                <div className="blog_post_content">
                  <div className="post_meta_wrap">
                    <ul className="category_btns_group unordered_list">
                      <li>
                        <Link to={`/news/detail/1`}>Admin</Link>
                      </li>
                    </ul>
                    <ul className="post_meta unordered_list">
                      <li>
                        <Link to={`/news/detail/1`}>
                          <img
                            src="assets/images/icons/icon_calendar.svg"
                            alt="Icon Calendar"
                          />{" "}
                          9/24/2024
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog_post_title">
                    <Link to={`/news/detail/1`}>Job Search Advice</Link>
                  </h3>
                  <Link className="btn_unfill" to={`/news/detail/1`}>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                    <span className="btn_label">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
