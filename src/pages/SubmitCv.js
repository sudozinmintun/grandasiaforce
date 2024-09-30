import React, { useState } from 'react';


export default function SubmitCv() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additionalNote: '',
    attachmentFile: null,
  });


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Store the file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://www.grandasiaforce-gaf.com/admin/api/cv.php', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

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

                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                          value={formData.name}
                          onChange={handleChange}
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
                          placeholder="Your Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
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
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span>Choose CV</span>
                        <input
                          type="file"
                          name="attachmentFile"
                          required
                          onChange={handleChange}
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
                          name="additionalNote"
                          placeholder="Message..."
                          value={formData.additionalNote}
                          onChange={handleChange}
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
                </form>

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
