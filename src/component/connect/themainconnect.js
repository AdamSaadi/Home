import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false); // Define emailSent state and setEmailSent function

  function sendemail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4gj1j09",
        "template_c8awr0a",
        e.target,
        "cz7PvekM1HDonXWur"
      )
      .then((res) => {
        console.log(res);
        setEmailSent(true); // Update emailSent state to indicate email was sent
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setEmailSent(false); // Hide the pop-up message after 2 seconds
        }, 2500);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contactForm">
      {emailSent && (
        <div className="popup">
          <p>Email sent, thank you!</p>
        </div>
      )}
      <div className="the-text-in-connection">
        <h2>Get in Touch</h2>
        <p className="pisp">
          I'm always here to help. Whether you have a question, want to discuss
          a potential project, or just want to say hello, I'd love to hear from
          you.
        </p>
        <p className="pisp">
          If you're interested in working together, please don't hesitate to
          reach out.
        </p>
        <p className="pisp">
          Thank you for your interest, I look forward to connecting with you!
        </p>
      </div>
      <form onSubmit={sendemail}>
        <div className="form-gruop">
          <label htmlFor="name">
            <input
              className="text-box"
              placeholder="Your Name."
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-gruop">
          <label htmlFor="email">
            <input
              className="text-box"
              placeholder="Your Email."
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-gruop">
          <label htmlFor="message">
            <textarea
              className="massage"
              placeholder="Type Your Message..."
              type="submit"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="subb" type="submit"><span className="send-btn-connetion"> Send </span><i className="send-btn-connetion-ii"></i></button>
      </form>
    </div>
  )
}