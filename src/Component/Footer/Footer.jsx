import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">
          <h2>
            Sam<span>man</span>
          </h2>

          <p>
            Frontend Developer | React Developer
          </p>
        </div>

        <div className="footer-links">

          {/* <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a> */}

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 Samman Soni. All Rights Reserved.
        </p>

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;