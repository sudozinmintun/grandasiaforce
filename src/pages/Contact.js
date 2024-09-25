import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
            <span className="badge bg-secondary">Contact</span>
            Us
          </div>
          <h1 className="page_title mb-0 text-white">Contact Us</h1>
        </div>
      </section>

      <section className="policy_section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_user_check.svg"
                    alt="User Check SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Mr Thaung Win Htay</h3>
                  <p className="mb-0">
                    htay.t@grandasiaforce-gaf.com <br></br>
                    +959 7501 26100(Mobile & WhatsApp) <br></br>
                    +669 4296 6106 <br></br>
                    Line ID: winhtay36
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <img
                src="/data/qr/new1.jpg"
                alt=""
                style={{ width: "50%", padding: "10px" }}
              ></img>
              <img
                src="/data/qr/new2.jpg"
                alt=""
                style={{ width: "50%", padding: "10px" }}
              ></img>
            </div>

            <div className="col-lg-4">
              <div className="iconbox_block layout_icon_left">
                <div className="iconbox_icon bg-secondary-subtle">
                  <img
                    src="assets/images/icons/icon_user_check.svg"
                    alt="Dollar SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Mr Naing Win Tun</h3>
                  <p className="mb-0">
                    tun.n@grandasiaforce-gaf.com <br></br>
                    +959 7771 85588 <br></br>
                    +669 0010 4512 <br></br>
                    Line ID: winhtay36
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section pb-80 bg-light section_decoration">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact_method_box">
                <div className="heading_block">
                  <div
                    className="heading_focus_text has_underline d-inline-flex mb-3"
                    style={{
                      backgroundImage:
                        'url("/ assets/images/shapes/shape_title_under_line.svg")',
                    }}
                  >
                    You Are Here
                  </div>
                  <h2 className="heading_text mb-0">Let's Start</h2>
                  <p className="heading_description mb-0">
                    Initiating Your Journey to Success and Growth.
                  </p>
                </div>

                <ul className="contact_method_list unordered_list_block">
                  <li>
                    <a href="#!">
                      <span className="icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      <span className="text">
                        No.828, Room-A, 1st Floor, U Wisara Road, North Dagon
                        Township, Yangon, Myanmar.
                      </span>
                    </a>
                  </li>

                  <li>
                    <Link to={"tel:+959 750 126100"}>
                      <span className="icon">
                        <i className="fa-solid fa-phone-volume" />
                      </span>
                      <span className="text">+959 750 126100</span>
                    </Link>
                  </li>

                  <li>
                    <Link to={"mailto:grandasiaforce.gaf@gmail.com"}>
                      <span className="icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <span className="text">grandasiaforce.gaf@gmail.com</span>
                    </Link>
                  </li>

                  <li>
                    <Link to={""}>
                      <span className="icon">
                        <i className="fa-solid fa-globe" />
                      </span>
                      <span className="text">grandasiaforce-gaf.com</span>
                    </Link>
                  </li>
                </ul>

                <ul className="support_step unordered_list_block">
                  <li>
                    <span className="serial_number">01</span>
                    <span className="text">Share your requirements</span>
                  </li>
                  <li>
                    <span className="serial_number">02</span>
                    <span className="text">Discuss them with our experts</span>
                  </li>
                  <li>
                    <span className="serial_number">03</span>
                    <span className="text">Work with together</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="instant_contact_form">
                <div className="small_title">
                  <i className="fa-solid fa-envelope-open-text" />
                  &nbsp; Send Us A Message
                </div>
                <h3 className="form_title">
                  Alternatively, you can fill out the contact form, and our team
                  will get back to you shortly.
                </h3>
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
                      <label className="input_title" htmlFor="input_company">
                        <i className="fa-regular fa-globe" />
                      </label>
                      <input
                        id="input_company"
                        className="form-control"
                        type="text"
                        name="companyname"
                        placeholder="Your Company Name"
                      />
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
                        placeholder="How can we help you?"
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <span className="btn_label" data-text="Send Message">
                        Send Message
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right" />
                      </span>
                    </button>
                  </div>
                </div>
                <br></br>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="gmap_canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1222931324646!2d96.17503887421432!3d16.869843917510092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1937c8b0f3641%3A0x35627d86e6a39d70!2sGrand%20Asia%20Force%20Co.%2C%20Ltd.!5e0!3m2!1sen!2s!4v1727147896317!5m2!1sen!2s"
                  width={600}
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Grand Asia Force Co., Ltd." // Unique title added
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="decoration_item shape_image_1">
          <img src="/assets/images/shapes/shape_line_5.svg" alt="" />
        </div>
        <div className="decoration_item shape_image_2">
          <img src="/assets/images/shapes/shape_line_6.svg" alt="" />
        </div>
        <div className="decoration_item shape_image_3">
          <img src="/assets/images/shapes/shape_space_5.svg" alt="" />
        </div>
      </section>
    </div>
  );
}
