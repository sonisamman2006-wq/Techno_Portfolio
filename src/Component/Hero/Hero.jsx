import React from "react";
import "./Hero.css";
import profile from "../../assets/image1 (1).jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="available">AVAILABLE FOR WORK</p>

        <h1>
          Hi, I'm <span>Samman</span>
        </h1>

        <h2>
          Frontend Developer & React Developer
        </h2>

        <p className="hero-text">
          I design and build modern, responsive and user-friendly websites
          using React.js, JavaScript, Bootstrap and CSS. Passionate about
          creating beautiful digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">

          <div>
            <h2>20+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2>10+</h2>
            <p>Certificates</p>
          </div>

          <div>
            <h2>1+</h2>
            <p>Years Learning</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-box">

          <img src={profile} alt="Profile" />

          {/* <div className="badge">
            Open to Work
          </div> */}

        </div>

      </div>

    </section>
  );
}

export default Hero;