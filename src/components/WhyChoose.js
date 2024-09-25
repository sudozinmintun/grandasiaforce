import React from "react";

export default function WhyChoose() {
  return (
    <div>
      <section
        className="process_technology_review_section  section_decoration"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="heading_block">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{
                    backgroundImage:
                      'url("/assets/images/shapes/shape_title_under_line.svg")',
                  }}
                >
                  Working Process
                </div>
                <h2 className="heading_text mb-0">
                  Why <mark>Choose Us</mark>
                </h2>
              </div>
              <div className="accordion" id="service_process_faq">
                <div className="accordion-item">
                  <div
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_one"
                    aria-expanded="true"
                    aria-controls="collapse_one"
                  >
                    01. Expertise and Experience:
                  </div>
                  <div
                    id="collapse_one"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        With over a decade of experience in overseas employment,
                        we have developed a deep understanding of the
                        intricacies involved in various industries and regions,
                        making us your trusted partner in this journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_two"
                    aria-expanded="false"
                    aria-controls="collapse_two"
                  >
                    02. Quality Assurance
                  </div>
                  <div
                    id="collapse_two"
                    className="accordion-collapse collapse"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        Our relentless commitment to quality ensures that job
                        seekers find positions that align with their skills and
                        aspirations, while employers discover talent that
                        propels their businesses forward.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_three"
                    aria-expanded="false"
                    aria-controls="collapse_three"
                  >
                    03. Comprehensive Services
                  </div>
                  <div
                    id="collapse_three"
                    className="accordion-collapse collapse"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        From visa procurement to pre-departure orientation and
                        continuous support, we offer a complete suite of
                        services to ensure a smooth and successful overseas
                        employment experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_four"
                    aria-expanded="false"
                    aria-controls="collapse_four"
                  >
                    04. Global Network
                  </div>
                  <div
                    id="collapse_four"
                    className="accordion-collapse collapse"
                    data-bs-parent="#service_process_faq"
                  >
                    <div className="accordion-body">
                      <p className="m-0">
                        Our vast global network connects you to opportunities
                        you might not find elsewhere. We have strong
                        relationships with employers and job seekers across the
                        world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <ul className="content_layer_group unordered_list_block text-center">
                <li
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_one"
                  aria-expanded="true"
                  aria-controls="collapse_one"
                >
                  <span>Expertise and Experience</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_two"
                  aria-expanded="false"
                  aria-controls="collapse_two"
                >
                  <span>Quality Assurance</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_three"
                  aria-expanded="false"
                  aria-controls="collapse_three"
                >
                  <span>Comprehensive Services</span>
                </li>
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_four"
                  aria-expanded="false"
                  aria-controls="collapse_four"
                >
                  <span>Global Network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="decoration_item shape_image_1">
          <img
            src="/assets/images/shapes/shape_line_2.svg"
            alt="Techco Shape"
          />
        </div>
        <div className="decoration_item shape_image_2">
          <img
            src="/assets/images/shapes/shape_line_3.svg"
            alt="Techco Shape"
          />
        </div>
        <div className="decoration_item shape_image_3">
          <img
            src="/assets/images/shapes/shape_line_4.svg"
            alt="Techco Shape"
          />
        </div>
      </section>
    </div>
  );
}
