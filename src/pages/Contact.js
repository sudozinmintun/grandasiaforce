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

      <section className="contact_section section_space bg-light">
        <div className="container">
          <div className="contact_info_box row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_map_mark_2.svg"
                    alt="Map Mark SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Location</h3>
                  <p className="mb-0">
                    No.828, Room-A, 1th Floor, U Wisara Road, 34 Quarter, North
                    Dagon Township
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_calling_2.svg"
                    alt="Calling SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Contact</h3>
                  <p className="mb-0">+959 964 653 395</p>
                  <div className="mb-0"> +959 964 653 395 </div>
                  <br></br>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <img
                    src="assets/images/icons/icon_mail_3.svg"
                    alt="User Check SVG Icon"
                  />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">Email</h3>
                  <p className="mb-0">grandasiaforce.gaf@gmail.com</p>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="iconbox_block text-center"
                style={{ padding: "60px 30px 30px" }}
              >
                <div className="iconbox_icon">
                  <img src="/data/icons/line.png" alt="Calendar SVG Icon" />
                </div>
                <div className="iconbox_content">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src="/data/qr/1.png"
                        alt="QR Code for [description or purpose]"
                        style={{ width: "100%" }}
                      />
                      <Link to={"https://line.me/ti/p/Dq-ybgnIPN"}>
                        Add Friend
                      </Link>
                    </div>

                    <div className="col-md-6">
                      <img
                        src="/data/qr/2.png"
                        alt="QR Code for [description or purpose]"
                        style={{ width: "100%" }}
                      />
                      <Link to={"https://line.me/ti/p/c583UpTPHb"}>
                        Add Friend
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section_space pb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-7">
                <div className="contact_form mb-0">
                  <h3 className="details_item_info_title mb-1">
                    Send Us A Message
                  </h3>
                  <p className="mb-5">
                    Alternatively, you can fill out the contact form, and our
                    team will get back to you shortly.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_name">
                          Full Name
                        </label>
                        <input
                          id="input_name"
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_email">
                          Your Email
                        </label>
                        <input
                          id="input_email"
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="contact@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">
                          Your Phone
                        </label>
                        <input
                          id="input_phone"
                          className="form-control"
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="input_title" htmlFor="input_textarea">
                          Message
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
                </div>
              </div>

              <div className="col-lg-5">
                <div className="gmap_canvas ps-lg-5">
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
        </div>
      </section>
    </div>
  );
}
