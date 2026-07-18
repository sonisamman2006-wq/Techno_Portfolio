import React from "react";
import "./Portfolio.css";
import project1 from "../../assets/image3.jpg";
import project2 from "../../assets/image4.jpg";
import project3 from "../../assets/image6.jpg";

function Portfolio() {
  const projects = [
    {
      image: project1,
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio built with React, featuring responsive design, animations, and smooth scrolling.",

      technologies: ["React", "CSS", "JavaScript"],

      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },

    {
      image: project2,
      title: "E-Commerce Website",
      description:
        "Responsive shopping website with product listing, shopping cart and attractive UI.",

      technologies: ["React", "Bootstrap", "API"],

      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce.com",
    },

    {
      image: project3,
      title: "Weather App",
      description:
        "Weather forecasting application using OpenWeather API with clean responsive UI.",

      technologies: ["React", "REST API", "CSS"],

      github: "https://github.com/yourusername/weather",
      live: "https://weatherapp.com",
    },
  ];

  return (
    <section className="portfolio" id="projects">

      <p className="portfolio-subtitle">
        MY WORK
      </p>

      <h2 className="portfolio-title">
        Featured Projects
      </h2>

      <div className="portfolio-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Portfolio;