import React from "react";

function ContactForm() {
  return (
    <div className="contactform">
      <form
        className="form"
        action="https://formspree.io/mary.cathlean@gmail.com"
        method="POST"
      >
        <span className="inputs">
          <label>Name</label>
          <input type="text" id="name" name="firstname" />
        </span>
        <span className="inputs">
          <label>Email</label>
          <input type="email" id="email" name="email" />
        </span>
        <span className="inputs">
          <label>Message</label>
          <textarea id="message" name="message"></textarea>
          <button className="button">SEND MESSAGE</button>
        </span>
      </form>
    </div>
  );
}
export default ContactForm;
