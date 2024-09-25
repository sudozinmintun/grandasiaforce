import React from "react";

export default function Organization() {
  return (
    <div>
      <section
        className="blog_section_2 pt-4"
        style={{
          backgroundImage: 'url("assets/images/backgrounds/bg_image_4.webp")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="heading_block text-center">
                <h2 className="heading_text">Organization Structure</h2>
                <p className="heading_description text-dark mb-0">
                  Grand Asia Force Co.,Ltd
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="blog_post_block_2">
                <div className="blog_post_image">
                  <img src="data/org.png" alt="Organization Structure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
