import React from 'react';
import Projects from './projects'
import Footer from './footer'
import About from './about'
import Skills from './skills'

export default function Intro () {
    return (
<div className="container" id= "intro">
<h1> I want to create software that makes a difference.
</h1>
<About />
<Skills />
<Projects /> 
<Footer />
</div>

)
}