import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://www.grandasiaforce-gaf.com/admin/api/teams.php");
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div>
      <section className="team_section section_space">
        <div className="container">
          <div className="heading_block text-center">
            <div className="heading_focus_text">
              <span className="badge bg-secondary text-white">Our Expert</span>
              Team Members 😍
            </div>
            <h2 className="heading_text mb-0">Skilled Experts</h2>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={member.id}>
                <div className="team_block">
                  <div className="team_member_image">
                    <Link
                      className="image_wrap"
                      aria-label="Team Details Button"
                      to="#"
                    >
                      <img
                        src={member.photo} 
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "500px",
                          backgroundSize: "cover",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="team_member_info">
                    <h3 className="team_member_name">
                      <Link to="#">{member.name}</Link>
                    </h3>
                    <h4 className="team_member_designation">{member.position}</h4>
                    <ul className="social_icons_block unordered_list justify-content-center">
                      <li>
                        <a href="#!">
                          <img
                            src="assets/images/icons/icon_facebook.svg"
                            alt="Icon Facebook"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <img
                            src="assets/images/icons/icon_twitter_x.svg"
                            alt="Icon Twitter X"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <img
                            src="assets/images/icons/icon_linkedin.svg"
                            alt="Icon Linkedin"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <img
                            src="assets/images/icons/icon_instagram.svg"
                            alt="Icon Instagram"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
