import React from "react";
import styled from "styled-components";
import images from "./Images/img.jpg";

const Sections = styled.section`
  display: flex;
`;
const Para = styled.p`
  color: white;
  font-size: 1rem;
`;

export default function Projects() {
  return (
    <div className="projectone" id ="projects">
      <Sections>
        <img className="sea" src={images} alt="sea" />
        <div className="columns">
          <h2>My Great Idea Page</h2>
          <Para>
            This is my first project I worked on at Lambda School. It contains a
            nav bar, a logo, a header with a page, two rows of content, a middle
            image, and a contact footer with copyright text. I used pain plain
            HTML, CSS, and responsive design on this project.
          </Para>
        </div>
      </Sections>
      <Sections></Sections>
      <Sections>
        <img className="sea" src={images} alt="sea" />
        <div className="columns">
          <h2>Nasa Photo of the Day</h2>
          <Para>
            We did this for our first sprint challenge. It contains a nav bar, a
            logo, an about section, two rows (Strategy, How We Work, Places We
            Work, and Collaboration, a "Let's Work Together" section, and a
            bottom nav bar. I used plain HTML and CSS on this project.
          </Para>
        </div>
      </Sections>
      <Sections>
        <img className="sea" src={images} alt="sea" />
        <div className="columns">
          <h2>React Wars</h2>
          <Para>lorem ipsum</Para>
        </div>
      </Sections>
    </div>
  );
}
