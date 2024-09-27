import React from "react";

export default function Message() {
  return (
    <div>
      <section className="team_details_section section_space bg-light">
        <div className="container">
          <div
            className="team_member_details_card"
            style={{ marginBottom: "30px" }}
          >
            <div className="row d-flex align-items-center">
              <div className="col-md-4 ">
                <img
                  src="/data/md.jpg"
                  alt="MD"
                  style={{
                    width: "100%",
                    height: "auto",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    objectPosition: "center",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    borderRadius: "10px",
                  }}
                />

                <div style={{ padding: "10px", textAlign: "center" }}>
                  <h5>Mr.Thaung Win Htay</h5>
                  <h6>Managing Director</h6>
                </div>
              </div>

              <div className="col-md-8">
                <div className="team_member_content">
                  <h5
                    className="team_member_name"
                    style={{ fontSize: "20px", marginBottom: "0px" }}
                  >
                    A Warm Welcome from Our MD
                  </h5>

                  <p className="" style={{ textAlign: "justify" }}>
                    I’m deeply honored to address you as the Managing Director
                    of Grand Asia Force Co.,Ltd. Our mission is to serve as a
                    bridge between your career aspirations and the global
                    opportunities that await you. Your trust and confidence in
                    our services drive us to deliver excellence, offering you
                    the support, guidance, and opportunities you deserve.
                    <br></br>
                    Our dedicated team is committed to ensuring your journey
                    toward international employment is seamless and rewarding.
                    As we look forward, we remain focused on innovation, ethical
                    practices, and a commitment to your success. Your success is
                    our success, and we are excited to embark on this journey
                    together, creating a brighter and more prosperous future for
                    all.
                    <br></br>
                    <span>
                      Thank you for choosing our company as your trusted partner
                      in your overseas employment endeavors.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="team_member_details_card"
            style={{ marginBottom: "30px" }}
          >
            <div className="row d-flex align-items-center">
              <div className="col-md-8">
                <div className="team_member_content">
                  <h5
                    className="team_member_name"
                    style={{ fontSize: "20px", marginBottom: "0px" }}
                  >
                    A Warm Welcome from Director
                  </h5>

                  <p className="" style={{ textAlign: "justify" }}>
                    I am honored to serve as the Director of [Company Name]. Our
                    agency's core purpose is to facilitate your journey to
                    overseas employment. We understand that your aspirations and
                    ambitions drive us to provide you with the best
                    opportunities and solutions.
                    <br></br>
                    Our dedicated team is committed to guiding you on this path,
                    ensuring transparency, adherence to ethical practices, and
                    excellence in service. Your trust and collaboration with us
                    inspire us to continuously improve and adapt to the
                    ever-changing global job market. We are excited to embark on
                    this journey with you and look forward to building a
                    brighter future together.
                    <br></br>
                    <span>
                      Thank you for entrusting our company as your overseas
                      employment partner.
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-md-4 ">
                <img
                  src="/data/dr.jpg"
                  alt="MD"
                  style={{
                    width: "100%",
                    height: "auto",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    objectPosition: "center",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    borderRadius: "10px",
                  }}
                />

                <div style={{ padding: "10px", textAlign: "center" }}>
                  <h5>Mr.Naing Win Tun</h5>
                  <h6>Director</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
