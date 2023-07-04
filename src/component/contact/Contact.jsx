import React, { useRef } from "react";
import "../contact/Contact.css";
import emailjs from "emailjs-com";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bbo2rm",
        "template_qgbpsju",
        form.current,
        "8k2RGYzRvupJ8MMXl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="contact-form">
      <h2>CONTACT ME</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <button type="submit" value="Send">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
