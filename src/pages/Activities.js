import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SlugTitle from "../utility/SlugTitle";

function Activities() {
  const { id } = useParams(); // Get the dynamic id from URL params
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch activities from the API based on the dynamic id
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          `https://www.grandasiaforce-gaf.com/admin/api/activities.php?category_id=${id}` // Use the dynamic id here
        );
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        const data = await response.json();
        setActivities(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchActivities();
  }, [id]); // Add id to the dependency array to refetch if it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            Our
            <span className="badge bg-secondary">Activities 😍</span>
          </div>
          <h1 className="page_title mb-0 text-white">
            {activities.length > 0 ? activities[0].category_title : "Our Activities"}
          </h1>
        </div>
      </section>

      <section className="portfolio_section section_space bg-light">
        <div className="container">
          <div className="heading_block">
            <div className="row align-items-end">
              <div className="col-lg-7">
                <div className="heading_focus_text">
                  <span className="badge bg-secondary text-white">Crafting</span>
                  Success With 😍 Us
                </div>

                <h2 className="heading_text">
                  {activities.length > 0 ? activities[0].category_title : "Our Activities"}
                </h2>
                <p className="heading_description mb-0">
                  {activities.length > 0 ? activities[0].title : "Discover various activities showcasing our efforts and achievements in different domains."}
                </p>
              </div>

              <div className="col-lg-5 d-none d-lg-flex justify-content-end">
                <Link className="btn btn-primary" to={"/contact"}>
                  <span className="btn_label" data-text="Contact">
                    Contact Us
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="filter_elements_wrapper row">
            {activities.map((activity) => (
              <>
                {activity.images.split(",").map((image, index) => (
                  <div className="col-lg-3">
                    <div className="portfolio_block portfolio_layout_1">
                      <div className="portfolio_image">
                        <div className="portfolio_image_wrap bg-light">
                          <img
                            key={index}
                            src={image.trim()}
                            alt={`Activity ${activity.id} - Image ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "250px",
                              backgroundSize: "cover",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>

                        <div
                          className="portfolio_content"
                          style={{ padding: "14px 30px 28px" }}
                        >
                          <h6 class="portfolio_title" style={{ fontSize: "21px" }}>
                            {activities.length > 0 ? activities[0].category_title : "Our Activities"}
                          </h6>
                          <ul className="category_list unordered_list">
                            <li>
                              <a href="#!">
                                <i className="fa-solid fa-building" /> Grand Asia
                                Force Co.,Ltd
                              </a>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Activities;
