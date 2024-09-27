import React from "react";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  //   const { id } = useParams();

  return (
    <div>
      <section className="blog_details_section section_space bg-light">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="details_item_image">
                <img
                  src="https://recruitmentmyanmarsak.com/admin/uploads/files/v3bgmik8raeo96w.jpg"
                  alt=""
                />
              </div>
              <h2 className="details_item_title">Job Search Advice</h2>
              <p style={{ textAlign: "justify" }}>
                There are a lot of elements that interest me about this role
                from the job description, but one of the key elements that
                really appealed to me is that I feel I would be a great fit
                within the company culture. I want to work in a progressive team
                and the collaborative of this company is something that
                interested me in this job. Looking over the company website, and
                from our previous discussions, I believe this role would also
                give me the ability to progress in my career and develop my
                skills in a lot of different areas such as ‘X, Y, Z’. I feel
                there would be a lot of opportunities for me to grow in my role
                and further my knowledge in ‘X’ and progress my career.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
