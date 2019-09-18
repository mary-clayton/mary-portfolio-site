import React from "react";
import styled from "styled-components";

export default function About() {
  const Para = styled.p`
    font-size: 1.4rem;
    margin-top: 2%;
    margin-left: 3%;
    width: 95%;
  `;
  return (
    <div className="about" id="aboutme">
      <h2 className="title">About</h2>
      <Para className="para">
        A well-rounded Full Stack Developer who is passionate about
        brainstorming with a connective team building software and web
        applications for a better future.
        <br></br>
        <br></br>I always am driven to new opportunities and challenges. Through
        my passion for UI design and web development, I am have taken the
        opportunity to work as a software developer in training at Lambda School and 
        I have a Bachelor's degree in digital design with an emphasis of Animation.
        As a web developer, I bring my innovative, organized, and sociable nature in order
        to create web applications as well as software to make a difference. 
      </Para>
    </div>
  );
}
