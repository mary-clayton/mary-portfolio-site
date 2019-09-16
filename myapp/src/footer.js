import React from "react";
import ContactForm from "./ContactForm"
import SocialMedia from "./SocialMedia"

export default function Footer () {
    return (
        <div className= "footer" id="contacts">
        <div className="info">
        <h2>Get in Touch</h2>
      <p className="paraone">
        Attempt to leap between furniture but woefully miscalibrate and
        bellyflop onto the floor; what's your problem? i meant to do that now i
        shall wash myself intently meow in empty rooms. 
        </p>
        </div>
        <div className="foot">
         <ContactForm className="contact" to="mary.cathlean@gmail.com" />
         <SocialMedia />
         </div>
        </div>
    )
}