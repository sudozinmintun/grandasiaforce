function Slider() {
  return (
    <section className="it_solution_hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="it_solution_hero_content"
              style={{
                backgroundImage:
                  'url("/assets/images/shapes/it_solution_hero_bg_1.svg")',
              }}
            >
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                👋 Hi We{" "}
                <span className="badge bg-secondary text-white">
                  Are Techco
                </span>
              </div>
              <h1>Grow your Business Organic &amp; IT Solution Technology</h1>
              <p>
                In today's competitive business, the demand for efficient and
                cost-effective IT solutions has never been more critical.
              </p>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <a className="btn" href="pricing.html">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                  </a>
                </li>
                <li>
                  <div className="review_short_info">
                    <div className="d-flex">
                      <img
                        src="/assets/images/icons/icon_stars_trustpilot.svg"
                        alt="Techco - Trustpilot Review"
                      />
                      <span>4.8</span>
                    </div>
                    <div className="review_counter">
                      From <b>200+</b> reviews
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="it_solution_hero_images unordered_list">
              <li>
                <img
                  src="/assets/images/hero/it_solution_hero_image_1.webp"
                  alt="Techco - IT Solution - Hero Image 1"
                />
              </li>
              <li>
                <div className="worldwide_clients">
                  <div className="counter_value">150+</div>
                  <p>Worldwide Country has lots of clients</p>
                  <ul className="avatar_group unordered_list">
                    <li>
                      <img
                        src="/assets/images/avatar/avatar_1.webp"
                        alt="Techco - Avatar Image"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/images/avatar/avatar_2.webp"
                        alt="Techco - Avatar Image"
                      />
                    </li>
                    <li>
                      <img
                        src="/assets/images/avatar/avatar_3.webp"
                        alt="Techco - Avatar Image"
                      />
                    </li>
                    <li>5k+</li>
                  </ul>
                </div>
              </li>
              <li>
                <ul className="categories unordered_list_block">
                  <li>
                    <a href="#!">
                      <span>Data Security</span>
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-solid fa-plus" />
                      <span>Web Development</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>Analytics &amp; Optimization</span>
                      <i className="fa-solid fa-plus" />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="business_growth_content"
                  style={{
                    backgroundImage:
                      'url("/assets/images/hero/it_solution_hero_image_2.webp")',
                  }}
                >
                  <div className="progress_content">
                    <div
                      className="business_growth"
                      data-pie='{ "percent": 88 }'
                    />
                    <p>get 88% of the best services and growth business</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
