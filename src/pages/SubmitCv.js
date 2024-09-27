import React from "react";

export default function SubmitCv() {
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
            Apply for your
            <span className="badge bg-secondary">Job</span>
          </div>
          <h1 className="page_title mb-0 text-white">Submit CV</h1>
        </div>
      </section>

      <section className="contact_section pb-80 bg-light section_decoration">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="instant_contact_form">
                <h3 className="form_title">Job Application Form</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_title" htmlFor="input_name">
                        <i className="fa-regular fa-user" />
                      </label>
                      <input
                        id="input_name"
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_title" htmlFor="input_email">
                        <i className="fa-regular fa-envelope" />
                      </label>
                      <input
                        id="input_email"
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Your Enter"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input_title" htmlFor="input_phone">
                        <i className="fa-regular fa-phone-volume" />
                      </label>
                      <input
                        id="input_phone"
                        className="form-control"
                        type="tel"
                        name="phone"
                        placeholder="Your Phone No."
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <span>Choose CV</span>
                      <input type="file" name="companyname" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="input_title" htmlFor="input_textarea">
                        <i className="fa-regular fa-comments" />
                      </label>
                      <textarea
                        id="input_textarea"
                        className="form-control"
                        name="message"
                        placeholder="Message..."
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <span className="btn_label" data-text="Apply">
                        Apply Now
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right" />
                      </span>
                    </button>
                  </div>
                </div>
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
            src="assets/images/shapes/shape_space_5.svg"
            alt="Techco Shape"
          />
        </div>
      </section>
    </div>
  );
}
