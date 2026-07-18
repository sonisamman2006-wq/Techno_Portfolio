import React from "react";
import "./About.css";
import aboutImage from "../../assets/portfolio.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="About" />
      </div>

      <div className="about-content">

        <p className="about-subtitle">ABOUT ME</p>

        <h2>
          A bit about <br /> who I am
        </h2>

        <p>
          I'm <span>Samman Soni</span>, a passionate Frontend Developer who
          enjoys building responsive and interactive web applications using
          React.js, JavaScript, Bootstrap, HTML, and CSS.
        </p>

        <p>
          I love learning modern technologies and creating beautiful user
          interfaces with clean, maintainable code.
        </p>

        <div className="skills">

          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Tailwind</span>

        </div>

      </div>

    </section>
  );
}

export default About;