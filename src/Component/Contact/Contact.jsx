import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <p className="contact-subtitle">CONTACT</p>

        <h2>Let's Work Together</h2>

        <p className="contact-text">
          I'm always interested in new opportunities, freelance projects,
          internships, and collaborations. Feel free to contact me.
        </p>

        <div className="contact-info">

          <div className="info-box">
            <FaEnvelope className="icon" />
            <span>samman@example.com</span>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <span>+91 9876543210</span>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <span>Rajasthan, India</span>
          </div>

        </div>

        <div className="social-icons">

          <a href="#"><FaGithub /></a>

          <a href="#"><FaLinkedin /></a>

        </div>

      </div>

      <div className="contact-right">

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;