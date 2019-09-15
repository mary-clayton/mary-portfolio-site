import React from "react";
import ReactContactForm from 'react-mail-form';

export default function Footer () {
    return (
        <div>
            <h2>Contact</h2>
            <ReactContactForm className="contact" to="mary.clayton@mary-cathlean.com" />
        </div>
    )
}