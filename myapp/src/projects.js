import React from "react";
import styled from "styled-components";
import imageone from "./Images/empathycalc.png";
import imagetwo from "./Images/nasapod.png";
import imagethree from "./Images/reactwars.png";

const Para = styled.p`
  color: black;
  font-size: 1rem;
`;
const ButtonOne = styled.button`
  border-radius: 6px;
  box-shadow: 4px 4px 12px #7083a3;
  border: 0px;
  color: white;
  background-color: #a1b5d6;
  height: 30px;
`;
const Links = styled.a`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;
export default function Projects() {
  return (
    <div className="projectone" id="projects">
      <div className="cardone">
        <img className="images" src={imageone} alt="sea" />
        <div className="columns">
          <h2>Domestic Violence Empathy Calculator</h2>
          <Para>
            This projects focuses on creating empathy through the costs of
            victims of domestic violence. I worked as a UI developer with a team
            of 9 people on this project.{" "}
          </Para>
          <h6>Technologies used: </h6>
          <Para>HTML, CSS, Responsive Design, React.js, SQL</Para>
          <ButtonOne>
            <Links href="https://github.com/DV-Empathy-Builder/landing-page-merge-fix">
              View More
            </Links>
          </ButtonOne>
        </div>
      </div>
      <div className="cardtwo">
        <img className="images" src={imagetwo} alt="nasa pod" />
        <div className="columns">
          <h2>Nasa Photo of the Day</h2>
          <Para>
            This project focuses on providing the astronomy photo of the day
            through NASA. NASA's POD API was used to collect this data. I worked
            on all aspects on this assignment.
          </Para>
          <h6>Technologies used: </h6>
          <Para>Javascript, React.js, CSS</Para>
          <ButtonOne>
            <Links href="https://nasaphotoaday.netlify.com/">
              View More
            </Links>
          </ButtonOne>
        </div>
      </div>
      <div className="cardthree">
        <img className="images" src={imagethree} alt="react wars" />
        <div className="columns">
          <h2>React Wars</h2>
          <Para>
            This project focuses on using the Star Wars API and receiving that
            data for the React Wars database. I worked on all the aspects of the
            assignment.
          </Para>
          <h6>Technologies used: </h6>
          <Para>Javascript, React.js, CSS</Para>
          <ButtonOne>
            <Links href="https://github.com/mary-clayton/Sprint-Challenge-React-Wars">
              View More
            </Links>
          </ButtonOne>
        </div>
      </div>
    </div>
  );
}
