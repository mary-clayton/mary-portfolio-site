import React from "react"
import styled from "styled-components"

const Nav = styled.nav `
display: flex;
flex-flow: column;
margin-top: 0%;
width: 10%;
background-color: #7083a1;
height: 100%;
`

export default function SideBar () {
    return (
      <div className="sidebar">
      <Nav className= "menu">
      <a className="menu-item" href="#home">
          <h3>Mary Clayton</h3>
          <h5>Full Stack Developer</h5>

        </a>
        <a className="menu-item" href="#home">
          Home
        </a>
  
        <a className="menu-item" href="#aboutme">
          About
        </a>

        <a className="menu-item" href="#experience">
          Experience
        </a>

        <a className="menu-item" href="#skills">
          Skills
        </a>
  
        <a className="menu-item" href="#projects">
          Projects
        </a>
  
        <a className="menu-item" href="#contacts">
          Contact
        </a>

        <a className="menu-item" href="#contacts">
          Blog
        </a>
      </Nav>
      </div>
    );
  };