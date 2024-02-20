import React from "react";
import "./About.css";
import { Accordion } from "@mantine/core";

const About = () => {
  const aboutpageContainer = [
    {
      para1:
        "Established in 2004, Mashtech Engineers has emerged as a prominent leader in the market, distinguished for its unwavering commitment to quality work. Operating as a sole proprietorship, our headquarters is strategically located in Karur, with branches extending our presence to Salem and Trichy in Tamil Nadu.",
    },
    {
      title: "Our Expertise: Quality Manufacturing",
      para2:
        "At Mashtech Engineers, we bring forth a wealth of experience in our domain. As a company dedicated to excellence, we specialize in the manufacturing of a diverse range of products, with a focus on delivering top-notch quality. Our extensive product line includes APFC Panels, AMF Controller Logic Panels, and a variety of other solutions that have garnered acclaim for their utmost quality.",
    },
    {
      title: "Geographical Presence: Karur, Salem, Trichy",
      para3:
        "With our roots firmly planted in Karur, we have expanded our footprint with branches in Salem and Trichy, strategically positioning ourselves to cater to a broader audience in Tamil Nadu.",
    },
    {
      title: "Commitment to Quality: Our Hallmark",
      para4:
        "Quality is the cornerstone of our business philosophy. Each product from Mashtech Engineers is crafted with precision and attention to detail, ensuring not just functionality but excellence in every aspect.",
    },
  ];
  return (
    <div>
      <div className="about-page">
        <div className="about-page-banner-container">
          <h2>About us</h2>
          <h5 className="about-page-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ about us
          </h5>
        </div>
        <div className="about-page-container">
          {aboutpageContainer.map((value, index) => {
            return (
              <div className="about-page-container">
                <p>{value.para1}</p>
                <h2>{value.title}</h2>
                <p>{value.para2}</p>
                <p>{value.para3}</p>
                <p>{value.para4}</p>
              </div>
            );
          })}
        </div>
        <div className="about-page-vision-mission-container">
          <h2>Our Vision and Mission</h2>
          <Accordion className="separated" variant="separated">
            <Accordion.Item
              className="abour-page-vision-container"
              value="camera1"
            >
              <Accordion.Control>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="eye-icon icon-tabler icon-tabler-eye"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>{" "}
                  Vision
                </h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Our commitment is to deliver outstanding results that will
                  exceed customer expectation.
                </p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item
              className="abour-page-mission-container"
              value="camera2"
            >
              <Accordion.Control>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="arrow-icon icon-tabler icon-tabler-target-arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 7a5 5 0 1 0 5 5" />
                    <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                    <path d="M15 6v3h3l3 -3h-3v-3z" />
                    <path d="M15 9l-3 3" />
                  </svg>{" "}
                  Mission
                </h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  We live by our Service Commitment, Delivering Results and
                  Exceeding Expectations.
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
