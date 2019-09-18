import React from "react";
import ContactForm from "./ContactForm"
import SocialMedia from "./SocialMedia"

export default function Footer () {
    return (
        <div className= "footer" id="contacts">
        <div className="info">
        <h2>Get in Touch</h2>
      <p className="paraone">
        Please leave your name, email, and message and I will get back to you within 48 hours. Only professional and business inqueries allowed.
        </p>
        </div>
        <div className="foot">
         <ContactForm className="contact" to="mary.cathlean@gmail.com" />
         <SocialMedia />
         </div>
        </div>
    )
}