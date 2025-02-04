import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or social media.</p>

      {/* Contact Form */}
      <form className="contact-form" action="https://formspree.io/f/xpwqrnrz" method="POST">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:your-email@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
