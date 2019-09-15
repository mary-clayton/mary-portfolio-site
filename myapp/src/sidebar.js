import React from "react"
import styled from "styled-components"

const Menu = styled.div `
display: flex;
flex-flow: column;
margin-top: 0%;
width: 10%;
`

export default function SideBar () {
    return (
      <Menu className= "menu">
        <a className="menu-item" href="#Home">
          Home
        </a>
  
        <a className="menu-item" href="#aboutthedeveloper">
          About The Developer
        </a>
  
        <a className="menu-item" href="#skills">
          Skills
        </a>
  
        <a className="menu-item" href="#projects">
          Projects
        </a>
  
        <a className="menu-item" href="#contact">
          Contact
        </a>
      </Menu>
    );
  };