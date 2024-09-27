import React from "react";

export default function AboutUs() {
  return (
    <div>
      <section className="intro_about_section section_space bg-light">
        <div className="intro_about_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="image_wrap">
                  <img src="/data/2.png" alt="About Techco" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="image_wrap position-relative">
                  <img
                    src="/data/bg/1.jpg"
                    alt="About Techco"
                    style={{
                      width: "100%",
                      height: "470px",
                      backgroundSize: "cover",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
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
                <h2 className="heading_text mb-0">Company Profile 2024</h2>
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
    </div>
  );
}
