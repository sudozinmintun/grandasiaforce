function Slider() {
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{
                  backgroundImage:
                    'url("assets/images/shapes/shape_title_under_line.svg")',
                }}
              >
                Overseas Employment Agency
              </div>
              <h1 className="text-white">
                Gramd <mark>Asia</mark> Force Company Limited
              </h1>
              <p>
                Grand Asia Force Co.,Ltd was founded by highly dedicated
                lifelong friends, who have profound knowledge and years long
                experience in :
              </p>
              <ul className="step_list text-white unordered_list_block">
                <li>Talents acquisition</li>
                <li>HR.– consulting</li>
                <li>Sourcing & Supplying dynamic labors</li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <a className="btn" href="pricing.html">
                    <span className="btn_label" data-text="Contact Us Today!">
                      Contact Us Today!
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right" />
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hotline_block" href="tel:+420318568511">
                    <span className="hotline_icon">
                      <i className="fa-solid fa-phone-volume" />
                    </span>
                    <span className="hotline_content">
                      <small>CONTACT US DAILY</small>
                      <strong className="text-white">+959 964 653 395</strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <img src="/data/logo.png" alt="Engine Image" />
              </div>
              <div className="image_wrap_2">
                <img
                  src="assets/images/hero/circle_engine_2.webp"
                  alt="Engine Image"
                />
              </div>
              <div className="image_wrap_3">
                <img
                  src="assets/images/hero/circle_engine_3.webp"
                  alt="Engine Image"
                />
              </div>
              <div className="image_wrap_4">
                <img
                  src="assets/images/hero/circle_engine_4.png"
                  alt="Engine Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape_image_1">
        <img src="assets/images/hero/shape_image_1.webp" alt="Engine Image" />
      </div>
      <div className="shape_image_2">
        <img src="assets/images/hero/shape_image_2.webp" alt="Engine Image" />
      </div>
      <div className="shape_image_3">
        <img src="assets/images/hero/shape_image_3.webp" alt="Engine Image" />
      </div>
      <div className="shape_image_4">
        <img src="assets/images/hero/shape_image_4.webp" alt="Engine Image" />
      </div>
    </section>
  );
}

export default Slider;
